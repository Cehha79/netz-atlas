// Methodik, Baustein „Grenzen“: was die Website nicht zeigt und nicht kann.
// Braucht js/methodik.js.
(() => {
  "use strict";
  const { L, el } = window.Rahmen;
  const grenzen = window.NETZ_GRENZEN || [];

  function bauen(ziel) {
    const liste = el("ol", "grenzliste");
    for (const grenze of grenzen) liste.append(el("li", "", L(grenze)));
    ziel.replaceChildren(liste);
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.grenzen = { bauen };
})();
