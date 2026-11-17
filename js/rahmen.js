// Baut auf jeder Seite den gemeinsamen Rahmen: Seitenleiste, Kopfzeile, Fußzeile und die Übersicht des Bereichs.
// Steuert außerdem Sprache, Klang und Bewegung. Die Inhalte kommen aus js/texte.js und js/bereiche.js.
(() => {
  "use strict";

  const texte = window.NETZ_TEXTE || {};
  const bereiche = window.NETZ_BEREICHE || [];
  const Klang = window.Klang;
  const sprachen = ["de", "en", "tr"];
  const sprachkennung = { de: "de-DE", en: "en-GB", tr: "tr-TR" };
  const $ = id => document.getElementById(id);
  // Die Seite gehört zu einem der acht Bereiche oder ist eine Nebenseite ohne Platz in der Leiste.
  const nebenseiten = window.NETZ_NEBENSEITEN || [];
  const bereich = [...bereiche, ...nebenseiten].find(eintrag => eintrag.id === document.body.dataset.bereich) || bereiche[0];
  const versionsangabe = document.querySelector('meta[name="site-version"]');
  const seitenversion = versionsangabe ? versionsangabe.content : "";

  // Einstellungen liegen im Browserspeicher. Ist er gesperrt, bleibt die Seite trotzdem bedienbar.
  function lesen(schluessel) {
    try {
      return localStorage.getItem(schluessel);
    } catch (_) {
      return null;
    }
  }

  function merken(schluessel, wert) {
    try {
      localStorage.setItem(schluessel, wert);
    } catch (_) {
      return;
    }
  }

  // Die Sprache kommt aus der Adresse (?lang=tr), sonst aus dem Speicher, sonst ist sie Deutsch.
  const adressSprache = new URLSearchParams(window.location.search).get("lang");
  const gespeicherteSprache = lesen("netzatlas-lang");
  const gespeicherteBewegung = lesen("netzatlas-bewegung");
  let sprache = sprachen.includes(adressSprache) ? adressSprache : sprachen.includes(gespeicherteSprache) ? gespeicherteSprache : "de";
  if (sprachen.includes(adressSprache)) merken("netzatlas-lang", sprache);
  let bewegung = gespeicherteBewegung === "an" || (gespeicherteBewegung !== "aus" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // T liest einen Text der Oberfläche nach seinem Schlüssel, L liest ein Feld mit den drei Sprachen.
  const T = schluessel => {
    const eintrag = texte[schluessel];
    return eintrag ? eintrag[sprache] || eintrag.de : schluessel;
  };
  const L = wert => {
    if (typeof wert === "string") return wert;
    return wert ? wert[sprache] || wert.de || "" : "";
  };

  // Baut ein Element mit Klasse und Text. Text wird nie als HTML gelesen.
  function el(marke, klasse, text) {
    const knoten = document.createElement(marke);
    if (klasse) knoten.className = klasse;
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Baut eine Tafel: Kasten mit Kopfzeile und optionalem Zusatz rechts.
  function tafel(titel, zusatz) {
    const kasten = el("section", "tafel");
    const kopf = el("h2");
    kopf.append(el("span", "", titel));
    if (zusatz) kopf.append(el("small", "", zusatz));
    kasten.append(kopf);
    return kasten;
  }

  function leisteBauen() {
    const leiste = $("leiste");
    leiste.setAttribute("aria-label", T("nav.seitennavigation"));
    const marke = el("a", "marke");
    marke.href = "index.html";
    marke.append(el("b", "", "NETZ-ATLAS"), el("small", "", T("marke.unterzeile")));
    const nav = el("nav");
    nav.setAttribute("aria-label", T("nav.bereiche"));
    for (const eintrag of bereiche) {
      const link = el("a");
      link.href = eintrag.datei;
      link.title = L(eintrag.name);
      if (eintrag === bereich) link.setAttribute("aria-current", "page");
      link.append(el("span", "", eintrag.nr), el("b", "", L(eintrag.name)));
      link.addEventListener("mouseenter", () => Klang.ton(660, 0.2, 0.04));
      nav.append(link);
    }
    leiste.replaceChildren(marke, nav, el("div", "leiste-fuss", T("marke.projekt")));
  }

  function klangKnopfBeschriften(knopf) {
    knopf.textContent = Klang.istAn() ? T("kopf.klangAn") : T("kopf.klangAus");
    knopf.setAttribute("aria-pressed", String(Klang.istAn()));
  }

  function bewegungKnopfBeschriften(knopf) {
    knopf.textContent = bewegung ? T("kopf.bewegungAn") : T("kopf.bewegungAus");
    knopf.setAttribute("aria-pressed", String(bewegung));
  }

  function kopfBauen() {
    const pfad = el("div", "pfad");
    pfad.append(document.createTextNode("NETZ-ATLAS / "), el("b", "", L(bereich.name)));
    const uhr = el("div", "uhr");
    uhr.id = "uhr";
    uhr.setAttribute("aria-hidden", "true");

    const sprachwahl = el("div", "sprachwahl");
    sprachwahl.setAttribute("role", "group");
    sprachwahl.setAttribute("aria-label", T("kopf.sprache"));
    for (const kennung of sprachen) {
      const knopf = el("button", "", kennung.toUpperCase());
      knopf.type = "button";
      knopf.lang = kennung;
      knopf.setAttribute("aria-pressed", String(kennung === sprache));
      knopf.addEventListener("click", () => spracheSetzen(kennung));
      sprachwahl.append(knopf);
    }

    const klangKnopf = el("button");
    klangKnopf.type = "button";
    klangKnopfBeschriften(klangKnopf);
    klangKnopf.addEventListener("click", () => {
      Klang.schalten();
      klangKnopfBeschriften(klangKnopf);
      Klang.doppelton();
    });

    const bewegungKnopf = el("button");
    bewegungKnopf.type = "button";
    bewegungKnopfBeschriften(bewegungKnopf);
    bewegungKnopf.addEventListener("click", () => {
      bewegungSetzen(!bewegung);
      bewegungKnopfBeschriften(bewegungKnopf);
      Klang.ton(bewegung ? 990 : 660, 0.4);
    });

    const schalter = el("div", "schalter");
    schalter.append(sprachwahl, klangKnopf, bewegungKnopf);
    $("kopf").replaceChildren(pfad, uhr, schalter);
    uhrStellen();
  }

  function uhrStellen() {
    const uhr = $("uhr");
    if (!uhr) return;
    uhr.textContent = new Intl.DateTimeFormat(sprachkennung[sprache], {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    }).format(new Date());
  }

  function titelBauen() {
    document.documentElement.lang = sprache;
    document.title = (bereich.id === "start" ? "" : L(bereich.name) + " · ") + "Netz-Atlas";
    const zeiger = el("i", "zeiger");
    zeiger.setAttribute("aria-hidden", "true");
    $("seitentitel").replaceChildren(document.createTextNode(L(bereich.titel) + " "), el("span", "", L(bereich.akzent)), zeiger);
    $("seitentext").textContent = L(bereich.text);
  }

  function fussBauen() {
    const angabe = el("span", "", "Netz-Atlas · " + T("fuss.version") + " " + seitenversion);
    const nav = el("nav");
    nav.setAttribute("aria-label", T("fuss.verweise"));
    const verweise = [
      ["fuss.datenschutz", "datenschutz.html"],
      ["fuss.impressum", "https://mika-tec.com/impressum.html"],
      ["fuss.kontakt", "https://mika-tec.com/kontakt.html"],
      ["fuss.feedback", "mailto:info@mika-tec.com?subject=Feedback%20zu%20Netz-Atlas"],
      ["fuss.spenden", "https://paypal.me/mikatec"],
      ["", "https://www.mika-tec.com"]
    ];
    for (const [schluessel, adresse] of verweise) {
      const link = el("a", "", schluessel ? T(schluessel) : "MikaTec");
      link.href = adresse;
      // Der Firmenname bleibt auch in türkischer Großschreibung unverändert.
      if (!schluessel) link.lang = "de";
      // Nur Verweise auf fremde Websites öffnen ein neues Fenster.
      if (adresse.startsWith("https://")) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      nav.append(link);
    }
    $("fuss").replaceChildren(angabe, nav);
  }

  const sprung = el("a", "sprung");
  sprung.href = "#inhalt";
  document.body.prepend(sprung);

  function allesBauen() {
    sprung.textContent = T("nav.sprung");
    leisteBauen();
    kopfBauen();
    titelBauen();
    fussBauen();
  }

  function spracheSetzen(kennung) {
    if (!sprachen.includes(kennung) || kennung === sprache) return;
    sprache = kennung;
    merken("netzatlas-lang", sprache);
    allesBauen();
    const knopf = document.querySelector('.sprachwahl button[lang="' + sprache + '"]');
    if (knopf) knopf.focus();
    Klang.ton(880, 0.4);
    document.dispatchEvent(new CustomEvent("sprachwechsel", { detail: { sprache } }));
  }

  function bewegungSetzen(wert) {
    bewegung = wert;
    merken("netzatlas-bewegung", bewegung ? "an" : "aus");
    document.documentElement.classList.toggle("ruhig", !bewegung);
    document.dispatchEvent(new CustomEvent("bewegungswechsel", { detail: { bewegung } }));
  }

  // Schnittstelle für die Skripte der einzelnen Seiten.
  window.Rahmen = {
    T,
    L,
    el,
    tafel,
    bereich,
    sprache: () => sprache,
    bewegung: () => bewegung
  };

  window.addEventListener("error", ereignis => {
    document.documentElement.setAttribute("data-fehler", ereignis.message || "Fehler");
  });

  document.documentElement.classList.toggle("ruhig", !bewegung);
  allesBauen();
  setInterval(uhrStellen, 1000);
})();
