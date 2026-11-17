// Methodik, Baustein „Pflege“: was in welchem Abstand geprüft wird.
// Braucht js/methodik.js.
(() => {
  "use strict";
  const { T, L } = window.Rahmen;
  const H = window.Hilfen;
  const plan = window.NETZ_PFLEGE || [];

  function bauen(ziel) {
    const zeilen = plan.map(eintrag => ({ zellen: [L(eintrag.abstand), L(eintrag.was), L(eintrag.wie)] }));
    ziel.replaceChildren(H.vermerk(T("met.pflegeText")), H.tabelle("pflege", [T("met.abstand"), T("met.was"), T("met.wie")], zeilen));
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.pflege = { bauen };
})();
