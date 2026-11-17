// Knoten, Baustein „Internet-Knoten“: Liste der ausgewählten Knoten, Profil und Lage auf der Karte.
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js und daten/knoten.js.
(() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const knoten = window.NETZ_KNOTEN || [];
  if (!knoten.length) return;
  const nachKennung = new Map(knoten.map(k => [k.id, k]));
  let aktiv = nachKennung.has(H.adressWahl("ixp")) ? H.adressWahl("ixp") : knoten[0].id;

  function bauen(ziel) {
    const liste = el("ul", "verz-liste");
    const profil = el("div", "profil");
    const kartenPlatz = el("div");
    let karte = null;

    function profilBauen() {
      const k = nachKennung.get(aktiv);
      const kopf = el("div", "profil-kopf");
      const ort = el("span", "profil-status", L(k.stadt) + " · " + H.landName(k.land));
      kopf.append(H.eigenname("h3", k.name), ort);
      const stamm = H.zahlen([
        { wert: k.netze === null ? T("allg.offen") : H.zahlText(k.netze), name: T("kno.netze") + (k.netzeStand ? " · " + H.datumText(k.netzeStand) : "") },
        { wert: k.spitzeGbit === null ? T("allg.offen") : H.zahlText(k.spitzeGbit) + " " + T("kno.gbit"), name: T("kno.spitze") + (k.spitzeStand ? " · " + H.datumText(k.spitzeStand) : "") },
        { wert: k.gegruendet || "–", name: T("kno.gegruendet") }
      ]);
      const angaben = el("dl", "profil-angaben");
      const betreiber = el("dd");
      betreiber.append(H.eigenname("span", k.betreiber));
      angaben.append(el("dt", "", T("kno.betreiber")), betreiber, el("dt", "", T("allg.geprueft")), el("dd", "", H.datumText(k.geprueftAm)));
      const quellen = el("div", "profil-abschnitt");
      quellen.append(el("h4", "", T("allg.quellen")), H.quellenliste(k.quellen));
      profil.replaceChildren(kopf, el("p", "profil-text", L(k.text)), stamm, angaben, quellen);
    }

    function waehlen(id, vonHand) {
      aktiv = id;
      for (const knopf of liste.querySelectorAll("button")) knopf.setAttribute("aria-pressed", String(knopf.dataset.id === id));
      profilBauen();
      const k = nachKennung.get(id);
      karte.setzen({ auswahl: { art: "knoten", id } });
      if (!vonHand) return;
      karte.zielen(k.lon, k.lat, 3);
      Klang.doppelton();
      H.adresseSetzen("ixp", id);
    }

    for (const k of [...knoten].sort((a, b) => a.name.localeCompare(b.name))) {
      const punkt = el("li");
      const knopf = el("button", "verz-eintrag");
      knopf.type = "button";
      knopf.dataset.id = k.id;
      knopf.setAttribute("aria-pressed", String(k.id === aktiv));
      knopf.append(H.eigenname("b", k.name), el("small", "", L(k.stadt)));
      knopf.addEventListener("click", () => waehlen(k.id, true));
      punkt.append(knopf);
      liste.append(punkt);
    }
    const verzeichnis = el("div", "verzeichnis");
    verzeichnis.append(liste);
    const rechts = el("div", "spalte");
    rechts.append(profil, kartenPlatz);
    const huelle = el("div", "zweispalter innen");
    huelle.append(verzeichnis, rechts);
    ziel.replaceChildren(huelle, H.erklaerung(T("kno.was"), T("kno.wasText")), H.grenze(T("kno.grenze")));
    karte = window.Karte.bauen(kartenPlatz, { knoten, orteZeigen: false, auswahl: { art: "knoten", id: aktiv }, beiWahl: (art, id) => {
      if (art === "knoten") waehlen(id, true);
    } });
    profilBauen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.ixp = { bauen };
})();
