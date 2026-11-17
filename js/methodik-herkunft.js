// Methodik, Baustein „Datenherkunft“: jede Datenart mit ihrer Herkunft und der Art der Pflege.
// Braucht js/methodik.js.
(() => {
  "use strict";
  const { T, L } = window.Rahmen;
  const H = window.Hilfen;
  const M = window.Methodik;

  function bauen(ziel) {
    const zeilen = M.arten.map(art => ({ zellen: [L(art.name), L(art.herkunft), L(art.pflege)] }));
    ziel.replaceChildren(H.erklaerung(T("met.grundsatz"), T("met.grundsatzText")), H.tabelle("herkunft", [T("met.datenart"), T("met.herkunft"), T("met.pflege")], zeilen), H.vermerk(T("met.fehlerMelden")));
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.herkunft = { bauen };
})();
