// Prüft Gerüst und Daten der Website. Aufruf im Projektordner: node werkzeuge/pruefen.js
// Geprüft wird: drei Sprachen überall, Seiten passend zu js/bereiche.js, eingebundene Dateien vorhanden,
// gleiche Versionszähler auf allen Seiten, benutzte Textschlüssel vorhanden, Pflichtfelder der Daten.
"use strict";
const fs = require("fs");
const path = require("path");
const wurzel = path.join(__dirname, "..");
const lesen = datei => fs.readFileSync(path.join(wurzel, datei), "utf8");
const gibt = datei => fs.existsSync(path.join(wurzel, datei));
const fehler = [];
const hinweise = [];
const melden = text => fehler.push(text);
const sprachen = ["de", "en", "tr"];

// Führt eine Datei des Browsers in einem nachgestellten Fenster aus und liefert dieses Fenster.
const fenster = {};
fenster.window = fenster;
function laden(datei) {
  try {
    new Function("window", lesen(datei))(fenster);
  } catch (e) {
    melden(datei + ": lässt sich nicht ausführen (" + e.message + ")");
  }
}

function dreisprachig(wert, ort) {
  if (!wert || typeof wert !== "object") return melden(ort + ": fehlt oder ist kein Feld mit drei Sprachen");
  for (const s of sprachen) if (typeof wert[s] !== "string" || !wert[s].trim()) melden(ort + ": Sprache " + s + " fehlt");
}
const istDatum = wert => /^\d{4}(-\d{2}(-\d{2})?)?$/.test(String(wert || ""));
const istAdresse = wert => /^https?:\/\/[^\s]+$/.test(String(wert || ""));
function quellenPruefen(liste, ort) {
  if (!Array.isArray(liste) || !liste.length) return melden(ort + ": keine Quelle");
  liste.forEach((q, n) => {
    if (!q || typeof q.name !== "string" || !q.name.trim()) melden(ort + ": Quelle " + (n + 1) + " ohne Namen");
    if (!q || !istAdresse(q.url)) melden(ort + ": Quelle " + (n + 1) + " ohne gültige Adresse");
  });
}
function ortPruefen(o, ort) {
  if (typeof o.lat !== "number" || o.lat < -90 || o.lat > 90) melden(ort + ": Breite ungültig");
  if (typeof o.lon !== "number" || o.lon < -180 || o.lon > 180) melden(ort + ": Länge ungültig");
}
// Ein Feld darf nur leer sein, wenn es unter „offen“ steht, und umgekehrt.
function offenPruefen(eintrag, felder, ort) {
  const offen = eintrag.offen || [];
  if (!Array.isArray(eintrag.offen)) melden(ort + ": Feld offen fehlt");
  for (const feld of felder) {
    const leer = eintrag[feld] === null || eintrag[feld] === undefined;
    if (leer && !offen.includes(feld)) melden(ort + ": " + feld + " ist leer, steht aber nicht unter offen");
    if (!leer && offen.includes(feld)) melden(ort + ": " + feld + " hat einen Wert, steht aber unter offen");
  }
}
function einmalig(liste, ort) {
  const gesehen = new Set();
  for (const e of liste) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(String(e.id || ""))) melden(ort + ": ungültige Kennung " + e.id);
    if (gesehen.has(e.id)) melden(ort + ": Kennung doppelt " + e.id);
    gesehen.add(e.id);
  }
}

// ---------- 1. Texte ----------
laden("js/texte.js");
const textdateien = fs.readdirSync(path.join(wurzel, "js")).filter(n => /^texte-.+\.js$/.test(n)).map(n => "js/" + n);
textdateien.forEach(laden);
const texte = fenster.NETZ_TEXTE || {};
for (const [schluessel, wert] of Object.entries(texte)) dreisprachig(wert, "Text " + schluessel);

