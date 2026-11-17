// Technik, Baustein „Paketweg“: vier erfundene Beispielwege als Stationenkette mit gerechneter Laufzeit
// je Abschnitt und einer nachgestellten Traceroute-Ausgabe, die zeigt, was Traceroute nicht zeigt.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG = "http://www.w3.org/2000/svg";

  // Lichtgeschwindigkeit im Vakuum in km/s (Definition). In Glasfaser sind es rund 204.000 km/s,
  // etwa zwei Drittel davon; derselbe Wert wie in den Schaubildern Laufzeit und Inhalte.
  const C_VAKUUM = 299792.458;
  const C_FASER = 204000;
  // Mittlerer Erdradius in km für die Luftlinie auf der Kugel.
  const ERDRADIUS = 6371;
  // Vergleichswerte der Messstudie (Bozkurt u. a., PAM 2017): Median gegenüber Licht im Vakuum auf der Luftlinie.
  const STUDIE_ROUTERPFAD = 2.1;
  const STUDIE_PING = 3.1;
  // Abstand der Schritte beim Abspielen in Millisekunden.
  const TAKT = 1100;

  // Koordinaten der Stadtmitten (Breite, Länge) für die gerechnete Luftlinie.
  const orte = {
    stuttgart: [48.78, 9.18],
    istanbul: [41.01, 28.98],
    frankfurt: [50.11, 8.68],
    newyork: [40.71, -74.01],
    singapur: [1.35, 103.82]
  };

  // Die vier Beispielwege. Alles daran ist erfunden: Netze, Rechnernamen, Adressen und die Längen der
  // Abschnitte. Die Adressen stammen aus den Bereichen für Dokumentation (RFC 5737, RFC 3849), die Namen
  // aus den reservierten Beispielnamen (RFC 2606). km ist die angenommene Länge der Glasfaser im Abschnitt.
  // tunnel: Zwischenrouter erscheinen nicht in Traceroute. stumm: ein Router des Abschnitts antwortet nicht.
  const wege = [
    {
      id: "stuttgart",
      von: "stuttgart",
      nach: "frankfurt",
      abschnitte: [
        { art: "heim", km: 0.03, host: "gw.home.example", adresse: "192.0.2.1" },
        { art: "zugang", km: 240, netz: "A", host: "core.net-a.example", adresse: "198.51.100.1" },
        { art: "knoten", km: 2, host: "ix.net-b.example", adresse: "203.0.113.1" },
        { art: "ziel", km: 12, netz: "B", host: "dc.net-b.example", adresse: "203.0.113.9" },
        { art: "server", km: 0.2, host: "www.example.org", adresse: "203.0.113.80" }
      ]
    },
    {
      id: "istanbul",
      von: "istanbul",
      nach: "frankfurt",
      abschnitte: [
        { art: "heim", km: 0.03, host: "gw.home.example", adresse: "192.0.2.1" },
        { art: "zugang", km: 40, netz: "A", host: "core.net-a.example", adresse: "192.0.2.129" },
        { art: "transit", km: 2600, netz: "B", host: "edge.net-b.example", adresse: "198.51.100.1", tunnel: true },
        { art: "ziel", km: 12, netz: "C", host: "dc.net-c.example", adresse: "203.0.113.9", stumm: true },
        { art: "server", km: 0.2, host: "www.example.net", adresse: "203.0.113.80" }
      ]
    },
    {
      id: "newyork",
      von: "frankfurt",
      nach: "newyork",
      abschnitte: [
        { art: "heim", km: 0.03, host: "gw.home.example", adresse: "192.0.2.1" },
        { art: "zugang", km: 25, netz: "A", host: "core.net-a.example", adresse: "192.0.2.129" },
        { art: "transit", km: 1100, netz: "B", host: "coast1.net-b.example", adresse: "198.51.100.1", tunnel: true },
        { art: "seekabel", km: 6400, host: "coast2.net-b.example", adresse: "198.51.100.2" },
        { art: "ziel", km: 160, netz: "C", host: "dc.net-c.example", adresse: "203.0.113.9" },
        { art: "server", km: 0.2, host: "www.example.com", adresse: "203.0.113.80" }
      ]
    },
    {
      id: "singapur",
      von: "frankfurt",
      nach: "singapur",
      abschnitte: [
        { art: "heim", km: 0.03, host: "gw.home.example", adresse: "2001:db8:1::1" },
        { art: "zugang", km: 25, netz: "A", host: "core.net-a.example", adresse: "2001:db8:a::1" },
        { art: "transit", km: 1000, netz: "B", host: "coast1.net-b.example", adresse: "2001:db8:b::1", tunnel: true },
        { art: "seekabel", km: 13000, host: "coast2.net-b.example", adresse: "2001:db8:b::2" },
        { art: "ziel", km: 30, netz: "C", host: "dc.net-c.example", adresse: "2001:db8:c::9", stumm: true },
        { art: "server", km: 0.2, host: "server.example", adresse: "2001:db8:c::80" }
      ]
    }
  ];

  const quellen = [
    { name: "Bozkurt et al.: Why Is the Internet so Slow?! (PAM 2017)", url: "https://balakrishnanc.github.io/papers/bozkurt-pam2017.pdf", datum: "2017" },
    { name: "RFC 792: Internet Control Message Protocol", url: "https://www.rfc-editor.org/rfc/rfc792.txt", datum: "1981-09" },
    { name: "RFC 5737: IPv4 Address Blocks Reserved for Documentation", url: "https://www.rfc-editor.org/rfc/rfc5737.txt", datum: "2010-01" },
    { name: "RFC 3849: IPv6 Address Prefix Reserved for Documentation", url: "https://www.rfc-editor.org/rfc/rfc3849.txt", datum: "2004-07" },
    { name: "RFC 2606: Reserved Top Level DNS Names", url: "https://www.rfc-editor.org/rfc/rfc2606.txt", datum: "1999-06" }
  ];

  // Zustand: gewählter Weg und Schritt. Er übersteht einen Sprachwechsel.
  // schritt 0 ist der Start, 1 bis n sind die Abschnitte, n + 1 ist der Rückweg.
  let wegId = "stuttgart";
  let schritt = 0;
  // Laufender Zeitgeber des Abspielens und die Knoten des zuletzt gebauten Bausteins.
  let zeitgeber = null;
  let teile = null;
  let beobachter = null;

  // Die Namen der Wege, der Arten und die Beschreibungen stehen als feste Schlüssel da,
  // damit das Prüfskript sie findet.
  const wegName = {
    stuttgart: () => T("pw.weg.stuttgart"),
    istanbul: () => T("pw.weg.istanbul"),
    newyork: () => T("pw.weg.newyork"),
    singapur: () => T("pw.weg.singapur")
  };
  const artName = {
    heim: () => T("pw.art.heim"),
    zugang: () => T("pw.art.zugang"),
    knoten: () => T("pw.art.knoten"),
    transit: () => T("pw.art.transit"),
    seekabel: () => T("pw.art.seekabel"),
    ziel: () => T("pw.art.ziel"),
    server: () => T("pw.art.server")
  };
  const artText = {
    heim: () => T("pw.s.heim"),
    zugang: () => T("pw.s.zugang"),
    knoten: () => T("pw.s.knoten"),
    transit: () => T("pw.s.transit"),
    seekabel: () => T("pw.s.seekabel"),
    ziel: () => T("pw.s.ziel"),
    server: () => T("pw.s.server")
  };

  // Setzt Werte in einen Text ein: aus „{km} km“ wird „240 km“.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, platz) => werte[platz]);
  const aktuell = () => wege.find(weg => weg.id === wegId) || wege[0];
  const kmText = km => H.zahlText(km, km < 1 ? 2 : 0);
  const msText = ms => (ms < 0.005 ? "< " + H.zahlText(0.01, 2) : H.zahlText(ms, 2));

  // Wem der Abschnitt im Beispiel gehört: ein Beispielnetz, der Beispielknoten, das Beispielkabel.
  function zusatz(abschnitt) {
    if (abschnitt.netz) return T("pw.netz") + " " + abschnitt.netz;
    if (abschnitt.art === "knoten") return T("pw.beispielknoten");
    if (abschnitt.art === "seekabel") return T("pw.beispielkabel");
    if (abschnitt.art === "heim") return T("pw.zuHause");
    return abschnitt.host;
  }

  // Luftlinie auf der Kugel zwischen zwei Orten in km.
  function luftlinie(a, b) {
    const bogen = grad => grad * Math.PI / 180;
    const breite = bogen(b[0] - a[0]);
    const laenge = bogen(b[1] - a[1]);
    const h = Math.sin(breite / 2) ** 2 + Math.cos(bogen(a[0])) * Math.cos(bogen(b[0])) * Math.sin(laenge / 2) ** 2;
    return 2 * ERDRADIUS * Math.asin(Math.sqrt(h));
  }

  // Rechnet den Weg durch: Laufzeit je Abschnitt = Länge / Geschwindigkeit in der Faser.
  function rechnen(weg) {
    let summe = 0;
    const zeilen = weg.abschnitte.map(abschnitt => {
      summe += abschnitt.km;
      return { ...abschnitt, ms: abschnitt.km / C_FASER * 1000, bisKm: summe, bisMs: summe / C_FASER * 1000 };
    });
    const hinMs = summe / C_FASER * 1000;
    const luftKm = luftlinie(orte[weg.von], orte[weg.nach]);
    const vakuumMs = 2 * luftKm / C_VAKUUM * 1000;
    return { zeilen, km: summe, hinMs, rttMs: 2 * hinMs, luftKm, faktor: 2 * hinMs / vakuumMs };
  }

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

  // Zeichnet die Stationenkette in der tatsächlichen Breite des Platzes, damit die Schrift nie schrumpft.
  // Die Namen stehen abwechselnd über und unter den Kästen, die letzte Station immer oben.
  function ketteZeichnen(weg, ergebnis) {
    const n = ergebnis.zeilen.length;
    const breite = Math.max(300, Math.min(820, Math.floor(teile.bild.clientWidth) || 600));
    const schrift = breite < 480 ? 9.5 : 11;
    const zeichen = schrift * 0.62;
    const zeile = schrift + 3;
    const rand = 4;
    const teilung = (breite - 2 * rand) / n;
    const kastenY = 2 * zeile + 8;
    const kastenH = 30;
    const mitteY = kastenY + kastenH / 2;
    const rueckY = kastenY + kastenH + 2 * zeile + 16;
    const hoehe = rueckY + zeile + 8;
    const aktiv = schritt - 1;
    const rueck = schritt > n;

    const bild = svg("svg", { viewBox: "0 0 " + breite + " " + hoehe, width: breite, height: hoehe, role: "img", "font-size": schrift });
    const jetzt = schritt === 0 ? T("pw.jetzt.start") : rueck ? T("pw.jetzt.rueck") : artName[ergebnis.zeilen[aktiv].art]();
    bild.setAttribute("aria-label", fuellen(T("pw.bildLabel"), {
      weg: wegName[weg.id](),
      n: H.zahlText(n),
      km: kmText(ergebnis.km),
      rtt: msText(ergebnis.rttMs),
      jetzt
    }));

    ergebnis.zeilen.forEach((abschnitt, nummer) => {
      const links = rand + nummer * teilung + 6;
      const weite = teilung - 12;
      const mitte = links + weite / 2;
      const zustand = rueck || nummer < aktiv ? " pw-vorbei" : nummer === aktiv ? " pw-jetzt" : "";

      // Verbindung zum nächsten Kasten.
      if (nummer < n - 1) {
        bild.append(svg("line", { class: "pw-strang" + (rueck || nummer < aktiv ? " pw-vorbei" : ""), x1: links + weite, y1: mitteY, x2: links + weite + 12, y2: mitteY }));
      }

      const gruppe = svg("g", { class: "pw-station" + zustand });
      gruppe.append(svg("title", {}, (nummer + 1) + " " + artName[abschnitt.art]() + ": " + kmText(abschnitt.km) + " km, " + msText(abschnitt.ms) + " ms"));
      gruppe.append(svg("rect", { class: "pw-kasten", x: links, y: kastenY, width: weite, height: kastenH }));
      // Das Seekabel bekommt eine Wellenlinie am unteren Rand des Kastens.
      if (abschnitt.art === "seekabel") {
        let pfad = "M" + (links + 4) + " " + (kastenY + kastenH - 5);
        for (let x = links + 4; x + 8 <= links + weite - 4; x += 8) pfad += " q2 -3 4 0 t4 0";
        gruppe.append(svg("path", { class: "pw-welle", d: pfad }));
      }
      gruppe.append(svg("text", { class: "pw-nummer", x: mitte, y: mitteY + (abschnitt.art === "seekabel" ? 1 : 4), "text-anchor": "middle" }, String(nummer + 1)));

      // Name der Station: erste links bündig, letzte rechts bündig, die übrigen mittig.
      const oben = nummer % 2 === 0 || nummer === n - 1;
      const amRand = nummer === 0 || nummer === n - 1;
      // Steht die vorletzte Station ebenfalls oben, teilt sie sich die Zeile mit der letzten und bekommt weniger Platz.
      const nebenLetzter = nummer === n - 2 && oben;
      const platz = Math.max(8, Math.floor((amRand ? 1.5 * teilung : nebenLetzter ? teilung + 10 : 2 * teilung - 10) / zeichen));
      const zeilen = umbrechen(artName[abschnitt.art](), platz).slice(0, 2);
      const anker = nummer === 0 ? "start" : nummer === n - 1 ? "end" : "middle";
      const x = nummer === 0 ? links : nummer === n - 1 ? links + weite : mitte;
      zeilen.forEach((text, platznummer) => {
        const y = oben ? 2 * zeile - (zeilen.length - 1 - platznummer) * zeile : kastenY + kastenH + 3 + (platznummer + 1) * zeile;
        gruppe.append(svg("text", { class: "pw-name", x, y, "text-anchor": anker }, text));
      });
      bild.append(gruppe);
    });

    // Rückweg der Antwort: immer angedeutet, im letzten Schritt hervorgehoben.
    const erste = rand + teilung / 2;
    const letzte = rand + (n - 0.5) * teilung;
    const unten = kastenY + kastenH;
    const rueckweg = svg("g", { class: "pw-rueckweg" + (rueck ? " pw-jetzt" : "") });
    rueckweg.append(svg("path", { class: "pw-rueck", d: "M" + letzte + " " + (unten + 2) + " V" + rueckY + " H" + erste + " V" + (unten + 9) }));
    rueckweg.append(svg("path", { class: "pw-spitze", d: "M" + erste + " " + (unten + 2) + " l-4 8 h8 z" }));
    rueckweg.append(svg("text", { class: "pw-rueck-text", x: breite / 2, y: rueckY + zeile, "text-anchor": "middle" }, T("pw.rueckweg")));
    bild.append(rueckweg);

    teile.bild.replaceChildren(bild);
    teile.breite = breite;
  }

  // Beschreibung des aktuellen Schritts mit Zwischensumme.
  function schrittBauen(weg, ergebnis) {
    const n = ergebnis.zeilen.length;
    const ziel = ergebnis.zeilen[n - 1];
    const kopf = el("b", "", fuellen(T("pw.schritt"), { a: H.zahlText(schritt), b: H.zahlText(n + 1) }));
    const teileText = [];
    let summe = "";
    if (schritt === 0) {
      teileText.push(fuellen(T("pw.s.start"), { adresse: ziel.adresse, host: ziel.host }));
    } else if (schritt > n) {
      teileText.push(fuellen(T("pw.s.rueck"), { rtt: msText(ergebnis.rttMs) }));
    } else {
      const abschnitt = ergebnis.zeilen[schritt - 1];
      teileText.push(fuellen(artText[abschnitt.art](), { netz: zusatz(abschnitt), host: abschnitt.host }));
      if (abschnitt.tunnel) teileText.push(T("pw.s.tunnel"));
      if (abschnitt.stumm) teileText.push(T("pw.s.stumm"));
      summe = fuellen(T("pw.bisHier"), { km: kmText(abschnitt.bisKm), ms: msText(abschnitt.bisMs) });
    }
    const absatz = el("p", "", teileText.join(" "));
    teile.schritt.replaceChildren(kopf, absatz);
    if (summe) teile.schritt.append(el("small", "", summe));
  }

  // Liste der Abschnitte: Balken nach Anteil an der Laufzeit, dazu Länge und Laufzeit einfach.
  function abschnitteBauen(ergebnis) {
    const n = ergebnis.zeilen.length;
    const reihen = ergebnis.zeilen.map((abschnitt, nummer) => {
      const reihe = H.balken((nummer + 1) + " " + artName[abschnitt.art](), kmText(abschnitt.km) + " km · " + msText(abschnitt.ms) + " ms", abschnitt.km / ergebnis.km, abschnitt.art === "seekabel" ? "var(--blau)" : "");
      const beiname = el("small", "", zusatz(abschnitt));
      if (abschnitt.art === "server") beiname.lang = "en";
      reihe.querySelector(".name").append(beiname);
      if (schritt > n || nummer < schritt - 1) reihe.classList.add("pw-vorbei");
      if (nummer === schritt - 1) reihe.classList.add("pw-jetzt");
      return reihe;
    });
    teile.abschnitte.replaceChildren(...reihen);
  }

  function zahlenBauen(ergebnis) {
    teile.zahlen.replaceChildren(H.zahlen([
      { wert: kmText(ergebnis.km) + " km", name: T("pw.z.weg") },
      { wert: msText(ergebnis.hinMs) + " ms", name: T("pw.z.hin") },
      { wert: msText(ergebnis.rttMs) + " ms", name: T("pw.z.rtt"), klasse: "betont" },
      { wert: H.zahlText(Math.round(ergebnis.luftKm / 10) * 10) + " km", name: T("pw.z.luft") },
      { wert: "× " + H.zahlText(ergebnis.faktor, 1), name: T("pw.z.faktor") }
    ]));
  }

  // Nachgestellte Traceroute-Ausgabe. Jeder Abschnitt endet an einem Router, der als Schritt erscheint;
  // die Zeit ist die gerechnete Laufzeit hin und zurück bis dorthin. Zeilen der Klasse pw-unsichtbar
  // markieren, was eine echte Ausgabe nicht enthält.
  function ausgabeBauen(ergebnis) {
    const n = ergebnis.zeilen.length;
    const ziel = ergebnis.zeilen[n - 1];
    const zeilen = [el("div", "pw-befehl", "$ traceroute " + ziel.host)];
    const zeile = (klasse, nummer, inhalt, wert) => {
      const reihe = el("div", "pw-zeile" + (klasse ? " " + klasse : ""));
      reihe.append(el("span", "pw-nr", nummer), el("span", "pw-mitte", inhalt), el("span", "pw-wert", wert));
      return reihe;
    };
    let hop = 0;
    ergebnis.zeilen.forEach((abschnitt, nummer) => {
      const jetzt = nummer === schritt - 1 ? " pw-jetzt" : "";
      if (abschnitt.tunnel) zeilen.push(zeile("pw-unsichtbar" + jetzt, "□", T("pw.tr.tunnel"), ""));
      if (abschnitt.art === "seekabel") zeilen.push(zeile("pw-unsichtbar" + jetzt, "□", fuellen(T("pw.tr.seekabel"), { km: kmText(abschnitt.km) }), ""));
      if (abschnitt.stumm) {
        hop++;
        zeilen.push(zeile(jetzt.trim(), String(hop), "* * *", ""));
        zeilen.push(zeile("pw-unsichtbar" + jetzt, "□", T("pw.tr.stumm"), ""));
      }
      hop++;
      zeilen.push(zeile(jetzt.trim(), String(hop), abschnitt.host + " (" + abschnitt.adresse + ")", msText(2 * abschnitt.bisMs) + " ms"));
    });
    zeilen.push(zeile("pw-unsichtbar" + (schritt > n ? " pw-jetzt" : ""), "□", T("pw.tr.rueck"), ""));
    teile.ausgabe.replaceChildren(...zeilen);
  }

  function knoepfeStellen(n) {
    const amEnde = schritt > n;
    const hatteFokus = document.activeElement === teile.weiter;
    teile.weiter.disabled = amEnde;
    teile.vonVorn.disabled = schritt === 0;
    if (hatteFokus && amEnde) teile.vonVorn.focus();
    const bewegung = window.Rahmen.bewegung();
    teile.abspielen.disabled = !bewegung;
    teile.abspielen.textContent = zeitgeber ? T("pw.anhalten") : T("pw.abspielen");
    teile.abspielen.setAttribute("aria-pressed", String(Boolean(zeitgeber)));
    teile.abspielen.title = bewegung ? "" : T("pw.abspielenAus");
  }

  // Zeigt den aktuellen Zustand: Zeichnung, Beschreibung, Abschnitte, Zahlen und Traceroute-Ausgabe.
  function zeigen() {
    if (!teile) return;
    const weg = aktuell();
    const ergebnis = rechnen(weg);
    ketteZeichnen(weg, ergebnis);
    schrittBauen(weg, ergebnis);
    abschnitteBauen(ergebnis);
    zahlenBauen(ergebnis);
    ausgabeBauen(ergebnis);
    knoepfeStellen(ergebnis.zeilen.length);
  }

  function anhalten() {
    if (zeitgeber) clearInterval(zeitgeber);
    zeitgeber = null;
  }

  // Ein Schritt weiter; liefert false, wenn der Rückweg schon erreicht ist.
  function vor() {
    const n = aktuell().abschnitte.length;
    if (schritt > n) return false;
    schritt++;
    return schritt <= n;
  }

  // Spielt die Schritte nacheinander ab. Läuft nur bei eingeschalteter Bewegung.
  function abspielen() {
    if (zeitgeber) {
      anhalten();
      zeigen();
      return;
    }
    if (!window.Rahmen.bewegung()) return;
    if (schritt > aktuell().abschnitte.length) schritt = 0;
    const gebaut = teile;
    zeitgeber = setInterval(() => {
      if (teile !== gebaut || !gebaut.wurzel.isConnected || !window.Rahmen.bewegung()) {
        anhalten();
        return;
      }
      if (!vor()) anhalten();
      zeigen();
    }, TAKT);
    vor();
    zeigen();
  }

  function bauen(ziel) {
    anhalten();
    if (beobachter) beobachter.disconnect();

    const knopf = (text, beiKlick) => {
      const taste = el("button", "knopf", text);
      taste.type = "button";
      taste.addEventListener("click", beiKlick);
      return taste;
    };
    const weiter = knopf(T("pw.weiter"), () => {
      anhalten();
      vor();
      Klang.ton(880, 0.3);
      zeigen();
    });
    const vonVorn = knopf(T("pw.vonVorn"), () => {
      anhalten();
      schritt = 0;
      Klang.ton(660, 0.3);
      zeigen();
      weiter.focus();
    });
    const abspielenKnopf = knopf(T("pw.abspielen"), abspielen);
    const knoepfe = el("div", "pw-knoepfe");
    knoepfe.setAttribute("role", "group");
    knoepfe.setAttribute("aria-label", T("pw.bedienung"));
    knoepfe.append(weiter, vonVorn, abspielenKnopf);

    const wahl = H.auswahl(T("pw.weg"), wege.map(weg => ({ wert: weg.id, text: wegName[weg.id]() })), wegId, wert => {
      anhalten();
      wegId = wert;
      schritt = 0;
      Klang.doppelton();
      zeigen();
    });

    const bild = el("div", "pw-bild");
    const schrittfeld = el("div", "pw-schritt");
    schrittfeld.setAttribute("aria-live", "polite");
    const abschnitte = el("div", "pw-abschnitte");
    const zahlen = el("div");
    const ausgabe = el("div", "pw-ausgabe");
    ausgabe.setAttribute("role", "group");
    ausgabe.setAttribute("aria-label", T("pw.tr.titel"));

    const links = [
      wahl,
      knoepfe,
      H.erklaerung(T("pw.e1.titel"), T("pw.e1.text")),
      H.erklaerung(T("pw.e2.titel"), T("pw.e2.text")),
      H.erklaerung(T("pw.e3.titel"), T("pw.e3.text"))
    ];
    const rechts = [
      H.vermerk(T("pw.veranschaulichung")),
      bild,
      schrittfeld,
      abschnitte,
      zahlen,
      H.vermerk(fuellen(T("pw.naeherung"), { v: H.zahlText(Math.round(C_FASER)) })),
      H.vermerk(fuellen(T("pw.vergleich"), { a: H.zahlText(STUDIE_ROUTERPFAD, 1), b: H.zahlText(STUDIE_PING, 1) })),
      H.erklaerung(T("pw.tr.titel"), T("pw.tr.text")),
      ausgabe
    ];
    const wurzel = H.zwei(links, rechts);
    ziel.replaceChildren(wurzel, H.grenze(T("pw.grenze")), H.quellenliste(quellen));

    teile = { wurzel, bild, schritt: schrittfeld, abschnitte, zahlen, ausgabe, weiter, vonVorn, abspielen: abspielenKnopf, breite: 0 };
    zeigen();

    // Ändert sich die Breite des Platzes, wird die Kette neu gezeichnet.
    if (window.ResizeObserver) {
      const gebaut = teile;
      beobachter = new ResizeObserver(() => {
        if (teile !== gebaut || !gebaut.wurzel.isConnected) return;
        const breite = Math.max(300, Math.min(820, Math.floor(gebaut.bild.clientWidth) || 600));
        if (breite !== gebaut.breite) ketteZeichnen(aktuell(), rechnen(aktuell()));
      });
      beobachter.observe(bild);
    }
  }

  // Wird die Bewegung ausgeschaltet, hält das Abspielen an und der Knopf wird gesperrt.
  document.addEventListener("bewegungswechsel", () => {
    if (!teile || !teile.wurzel.isConnected) return;
    if (!window.Rahmen.bewegung()) anhalten();
    knoepfeStellen(aktuell().abschnitte.length);
  });

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.paketweg = { bauen };
})();
