// Live, Baustein „Deine Verbindung“: was der Browser selbst weiß, dazu Standort (GeoJS) und eine Messung
// (Cloudflare), beide nur nach Klick und nur einmal.
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js und daten/knoten.js.
(() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const knoten = window.NETZ_KNOTEN || [];
  const uhrzeit = zeit => new Intl.DateTimeFormat(H.sprachkennung(), { hour: "2-digit", minute: "2-digit" }).format(zeit);

  // Zustand; er übersteht einen Sprachwechsel.
  const ort = { daten: null, laeuft: false, fehler: false };
  const messung = { pings: [], herunter: null, hinauf: null, zeit: null, laeuft: false, fehler: false };
  let auffrischen = () => {};

  async function ortHolen() {
    ort.laeuft = true;
    ort.fehler = false;
    auffrischen();
    try {
      const antwort = await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "no-store" });
      if (!antwort.ok) throw new Error("Antwort " + antwort.status);
      const d = await antwort.json();
      if (!d || !d.ip) throw new Error("leer");
      ort.daten = { ip: String(d.ip), stadt: String(d.city || ""), land: String(d.country || ""), anbieter: String(d.organization_name || d.organization || ""), lat: parseFloat(d.latitude), lon: parseFloat(d.longitude) };
    } catch (_) {
      ort.fehler = true;
    }
    ort.laeuft = false;
    auffrischen();
  }

  async function einPing() {
    const beginn = performance.now();
    await fetch("https://speed.cloudflare.com/__down?bytes=0&t=" + Math.random(), { cache: "no-store" });
    return performance.now() - beginn;
  }

  async function messen() {
    Object.assign(messung, { pings: [], herunter: null, hinauf: null, zeit: null, laeuft: true, fehler: false });
    auffrischen();
    try {
      // Acht Durchgänge mit je drei kurzen Abrufen; aus jedem Durchgang zählt der mittlere Wert.
      for (let i = 0; i < 8; i++) {
        const drei = [await einPing(), await einPing(), await einPing()].sort((a, b) => a - b);
        messung.pings.push(drei[1]);
        auffrischen();
      }
      let beginn = performance.now();
      const antwort = await fetch("https://speed.cloudflare.com/__down?bytes=5000000&t=" + Math.random(), { cache: "no-store" });
      const inhalt = await antwort.arrayBuffer();
      messung.herunter = (inhalt.byteLength * 8 / 1e6) / Math.max(0.001, (performance.now() - beginn) / 1000);
      auffrischen();
      beginn = performance.now();
      await fetch("https://speed.cloudflare.com/__up", { method: "POST", body: new Uint8Array(2000000), cache: "no-store" });
      messung.hinauf = (2000000 * 8 / 1e6) / Math.max(0.001, (performance.now() - beginn) / 1000);
      messung.zeit = new Date();
    } catch (_) {
      messung.fehler = true;
    }
    messung.laeuft = false;
    auffrischen();
  }

  function bauen(ziel) {
    const lokalPlatz = el("div", "spalte");
    const ortPlatz = el("div", "spalte");
    const messPlatz = el("div", "spalte");
    const kartenPlatz = el("div");
    let karte = null;

    function knopf(text, tun, gesperrt) {
      const k = el("button", "knopf", text);
      k.type = "button";
      k.disabled = gesperrt;
      k.addEventListener("click", () => {
        Klang.doppelton();
        tun();
      });
      return k;
    }

    function lokalBauen() {
      const verbindung = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      let zeitzone = T("verb.unbekannt");
      try {
        zeitzone = Intl.DateTimeFormat().resolvedOptions().timeZone || zeitzone;
      } catch (_) {
        zeitzone = T("verb.unbekannt");
      }
      const angaben = el("dl", "profil-angaben");
      const zeile = (name, wert) => angaben.append(el("dt", "", name), el("dd", "", wert));
      zeile(T("verb.zeitzone"), zeitzone);
      zeile(T("verb.sprache"), navigator.language || T("verb.unbekannt"));
      zeile(T("verb.typ"), verbindung && verbindung.effectiveType ? String(verbindung.effectiveType).toUpperCase() : T("verb.unbekannt"));
      zeile(T("verb.schaetzung"), verbindung && verbindung.downlink ? H.zahlText(verbindung.downlink, 1) + " " + T("verb.mbit") : T("verb.unbekannt"));
      lokalPlatz.replaceChildren(H.erklaerung(T("verb.lokal"), T("verb.lokalText")), angaben);
    }

    auffrischen = () => {
      if (!ortPlatz.isConnected) return;
      const ortTeile = [H.erklaerung(T("verb.standort"), T("verb.standortText")), el("p", "live-hinweis", T("verb.standortAn")), knopf(ort.laeuft ? T("live.laeuft") : ort.daten ? T("live.neu") : T("verb.abfragen"), ortHolen, ort.laeuft)];
      if (ort.fehler) ortTeile.push(el("p", "live-zustand", T("live.fehler")));
      if (ort.daten) {
        const d = ort.daten;
        const angaben = el("dl", "profil-angaben");
        const zeile = (name, knoten) => {
          const wert = el("dd");
          wert.append(knoten);
          angaben.append(el("dt", "", name), wert);
        };
        zeile(T("verb.ort"), H.eigenname("span", [d.stadt, d.land].filter(Boolean).join(", ") || "–"));
        zeile(T("verb.ip"), d.ip);
        zeile(T("verb.anbieter"), H.eigenname("span", d.anbieter || "–"));
        if (isFinite(d.lat) && isFinite(d.lon) && knoten.length) {
          const naechster = knoten.map(k => ({ k, km: window.Karte.entfernung([d.lat, d.lon], [k.lat, k.lon]) })).sort((a, b) => a.km - b.km)[0];
          const link = H.eigenname("a", naechster.k.name);
          link.href = "knoten.html#ixp=" + naechster.k.id;
          const wert = el("span");
          wert.append(link, document.createTextNode(" · " + H.zahlText(naechster.km) + " " + T("verb.luftlinie")));
          zeile(T("verb.naechster"), wert);
        }
        ortTeile.push(angaben);
      }
      ortPlatz.replaceChildren(...ortTeile);
      if (karte) {
        const d = ort.daten;
        const marken = d && isFinite(d.lat) && isFinite(d.lon) ? [{ id: "ich", lat: d.lat, lon: d.lon, name: [d.stadt, d.land].filter(Boolean).join(", "), form: "kreis", groesse: 5 }] : [];
        karte.setzen({ marken, auswahl: marken.length ? { art: "marke", id: "ich" } : null });
        if (marken.length) karte.zielen(d.lon, d.lat, 2.4);
      }

      const pings = messung.pings;
      const mitte = pings.length ? [...pings].sort((a, b) => a - b)[Math.floor(pings.length / 2)] : null;
      const schnitt = pings.length ? pings.reduce((a, b) => a + b, 0) / pings.length : 0;
      const schwankung = pings.length >= 4 ? Math.sqrt(pings.reduce((a, b) => a + (b - schnitt) ** 2, 0) / pings.length) : null;
      const zahl = (wert, stellen, einheit) => (wert === null ? "–" : H.zahlText(wert, stellen) + " " + einheit);
      const messTeile = [
        H.erklaerung(T("verb.messung"), T("verb.messungText")),
        el("p", "live-hinweis", T("verb.messungAn")),
        knopf(messung.laeuft ? T("verb.misst") : messung.zeit ? T("live.neu") : T("verb.messen"), messen, messung.laeuft),
        H.zahlen([
          { wert: zahl(mitte, 0, T("verb.ms")), name: T("verb.antwortzeit"), klasse: "betont" },
          { wert: zahl(schwankung, 0, T("verb.ms")), name: T("verb.schwankung") },
          { wert: zahl(messung.herunter, 1, T("verb.mbit")), name: T("verb.herunter") },
          { wert: zahl(messung.hinauf, 1, T("verb.mbit")), name: T("verb.hinauf") }
        ])
      ];
      if (pings.length) {
        const groesste = Math.max(...pings, 1);
        const reihe = el("div", "live-saeulen");
        reihe.setAttribute("role", "img");
        reihe.setAttribute("aria-label", T("verb.antwortzeit") + ": " + pings.map(p => H.zahlText(p, 0)).join(", ") + " " + T("verb.ms"));
        for (const p of pings) {
          const saeule = el("i");
          saeule.style.setProperty("--h", Math.max(6, (p / groesste) * 100) + "%");
          reihe.append(saeule);
        }
        messTeile.push(reihe);
      }
      if (messung.fehler) messTeile.push(el("p", "live-zustand", T("live.fehler")));
      if (messung.zeit) messTeile.push(el("p", "live-zustand", T("verb.gemessen") + " " + uhrzeit(messung.zeit)));
      messPlatz.replaceChildren(...messTeile);
    };

    ziel.replaceChildren(H.vermerk(T("live.vorab")), H.zwei([lokalPlatz, ortPlatz, kartenPlatz], [messPlatz, H.erklaerung(T("verb.bedeutung"), T("verb.bedeutungText"))]), H.grenze(T("verb.grenze")));
    karte = window.Karte.bauen(kartenPlatz, { knoten, orteZeigen: false });
    lokalBauen();
    auffrischen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.verbindung = { bauen };
})();
