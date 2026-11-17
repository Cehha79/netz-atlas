// Technik, Baustein „Namensauflösung“: gespielter Ablauf einer DNS-Abfrage Schritt für Schritt,
// mit leerem oder gefülltem Zwischenspeicher, dazu die Root-Server in Zahlen und Anycast.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, el, tafel } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG = "http://www.w3.org/2000/svg";

  // Root-Server in Zahlen: 13 Namen (IANA), 12 Betreiber und Zahl der Instanzen (root-servers.org),
  // gelesen am 17.11.2026. Die Zahl der Instanzen ändert sich laufend.
  // Bindet die Seite daten/rootserver.js ein, gelten Zahl der Instanzen und Stand von dort.
  const rootDaten = window.NETZ_ROOT;
  const ROOT = {
    namen: 13,
    betreiber: 12,
    instanzen: rootDaten && rootDaten.instanzenGesamt ? rootDaten.instanzenGesamt : 2046,
    stand: rootDaten && rootDaten.stand ? rootDaten.stand : "2026-11-17"
  };

  // Gespielte Adresse des Resolvers aus dem Bereich 192.0.2.0/24, der für Dokumentation reserviert ist (RFC 5737).
  const RESOLVER = "192.0.2.53";

  // Die drei Beispielnamen. Alle Namen sind für Beispiele reserviert (RFC 2606), alle Adressen stammen aus
  // den Bereichen für Dokumentation (RFC 5737). Die Antworten sind erfunden, nichts wird abgefragt.
  // reserviert: Die Endung selbst gibt es im echten DNS nicht.
  const namen = [
    { id: "org", name: "www.example.org", endung: ".org", zone: "example.org", ns: "ns1.example.org", nsAdresse: "198.51.100.53", adresse: "203.0.113.10" },
    { id: "example", name: "beispiel.example", endung: ".example", zone: "beispiel.example", ns: "ns1.beispiel.example", nsAdresse: "198.51.100.54", adresse: "203.0.113.20", reserviert: true },
    { id: "net", name: "mail.example.net", endung: ".net", zone: "example.net", ns: "ns1.example.net", nsAdresse: "198.51.100.55", adresse: "203.0.113.25" }
  ];

  // Die Beteiligten in der Reihenfolge der Zeichnung:
  // 0 Gerät, 1 Resolver, 2 Root-Server, 3 Server der Endung, 4 zuständiger Namensserver.
  // Jeder Schritt ist eine Nachricht von einem Beteiligten zum anderen.
  const ablaeufe = {
    leer: [
      { von: 0, nach: 1, art: "anfrage", text: () => T("dns.l1") },
      { von: 1, nach: 2, art: "anfrage", text: () => T("dns.l2") },
      { von: 2, nach: 1, art: "verweis", text: () => T("dns.l3") },
      { von: 1, nach: 3, art: "anfrage", text: () => T("dns.l4") },
      { von: 3, nach: 1, art: "verweis", text: () => T("dns.l5") },
      { von: 1, nach: 4, art: "anfrage", text: () => T("dns.l6") },
      { von: 4, nach: 1, art: "antwort", text: () => T("dns.l7") },
      { von: 1, nach: 0, art: "antwort", text: () => T("dns.l8") }
    ],
    voll: [
      { von: 0, nach: 1, art: "anfrage", text: () => T("dns.l1") },
      { von: 1, nach: 0, art: "antwort", text: () => T("dns.v2") }
    ]
  };
  // Nach diesem Schritt des Ablaufs „leer“ liegt die Antwort im Zwischenspeicher des Resolvers.
  const GEMERKT_AB = 7;
  // Die Zeichnung ist immer so hoch wie der längste Ablauf, damit sie beim Umschalten nicht springt.
  const ZEILEN = ablaeufe.leer.length;

  const quellen = [
    { name: "IANA: Root Servers", url: "https://www.iana.org/domains/root/servers", datum: "2026-11-17" },
    { name: "Root Server Technical Operations Association", url: "https://root-servers.org/", datum: "2026-11-17" },
    { name: "RFC 1034: Domain Names, Concepts and Facilities", url: "https://www.rfc-editor.org/rfc/rfc1034.txt", datum: "1987-11" },
    { name: "RFC 4786: Operation of Anycast Services", url: "https://www.rfc-editor.org/rfc/rfc4786.txt", datum: "2006-12" },
    { name: "RFC 2606: Reserved Top Level DNS Names", url: "https://www.rfc-editor.org/rfc/rfc2606.txt", datum: "1999-06" },
    { name: "RFC 5737: IPv4 Address Blocks Reserved for Documentation", url: "https://www.rfc-editor.org/rfc/rfc5737.txt", datum: "2010-01" }
  ];

  // Zustand: gewählter Name, Zwischenspeicher und Schritt. Er übersteht einen Sprachwechsel.
  // schritt 0 heißt: noch nichts gefragt.
  let nameId = "org";
  let speicher = "leer";
  let schritt = 0;
  // Die Knoten des zuletzt gebauten Bausteins.
  let teile = null;
  let beobachter = null;

  const artName = {
    anfrage: () => T("dns.p.anfrage"),
    verweis: () => T("dns.p.verweis"),
    antwort: () => T("dns.p.antwort")
  };

  // Setzt Werte in einen Text ein: aus „Endung {endung}“ wird „Endung .org“.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, platz) => werte[platz]);
  const aktuell = () => namen.find(eintrag => eintrag.id === nameId) || namen[0];
  const ablauf = () => ablaeufe[speicher];
  const anfragenBis = ende => ablauf().slice(0, ende).filter(nachricht => nachricht.art === "anfrage").length;
  const gemerkt = () => speicher === "voll" || schritt >= GEMERKT_AB;

  function svg(marke, eigenschaften, text) {
    const knoten = document.createElementNS(SVG, marke);
    for (const [name, wert] of Object.entries(eigenschaften || {})) knoten.setAttribute(name, wert);
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Teilt einen Text an Leerzeichen in Zeilen mit höchstens max Zeichen.
  function umbrechen(text, max) {
    const zeilen = [];
    let lauf = "";
    for (const wort of text.split(" ")) {
      const probe = lauf ? lauf + " " + wort : wort;
      if (probe.length <= max || !lauf) {
        lauf = probe;
      } else {
        zeilen.push(lauf);
        lauf = wort;
      }
    }
    if (lauf) zeilen.push(lauf);
    return zeilen;
  }

  const platzbreite = () => Math.max(300, Math.min(820, Math.floor(teile.bild.clientWidth) || 600));

  // Zeichnet den Ablauf als Folge von Pfeilen zwischen fünf senkrechten Linien, in der tatsächlichen
  // Breite des Platzes, damit die Schrift nie schrumpft. Gezeichnet werden nur die Schritte bis zum aktuellen.
  function bildZeichnen() {
    const eintrag = aktuell();
    const nachrichten = ablauf();
    const breite = platzbreite();
    const schrift = breite < 480 ? 9.5 : 11;
    const zeichen = schrift * 0.62;
    const zeile = schrift + 3;
    const rand = 2;
    const teilung = (breite - 2 * rand) / 5;
    const mitte = nummer => rand + (nummer + 0.5) * teilung;
    const platz = Math.max(8, Math.floor((teilung - 6) / zeichen));

    // Kopfzeilen der fünf Beteiligten; unter dem Resolver steht der Zustand seines Zwischenspeichers.
    const koepfe = [
      umbrechen(T("dns.t.geraet"), platz),
      umbrechen(T("dns.t.resolver"), platz),
      umbrechen(T("dns.t.root"), platz),
      umbrechen(fuellen(T("dns.t.endung"), { endung: eintrag.endung }), platz),
      umbrechen(T("dns.t.zustaendig"), platz)
    ];
    const speicherzeilen = umbrechen(gemerkt() ? T("dns.sp.voll") : T("dns.sp.leer"), platz);
    const kopfzeilen = Math.max(koepfe[1].length + speicherzeilen.length, ...koepfe.map(zeilen => zeilen.length));
    const kopf = kopfzeilen * zeile + 8;
    const abstand = 28;
    const ersteY = kopf + 26;
    const hoehe = ersteY + (ZEILEN - 1) * abstand + 16;
    // Im Ablauf mit gefülltem Zwischenspeicher bleiben Root, Endung und zuständiger Server unbeteiligt.
    const beteiligt = new Set(nachrichten.flatMap(nachricht => [nachricht.von, nachricht.nach]));

    const bild = svg("svg", { viewBox: "0 0 " + breite + " " + hoehe, width: breite, height: hoehe, role: "img", "font-size": schrift });
    bild.setAttribute("aria-label", fuellen(T("dns.bildLabel"), {
      name: eintrag.name,
      zustand: speicher === "voll" ? T("dns.voll") : T("dns.leer"),
      schritt: H.zahlText(schritt),
      gesamt: H.zahlText(nachrichten.length),
      anfragen: H.zahlText(anfragenBis(schritt))
    }));

    koepfe.forEach((zeilen, nummer) => {
      const gruppe = svg("g", { class: "dns-kopf" + (beteiligt.has(nummer) ? "" : " dns-ruht") });
      gruppe.append(svg("line", { class: "dns-linie", x1: mitte(nummer), y1: kopf, x2: mitte(nummer), y2: hoehe - 4 }));
      gruppe.append(svg("rect", { class: "dns-marke", x: mitte(nummer) - 3, y: kopf - 3, width: 6, height: 6 }));
      zeilen.forEach((text, platznummer) => {
        gruppe.append(svg("text", { class: "dns-name", x: mitte(nummer), y: (platznummer + 1) * zeile, "text-anchor": "middle" }, text));
      });
      if (nummer === 1) {
        speicherzeilen.forEach((text, platznummer) => {
          gruppe.append(svg("text", { class: "dns-speicher" + (gemerkt() ? " dns-gemerkt" : ""), x: mitte(nummer), y: (zeilen.length + platznummer + 1) * zeile, "text-anchor": "middle" }, text));
        });
      }
      bild.append(gruppe);
    });

    nachrichten.slice(0, schritt).forEach((nachricht, nummer) => {
      const y = ersteY + nummer * abstand;
      const richtung = nachricht.nach > nachricht.von ? 1 : -1;
      const start = mitte(nachricht.von);
      const ende = mitte(nachricht.nach);
      const gruppe = svg("g", { class: "dns-pfeil dns-" + nachricht.art + (nummer === schritt - 1 ? " dns-jetzt" : " dns-frueher") });
      gruppe.append(svg("line", { x1: start, y1: y, x2: ende - richtung * 8, y2: y }));
      gruppe.append(svg("path", { d: "M" + ende + " " + y + " l" + (-richtung * 9) + " -4 v8 z" }));
      gruppe.append(svg("circle", { cx: start, cy: y, r: 2.5 }));
      gruppe.append(svg("text", { x: (start + ende) / 2, y: y - 6, "text-anchor": "middle" }, (nummer + 1) + " " + artName[nachricht.art]()));
      bild.append(gruppe);
    });

    teile.bild.replaceChildren(bild);
    teile.breite = breite;
  }

  // Beschreibung des aktuellen Schritts.
  function schrittBauen() {
    const eintrag = aktuell();
    const nachrichten = ablauf();
    const kopf = el("b", "", fuellen(T("dns.schritt"), { a: H.zahlText(schritt), b: H.zahlText(nachrichten.length) }));
    let text = T("dns.start");
    if (schritt > 0) {
      text = fuellen(nachrichten[schritt - 1].text(), {
        name: eintrag.name,
        endung: eintrag.endung,
        zone: eintrag.zone,
        ns: eintrag.ns,
        nsAdresse: eintrag.nsAdresse,
        adresse: eintrag.adresse,
        resolver: RESOLVER,
        anfragen: H.zahlText(anfragenBis(nachrichten.length))
      });
      // Die Endung .example gibt es nur als reserviertes Beispiel; das steht beim Verweis der Root dabei.
      if (eintrag.reserviert && speicher === "leer" && schritt === 3) text += " " + T("dns.l3res");
    }
    teile.schritt.replaceChildren(kopf, el("p", "", text));
  }

  function zahlenBauen() {
    const nachrichten = ablauf();
    teile.zahlen.replaceChildren(H.zahlen([
      { wert: H.zahlText(anfragenBis(schritt)), name: T("dns.z.bisher"), klasse: "betont" },
      { wert: H.zahlText(anfragenBis(nachrichten.length)), name: T("dns.z.gesamt") },
      { wert: H.zahlText(schritt) + " / " + H.zahlText(nachrichten.length), name: T("dns.z.schritt") }
    ]));
  }

  function knoepfeStellen() {
    const amEnde = schritt >= ablauf().length;
    const hatteFokus = document.activeElement === teile.weiter;
    teile.weiter.disabled = amEnde;
    teile.vonVorn.disabled = schritt === 0;
    if (hatteFokus && amEnde) teile.vonVorn.focus();
  }

  // Zeigt den aktuellen Zustand: Zeichnung, Zahlen, Beschreibung und Knöpfe.
  function zeigen() {
    if (!teile) return;
    bildZeichnen();
    zahlenBauen();
    schrittBauen();
    knoepfeStellen();
  }

  // Zweite Tafel: die Root-Server in Zahlen und was Anycast ist.
  function rootTafel() {
    const kasten = tafel(T("dns.root.titel"), T("allg.stand") + " " + H.datumText(ROOT.stand));
    const rumpf = el("div", "tafel-rumpf dns-root");
    rumpf.append(
      H.zahlen([
        { wert: H.zahlText(ROOT.namen), name: T("dns.root.namen") },
        { wert: H.zahlText(ROOT.betreiber), name: T("dns.root.betreiber") },
        { wert: H.zahlText(ROOT.instanzen), name: T("dns.root.instanzen"), klasse: "betont" }
      ]),
      H.vermerk(fuellen(T("dns.root.vermerk"), { datum: H.datumText(ROOT.stand), betreiber: H.zahlText(ROOT.betreiber), namen: H.zahlText(ROOT.namen) })),
      H.erklaerung(T("dns.any.titel"), fuellen(T("dns.any.text"), { namen: H.zahlText(ROOT.namen) }))
    );
    kasten.append(rumpf);
    return kasten;
  }

  function bauen(ziel) {
    if (beobachter) beobachter.disconnect();

    const knopf = (text, beiKlick) => {
      const taste = el("button", "knopf", text);
      taste.type = "button";
      taste.addEventListener("click", beiKlick);
      return taste;
    };
    const weiter = knopf(T("dns.weiter"), () => {
      if (schritt < ablauf().length) schritt++;
      Klang.ton(880, 0.3);
      zeigen();
    });
    const vonVorn = knopf(T("dns.vonVorn"), () => {
      schritt = 0;
      Klang.ton(660, 0.3);
      zeigen();
      weiter.focus();
    });
    const knoepfe = el("div", "dns-knoepfe");
    knoepfe.setAttribute("role", "group");
    knoepfe.setAttribute("aria-label", T("dns.bedienung"));
    knoepfe.append(weiter, vonVorn);

    const wahl = H.auswahl(T("dns.name"), namen.map(eintrag => ({ wert: eintrag.id, text: eintrag.name })), nameId, wert => {
      nameId = wert;
      schritt = 0;
      Klang.doppelton();
      zeigen();
    }, true);

    const schalter = el("div", "eingabe");
    schalter.append(
      el("span", "dns-beschriftung", T("dns.speicher")),
      H.umschalter(T("dns.speicher"), [{ wert: "leer", text: T("dns.leer") }, { wert: "voll", text: T("dns.voll") }], speicher, wert => {
        speicher = wert;
        schritt = 0;
        Klang.doppelton();
        zeigen();
      })
    );

    const bild = el("div", "dns-bild");
    const zahlen = el("div");
    const schrittfeld = el("div", "dns-schritt");
    schrittfeld.setAttribute("aria-live", "polite");

    const links = [
      wahl,
      schalter,
      knoepfe,
      H.erklaerung(T("dns.e1.titel"), T("dns.e1.text")),
      H.erklaerung(T("dns.e2.titel"), T("dns.e2.text")),
      H.erklaerung(T("dns.e3.titel"), fuellen(T("dns.e3.text"), { namen: H.zahlText(ROOT.namen), instanzen: H.zahlText(ROOT.instanzen) }))
    ];
    const rechts = [
      H.vermerk(T("dns.veranschaulichung")),
      bild,
      zahlen,
      schrittfeld,
      rootTafel()
    ];
    const wurzel = H.zwei(links, rechts);
    ziel.replaceChildren(wurzel, H.grenze(T("dns.grenze")), H.quellenliste(quellen));

    teile = { wurzel, bild, zahlen, schritt: schrittfeld, weiter, vonVorn, breite: 0 };
    zeigen();

    // Ändert sich die Breite des Platzes, wird die Zeichnung neu aufgebaut.
    if (window.ResizeObserver) {
      const gebaut = teile;
      beobachter = new ResizeObserver(() => {
        if (teile !== gebaut || !gebaut.wurzel.isConnected) return;
        if (platzbreite() !== gebaut.breite) bildZeichnen();
      });
      beobachter.observe(bild);
    }
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.dns = { bauen };
})();
