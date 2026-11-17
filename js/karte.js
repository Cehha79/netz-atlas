// Karte: zeichnet die flache Weltkarte in flächentreuer Projektion (Equal Earth) auf eine Leinwand,
// mit Landflächen, schematischen Kabelverläufen, Anlandeorten, Knoten und frei setzbaren Marken.
// Die Kabelverläufe folgen dem Netz aus daten/seewege.js; sie zeigen nicht die echte Lage der Kabel.
// Braucht js/rahmen.js, daten/land.js und daten/seewege.js.
window.Karte = (() => {
  "use strict";

  const { T, el } = window.Rahmen;
  const land = window.NETZ_LAND || { ringe: [], laender: {} };
  const see = window.NETZ_SEEWEGE || { punkte: {}, wege: [] };
  const BOGEN = Math.PI / 180;
  const ERDRADIUS = 6371;

  // ---------- Projektion Equal Earth ----------
  const A1 = 1.340264;
  const A2 = -0.081106;
  const A3 = 0.000893;
  const A4 = 0.003796;
  const M = Math.sqrt(3) / 2;

  function projizieren(lon, lat) {
    const t = Math.asin(M * Math.sin(lat * BOGEN));
    const t2 = t * t;
    const t6 = t2 * t2 * t2;
    const x = lon * BOGEN * Math.cos(t) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)));
    const y = t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
    return [x, y];
  }
  const WELTBREITE = 2 * projizieren(180, 0)[0];
  const WELTHOEHE = 2 * projizieren(0, 90)[1];

  // ---------- Rechnen auf der Kugel ----------
  // Entfernung zweier Punkte [Breite, Länge] in Kilometern.
  function entfernung(a, b) {
    const dLat = (b[0] - a[0]) * BOGEN;
    const dLon = (b[1] - a[1]) * BOGEN;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * BOGEN) * Math.cos(b[0] * BOGEN) * Math.sin(dLon / 2) ** 2;
    return 2 * ERDRADIUS * Math.asin(Math.min(1, Math.sqrt(h)));
  }

  // Punkte auf dem Großkreis zwischen zwei Punkten [Breite, Länge], einschließlich der Enden.
  function grosskreis(a, b) {
    const lat1 = a[0] * BOGEN;
    const lon1 = a[1] * BOGEN;
    const lat2 = b[0] * BOGEN;
    const lon2 = b[1] * BOGEN;
    const winkel = entfernung(a, b) / ERDRADIUS;
    if (winkel < 1e-6) return [a];
    const schritte = Math.max(1, Math.ceil(winkel / (2 * BOGEN)));
    const punkte = [];
    for (let i = 0; i <= schritte; i++) {
      const f = i / schritte;
      const p = Math.sin((1 - f) * winkel) / Math.sin(winkel);
      const q = Math.sin(f * winkel) / Math.sin(winkel);
      const x = p * Math.cos(lat1) * Math.cos(lon1) + q * Math.cos(lat2) * Math.cos(lon2);
      const y = p * Math.cos(lat1) * Math.sin(lon1) + q * Math.cos(lat2) * Math.sin(lon2);
      const z = p * Math.sin(lat1) + q * Math.sin(lat2);
      punkte.push([Math.atan2(z, Math.sqrt(x * x + y * y)) / BOGEN, Math.atan2(y, x) / BOGEN]);
    }
    return punkte;
  }

  // ---------- Seewege ----------
  const nachbarn = new Map(Object.keys(see.punkte).map(id => [id, []]));
  for (const [a, b] of see.wege) {
    const km = entfernung(see.punkte[a], see.punkte[b]);
    nachbarn.get(a).push({ id: b, km });
    nachbarn.get(b).push({ id: a, km });
  }

  // Kürzester Weg über das Netz der Seewege (Verfahren von Dijkstra). Liefert Kennungen und Länge.
  function seeweg(von, nach) {
    const strecke = new Map([[von, 0]]);
    const vorher = new Map();
    const offen = new Set([von]);
    while (offen.size) {
      let jetzt = null;
      for (const id of offen) if (jetzt === null || strecke.get(id) < strecke.get(jetzt)) jetzt = id;
      if (jetzt === nach) break;
      offen.delete(jetzt);
      for (const kante of nachbarn.get(jetzt)) {
        const neu = strecke.get(jetzt) + kante.km;
        if (!strecke.has(kante.id) || neu < strecke.get(kante.id)) {
          strecke.set(kante.id, neu);
          vorher.set(kante.id, jetzt);
          offen.add(kante.id);
        }
      }
    }
    if (!strecke.has(nach)) return null;
    const weg = [nach];
    while (weg[0] !== von) weg.unshift(vorher.get(weg[0]));
    return { weg, km: strecke.get(nach) };
  }

  // Bis zu drei nahe Punkte des Seewegenetzes zu einem Ort. Punkte, die viel weiter weg liegen als
  // der nächste, zählen nicht: Sie lägen oft auf der anderen Seite einer Landmasse.
  // Ein Ort kann mit dem Feld „see“ seinen Seepunkt fest vorgeben.
  function naheSeepunkte(ort) {
    if (ort.see && see.punkte[ort.see]) return [{ id: ort.see, km: entfernung([ort.lat, ort.lon], see.punkte[ort.see]) }];
    const alle = Object.entries(see.punkte)
      .map(([id, punkt]) => ({ id, km: entfernung([ort.lat, ort.lon], punkt) }))
      .sort((a, b) => a.km - b.km);
    const grenze = Math.max(600, alle[0].km * 1.6);
    return alle.filter(punkt => punkt.km <= grenze).slice(0, 3);
  }

  // Schematischer Weg zwischen zwei Anlandeorten: direkt, wenn sie nah beieinander liegen,
  // sonst über die Seewege; gewählt wird die kürzeste Verbindung über je einen nahen Seepunkt.
  function abschnitt(a, b) {
    const start = [a.lat, a.lon];
    const ende = [b.lat, b.lon];
    const direkt = entfernung(start, ende);
    let beste = null;
    for (const p of naheSeepunkte(a)) {
      for (const q of naheSeepunkte(b)) {
        const mitte = p.id === q.id ? { weg: [p.id], km: 0 } : seeweg(p.id, q.id);
        if (!mitte) continue;
        const km = p.km + mitte.km + q.km;
        if (!beste || km < beste.km) beste = { km, weg: mitte.weg };
      }
    }
    if (!beste || direkt < 700) return grosskreis(start, ende);
    const stationen = [start, ...beste.weg.map(id => see.punkte[id]), ende];
    const punkte = [];
    for (let i = 1; i < stationen.length; i++) {
      const teil = grosskreis(stationen[i - 1], stationen[i]);
      punkte.push(...(i === 1 ? teil : teil.slice(1)));
    }
    return punkte;
  }

  const wegSpeicher = new Map();
  // Der ganze schematische Verlauf eines Kabels als Liste aus [Breite, Länge].
  function kabelweg(kabel) {
    if (wegSpeicher.has(kabel.id)) return wegSpeicher.get(kabel.id);
    const punkte = [];
    for (let i = 1; i < kabel.orte.length; i++) {
      const teil = abschnitt(kabel.orte[i - 1], kabel.orte[i]);
      punkte.push(...(i === 1 ? teil : teil.slice(1)));
    }
    wegSpeicher.set(kabel.id, punkte);
    return punkte;
  }

  // Alle Anlandeorte einer Kabelliste, jeder Ort einmal, mit den Kabeln, die dort ankommen.
  function orteAus(kabelListe) {
    const orte = new Map();
    for (const kabel of kabelListe) {
      for (const ort of kabel.orte) {
        const id = (ort.name + "-" + ort.land).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        if (!orte.has(id)) orte.set(id, { id, name: ort.name, land: ort.land, lat: ort.lat, lon: ort.lon, kabel: [] });
        if (!orte.get(id).kabel.includes(kabel.id)) orte.get(id).kabel.push(kabel.id);
      }
    }
    return [...orte.values()];
  }

  // ---------- Zeichnen ----------
  function farbe(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // Baut eine Karte in den Knoten „ziel“. einstellungen:
  //   kabel, knoten, marken: Listen der Einträge; orteZeigen: Anlandeorte einzeichnen;
  //   auswahl: { art, id } oder null; beiWahl(art, id): Rückruf bei Klick; hoch: Verhältnis Höhe zu Breite;
  //   legende: eigene Zeichenerklärung als Liste aus { form, farbe, text } für die Marken.
  // Eine Marke ist { id, lat, lon, farbe, name, form: "kreis" | "raute" | "ring", groesse }.
  function bauen(ziel, einstellungen) {
    const stand = Object.assign({ kabel: [], knoten: [], marken: [], orteZeigen: true, auswahl: null, beiWahl: null, hoch: WELTHOEHE / WELTBREITE, legende: [] }, einstellungen);
    const huelle = el("div", "karte");
    const leinwand = el("canvas");
    leinwand.tabIndex = 0;
    leinwand.setAttribute("role", "img");
    leinwand.setAttribute("aria-label", T("karte.beschreibung"));
    const stift = leinwand.getContext("2d");
    const tipp = el("div", "karte-tipp");
    tipp.hidden = true;
    const knoepfe = el("div", "karte-knoepfe");
    const sicht = { zoom: 1, mx: 0, my: 0 };
    let breite = 0;
    let hoehe = 0;
    let orte = [];
    let treffer = [];

    const masse = () => (breite / WELTBREITE) * sicht.zoom;
    const zuBild = (lon, lat) => {
      const [x, y] = projizieren(lon, lat);
      return [(x - sicht.mx) * masse() + breite / 2, (sicht.my - y) * masse() + hoehe / 2];
    };

    function sichtBegrenzen() {
      sicht.zoom = Math.max(1, Math.min(14, sicht.zoom));
      const halbX = Math.max(0, WELTBREITE / 2 - breite / masse() / 2);
      const halbY = Math.max(0, WELTHOEHE / 2 - hoehe / masse() / 2);
      sicht.mx = Math.max(-halbX, Math.min(halbX, sicht.mx));
      sicht.my = Math.max(-halbY, Math.min(halbY, sicht.my));
    }

    // Zieht eine Linie durch Punkte [Breite, Länge]; an der Datumsgrenze wird sie getrennt.
    function linie(punkte) {
      stift.beginPath();
      let vorherLon = null;
      for (const [lat, lon] of punkte) {
        const [x, y] = zuBild(lon, lat);
        if (vorherLon === null || Math.abs(lon - vorherLon) > 180) stift.moveTo(x, y);
        else stift.lineTo(x, y);
        vorherLon = lon;
      }
      stift.stroke();
    }

    function zeichnen() {
      if (!breite) return;
      const f = { see: farbe("--schwarz"), land: farbe("--land"), linie: farbe("--linie"), raster: farbe("--raster"), text: farbe("--text"), matt: farbe("--matt"), akzent: farbe("--akzent"), bernstein: farbe("--bernstein") };
      stift.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
      stift.fillStyle = f.see;
      stift.fillRect(0, 0, breite, hoehe);
      stift.lineJoin = "round";
      stift.lineCap = "round";

      // Gradnetz alle 30 Grad und der Rand der Weltkarte.
      stift.strokeStyle = f.raster;
      stift.lineWidth = 1;
      for (let lon = -180; lon <= 180; lon += 30) {
        const punkte = [];
        for (let lat = -90; lat <= 90; lat += 5) punkte.push([lat, lon]);
        linie(punkte);
      }
      for (let lat = -60; lat <= 60; lat += 30) linie([[lat, -180], [lat, 180]]);

      // Landflächen.
      stift.fillStyle = f.land;
      stift.strokeStyle = f.linie;
      stift.lineWidth = 0.6;
      for (const ring of land.ringe) {
        stift.beginPath();
        for (let i = 0; i < ring.length; i += 2) {
          const [x, y] = zuBild(ring[i] / 10, ring[i + 1] / 10);
          if (i) stift.lineTo(x, y);
          else stift.moveTo(x, y);
        }
        stift.closePath();
        stift.fill();
        stift.stroke();
      }

      treffer = [];
      const gewaehlt = stand.auswahl;
      const istGewaehlt = (art, id) => gewaehlt && gewaehlt.art === art && gewaehlt.id === id;

      // Kabel: erst alle gedämpft, dann das gewählte kräftig darüber.
      const strich = { betrieb: [], geplant: [5, 4], stillgelegt: [1, 4] };
      for (const kabel of stand.kabel) {
        if (istGewaehlt("kabel", kabel.id)) continue;
        stift.strokeStyle = kabel.status === "stillgelegt" ? f.matt : f.akzent;
        stift.globalAlpha = gewaehlt && gewaehlt.art === "kabel" ? 0.28 : 0.6;
        stift.lineWidth = 1;
        stift.setLineDash(strich[kabel.status] || []);
        linie(kabelweg(kabel));
      }
      stift.globalAlpha = 1;
      for (const kabel of stand.kabel) {
        treffer.push({ art: "kabel", id: kabel.id, name: kabel.name, weg: kabelweg(kabel).map(([lat, lon]) => zuBild(lon, lat).concat(lon)) });
        if (!istGewaehlt("kabel", kabel.id)) continue;
        stift.strokeStyle = f.bernstein;
        stift.lineWidth = 2;
        stift.setLineDash(strich[kabel.status] || []);
        linie(kabelweg(kabel));
      }
      stift.setLineDash([]);

      // Anlandeorte: kleine Punkte; die Orte des gewählten Kabels größer und beschriftet.
      const gewaehltesKabel = gewaehlt && gewaehlt.art === "kabel" ? stand.kabel.find(k => k.id === gewaehlt.id) : null;
      const beschriften = [];
      if (stand.orteZeigen) {
        for (const ort of orte) {
          const [x, y] = zuBild(ort.lon, ort.lat);
          const betont = istGewaehlt("ort", ort.id) || (gewaehltesKabel && ort.kabel.includes(gewaehltesKabel.id));
          if (!betont && sicht.zoom < 1.8 && orte.length > 60) continue;
          stift.fillStyle = betont ? f.bernstein : f.text;
          stift.beginPath();
          stift.arc(x, y, betont ? 3.2 : 1.8, 0, 7);
          stift.fill();
          treffer.push({ art: "ort", id: ort.id, name: ort.name, x, y, r: 7 });
          if (betont) beschriften.push({ x, y, text: ort.name });
        }
      }

      // Knoten: Quadrate.
      for (const knoten of stand.knoten) {
        const [x, y] = zuBild(knoten.lon, knoten.lat);
        const betont = istGewaehlt("knoten", knoten.id);
        const g = betont ? 5 : 3.2;
        stift.fillStyle = betont ? f.text : f.bernstein;
        stift.fillRect(x - g, y - g, 2 * g, 2 * g);
        treffer.push({ art: "knoten", id: knoten.id, name: knoten.name, x, y, r: 8 });
        if (betont) beschriften.push({ x, y, text: knoten.name });
      }

      // Marken: frei gesetzte Zeichen, etwa Störfälle oder Live-Ereignisse.
      for (const marke of stand.marken) {
        const [x, y] = zuBild(marke.lon, marke.lat);
        const g = marke.groesse || 4.5;
        const betont = istGewaehlt("marke", marke.id);
        stift.fillStyle = marke.farbe || f.bernstein;
        stift.strokeStyle = marke.farbe || f.bernstein;
        stift.lineWidth = 1.5;
        stift.beginPath();
        if (marke.form === "raute") {
          stift.moveTo(x, y - g - 1);
          stift.lineTo(x + g + 1, y);
          stift.lineTo(x, y + g + 1);
          stift.lineTo(x - g - 1, y);
          stift.closePath();
          stift.fill();
        } else if (marke.form === "ring") {
          stift.arc(x, y, g, 0, 7);
          stift.stroke();
        } else {
          stift.arc(x, y, g, 0, 7);
          stift.fill();
        }
        if (betont) {
          stift.strokeStyle = f.text;
          stift.lineWidth = 1.5;
          stift.beginPath();
          stift.arc(x, y, g + 5, 0, 7);
          stift.stroke();
          beschriften.push({ x, y, text: marke.name });
        }
        treffer.push({ art: "marke", id: marke.id, name: marke.name, x, y, r: g + 5 });
      }

      // Beschriftungen mit dunklem Grund, damit sie auf Linien lesbar bleiben.
      stift.font = "11px " + farbe("--mono");
      stift.textBaseline = "middle";
      for (const b of beschriften) {
        const w = stift.measureText(b.text).width;
        const links = b.x + 8 + w > breite ? b.x - 8 - w : b.x + 8;
        stift.fillStyle = f.see;
        stift.globalAlpha = 0.82;
        stift.fillRect(links - 3, b.y - 8, w + 6, 16);
        stift.globalAlpha = 1;
        stift.fillStyle = f.text;
        stift.fillText(b.text, links, b.y);
      }
    }

    // Sucht, was unter einem Punkt des Bildes liegt: zuerst Marken, Knoten und Orte, dann Kabel.
    function finden(px, py) {
      let bester = null;
      for (const t of treffer) {
        if (t.art === "kabel") continue;
        const d = Math.hypot(t.x - px, t.y - py);
        if (d <= t.r && (!bester || d < bester.d)) bester = { d, t };
      }
      if (bester) return bester.t;
      for (const t of treffer) {
        if (t.art !== "kabel") continue;
        for (let i = 1; i < t.weg.length; i++) {
          const [x1, y1, lon1] = t.weg[i - 1];
          const [x2, y2, lon2] = t.weg[i];
          if (Math.abs(lon2 - lon1) > 180) continue;
          const dx = x2 - x1;
          const dy = y2 - y1;
          const laenge = dx * dx + dy * dy || 1;
          const s = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / laenge));
          const d = Math.hypot(x1 + s * dx - px, y1 + s * dy - py);
          if (d <= 5 && (!bester || d < bester.d)) bester = { d, t };
        }
      }
      return bester ? bester.t : null;
    }

    function groesseSetzen() {
      if (!leinwand.isConnected) {
        beobachter.disconnect();
        return;
      }
      breite = Math.max(200, Math.round(huelle.clientWidth));
      hoehe = Math.max(220, Math.round(breite * stand.hoch));
      const dichte = window.devicePixelRatio || 1;
      leinwand.width = breite * dichte;
      leinwand.height = hoehe * dichte;
      leinwand.style.height = hoehe + "px";
      sichtBegrenzen();
      zeichnen();
    }

    function vergroessern(faktor, px, py) {
      const vorher = masse();
      const wx = sicht.mx + ((px === undefined ? breite / 2 : px) - breite / 2) / vorher;
      const wy = sicht.my - ((py === undefined ? hoehe / 2 : py) - hoehe / 2) / vorher;
      sicht.zoom *= faktor;
      sichtBegrenzen();
      sicht.mx = wx - ((px === undefined ? breite / 2 : px) - breite / 2) / masse();
      sicht.my = wy + ((py === undefined ? hoehe / 2 : py) - hoehe / 2) / masse();
      sichtBegrenzen();
      zeichnen();
    }

    for (const [text, name, tun] of [["+", "karte.vergroessern", () => vergroessern(1.6)], ["−", "karte.verkleinern", () => vergroessern(1 / 1.6)], ["◻", "karte.ganz", () => { sicht.zoom = 1; sicht.mx = 0; sicht.my = 0; zeichnen(); }]]) {
      const knopf = el("button", "", text);
      knopf.type = "button";
      knopf.title = T(name);
      knopf.setAttribute("aria-label", T(name));
      knopf.addEventListener("click", tun);
      knoepfe.append(knopf);
    }

    // Ziehen verschiebt die Karte; ein Klick ohne Ziehen wählt aus.
    let zug = null;
    leinwand.addEventListener("pointerdown", e => {
      zug = { x: e.clientX, y: e.clientY, mx: sicht.mx, my: sicht.my, bewegt: false };
      leinwand.setPointerCapture(e.pointerId);
    });
    leinwand.addEventListener("pointermove", e => {
      const rand = leinwand.getBoundingClientRect();
      if (zug) {
        const dx = e.clientX - zug.x;
        const dy = e.clientY - zug.y;
        if (Math.abs(dx) + Math.abs(dy) > 4) zug.bewegt = true;
        if (zug.bewegt && sicht.zoom > 1) {
          sicht.mx = zug.mx - dx / masse();
          sicht.my = zug.my + dy / masse();
          sichtBegrenzen();
          zeichnen();
        }
        return;
      }
      const t = finden(e.clientX - rand.left, e.clientY - rand.top);
      leinwand.style.cursor = t && stand.beiWahl ? "pointer" : sicht.zoom > 1 ? "grab" : "default";
      if (!t) {
        tipp.hidden = true;
        return;
      }
      const art = el("span", "", (t.art === "ort" ? T("karte.ort") : t.art === "knoten" ? T("karte.knoten") : T("karte.kabel")) + " · ");
      const name = el("b", "", t.name);
      name.lang = "en";
      tipp.replaceChildren(...(t.art === "marke" ? [name] : [art, name]));
      tipp.hidden = false;
      tipp.style.left = Math.min(e.clientX - rand.left + 12, breite - 190) + "px";
      tipp.style.top = e.clientY - rand.top + 14 + "px";
    });
    leinwand.addEventListener("pointerup", e => {
      const rand = leinwand.getBoundingClientRect();
      const warZug = zug && zug.bewegt;
      zug = null;
      if (warZug || !stand.beiWahl) return;
      const t = finden(e.clientX - rand.left, e.clientY - rand.top);
      if (t) stand.beiWahl(t.art, t.id);
    });
    leinwand.addEventListener("pointerleave", () => {
      tipp.hidden = true;
    });
    leinwand.addEventListener("dblclick", e => {
      const rand = leinwand.getBoundingClientRect();
      vergroessern(1.8, e.clientX - rand.left, e.clientY - rand.top);
    });
    leinwand.addEventListener("keydown", e => {
      const schritt = 60 / masse();
      const tasten = { ArrowLeft: [-schritt, 0], ArrowRight: [schritt, 0], ArrowUp: [0, schritt], ArrowDown: [0, -schritt] };
      if (tasten[e.key]) {
        sicht.mx += tasten[e.key][0];
        sicht.my += tasten[e.key][1];
        sichtBegrenzen();
        zeichnen();
        e.preventDefault();
      } else if (e.key === "+" || e.key === "=") {
        vergroessern(1.6);
      } else if (e.key === "-") {
        vergroessern(1 / 1.6);
      }
    });

    const zeichenerklaerung = el("div", "karte-legende");
    const erklaeren = (klasse, text, farbwert) => {
      const eintrag = el("span", klasse);
      const zeichen = el("i");
      if (farbwert) zeichen.style.setProperty("--f", farbwert);
      eintrag.append(zeichen, document.createTextNode(text));
      zeichenerklaerung.append(eintrag);
    };
    if (stand.kabel.length) {
      erklaeren("betrieb", T("karte.betrieb"));
      if (stand.kabel.some(k => k.status === "geplant")) erklaeren("geplant", T("karte.geplant"));
      if (stand.kabel.some(k => k.status === "stillgelegt")) erklaeren("stillgelegt", T("karte.stillgelegt"));
      if (stand.orteZeigen) erklaeren("ort", T("karte.ort"));
    }
    if (stand.knoten.length) erklaeren("knoten", T("karte.knoten"));
    for (const eintrag of stand.legende) erklaeren("marke " + eintrag.form, eintrag.text, eintrag.farbe);
    if (stand.kabel.length) zeichenerklaerung.append(el("em", "", T("allg.schematisch")));
    const bedienung = el("p", "karte-bedienung", T("karte.bedienung"));
    const flaeche = el("div", "karte-flaeche");
    flaeche.append(leinwand, tipp, knoepfe);
    huelle.append(flaeche, zeichenerklaerung, bedienung);
    ziel.append(huelle);

    orte = orteAus(stand.kabel);
    const beobachter = new ResizeObserver(groesseSetzen);
    beobachter.observe(huelle);
    groesseSetzen();

    return {
      // Ändert Einstellungen und zeichnet neu.
      setzen(neu) {
        Object.assign(stand, neu);
        if (neu.kabel) orte = orteAus(stand.kabel);
        zeichnen();
      },
      // Rückt einen Punkt in die Mitte der Karte.
      zielen(lon, lat, zoom) {
        const [x, y] = projizieren(lon, lat);
        sicht.zoom = zoom || sicht.zoom;
        sicht.mx = x;
        sicht.my = y;
        sichtBegrenzen();
        zeichnen();
      },
      // Zeigt den Ausschnitt, der eine Liste von Punkten [Breite, Länge] umfasst.
      einpassen(punkte) {
        if (!punkte.length || !breite) return;
        const bild = punkte.map(([lat, lon]) => projizieren(lon, lat));
        const xs = bild.map(p => p[0]);
        const ys = bild.map(p => p[1]);
        const spanneX = Math.max(...xs) - Math.min(...xs);
        const spanneY = Math.max(...ys) - Math.min(...ys);
        // Verläuft etwas über die Datumsgrenze, bleibt die ganze Welt im Bild.
        if (spanneX > WELTBREITE * 0.6) {
          sicht.zoom = 1;
          sicht.mx = 0;
          sicht.my = 0;
        } else {
          sicht.zoom = Math.min(8, 0.8 / Math.max(spanneX / WELTBREITE, spanneY / (WELTBREITE * hoehe / breite), 0.06));
          sicht.mx = (Math.max(...xs) + Math.min(...xs)) / 2;
          sicht.my = (Math.max(...ys) + Math.min(...ys)) / 2;
        }
        sichtBegrenzen();
        zeichnen();
      }
    };
  }

  return { bauen, kabelweg, orteAus, entfernung, projizieren };
})();
