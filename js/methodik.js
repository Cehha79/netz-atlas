// Methodik: rechnet Umfang, jüngstes Prüfdatum und Zahl der Einträge mit offenen Angaben je Datenart
// aus den Datendateien. Die Bausteine der Seite lesen diese Werte.
// Braucht js/rahmen.js, js/hilfen.js, daten/methodik.js und die Datendateien der Website.
window.Methodik = (() => {
  "use strict";
  const { T } = window.Rahmen;
  const arten = window.NETZ_DATENARTEN || [];
  const kabel = window.NETZ_KABEL || [];
  const knoten = window.NETZ_KNOTEN || [];
  const root = window.NETZ_ROOT || { server: [] };
  const vorfaelle = window.NETZ_VORFAELLE || [];
  const engstellen = window.NETZ_ENGSTELLEN || [];
  const kennzahlen = window.NETZ_KENNZAHLEN || [];
  const glossar = window.NETZ_GLOSSAR || [];
  const seewege = window.NETZ_SEEWEGE || { punkte: {} };
  const juengstes = liste => liste.map(e => e.geprueftAm).filter(Boolean).sort().pop() || null;
  const schaubilder = ((window.NETZ_BEREICHE || []).find(b => b.id === "technik") || { bausteine: [] }).bausteine.length - 1;

  // Je Datenart: Umfang als Text, Prüfdatum (oder null) und Zahl der Einträge mit offenen Angaben (oder null).
  const werte = {
    kabel: () => ({ umfang: kabel.length + " " + T("met.kabel"), datum: juengstes(kabel), offen: kabel.filter(k => (k.offen || []).length).length }),
    verlauf: () => ({ umfang: Object.keys(seewege.punkte).length + " " + T("met.seepunkte"), datum: null, offen: null }),
    knoten: () => ({ umfang: knoten.length + " " + T("met.knoten"), datum: juengstes(knoten), offen: knoten.filter(k => (k.offen || []).length).length }),
    root: () => ({ umfang: root.server.length + " " + T("met.namen"), datum: root.stand || null, offen: null }),
    vorfaelle: () => ({ umfang: vorfaelle.length + " " + T("met.faelle"), datum: juengstes(vorfaelle), offen: vorfaelle.filter(v => (v.offen || []).length).length }),
    engstellen: () => ({ umfang: engstellen.length + " " + T("met.engstellen"), datum: (window.NETZ_ENGSTELLEN_STAND || {}).geprueftAm || null, offen: null }),
    kennzahlen: () => ({ umfang: kennzahlen.length + " " + T("met.zahlen"), datum: juengstes(kennzahlen), offen: null }),
    land: () => ({ umfang: ((window.NETZ_LAND || { ringe: [] }).ringe.length || "–") + " " + T("met.umrisse"), datum: null, offen: null }),
    technik: () => ({ umfang: schaubilder + " " + T("met.schaubilder") + ", " + glossar.length + " " + T("met.begriffe"), datum: null, offen: null }),
    live: () => ({ umfang: "5 " + T("met.quellen"), datum: null, offen: null, laufend: true })
  };

  return { arten, werte: id => (werte[id] ? werte[id]() : { umfang: "–", datum: null, offen: null }) };
})();
