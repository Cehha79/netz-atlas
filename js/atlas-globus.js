// Atlas, Baustein „Globus“: dieselben Kabel und Knoten auf der Kugel. Die Bibliothek globe.gl liegt lokal
// in vendor/ und wird erst geladen, wenn der Globus gezeigt wird.
// Braucht js/atlas.js und daten/land.js.
(() => {
  "use strict";
  const { T, el } = window.Rahmen;
  const H = window.Hilfen;
  const Klang = window.Klang;
  const A = window.Atlas;
  if (!A.kabel.length) return;
  const erste = H.adressWahl("globus");
  let auswahl = A.finden.kabel.has(erste) ? { art: "kabel", id: erste } : null;
  let welt = null;
  let laedt = null;

  // Lädt die Bibliothek einmal; liefert ein Versprechen, das bei Erfolg erfüllt wird.
  function bibliothek() {
    if (window.Globe) return Promise.resolve();
    if (!laedt) {
      laedt = new Promise((erfuellt, gescheitert) => {
        const skript = document.createElement("script");
        skript.src = "vendor/globe.gl.min.js";
        skript.onload = erfuellt;
        skript.onerror = gescheitert;
        document.head.append(skript);
      });
    }
    return laedt;
  }

  const farbe = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  // Macht aus Text harmlosen Text für die Beschriftungen der Bibliothek, die HTML erwarten.
  const sicher = text => String(text).replace(/[&<>"']/g, zeichen => "&#" + zeichen.charCodeAt(0) + ";");

  function bauen(ziel) {
    if (welt && welt._destructor) welt._destructor();
    welt = null;
    const buehne = el("div", "globus");
    buehne.setAttribute("role", "img");
    buehne.setAttribute("aria-label", T("glo.beschreibung"));
    const meldung = el("p", "globus-meldung", T("glo.laden"));
    buehne.append(meldung);
    const auskunftPlatz = el("div");
    const listenPlatz = el("div");
    const seite = el("div", "atlas-seite");
    seite.append(buehne, auskunftPlatz);
    ziel.replaceChildren(seite, el("p", "karte-bedienung", T("glo.bedienung")), listenPlatz, H.grenze(T("atl.grenze")));

    function auffrischen() {
      auskunftPlatz.replaceChildren(A.auskunft(auswahl));
      listenPlatz.replaceChildren(A.kabelListe(A.kabel, auswahl, waehlen));
      if (!welt) return;
      const gewaehlt = d => auswahl && auswahl.art === "kabel" && auswahl.id === d.id;
      welt.pathColor(d => (gewaehlt(d) ? farbe("--bernstein") : d.status === "stillgelegt" ? farbe("--matt") : farbe("--akzent")));
      welt.pathStroke(d => (gewaehlt(d) ? 1.6 : null));
      welt.pointColor(d => (auswahl && auswahl.art === "knoten" && auswahl.id === d.id ? farbe("--text") : farbe("--bernstein")));
    }

    function waehlen(art, id) {
      auswahl = { art, id };
      auffrischen();
      H.adresseSetzen("globus", art === "kabel" ? id : "");
      Klang.doppelton();
      if (!welt) return;
      const eintrag = A.finden[art].get(id);
      const punkt = art === "kabel" ? window.Karte.kabelweg(eintrag)[Math.floor(window.Karte.kabelweg(eintrag).length / 2)] : [eintrag.lat, eintrag.lon];
      welt.controls().autoRotate = false;
      welt.pointOfView({ lat: punkt[0], lng: punkt[1], altitude: 1.9 }, window.Rahmen.bewegung() ? 900 : 0);
    }

    auffrischen();
    // Ohne WebGL kann der Browser den Globus nicht zeichnen; dann bleibt es beim Hinweis.
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) {
      meldung.textContent = T("glo.fehler");
      return;
    }
    bibliothek().then(() => {
      if (!buehne.isConnected) return;
      meldung.remove();
      const land = (window.NETZ_LAND || { ringe: [] }).ringe.map(ring => {
        const punkte = [];
        for (let i = 0; i < ring.length; i += 2) punkte.push([ring[i] / 10, ring[i + 1] / 10]);
        return { type: "Feature", geometry: { type: "Polygon", coordinates: [punkte] } };
      });
      welt = window.Globe()(buehne)
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true).atmosphereColor(farbe("--akzent")).atmosphereAltitude(0.12)
        .hexPolygonsData(land).hexPolygonResolution(3).hexPolygonMargin(0.35).hexPolygonUseDots(true)
        .hexPolygonColor(() => farbe("--matt"))
        .pathsData(A.kabel.map(k => ({ id: k.id, name: k.name, status: k.status, weg: window.Karte.kabelweg(k) })))
        .pathPoints("weg").pathPointLat(p => p[0]).pathPointLng(p => p[1]).pathPointAlt(0.006)
        .pathDashLength(1).pathDashGap(0).pathDashAnimateTime(0).pathTransitionDuration(0)
        .pathLabel(d => sicher(d.name))
        .onPathClick(d => waehlen("kabel", d.id))
        .pointsData(A.knoten.map(k => ({ id: k.id, name: k.name, lat: k.lat, lng: k.lon })))
        .pointLat("lat").pointLng("lng").pointAltitude(0.012).pointRadius(0.38)
        .pointLabel(d => sicher(d.name))
        .onPointClick(d => waehlen("knoten", d.id));
      try {
        welt.globeMaterial().color.set(farbe("--feld"));
        welt.globeMaterial().shininess = 4;
      } catch (_) {
        welt.showGlobe(true);
      }
      welt.pointOfView({ lat: 30, lng: 15, altitude: 2.3 }, 0);
      const steuerung = welt.controls();
      steuerung.autoRotate = window.Rahmen.bewegung();
      steuerung.autoRotateSpeed = 0.45;
      steuerung.minDistance = 160;
      steuerung.maxDistance = 600;
      buehne.addEventListener("pointerdown", () => {
        steuerung.autoRotate = false;
      });
      const groesse = () => {
        if (!buehne.isConnected) {
          beobachter.disconnect();
          return;
        }
        welt.width(buehne.clientWidth).height(buehne.clientHeight);
      };
      const beobachter = new ResizeObserver(groesse);
      beobachter.observe(buehne);
      groesse();
      auffrischen();
    }).catch(() => {
      meldung.textContent = T("glo.fehler");
      buehne.replaceChildren(meldung);
    });
  }

  document.addEventListener("bewegungswechsel", ereignis => {
    if (welt && !ereignis.detail.bewegung) welt.controls().autoRotate = false;
  });

  window.NETZ_SCHAUBILDER = window.NETZ_SCHAUBILDER || {};
  window.NETZ_SCHAUBILDER.globus = { bauen };
})();
