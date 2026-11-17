// Atlas: gemeinsame Teile der Bausteine „Flache Karte“ und „Globus“: die Auskunft zur Auswahl
// und die Liste der gezeigten Kabel.
// Braucht js/rahmen.js, js/hilfen.js, js/karte.js, daten/kabel.js und daten/knoten.js.
window.Atlas = (() => {
  "use strict";
  const { T, L, el } = window.Rahmen;
  const H = window.Hilfen;
  const kabel = window.NETZ_KABEL || [];
  const knoten = window.NETZ_KNOTEN || [];
  const orte = window.Karte.orteAus(kabel);
  const finden = { kabel: new Map(kabel.map(k => [k.id, k])), knoten: new Map(knoten.map(k => [k.id, k])), ort: new Map(orte.map(o => [o.id, o])) };
  const statusText = status => (status === "betrieb" ? T("karte.betrieb") : status === "geplant" ? T("karte.geplant") : T("karte.stillgelegt"));

  // Baut die Auskunft zur Auswahl { art, id }; ohne Auswahl einen Hinweis.
  function auskunft(auswahl) {
    const kasten = el("div", "auskunft");
    const eintrag = auswahl ? finden[auswahl.art] && finden[auswahl.art].get(auswahl.id) : null;
    if (!eintrag) {
      kasten.append(el("p", "auskunft-leer", T("atl.nichts")));
      return kasten;
    }
    const kopf = el("div", "profil-kopf");
    const teile = [kopf];
    if (auswahl.art === "kabel") {
      kopf.append(H.eigenname("h3", eintrag.name), el("span", "profil-status " + eintrag.status, statusText(eintrag.status)));
      teile.push(el("p", "profil-text", L(eintrag.text)), H.zahlen([
        { wert: eintrag.inBetrieb ? H.datumText(eintrag.inBetrieb) : T("allg.offen"), name: T("kab.inBetrieb") },
        { wert: eintrag.laengeKm === null ? T("allg.offen") : H.zahlText(eintrag.laengeKm) + " " + T("kab.km"), name: T("kab.laenge") },
        { wert: String(eintrag.orte.length + (eintrag.weitereOrte || 0)), name: T("kab.orte") }
      ]));
      const link = el("a", "knopf", T("atl.zumProfil"));
      link.href = "kabel.html#" + eintrag.id;
      teile.push(link);
    } else if (auswahl.art === "knoten") {
      kopf.append(H.eigenname("h3", eintrag.name), el("span", "profil-status", T("karte.knoten")));
      teile.push(el("p", "profil-text", L(eintrag.text)));
      const link = el("a", "knopf", T("atl.zumProfil"));
      link.href = "knoten.html#ixp=" + eintrag.id;
      teile.push(link);
    } else {
      kopf.append(H.eigenname("h3", eintrag.name), el("span", "profil-status", T("karte.ort") + " · " + H.landName(eintrag.land)));
      const liste = el("ul", "auskunft-liste");
      for (const id of eintrag.kabel) {
        const punkt = el("li");
        const link = H.eigenname("a", finden.kabel.get(id).name);
        link.href = "kabel.html#" + id;
        punkt.append(link);
        liste.append(punkt);
      }
      teile.push(el("p", "profil-notiz", T("atl.kabelHier") + ":"), liste);
      const link = el("a", "knopf", T("atl.zumProfil"));
      link.href = "knoten.html#anlandeorte=" + eintrag.id;
      teile.push(link);
    }
    kasten.append(...teile);
    return kasten;
  }

  // Liste der Kabel als Knöpfe; für Bedienung ohne Maus und als Entsprechung zur Zeichnung.
  function kabelListe(liste, aktiv, beiWahl) {
    const huelle = el("div", "atlas-liste");
    huelle.append(el("h3", "", T("atl.liste") + " (" + liste.length + ")"));
    const reihe = el("div", "atlas-knoepfe");
    for (const k of [...liste].sort((a, b) => a.name.localeCompare(b.name))) {
      const knopf = H.eigenname("button", k.name);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", String(aktiv && aktiv.art === "kabel" && aktiv.id === k.id));
      knopf.addEventListener("click", () => beiWahl("kabel", k.id));
      reihe.append(knopf);
    }
    huelle.append(reihe);
    return huelle;
  }

  return { kabel, knoten, orte, finden, auskunft, kabelListe };
})();
