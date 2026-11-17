// Technik, Baustein „Laufzeit“: rechnet aus Luftlinie, Umwegfaktor und Medium, wie lange Licht zwischen zwei Städten braucht.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";
  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG = "http://www.w3.org/2000/svg";

  // Festwerte der Rechnung. Die Erde gilt als Kugel mit mittlerem Radius (km).
  const ERDRADIUS = 6371;
  // Lichtgeschwindigkeit im Vakuum in km je Sekunde (Definition).
  const LICHT = 299792.458;
  // Näherung für eine typische Standardfaser in km je Sekunde; die Brechzahl dahinter ist nicht am Datenblatt bestätigt.
  const FASER = 204000;
  // Messstudie Bozkurt u. a. (PAM 2017): kleinste Ping-Zeit und Faserwege dreier Forschungsnetze,
  // jeweils als Vielfaches der Laufzeit von Licht im Vakuum auf der Luftlinie (Median).
  const STUDIE = { ping: 3.1, von: 2.6, bis: 3.6 };
  // Verizon, IP Latency Statistics: Monatsmittel Oktober 2026 in ms, hin und zurück.
  const MESSUNG = {
    monat: "2026-10",
    werte: [
      { name: () => T("lz.messAtlantik"), ms: 70.440 },
      { name: () => T("lz.messEuropa"), ms: 14.263 },
      { name: () => T("lz.messNordamerika"), ms: 33.354 },
      { name: () => T("lz.messPazifik"), ms: 112.058 }
    ]
  };

  // Städte mit Breite und Länge der Stadtmitte in Grad, auf zwei Nachkommastellen gerundet.
  const staedte = [
    { id: "dubai", name: () => T("lz.stadtDubai"), lat: 25.20, lon: 55.27 },
    { id: "frankfurt", name: () => T("lz.stadtFrankfurt"), lat: 50.11, lon: 8.68 },
    { id: "istanbul", name: () => T("lz.stadtIstanbul"), lat: 41.01, lon: 28.96 },
    { id: "lagos", name: () => T("lz.stadtLagos"), lat: 6.46, lon: 3.39 },
    { id: "london", name: () => T("lz.stadtLondon"), lat: 51.51, lon: -0.13 },
    { id: "losangeles", name: () => T("lz.stadtLosAngeles"), lat: 34.05, lon: -118.25 },
    { id: "mumbai", name: () => T("lz.stadtMumbai"), lat: 19.08, lon: 72.88 },
    { id: "newyork", name: () => T("lz.stadtNewYork"), lat: 40.71, lon: -74.01 },
    { id: "saopaulo", name: () => T("lz.stadtSaoPaulo"), lat: -23.55, lon: -46.63 },
    { id: "singapur", name: () => T("lz.stadtSingapur"), lat: 1.28, lon: 103.83 },
    { id: "sydney", name: () => T("lz.stadtSydney"), lat: -33.87, lon: 151.21 },
    { id: "tokio", name: () => T("lz.stadtTokio"), lat: 35.69, lon: 139.69 }
  ];
  const stadt = id => staedte.find(eintrag => eintrag.id === id);

  // Zustand: bleibt bei einem Sprachwechsel erhalten.
  let start = "frankfurt";
  let ziel = "newyork";
  let faktor = 1.5;
  let medium = "faser";
  let richtung = "hinrueck";
  // Plätze, die bei jeder Änderung neu gefüllt werden.
  let ergebnis = null;
  let startFeld = null;
  let zielFeld = null;

  // Setzt Werte in einen Text ein: aus „{km} km“ und { km: "6.204" } wird „6.204 km“.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, name) => werte[name]);
  const km = wert => fuellen(T("lz.wertKm"), { z: H.zahlText(wert, 0) });
  const ms = wert => fuellen(T("lz.wertMs"), { z: H.zahlText(wert, 1) });

  // Luftlinie zwischen zwei Orten als Großkreis auf der Kugel (Haversine-Formel), in km.
  function luftlinie(a, b) {
    const bogen = grad => grad * Math.PI / 180;
    const breite = bogen(b.lat - a.lat);
    const laenge = bogen(b.lon - a.lon);
    const h = Math.sin(breite / 2) ** 2 + Math.cos(bogen(a.lat)) * Math.cos(bogen(b.lat)) * Math.sin(laenge / 2) ** 2;
    return 2 * ERDRADIUS * Math.asin(Math.min(1, Math.sqrt(h)));
  }

  function svg(marke, merkmale, text) {
    const knoten = document.createElementNS(SVG, marke);
    for (const [name, wert] of Object.entries(merkmale || {})) knoten.setAttribute(name, wert);
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Überschrift mit Inhalt darunter, für die Tabellen der rechten Spalte.
  function abschnitt(titel, ...inhalt) {
    const kopf = el("div", "erklaerung");
    kopf.append(el("h3", "", titel));
    const block = el("div", "lz-abschnitt");
    block.append(kopf, ...inhalt);
    return block;
  }

  // Zeichnung: gerade Linie für die Luftlinie, Zickzacklinie für den Kabelweg.
  // Jede Zacke ist so steil, dass die ganze Linie genau um den Umwegfaktor länger ist.
  function zeichnung(a, b, luft, kabel, laufzeit) {
    const links = 30;
    const rechts = 410;
    const grund = 112;
    const zacken = 20;
    const schritt = (rechts - links) / zacken;
    const hoehe = schritt * Math.sqrt(faktor * faktor - 1);
    const punkte = [];
    for (let nummer = 0; nummer <= zacken; nummer++) {
      punkte.push((links + nummer * schritt).toFixed(1) + "," + (grund - (nummer % 2 ? hoehe : 0)).toFixed(1));
    }
    const bild = svg("svg", { viewBox: "0 0 440 142", class: "lz-bild", role: "img" });
    bild.setAttribute("aria-label", fuellen(T("lz.bildLabel"), {
      start: a.name(),
      ziel: b.name(),
      luft: H.zahlText(luft, 0),
      kabel: H.zahlText(kabel, 0),
      ms: H.zahlText(laufzeit, 1)
    }));
    bild.append(
      svg("text", { x: 220, y: 18, "text-anchor": "middle", class: "lz-kabel-text" }, fuellen(T("lz.bildKabel"), { km: H.zahlText(kabel, 0) })),
      svg("polyline", { points: punkte.join(" "), class: "lz-kabel" }),
      svg("line", { x1: links, y1: grund, x2: rechts, y2: grund, class: "lz-luft" }),
      svg("rect", { x: links - 4, y: grund - 4, width: 8, height: 8, class: "lz-ort" }),
      svg("rect", { x: rechts - 4, y: grund - 4, width: 8, height: 8, class: "lz-ort" }),
      svg("text", { x: links - 4, y: grund + 22, "text-anchor": "start" }, a.name()),
      svg("text", { x: rechts + 4, y: grund + 22, "text-anchor": "end" }, b.name()),
      svg("text", { x: 220, y: grund + 22, "text-anchor": "middle", class: "lz-luft-text" }, fuellen(T("lz.bildLuft"), { km: H.zahlText(luft, 0) }))
    );
    return bild;
  }

  // Die Faustregeln, jeweils als Geschwindigkeit in km je ms für eine Richtung.
  function faustregeln(kabel, wege) {
    const eigen = FASER / 1000;
    const regeln = [
      { name: T("lz.regelSeite"), tempo: eigen, stellen: 0 },
      { name: T("lz.regelZweiDrittel"), tempo: LICHT / 1000 * 2 / 3, stellen: 1 },
      { name: T("lz.regelZweihundert"), tempo: 200, stellen: 0 },
      { name: T("lz.regelHundert"), tempo: 200, stellen: 0 }
    ];
    const zeilen = regeln.map((regel, nummer) => {
      const zeit = kabel / regel.tempo * wege;
      const abweichung = (eigen / regel.tempo - 1) * 100;
      const text = nummer === 0 ? ms(zeit) : fuellen(T("lz.wertAbweichung"), {
        ms: H.zahlText(zeit, 1),
        vz: abweichung < 0 ? "−" : "+",
        p: H.zahlText(Math.abs(abweichung), 1)
      });
      return {
        zellen: [regel.name, fuellen(T("lz.wertKmMs"), { z: H.zahlText(regel.tempo, regel.stellen) }), text],
        klasse: nummer === 0 ? "gewaehlt" : ""
      };
    });
    return H.tabelle("lz-tabelle lz-regeln", [T("lz.regelSpalte"), T("lz.regelTempo"), T("lz.regelErgebnis")], zeilen);
  }

  // Gemessene Werte eines Betreibernetzes, dazu die eigene Rechnung für London und New York.
  function messwerte() {
    const zeilen = MESSUNG.werte.map(wert => ({ zellen: [wert.name(), ms(wert.ms)] }));
    const vergleich = 2 * luftlinie(stadt("london"), stadt("newyork")) / (FASER / 1000);
    return abschnitt(
      T("lz.messTitel"),
      H.tabelle("lz-tabelle lz-messung", [T("lz.messStrecke"), T("lz.messWert")], zeilen),
      H.vermerk(fuellen(T("lz.messHinweis"), { monat: H.datumText(MESSUNG.monat), ms: H.zahlText(vergleich, 1) }))
    );
  }

  // Rechnet neu und füllt die rechte Spalte.
  function rechnen() {
    const a = stadt(start);
    const b = stadt(ziel);
    const wege = richtung === "hinrueck" ? 2 : 1;
    const luft = luftlinie(a, b);
    const kabel = luft * faktor;
    const tempo = (medium === "faser" ? FASER : LICHT) / 1000;
    const laufzeit = kabel / tempo * wege;
    const vakuum = luft / (LICHT / 1000) * wege;

    const gross = el("div", "lz-gross");
    gross.append(
      el("b", "", H.zahlText(laufzeit, 1)),
      el("span", "", T("lz.ms")),
      el("small", "", (richtung === "hinrueck" ? T("lz.grossHinrueck") : T("lz.grossEinfach")) + " · " + (medium === "faser" ? T("lz.faser") : T("lz.vakuum")))
    );

    ergebnis.replaceChildren(
      gross,
      zeichnung(a, b, luft, kabel, laufzeit),
      H.vermerk(T("lz.bildVermerk")),
      H.zahlen([
        { wert: km(luft), name: T("lz.zLuft"), klasse: "betont" },
        { wert: km(kabel), name: T("lz.zKabel"), klasse: "warnung" },
        { wert: fuellen(T("lz.wertKmMs"), { z: H.zahlText(tempo, 0) }), name: T("lz.zTempo") },
        { wert: fuellen(T("lz.wertFach"), { z: H.zahlText(laufzeit / vakuum, 2) }), name: T("lz.zVielfach") }
      ]),
      H.vermerk(fuellen(T("lz.vermerk"), { r: H.zahlText(ERDRADIUS, 0) })),
      abschnitt(
        T("lz.regelTitel"),
        faustregeln(kabel, wege),
        H.vermerk(fuellen(richtung === "hinrueck" ? T("lz.regelHinweisHinrueck") : T("lz.regelHinweisEinfach"), { kabel: H.zahlText(kabel, 0) }))
      ),
      messwerte()
    );
  }

  // Start und Ziel dürfen nicht derselbe Ort sein: Wer den Ort der anderen Seite wählt, tauscht beide.
  function ortWaehlen(seite, wert) {
    if (seite === "start") {
      if (wert === ziel) ziel = start;
      start = wert;
    } else {
      if (wert === start) start = ziel;
      ziel = wert;
    }
    startFeld.value = start;
    zielFeld.value = ziel;
    Klang.doppelton();
    rechnen();
  }

  function bauen(platz) {
    const liste = staedte
      .map(eintrag => ({ wert: eintrag.id, text: eintrag.name() }))
      .sort((a, b) => a.text.localeCompare(b.text, H.sprachkennung()));
    const startWahl = H.auswahl(T("lz.start"), liste, start, wert => ortWaehlen("start", wert));
    const zielWahl = H.auswahl(T("lz.ziel"), liste, ziel, wert => ortWaehlen("ziel", wert));
    startFeld = startWahl.querySelector("select");
    zielFeld = zielWahl.querySelector("select");
    const orte = el("div", "lz-orte");
    orte.append(startWahl, zielWahl);

    const umweg = H.regler(T("lz.faktor"), 1, 3.5, 0.1, faktor, wert => "× " + H.zahlText(wert, 1), wert => {
      faktor = wert;
      rechnen();
    });

    const schalter = el("div", "lz-schalter");
    schalter.append(
      H.umschalter(T("lz.medium"), [
        { wert: "faser", text: T("lz.faser") },
        { wert: "vakuum", text: T("lz.vakuum") }
      ], medium, wert => {
        medium = wert;
        Klang.doppelton();
        rechnen();
      }),
      H.umschalter(T("lz.richtung"), [
        { wert: "hinrueck", text: T("lz.hinrueck") },
        { wert: "einfach", text: T("lz.einfach") }
      ], richtung, wert => {
        richtung = wert;
        Klang.doppelton();
        rechnen();
      })
    );

    const glas = H.erklaerung(T("lz.erkGlasTitel"), fuellen(T("lz.erkGlasText"), {
      c: H.zahlText(LICHT, 0),
      v: H.zahlText(FASER, 0),
      tausend: H.zahlText(1000, 0),
      je: H.zahlText(1000 / (FASER / 1000), 1)
    }));
    const umwege = H.erklaerung(T("lz.erkWegTitel"), fuellen(T("lz.erkWegText"), {
      ping: H.zahlText(STUDIE.ping, 1),
      von: H.zahlText(STUDIE.von, 1),
      bis: H.zahlText(STUDIE.bis, 1)
    }));
    const ping = H.erklaerung(T("lz.erkPingTitel"), T("lz.erkPingText"));

    ergebnis = el("div", "spalte");
    const quellen = abschnitt(T("allg.quellen"), H.quellenliste([
      { name: "Bozkurt et al.: Why Is the Internet so Slow?! (PAM 2017)", url: "https://balakrishnanc.github.io/papers/bozkurt-pam2017.pdf", datum: "2017" },
      { name: "Verizon: IP Latency Statistics", url: "https://www.verizon.com/business/terms/latency/", datum: MESSUNG.monat }
    ]));

    platz.replaceChildren(
      H.zwei([orte, umweg.knoten, schalter, glas, umwege, ping], [ergebnis]),
      H.grenze(T("lz.grenze")),
      quellen
    );
    rechnen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.laufzeit = { bauen };
})();
