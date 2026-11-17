// Texte des Bausteins „Austauschpunkt“ der Technikseite in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern setzt js/technik-austausch.js ein.
window.NETZ_TEXTE_DAZU({
  "aus.netz": { de: "Netz", en: "Network", tr: "Ağ" },
  "aus.anzahl": { de: "Netze an einem Ort", en: "Networks in one place", tr: "Aynı yerdeki ağ sayısı" },
  "aus.modus": { de: "Art der Verbindung", en: "Kind of connection", tr: "Bağlantı biçimi" },
  "aus.direkt": { de: "Jedes mit jedem", en: "Each with each", tr: "Herkes herkesle" },
  "aus.knoten": { de: "Über einen Knoten", en: "Via one exchange", tr: "Değişim noktasıyla" },
  "aus.von": { de: "Örtlicher Verkehr von", en: "Local traffic from", tr: "Yerel trafiğin çıktığı ağ" },
  "aus.nach": { de: "Örtlicher Verkehr nach", en: "Local traffic to", tr: "Yerel trafiğin vardığı ağ" },

  "aus.bildDirekt": {
    de: "{netze} Netze im Kreis, jedes mit jedem direkt verbunden. Zahl der Leitungen: {leitungen}. Hervorgehoben ist der Weg von {von} nach {nach}.",
    en: "{netze} networks in a circle, each directly connected with every other. Number of links: {leitungen}. The path from {von} to {nach} is highlighted.",
    tr: "Çember üzerinde {netze} ağ, her biri diğerleriyle doğrudan bağlı. Hat sayısı: {leitungen}. Vurgulanan yol: {von}, {nach}."
  },
  "aus.bildKnoten": {
    de: "{netze} Netze im Kreis, alle mit einem Knoten in der Mitte verbunden. Zahl der Leitungen: {leitungen}. Hervorgehoben ist der Weg von {von} über den Knoten nach {nach}.",
    en: "{netze} networks in a circle, all connected to one exchange in the middle. Number of links: {leitungen}. The path from {von} via the exchange to {nach} is highlighted.",
    tr: "Çember üzerinde {netze} ağ, hepsi ortadaki değişim noktasına bağlı. Hat sayısı: {leitungen}. Vurgulanan yol: {von}, değişim noktası, {nach}."
  },

  "aus.zDirekt": { de: "Leitungen ohne Knoten", en: "Links without exchange", tr: "Değişim noktası olmadan hat" },
  "aus.zKnoten": { de: "Leitungen mit Knoten", en: "Links with exchange", tr: "Değişim noktasıyla hat" },
  "aus.zGespart": { de: "Leitungen gespart", en: "Links saved", tr: "Tasarruf edilen hat" },
  "aus.zJeNetz": { de: "Leitungen je Netz", en: "Links per network", tr: "Ağ başına hat" },

  "aus.rRechnung": { de: "Rechnung", en: "Calculation", tr: "Hesap" },
  "aus.rechnung": {
    de: "ohne Knoten {n} · {m} / 2 = {direkt}, mit Knoten {n}",
    en: "without exchange {n} · {m} / 2 = {direkt}, with exchange {n}",
    tr: "değişim noktası olmadan {n} · {m} / 2 = {direkt}, değişim noktasıyla {n}"
  },
  "aus.rVergleich": { de: "Vergleich", en: "Comparison", tr: "Karşılaştırma" },
  "aus.sparMehr": {
    de: "Der Knoten spart {gespart} von {direkt} Leitungen.",
    en: "The exchange saves {gespart} of {direkt} links.",
    tr: "Değişim noktası {direkt} hattın {gespart} tanesinden tasarruf sağlar."
  },
  "aus.sparGleich": {
    de: "Bei drei Netzen sind es in beiden Fällen gleich viele Leitungen. Der Knoten spart erst ab vier Netzen.",
    en: "With three networks both cases need the same number of links. The exchange saves only from four networks on.",
    tr: "Üç ağda iki durumda da hat sayısı aynıdır. Değişim noktası ancak dört ağdan itibaren tasarruf sağlar."
  },
  "aus.sparWeniger": {
    de: "Bei zwei Netzen braucht der Knoten eine Leitung mehr als die direkte Verbindung. Er spart erst ab vier Netzen.",
    en: "With two networks the exchange needs one link more than the direct connection. It saves only from four networks on.",
    tr: "İki ağda değişim noktası, doğrudan bağlantıdan bir hat fazla gerektirir. Ancak dört ağdan itibaren tasarruf sağlar."
  },
  "aus.rWeg": { de: "Weg des Verkehrs", en: "Path of the traffic", tr: "Trafiğin yolu" },
  "aus.wegDirekt": {
    de: "{von} → {nach} über eine Leitung, die nur diese beiden Netze verbindet.",
    en: "{von} → {nach} over a link that connects only these two networks.",
    tr: "{von} → {nach}, yalnızca bu iki ağı bağlayan bir hat üzerinden."
  },
  "aus.wegKnoten": {
    de: "{von} → Knoten → {nach}. Jedes Netz nutzt seine eine Leitung für den Verkehr mit allen anderen.",
    en: "{von} → exchange → {nach}. Each network uses its single link for traffic with all the others.",
    tr: "{von} → değişim noktası → {nach}. Her ağ tek hattını diğer tüm ağlarla trafik için kullanır."
  },
  "aus.beispiel": {
    de: "Veranschaulichung: Die Netze sind Beispiele. Gezählt wird, wie viele Leitungen an einem Ort nötig sind, damit jedes Netz mit jedem anderen Verkehr tauschen kann.",
    en: "Illustration: the networks are examples. The count shows how many links are needed in one place so that every network can exchange traffic with every other.",
    tr: "Örnekleme: Ağlar örnektir. Sayılan, aynı yerdeki her ağın diğer her ağla trafik değiş tokuş edebilmesi için gereken hat sayısıdır."
  },

  "aus.e1Titel": { de: "Was ein Internet-Knoten ist", en: "What an internet exchange is", tr: "İnternet değişim noktası nedir" },
  "aus.e1Text": {
    de: "Ein Internet-Knoten (englisch Internet Exchange Point, kurz IXP) ist ein Ort, an dem sich verschiedene Netze treffen und örtlichen Verkehr über gemeinsame Vermittlungstechnik direkt austauschen. Jedes Netz braucht dafür nur eine Leitung zum Knoten. Ein Knoten ist kein Rechenzentrum: Er speichert keine Inhalte. Er ist auch kein Internetanbieter: Er verkauft keinen Zugang zum Internet, sondern verbindet nur die Netze, die sich dort anschließen.",
    en: "An internet exchange (Internet Exchange Point, IXP for short) is a place where different networks meet and exchange local traffic directly over shared switching equipment. Each network needs only one link to the exchange for this. An exchange is not a data centre: it stores no content. Nor is it an internet provider: it sells no access to the internet, it only connects the networks that join it.",
    tr: "İnternet değişim noktası (İngilizce Internet Exchange Point, kısaca IXP), farklı ağların buluştuğu ve yerel trafiği ortak anahtarlama donanımı üzerinden doğrudan değiş tokuş ettiği yerdir. Bunun için her ağa değişim noktasına giden tek bir hat yeter. Değişim noktası bir veri merkezi değildir: içerik saklamaz. Bir internet sağlayıcısı da değildir: internet erişimi satmaz, yalnızca oraya bağlanan ağları birbirine bağlar."
  },
  "aus.e2Titel": { de: "Warum örtlicher Verkehr örtlich bleiben soll", en: "Why local traffic should stay local", tr: "Yerel trafik neden yerel kalmalı" },
  "aus.e2Text": {
    de: "Ohne örtlichen Austausch kann Verkehr zwischen zwei Netzen derselben Stadt einen Umweg über ferne Orte nehmen. Ein Knoten schafft kürzere Wege und ist laut Internet Society günstiger, als örtlichen Verkehr ins Ausland zu schicken. Er hilft auch bei Ausfällen: Als am {datum} vor Westafrika vier Seekabel ausfielen, blieben laut Internet Society die Inhalte erreichbar, die über örtliche Knoten verfügbar waren.",
    en: "Without local exchange, traffic between two networks in the same city can take a detour through distant places. An exchange creates shorter routes and, according to the Internet Society, is more affordable than sending local traffic abroad. It also helps during outages: when four submarine cables failed off West Africa on {datum}, content that was available via local exchanges remained reachable, according to the Internet Society.",
    tr: "Yerel değişim olmadan, aynı şehirdeki iki ağ arasındaki trafik uzak yerler üzerinden dolaşabilir. Değişim noktası daha kısa yollar sağlar ve Internet Society'ye göre yerel trafiği yurt dışına göndermekten daha ucuzdur. Kesintilerde de yardımcı olur: {datum} tarihinde Batı Afrika açıklarında dört denizaltı kablosu arızalandığında, Internet Society'ye göre yerel değişim noktaları üzerinden sunulan içerik erişilebilir kaldı."
  },
  "aus.e3Titel": {
    de: "Irrtum: „Das ganze Internet läuft über Frankfurt“",
    en: "Misconception: “The whole internet runs through Frankfurt”",
    tr: "Yanılgı: “Bütün internet Frankfurt'tan geçer”"
  },
  "aus.e3Text": {
    de: "Frankfurt hat einen sehr großen Knoten, aber er ist einer von vielen. Internet-Knoten gibt es in {laender} Ländern (PCH, Stand {datum}). São Paulo meldete im März 2026 mit {sp} Tbit/s eine höhere Spitze als Frankfurt im Oktober 2026 mit {fra} Tbit/s. Über einen Knoten läuft außerdem nur der Verkehr der Netze, die dort angeschlossen sind und ihn dort tauschen.",
    en: "Frankfurt has a very large exchange, but it is one of many. There are internet exchanges in {laender} countries (PCH, as of {datum}). São Paulo reported a higher peak in March 2026, {sp} Tbit/s, than Frankfurt in October 2026, {fra} Tbit/s. Besides, an exchange only carries the traffic of the networks that are connected there and exchange it there.",
    tr: "Frankfurt'ta çok büyük bir değişim noktası vardır, ama bu pek çok noktadan yalnızca biridir. {laender} ülkede internet değişim noktası bulunur (PCH, {datum} itibarıyla). São Paulo Mart 2026'da {sp} Tbit/s ile, Frankfurt'un Ekim 2026'daki {fra} Tbit/s değerinden daha yüksek bir tepe bildirdi. Ayrıca bir değişim noktasından yalnızca oraya bağlı olan ve trafiğini orada değiş tokuş eden ağların trafiği geçer."
  },

  "aus.spitzen": { de: "Spitzenverkehr großer Knoten", en: "Peak traffic of large exchanges", tr: "Büyük değişim noktalarının tepe trafiği" },
  "aus.legEinzel": { de: "ein Ballungsraum", en: "one metropolitan area", tr: "tek bir metropol" },
  "aus.legSumme": { de: "mehrere Standorte zusammen", en: "several locations combined", tr: "birden çok nokta birlikte" },
  "aus.nIxbrAlle": { de: "IX.br, alle Standorte", en: "IX.br, all locations", tr: "IX.br, tüm noktalar" },
  "aus.nDecixAlle": { de: "DE-CIX, alle Standorte", en: "DE-CIX, all locations", tr: "DE-CIX, tüm noktalar" },
  "aus.abgIxbrAlle": { de: "Summe aus 39 Ballungsräumen in Brasilien", en: "total of 39 metropolitan areas in Brazil", tr: "Brezilya'daki 39 metropolün toplamı" },
  "aus.abgDecixAlle": { de: "alle Knoten des Betreibers weltweit", en: "all of the operator's exchanges worldwide", tr: "işletmecinin dünyadaki tüm noktaları" },
  "aus.spitzenVermerk": {
    de: "Angaben der Betreiber von verschiedenen Tagen. Die Werte sind nicht gleich abgegrenzt und deshalb nur grob vergleichbar.",
    en: "Operator figures from different days. The values are not delimited in the same way and can only be compared roughly.",
    tr: "İşletmecilerin farklı günlere ait verileridir. Değerlerin kapsamı aynı değildir, bu yüzden yalnızca kabaca karşılaştırılabilir."
  },

  "aus.grenze": {
    de: "Die Zeichnung zählt nur Leitungen an einem Ort und nimmt an, dass jedes Netz mit jedem anderen Verkehr tauscht. Das ist nicht überall so. Die Spitzenwerte sind Angaben der Betreiber und unterschiedlich abgegrenzt: ein Ballungsraum, alle Knoten eines Betreibers oder die Summe vieler Ballungsräume. Sie stammen von verschiedenen Tagen. Private Direktverbindungen zwischen zwei Netzen fehlen in diesen Zahlen.",
    en: "The drawing only counts links in one place and assumes that every network exchanges traffic with every other. That is not the case everywhere. The peak values are operator figures and delimited differently: one metropolitan area, all exchanges of one operator or the total of many metropolitan areas. They come from different days. Private direct connections between two networks are missing from these figures.",
    tr: "Çizim yalnızca tek bir yerdeki hatları sayar ve her ağın diğer her ağla trafik değiş tokuş ettiğini varsayar. Bu her yerde böyle değildir. Tepe değerleri işletmecilerin verileridir ve kapsamları farklıdır: tek bir metropol, bir işletmecinin tüm noktaları ya da pek çok metropolün toplamı. Değerler farklı günlere aittir. İki ağ arasındaki özel doğrudan bağlantılar bu sayılarda yer almaz."
  }
});
