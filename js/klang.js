// Klang: kurze Töne, die der Browser selbst erzeugt (Web Audio). Es gibt keine Klangdateien.
// Der Klang ist an, bis er über den Schalter in der Kopfzeile ausgeschaltet wird; die Wahl bleibt
// im Browserspeicher (Schlüssel „netzatlas-klang“). Browser lassen Ton erst nach der ersten Eingabe
// zu: Bis zum ersten Klick oder Tastendruck auf einer Seite bleibt es deshalb still.
window.Klang = (() => {
  "use strict";
  const schluessel = "netzatlas-klang";
  let kontext = null;
  let ausgang = null;

  // Ist der Browserspeicher gesperrt, gilt der Standard und die Wahl hält nur bis zum Neuladen.
  function gespeichert() {
    try {
      return localStorage.getItem(schluessel);
    } catch (_) {
      return null;
    }
  }

  function merken(wert) {
    try {
      localStorage.setItem(schluessel, wert);
    } catch (_) {
      return;
    }
  }

  let an = gespeichert() !== "aus";

  function bereit() {
    if (!kontext) {
      const Bauart = window.AudioContext || window.webkitAudioContext;
      if (!Bauart) return false;
      kontext = new Bauart();
      ausgang = kontext.createGain();
      ausgang.gain.value = 0.14;
      ausgang.connect(kontext.destination);
    }
    if (kontext.state === "suspended") kontext.resume();
    return true;
  }

  // Die erste Eingabe auf der Seite gibt den Ton frei.
  function freigeben() {
    window.removeEventListener("pointerdown", freigeben);
    window.removeEventListener("keydown", freigeben);
    if (an) bereit();
  }
  window.addEventListener("pointerdown", freigeben);
  window.addEventListener("keydown", freigeben);

  // Spielt einen Ton: Tonhöhe in Hertz, Stärke von 0 bis 1, Länge in Sekunden.
  function ton(frequenz, staerke = 0.5, laenge = 0.08) {
    if (!an || !kontext || kontext.state !== "running") return;
    const jetzt = kontext.currentTime;
    const quelle = kontext.createOscillator();
    const huelle = kontext.createGain();
    quelle.type = "square";
    quelle.frequency.setValueAtTime(frequenz, jetzt);
    huelle.gain.setValueAtTime(0.0001, jetzt);
    huelle.gain.exponentialRampToValueAtTime(Math.max(0.001, 0.6 * staerke), jetzt + 0.01);
    huelle.gain.exponentialRampToValueAtTime(0.0001, jetzt + laenge);
    quelle.connect(huelle);
    huelle.connect(ausgang);
    quelle.start(jetzt);
    quelle.stop(jetzt + laenge + 0.05);
  }

  return {
    schalten() {
      an = !an;
      if (an && !bereit()) an = false;
      merken(an ? "an" : "aus");
      return an;
    },
    istAn: () => an,
    ton,
    // Zwei Töne kurz nacheinander, als Bestätigung einer Auswahl.
    doppelton(erste = 880, zweite = 1320) {
      ton(erste, 0.45);
      setTimeout(() => ton(zweite, 0.45), 70);
    }
  };
})();
