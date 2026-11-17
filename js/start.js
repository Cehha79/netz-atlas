// Startseite: Suchzeile, Meldungsband der jüngsten Störfälle, Lagekarte mit Auswahl, Kennzahlen des Netzes
// und der Umfang dieser Website.
// Braucht js/karte.js, js/atlas.js, js/stoerfaelle.js und die Datendateien kabel, knoten, rootserver,
// vorfaelle und kennzahlen.
(() => {
  "use strict";
  const { T, L, el, tafel } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const A = window.Atlas;
  const S = window.Stoerfaelle;
  const kennzahlen = window.NETZ_KENNZAHLEN || [];
  const root = window.NETZ_ROOT;
  const ziel = document.getElementById("start");
  if (!ziel || !A.kabel.length) return;

  const gebiete = ["atlantik", "nord-ostsee", "arktis", "mittelmeer", "europa-asien", "afrika", "indik", "asien", "pazifik"];
  const gebietText = { atlantik: () => T("gebiet.atlantik"), afrika: () => T("gebiet.afrika"), mittelmeer: () => T("gebiet.mittelmeer"), "nord-ostsee": () => T("gebiet.nord-ostsee"), arktis: () => T("gebiet.arktis"), "europa-asien": () => T("gebiet.europa-asien"), pazifik: () => T("gebiet.pazifik"), asien: () => T("gebiet.asien"), indik: () => T("gebiet.indik") };
  let frage = "";
  let auswahl = null;
  let karte = null;
  let auskunftPlatz = null;
  let trefferPlatz = null;

  // Das jüngste Prüfdatum aller Datenarten.
  function datenstand() {
    const tage = [...A.kabel, ...A.knoten, ...S.liste, ...kennzahlen].map(e => e.geprueftAm).filter(Boolean);
    if (root) tage.push(root.stand);
    return tage.sort().pop() || "";
  }

  function waehlen(art, id) {
    auswahl = { art, id };
    karte.setzen({ auswahl });
    auskunftPlatz.replaceChildren(A.auskunft(auswahl));
    const eintrag = A.finden[art].get(id);
    if (art === "kabel") karte.einpassen(window.Karte.kabelweg(eintrag));
    else karte.zielen(eintrag.lon, eintrag.lat, 3.2);
    Klang.doppelton();
  }

  function suchen() {
    if (frage.length < 2) {
      trefferPlatz.replaceChildren();
      return;
    }
    const f = H.klein(frage);
    const funde = [];
    for (const k of A.kabel) if (H.klein(k.name).includes(f)) funde.push({ name: k.name, zusatz: T("karte.kabel"), tun: () => waehlen("kabel", k.id) });
    for (const o of A.orte) if (H.klein(o.name + " " + H.landName(o.land)).includes(f)) funde.push({ name: o.name, zusatz: T("karte.ort") + " · " + o.land, tun: () => waehlen("ort", o.id) });
    for (const k of A.knoten) if (H.klein(k.name + " " + L(k.stadt)).includes(f)) funde.push({ name: k.name, zusatz: T("karte.knoten"), tun: () => waehlen("knoten", k.id) });
    for (const fall of S.liste) if (H.klein(L(fall.titel)).includes(f)) funde.push({ name: L(fall.titel), zusatz: H.datumText(fall.datum), adresse: "stoerfaelle.html#faelle=" + fall.id });
    if (!funde.length) {
      trefferPlatz.replaceChildren(el("p", "verz-leer", T("allg.keinTreffer")));
      return;
    }
    const reihe = el("div", "atlas-knoepfe");
    for (const fund of funde.slice(0, 16)) {
      const knopf = el(fund.adresse ? "a" : "button");
      if (fund.adresse) knopf.href = fund.adresse;
      else {
        knopf.type = "button";
        knopf.addEventListener("click", fund.tun);
      }
      knopf.append(H.eigenname("b", fund.name), el("small", "", " " + fund.zusatz));
      reihe.append(knopf);
    }
    trefferPlatz.replaceChildren(reihe);
  }

  function werkzeugzeileBauen() {
    const zeile = el("div", "werkzeugzeile");
    const befehl = el("label", "befehl");
    const eingabe = el("input");
    eingabe.type = "search";
    eingabe.id = "suche";
    eingabe.autocomplete = "off";
    eingabe.placeholder = T("start.suchfeld");
    eingabe.setAttribute("aria-label", T("start.suchfeld"));
    eingabe.value = frage;
    eingabe.addEventListener("input", () => {
      frage = eingabe.value.trim();
      suchen();
    });
    eingabe.addEventListener("keydown", ereignis => {
      if (ereignis.key === "Escape") {
        eingabe.value = "";
        frage = "";
        suchen();
      }
    });
    befehl.append(el("span", "", "> " + T("allg.suche")), eingabe, el("kbd", "", "/"));
    const stand = el("div", "standzeile", T("start.stand") + " ");
    stand.append(el("b", "", H.datumText(datenstand())));
    zeile.append(befehl, stand);
    return zeile;
  }

  // Meldungsband: die zehn jüngsten Störfälle als laufende Zeile; ohne Bewegung steht sie und rollt von Hand.
  function bandBauen() {
    if (!S.liste.length) return null;
    const juengste = S.liste.slice(0, 10);
    const band = el("div", "band");
    band.setAttribute("role", "region");
    band.setAttribute("aria-label", T("band.titel"));
    const lauf = el("div", "band-lauf");
    lauf.style.setProperty("--dauer", juengste.length * 8 + "s");
    // Die Zeile steht zweimal hintereinander, damit der Lauf ohne Sprung von vorn beginnt.
    for (const doppel of [false, true]) {
      for (const fall of juengste) {
        const link = el("a", "band-meldung" + (doppel ? " band-doppel" : ""));
        link.href = "stoerfaelle.html#faelle=" + fall.id;
        if (doppel) {
          link.setAttribute("aria-hidden", "true");
          link.tabIndex = -1;
        }
        const marke = el("i");
        marke.style.setProperty("--f", S.farbe(fall.art));
        link.append(el("time", "", H.datumText(fall.datum)), marke, el("span", "", L(fall.titel)));
        lauf.append(link);
      }
    }
    const fenster = el("div", "band-fenster");
    fenster.append(lauf);
    const alle = el("a", "band-alle", T("band.alle") + " →");
    alle.href = "stoerfaelle.html";
    band.append(el("span", "band-kopf", T("band.titel")), fenster, alle);
    return band;
  }

  function kennzahlenBauen() {
    const kasten = tafel(T("start.kennzahlen"));
    const eintraege = kennzahlen.map(k => ({ wert: L(k.wert), name: L(k.name) + (k.hinweis ? " · " + L(k.hinweis) : "") + " · " + H.datumText(k.stand) }));
    if (root) eintraege.push({ wert: H.zahlText(root.instanzenGesamt), name: T("start.rootInstanzen") + " · " + H.datumText(root.stand) });
    const quellen = new Map(kennzahlen.map(k => [k.quelle.url, { name: k.quelle.name, url: k.quelle.url }]));
    if (root) for (const q of root.quellen.slice(0, 1)) quellen.set(q.url, q);
    const abschnitt = el("div", "profil-abschnitt tafel-rumpf");
    abschnitt.append(el("h4", "", T("start.quellenKennzahlen")), H.quellenliste([...quellen.values()]));
    kasten.append(H.zahlen(eintraege), abschnitt);
    return kasten;
  }

  function lageBauen() {
    const kasten = tafel(T("start.lage"));
    const laender = new Set(A.orte.map(o => o.land));
    const rumpf = el("div", "tafel-rumpf spalte");
    const zeilen = gebiete.map(g => ({ g, zahl: A.kabel.filter(k => k.gebiet === g).length })).filter(z => z.zahl);
    const groesste = Math.max(...zeilen.map(z => z.zahl));
    const balken = el("div", "spalte eng");
    balken.append(el("h4", "klein", T("start.jeGebiet")), ...zeilen.map(z => H.balken(gebietText[z.g](), String(z.zahl), z.zahl / groesste)));
    const link = el("a", "knopf", T("start.zumAtlas"));
    link.href = "atlas.html";
    rumpf.append(balken, el("p", "profil-notiz", T("start.hinweisAuswahl")), link);
    kasten.append(H.zahlen([
      { wert: String(A.kabel.length), name: T("start.kabelAuswahl"), klasse: "betont" },
      { wert: String(A.orte.length), name: T("start.orte") },
      { wert: String(laender.size), name: T("start.laender") },
      { wert: String(A.knoten.length), name: T("start.knoten") },
      { wert: String(S.liste.length), name: T("start.faelle") }
    ]), rumpf);
    return kasten;
  }

  function bauen() {
    const kartenTafel = tafel(T("start.karte"), T("allg.schematisch"));
    const kartenPlatz = el("div", "tafel-rumpf");
    kartenTafel.append(kartenPlatz);
    const auswahlTafel = tafel(T("start.auswahl"));
    auskunftPlatz = el("div", "tafel-rumpf");
    auswahlTafel.append(auskunftPlatz);
    trefferPlatz = el("div", "atlas-treffer");
    const links = el("div", "spalte");
    links.append(kartenTafel, lageBauen());
    const rechts = el("div", "spalte");
    rechts.append(auswahlTafel, kennzahlenBauen());
    const reihe = el("div", "startreihe");
    reihe.append(links, rechts);
    ziel.replaceChildren(...[werkzeugzeileBauen(), trefferPlatz, bandBauen(), reihe].filter(Boolean));
    karte = window.Karte.bauen(kartenPlatz, { kabel: A.kabel, knoten: A.knoten, auswahl, beiWahl: waehlen });
    auskunftPlatz.replaceChildren(A.auskunft(auswahl));
    suchen();
  }

  document.addEventListener("sprachwechsel", bauen);
  document.addEventListener("keydown", ereignis => {
    const feld = document.getElementById("suche");
    if (ereignis.key === "/" && feld && document.activeElement !== feld && !/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      ereignis.preventDefault();
      feld.focus();
    }
  });
  bauen();
})();
