// Methodik, Baustein „Datenstand“: Umfang, jüngstes Prüfdatum und offene Angaben je Datenart,
// berechnet aus den Datendateien.
// Braucht js/methodik.js.
(() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const M = window.Methodik;

  function bauen(ziel) {
    const zahlKopf = el("th", "zahl", T("met.offen"));
    const zeilen = M.arten.map(art => {
      const w = M.werte(art.id);
      return { zellen: [L(art.name), w.umfang, w.laufend ? T("met.laufend") : w.datum ? H.datumText(w.datum) : T("met.ohneDatum"), w.offen === null ? "–" : String(w.offen)] };
    });
    const tabelle = H.tabelle("stand", [T("met.datenart"), T("met.umfang"), T("met.geprueft"), zahlKopf], zeilen);
    for (const reihe of tabelle.querySelectorAll("tr")) {
      const zellen = reihe.querySelectorAll("td");
      if (zellen.length) zellen[3].className = "zahl";
    }
    ziel.replaceChildren(tabelle, H.vermerk(T("met.standText")));
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.stand = { bauen };
})();
