// Technik, Baustein „Satellit“: vergleicht die Laufzeit über einen Satelliten mit Glasfaser am Boden und die Kapazitäten.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";
  const { T, el, tafel } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG = "http://www.w3.org/2000/svg";

  // Festwerte der Rechnung. Die Erde gilt als Kugel mit mittlerem Radius (km).
  const ERDRADIUS = 6371;
  // Lichtgeschwindigkeit im Vakuum in km je Sekunde (Definition).
  const LICHT = 299792.458;
  // Näherung für eine typische Standardfaser in km je Sekunde.
  const FASER = 204000;
  // Höhe der geostationären Bahn in km (Physik) und eine Beispielhöhe für eine niedrige Bahn.
  const GEO = 35786;
  const TIEF = 550;
  // Der Regler der Bahnhöhe läuft in gleichen Schritten über eine logarithmische Skala von 300 bis 36.000 km.
  const UNTEN = 300;
  const OBEN = 36000;
  const STUFEN = 1000;
  // Grenzen des Reglers der Bodenentfernung in km.
  const BODEN_MIN = 100;
  const BODEN_MAX = 15000;

  // Starlink laut Betreiber, gelesen im Bericht von The Register vom 16.07.2025.
  const STARLINK = { medianMs: 25.7, kapazitaetTbit: 450, datum: "2025-07-16" };
  // Seekabel Dunant laut Google: 250 Tbit/s, 12 Faserpaare, in Betrieb seit 03.02.2021.
  const DUNANT = { kapazitaetTbit: 250, datum: "2021-02-03" };
  // Internationale Internet-Bandbreite laut TeleGeography, Stand Mitte 2026, veröffentlicht am 21.09.2026.
  const WELT = { kapazitaetTbit: 2259 };
  // Satellitenzahlen laut Jonathan's Space Report (planet4589.org), Stand 16.11.2026.
  const ZAEHLUNG = {
    datum: "2026-11-16",
    reihen: [
      { name: "Starlink", oben: 11213, betrieb: 9558 },
      { name: "OneWeb", oben: 660, betrieb: 638 },
      { name: "Kuiper", oben: 438, betrieb: 378 },
      { name: "Qianfan", oben: 276, betrieb: 196 }
    ]
  };

  // Zustand: bleibt bei einem Sprachwechsel erhalten.
  let hoehe = TIEF;
  let boden = 1000;
  // Plätze, die bei jeder Änderung neu gefüllt werden.
  let ergebnis = null;
  let marken = null;

  // Setzt Werte in einen Text ein: aus „{z} km“ und { z: "550" } wird „550 km“.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, name) => werte[name]);
  const km = wert => fuellen(T("sat.wertKm"), { z: H.zahlText(wert, 0) });
  const ms = wert => fuellen(T("sat.wertMs"), { z: H.zahlText(wert, 1) });

  // Umrechnung zwischen der Stellung des Reglers und der Bahnhöhe.
  const stufeAus = hoeheKm => Math.round(STUFEN * Math.log(hoeheKm / UNTEN) / Math.log(OBEN / UNTEN));
  function hoeheAus(stufe) {
    // Die Stellung der geostationären Bahn liefert deren genauen Wert.
    if (stufe === stufeAus(GEO)) return GEO;
    const roh = UNTEN * Math.pow(OBEN / UNTEN, stufe / STUFEN);
    const schritt = roh < 2000 ? 10 : roh < 10000 ? 50 : 100;
    return Math.round(roh / schritt) * schritt;
  }

  // Geometrie: Der Satellit steht über der Mitte zwischen Nutzer und Bodenstation.
  // winkel ist der Winkel am Erdmittelpunkt zwischen dieser Mitte und einem der beiden Orte.
  function geometrie() {
    const winkel = boden / (2 * ERDRADIUS);
    const bahn = ERDRADIUS + hoehe;
    const schraeg = Math.sqrt(ERDRADIUS * ERDRADIUS + bahn * bahn - 2 * ERDRADIUS * bahn * Math.cos(winkel));
    return {
      winkel,
      bahn,
      schraeg,
      // Sichtkontakt besteht, solange der Satellit für beide Orte über dem Horizont steht.
      sichtbar: Math.cos(winkel) >= ERDRADIUS / bahn,
      reichweite: 2 * ERDRADIUS * Math.acos(ERDRADIUS / bahn),
      satMs: 4 * schraeg / (LICHT / 1000),
      faserMs: 2 * boden / (FASER / 1000)
    };
  }

  function svg(marke, merkmale, text) {
    const knoten = document.createElementNS(SVG, marke);
    for (const [name, wert] of Object.entries(merkmale || {})) knoten.setAttribute(name, wert);
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Überschrift mit Inhalt darunter.
  function abschnitt(titel, ...inhalt) {
    const kopf = el("div", "erklaerung");
    kopf.append(el("h3", "", titel));
    const block = el("div", "sat-abschnitt");
    block.append(kopf, ...inhalt);
    return block;
  }

  // Maßstabsgetreue Zeichnung: Erdbogen, Glasfaser am Boden, Satellit und die beiden Funkwege.
  function zeichnung(g) {
    const mitte = 240;
    const oben = 36;
    const halb = ERDRADIUS * Math.sin(g.winkel);
    const tief = g.bahn - ERDRADIUS * Math.cos(g.winkel);
    const mass = Math.min(240 / (2 * halb), 186 / tief);
    const radius = ERDRADIUS * mass;
    const erdmitte = oben + g.bahn * mass;
    const ortY = oben + tief * mass;
    const nutzerX = mitte - halb * mass;
    const stationX = mitte + halb * mass;
    const funk = "sat-funk" + (g.sichtbar ? "" : " sat-blockiert");
    const zahl = wert => wert.toFixed(1);

    const bild = svg("svg", { viewBox: "0 0 480 270", class: "sat-bild", role: "img" });
    bild.setAttribute("aria-label", fuellen(g.sichtbar ? T("sat.bildLabel") : T("sat.bildLabelOhne"), {
      h: H.zahlText(hoehe, 0),
      d: H.zahlText(boden, 0),
      sat: H.zahlText(g.satMs, 1),
      faser: H.zahlText(g.faserMs, 1)
    }));
    bild.append(
      svg("circle", { cx: mitte, cy: zahl(erdmitte), r: zahl(radius), class: "sat-erde" }),
      svg("path", {
        d: "M" + zahl(nutzerX) + " " + zahl(ortY) + " A" + zahl(radius) + " " + zahl(radius) + " 0 0 1 " + zahl(stationX) + " " + zahl(ortY),
        class: "sat-faser"
      }),
      svg("line", { x1: zahl(nutzerX), y1: zahl(ortY), x2: mitte, y2: oben, class: funk }),
      svg("line", { x1: zahl(stationX), y1: zahl(ortY), x2: mitte, y2: oben, class: funk }),
      svg("rect", { x: mitte - 15, y: oben - 3, width: 30, height: 6, class: "sat-fluegel" }),
      svg("rect", { x: mitte - 5, y: oben - 5, width: 10, height: 10, class: "sat-koerper" }),
      svg("circle", { cx: zahl(nutzerX), cy: zahl(ortY), r: 4, class: "sat-ort" }),
      svg("circle", { cx: zahl(stationX), cy: zahl(ortY), r: 4, class: "sat-ort" }),
      svg("text", { x: mitte, y: oben - 16, "text-anchor": "middle", class: "sat-sat-text" }, fuellen(T("sat.bildSat"), { h: H.zahlText(hoehe, 0) })),
      svg("text", { x: zahl(nutzerX - 9), y: zahl(ortY + 4), "text-anchor": "end" }, T("sat.bildNutzer")),
      svg("text", { x: zahl(stationX + 9), y: zahl(ortY + 4), "text-anchor": "start" }, T("sat.bildStation")),
      svg("text", { x: mitte, y: zahl(ortY + 22), "text-anchor": "middle", class: "sat-faser-text" }, fuellen(T("sat.bildFaser"), { d: H.zahlText(boden, 0) })),
      svg("text", { x: 8, y: 262, class: "sat-massstab" }, T("sat.bildMassstab"))
    );
    return bild;
  }

  // Rechnet neu und füllt die rechte Spalte der Laufzeit.
  function rechnen() {
    const g = geometrie();
    const groesste = Math.max(g.faserMs, g.sichtbar ? g.satMs : 0);
    const teile = [
      zeichnung(g),
      H.zahlen([
        { wert: g.sichtbar ? ms(g.satMs) : "–", name: T("sat.zSat"), klasse: "warnung" },
        { wert: ms(g.faserMs), name: T("sat.zFaser"), klasse: "betont" },
        { wert: g.sichtbar ? km(2 * g.schraeg) : "–", name: T("sat.zWeg") },
        { wert: km(g.reichweite), name: T("sat.zReichweite") }
      ]),
      H.balken(T("sat.balkenSat"), g.sichtbar ? ms(g.satMs) : "–", g.sichtbar ? g.satMs / groesste : 0, "var(--bernstein)"),
      H.balken(T("sat.balkenFaser"), ms(g.faserMs), g.faserMs / groesste)
    ];
    if (!g.sichtbar) {
      const warnung = H.vermerk(fuellen(T("sat.ohneSicht"), { h: H.zahlText(hoehe, 0), max: H.zahlText(g.reichweite, 0) }));
      warnung.classList.add("sat-warnung");
      teile.splice(1, 0, warnung);
    }
    teile.push(H.vermerk(fuellen(T("sat.vermerk"), { star: H.zahlText(STARLINK.medianMs, 1), datum: H.datumText(STARLINK.datum) })));
    ergebnis.replaceChildren(...teile);

    // Die Knöpfe der Marken zeigen an, ob der Regler gerade auf ihrer Höhe steht.
    [TIEF, GEO].forEach((marke, nummer) => marken.children[nummer].setAttribute("aria-pressed", String(marke === hoehe)));
  }

  // Zweite Tafel: Kapazitäten als Balken und die Satellitenzahlen als Tabelle.
  function kapazitaet() {
    const balken = el("div", "sat-kapazitaet");
    const tbit = wert => fuellen(T("sat.wertTbit"), { z: H.zahlText(wert, 0) });
    balken.append(
      H.balken(
        fuellen(T("sat.kapStarlink"), { datum: H.datumText(STARLINK.datum) }),
        fuellen(T("sat.wertKnapp"), { z: H.zahlText(STARLINK.kapazitaetTbit, 0) }),
        STARLINK.kapazitaetTbit / WELT.kapazitaetTbit,
        "var(--bernstein)"
      ),
      H.balken(fuellen(T("sat.kapKabel"), { datum: H.datumText(DUNANT.datum) }), tbit(DUNANT.kapazitaetTbit), DUNANT.kapazitaetTbit / WELT.kapazitaetTbit),
      H.balken(T("sat.kapWelt"), tbit(WELT.kapazitaetTbit), 1, "var(--blau)")
    );

    const zeilen = ZAEHLUNG.reihen.map(reihe => ({
      zellen: [H.eigenname("span", reihe.name), H.zahlText(reihe.oben, 0), H.zahlText(reihe.betrieb, 0)]
    }));
    const zahlen = abschnitt(
      T("sat.tabTitel"),
      H.tabelle("sat-tabelle", [T("sat.tabName"), T("sat.tabOben"), T("sat.tabBetrieb")], zeilen),
      H.vermerk(fuellen(T("sat.tabHinweis"), { datum: H.datumText(ZAEHLUNG.datum) }))
    );

    const kasten = tafel(T("sat.kapTitel"), T("sat.kapZusatz"));
    const rumpf = el("div", "tafel-rumpf");
    rumpf.append(H.zwei(
      [balken, H.vermerk(T("sat.kapVermerk")), H.erklaerung(T("sat.erkErsatzTitel"), T("sat.erkErsatzText"))],
      [zahlen]
    ));
    kasten.append(rumpf);
    return kasten;
  }

  function bauen(platz) {
    const bahnhoehe = H.regler(T("sat.hoehe"), 0, STUFEN, 1, stufeAus(hoehe), stufe => km(hoeheAus(stufe)), stufe => {
      hoehe = hoeheAus(stufe);
      rechnen();
    });
    marken = H.umschalter(T("sat.marken"), [
      { wert: TIEF, text: fuellen(T("sat.markeTief"), { z: H.zahlText(TIEF, 0) }) },
      { wert: GEO, text: fuellen(T("sat.markeGeo"), { z: H.zahlText(GEO, 0) }) }
    ], hoehe, wert => {
      hoehe = wert;
      bahnhoehe.setzen(stufeAus(wert));
      Klang.doppelton();
      rechnen();
    });
    marken.classList.add("sat-marken");
    const entfernung = H.regler(T("sat.boden"), BODEN_MIN, BODEN_MAX, 100, boden, km, wert => {
      boden = wert;
      rechnen();
    });

    const bahnen = H.erklaerung(T("sat.erkBahnTitel"), fuellen(T("sat.erkBahnText"), {
      geo: H.zahlText(GEO, 0),
      geoMs: H.zahlText(Math.floor(4 * GEO / (LICHT / 1000)), 0)
    }));
    const rechnung = H.erklaerung(T("sat.erkRechnungTitel"), fuellen(T("sat.erkRechnungText"), {
      r: H.zahlText(ERDRADIUS, 0),
      v: H.zahlText(FASER, 0)
    }));

    ergebnis = el("div", "spalte");
    const quellen = abschnitt(T("allg.quellen"), H.quellenliste([
      { name: "Jonathan's Space Report: Starlink Statistics", url: "https://planet4589.org/space/con/star/stats.html", datum: ZAEHLUNG.datum },
      { name: "Jonathan's Space Report: Mega Constellations List", url: "https://planet4589.org/space/con/conlist.html", datum: ZAEHLUNG.datum },
      { name: "The Register: Starlink network update", url: "https://www.theregister.com/2025/07/16/starlink_network_update/", datum: STARLINK.datum },
      { name: "Google Cloud: Dunant subsea cable is now ready for service", url: "https://cloud.google.com/blog/products/infrastructure/googles-dunant-subsea-cable-is-now-ready-for-service", datum: DUNANT.datum },
      { name: "TeleGeography: International Internet Bandwidth Now Totals 2,259 Tbps", url: "https://resources.telegeography.com/international-internet-bandwidth", datum: "2026-09-21" },
      { name: "TeleGeography: Do Submarine Cables Account For Over 99% of Intercontinental Data Traffic?", url: "https://resources.telegeography.com/2023-mythbusting-part-3", datum: "2023-05-04" }
    ]));

    platz.replaceChildren(
      H.zwei([bahnhoehe.knoten, marken, entfernung.knoten, bahnen, rechnung], [ergebnis]),
      kapazitaet(),
      H.grenze(fuellen(T("sat.grenze"), { tief: H.zahlText(TIEF, 0) })),
      quellen
    );
    rechnen();
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.satellit = { bauen };
})();
