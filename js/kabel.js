// Kabelseite: Verzeichnis der ausgewählten Seekabel links, Profil und Verlauf des gewählten Kabels rechts.
// Die Auswahl steht in der Adresse (kabel.html#dunant).
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js und daten/kabel.js.
(() => {
  "use strict";

  const { T, L, el, tafel } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const kabel = window.NETZ_KABEL || [];
  const ziel = document.getElementById("kabel");
  if (!ziel || !kabel.length) return;

  const gebiete = ["atlantik", "nord-ostsee", "arktis", "mittelmeer", "europa-asien", "afrika", "indik", "asien", "pazifik"];
  const gebietText = { atlantik: () => T("gebiet.atlantik"), afrika: () => T("gebiet.afrika"), mittelmeer: () => T("gebiet.mittelmeer"), "nord-ostsee": () => T("gebiet.nord-ostsee"), arktis: () => T("gebiet.arktis"), "europa-asien": () => T("gebiet.europa-asien"), pazifik: () => T("gebiet.pazifik"), asien: () => T("gebiet.asien"), indik: () => T("gebiet.indik") };
  const statusText = { betrieb: () => T("karte.betrieb"), geplant: () => T("karte.geplant"), stillgelegt: () => T("karte.stillgelegt") };
  const feldText = { inBetrieb: () => T("feld.inBetrieb"), ausserBetrieb: () => T("feld.ausserBetrieb"), laengeKm: () => T("feld.laengeKm"), faserpaare: () => T("feld.faserpaare"), kapazitaetTbit: () => T("feld.kapazitaetTbit"), eigner: () => T("feld.eigner"), orte: () => T("feld.orte"), weitereOrte: () => T("feld.weitereOrte"), status: () => T("feld.status") };
  const nachKennung = new Map(kabel.map(k => [k.id, k]));
  const ausAdresse = () => decodeURIComponent(window.location.hash.slice(1));
  let aktiv = nachKennung.has(ausAdresse()) ? ausAdresse() : kabel[0].id;
  let frage = "";
  let liste = null;
  let profilPlatz = null;
  let zaehler = null;

  const landName = H.landName;

  function passt(k) {
    if (!frage) return true;
    const heuhaufen = [k.name, ...k.eigner, ...k.orte.map(o => o.name), ...k.orte.map(o => landName(o.land))].map(H.klein).join(" ");
    return heuhaufen.includes(H.klein(frage));
  }

  function listeBauen() {
    const teile = [];
    let sichtbar = 0;
    for (const gebiet of gebiete) {
      const gruppe = kabel.filter(k => k.gebiet === gebiet && passt(k)).sort((a, b) => a.name.localeCompare(b.name));
      if (!gruppe.length) continue;
      sichtbar += gruppe.length;
      teile.push(el("h3", "verz-gruppe", gebietText[gebiet]()));
      const reihe = el("ul", "verz-liste");
      for (const k of gruppe) {
        const punkt = el("li");
        const knopf = el("button", "verz-eintrag" + (k.status !== "betrieb" ? " " + k.status : ""));
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", String(k.id === aktiv));
        knopf.append(H.eigenname("b", k.name), el("small", "", (k.inBetrieb ? String(k.inBetrieb).slice(0, 4) : "–") + (k.status !== "betrieb" ? " · " + statusText[k.status]() : "")));
        knopf.addEventListener("click", () => waehlen(k.id, true));
        punkt.append(knopf);
        reihe.append(punkt);
      }
      teile.push(reihe);
    }
    if (!teile.length) teile.push(el("p", "verz-leer", T("allg.keinTreffer")));
    liste.replaceChildren(...teile);
    zaehler.textContent = sichtbar + " / " + kabel.length + " " + T("kab.anzahl");
  }

  function wertOderOffen(k, feld, text) {
    if (k[feld] === null || k[feld] === undefined) return T("allg.offen");
    return text;
  }

  function profilBauen() {
    const k = nachKennung.get(aktiv);
    const kopf = el("div", "profil-kopf");
    const marke = el("span", "profil-status " + k.status, statusText[k.status]());
    kopf.append(H.eigenname("h3", k.name), marke);

    const stamm = H.zahlen([
      { wert: wertOderOffen(k, "inBetrieb", H.datumText(k.inBetrieb)), name: T("kab.inBetrieb") },
      { wert: wertOderOffen(k, "laengeKm", H.zahlText(k.laengeKm) + " " + T("kab.km")), name: T("kab.laenge") },
      { wert: k.faserpaare === null ? "–" : H.zahlText(k.faserpaare), name: T("kab.faserpaare") },
      { wert: k.kapazitaetTbit === null ? "–" : H.zahlText(k.kapazitaetTbit, 1) + " " + T("kab.tbit"), name: T("kab.kapazitaet") }
    ]);

    const angaben = el("dl", "profil-angaben");
    const zeile = (name, knoten) => {
      const wert = el("dd");
      wert.append(knoten);
      angaben.append(el("dt", "", name), wert);
    };
    zeile(T("kab.gebiet"), gebietText[k.gebiet] ? gebietText[k.gebiet]() : k.gebiet);
    if (k.ausserBetrieb) zeile(T("kab.ausserBetrieb"), H.datumText(k.ausserBetrieb));
    const eigner = el("span");
    eigner.lang = "en";
    eigner.textContent = k.eigner.length ? k.eigner.join(", ") : T("allg.offen");
    zeile(T("kab.eigner"), eigner);
    if (k.konsortium) zeile("", T("kab.konsortium"));
    zeile(T("allg.geprueft"), H.datumText(k.geprueftAm));

    const orte = H.tabelle("orte", [T("kab.ort"), T("kab.land")], k.orte.map(o => ({ zellen: [H.eigenname("span", o.name), landName(o.land)] })));
    const ortTeile = [el("h4", "", T("kab.orte") + " (" + (k.orte.length + (k.weitereOrte || 0)) + ")"), orte];
    if (k.weitereOrte) ortTeile.push(el("p", "profil-notiz", "+ " + k.weitereOrte + " " + T("kab.weitereOrte")));
    ortTeile.push(el("p", "profil-notiz", T("kab.ortHinweis")));

    const teile = [kopf, el("p", "profil-text", L(k.text)), stamm, angaben];
    if ((k.offen || []).length) {
      const namen = [...new Set(k.offen.map(feld => (feldText[feld] ? feldText[feld]() : T("feld.sonst"))))];
      teile.push(el("p", "profil-offen", T("kab.offen") + ": " + namen.join(", ")));
    }
    const kartenPlatz = el("div", "profil-karte");
    const abschnittOrte = el("div", "profil-abschnitt");
    abschnittOrte.append(...ortTeile);
    const abschnittQuellen = el("div", "profil-abschnitt");
    abschnittQuellen.append(el("h4", "", T("allg.quellen")), H.quellenliste(k.quellen));
    const imAtlas = el("a", "knopf", T("kab.zurKarte"));
    imAtlas.href = "atlas.html#karte=" + encodeURIComponent(k.id);
    teile.push(kartenPlatz, abschnittOrte, abschnittQuellen, imAtlas);
    profilPlatz.replaceChildren(...teile);

    const karte = window.Karte.bauen(kartenPlatz, {
      kabel,
      auswahl: { art: "kabel", id: k.id },
      beiWahl: (art, id) => {
        if (art === "kabel") waehlen(id, true);
      }
    });
    karte.einpassen(window.Karte.kabelweg(k));
  }

  function waehlen(id, vonHand) {
    if (!nachKennung.has(id)) return;
    aktiv = id;
    for (const knopf of liste.querySelectorAll("button")) knopf.setAttribute("aria-pressed", "false");
    listeBauen();
    profilBauen();
    if (!vonHand) return;
    Klang.doppelton();
    try {
      window.history.replaceState(null, "", "#" + id);
    } catch (_) {
      return;
    }
  }

  function bauen() {
    const verzeichnis = tafel(T("kab.verzeichnis"));
    zaehler = el("small");
    verzeichnis.querySelector("h2").append(zaehler);
    const suche = el("div", "eingabe verz-suche");
    const feld = el("input");
    feld.type = "search";
    feld.autocomplete = "off";
    feld.placeholder = T("kab.suchfeld");
    feld.setAttribute("aria-label", T("kab.suchfeld"));
    feld.value = frage;
    feld.addEventListener("input", () => {
      frage = feld.value.trim();
      listeBauen();
    });
    suche.append(feld);
    liste = el("div", "verzeichnis");
    verzeichnis.append(suche, liste);

    const profil = tafel(T("kab.profil"), T("allg.schematisch"));
    profilPlatz = el("div", "profil");
    profil.append(profilPlatz);

    const huelle = el("div", "zweispalter");
    huelle.append(verzeichnis, profil);
    ziel.replaceChildren(huelle);
    listeBauen();
    profilBauen();
  }

  document.addEventListener("sprachwechsel", bauen);
  window.addEventListener("hashchange", () => {
    if (nachKennung.has(ausAdresse()) && ausAdresse() !== aktiv) waehlen(ausAdresse(), false);
  });
  bauen();
})();
