// Störfälle: gemeinsame Teile der drei Bausteine und des Meldungsbands der Startseite:
// die sortierte Liste, Bezeichnungen, Marken für die Karte und die Auskunft zu einem Fall.
// Braucht js/rahmen.js, js/hilfen.js und daten/vorfaelle.js.
window.Stoerfaelle = (() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const liste = [...(window.NETZ_VORFAELLE || [])].sort((a, b) => b.datum.localeCompare(a.datum));
  const nachKennung = new Map(liste.map(f => [f.id, f]));
  const artText = art => (art === "kabel" ? T("stf.kabel") : T("stf.routing"));
  const ursachen = { beben: () => T("stf.beben"), vulkan: () => T("stf.vulkan"), hangrutsch: () => T("stf.hangrutsch"), anker: () => T("stf.anker"), fischerei: () => T("stf.fischerei"), fehlkonfiguration: () => T("stf.fehlkonfiguration"), kapern: () => T("stf.kapern"), unklar: () => T("stf.unklar") };
  const quellenArt = { primaer: () => T("stf.primaer"), analyse: () => T("stf.analyse"), presse: () => T("stf.presse") };
  const farbe = art => getComputedStyle(document.documentElement).getPropertyValue(art === "kabel" ? "--akzent" : "--bernstein").trim();

  // Die Ursache in Worten: festgestellt, oder die Vermutung mit dem Vermerk, dass sie nicht gesichert ist.
  function ursacheText(fall) {
    if (fall.gesichert) return ursachen[fall.ursache]() + " (" + T("stf.gesichert") + ")";
    if (fall.ursache === "unklar") return T("stf.unklar");
    return T("stf.ungesichert") + " (" + T("stf.vermutet") + ": " + ursachen[fall.ursache]() + ")";
  }

  function dauerText(fall) {
    if (typeof fall.dauerTage !== "number") return "";
    if (fall.dauerTage < 1) return H.zahlText(Math.max(1, Math.round(fall.dauerTage * 24))) + " " + T("stf.stunden");
    return H.zahlText(fall.dauerTage) + " " + T("stf.tage");
  }

  // Marken für die Karte: nur Fälle mit bekannter Lage. Nicht gesicherte Ursachen erscheinen als Ring.
  function marken(faelle) {
    return faelle.filter(f => f.ort).map(f => ({ id: f.id, lat: f.ort.lat, lon: f.ort.lon, name: L(f.titel), farbe: farbe(f.art), form: f.gesichert ? "raute" : "ring", groesse: 5 }));
  }

  function auskunft(fall) {
    const kasten = el("div", "auskunft");
    if (!fall) {
      kasten.append(el("p", "auskunft-leer", T("stf.waehle")));
      return kasten;
    }
    const kopf = el("div", "profil-kopf");
    kopf.append(el("h3", "", L(fall.titel)), el("span", "profil-status " + (fall.art === "kabel" ? "betrieb" : "geplant"), artText(fall.art)));
    const angaben = el("dl", "profil-angaben");
    const zeile = (name, inhalt) => {
      const wert = el("dd");
      wert.append(inhalt);
      angaben.append(el("dt", "", name), wert);
    };
    zeile(T("stf.datum"), H.datumText(fall.datum));
    zeile(T("stf.ursache"), ursacheText(fall));
    if (dauerText(fall)) zeile(T("stf.dauer"), dauerText(fall));
    if (fall.ort) zeile(T("stf.ort"), L(fall.ort.name));
    if ((fall.kabel || []).length) zeile(T("stf.betroffen"), H.eigenname("span", fall.kabel.join(", ")));
    if ((fall.netze || []).length) zeile(T("stf.netze"), H.eigenname("span", fall.netze.join(", ")));
    zeile(T("allg.geprueft"), H.datumText(fall.geprueftAm));
    const quellen = el("ul", "quellenliste");
    for (const q of fall.quellen) {
      const punkt = el("li");
      const link = H.verweis(q.url, q.name);
      link.lang = "en";
      punkt.append(link, el("span", "", " · " + quellenArt[q.art]()));
      quellen.append(punkt);
    }
    const abschnitt = el("div", "profil-abschnitt");
    abschnitt.append(el("h4", "", T("allg.quellen")), quellen);
    kasten.append(kopf, el("p", "profil-text", L(fall.text)), angaben, abschnitt);
    if (fall.ort) kasten.append(el("p", "profil-notiz", T("stf.ortUngefaehr")));
    return kasten;
  }

  // Zeichenerklärung für Karten mit Störfällen.
  function legende() {
    return [
      { form: "raute", farbe: farbe("kabel"), text: T("stf.kabel") + " · " + T("stf.zahlGesichert") },
      { form: "ring", farbe: farbe("kabel"), text: T("stf.kabel") + " · " + T("stf.zahlOffen") }
    ];
  }

  return { liste, nachKennung, artText, ursacheText, dauerText, marken, auskunft, farbe, legende };
})();
