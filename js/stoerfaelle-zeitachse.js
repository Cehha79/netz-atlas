// Störfälle, Baustein „Zeitachse“: alle Fälle nach Datum, oben Kabelschäden, unten Routing-Vorfälle.
// Braucht js/stoerfaelle.js.
(() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const S = window.Stoerfaelle;
  if (!S.liste.length) return;
  const svg = (name, werte) => {
    const knoten = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [schluessel, wert] of Object.entries(werte || {})) knoten.setAttribute(schluessel, wert);
    return knoten;
  };
  let zeitraum = "2000";
  let aktiv = S.nachKennung.has(H.adressWahl("zeitachse")) ? H.adressWahl("zeitachse") : S.liste[0].id;

  function bauen(ziel) {
    const achsenPlatz = el("div", "zeitkarte-huelle");
    const auskunftPlatz = el("div");

    function zeichnen() {
      const start = zeitraum === "2000" ? 2000 : 1925;
      const ende = new Date().getFullYear() + 1;
      const breite = 1000;
      const links = 132;
      const rechts = 16;
      const x = datum => {
        const [jahr, monat, tag] = (datum + "-01-01").split("-").map(Number);
        const wert = jahr + (monat - 1) / 12 + (tag - 1) / 365;
        return links + ((wert - start) / (ende - start)) * (breite - links - rechts);
      };
      const zeilen = { kabel: 62, routing: 136 };
      const bild = svg("svg", { viewBox: "0 0 " + breite + " 190", class: "zeitkarte", role: "group", "aria-label": T("stf.achse") });
      const schritt = zeitraum === "2000" ? 5 : 20;
      for (let jahr = Math.ceil(start / schritt) * schritt; jahr <= ende; jahr += schritt) {
        bild.append(svg("line", { x1: x(String(jahr)), x2: x(String(jahr)), y1: 22, y2: 168, class: "zeit-raster" }));
        const text = svg("text", { x: x(String(jahr)), y: 184, class: "zeit-jahr" });
        text.textContent = jahr;
        bild.append(text);
      }
      for (const [art, y] of Object.entries(zeilen)) {
        bild.append(svg("line", { x1: links, x2: breite - rechts, y1: y, y2: y, class: "zeit-linie" }));
        const text = svg("text", { x: 0, y: y + 4, class: "zeit-zeile" });
        text.textContent = S.artText(art);
        bild.append(text);
      }
      // Fälle, die dicht beieinander liegen, rücken nach oben, damit jedes Quadrat sichtbar bleibt.
      const belegt = { kabel: [], routing: [] };
      for (const fall of [...S.liste].reverse()) {
        if (Number(fall.datum.slice(0, 4)) < start) continue;
        const px = x(fall.datum);
        let stufe = 0;
        while (belegt[fall.art].some(b => b.stufe === stufe && Math.abs(b.px - px) < 13)) stufe++;
        belegt[fall.art].push({ px, stufe });
        const y = zeilen[fall.art] - 6 - stufe * 14;
        const marke = svg("rect", { x: px - 5.5, y, width: 11, height: 11, class: "zeit-marke " + fall.art + (fall.gesichert ? "" : " offen") + (fall.id === aktiv ? " gewaehlt" : ""), tabindex: 0, role: "button", "aria-label": H.datumText(fall.datum) + ", " + L(fall.titel), "aria-pressed": String(fall.id === aktiv) });
        const titel = svg("title");
        titel.textContent = H.datumText(fall.datum) + " · " + L(fall.titel);
        marke.append(titel);
        marke.addEventListener("click", () => waehlen(fall.id));
        marke.addEventListener("keydown", ereignis => {
          if (ereignis.key === "Enter" || ereignis.key === " ") {
            ereignis.preventDefault();
            waehlen(fall.id);
          }
        });
        bild.append(marke);
      }
      achsenPlatz.replaceChildren(bild);
    }

    function waehlen(id) {
      aktiv = id;
      zeichnen();
      auskunftPlatz.replaceChildren(S.auskunft(S.nachKennung.get(aktiv)));
      H.adresseSetzen("zeitachse", id);
      Klang.doppelton();
      const neu = achsenPlatz.querySelector(".gewaehlt");
      if (neu) neu.focus();
    }

    const wahl = H.umschalter(T("stf.zeitraum"), [{ wert: "2000", text: T("stf.seit2000") }, { wert: "alle", text: T("stf.alleJahre") }], zeitraum, wert => {
      zeitraum = wert;
      zeichnen();
    });
    const kennzahlen = H.zahlen([
      { wert: String(S.liste.filter(f => f.art === "kabel").length), name: T("stf.zahlKabel"), klasse: "betont" },
      { wert: String(S.liste.filter(f => f.art === "routing").length), name: T("stf.zahlRouting"), klasse: "warnung" },
      { wert: String(S.liste.filter(f => f.gesichert).length), name: T("stf.zahlGesichert") },
      { wert: String(S.liste.filter(f => !f.gesichert).length), name: T("stf.zahlOffen") }
    ]);
    ziel.replaceChildren(wahl, achsenPlatz, H.zwei([auskunftPlatz], [kennzahlen, H.erklaerung(T("stf.lesen"), T("stf.lesenText"))]), H.grenze(T("stf.grenze")));
    zeichnen();
    auskunftPlatz.replaceChildren(S.auskunft(S.nachKennung.get(aktiv)));
  }

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.zeitachse = { bauen };
})();
