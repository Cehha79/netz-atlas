// Störfälle, Baustein „Fälle“: Karte und Liste aller Fälle, mit Auskunft und Quellen zum gewählten Fall.
// Braucht js/stoerfaelle.js und js/karte.js.
(() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const S = window.Stoerfaelle;
  if (!S.liste.length) return;
  let filter = "alle";
  let aktiv = S.nachKennung.has(H.adressWahl("faelle")) ? H.adressWahl("faelle") : S.liste[0].id;

  function bauen(ziel) {
    const kartenPlatz = el("div");
    const auskunftPlatz = el("div");
    const listenPlatz = el("div");
    let karte = null;
    const gezeigt = () => S.liste.filter(f => filter === "alle" || f.art === filter);

    function listeBauen() {
      const zeilen = gezeigt().map(fall => {
        const knopf = el("button", "tabellenknopf", L(fall.titel));
        knopf.type = "button";
        knopf.addEventListener("click", () => waehlen(fall.id, true));
        return { zellen: [H.datumText(fall.datum), knopf, S.artText(fall.art), S.ursacheText(fall)], klasse: fall.id === aktiv ? "gewaehlt" : "" };
      });
      listenPlatz.replaceChildren(H.tabelle("faelle", [T("stf.datum"), T("stf.fall"), T("stf.art"), T("stf.ursache")], zeilen));
    }

    function waehlen(id, vonHand) {
      aktiv = id;
      const fall = S.nachKennung.get(id);
      auskunftPlatz.replaceChildren(S.auskunft(fall));
      karte.setzen({ marken: S.marken(gezeigt()), auswahl: { art: "marke", id } });
      listeBauen();
      if (!vonHand) return;
      if (fall.ort) karte.zielen(fall.ort.lon, fall.ort.lat, 2.6);
      H.adresseSetzen("faelle", id);
      Klang.doppelton();
    }

    const wahl = H.umschalter(T("stf.filter"), [{ wert: "alle", text: T("allg.alle") }, { wert: "kabel", text: T("stf.kabel") }, { wert: "routing", text: T("stf.routing") }], filter, wert => {
      filter = wert;
      if (!gezeigt().some(f => f.id === aktiv)) aktiv = gezeigt()[0].id;
      waehlen(aktiv, false);
    });
    // Reihenfolge Karte, Auskunft, Liste: In schmalen Fenstern steht die Auskunft so direkt unter der Karte.
    const seite = el("div", "atlas-seite geteilt");
    seite.append(kartenPlatz, auskunftPlatz, listenPlatz);
    ziel.replaceChildren(wahl, seite, H.grenze(T("stf.grenze")));
    karte = window.Karte.bauen(kartenPlatz, { orteZeigen: false, legende: S.legende(), marken: S.marken(gezeigt()), auswahl: { art: "marke", id: aktiv }, beiWahl: (art, id) => {
      if (art === "marke") waehlen(id, true);
    } });
    waehlen(aktiv, false);
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.faelle = { bauen };
})();
