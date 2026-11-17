// Texte des Rahmens in Deutsch, Englisch und Türkisch.
// Jeder Eintrag braucht alle drei Sprachen; werkzeuge/pruefen.js kontrolliert das.
// Die Texte der einzelnen Seiten und Bausteine stehen in eigenen Dateien (js/texte-….js)
// und werden mit NETZ_TEXTE_DAZU in diese Sammlung aufgenommen.
window.NETZ_TEXTE = {
  "marke.unterzeile": { de: "Seekarte", en: "Sea chart", tr: "Deniz haritası" },
  "marke.projekt": { de: "Ein Projekt von MikaTec", en: "A project by MikaTec", tr: "Bir MikaTec projesi" },

  "nav.seitennavigation": { de: "Seitennavigation", en: "Site navigation", tr: "Site gezintisi" },
  "nav.bereiche": { de: "Bereiche", en: "Sections", tr: "Bölümler" },
  "nav.sprung": { de: "Zum Inhalt springen", en: "Skip to content", tr: "İçeriğe geç" },
  "nav.reiter": { de: "Bausteine dieser Seite", en: "Building blocks of this page", tr: "Bu sayfanın yapı taşları" },

  "kopf.sprache": { de: "Sprache", en: "Language", tr: "Dil" },
  "kopf.klangAn": { de: "Klang an", en: "Sound on", tr: "Ses açık" },
  "kopf.klangAus": { de: "Klang aus", en: "Sound off", tr: "Ses kapalı" },
  "kopf.bewegungAn": { de: "Bewegung an", en: "Motion on", tr: "Hareket açık" },
  "kopf.bewegungAus": { de: "Bewegung aus", en: "Motion off", tr: "Hareket kapalı" },


  "stand.geplant": { de: "Geplant", en: "Planned", tr: "Planlandı" },

  "fuss.version": { de: "Seitenversion", en: "Site version", tr: "Site sürümü" },
  "fuss.verweise": { de: "Rechtliches und Kontakt", en: "Legal and contact", tr: "Yasal bilgiler ve iletişim" },
  "fuss.datenschutz": { de: "Datenschutz", en: "Privacy", tr: "Gizlilik" },
  "fuss.impressum": { de: "Impressum", en: "Legal notice", tr: "Künye" },
  "fuss.kontakt": { de: "Kontakt", en: "Contact", tr: "İletişim" },
  "fuss.feedback": { de: "Feedback", en: "Feedback", tr: "Geri bildirim" },
  "fuss.spenden": { de: "Spenden", en: "Donate", tr: "Bağış" },

  "allg.quelle": { de: "Quelle", en: "Source", tr: "Kaynak" },
  "allg.quellen": { de: "Quellen", en: "Sources", tr: "Kaynaklar" },
  "allg.stand": { de: "Stand", en: "As of", tr: "Tarih" },
  "allg.geprueft": { de: "Geprüft am", en: "Checked on", tr: "Denetim tarihi" },
  "allg.offen": { de: "Nicht bestätigt", en: "Unconfirmed", tr: "Doğrulanmadı" },
  "allg.grenze": { de: "Grenze dieser Darstellung", en: "Limits of this illustration", tr: "Bu gösterimin sınırı" },
  "allg.naeherung": { de: "Näherung", en: "Approximation", tr: "Yaklaşık değer" },
  "allg.veranschaulichung": { de: "Veranschaulichung", en: "Illustration", tr: "Örnekleme" },
  "allg.schematisch": { de: "Verläufe schematisch", en: "Routes are schematic", tr: "Güzergâhlar şematiktir" },
  "allg.suche": { de: "Suche", en: "Search", tr: "Ara" },
  "allg.alle": { de: "Alle", en: "All", tr: "Tümü" },
  "allg.keinTreffer": { de: "Kein Treffer", en: "No match", tr: "Sonuç yok" }
};

// Nimmt die Texte einer Seite oder eines Bausteins in die Sammlung auf.
window.NETZ_TEXTE_DAZU = function (texte) {
  Object.assign(window.NETZ_TEXTE, texte);
};
