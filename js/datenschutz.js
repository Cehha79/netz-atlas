// Datenschutzseite: baut die Hinweise aus daten/datenschutz.js in der gewählten Sprache auf.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, L, el, tafel, sprache } = window.Rahmen;
  const { verweis, sprachkennung } = window.Hilfen;
  const Klang = window.Klang;
  const hinweise = window.NETZ_DATENSCHUTZ;
  const ziel = document.getElementById("datenschutz");
  if (!ziel || !hinweise) return;

  function bauen() {
    const [jahr, monat] = hinweise.stand.split("-").map(Number);
    const stand = new Intl.DateTimeFormat(sprachkennung(), { month: "long", year: "numeric" }).format(new Date(jahr, monat - 1, 1));
    const kasten = tafel(T("ds.tafel"), T("ds.stand") + " " + stand);
    const rumpf = el("div", "schaubild-rumpf rechtstext");

    const kurz = el("p", "rechtskurz");
    kurz.append(el("b", "", T("ds.kurz")), document.createTextNode(" " + L(hinweise.kurz)));
    const inhalt = el("div", "rechtsinhalt");
    inhalt.setAttribute("role", "group");
    inhalt.setAttribute("aria-label", T("ds.inhalt"));
    rumpf.append(kurz, inhalt);

    hinweise.abschnitte.forEach((abschnitt, nummer) => {
      const titel = el("h3", "", nummer + 1 + " · " + L(abschnitt.titel));
      titel.id = "abschnitt-" + (nummer + 1);
      titel.tabIndex = -1;
      const knopf = el("button", "", nummer + 1 + " · " + L(abschnitt.titel));
      knopf.type = "button";
      knopf.addEventListener("click", () => {
        titel.scrollIntoView({ behavior: window.Rahmen.bewegung() ? "smooth" : "auto", block: "start" });
        titel.focus({ preventScroll: true });
        Klang.ton(880, 0.3);
      });
      inhalt.append(knopf);
      rumpf.append(titel);
      for (const teil of abschnitt.teile) {
        if (teil.art === "absatz") {
          rumpf.append(el("p", "", L(teil.text)));
        } else if (teil.art === "liste") {
          const liste = el("ul");
          for (const punkt of teil.punkte) liste.append(el("li", "", L(punkt)));
          rumpf.append(el("p", "listentitel", L(teil.titel)), liste);
        } else if (teil.art === "verweise") {
          const liste = el("ul", "quellenliste");
          for (const eintrag of teil.liste) {
            const punkt = el("li");
            const link = verweis(eintrag.url, L(eintrag.name));
            // Eigennamen von Websites bleiben in jeder Sprache gleich geschrieben.
            if (typeof eintrag.name === "string") link.lang = "en";
            if (eintrag.url.startsWith("mailto:")) {
              link.removeAttribute("target");
              link.removeAttribute("rel");
            }
            punkt.append(link);
            liste.append(punkt);
          }
          rumpf.append(liste);
        }
      }
    });
    rumpf.append(el("p", "profil-notiz", L(hinweise.schluss) + (sprache() === "de" ? "" : " " + T("ds.vorlage"))));
    kasten.append(rumpf);
    ziel.replaceChildren(kasten);
  }

  document.addEventListener("sprachwechsel", bauen);
  bauen();
})();
