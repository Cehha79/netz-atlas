// Störfälle, Baustein „Engstellen“: Meerengen und Korridore, durch die besonders viele Kabel führen.
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js und daten/engstellen.js.
(() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const engstellen = window.NETZ_ENGSTELLEN || [];
  const quellen = window.NETZ_ENGSTELLEN_QUELLEN || {};
  if (!engstellen.length) return;
  let aktiv = engstellen[0].id;

  function bauen(ziel) {
    const kartenPlatz = el("div");
    const auskunftPlatz = el("div");
    const listenPlatz = el("div");
    const farbe = getComputedStyle(document.documentElement).getPropertyValue("--bernstein").trim();
    const marken = () => engstellen.map(e => ({ id: e.id, lat: e.lat, lon: e.lon, name: L(e.name), farbe, form: "raute", groesse: 6 }));
    let karte = null;

    function zeigen() {
      const e = engstellen.find(eintrag => eintrag.id === aktiv);
      const kasten = el("div", "auskunft");
      const kopf = el("div", "profil-kopf");
      kopf.append(el("h3", "", L(e.name)), el("span", "profil-status geplant", L(e.angabe)));
      const abschnitt = el("div", "profil-abschnitt");
      abschnitt.append(el("h4", "", T("allg.quellen")), H.quellenliste(e.quellen.map(id => quellen[id])));
      kasten.append(kopf, el("p", "profil-text", L(e.text)), abschnitt);
      auskunftPlatz.replaceChildren(kasten);
      const zeilen = engstellen.map(eintrag => {
        const knopf = el("button", "tabellenknopf", L(eintrag.name));
        knopf.type = "button";
        knopf.addEventListener("click", () => waehlen(eintrag.id));
        return { zellen: [knopf, L(eintrag.angabe)], klasse: eintrag.id === aktiv ? "gewaehlt" : "" };
      });
      listenPlatz.replaceChildren(H.tabelle("schmal", [T("eng.name"), T("eng.angabe")], zeilen));
    }

    function waehlen(id) {
      aktiv = id;
      zeigen();
      const e = engstellen.find(eintrag => eintrag.id === id);
      karte.setzen({ auswahl: { art: "marke", id } });
      karte.zielen(e.lon, e.lat, 3);
      Klang.doppelton();
    }

    const seite = el("div", "atlas-seite");
    const neben = el("div", "spalte");
    neben.append(auskunftPlatz, listenPlatz);
    seite.append(kartenPlatz, neben);
    ziel.replaceChildren(seite, H.erklaerung(T("eng.was"), T("eng.wasText")), H.grenze(T("eng.grenze")));
    karte = window.Karte.bauen(kartenPlatz, { kabel: window.NETZ_KABEL || [], orteZeigen: false, legende: [{ form: "raute", farbe, text: T("eng.name") }], marken: marken(), auswahl: { art: "marke", id: aktiv }, beiWahl: (art, id) => {
      if (art === "marke") waehlen(id);
    } });
    zeigen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.engstellen = { bauen };
})();
