// Engstellen: Meerengen und Korridore, durch die besonders viele Seekabel führen. Von Hand gepflegt.
// Die Zahlen stammen aus den genannten Berichten; es sind Angaben Dritter, teils Schätzungen.
window.NETZ_ENGSTELLEN_STAND = { geprueftAm: "2026-11-17" };
window.NETZ_ENGSTELLEN = [
  {
    id: "bab-al-mandab",
    name: { de: "Bab al-Mandab", en: "Bab al-Mandab", tr: "Babülmendep" },
    lat: 12.6, lon: 43.3,
    angabe: { de: "mindestens 17 Kabel", en: "at least 17 cables", tr: "en az 17 kablo" },
    text: {
      de: "Die Meerenge zwischen dem Roten Meer und dem Golf von Aden. Laut dem Bericht des Beratungsgremiums von ITU und ICPC führen hier mindestens 17 Kabel durch, die geschätzt 17 bis 20 Prozent des weltweiten Internetverkehrs tragen. APNIC nennt 16 Kabel.",
      en: "The strait between the Red Sea and the Gulf of Aden. According to the report of the ITU and ICPC advisory body at least 17 cables pass here, carrying an estimated 17 to 20 percent of global internet traffic. APNIC counts 16 cables.",
      tr: "Kızıldeniz ile Aden Körfezi arasındaki boğaz. ITU ve ICPC danışma kurulunun raporuna göre buradan en az 17 kablo geçer ve bunlar küresel internet trafiğinin tahminen yüzde 17 ila 20'sini taşır. APNIC 16 kablo sayar."
    },
    quellen: ["itu-icpc", "apnic"]
  },
  {
    id: "suez",
    name: { de: "Korridor von Suez", en: "Suez corridor", tr: "Süveyş koridoru" },
    lat: 30.5, lon: 32.4,
    angabe: { de: "geschätzt 90 % der Verbindungen Europa–Asien", en: "an estimated 90 % of Europe–Asia links", tr: "Avrupa–Asya bağlantılarının tahminen % 90'ı" },
    text: {
      de: "Zwischen Mittelmeer und Rotem Meer queren die Kabel Ägypten. Laut dem Bericht von ITU und ICPC laufen geschätzt 90 Prozent der Verbindungen zwischen Europa und Asien durch diesen Korridor.",
      en: "Between the Mediterranean and the Red Sea the cables cross Egypt. According to the ITU and ICPC report an estimated 90 percent of the connections between Europe and Asia run through this corridor.",
      tr: "Akdeniz ile Kızıldeniz arasında kablolar Mısır'dan geçer. ITU ve ICPC raporuna göre Avrupa ile Asya arasındaki bağlantıların tahminen yüzde 90'ı bu koridordan geçer."
    },
    quellen: ["itu-icpc"]
  },
  {
    id: "luzon",
    name: { de: "Straße von Luzon", en: "Luzon Strait", tr: "Luzon Boğazı" },
    lat: 20.5, lon: 121.0,
    angabe: { de: "18 Kabel", en: "18 cables", tr: "18 kablo" },
    text: {
      de: "Die Meerenge zwischen Taiwan und den Philippinen verbindet das Südchinesische Meer mit dem Pazifik. APNIC nennt nach Daten von TeleGeography 18 Kabel. Das Seebeben vom 26.12.2006 beschädigte hier viele Kabel zugleich.",
      en: "The strait between Taiwan and the Philippines connects the South China Sea with the Pacific. APNIC, citing TeleGeography data, counts 18 cables. The submarine earthquake of 26 December 2006 damaged many cables here at once.",
      tr: "Tayvan ile Filipinler arasındaki boğaz, Güney Çin Denizi'ni Pasifik'e bağlar. APNIC, TeleGeography verilerine dayanarak 18 kablo sayar. 26.12.2006 tarihli deniz depremi burada aynı anda birçok kabloya zarar verdi."
    },
    quellen: ["apnic"]
  },
  {
    id: "singapur",
    name: { de: "Straße von Singapur", en: "Singapore Strait", tr: "Singapur Boğazı" },
    lat: 1.2, lon: 103.9,
    angabe: { de: "35 Kabelsysteme", en: "35 cable systems", tr: "35 kablo sistemi" },
    text: {
      de: "Die enge Durchfahrt südlich von Singapur gehört zu den meistbefahrenen Schifffahrtswegen der Welt. APNIC nennt nach Daten von TeleGeography 35 Kabelsysteme.",
      en: "The narrow passage south of Singapore is one of the busiest shipping lanes in the world. APNIC, citing TeleGeography data, counts 35 cable systems.",
      tr: "Singapur'un güneyindeki dar geçit dünyanın en yoğun deniz yollarından biridir. APNIC, TeleGeography verilerine dayanarak 35 kablo sistemi sayar."
    },
    quellen: ["apnic"]
  }
];
window.NETZ_ENGSTELLEN_QUELLEN = {
  "itu-icpc": { name: "ITU / ICPC International Advisory Body for Submarine Cable Resilience: Publication 2026", url: "https://www.itu.int/digital-resilience/submarine-cables/wp-content/uploads/sites/2/2026/07/IAB-Publication-2026.pdf", datum: "2026-07-10" },
  apnic: { name: "APNIC Blog: Submarine cable resilience", url: "https://blog.apnic.net/2026/10/14/submarine-cable-resilience/", datum: "2026-10-14" }
};
