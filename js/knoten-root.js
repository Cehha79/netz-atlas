// Knoten, Baustein „Root-Server“: die 13 Namen der obersten DNS-Ebene mit Betreiber und Zahl der Instanzen.
// Braucht js/rahmen.js, js/hilfen.js und daten/rootserver.js.
(() => {
  "use strict";
  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const root = window.NETZ_ROOT;
  if (!root || !(root.server || []).length) return;

  function bauen(ziel) {
    const kennzahlen = H.zahlen([
      { wert: String(root.server.length), name: T("root.namen") },
      { wert: H.zahlText(root.betreiberGesamt), name: T("root.betreiber") },
      { wert: H.zahlText(root.instanzenGesamt), name: T("root.instanzen"), klasse: "betont" },
      { wert: H.datumText(root.stand), name: T("allg.stand") }
    ]);
    const zahlKopf = text => el("th", "zahl", text);
    const zeilen = root.server.map(s => {
      const anzahl = el("span", "", H.zahlText(s.instanzen));
      const laender = el("span", "", typeof s.laender === "number" ? H.zahlText(s.laender) : "–");
      return { zellen: [s.buchstabe, H.eigenname("span", s.name), H.eigenname("span", s.betreiber), anzahl, laender] };
    });
    const tabelle = H.tabelle("root", [T("root.buchstabe"), T("root.name"), T("kno.betreiber"), zahlKopf(T("root.anzahl")), zahlKopf(T("root.laender"))], zeilen);
    for (const reihe of tabelle.querySelectorAll("tr")) {
      const zellen = reihe.querySelectorAll("td");
      if (zellen.length) {
        zellen[3].className = "zahl";
        zellen[4].className = "zahl";
      }
    }
    const quellen = el("div", "profil-abschnitt");
    quellen.append(el("h4", "", T("allg.quellen")), H.quellenliste(root.quellen));
    ziel.replaceChildren(kennzahlen, tabelle, H.zwei([H.erklaerung(T("root.was"), T("root.wasText"))], [H.erklaerung(T("root.viele"), T("root.vieleText"))]), H.grenze(T("root.grenze")), quellen);
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.root = { bauen };
})();
