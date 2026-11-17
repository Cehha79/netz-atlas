// Live, Baustein „Live-Ebenen“: Erdbeben (USGS), Ausfälle (IODA) und zurückgezogene Routen (RIPE RIS Live)
// auf der Karte. Abgerufen wird nur nach Klick; jede Ebene nennt vorher, an wen der Abruf geht.
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js und daten/land.js.
(() => {
  "use strict";
  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const mittelpunkte = (window.NETZ_LAND || { laender: {} }).laender;
  // Messstellen des RIPE NCC (Routing Information Service) mit ihrem Ort: Kennung -> [Breite, Länge, Ort].
  const messstellen = {
    rrc00: [52.37, 4.90, "Amsterdam"], rrc01: [51.51, -0.13, "London"], rrc03: [52.37, 4.90, "Amsterdam"], rrc04: [46.20, 6.14, "Genève"],
    rrc05: [48.21, 16.37, "Wien"], rrc06: [35.68, 139.77, "Tokyo"], rrc07: [59.33, 18.07, "Stockholm"], rrc10: [45.46, 9.19, "Milano"],
    rrc11: [40.71, -74.01, "New York"], rrc12: [50.11, 8.68, "Frankfurt"], rrc13: [55.75, 37.62, "Moskva"], rrc14: [37.44, -122.14, "Palo Alto"],
    rrc15: [-23.55, -46.63, "São Paulo"], rrc16: [25.76, -80.19, "Miami"], rrc18: [41.39, 2.17, "Barcelona"], rrc19: [-26.20, 28.05, "Johannesburg"],
    rrc20: [47.38, 8.54, "Zürich"], rrc21: [48.86, 2.35, "Paris"], rrc22: [44.43, 26.10, "București"], rrc23: [1.35, 103.82, "Singapore"],
    rrc24: [-34.90, -56.19, "Montevideo"], rrc25: [52.37, 4.90, "Amsterdam"], rrc26: [25.20, 55.27, "Dubai"]
  };
  const farbe = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const uhrzeit = zeit => new Intl.DateTimeFormat(H.sprachkennung(), { hour: "2-digit", minute: "2-digit" }).format(zeit);

  // Zustand der drei Ebenen; er übersteht einen Sprachwechsel.
  const beben = { daten: [], zeit: null, laeuft: false, fehler: false };
  const ausfaelle = { daten: [], zeit: null, laeuft: false, fehler: false };
  const bgp = { verbindung: null, zaehler: {}, gesamt: 0, ende: null, takt: null, schluss: null };
  let auffrischen = () => {};

  async function bebenHolen() {
    beben.laeuft = true;
    beben.fehler = false;
    auffrischen();
    try {
      const antwort = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", { cache: "no-store" });
      if (!antwort.ok) throw new Error("Antwort " + antwort.status);
      const daten = await antwort.json();
      beben.daten = (daten.features || []).map(f => {
        const k = (f.geometry && f.geometry.coordinates) || [];
        const p = f.properties || {};
        return { id: String(f.id), lon: Number(k[0]), lat: Number(k[1]), tiefe: Number(k[2]), staerke: Number(p.mag), ort: String(p.place || ""), zeit: Number(p.time) };
      }).filter(b => isFinite(b.lon) && isFinite(b.lat) && isFinite(b.staerke)).sort((a, b) => b.staerke - a.staerke);
      beben.zeit = new Date();
    } catch (_) {
      beben.fehler = true;
    }
    beben.laeuft = false;
    auffrischen();
  }

  async function ausfaelleHolen() {
    ausfaelle.laeuft = true;
    ausfaelle.fehler = false;
    auffrischen();
    try {
      const jetzt = Math.floor(Date.now() / 1000);
      const antwort = await fetch("https://api.ioda.inetintel.cc.gatech.edu/v2/outages/summary?from=" + (jetzt - 86400) + "&until=" + jetzt + "&entityType=country&limit=60", { cache: "no-store" });
      if (!antwort.ok) throw new Error("Antwort " + antwort.status);
      const daten = await antwort.json();
      ausfaelle.daten = (daten.data || []).map(x => {
        const land = String((x.entity && x.entity.code) || "").toUpperCase();
        const wert = x.scores ? Number(x.scores.overall != null ? x.scores.overall : x.scores["ping-slash24.median"]) : 0;
        return { land, wert: isFinite(wert) ? wert : 0, ort: mittelpunkte[land] };
      }).filter(a => /^[A-Z]{2}$/.test(a.land) && a.ort).sort((a, b) => b.wert - a.wert);
      ausfaelle.zeit = new Date();
    } catch (_) {
      ausfaelle.fehler = true;
    }
    ausfaelle.laeuft = false;
    auffrischen();
  }

  function bgpSchliessen() {
    if (bgp.verbindung) {
      const alt = bgp.verbindung;
      bgp.verbindung = null;
      try {
        alt.close();
      } catch (_) {
        bgp.ende = new Date();
      }
    }
    clearInterval(bgp.takt);
    clearTimeout(bgp.schluss);
    bgp.ende = new Date();
    auffrischen();
  }

  function bgpOeffnen() {
    bgp.zaehler = {};
    bgp.gesamt = 0;
    bgp.ende = null;
    let verbindung;
    try {
      verbindung = new WebSocket("wss://ris-live.ripe.net/v1/ws/?client=netz-atlas");
    } catch (_) {
      bgp.ende = new Date();
      auffrischen();
      return;
    }
    bgp.verbindung = verbindung;
    // Nur Meldungen mit zurückgezogenen Routen: rund ein Dreißigstel des vollen Stroms.
    verbindung.onopen = () => verbindung.send(JSON.stringify({ type: "ris_subscribe", data: { require: "withdrawals", socketOptions: { includeRaw: false } } }));
    verbindung.onmessage = ereignis => {
      let meldung;
      try {
        meldung = JSON.parse(ereignis.data);
      } catch (_) {
        return;
      }
      if (!meldung || meldung.type !== "ris_message" || !meldung.data) return;
      const stelle = String(meldung.data.host || "").split(".")[0];
      if (!messstellen[stelle]) return;
      bgp.zaehler[stelle] = (bgp.zaehler[stelle] || 0) + 1;
      bgp.gesamt++;
    };
    verbindung.onclose = () => {
      if (bgp.verbindung === verbindung) bgpSchliessen();
    };
    verbindung.onerror = () => {
      if (bgp.verbindung === verbindung) bgpSchliessen();
    };
    // Die Anzeige wird einmal je Sekunde erneuert; nach zwei Minuten endet die Verbindung von selbst.
    bgp.takt = setInterval(() => auffrischen(), 1000);
    bgp.schluss = setTimeout(bgpSchliessen, 120000);
    auffrischen();
  }

  // Eine verdeckte Seite braucht keine Dauerverbindung.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && bgp.verbindung) bgpSchliessen();
  });

  function bauen(ziel) {
    const kartenPlatz = el("div");
    const kopfBeben = el("div", "live-kopf");
    const kopfAusfaelle = el("div", "live-kopf");
    const kopfBgp = el("div", "live-kopf");
    const listen = el("div", "live-listen");
    let karte = null;

    function kopfBauen(platz, titel, text, hinweis, knopfText, tun, zustand, laeuft) {
      const knopf = el("button", "knopf", knopfText);
      knopf.type = "button";
      knopf.disabled = laeuft;
      knopf.addEventListener("click", () => {
        Klang.doppelton();
        tun();
      });
      platz.replaceChildren(el("h3", "", titel), el("p", "", text), el("p", "live-hinweis", hinweis), knopf, el("p", "live-zustand", zustand));
    }

    function marken() {
      const liste = [];
      for (const b of beben.daten) liste.push({ id: "beben-" + b.id, lat: b.lat, lon: b.lon, name: T("live.beben") + " " + H.zahlText(b.staerke, 1), farbe: farbe("--rot"), form: "ring", groesse: Math.max(3, (b.staerke - 1.5) * 2.2) });
      for (const a of ausfaelle.daten) liste.push({ id: "ausfall-" + a.land, lat: a.ort[0], lon: a.ort[1], name: H.landName(a.land), farbe: farbe("--bernstein"), form: "raute", groesse: 5 });
      for (const [stelle, zahl] of Object.entries(bgp.zaehler)) {
        const ort = messstellen[stelle];
        liste.push({ id: "bgp-" + stelle, lat: ort[0], lon: ort[1], name: stelle.toUpperCase() + " " + ort[2], farbe: farbe("--blau"), form: "kreis", groesse: Math.min(11, 3 + Math.log10(zahl + 1) * 2.4) });
      }
      return liste;
    }

    auffrischen = () => {
      if (!kartenPlatz.isConnected) return;
      const stand = (ebene, zahlwort) => (ebene.fehler ? T("live.fehler") : ebene.laeuft ? T("live.laeuft") : ebene.zeit ? T("live.abgerufen") + " " + uhrzeit(ebene.zeit) + " · " + ebene.daten.length + " " + zahlwort : T("live.nichts"));
      kopfBauen(kopfBeben, T("live.beben"), T("live.bebenText"), T("live.bebenAn"), beben.zeit ? T("live.neu") : T("live.abrufen"), bebenHolen, stand(beben, T("live.bebenZahl")), beben.laeuft);
      kopfBauen(kopfAusfaelle, T("live.ausfaelle"), T("live.ausfaelleText"), T("live.ausfaelleAn"), ausfaelle.zeit ? T("live.neu") : T("live.abrufen"), ausfaelleHolen, stand(ausfaelle, T("live.laenderZahl")), ausfaelle.laeuft);
      const bgpStand = bgp.verbindung ? T("live.bgpLaeuft") + " · " + H.zahlText(bgp.gesamt) + " " + T("live.meldungenZahl") : bgp.ende ? T("live.bgpEnde") + " " + uhrzeit(bgp.ende) + " · " + H.zahlText(bgp.gesamt) + " " + T("live.meldungenZahl") : T("live.nichts");
      kopfBauen(kopfBgp, T("live.bgp"), T("live.bgpText"), T("live.bgpAn"), bgp.verbindung ? T("live.ausschalten") : T("live.einschalten"), () => (bgp.verbindung ? bgpSchliessen() : bgpOeffnen()), bgpStand, false);
      karte.setzen({ marken: marken() });

      const teile = [];
      if (beben.daten.length) {
        const zeilen = beben.daten.slice(0, 12).map(b => ({ zellen: [H.zahlText(b.staerke, 1), b.ort, uhrzeit(new Date(b.zeit)), isFinite(b.tiefe) ? H.zahlText(b.tiefe) + " km" : "–"] }));
        teile.push(el("h3", "", T("live.beben")), H.tabelle("schmal", [T("live.staerke"), T("live.ortBeben"), T("live.zeit"), T("live.tiefe")], zeilen));
      }
      if (ausfaelle.daten.length) {
        const zeilen = ausfaelle.daten.slice(0, 12).map(a => ({ zellen: [H.landName(a.land), H.zahlText(a.wert)] }));
        teile.push(el("h3", "", T("live.ausfaelle")), H.tabelle("schmal", [T("live.land"), T("live.wert")], zeilen));
      }
      if (bgp.gesamt) {
        const zeilen = Object.entries(bgp.zaehler).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([stelle, zahl]) => ({ zellen: [H.eigenname("span", stelle.toUpperCase() + " · " + messstellen[stelle][2]), H.zahlText(zahl)] }));
        teile.push(el("h3", "", T("live.bgp")), H.tabelle("schmal", [T("live.messstelle"), T("live.meldungen")], zeilen));
      }
      listen.replaceChildren(...teile);
    };

    const koepfe = el("div", "live-koepfe");
    koepfe.append(kopfBeben, kopfAusfaelle, kopfBgp);
    ziel.replaceChildren(H.vermerk(T("live.vorab")), koepfe, kartenPlatz, listen, H.grenze(T("live.grenzeEbenen")));
    karte = window.Karte.bauen(kartenPlatz, { orteZeigen: false, legende: [
      { form: "ring", farbe: farbe("--rot"), text: T("live.beben") },
      { form: "raute", farbe: farbe("--bernstein"), text: T("live.ausfaelle") },
      { form: "kreis", farbe: farbe("--blau"), text: T("live.bgp") }
    ] });
    auffrischen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.ebenen = { bauen };
})();
