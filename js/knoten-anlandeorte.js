// Knoten, Baustein „Anlandeorte“: alle Orte, an denen die Kabel der Auswahl an Land gehen.
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js und daten/kabel.js.
(() => {
  "use strict";
  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const kabel = window.NETZ_KABEL || [];
  if (!kabel.length) return;
  const orte = window.Karte.orteAus(kabel).sort((a, b) => b.kabel.length - a.kabel.length || a.name.localeCompare(b.name));
  const nachKennung = new Map(orte.map(o => [o.id, o]));
  const kabelNach = new Map(kabel.map(k => [k.id, k]));
  let aktiv = nachKennung.has(H.adressWahl("anlandeorte")) ? H.adressWahl("anlandeorte") : orte[0].id;
  let frage = "";

  function bauen(ziel) {
    const liste = el("ul", "verz-liste");
    const zaehler = el("p", "verz-zahl");
    const profil = el("div", "profil");
    const kartenPlatz = el("div");
    let karte = null;

    function listeBauen() {
      const sichtbar = orte.filter(o => !frage || H.klein(o.name + " " + H.landName(o.land)).includes(H.klein(frage)));
      const punkte = sichtbar.map(o => {
        const punkt = el("li");
        const knopf = el("button", "verz-eintrag");
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(o.id === aktiv));
        knopf.append(H.eigenname("b", o.name), el("small", "", o.land + " · " + o.kabel.length));
        knopf.addEventListener("click", () => waehlen(o.id, true));
        punkt.append(knopf);
        return punkt;
      });
      liste.replaceChildren(...punkte);
      zaehler.textContent = sichtbar.length ? sichtbar.length + " / " + orte.length + " " + T("anl.orte") : T("allg.keinTreffer");
    }

    function profilBauen() {
      const o = nachKennung.get(aktiv);
      const kopf = el("div", "profil-kopf");
      kopf.append(H.eigenname("h3", o.name), el("span", "profil-status", H.landName(o.land)));
      const zeilen = o.kabel.map(id => kabelNach.get(id)).sort((a, b) => a.name.localeCompare(b.name)).map(k => {
        const link = H.eigenname("a", k.name);
        link.href = "kabel.html#" + k.id;
        return { zellen: [link, k.inBetrieb ? String(k.inBetrieb).slice(0, 4) : "–", k.status === "betrieb" ? T("karte.betrieb") : k.status === "geplant" ? T("karte.geplant") : T("karte.stillgelegt")] };
      });
      const abschnitt = el("div", "profil-abschnitt");
      abschnitt.append(el("h4", "", T("anl.kabel") + " (" + o.kabel.length + ")"), H.tabelle("schmal", [T("karte.kabel"), T("feld.inBetrieb"), T("kab.status")], zeilen));
      profil.replaceChildren(kopf, abschnitt);
    }

    function waehlen(id, vonHand) {
      aktiv = id;
      listeBauen();
      profilBauen();
      const o = nachKennung.get(id);
      karte.setzen({ auswahl: { art: "ort", id } });
      if (!vonHand) return;
      karte.zielen(o.lon, o.lat, 3.5);
      Klang.doppelton();
      H.adresseSetzen("anlandeorte", id);
    }

    const suche = el("div", "eingabe verz-suche");
    const feld = el("input");
    feld.type = "search";
    feld.autocomplete = "off";
    feld.placeholder = T("anl.suchfeld");
    feld.setAttribute("aria-label", T("anl.suchfeld"));
    feld.value = frage;
    feld.addEventListener("input", () => {
      frage = feld.value.trim();
      listeBauen();
    });
    suche.append(feld, zaehler);
    const verzeichnis = el("div", "verzeichnis");
    verzeichnis.append(liste);
    const links = el("div", "spalte");
    links.append(suche, verzeichnis);
    const rechts = el("div", "spalte");
    rechts.append(profil, kartenPlatz);
    const huelle = el("div", "zweispalter innen");
    huelle.append(links, rechts);
    ziel.replaceChildren(huelle, H.erklaerung(T("anl.was"), T("anl.wasText")), H.grenze(T("anl.grenze")));
    karte = window.Karte.bauen(kartenPlatz, { kabel, auswahl: { art: "ort", id: aktiv }, beiWahl: (art, id) => {
      if (art === "ort") waehlen(id, true);
    } });
    listeBauen();
    profilBauen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.anlandeorte = { bauen };
})();
