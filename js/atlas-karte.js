// Atlas, Baustein „Flache Karte“: alle ausgewählten Kabel, Anlandeorte und Knoten auf der flächentreuen
// Weltkarte, mit Filter, Suche und Auskunft zur Auswahl. Die Auswahl steht in der Adresse (#karte=dunant).
// Braucht js/atlas.js.
(() => {
  "use strict";
  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const A = window.Atlas;
  if (!A.kabel.length) return;
  const gebiete = ["atlantik", "nord-ostsee", "arktis", "mittelmeer", "europa-asien", "afrika", "indik", "asien", "pazifik"].filter(g => A.kabel.some(k => k.gebiet === g));
  const gebietText = { atlantik: () => T("gebiet.atlantik"), afrika: () => T("gebiet.afrika"), mittelmeer: () => T("gebiet.mittelmeer"), "nord-ostsee": () => T("gebiet.nord-ostsee"), arktis: () => T("gebiet.arktis"), "europa-asien": () => T("gebiet.europa-asien"), pazifik: () => T("gebiet.pazifik"), asien: () => T("gebiet.asien"), indik: () => T("gebiet.indik") };
  const erste = H.adressWahl("karte");
  let auswahl = A.finden.kabel.has(erste) ? { art: "kabel", id: erste } : null;
  let status = "alle";
  let gebiet = "alle";
  let knotenAn = true;
  let frage = "";

  function bauen(ziel) {
    const kartenPlatz = el("div");
    const auskunftPlatz = el("div");
    const listenPlatz = el("div");
    const trefferPlatz = el("div", "atlas-treffer");
    const zaehler = el("p", "verz-zahl");
    let karte = null;

    const gezeigt = () => A.kabel.filter(k => (status === "alle" || k.status === status) && (gebiet === "alle" || k.gebiet === gebiet));

    function auffrischen() {
      const liste = gezeigt();
      karte.setzen({ kabel: liste, knoten: knotenAn ? A.knoten : [], auswahl });
      zaehler.textContent = liste.length + " / " + A.kabel.length + " " + T("atl.gezeigt");
      auskunftPlatz.replaceChildren(A.auskunft(auswahl));
      listenPlatz.replaceChildren(A.kabelListe(liste, auswahl, waehlen));
    }

    function waehlen(art, id, ohneTon) {
      auswahl = { art, id };
      auffrischen();
      const eintrag = A.finden[art].get(id);
      if (art === "kabel") karte.einpassen(window.Karte.kabelweg(eintrag));
      else karte.zielen(eintrag.lon, eintrag.lat, 3.2);
      H.adresseSetzen("karte", art === "kabel" ? id : "");
      if (!ohneTon) Klang.doppelton();
    }

    function suchen() {
      if (frage.length < 2) {
        trefferPlatz.replaceChildren();
        return;
      }
      const f = H.klein(frage);
      const funde = [];
      for (const k of A.kabel) if (H.klein(k.name).includes(f)) funde.push({ art: "kabel", id: k.id, name: k.name, zusatz: T("karte.kabel") });
      for (const o of A.orte) if (H.klein(o.name + " " + H.landName(o.land)).includes(f)) funde.push({ art: "ort", id: o.id, name: o.name, zusatz: T("karte.ort") + " · " + o.land });
      for (const k of A.knoten) if (H.klein(k.name).includes(f)) funde.push({ art: "knoten", id: k.id, name: k.name, zusatz: T("karte.knoten") });
      if (!funde.length) {
        trefferPlatz.replaceChildren(el("p", "verz-leer", T("allg.keinTreffer")));
        return;
      }
      const reihe = el("div", "atlas-knoepfe");
      for (const fund of funde.slice(0, 14)) {
        const knopf = el("button");
        knopf.type = "button";
        knopf.append(H.eigenname("b", fund.name), el("small", "", " " + fund.zusatz));
        knopf.addEventListener("click", () => waehlen(fund.art, fund.id));
        reihe.append(knopf);
      }
      trefferPlatz.replaceChildren(reihe);
    }

    const suche = el("div", "eingabe");
    const feld = el("input");
    feld.type = "search";
    feld.autocomplete = "off";
    feld.placeholder = T("atl.suchfeld");
    feld.setAttribute("aria-label", T("atl.suchfeld"));
    feld.value = frage;
    feld.addEventListener("input", () => {
      frage = feld.value.trim();
      suchen();
    });
    suche.append(feld);

    const statusWahl = H.umschalter(T("atl.zeigen"), [
      { wert: "alle", text: T("allg.alle") }, { wert: "betrieb", text: T("karte.betrieb") }, { wert: "geplant", text: T("karte.geplant") }, { wert: "stillgelegt", text: T("karte.stillgelegt") }
    ], status, wert => {
      status = wert;
      auffrischen();
    });
    const gebietWahl = H.auswahl(T("atl.gebiet"), [{ wert: "alle", text: T("atl.alleGebiete") }, ...gebiete.map(g => ({ wert: g, text: gebietText[g]() }))], gebiet, wert => {
      gebiet = wert;
      auffrischen();
    });
    const knotenWahl = H.umschalter(T("atl.knotenZeigen"), [{ wert: "an", text: T("atl.knotenZeigen") }], knotenAn ? "an" : "aus", () => {
      knotenAn = !knotenAn;
      knotenWahl.firstChild.setAttribute("aria-pressed", String(knotenAn));
      auffrischen();
    });
    const leiste = el("div", "atlas-leiste");
    leiste.append(suche, gebietWahl, statusWahl, knotenWahl);

    const seite = el("div", "atlas-seite");
    const neben = el("div", "spalte");
    neben.append(auskunftPlatz, zaehler);
    seite.append(kartenPlatz, neben);
    ziel.replaceChildren(leiste, trefferPlatz, seite, listenPlatz, H.erklaerung(T("allg.schematisch"), T("atl.projektion")), H.grenze(T("atl.grenze")));
    karte = window.Karte.bauen(kartenPlatz, { kabel: gezeigt(), knoten: A.knoten, auswahl, beiWahl: (art, id) => waehlen(art, id) });
    auffrischen();
    suchen();
    if (auswahl) karte.einpassen(window.Karte.kabelweg(A.finden.kabel.get(auswahl.id)));
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.karte = { bauen };
})();
