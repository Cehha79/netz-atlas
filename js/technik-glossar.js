// Technik, Baustein „Glossar“: die Fachbegriffe der Website, nach dem Alphabet der gewählten Sprache
// geordnet, mit Suchfeld und Verweisen auf verwandte Begriffe.
// Braucht js/rahmen.js und js/hilfen.js sowie daten/glossar.js.
(() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const begriffe = window.NETZ_GLOSSAR || [];
  const nachKennung = new Map(begriffe.map(eintrag => [eintrag.id, eintrag]));

  // Texte, an denen die Erklärungen geprüft wurden.
  const quellen = [
    { name: "RFC 1983: Internet Users' Glossary", url: "https://www.rfc-editor.org/rfc/rfc1983", datum: "1996-08" },
    { name: "RFC 4271: A Border Gateway Protocol 4 (BGP-4)", url: "https://www.rfc-editor.org/rfc/rfc4271", datum: "2006-01" },
    { name: "RFC 4786: Operation of Anycast Services", url: "https://www.rfc-editor.org/rfc/rfc4786", datum: "2006-12" },
    { name: "RFC 7908: Problem Definition and Classification of BGP Route Leaks", url: "https://www.rfc-editor.org/rfc/rfc7908", datum: "2016-06" },
    { name: "RFC 9499: DNS Terminology", url: "https://www.rfc-editor.org/rfc/rfc9499", datum: "2024-03" },
    { name: "ICPC: About Submarine Telecommunications Cables", url: "https://www.iscpc.org/documents/?id=1753", datum: "2011-10" }
  ];

  // Zustand: Der Suchtext übersteht einen Sprachwechsel.
  let suchtext = "";
  // Laufende Uhr der Hervorhebung nach einem Sprung.
  let uhr = 0;

  // Macht Texte vergleichbar: Kleinschreibung nach den Regeln der Sprache (im Türkischen wird I zu ı
  // und İ zu i), danach ohne Akzente und ohne den Unterschied zwischen ı und i. So findet „ip“ auch
  // im Türkischen „IP adresi“ und „cozumleyici“ den Begriff „Çözümleyici“.
  function falten(text, kennung) {
    return text.toLocaleLowerCase(kennung).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i");
  }

  function bauen(ziel) {
    const kennung = H.sprachkennung();
    const ordnung = new Intl.Collator(kennung);
    const geordnet = [...begriffe].sort((a, b) => ordnung.compare(L(a.begriff), L(b.begriff)));

    // Suchfeld mit Beschriftung und der Zeile „x von y Begriffen“.
    const eingabe = el("div", "eingabe");
    const beschriftung = el("label", "", T("glo.suche"));
    beschriftung.htmlFor = "glo-suchfeld";
    const feld = el("input");
    feld.type = "search";
    feld.id = "glo-suchfeld";
    feld.maxLength = 60;
    feld.autocomplete = "off";
    feld.spellcheck = false;
    feld.placeholder = T("glo.beispiel");
    feld.value = suchtext;
    eingabe.append(beschriftung, feld);
    const zahl = el("p", "glo-zahl");
    zahl.setAttribute("role", "status");
    const kopf = el("div", "glo-kopf");
    kopf.append(eingabe, zahl);

    // Die Liste: je Begriff eine Gruppe aus Begriff, Erklärung und Verweisen.
    const liste = el("dl", "glo-liste");
    const zeilen = geordnet.map(eintrag => {
      const begriff = L(eintrag.begriff);
      const englisch = eintrag.begriff.en;
      const gruppe = el("div", "glo-eintrag");
      gruppe.id = "glo-" + eintrag.id;
      gruppe.tabIndex = -1;
      const titel = el("dt", "", begriff);
      // Die englische Bezeichnung hilft beim Wiedererkennen, wenn sie im Begriff noch nicht steckt.
      if (!falten(begriff, kennung).includes(falten(englisch, kennung))) {
        const zusatz = el("span", "glo-englisch", englisch);
        zusatz.lang = "en";
        titel.append(document.createTextNode(" "), zusatz);
      }
      gruppe.append(titel, el("dd", "", L(eintrag.text)));
      const verwandte = (eintrag.siehe || []).filter(id => nachKennung.has(id));
      if (verwandte.length) {
        const verweise = el("dd", "glo-siehe");
        verweise.append(el("span", "", T("glo.siehe") + ":"));
        for (const id of verwandte) {
          const knopf = el("button", "", L(nachKennung.get(id).begriff));
          knopf.type = "button";
          knopf.addEventListener("click", () => springen(id));
          verweise.append(knopf);
        }
        gruppe.append(verweise);
      }
      liste.append(gruppe);
      return { id: eintrag.id, knoten: gruppe, heu: falten(begriff + " " + englisch + " " + L(eintrag.text), kennung) };
    });
    const leer = el("p", "hinweis", T("allg.keinTreffer"));

    // Zeigt nur die Begriffe, in denen jedes Wort der Suche vorkommt.
    function filtern() {
      const worte = falten(suchtext, kennung).split(/\s+/).filter(Boolean);
      let sichtbar = 0;
      for (const zeile of zeilen) {
        const passt = worte.every(wort => zeile.heu.includes(wort));
        zeile.knoten.hidden = !passt;
        if (passt) sichtbar++;
      }
      zahl.textContent = T("glo.zahl").replace("{x}", H.zahlText(sichtbar)).replace("{y}", H.zahlText(zeilen.length));
      liste.hidden = sichtbar === 0;
      leer.hidden = sichtbar > 0;
    }

    // Springt zu einem verwandten Begriff und hebt ihn kurz hervor.
    function springen(id) {
      const zeile = zeilen.find(kandidat => kandidat.id === id);
      if (!zeile) return;
      // Blendet die Suche das Ziel aus, wird sie geleert, damit der Begriff zu sehen ist.
      if (zeile.knoten.hidden) {
        suchtext = "";
        feld.value = "";
        filtern();
      }
      Klang.doppelton();
      for (const andere of zeilen) andere.knoten.classList.remove("glo-neu");
      zeile.knoten.classList.add("glo-neu");
      zeile.knoten.focus({ preventScroll: true });
      zeile.knoten.scrollIntoView({ block: "center", behavior: window.Rahmen.bewegung() ? "smooth" : "auto" });
      clearTimeout(uhr);
      uhr = setTimeout(() => zeile.knoten.classList.remove("glo-neu"), 2400);
    }

    feld.addEventListener("input", () => {
      suchtext = feld.value;
      filtern();
    });

    const belege = el("div", "erklaerung");
    belege.append(el("h3", "", T("allg.quellen")), H.quellenliste(quellen));
    ziel.replaceChildren(H.erklaerung(T("glo.nutzenTitel"), T("glo.nutzenText")), kopf, liste, leer, H.grenze(T("glo.grenze")), belege);
    filtern();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.glossar = { bauen };
})();
