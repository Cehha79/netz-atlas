// Seiten mit Reitern: Reiter für die Bausteine und die Tafel, in der der gewählte Baustein steht.
// Jeder Baustein liegt in einer eigenen Datei (js/<seite>-<name>.js) und trägt sich in NETZ_SCHAUBILDER ein.
// Der Platz auf der Seite trägt als id die Kennung des Bereichs.
// Braucht js/rahmen.js; diese Datei wird nach den Bausteinen geladen.
(() => {
  "use strict";

  const { T, L, el, tafel, bereich } = window.Rahmen;
  const Klang = window.Klang;
  const schaubilder = window.NETZ_SCHAUBILDER || {};
  const ziel = document.getElementById(bereich.id);
  const vorhanden = bereich.bausteine.filter(baustein => schaubilder[baustein.id]);
  if (!ziel || !vorhanden.length) return;

  // In der Adresse steht der Baustein, wahlweise gefolgt von einer Auswahl darin (#karte=dunant).
  const ausAdresse = () => decodeURIComponent(window.location.hash.slice(1)).split("=")[0];
  let aktiv = schaubilder[ausAdresse()] ? ausAdresse() : vorhanden[0].id;

  function waehlen(id, vonHand) {
    if (!schaubilder[id]) return;
    aktiv = id;
    bauen();
    if (!vonHand) return;
    Klang.doppelton();
    try {
      window.history.replaceState(null, "", "#" + id);
    } catch (_) {
      return;
    }
  }

  function bauen() {
    const reiter = el("div", "reiter");
    reiter.setAttribute("role", "group");
    reiter.setAttribute("aria-label", T("nav.reiter"));
    bereich.bausteine.forEach((baustein, nummer) => {
      const knopf = el("button");
      knopf.type = "button";
      knopf.append(el("span", "", bereich.nr + "." + (nummer + 1)), document.createTextNode(L(baustein.name)));
      if (schaubilder[baustein.id]) {
        knopf.setAttribute("aria-pressed", String(baustein.id === aktiv));
        knopf.addEventListener("click", () => waehlen(baustein.id, true));
      } else {
        knopf.disabled = true;
        knopf.title = T("stand.geplant");
      }
      reiter.append(knopf);
    });
    const baustein = bereich.bausteine.find(eintrag => eintrag.id === aktiv);
    const kasten = tafel(L(baustein.name), L(baustein.text));
    const rumpf = el("div", "schaubild-rumpf");
    kasten.append(rumpf);
    ziel.replaceChildren(reiter, kasten);
    schaubilder[aktiv].bauen(rumpf);
  }

  document.addEventListener("sprachwechsel", bauen);
  window.addEventListener("hashchange", () => {
    if (schaubilder[ausAdresse()] && ausAdresse() !== aktiv) waehlen(ausAdresse(), false);
  });
  bauen();
})();
