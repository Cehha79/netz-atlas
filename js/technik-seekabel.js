// Technik, Baustein „Seekabel“: Querschnitt nach Wassertiefe, Kette der Verstärker, Kapazitätsrechner
// und die Zahlen zu Schäden und Reparatur eines Seekabels.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Maße laut ICPC (10/2011): Tiefsee ohne Armierung 17 bis 20 mm, armiert bis 50 mm,
  // eingegraben wird bis etwa 2.000 m Wassertiefe.
  const MASSE = { tiefVon: 17, tiefBis: 20, armiertBis: 50, grabenBis: 2000, tiefeMax: 8000 };

  // Schichten von innen nach außen, Folge nach der Zeichnung des ICPC. „bis“ ist der äußere Halbmesser
  // in Millimetern; nur die Außenmaße (20 und 50 mm) stammen aus der Quelle, die Zwischenwerte sind geschätzt.
  const SCHICHTEN = [
    { art: "faser", bis: 1.6 },
    { art: "kern", bis: 4 },
    { art: "mantel", bis: 5.5 },
    { art: "kupfer", bis: 7 },
    { art: "mantel", bis: 10 },
    { art: "stahl", bis: 22, nurArmiert: true },
    { art: "garn", bis: 25, nurArmiert: true }
  ];

  // Auslegungswerte laut Google (Mitteilungen vom 03.02.2021 und 07.04.2022).
  const KABEL = [
    { name: "Dunant", paare: 12, gesamt: 250 },
    { name: "Grace Hopper", paare: 16, gesamt: 340 },
    { name: "Topaz", paare: 16, gesamt: 240 }
  ];

  const QUELLEN = [
    { name: "ICPC: About Submarine Telecommunications Cables", url: "https://www.iscpc.org/documents/?id=1753", datum: "2011-10" },
    { name: "ITU / ICPC: International Advisory Body on Submarine Cable Resilience, Report of the Working Groups", url: "https://www.itu.int/digital-resilience/submarine-cables/wp-content/uploads/sites/2/2026/07/IAB-Publication-2026.pdf", datum: "2026-07-10" },
    { name: "TeleGeography: Submarine Cable Frequently Asked Questions", url: "https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions", datum: "2026" },
    { name: "Kentik: Diving Deep into Submarine Cables", url: "https://kentik.com/blog/diving-deep-into-submarine-cables-undersea-lifelines-of-internet-connectivity", datum: "2023-03-28" },
    { name: "Google Cloud: Google's Dunant subsea cable is now ready for service", url: "https://cloud.google.com/blog/products/infrastructure/googles-dunant-subsea-cable-is-now-ready-for-service", datum: "2021-02-03" },
    { name: "Google Cloud: Under the sea: Building Google's fiber optic network", url: "https://cloud.google.com/blog/topics/developers-practitioners/googles-subsea-fiber-optics-explained", datum: "2022-04-07" }
  ];

  // Zustand: bleibt bei einem Sprachwechsel erhalten.
  let teil = "querschnitt";
  let tiefe = 500;
  let laenge = 6000;
  let abstand = 70;
  let paare = KABEL[0].paare;
  let jePaar = KABEL[0].gesamt / KABEL[0].paare;

  function svg(marke, eigenschaften, klasse) {
    const knoten = document.createElementNS(SVG_NS, marke);
    for (const [name, wert] of Object.entries(eigenschaften || {})) knoten.setAttribute(name, wert);
    if (klasse) knoten.setAttribute("class", klasse);
    return knoten;
  }

  // Setzt Zahlen an die Stellen {name} eines Textes.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, name) => werte[name]);

  // Kennzahlen dieses Bausteins enthalten Worte und Einheiten: breitere Felder, der Wert darf umbrechen.
  function kennzahlen(eintraege) {
    const raster = H.zahlen(eintraege);
    raster.classList.add("sk-breit");
    return raster;
  }

  function bild(breite, hoehe, beschreibung) {
    return svg("svg", { viewBox: "0 0 " + breite + " " + hoehe, role: "img", "aria-label": beschreibung }, "sk-bild");
  }

  // ---------- Teil 1: Querschnitt ----------

  const istArmiert = () => tiefe <= MASSE.grabenBis;

  function schichtName(art) {
    if (art === "faser") return T("sk.s.faser");
    if (art === "kern") return T("sk.s.kern");
    if (art === "mantel") return T("sk.s.mantel");
    if (art === "kupfer") return T("sk.s.kupfer");
    if (art === "stahl") return T("sk.s.stahl");
    return T("sk.s.garn");
  }

  function durchmesserText(armiert) {
    if (armiert) return fuellen(T("sk.q.bis"), { a: H.zahlText(MASSE.armiertBis) });
    return fuellen(T("sk.spanne"), { a: H.zahlText(MASSE.tiefVon), b: H.zahlText(MASSE.tiefBis) }) + " mm";
  }

  // Tiefenprofil links im Bild: Meeresboden von der Küste bis zur Tiefsee, schematisch.
  const profilY = meter => 40 + 260 * meter / MASSE.tiefeMax;
  const profilX = meter => 58 + 92 * Math.pow(meter / MASSE.tiefeMax, 0.7);

  function profilZeichnen(flaeche) {
    const punkte = (von, bis) => {
      const liste = [];
      for (let meter = von; meter <= bis; meter += 250) liste.push(profilX(meter).toFixed(1) + "," + profilY(meter).toFixed(1));
      return liste;
    };
    const boden = punkte(0, MASSE.tiefeMax);
    flaeche.append(
      svg("polygon", { points: ["58,40", "150,40", "150,300", ...boden.slice().reverse()].join(" ") }, "sk-wasser"),
      svg("polygon", { points: [...boden, "58,300"].join(" ") }, "sk-grund"),
      svg("line", { x1: 58, y1: profilY(MASSE.grabenBis), x2: 150, y2: profilY(MASSE.grabenBis) }, "sk-grenzlinie"),
      svg("polyline", { points: punkte(MASSE.grabenBis, MASSE.tiefeMax).join(" ") }, "sk-lage"),
      svg("polyline", { points: punkte(0, MASSE.grabenBis).join(" ") }, "sk-graben")
    );
    for (let meter = 0; meter <= MASSE.tiefeMax; meter += 2000) {
      const beschriftung = svg("text", { x: 50, y: profilY(meter), "text-anchor": "end", "dominant-baseline": "central" });
      beschriftung.textContent = H.zahlText(meter) + " m";
      flaeche.append(svg("line", { x1: 53, y1: profilY(meter), x2: 58, y2: profilY(meter) }, "sk-strich"), beschriftung);
    }
    flaeche.append(
      svg("line", { x1: 58, y1: profilY(tiefe), x2: profilX(tiefe), y2: profilY(tiefe) }, "sk-fuehrung"),
      svg("circle", { cx: profilX(tiefe), cy: profilY(tiefe), r: 4.5 }, "sk-marke")
    );
  }

  // Ring aus Stahldrähten um die Mitte.
  function draehte(flaeche, mitteX, mitteY, abstandMitte, zahl, halbmesser) {
    for (let nummer = 0; nummer < zahl; nummer++) {
      const winkel = 2 * Math.PI * nummer / zahl;
      flaeche.append(svg("circle", {
        cx: (mitteX + abstandMitte * Math.cos(winkel)).toFixed(1),
        cy: (mitteY + abstandMitte * Math.sin(winkel)).toFixed(1),
        r: halbmesser
      }, "sk-f-stahl"));
    }
  }

  function querschnittZeichnen(armiert, schichten) {
    const flaeche = bild(460, 340, fuellen(T("sk.q.bild"), {
      tiefe: H.zahlText(tiefe),
      zahl: H.zahlText(schichten.length),
      durchmesser: durchmesserText(armiert)
    }));
    profilZeichnen(flaeche);

    // Beide Kabel im selben Maßstab: 5 Bildpunkte je Millimeter.
    const mitteX = 300;
    const mitteY = 160;
    const massstab = 5;
    for (const schicht of schichten.slice().reverse()) {
      const klasse = schicht.art === "stahl" ? "sk-f-stahlbett" : schicht.art === "faser" ? "sk-f-faserbett" : "sk-f-" + schicht.art;
      flaeche.append(svg("circle", { cx: mitteX, cy: mitteY, r: schicht.bis * massstab }, klasse));
      if (schicht.art === "stahl") {
        draehte(flaeche, mitteX, mitteY, 13 * massstab, 13, 3 * massstab - 1);
        draehte(flaeche, mitteX, mitteY, 19 * massstab, 19, 3 * massstab - 1);
      }
    }
    // Die Fasern selbst: ein Punkt in der Mitte und sechs darum.
    flaeche.append(svg("circle", { cx: mitteX, cy: mitteY, r: 1.4 }, "sk-f-faser"));
    for (let nummer = 0; nummer < 6; nummer++) {
      const winkel = Math.PI * nummer / 3;
      flaeche.append(svg("circle", { cx: (mitteX + 4.6 * Math.cos(winkel)).toFixed(1), cy: (mitteY + 4.6 * Math.sin(winkel)).toFixed(1), r: 1.4 }, "sk-f-faser"));
    }

    // Nummern an Führungslinien; die Namen stehen in der Liste unter dem Bild.
    let innen = 0;
    schichten.forEach((schicht, nummer) => {
      const winkel = (-70 + 120 * nummer / (schichten.length - 1)) * Math.PI / 180;
      const start = (schicht.art === "faser" ? 0.9 : (innen + schicht.bis) / 2) * massstab;
      innen = schicht.bis;
      const punkt = strecke => [(mitteX + strecke * Math.cos(winkel)).toFixed(1), (mitteY + strecke * Math.sin(winkel)).toFixed(1)];
      const [x1, y1] = punkt(start);
      const [x2, y2] = punkt(137);
      const [x3, y3] = punkt(149);
      const zahl = svg("text", { x: x3, y: y3, "text-anchor": "middle", "dominant-baseline": "central" }, "sk-nummer");
      zahl.textContent = String(nummer + 1);
      flaeche.append(svg("line", { x1, y1, x2, y2 }, "sk-zeiger"), svg("circle", { cx: x1, cy: y1, r: 1.8 }, "sk-zeigerpunkt"), zahl);
    });

    // Maßlinie unter dem Kabel.
    const aussen = schichten[schichten.length - 1].bis * massstab;
    const linieY = mitteY + aussen + 16;
    const mass = svg("text", { x: mitteX, y: linieY + 14, "text-anchor": "middle" }, "sk-mass");
    mass.textContent = durchmesserText(armiert);
    flaeche.append(
      svg("line", { x1: mitteX - aussen, y1: linieY, x2: mitteX + aussen, y2: linieY }, "sk-masslinie"),
      svg("line", { x1: mitteX - aussen, y1: linieY - 5, x2: mitteX - aussen, y2: linieY + 5 }, "sk-masslinie"),
      svg("line", { x1: mitteX + aussen, y1: linieY - 5, x2: mitteX + aussen, y2: linieY + 5 }, "sk-masslinie"),
      mass
    );
    return flaeche;
  }

  function legende(schichten) {
    const liste = el("ol", "sk-legende");
    schichten.forEach((schicht, nummer) => {
      const punkt = el("li");
      punkt.append(el("i", "sk-f-" + schicht.art), el("b", "", String(nummer + 1)), el("span", "", schichtName(schicht.art)));
      liste.append(punkt);
    });
    return liste;
  }

  function querschnittErgebnis(ergebnis) {
    const armiert = istArmiert();
    const schichten = SCHICHTEN.filter(schicht => armiert || !schicht.nurArmiert);
    const zahlen = kennzahlen([
      { wert: durchmesserText(armiert), name: T("sk.q.durchmesser"), klasse: "betont" },
      { wert: armiert ? T("sk.q.armiert.ja") : T("sk.q.armiert.nein"), name: T("sk.q.armierung") },
      { wert: armiert ? T("sk.q.grab.ja") : T("sk.q.grab.nein"), name: T("sk.q.eingegraben") },
      { wert: H.zahlText(schichten.length), name: T("sk.q.schichten") }
    ]);
    ergebnis.replaceChildren(
      querschnittZeichnen(armiert, schichten),
      legende(schichten),
      zahlen,
      H.vermerk(T("allg.veranschaulichung") + ": " + T("sk.q.vermerk"))
    );
  }

  function querschnittBauen(buehne) {
    const ergebnis = el("div", "spalte");
    const regler = H.regler(T("sk.tiefe"), 0, MASSE.tiefeMax, 100, tiefe, wert => H.zahlText(wert) + " m", wert => {
      tiefe = wert;
      querschnittErgebnis(ergebnis);
    });
    querschnittErgebnis(ergebnis);
    buehne.replaceChildren(H.zwei([
      regler.knoten,
      H.erklaerung(T("sk.q.was.titel"), T("sk.q.was.text")),
      H.erklaerung(T("sk.q.irrtum.titel"), T("sk.q.irrtum.text"))
    ], [ergebnis]));
  }

  // ---------- Teil 2: Verstärkerkette ----------

  // Zwischen zwei Stationen an Land liegt nach jedem vollen Abstand ein Verstärker.
  const verstaerkerZahl = () => Math.max(0, Math.ceil(laenge / abstand) - 1);

  function ketteZeichnen(zahl) {
    const jeZeile = 50;
    const schritt = 8;
    const links = 34;
    const oben = 22;
    const zeilenhoehe = 14;
    const zeilen = Math.max(1, Math.ceil(zahl / jeZeile));
    const flaeche = bild(460, oben * 2 + (zeilen - 1) * zeilenhoehe, fuellen(T("sk.k.bild"), {
      zahl: H.zahlText(zahl),
      laenge: H.zahlText(laenge),
      abstand: H.zahlText(abstand)
    }));
    // Die Kette läuft in Schlangenlinien: gerade Zeilen nach rechts, ungerade nach links.
    const ort = nummer => {
      const zeile = Math.floor(nummer / jeZeile);
      const spalte = nummer % jeZeile;
      return [links + (zeile % 2 ? jeZeile - 1 - spalte : spalte) * schritt, oben + zeile * zeilenhoehe];
    };
    const orte = [];
    for (let nummer = 0; nummer < zahl; nummer++) orte.push(ort(nummer));
    const anfang = [18, oben];
    const letzter = orte.length ? orte[orte.length - 1] : [links, oben];
    const nachLinks = Math.floor(Math.max(0, zahl - 1) / jeZeile) % 2 === 1;
    const ende = [letzter[0] + (nachLinks ? -16 : 16), letzter[1]];
    flaeche.append(svg("polyline", { points: [anfang, ...orte, ende].map(punkt => punkt.join(",")).join(" ") }, "sk-kabel"));
    for (const [x, y] of orte) flaeche.append(svg("circle", { cx: x, cy: y, r: 2.6 }, "sk-verstaerker"));
    for (const [x, y] of [anfang, ende]) flaeche.append(svg("rect", { x: x - 5, y: y - 5, width: 10, height: 10 }, "sk-station"));
    return flaeche;
  }

  function ketteErgebnis(ergebnis) {
    const zahl = verstaerkerZahl();
    ergebnis.replaceChildren(
      ketteZeichnen(zahl),
      kennzahlen([
        { wert: H.zahlText(zahl), name: T("sk.k.zahl"), klasse: "betont" },
        { wert: H.zahlText(zahl + 1), name: T("sk.k.abschnitte") },
        { wert: T("sk.k.speisungWert"), name: T("sk.k.speisung"), klasse: "warnung" }
      ]),
      H.vermerk(T("allg.naeherung") + ": " + T("sk.k.vermerk"))
    );
  }

  function ketteBauen(buehne) {
    const ergebnis = el("div", "spalte");
    const kilometer = wert => H.zahlText(wert) + " km";
    const reglerLaenge = H.regler(T("sk.k.laenge"), 500, 45000, 500, laenge, kilometer, wert => {
      laenge = wert;
      ketteErgebnis(ergebnis);
    });
    const reglerAbstand = H.regler(T("sk.k.abstand"), 50, 100, 5, abstand, kilometer, wert => {
      abstand = wert;
      ketteErgebnis(ergebnis);
    });
    ketteErgebnis(ergebnis);
    buehne.replaceChildren(H.zwei([
      reglerLaenge.knoten,
      reglerAbstand.knoten,
      H.erklaerung(T("sk.k.warum.titel"), T("sk.k.warum.text")),
      H.erklaerung(T("sk.k.woher.titel"), T("sk.k.woher.text"))
    ], [ergebnis]));
  }

  // ---------- Teil 3: Kapazitätsrechner ----------

  const tbit = wert => H.zahlText(wert, 1) + " Tbit/s";

  function paareZeichnen(gesamt) {
    const flaeche = bild(460, 44, fuellen(T("sk.c.bild"), { zahl: H.zahlText(paare), gesamt: H.zahlText(gesamt, 1) }));
    for (let nummer = 0; nummer < 24; nummer++) {
      const x = 18 + nummer * 18;
      const klasse = nummer < paare ? "sk-paar" : "sk-paar sk-leer";
      flaeche.append(svg("circle", { cx: x, cy: 22, r: 2.8 }, klasse), svg("circle", { cx: x + 6.5, cy: 22, r: 2.8 }, klasse));
    }
    return flaeche;
  }

  function kapazitaetErgebnis(ergebnis) {
    const gesamt = paare * jePaar;
    const groesster = Math.max(gesamt, ...KABEL.map(kabel => kabel.gesamt));
    const balken = el("div", "sk-balken");
    balken.append(H.balken(T("sk.c.eigen"), tbit(gesamt), gesamt / groesster));
    for (const kabel of KABEL) {
      const zeile = H.balken(kabel.name, tbit(kabel.gesamt), kabel.gesamt / groesster, "var(--blau)");
      zeile.firstElementChild.lang = "en";
      balken.append(zeile);
    }
    ergebnis.replaceChildren(
      paareZeichnen(gesamt),
      kennzahlen([
        { wert: tbit(gesamt), name: T("sk.c.gesamt"), klasse: "betont" },
        { wert: H.zahlText(paare), name: T("sk.c.paare") },
        { wert: tbit(jePaar), name: T("sk.c.jePaarKurz") }
      ]),
      balken,
      H.vermerk(T("sk.c.vermerk"))
    );
  }

  function kapazitaetBauen(buehne) {
    const ergebnis = el("div", "spalte");
    const reglerPaare = H.regler(T("sk.c.paare"), 1, 24, 1, paare, wert => H.zahlText(wert), wert => {
      paare = wert;
      kapazitaetErgebnis(ergebnis);
    });
    const reglerJePaar = H.regler(T("sk.c.jePaar"), 1, 30, 0.5, jePaar, tbit, wert => {
      jePaar = wert;
      kapazitaetErgebnis(ergebnis);
    });
    const vorwahl = el("div", "sk-vorwahl");
    vorwahl.setAttribute("role", "group");
    vorwahl.setAttribute("aria-label", T("sk.c.vorwahl"));
    for (const kabel of KABEL) {
      const knopf = H.eigenname("button", kabel.name);
      knopf.className = "knopf";
      knopf.type = "button";
      knopf.addEventListener("click", () => {
        paare = kabel.paare;
        jePaar = kabel.gesamt / kabel.paare;
        reglerPaare.setzen(paare);
        reglerJePaar.setzen(jePaar);
        kapazitaetErgebnis(ergebnis);
        Klang.doppelton();
      });
      vorwahl.append(knopf);
    }
    kapazitaetErgebnis(ergebnis);
    buehne.replaceChildren(H.zwei([
      vorwahl,
      reglerPaare.knoten,
      reglerJePaar.knoten,
      H.erklaerung(T("sk.c.rechnung.titel"), T("sk.c.rechnung.text")),
      H.erklaerung(T("sk.c.auslegung.titel"), T("sk.c.auslegung.text"))
    ], [ergebnis]));
  }

  // ---------- Teil 4: Schäden und Reparatur ----------

  // Eine Phase der Reparatur: Name, Dauer als Text und die Spanne in Tagen auf einer Skala von 0 bis 10.
  // Ohne Spanne bleibt die Spur leer und gestrichelt.
  function phase(name, dauer, von, bis) {
    const zeile = el("div", "sk-phase");
    const kopf = el("div", "sk-phase-kopf");
    kopf.append(el("span", "", name), el("b", "", dauer));
    const spur = el("div", von === undefined ? "sk-spur sk-offen" : "sk-spur");
    if (von !== undefined) {
      const spanne = el("i");
      spanne.style.setProperty("--l", von * 10 + "%");
      spanne.style.setProperty("--w", (bis - von) * 10 + "%");
      spur.append(spanne);
    }
    zeile.append(kopf, spur);
    return zeile;
  }

  function schaedenBauen(buehne) {
    const tage = (von, bis) => fuellen(T("sk.d.tage"), { a: H.zahlText(von), b: H.zahlText(bis) });
    const zahlen = kennzahlen([
      { wert: fuellen(T("sk.spanne"), { a: H.zahlText(150), b: H.zahlText(200) }), name: T("sk.d.fehler"), klasse: "betont" },
      { wert: fuellen(T("sk.d.unter"), { a: H.zahlText(20) }), name: T("sk.d.zeit2012") },
      { wert: fuellen(T("sk.d.ueber"), { a: H.zahlText(50) }), name: T("sk.d.zeit2024"), klasse: "warnung" }
    ]);
    const phasen = el("div", "sk-phasen");
    phasen.append(
      phase(T("sk.d.p1"), tage(1, 3), 1, 3),
      phase(T("sk.d.p2"), tage(3, 5), 3, 5),
      phase(T("sk.d.p3"), tage(2, 5) + "; " + T("sk.d.p3zusatz"), 2, 5),
      phase(T("sk.d.p4"), T("sk.d.p4dauer")),
      phase(T("sk.d.p5"), tage(1, 3), 1, 3),
      phase(T("sk.d.p6"), tage(1, 2), 1, 2)
    );
    const bericht = "ITU / ICPC, 2026";
    const ursachen = H.tabelle("sk-schmal", [T("allg.quelle"), T("sk.d.t.angabe")], [
      { zellen: [H.eigenname("span", "ICPC, 2011"), T("sk.d.u1")] },
      { zellen: [H.eigenname("span", "TeleGeography, 2026"), T("sk.d.u2")] },
      { zellen: [H.eigenname("span", bericht), T("sk.d.u3")] },
      { zellen: [H.eigenname("span", bericht), T("sk.d.u4")] },
      { zellen: [H.eigenname("span", bericht), T("sk.d.u5")] }
    ]);
    buehne.replaceChildren(H.zwei([
      H.erklaerung(T("sk.d.schaden.titel"), T("sk.d.schaden.text")),
      H.erklaerung(T("sk.d.reparatur.titel"), T("sk.d.reparatur.text"))
    ], [
      zahlen,
      H.erklaerung(T("sk.d.phasen.titel"), T("sk.d.phasen.text")),
      phasen,
      H.erklaerung(T("sk.d.ursachen.titel"), T("sk.d.ursachen.text")),
      ursachen
    ]));
  }

  // ---------- Aufbau ----------

  function teilBauen(buehne) {
    if (teil === "kette") ketteBauen(buehne);
    else if (teil === "kapazitaet") kapazitaetBauen(buehne);
    else if (teil === "schaeden") schaedenBauen(buehne);
    else querschnittBauen(buehne);
  }

  function bauen(ziel) {
    const buehne = el("div", "sk-buehne");
    const wahl = H.umschalter(T("sk.teile"), [
      { wert: "querschnitt", text: T("sk.teil.querschnitt") },
      { wert: "kette", text: T("sk.teil.kette") },
      { wert: "kapazitaet", text: T("sk.teil.kapazitaet") },
      { wert: "schaeden", text: T("sk.teil.schaeden") }
    ], teil, wert => {
      teil = wert;
      teilBauen(buehne);
      Klang.doppelton();
    });
    wahl.classList.add("sk-teile");
    teilBauen(buehne);
    ziel.replaceChildren(wahl, buehne, H.grenze(T("sk.grenze")), H.quellenliste(QUELLEN));
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.seekabel = { bauen };
})();