// ---------- 2. Bereiche und Seiten ----------
laden("js/bereiche.js");
const bereiche = fenster.NETZ_BEREICHE || [];
const nebenseiten = fenster.NETZ_NEBENSEITEN || [];
const alleSeiten = [...bereiche, ...nebenseiten];
let bausteine = 0;
let fertig = 0;
for (const b of alleSeiten) {
  const ort = "Bereich " + b.id;
  for (const feld of ["name", "titel", "akzent", "text"]) dreisprachig(b[feld], ort + " " + feld);
  if (!gibt(b.datei)) {
    melden(ort + ": Seite " + b.datei + " fehlt");
    continue;
  }
  const seite = lesen(b.datei);
  if (!seite.includes('data-bereich="' + b.id + '"')) melden(b.datei + ": data-bereich passt nicht zu " + b.id);
  if (!seite.includes('id="' + b.id + '"')) melden(b.datei + ": Platz mit der Kennung " + b.id + " fehlt");
  for (const platz of ["leiste", "kopf", "inhalt", "seitentitel", "seitentext", "fuss"]) {
    if (!seite.includes('id="' + platz + '"')) melden(b.datei + ": Platz " + platz + " fehlt");
  }
  for (const baustein of b.bausteine) {
    bausteine++;
    dreisprachig(baustein.name, ort + " Baustein name");
    dreisprachig(baustein.text, ort + " Baustein text");
    if (!["geplant", "fertig"].includes(baustein.stand)) melden(ort + ": Baustein mit unbekanntem Stand");
    if (baustein.stand === "fertig") fertig++;
    if (baustein.id && baustein.stand === "fertig") {
      const skript = "js/" + b.id + "-" + baustein.id + ".js";
      if (!gibt(skript)) melden(ort + ": Baustein " + baustein.id + " ist fertig, aber " + skript + " fehlt");
      else if (!seite.includes(skript)) melden(b.datei + ": bindet " + skript + " nicht ein");
    }
  }
}

