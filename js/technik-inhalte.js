// Technik, Baustein „Inhalte in der Nähe“: Wartezeit durch die Laufzeit allein, einmal vom fernen Server
// und einmal von einer Kopie in der Nähe.
// Braucht js/rahmen.js und js/hilfen.js.
(() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Licht in Glasfaser: rund 204 km je Millisekunde (Näherung).
  const KM_JE_MS = 204;
  // Tag, an dem die Angaben von Cloudflare und Netflix gelesen wurden.
  const STAND = "2026-11-17";

  const QUELLEN = [
    { name: "Netflix Open Connect", url: "https://openconnect.netflix.com/en/", datum: STAND },
    { name: "Cloudflare: Global Network", url: "https://www.cloudflare.com/network/", datum: STAND },
    { name: "Bozkurt et al.: Why Is the Internet so Slow?! (PAM 2017)", url: "https://balakrishnanc.github.io/papers/bozkurt-pam2017.pdf", datum: "2017" }
  ];

  // Zustand: bleibt bei einem Sprachwechsel erhalten. Die Zahl der Hin- und Rückwege und der Umweg sind Annahmen.
  let fall = "fern";
  let fern = 8000;
  let nah = 100;
  let wege = 10;
  let umweg = 1.4;

  function svg(marke, eigenschaften, klasse) {
    const knoten = document.createElementNS(SVG_NS, marke);
    for (const [name, wert] of Object.entries(eigenschaften || {})) knoten.setAttribute(name, wert);
    if (klasse) knoten.setAttribute("class", klasse);
    return knoten;
  }

  function schrift(x, y, inhalt, klasse) {
    const knoten = svg("text", { x, y, "text-anchor": "middle" }, klasse);
    knoten.textContent = inhalt;
    return knoten;
  }

  // Setzt Zahlen an die Stellen {name} eines Textes.
  const fuellen = (text, werte) => text.replace(/\{(\w+)\}/g, (_, name) => werte[name]);

  // Ein Hin- und Rückweg über die Strecke, in Millisekunden.
  const rundlauf = kilometer => 2 * kilometer * umweg / KM_JE_MS;
  const wartezeit = kilometer => wege * rundlauf(kilometer);
  const ms = wert => H.zahlText(wert, wert < 10 ? 2 : wert < 100 ? 1 : 0) + " ms";
  const km = wert => H.zahlText(wert) + " km";

  function zeichnen(zeitFern, zeitNah) {
    const flaeche = svg("svg", {
      viewBox: "0 0 460 190",
      role: "img",
      "aria-label": fuellen(T("inh.bild"), { fern: H.zahlText(fern), tfern: ms(zeitFern), nah: H.zahlText(nah), tnah: ms(zeitNah), wege: H.zahlText(wege) })
    }, "inh-bild");
    const istFern = fall === "fern";
    const matt = aktiv => aktiv ? "" : " inh-matt";

    // Wege: Bogen zum fernen Ursprung, gerade Strecke zur Kopie, gepunktet der Nachschub der Kopie.
    flaeche.append(
      svg("path", { d: "M 60 112 Q 228 10 396 112" }, "inh-weg" + (istFern ? " inh-aktiv" : " inh-matt")),
      svg("line", { x1: 60, y1: 122, x2: 156, y2: 122 }, "inh-weg" + (istFern ? " inh-matt" : " inh-aktiv")),
      svg("line", { x1: 184, y1: 122, x2: 396, y2: 122 }, "inh-nachschub" + matt(!istFern)),
      schrift(228, 50, ms(zeitFern), "inh-zeit" + matt(istFern)),
      schrift(108, 141, ms(zeitNah), "inh-zeit" + matt(!istFern))
    );

    // Nutzer: Bildschirm mit Fuß.
    flaeche.append(
      svg("rect", { x: 33, y: 110, width: 26, height: 18 }, "inh-knoten"),
      svg("line", { x1: 38, y1: 133, x2: 54, y2: 133 }, "inh-strich"),
      schrift(46, 156, T("inh.k.nutzer"), "inh-name")
    );

    // Kopie: zwei gestapelte Speicher.
    const kopie = svg("g", {}, "inh-gruppe" + matt(!istFern));
    kopie.append(
      svg("rect", { x: 158, y: 108, width: 24, height: 11 }, "inh-knoten inh-speicher"),
      svg("rect", { x: 158, y: 123, width: 24, height: 11 }, "inh-knoten inh-speicher"),
      schrift(170, 156, T("inh.k.kopie"), "inh-name"),
      schrift(170, 172, km(nah))
    );

    // Ursprung: Serverschrank mit drei Einschüben.
    const ursprung = svg("g", {}, "inh-gruppe");
    ursprung.append(svg("rect", { x: 398, y: 100, width: 24, height: 38 }, "inh-knoten"));
    for (const y of [110, 119, 128]) ursprung.append(svg("line", { x1: 403, y1: y, x2: 417, y2: y }, "inh-strich"));
    ursprung.append(schrift(410, 156, T("inh.k.ursprung"), "inh-name"), schrift(410, 172, km(fern)));

    flaeche.append(kopie, ursprung);
    return flaeche;
  }

  function ergebnisBauen(ergebnis) {
    const zeitFern = wartezeit(fern);
    const zeitNah = wartezeit(nah);
    const groesste = Math.max(zeitFern, zeitNah);
    const istFern = fall === "fern";
    const balken = el("div", "inh-balken");
    balken.append(
      H.balken(T("inh.fall.fern"), ms(zeitFern), zeitFern / groesste, "var(--bernstein)"),
      H.balken(T("inh.fall.nah"), ms(zeitNah), zeitNah / groesste)
    );
    const teile = [
      zeichnen(zeitFern, zeitNah),
      H.zahlen([
        { wert: ms(zeitFern), name: T("inh.z.fern"), klasse: istFern ? "betont" : "" },
        { wert: ms(zeitNah), name: T("inh.z.nah"), klasse: istFern ? "" : "betont" },
        { wert: ms(Math.max(0, zeitFern - zeitNah)), name: T("inh.z.ersparnis") },
        { wert: ms(rundlauf(istFern ? fern : nah)), name: T("inh.z.rundlauf") }
      ]),
      balken
    ];
    if (nah >= fern) teile.push(el("p", "inh-hinweis", T("inh.keinGewinn")));
    teile.push(H.vermerk(T("allg.naeherung") + ": " + T("inh.vermerk")));
    ergebnis.replaceChildren(...teile);
  }

  function bauen(ziel) {
    const ergebnis = el("div", "spalte");
    const neu = () => ergebnisBauen(ergebnis);
    const wahl = H.umschalter(T("inh.fall"), [
      { wert: "fern", text: T("inh.fall.fern") },
      { wert: "nah", text: T("inh.fall.nah") }
    ], fall, wert => {
      fall = wert;
      neu();
      Klang.doppelton();
    });
    const reglerFern = H.regler(T("inh.r.fern"), 50, 15000, 50, fern, km, wert => {
      fern = wert;
      neu();
    });
    const reglerNah = H.regler(T("inh.r.nah"), 5, 1000, 5, nah, km, wert => {
      nah = wert;
      neu();
    });
    const reglerWege = H.regler(T("inh.r.wege"), 1, 40, 1, wege, wert => H.zahlText(wert), wert => {
      wege = wert;
      neu();
    });
    const reglerUmweg = H.regler(T("inh.r.umweg"), 1, 2.5, 0.1, umweg, wert => fuellen(T("inh.fach"), { a: H.zahlText(wert, 1) }), wert => {
      umweg = wert;
      neu();
    });
    neu();
    ziel.replaceChildren(
      H.zwei([
        wahl,
        reglerFern.knoten,
        reglerNah.knoten,
        reglerWege.knoten,
        reglerUmweg.knoten,
        H.erklaerung(T("inh.e.wege.titel"), T("inh.e.wege.text")),
        H.erklaerung(T("inh.e.netz.titel"), fuellen(T("inh.e.netz.text"), { datum: H.datumText(STAND) })),
        H.erklaerung(T("inh.e.anbieter.titel"), T("inh.e.anbieter.text"))
      ], [ergebnis]),
      H.grenze(T("inh.grenze")),
      H.quellenliste(QUELLEN)
    );
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.inhalte = { bauen };
})();
