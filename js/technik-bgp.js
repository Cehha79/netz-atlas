// Technik, Baustein „Routing“: ein Beispielnetz aus acht Netzen, in dem der Weg zum Ziel berechnet wird,
// im Normalzustand, bei einer ausgefallenen Leitung und bei einer falschen, genaueren Ankündigung.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG = "http://www.w3.org/2000/svg";

  // Die acht Beispielnetze mit ihrem Platz in der Zeichnung. Die Nummern liegen im Bereich AS64496 bis
  // AS64511, der für Beispiele in Dokumentationen reserviert ist (RFC 5398). Es sind keine echten Netze.
  const netze = [
    { id: "a", nummer: "AS64496", x: 40, y: 150 },
    { id: "b", nummer: "AS64497", x: 125, y: 150 },
    { id: "c", nummer: "AS64498", x: 215, y: 65 },
    { id: "d", nummer: "AS64499", x: 215, y: 235 },
    { id: "e", nummer: "AS64500", x: 300, y: 150 },
    { id: "f", nummer: "AS64501", x: 300, y: 235 },
    { id: "g", nummer: "AS64502", x: 385, y: 65 },
    { id: "h", nummer: "AS64503", x: 385, y: 235 }
  ];
  const leitungen = [["a", "b"], ["b", "c"], ["b", "d"], ["c", "e"], ["c", "g"], ["d", "f"], ["e", "f"], ["e", "g"], ["f", "h"]];
  const startNetz = "a";
  const zielNetz = "g";
  const falschNetz = "h";
  // Adressblöcke aus dem Bereich 203.0.113.0/24, der für Beispiele reserviert ist (RFC 5737).
  const zielBlock = "203.0.113.0/24";
  const teilBlock = "203.0.113.0/25";
  const adressen = ["203.0.113.10", "203.0.113.200"];
  // Stand und Quelle der Zahl der autonomen Systeme: CIDR Report, gelesen am 17.11.2026.
  const asGerundet = 80000;
  const asBloecke = 1093007;
  const asStand = "2026-11-17";

  const quellen = {
    cidr: "https://www.cidr-report.org/as2.0/",
    ripe: "https://www.ripe.net/about-us/news/youtube-hijacking-a-ripe-ncc-ris-case-study/",
    cloudflare2019: "https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/",
    meta2021: "https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/",
    cloudflare2021: "https://blog.cloudflare.com/october-2021-facebook-outage/",
    rfc5398: "https://www.rfc-editor.org/rfc/rfc5398.txt",
    rfc5737: "https://www.rfc-editor.org/rfc/rfc5737.txt"
  };

  // Zustand: gewählter Versuch, ausgefallene Leitung und Zieladresse. Er übersteht einen Sprachwechsel.
  let versuch = "normal";
  let ausfall = "c-g";
  let zielAdresse = adressen[0];

  const schluessel = (a, b) => a + "-" + b;
  const ort = id => netze.find(netz => netz.id === id);
  const netzname = id => T("bgp.netz") + " " + id.toUpperCase();
  const leitungsname = kennung => kennung.split("-").map(netzname).join(" ↔ ");
  const wegText = weg => weg.map(netzname).join(" → ");

  // Setzt Werte in einen Text ein: aus „{zahl} Leitungen“ wird „4 Leitungen“.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, platz) => werte[platz]);

  // Macht aus „203.0.113.10“ eine Zahl, damit sich Adressen vergleichen lassen.
  const adresszahl = text => text.split(".").reduce((summe, teil) => summe * 256 + Number(teil), 0);

  // Liest einen Adressblock wie „203.0.113.0/25“: Länge in Bit, erste Adresse und Zahl der Adressen.
  function blockLesen(text) {
    const [adresse, laenge] = text.split("/");
    return { text, laenge: Number(laenge), erste: adresszahl(adresse), anzahl: 2 ** (32 - Number(laenge)) };
  }

  function enthaelt(block, adresse) {
    const zahl = adresszahl(adresse);
    return zahl >= block.erste && zahl < block.erste + block.anzahl;
  }

  // Alle Wege ohne Schleife von einem Netz zu einem anderen über die arbeitenden Leitungen, kürzester zuerst.
  function wege(von, nach, aktive) {
    const gefunden = [];
    const gehen = pfad => {
      const hier = pfad[pfad.length - 1];
      if (hier === nach) {
        gefunden.push(pfad);
        return;
      }
      for (const [a, b] of aktive) {
        const naechstes = a === hier ? b : b === hier ? a : null;
        if (naechstes && !pfad.includes(naechstes)) gehen([...pfad, naechstes]);
      }
    };
    gehen([von]);
    return gefunden.sort((erster, zweiter) => erster.length - zweiter.length);
  }

  // Berechnet, wohin der Verkehr vom Startnetz aus läuft: welche Ankündigungen es gibt, welche die Adresse
  // enthalten, welcher Weg zu ihrem Ursprung führt und welche Regel die Wahl entschieden hat.
  function berechnen() {
    const aktive = leitungen.filter(([a, b]) => !(versuch === "ausfall" && schluessel(a, b) === ausfall));
    const adresse = versuch === "falsch" ? zielAdresse : adressen[0];
    const angekuendigt = [{ block: blockLesen(zielBlock), ursprung: zielNetz }];
    if (versuch === "falsch") angekuendigt.push({ block: blockLesen(teilBlock), ursprung: falschNetz });
    const eintraege = angekuendigt.map(eintrag => {
      const alle = wege(startNetz, eintrag.ursprung, aktive);
      return { block: eintrag.block, ursprung: eintrag.ursprung, wege: alle, weg: alle[0] || null, passt: enthaelt(eintrag.block, adresse) };
    });
    // Unter den Einträgen, die die Adresse enthalten und erreichbar sind, gewinnt der genaueste Block,
    // bei gleich genauen Blöcken der kürzere Weg.
    const brauchbar = eintraege
      .filter(eintrag => eintrag.passt && eintrag.weg)
      .sort((erster, zweiter) => zweiter.block.laenge - erster.block.laenge || erster.weg.length - zweiter.weg.length);
    const wahl = brauchbar[0] || null;
    let regel = "keiner";
    if (wahl) {
      const ungenauer = brauchbar.some(eintrag => eintrag.block.laenge < wahl.block.laenge);
      regel = ungenauer ? "genauer" : wahl.wege.length > 1 ? "kuerzer" : "einzig";
    }
    return { adresse, eintraege, wahl, regel, normalweg: wege(startNetz, zielNetz, leitungen)[0] };
  }

  // Baut ein SVG-Element mit Eigenschaften, Klasse und Text.
  function form(marke, eigenschaften, klasse, text) {
    const knoten = document.createElementNS(SVG, marke);
    for (const [name, wert] of Object.entries(eigenschaften)) knoten.setAttribute(name, wert);
    if (klasse) knoten.setAttribute("class", klasse);
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Zeichnet das Beispielnetz: Leitungen, den berechneten Weg, die Netze und ihre Beschriftung.
  function zeichnen(ergebnis) {
    const weg = ergebnis.wahl ? ergebnis.wahl.weg : [];
    const irrweg = Boolean(ergebnis.wahl) && ergebnis.wahl.ursprung !== zielNetz;
    const bild = form("svg", { viewBox: "0 14 425 272", role: "img" }, "bgp-bild" + (irrweg ? " irrweg" : ""));
    bild.setAttribute("aria-label", ergebnis.wahl
      ? fuellen(T("bgp.bildWeg"), { weg: wegText(weg), ankunft: netzname(ergebnis.wahl.ursprung) })
      : fuellen(T("bgp.bildKeinWeg"), { start: netzname(startNetz), ziel: netzname(zielNetz) }));

    for (const [a, b] of leitungen) {
      const ausgefallen = versuch === "ausfall" && schluessel(a, b) === ausfall;
      const von = ort(a);
      const nach = ort(b);
      bild.append(form("line", { x1: von.x, y1: von.y, x2: nach.x, y2: nach.y }, "bgp-leitung" + (ausgefallen ? " aus" : "")));
      if (!ausgefallen) continue;
      // Ein Kreuz in der Mitte der ausgefallenen Leitung.
      const x = (von.x + nach.x) / 2;
      const y = (von.y + nach.y) / 2;
      bild.append(
        form("line", { x1: x - 6, y1: y - 6, x2: x + 6, y2: y + 6 }, "bgp-kreuz"),
        form("line", { x1: x - 6, y1: y + 6, x2: x + 6, y2: y - 6 }, "bgp-kreuz")
      );
    }

    if (weg.length) bild.append(form("polyline", { points: weg.map(id => ort(id).x + "," + ort(id).y).join(" ") }, "bgp-weg"));

    for (const netz of netze) {
      const kuendigtFalschAn = versuch === "falsch" && netz.id === falschNetz;
      const gruppe = form("g", {}, "bgp-netz" + (weg.includes(netz.id) ? " weg" : "") + (kuendigtFalschAn ? " falsch" : ""));
      gruppe.append(
        form("rect", { x: netz.x - 33, y: netz.y - 18, width: 66, height: 36 }),
        form("text", { x: netz.x, y: netz.y - 2 }, "", netzname(netz.id)),
        form("text", { x: netz.x, y: netz.y + 11 }, "nummer", netz.nummer)
      );
      bild.append(gruppe);
    }

    const start = ort(startNetz);
    const ziel = ort(zielNetz);
    const falsch = ort(falschNetz);
    bild.append(
      form("text", { x: start.x, y: start.y - 25 }, "bgp-rolle", T("bgp.start")),
      form("text", { x: ziel.x + 33, y: ziel.y - 36 }, "bgp-rolle rechts", T("bgp.ziel")),
      form("text", { x: ziel.x + 33, y: ziel.y - 24 }, "bgp-block rechts", zielBlock)
    );
    if (versuch === "falsch") {
      bild.append(
        form("text", { x: falsch.x + 33, y: falsch.y + 30 }, "bgp-block falsch rechts", teilBlock),
        form("text", { x: falsch.x + 33, y: falsch.y + 42 }, "bgp-rolle falsch rechts", T("bgp.falschKurz"))
      );
    }
    return bild;
  }

  function legende() {
    const zeile = el("div", "bgp-legende");
    for (const [klasse, text] of [["weg", T("bgp.legWeg")], ["irrweg", T("bgp.legIrrweg")], ["aus", T("bgp.legAus")]]) {
      const eintrag = el("span");
      eintrag.append(el("i", klasse), document.createTextNode(text));
      zeile.append(eintrag);
    }
    return zeile;
  }

  function kennzahlen(ergebnis) {
    const wahl = ergebnis.wahl;
    return H.zahlen([
      { wert: H.zahlText(wahl ? wahl.weg.length : NaN), name: T("bgp.zNetze") },
      { wert: H.zahlText(wahl ? wahl.weg.length - 1 : NaN), name: T("bgp.zLeitungen") },
      {
        wert: wahl ? netzname(wahl.ursprung) : T("bgp.nirgends"),
        name: T("bgp.zAnkunft"),
        klasse: wahl && wahl.ursprung === zielNetz ? "betont" : "warnung"
      }
    ]);
  }

  // Die Begründung in Worten: welche Regel entschieden hat und mit welchen Zahlen.
  function begruendung(ergebnis) {
    const wahl = ergebnis.wahl;
    const namen = { start: netzname(startNetz), ziel: netzname(zielNetz), falsch: netzname(falschNetz), block: zielBlock, teil: teilBlock };
    if (ergebnis.regel === "keiner") return fuellen(T("bgp.grundKeiner"), { ...namen, leitung: leitungsname(ausfall) });
    if (ergebnis.regel === "genauer") {
      const richtig = ergebnis.eintraege.find(eintrag => eintrag.ursprung === zielNetz);
      return fuellen(T("bgp.grundGenauer"), { ...namen, lang: H.zahlText(wahl.weg.length - 1), kurz: H.zahlText(richtig.weg.length - 1) });
    }
    const vorsatz = versuch === "falsch" ? fuellen(T("bgp.grundAusserhalb"), namen) + " " : "";
    if (ergebnis.regel === "einzig") return vorsatz + fuellen(T("bgp.grundEinzig"), namen);
    return vorsatz + fuellen(T("bgp.grundKuerzer"), {
      ...namen,
      wege: H.zahlText(wahl.wege.length),
      kurz: H.zahlText(wahl.wege[0].length - 1),
      lang: H.zahlText(wahl.wege[1].length - 1)
    });
  }

  // Was der Ausfall bewirkt hat: Umweg, kein Unterschied oder kein Weg mehr.
  function folge(ergebnis) {
    const wahl = ergebnis.wahl;
    if (!wahl) return fuellen(T("bgp.ausfallKein"), { start: netzname(startNetz) });
    if (wahl.weg.join() === ergebnis.normalweg.join()) return fuellen(T("bgp.ausfallGleich"), { leitung: leitungsname(ausfall) });
    return fuellen(T("bgp.ausfallUmweg"), { vor: H.zahlText(ergebnis.normalweg.length - 1), nach: H.zahlText(wahl.weg.length - 1) });
  }

  function ergebnisliste(ergebnis) {
    const regeln = { genauer: T("bgp.regelGenauer"), kuerzer: T("bgp.regelKuerzer"), einzig: T("bgp.regelEinzig"), keiner: T("bgp.regelKeiner") };
    const liste = el("dl", "bgp-ergebnis");
    const zeile = (name, ...inhalt) => {
      const wert = el("dd");
      wert.append(...inhalt);
      liste.append(el("dt", "", name), wert);
    };
    zeile(T("bgp.adresseWahl"), ergebnis.adresse);
    zeile(T("bgp.rWeg"), ergebnis.wahl ? wegText(ergebnis.wahl.weg) : T("bgp.keinWeg"));
    zeile(T("bgp.rRegel"), el("b", ergebnis.regel === "genauer" || ergebnis.regel === "keiner" ? "warnung" : "", regeln[ergebnis.regel]), el("span", "", begruendung(ergebnis)));
    if (versuch === "ausfall") zeile(T("bgp.rFolge"), folge(ergebnis));
    return liste;
  }

  // Die Ankündigungen, die das Startnetz kennt, mit dem Grund, warum eine gewählt wurde und die andere nicht.
  function ankuendigungen(ergebnis) {
    const block = el("div", "erklaerung");
    const liste = el("ul", "bgp-eintraege");
    for (const eintrag of ergebnis.eintraege) {
      const gewaehlt = eintrag === ergebnis.wahl;
      const stand = !eintrag.weg ? T("bgp.stUnerreichbar") : !eintrag.passt ? T("bgp.stPasstNicht") : gewaehlt ? T("bgp.stGewaehlt") : T("bgp.stUngenauer");
      const punkt = el("li", (gewaehlt ? "gewaehlt" : "") + (eintrag.ursprung === falschNetz ? " falsch" : ""));
      punkt.append(el("b", "", eintrag.block.text), el("span", "", fuellen(T("bgp.eintragVon"), { netz: netzname(eintrag.ursprung) })));
      if (eintrag.weg) punkt.append(el("span", "", fuellen(T("bgp.eintragWeg"), { zahl: H.zahlText(eintrag.weg.length - 1) })));
      punkt.append(el("em", "", stand));
      liste.append(punkt);
    }
    block.append(el("h3", "", fuellen(T("bgp.eintraege"), { start: netzname(startNetz) })), liste);
    return block;
  }

  // Ein Bedienteil mit sichtbarer Beschriftung darüber.
  function feld(beschriftung, bedienteil) {
    const huelle = el("div", "bgp-feld");
    huelle.append(el("span", "", beschriftung), bedienteil);
    return huelle;
  }

  function quellenzelle(verweise) {
    const zelle = el("span");
    verweise.forEach(([adresse, name], nummer) => {
      if (nummer) zelle.append(document.createTextNode(", "));
      const link = H.verweis(adresse, name);
      link.lang = "en";
      zelle.append(link);
    });
    return zelle;
  }

  function vorfaelle() {
    const block = el("div", "erklaerung");
    block.append(el("h3", "", T("bgp.vorfaelle")), H.tabelle("bgp-vorfaelle", [T("bgp.vDatum"), T("bgp.vWas"), T("allg.quelle")], [
      { zellen: [H.datumText("2008-02-24"), T("bgp.v2008"), quellenzelle([[quellen.ripe, "RIPE NCC"]])] },
      { zellen: [H.datumText("2019-06-24"), T("bgp.v2019"), quellenzelle([[quellen.cloudflare2019, "Cloudflare"]])] },
      { zellen: [H.datumText("2021-10-04"), T("bgp.v2021"), quellenzelle([[quellen.meta2021, "Meta Engineering"], [quellen.cloudflare2021, "Cloudflare"]])] }
    ]));
    return block;
  }

  function bauen(ziel) {
    const bedienfeld = el("div", "bgp-bedienung");
    const bildfeld = el("div", "bgp-anzeige");
    const meldefeld = el("div");
    meldefeld.setAttribute("aria-live", "polite");
    const listenfeld = el("div");
    const namen = { start: netzname(startNetz), ziel: netzname(zielNetz), falsch: netzname(falschNetz), block: zielBlock, teil: teilBlock };

    const zeigen = () => {
      const ergebnis = berechnen();
      bildfeld.replaceChildren(zeichnen(ergebnis), legende(), kennzahlen(ergebnis));
      meldefeld.replaceChildren(ergebnisliste(ergebnis));
      listenfeld.replaceChildren(ankuendigungen(ergebnis));
    };

    // Unter den drei Knöpfen steht, was der gewählte Versuch tut, und bei Bedarf eine weitere Auswahl.
    const bedienungBauen = () => {
      if (versuch === "normal") {
        bedienfeld.replaceChildren(el("p", "", fuellen(T("bgp.normalText"), namen)));
        return;
      }
      if (versuch === "ausfall") {
        const eintraege = leitungen.map(([a, b]) => ({ wert: schluessel(a, b), text: leitungsname(schluessel(a, b)) }));
        bedienfeld.replaceChildren(el("p", "", T("bgp.ausfallText")), H.auswahl(T("bgp.leitungWahl"), eintraege, ausfall, wert => {
          ausfall = wert;
          Klang.doppelton();
          zeigen();
        }));
        return;
      }
      const adresswahl = H.umschalter(T("bgp.adresseWahl"), adressen.map(adresse => ({ wert: adresse, text: adresse })), zielAdresse, wert => {
        zielAdresse = wert;
        Klang.doppelton();
        zeigen();
      });
      adresswahl.classList.add("bgp-wahl");
      bedienfeld.replaceChildren(el("p", "", fuellen(T("bgp.falschText"), namen)), feld(T("bgp.adresseWahl"), adresswahl));
    };

    const versuche = H.umschalter(T("bgp.versuch"), [
      { wert: "normal", text: T("bgp.normal") },
      { wert: "ausfall", text: T("bgp.ausfall") },
      { wert: "falsch", text: T("bgp.falsch") }
    ], versuch, wert => {
      versuch = wert;
      Klang.doppelton();
      bedienungBauen();
      zeigen();
    });
    versuche.classList.add("bgp-wahl");

    const links = [
      feld(T("bgp.versuch"), versuche),
      bedienfeld,
      H.erklaerung(T("bgp.e1Titel"), fuellen(T("bgp.e1Text"), { zahl: H.zahlText(asGerundet), bloecke: H.zahlText(asBloecke), datum: H.datumText(asStand) })),
      H.erklaerung(T("bgp.e2Titel"), fuellen(T("bgp.e2Text"), namen)),
      H.erklaerung(T("bgp.e3Titel"), T("bgp.e3Text"))
    ];
    const rechts = [bildfeld, meldefeld, listenfeld, H.vermerk(T("bgp.beispiel"))];

    const quellenblock = el("div", "erklaerung");
    quellenblock.append(el("h3", "", T("allg.quellen")), H.quellenliste([
      { name: "CIDR Report: AS2.0 BGP Table Data", url: quellen.cidr, datum: asStand },
      { name: "RIPE NCC: YouTube Hijacking, a RIPE NCC RIS case study", url: quellen.ripe, datum: "2008-03-17" },
      { name: "Cloudflare: How Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Today", url: quellen.cloudflare2019, datum: "2019-06-24" },
      { name: "Meta Engineering: More details about the October 4 outage", url: quellen.meta2021, datum: "2021-10-05" },
      { name: "RFC 5398: Autonomous System (AS) Number Reservation for Documentation Use", url: quellen.rfc5398, datum: "2008-12" },
      { name: "RFC 5737: IPv4 Address Blocks Reserved for Documentation", url: quellen.rfc5737, datum: "2010-01" }
    ]));

    bedienungBauen();
    zeigen();
    const teile = [
      H.zwei(links, rechts),
      vorfaelle(),
      H.grenze(fuellen(T("bgp.grenze"), { zahl: H.zahlText(asGerundet) })),
      quellenblock
    ];
    // Ohne diese Klasse drückt die breite Tabelle den ganzen Baustein über den Rand schmaler Fenster.
    for (const teil of teile) teil.classList.add("bgp-teil");
    ziel.replaceChildren(...teile);
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.bgp = { bauen };
})();
