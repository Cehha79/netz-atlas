// Technik, Baustein „Austauschpunkt“: wie viele Leitungen Netze an einem Ort brauchen, wenn sich jedes mit
// jedem direkt verbindet oder alle einen Internet-Knoten nutzen, dazu der Spitzenverkehr großer Knoten.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG = "http://www.w3.org/2000/svg";
  const kleinste = 2;
  const groesste = 12;
  const mitte = { x: 180, y: 150 };
  const halbmesser = 112;

  const quellen = {
    nicbr: "https://nic.br/noticia/releases/ix-br-hits-record-50-tbit-s-of-aggregated-internet-traffic-driven-by-content-and-digital-services/",
    decix: "https://www.de-cix.net/en/about-de-cix/media/press-releases/de-cix-frankfurt-breaks-the-21-terabit-mark-while-global-traffic-exceeds-32-terabits-per-second",
    amsix: "https://www.ams-ix.net/hk/news/ams-ix-hits-new-traffic-peak-at-15-terabit-per-second",
    isocAusfall: "https://www.internetsociety.org/resources/doc/2024/2024-west-africa-submarine-cable-outage-report/",
    isocKnoten: "https://www.internetsociety.org/issues/ixps/",
    pch: "https://www.pch.net/ixp/summary"
  };
  // Länder mit Internet-Knoten laut Packet Clearing House, gelesen am 17.11.2026.
  const laenderMitKnoten = 162;
  const laenderStand = "2026-11-17";
  // Tag, an dem vor Westafrika vier Seekabel ausfielen (Bericht der Internet Society vom 18.04.2024).
  const ausfallTag = "2024-03-14";

  // Zustand: Zahl der Netze, Art der Verbindung und die zwei Netze, deren Verkehr gezeigt wird.
  let anzahl = 6;
  let modus = "direkt";
  let von = 0;
  let nach = 3;

  const buchstabe = nummer => String.fromCharCode(65 + nummer);
  const netzname = nummer => T("aus.netz") + " " + buchstabe(nummer);
  const direkteLeitungen = zahl => zahl * (zahl - 1) / 2;

  // Setzt Werte in einen Text ein: aus „{n} Netze“ wird „6 Netze“.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, platz) => werte[platz]);

  // Spitzenwerte in Tbit/s nach den Mitteilungen der Betreiber. summe = mehrere Standorte zusammengezählt.
  function spitzenwerte() {
    return [
      { id: "ixbr", name: T("aus.nIxbrAlle"), wert: 50, stand: "2026-03", abgrenzung: T("aus.abgIxbrAlle"), summe: true, quelle: "NIC.br", url: quellen.nicbr },
      { id: "decix", name: T("aus.nDecixAlle"), wert: 32.1, stand: "2026-10-13", abgrenzung: T("aus.abgDecixAlle"), summe: true, quelle: "DE-CIX", url: quellen.decix },
      { id: "saopaulo", name: "IX.br São Paulo", wert: 32, stand: "2026-03", abgrenzung: T("aus.legEinzel"), summe: false, quelle: "NIC.br", url: quellen.nicbr },
      { id: "frankfurt", name: "DE-CIX Frankfurt", wert: 21.47, stand: "2026-10-13", abgrenzung: T("aus.legEinzel"), summe: false, quelle: "DE-CIX", url: quellen.decix },
      { id: "amsterdam", name: "AMS-IX Amsterdam", wert: 15, stand: "2026-04-15", abgrenzung: T("aus.legEinzel"), summe: false, quelle: "AMS-IX", url: quellen.amsix }
    ];
  }

  // Hält die zwei gewählten Netze gültig und verschieden, wenn die Zahl der Netze sinkt.
  function auswahlHalten() {
    if (von >= anzahl) von = nach === 0 ? 1 : 0;
    if (nach >= anzahl) nach = von === anzahl - 1 ? anzahl - 2 : anzahl - 1;
  }

  // Baut ein SVG-Element mit Eigenschaften, Klasse und Text.
  function form(marke, eigenschaften, klasse, text) {
    const knoten = document.createElementNS(SVG, marke);
    for (const [name, wert] of Object.entries(eigenschaften)) knoten.setAttribute(name, wert);
    if (klasse) knoten.setAttribute("class", klasse);
    if (text !== undefined) knoten.textContent = text;
    return knoten;
  }

  // Platz eines Netzes auf dem Kreis; das erste Netz steht oben.
  function platz(nummer) {
    const winkel = -Math.PI / 2 + nummer * 2 * Math.PI / anzahl;
    return { x: Math.round((mitte.x + halbmesser * Math.cos(winkel)) * 10) / 10, y: Math.round((mitte.y + halbmesser * Math.sin(winkel)) * 10) / 10 };
  }

  // Zeichnet die Netze im Kreis mit allen nötigen Leitungen und hebt den Weg des gewählten Verkehrs hervor.
  function zeichnen() {
    const orte = Array.from({ length: anzahl }, (_, nummer) => platz(nummer));
    const leitungen = modus === "direkt" ? direkteLeitungen(anzahl) : anzahl;
    const bild = form("svg", { viewBox: "0 14 360 272", role: "img" }, "aus-bild");
    bild.setAttribute("aria-label", fuellen(modus === "direkt" ? T("aus.bildDirekt") : T("aus.bildKnoten"), {
      netze: H.zahlText(anzahl),
      leitungen: H.zahlText(leitungen),
      von: netzname(von),
      nach: netzname(nach)
    }));
    const linie = (a, b) => form("line", { x1: a.x, y1: a.y, x2: b.x, y2: b.y }, "aus-leitung");
    const punkte = liste => liste.map(punkt => punkt.x + "," + punkt.y).join(" ");

    if (modus === "direkt") {
      for (let a = 0; a < anzahl; a++) for (let b = a + 1; b < anzahl; b++) bild.append(linie(orte[a], orte[b]));
      bild.append(form("polyline", { points: punkte([orte[von], orte[nach]]) }, "aus-weg"));
    } else {
      for (const netz of orte) bild.append(linie(netz, mitte));
      bild.append(
        form("polyline", { points: punkte([orte[von], mitte, orte[nach]]) }, "aus-weg"),
        form("rect", { x: mitte.x - 24, y: mitte.y - 14, width: 48, height: 28 }, "aus-knoten"),
        form("text", { x: mitte.x, y: mitte.y + 4 }, "aus-knotenname", "IXP")
      );
    }

    orte.forEach((netz, nummer) => {
      const gruppe = form("g", {}, "aus-netz" + (nummer === von || nummer === nach ? " gewaehlt" : ""));
      gruppe.append(form("circle", { cx: netz.x, cy: netz.y, r: 15 }), form("text", { x: netz.x, y: netz.y + 4 }, "", buchstabe(nummer)));
      bild.append(gruppe);
    });
    return bild;
  }

  function kennzahlen() {
    const direkt = direkteLeitungen(anzahl);
    return H.zahlen([
      { wert: H.zahlText(direkt), name: T("aus.zDirekt"), klasse: modus === "direkt" ? "betont" : "" },
      { wert: H.zahlText(anzahl), name: T("aus.zKnoten"), klasse: modus === "knoten" ? "betont" : "" },
      { wert: H.zahlText(direkt - anzahl), name: T("aus.zGespart") },
      { wert: H.zahlText(modus === "direkt" ? anzahl - 1 : 1), name: T("aus.zJeNetz") }
    ]);
  }

  // Das Ergebnis in Worten: Rechnung, Vergleich und der Weg des örtlichen Verkehrs.
  function ergebnisliste() {
    const direkt = direkteLeitungen(anzahl);
    const gespart = direkt - anzahl;
    const liste = el("dl", "aus-ergebnis");
    const zeile = (name, text) => liste.append(el("dt", "", name), el("dd", "", text));
    zeile(T("aus.rRechnung"), fuellen(T("aus.rechnung"), { n: H.zahlText(anzahl), m: H.zahlText(anzahl - 1), direkt: H.zahlText(direkt) }));
    const vergleich = gespart > 0 ? T("aus.sparMehr") : gespart === 0 ? T("aus.sparGleich") : T("aus.sparWeniger");
    zeile(T("aus.rVergleich"), fuellen(vergleich, { gespart: H.zahlText(gespart), direkt: H.zahlText(direkt) }));
    zeile(T("aus.rWeg"), fuellen(modus === "direkt" ? T("aus.wegDirekt") : T("aus.wegKnoten"), { von: netzname(von), nach: netzname(nach) }));
    return liste;
  }

  // Zweite Tafel: Spitzenverkehr großer Knoten als Balken, je Eintrag mit Stand, Abgrenzung und Quelle.
  function spitzen() {
    const werte = spitzenwerte();
    const groesster = Math.max(...werte.map(eintrag => eintrag.wert));
    const block = el("div", "erklaerung aus-spitzen");
    const legende = el("div", "aus-legende");
    for (const [klasse, text] of [["einzel", T("aus.legEinzel")], ["summe", T("aus.legSumme")]]) {
      const eintrag = el("span");
      eintrag.append(el("i", klasse), document.createTextNode(text));
      legende.append(eintrag);
    }
    block.append(el("h3", "", T("aus.spitzen")), legende);
    for (const eintrag of werte) {
      const angabe = el("p", "aus-angabe", T("allg.stand") + " " + H.datumText(eintrag.stand) + " · " + eintrag.abgrenzung + " · " + T("allg.quelle") + ": ");
      const link = H.verweis(eintrag.url, eintrag.quelle);
      link.lang = "en";
      angabe.append(link);
      const zeile = el("div", "aus-eintrag");
      zeile.append(H.balken(eintrag.name, H.zahlText(eintrag.wert, 2) + " Tbit/s", eintrag.wert / groesster, eintrag.summe ? "var(--blau)" : ""), angabe);
      block.append(zeile);
    }
    block.append(H.vermerk(T("aus.spitzenVermerk")));
    return block;
  }

  // Ein Bedienteil mit sichtbarer Beschriftung darüber.
  function feld(beschriftung, bedienteil) {
    const huelle = el("div", "aus-feld");
    huelle.append(el("span", "", beschriftung), bedienteil);
    return huelle;
  }

  function bauen(ziel) {
    const wahlfeld = el("div", "aus-paar");
    const bildfeld = el("div", "aus-anzeige");
    const meldefeld = el("div");
    meldefeld.setAttribute("aria-live", "polite");

    const zeigen = () => {
      bildfeld.replaceChildren(zeichnen(), kennzahlen());
      meldefeld.replaceChildren(ergebnisliste());
    };

    // Die zwei Auswahlfelder für den örtlichen Verkehr. Wer in einem Feld das Netz des anderen wählt,
    // tauscht die beiden; danach bekommt das bediente Feld den Fokus zurück.
    const wahlBauen = fokus => {
      const eintraege = Array.from({ length: anzahl }, (_, nummer) => ({ wert: String(nummer), text: netzname(nummer) }));
      const vonFeld = H.auswahl(T("aus.von"), eintraege, String(von), wert => {
        const neu = Number(wert);
        const tausch = neu === nach;
        if (tausch) nach = von;
        von = neu;
        Klang.doppelton();
        if (tausch) wahlBauen("von");
        zeigen();
      });
      const nachFeld = H.auswahl(T("aus.nach"), eintraege, String(nach), wert => {
        const neu = Number(wert);
        const tausch = neu === von;
        if (tausch) von = nach;
        nach = neu;
        Klang.doppelton();
        if (tausch) wahlBauen("nach");
        zeigen();
      });
      wahlfeld.replaceChildren(vonFeld, nachFeld);
      if (fokus) (fokus === "von" ? vonFeld : nachFeld).querySelector("select").focus();
    };

    const regler = H.regler(T("aus.anzahl"), kleinste, groesste, 1, anzahl, wert => H.zahlText(wert), wert => {
      anzahl = wert;
      auswahlHalten();
      wahlBauen();
      zeigen();
    });
    const arten = H.umschalter(T("aus.modus"), [
      { wert: "direkt", text: T("aus.direkt") },
      { wert: "knoten", text: T("aus.knoten") }
    ], modus, wert => {
      modus = wert;
      Klang.doppelton();
      zeigen();
    });
    arten.classList.add("aus-wahl");

    const werte = spitzenwerte();
    const wert = id => werte.find(eintrag => eintrag.id === id).wert;
    const links = [
      regler.knoten,
      feld(T("aus.modus"), arten),
      wahlfeld,
      H.erklaerung(T("aus.e1Titel"), T("aus.e1Text")),
      H.erklaerung(T("aus.e2Titel"), fuellen(T("aus.e2Text"), { datum: H.datumText(ausfallTag) })),
      H.erklaerung(T("aus.e3Titel"), fuellen(T("aus.e3Text"), {
        laender: H.zahlText(laenderMitKnoten),
        datum: H.datumText(laenderStand),
        sp: H.zahlText(wert("saopaulo"), 2),
        fra: H.zahlText(wert("frankfurt"), 2)
      }))
    ];
    const rechts = [bildfeld, meldefeld, H.vermerk(T("aus.beispiel"))];

    const quellenblock = el("div", "erklaerung");
    quellenblock.append(el("h3", "", T("allg.quellen")), H.quellenliste([
      { name: "NIC.br: IX.br hits record 50 Tbit/s of aggregated Internet traffic", url: quellen.nicbr, datum: "2026-03" },
      { name: "DE-CIX: DE-CIX Frankfurt breaks the 21 terabit mark", url: quellen.decix, datum: "2026-10-14" },
      { name: "AMS-IX: AMS-IX hits new traffic peak at 15 Terabit per second", url: quellen.amsix, datum: "2026-04-17" },
      { name: "Internet Society: 2024 West Africa Submarine Cable Outage Report", url: quellen.isocAusfall, datum: "2024-04-18" },
      { name: "Internet Society: Internet Exchange Points (IXPs)", url: quellen.isocKnoten },
      { name: "Packet Clearing House: Internet Exchange Point Summary", url: quellen.pch, datum: laenderStand }
    ]));

    auswahlHalten();
    wahlBauen();
    zeigen();
    const teile = [H.zwei(links, rechts), spitzen(), H.grenze(T("aus.grenze")), quellenblock];
    // Ohne diese Klasse können breite Inhalte den Baustein über den Rand schmaler Fenster drücken.
    for (const teil of teile) teil.classList.add("aus-teil");
    ziel.replaceChildren(...teile);
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.austausch = { bauen };
})();
