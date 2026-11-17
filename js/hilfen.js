// Hilfen für alle Seiten: Datum und Zahlen in der gewählten Sprache, Verweise, Tabellen, Quellenlisten
// und die Bedienteile der Schaubilder (Regler, Auswahl, Zahlenfelder, zweispaltiger Aufbau).
// Braucht js/rahmen.js.
window.Hilfen = (() => {
  "use strict";

  const { T, L, el } = window.Rahmen;
  const kennungen = { de: "de-DE", en: "en-GB", tr: "tr-TR" };
  const sprachkennung = () => kennungen[window.Rahmen.sprache()];
  let zaehler = 0;
  const neueKennung = () => "feld-" + (++zaehler);

  // Macht aus 2026-11-09, 2026-11 oder 2026 ein Datum in der Schreibweise der gewählten Sprache.
  function datumText(wert) {
    const text = String(wert || "");
    if (/^\d{4}$/.test(text)) return text;
    if (/^\d{4}-\d{2}$/.test(text)) {
      const [jahr, monat] = text.split("-").map(Number);
      return new Intl.DateTimeFormat(sprachkennung(), { month: "2-digit", year: "numeric" }).format(new Date(jahr, monat - 1, 1));
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return "";
    const [jahr, monat, tag] = text.split("-").map(Number);
    return new Intl.DateTimeFormat(sprachkennung(), { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(jahr, monat - 1, tag));
  }

  // Schreibt eine Zahl mit den Trennzeichen der gewählten Sprache; fehlt sie, steht ein Strich.
  function zahlText(wert, nachkommastellen) {
    if (typeof wert !== "number" || !isFinite(wert)) return "–";
    return new Intl.NumberFormat(sprachkennung(), { maximumFractionDigits: nachkommastellen || 0 }).format(wert);
  }

  function hostname(adresse) {
    try {
      return new URL(adresse).hostname.replace(/^www\./, "");
    } catch (_) {
      return adresse;
    }
  }

  // Eigennamen bleiben in jeder Sprache gleich geschrieben. Ohne diese Kennzeichnung würde die
  // türkische Großschreibung aus „Marseille“ ein „MARSEİLLE“ machen.
  function eigenname(marke, text) {
    const knoten = el(marke, "", text);
    knoten.lang = "en";
    return knoten;
  }

  // Verweis auf eine fremde Website; öffnet in einem neuen Fenster.
  function verweis(adresse, text) {
    const link = el("a", "", text);
    link.href = adresse;
    link.target = "_blank";
    link.rel = "noopener";
    return link;
  }

  // Baut eine Tabelle mit festem Raster. Kopf und Zellen sind Texte oder fertige Knoten;
  // eine Zeile ist { zellen, klasse }.
  function tabelle(klasse, koepfe, zeilen) {
    const gitter = el("table", "vergleich" + (klasse ? " " + klasse : ""));
    const kopf = el("tr");
    for (const inhalt of koepfe) kopf.append(typeof inhalt === "string" ? el("th", "", inhalt) : inhalt);
    gitter.append(kopf);
    for (const zeile of zeilen) {
      const reihe = el("tr", zeile.klasse || "");
      for (const inhalt of zeile.zellen) {
        const zelle = el("td");
        zelle.append(inhalt);
        reihe.append(zelle);
      }
      gitter.append(reihe);
    }
    const huelle = el("div", "tabellenhuelle");
    huelle.append(gitter);
    return huelle;
  }

  // Baut die Liste der Quellen. Eine Quelle ist { name, url } und wahlweise { datum, art }.
  function quellenliste(quellen) {
    const liste = el("ul", "quellenliste");
    for (const quelle of quellen) {
      const punkt = el("li");
      const link = verweis(quelle.url, quelle.name);
      link.lang = "en";
      punkt.append(link, el("span", "", " · " + hostname(quelle.url) + (quelle.datum ? " · " + datumText(quelle.datum) : "")));
      liste.append(punkt);
    }
    return liste;
  }

  // Überschrift mit Text darunter, für die Erklärungen in den Schaubildern.
  function erklaerung(titel, text) {
    const block = el("div", "erklaerung");
    block.append(el("h3", "", titel), el("p", "", text));
    return block;
  }

  // Der Pflichtabschnitt jedes Schaubilds: was es vereinfacht.
  function grenze(text) {
    const block = el("div", "erklaerung grenze");
    block.append(el("h3", "", T("allg.grenze")), el("p", "", text));
    return block;
  }

  // Zwei Spalten: links bedienen und erklären, rechts das Ergebnis.
  function zwei(links, rechts) {
    const huelle = el("div", "zwei");
    const linkeSpalte = el("div", "spalte");
    const rechteSpalte = el("div", "spalte");
    linkeSpalte.append(...links);
    rechteSpalte.append(...rechts);
    huelle.append(linkeSpalte, rechteSpalte);
    return huelle;
  }

  // Raster aus Kennzahlen. Ein Eintrag ist { wert, name } und wahlweise { klasse }.
  function zahlen(eintraege) {
    const raster = el("div", "zahlen");
    for (const eintrag of eintraege) {
      const feld = el("div", eintrag.klasse || "");
      feld.append(el("b", "", eintrag.wert), el("span", "", eintrag.name));
      raster.append(feld);
    }
    return raster;
  }

  // Schieberegler mit Beschriftung und Wertanzeige. wertText(wert) liefert die Anzeige rechts;
  // beiAenderung(wert) wird bei jeder Bewegung aufgerufen. Liefert { knoten, setzen(wert) }.
  function regler(beschriftung, kleinster, groesster, schritt, wert, wertText, beiAenderung) {
    const kennung = neueKennung();
    const huelle = el("div", "regler");
    const kopf = el("div", "regler-kopf");
    const name = el("label", "", beschriftung);
    name.htmlFor = kennung;
    const anzeige = el("output", "", wertText(wert));
    anzeige.htmlFor = kennung;
    kopf.append(name, anzeige);
    const eingabe = el("input");
    eingabe.type = "range";
    eingabe.id = kennung;
    eingabe.min = kleinster;
    eingabe.max = groesster;
    eingabe.step = schritt;
    eingabe.value = wert;
    eingabe.addEventListener("input", () => {
      const neu = Number(eingabe.value);
      anzeige.textContent = wertText(neu);
      beiAenderung(neu);
    });
    huelle.append(kopf, eingabe);
    return {
      knoten: huelle,
      setzen(neu) {
        eingabe.value = neu;
        anzeige.textContent = wertText(neu);
      }
    };
  }

  // Auswahlfeld mit Beschriftung. eintraege ist eine Liste aus { wert, text }.
  // eigennamen = true kennzeichnet die Liste als Eigennamen (türkische Großschreibung).
  function auswahl(beschriftung, eintraege, wert, beiAenderung, eigennamen) {
    const kennung = neueKennung();
    const huelle = el("div", "eingabe");
    const name = el("label", "", beschriftung);
    name.htmlFor = kennung;
    const liste = el("select");
    liste.id = kennung;
    if (eigennamen) liste.lang = "en";
    for (const eintrag of eintraege) {
      const punkt = el("option", "", eintrag.text);
      punkt.value = eintrag.wert;
      liste.append(punkt);
    }
    liste.value = wert;
    liste.addEventListener("change", () => beiAenderung(liste.value));
    huelle.append(name, liste);
    return huelle;
  }

  // Knopfreihe, bei der genau ein Knopf gewählt ist. eintraege ist eine Liste aus { wert, text }.
  function umschalter(beschriftung, eintraege, wert, beiAenderung) {
    const gruppe = el("div", "umschalter");
    gruppe.setAttribute("role", "group");
    gruppe.setAttribute("aria-label", beschriftung);
    for (const eintrag of eintraege) {
      const knopf = el("button", "", eintrag.text);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", String(eintrag.wert === wert));
      knopf.addEventListener("click", () => {
        for (const anderer of gruppe.children) anderer.setAttribute("aria-pressed", String(anderer === knopf));
        beiAenderung(eintrag.wert);
      });
      gruppe.append(knopf);
    }
    return gruppe;
  }

  // Waagerechter Balken mit Namen und Wert. anteil liegt zwischen 0 und 1.
  function balken(name, wertText, anteil, farbe) {
    const zeile = el("div", "balken");
    const fuellung = el("i");
    fuellung.style.setProperty("--w", Math.max(0, Math.min(1, anteil)) * 100 + "%");
    if (farbe) fuellung.style.setProperty("--f", farbe);
    const spur = el("span", "spur");
    spur.append(fuellung);
    zeile.append(el("span", "name", name), spur, el("b", "", wertText));
    return zeile;
  }

  // Kurzer Vermerk, dass etwas genähert oder nur veranschaulicht ist.
  function vermerk(text) {
    return el("p", "vermerk", text);
  }

  // Ländername in der gewählten Sprache; kennt der Browser die Kennung nicht, bleibt sie stehen.
  function landName(kennung) {
    try {
      return new Intl.DisplayNames([sprachkennung()], { type: "region" }).of(kennung) || kennung;
    } catch (_) {
      return kennung;
    }
  }

  // Auswahl innerhalb eines Bausteins, wie sie in der Adresse steht (#karte=dunant liefert „dunant“).
  function adressWahl(baustein) {
    const teile = decodeURIComponent(window.location.hash.slice(1)).split("=");
    return teile[0] === baustein && teile[1] ? teile[1] : "";
  }

  // Schreibt Baustein und Auswahl in die Adresse, ohne die Seite neu zu laden.
  function adresseSetzen(baustein, wahl) {
    try {
      window.history.replaceState(null, "", "#" + baustein + (wahl ? "=" + encodeURIComponent(wahl) : ""));
    } catch (_) {
      return;
    }
  }

  // Vergleich ohne Rücksicht auf Groß- und Kleinschreibung, passend zur gewählten Sprache.
  function klein(text) {
    return String(text).toLocaleLowerCase(sprachkennung());
  }

  return { landName, adressWahl, adresseSetzen, klein, sprachkennung, datumText, zahlText, hostname, eigenname, verweis, tabelle, quellenliste, erklaerung, grenze, zwei, zahlen, regler, auswahl, umschalter, balken, vermerk };
})();
