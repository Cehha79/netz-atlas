// Kennzahlen der Startseite: wenige Zahlen zum weltweiten Netz, jede mit Quelle und Stand. Von Hand gepflegt.
// wert steht in drei Sprachen, weil Zahlwörter und Trennzeichen sich unterscheiden.
// hinweis ist wahlweise und sagt, wenn eine Zahl geschätzt oder anders abgegrenzt ist.
window.NETZ_KENNZAHLEN = [
  {
    id: "kabel-weltweit",
    name: { de: "Seekabel weltweit, aktiv und geplant", en: "Submarine cables worldwide, active and planned", tr: "Dünyada denizaltı kablosu, etkin ve planlanan" },
    wert: { de: "über 600", en: "over 600", tr: "600'den fazla" },
    stand: "2026",
    quelle: { name: "TeleGeography: Submarine Cable Frequently Asked Questions", url: "https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions" },
    geprueftAm: "2026-11-17"
  },
  {
    id: "kabellaenge",
    name: { de: "Kabellänge in Betrieb", en: "Cable length in service", tr: "Hizmetteki kablo uzunluğu" },
    wert: { de: "über 1,5 Mio. km", en: "over 1.5 million km", tr: "1,5 milyon km'den fazla" },
    stand: "2026",
    quelle: { name: "TeleGeography: Submarine Cable Frequently Asked Questions", url: "https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions" },
    geprueftAm: "2026-11-17",
    hinweis: { de: "Schätzung der Quelle", en: "Estimate by the source", tr: "Kaynağın tahmini" }
  },
  {
    id: "kabelfehler",
    name: { de: "Kabelfehler je Jahr weltweit", en: "Cable faults per year worldwide", tr: "Dünyada yılda kablo arızası" },
    wert: { de: "150 bis 200", en: "150 to 200", tr: "150 ila 200" },
    stand: "2026-07",
    quelle: { name: "ITU / ICPC International Advisory Body for Submarine Cable Resilience: Publication 2026", url: "https://www.itu.int/digital-resilience/submarine-cables/wp-content/uploads/sites/2/2026/07/IAB-Publication-2026.pdf" },
    geprueftAm: "2026-11-17"
  },
  {
    id: "anteil-seekabel",
    name: { de: "Verkehr zwischen Kontinenten über Seekabel", en: "Traffic between continents via submarine cables", tr: "Kıtalar arası trafiğin denizaltı kablolarındaki payı" },
    wert: { de: "über 95 %", en: "over 95 %", tr: "% 95'ten fazla" },
    stand: "2023",
    quelle: { name: "TeleGeography: Do submarine cables account for over 99 % of intercontinental data traffic?", url: "https://resources.telegeography.com/2023-mythbusting-part-3" },
    geprueftAm: "2026-11-17",
    hinweis: { de: "Schätzung, nicht gemessen", en: "Estimate, not measured", tr: "Tahmin, ölçülmedi" }
  },
  {
    id: "laender-mit-knoten",
    name: { de: "Länder mit Internet-Knoten", en: "Countries with an internet exchange", tr: "İnternet değişim noktası olan ülke" },
    wert: { de: "162", en: "162", tr: "162" },
    stand: "2026-11-17",
    quelle: { name: "Packet Clearing House: Internet Exchange Point Growth", url: "https://www.pch.net/ixp/summary" },
    geprueftAm: "2026-11-17"
  },
  {
    id: "autonome-systeme",
    name: { de: "Netze im weltweiten Routing (autonome Systeme)", en: "Networks in global routing (autonomous systems)", tr: "Küresel yönlendirmedeki ağ (otonom sistem)" },
    wert: { de: "rund 80.000", en: "about 80,000", tr: "yaklaşık 80.000" },
    stand: "2026-11-17",
    quelle: { name: "CIDR Report: AS summary", url: "https://www.cidr-report.org/as2.0/" },
    geprueftAm: "2026-11-17"
  }
];