// ---------- 3. Eingebundene Dateien und Versionszähler ----------
const zaehler = new Map();
const seitenversionen = new Set();
for (const b of alleSeiten) {
  if (!gibt(b.datei)) continue;
  const seite = lesen(b.datei);
  const version = (seite.match(/name="site-version" content="([^"]+)"/) || [])[1];
  if (!version) melden(b.datei + ": site-version fehlt");
  seitenversionen.add(version);
  if (!/<meta name="description" content="[^"]{20,}"/.test(seite)) melden(b.datei + ": Beschreibung fehlt");
  for (const treffer of seite.matchAll(/(?:src|href)="((?:css|js|daten|vendor)\/[^"?]+)(?:\?v=(\d+))?"/g)) {
    const [, datei, v] = treffer;
    if (!gibt(datei)) melden(b.datei + ": eingebundene Datei fehlt: " + datei);
    if (!v) melden(b.datei + ": " + datei + " ohne Versionszähler");
    if (!zaehler.has(datei)) zaehler.set(datei, new Map());
    zaehler.get(datei).set(b.datei, v);
  }
  if (/https?:\/\/[^"']+\.(?:js|css)["']/.test(seite)) melden(b.datei + ": bindet ein Skript oder eine Gestaltung von einem fremden Server ein");
}
if (seitenversionen.size > 1) melden("site-version ist nicht auf allen Seiten gleich: " + [...seitenversionen].join(", "));
for (const [datei, proSeite] of zaehler) {
  const werte = new Set(proSeite.values());
  if (werte.size > 1) melden(datei + ": Versionszähler unterschiedlich (" + [...proSeite].map(([s, v]) => s + " v" + v).join(", ") + ")");
}

// ---------- 4. Benutzte Textschlüssel ----------
const skripte = fs.readdirSync(path.join(wurzel, "js")).filter(n => n.endsWith(".js") && !n.startsWith("texte"));
for (const name of skripte) {
  const inhalt = lesen("js/" + name);
  for (const treffer of inhalt.matchAll(/\bT\("([^"]+)"\)/g)) {
    if (!texte[treffer[1]]) melden("js/" + name + ": Textschlüssel fehlt: " + treffer[1]);
  }
  if (/\.innerHTML\s*=/.test(inhalt)) melden("js/" + name + ": setzt innerHTML; Texte nur über textContent oder el() einsetzen");
}

// ---------- 5. Daten ----------
const umfang = {};
function daten(datei, name) {
  if (!gibt(datei)) {
    hinweise.push("Daten fehlen noch: " + datei);
    return null;
  }
  laden(datei);
  if (fenster[name] === undefined) melden(datei + ": " + name + " fehlt");
  return fenster[name] === undefined ? null : fenster[name];
}

const seewege = daten("daten/seewege.js", "NETZ_SEEWEGE");
const seepunkte = seewege ? seewege.punkte : {};
if (seewege) {
  for (const [a, b] of seewege.wege) if (!seepunkte[a] || !seepunkte[b]) melden("Seewege: Weg mit unbekanntem Punkt " + a + " – " + b);
}

const kabel = daten("daten/kabel.js", "NETZ_KABEL");
if (kabel) {
  umfang.Kabel = kabel.length;
  einmalig(kabel, "Kabel");
  for (const k of kabel) {
    const ort = "Kabel " + k.id;
    if (!k.name) melden(ort + ": Name fehlt");
    if (!["betrieb", "geplant", "stillgelegt"].includes(k.status)) melden(ort + ": Status unbekannt");
    if (k.inBetrieb !== null && !istDatum(k.inBetrieb)) melden(ort + ": inBetrieb ist kein Datum");
    if (k.ausserBetrieb !== null && !istDatum(k.ausserBetrieb)) melden(ort + ": ausserBetrieb ist kein Datum");
    for (const feld of ["laengeKm", "faserpaare", "kapazitaetTbit"]) {
      if (k[feld] !== null && !(typeof k[feld] === "number" && k[feld] > 0)) melden(ort + ": " + feld + " ist keine Zahl");
    }
    offenPruefen(k, ["inBetrieb", "laengeKm"], ort);
    if (!Array.isArray(k.eigner)) melden(ort + ": eigner fehlt");
    if (!Array.isArray(k.orte) || k.orte.length < 2) melden(ort + ": weniger als zwei Anlandeorte");
    (k.orte || []).forEach((o, n) => {
      if (!o.name) melden(ort + ": Ort " + (n + 1) + " ohne Namen");
      if (!/^[A-Z]{2}$/.test(o.land || "")) melden(ort + ": Ort " + (n + 1) + " ohne Landeskennung");
      ortPruefen(o, ort + " Ort " + (n + 1));
      if (o.see && !seepunkte[o.see]) melden(ort + ": Ort " + (n + 1) + " nennt einen unbekannten Seepunkt " + o.see);
    });
    dreisprachig(k.text, ort + " text");
    quellenPruefen(k.quellen, ort);
    if (!istDatum(k.geprueftAm)) melden(ort + ": geprueftAm fehlt");
  }
}

const knoten = daten("daten/knoten.js", "NETZ_KNOTEN");
if (knoten) {
  umfang.Knoten = knoten.length;
  einmalig(knoten, "Knoten");
  for (const k of knoten) {
    const ort = "Knoten " + k.id;
    if (!k.name || !k.betreiber) melden(ort + ": Name oder Betreiber fehlt");
    dreisprachig(k.stadt, ort + " stadt");
    if (!/^[A-Z]{2}$/.test(k.land || "")) melden(ort + ": Landeskennung fehlt");
    ortPruefen(k, ort);
    for (const feld of ["netze", "spitzeGbit"]) if (k[feld] !== null && !(typeof k[feld] === "number" && k[feld] > 0)) melden(ort + ": " + feld + " ist keine Zahl");
    if (k.netzeStand !== null && !istDatum(k.netzeStand)) melden(ort + ": netzeStand ist kein Datum");
    if (k.spitzeGbit !== null && !istDatum(k.spitzeStand)) melden(ort + ": spitzeGbit ohne Stand");
    dreisprachig(k.text, ort + " text");
    quellenPruefen(k.quellen, ort);
    if (!istDatum(k.geprueftAm)) melden(ort + ": geprueftAm fehlt");
  }
}

const root = daten("daten/rootserver.js", "NETZ_ROOT");
if (root) {
  umfang["Root-Server"] = (root.server || []).length;
  if (!istDatum(root.stand)) melden("Root-Server: Stand fehlt");
  if ((root.server || []).length !== 13) melden("Root-Server: es müssen 13 Einträge sein");
  quellenPruefen(root.quellen, "Root-Server");
  for (const s of root.server || []) {
    if (!/^[A-M]$/.test(s.buchstabe || "") || !s.betreiber || !s.name) melden("Root-Server " + s.buchstabe + ": Angaben unvollständig");
    if (!(typeof s.instanzen === "number" && s.instanzen > 0)) melden("Root-Server " + s.buchstabe + ": Zahl der Instanzen fehlt");
  }
}

const vorfaelle = daten("daten/vorfaelle.js", "NETZ_VORFAELLE");
if (vorfaelle) {
  umfang["Störfälle"] = vorfaelle.length;
  einmalig(vorfaelle, "Störfall");
  for (const v of vorfaelle) {
    const ort = "Störfall " + v.id;
    if (!istDatum(v.datum)) melden(ort + ": Datum fehlt");
    if (!["kabel", "routing"].includes(v.art)) melden(ort + ": Art unbekannt");
    if (!["beben", "vulkan", "hangrutsch", "anker", "fischerei", "fehlkonfiguration", "kapern", "unklar"].includes(v.ursache)) melden(ort + ": Ursache unbekannt");
    if (typeof v.gesichert !== "boolean") melden(ort + ": gesichert fehlt");
    dreisprachig(v.titel, ort + " titel");
    dreisprachig(v.text, ort + " text");
    if (v.ort) {
      dreisprachig(v.ort.name, ort + " ort");
      ortPruefen(v.ort, ort);
    }
    quellenPruefen(v.quellen, ort);
    for (const q of v.quellen || []) if (!["primaer", "analyse", "presse"].includes(q.art)) melden(ort + ": Quelle ohne Art");
    if (!v.gesichert && !(v.offen || []).includes("ursache")) melden(ort + ": Ursache nicht gesichert, steht aber nicht unter offen");
    if (!istDatum(v.geprueftAm)) melden(ort + ": geprueftAm fehlt");
  }
}

const glossar = daten("daten/glossar.js", "NETZ_GLOSSAR");
if (glossar) {
  umfang.Begriffe = glossar.length;
  einmalig(glossar, "Glossar");
  for (const g of glossar) {
    dreisprachig(g.begriff, "Glossar " + g.id + " begriff");
    dreisprachig(g.text, "Glossar " + g.id + " text");
    for (const verweis of g.siehe || []) if (!glossar.some(e => e.id === verweis)) melden("Glossar " + g.id + ": siehe zeigt auf unbekannten Begriff " + verweis);
  }
}

const kennzahlen = daten("daten/kennzahlen.js", "NETZ_KENNZAHLEN");
if (kennzahlen) {
  umfang.Kennzahlen = kennzahlen.length;
  einmalig(kennzahlen, "Kennzahl");
  for (const k of kennzahlen) {
    const ort = "Kennzahl " + k.id;
    dreisprachig(k.name, ort + " name");
    dreisprachig(k.wert, ort + " wert");
    if (!istDatum(k.stand)) melden(ort + ": Stand fehlt");
    quellenPruefen([k.quelle], ort);
    if (!istDatum(k.geprueftAm)) melden(ort + ": geprueftAm fehlt");
  }
}

const engstellen = daten("daten/engstellen.js", "NETZ_ENGSTELLEN");
if (engstellen) {
  umfang.Engstellen = engstellen.length;
  einmalig(engstellen, "Engstelle");
  for (const e of engstellen) {
    for (const feld of ["name", "angabe", "text"]) dreisprachig(e[feld], "Engstelle " + e.id + " " + feld);
    ortPruefen(e, "Engstelle " + e.id);
    for (const q of e.quellen || []) if (!(fenster.NETZ_ENGSTELLEN_QUELLEN || {})[q]) melden("Engstelle " + e.id + ": unbekannte Quelle " + q);
  }
  quellenPruefen(Object.values(fenster.NETZ_ENGSTELLEN_QUELLEN || {}), "Engstellen");
}

const datenarten = daten("daten/methodik.js", "NETZ_DATENARTEN");
if (datenarten) {
  for (const d of datenarten) for (const feld of ["name", "herkunft", "pflege"]) dreisprachig(d[feld], "Datenart " + d.id + " " + feld);
  for (const g of fenster.NETZ_GRENZEN || []) dreisprachig(g, "Grenze");
  for (const e of fenster.NETZ_PFLEGE || []) for (const feld of ["abstand", "was", "wie"]) dreisprachig(e[feld], "Pflegeplan " + feld);
}

const datenschutz = daten("daten/datenschutz.js", "NETZ_DATENSCHUTZ");
if (datenschutz) {
  dreisprachig(datenschutz.kurz, "Datenschutz kurz");
  for (const a of datenschutz.abschnitte || []) {
    dreisprachig(a.titel, "Datenschutz Abschnitt");
    for (const teil of a.teile || []) {
      if (teil.text) dreisprachig(teil.text, "Datenschutz Absatz");
      if (teil.art === "liste") dreisprachig(teil.titel, "Datenschutz Listentitel");
      for (const eintrag of teil.liste || []) if (typeof eintrag.name !== "string") dreisprachig(eintrag.name, "Datenschutz Verweis");
      for (const punkt of teil.punkte || []) dreisprachig(punkt, "Datenschutz Punkt");
    }
  }
}

// ---------- Ergebnis ----------
const teile = [bereiche.length + " Bereiche", nebenseiten.length + " Nebenseite", fertig + " von " + bausteine + " Bausteinen fertig", Object.keys(texte).length + " Texte der Oberfläche in " + (textdateien.length + 1) + " Dateien"];
for (const [name, zahl] of Object.entries(umfang)) teile.push(zahl + " " + name);
console.log("Geprüft: " + teile.join(", ") + ", drei Sprachen.");
for (const h of hinweise) console.log("Hinweis: " + h);
if (fehler.length) {
  console.log(fehler.length + " Fehler:");
  for (const f of fehler) console.log("  " + f);
  process.exit(1);
}
console.log("Keine Fehler.");
