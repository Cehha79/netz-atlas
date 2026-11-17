// Texte des Bausteins „Routing“ der Technikseite in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern setzt js/technik-bgp.js ein.
window.NETZ_TEXTE_DAZU({
  "bgp.netz": { de: "Netz", en: "Network", tr: "Ağ" },
  "bgp.versuch": { de: "Versuch", en: "Experiment", tr: "Deney" },
  "bgp.normal": { de: "Normalzustand", en: "Normal state", tr: "Normal durum" },
  "bgp.ausfall": { de: "Ausfall", en: "Outage", tr: "Kesinti" },
  "bgp.falsch": { de: "Falsche Ankündigung", en: "False announcement", tr: "Yanlış duyuru" },

  "bgp.normalText": {
    de: "Alle Leitungen arbeiten. Nur {ziel} kündigt den Adressblock {block} an. Der Verkehr von {start} sucht den Weg dorthin.",
    en: "All links are working. Only {ziel} announces the address block {block}. Traffic from {start} looks for the path to it.",
    tr: "Tüm hatlar çalışıyor. {block} adres bloğunu yalnızca {ziel} duyuruyor. {start} kaynaklı trafik oraya giden yolu arıyor."
  },
  "bgp.ausfallText": {
    de: "Eine Leitung fällt aus. Wähle, welche. Der Weg wird über die übrigen Leitungen neu berechnet.",
    en: "One link fails. Choose which one. The path is recalculated over the remaining links.",
    tr: "Bir hat devre dışı kalıyor. Hangisi olacağını seç. Yol, kalan hatlar üzerinden yeniden hesaplanır."
  },
  "bgp.falschText": {
    de: "{falsch} kündigt fälschlich den Teilblock {teil} an. Er ist genauer als {block} von {ziel} und enthält die untere Hälfte seiner Adressen. Wähle eine Zieladresse in dieser Hälfte oder außerhalb.",
    en: "{falsch} wrongly announces the sub-block {teil}. It is more specific than {block} from {ziel} and contains the lower half of its addresses. Choose a destination address inside or outside that half.",
    tr: "{falsch} yanlışlıkla {teil} alt bloğunu duyuruyor. Bu blok, {ziel} tarafından duyurulan {block} bloğundan daha belirlidir ve adreslerinin alt yarısını içerir. Bu yarının içinden veya dışından bir hedef adres seç."
  },
  "bgp.leitungWahl": { de: "Ausgefallene Leitung", en: "Failed link", tr: "Devre dışı kalan hat" },
  "bgp.adresseWahl": { de: "Zieladresse", en: "Destination address", tr: "Hedef adres" },

  "bgp.start": { de: "Start", en: "Start", tr: "Başlangıç" },
  "bgp.ziel": { de: "Ziel", en: "Destination", tr: "Hedef" },
  "bgp.falschKurz": { de: "falsche Ankündigung", en: "false announcement", tr: "yanlış duyuru" },
  "bgp.bildWeg": {
    de: "Beispielnetz aus acht Netzen. Der Verkehr läuft über {weg} und kommt bei {ankunft} an.",
    en: "Example of eight networks. Traffic runs via {weg} and arrives at {ankunft}.",
    tr: "Sekiz ağdan oluşan örnek. Trafiğin yolu: {weg}. Varış: {ankunft}."
  },
  "bgp.bildKeinWeg": {
    de: "Beispielnetz aus acht Netzen. Es gibt keinen Weg von {start} zu {ziel}.",
    en: "Example of eight networks. There is no path from {start} to {ziel}.",
    tr: "Sekiz ağdan oluşan örnek. {start} ile {ziel} arasında yol yok."
  },
  "bgp.legWeg": { de: "Weg des Verkehrs", en: "Path of the traffic", tr: "Trafiğin yolu" },
  "bgp.legIrrweg": { de: "Weg zum falschen Netz", en: "Path to the wrong network", tr: "Yanlış ağa giden yol" },
  "bgp.legAus": { de: "ausgefallene Leitung", en: "failed link", tr: "devre dışı hat" },

  "bgp.zNetze": { de: "Netze auf dem Weg", en: "Networks on the path", tr: "Yoldaki ağlar" },
  "bgp.zLeitungen": { de: "Leitungen auf dem Weg", en: "Links on the path", tr: "Yoldaki hatlar" },
  "bgp.zAnkunft": { de: "Verkehr kommt an bei", en: "Traffic arrives at", tr: "Trafiğin vardığı ağ" },
  "bgp.nirgends": { de: "nirgends", en: "nowhere", tr: "hiçbir yer" },

  "bgp.rWeg": { de: "Weg", en: "Path", tr: "Yol" },
  "bgp.rRegel": { de: "Entschieden hat", en: "Decided by", tr: "Belirleyen kural" },
  "bgp.rFolge": { de: "Folge", en: "Effect", tr: "Sonuç" },
  "bgp.keinWeg": { de: "kein Weg vorhanden", en: "no path available", tr: "yol yok" },

  "bgp.regelGenauer": { de: "Genauerer Adressblock gewinnt", en: "More specific address block wins", tr: "Daha belirli adres bloğu kazanır" },
  "bgp.regelKuerzer": { de: "Kürzerer Weg über weniger Netze", en: "Shorter path across fewer networks", tr: "Daha az ağdan geçen kısa yol" },
  "bgp.regelEinzig": { de: "Einziger vorhandener Weg", en: "Only available path", tr: "Tek mevcut yol" },
  "bgp.regelKeiner": { de: "Keine Regel hilft, die Verbindung fehlt", en: "No rule helps, the connection is missing", tr: "Hiçbir kural işe yaramaz, bağlantı yok" },

  "bgp.grundGenauer": {
    de: "{teil} von {falsch} ist genauer als {block} von {ziel} und enthält die Adresse. Die Weglänge zählt dabei nicht: zu {falsch} sind es {lang} Leitungen, zum richtigen {ziel} {kurz}.",
    en: "{teil} from {falsch} is more specific than {block} from {ziel} and contains the address. Path length does not count here: {lang} links to {falsch}, {kurz} to the correct {ziel}.",
    tr: "{falsch} tarafından duyurulan {teil}, {ziel} tarafından duyurulan {block} bloğundan daha belirlidir ve adresi içerir. Yol uzunluğu burada sayılmaz: {falsch} için {lang} hat, doğru ağ olan {ziel} için {kurz} hat."
  },
  "bgp.grundAusserhalb": {
    de: "{teil} enthält diese Adresse nicht. Für sie gilt weiter {block} von {ziel}.",
    en: "{teil} does not contain this address. {block} from {ziel} still applies to it.",
    tr: "{teil} bu adresi içermez. Bu adres için {ziel} tarafından duyurulan {block} geçerli kalır."
  },
  "bgp.grundKuerzer": {
    de: "Zu {ziel} führen {wege} Wege ohne Schleife. Der kürzeste hat {kurz} Leitungen, der nächste {lang}.",
    en: "{wege} loop-free paths lead to {ziel}. The shortest has {kurz} links, the next one {lang}.",
    tr: "{ziel} için döngüsüz {wege} yol var. En kısası {kurz} hat, bir sonraki {lang} hat içerir."
  },
  "bgp.grundEinzig": {
    de: "Zu {ziel} führt nur noch dieser eine Weg.",
    en: "Only this one path leads to {ziel}.",
    tr: "{ziel} için yalnızca bu tek yol kaldı."
  },
  "bgp.grundKeiner": {
    de: "Ohne die Leitung {leitung} hat {start} keine Verbindung mehr zu {ziel}.",
    en: "Without the link {leitung}, {start} no longer has a connection to {ziel}.",
    tr: "{leitung} hattı olmadan {start} ile {ziel} arasında bağlantı kalmaz."
  },

  "bgp.ausfallUmweg": {
    de: "Der Weg weicht aus: vorher {vor} Leitungen, jetzt {nach}.",
    en: "The path takes a detour: {vor} links before, {nach} now.",
    tr: "Yol değişir: önce {vor} hat, şimdi {nach} hat."
  },
  "bgp.ausfallGleich": {
    de: "Die Leitung {leitung} lag nicht auf dem Weg. Er bleibt, wie er war.",
    en: "The link {leitung} was not on the path. It stays as it was.",
    tr: "{leitung} hattı yolun üzerinde değildi. Yol olduğu gibi kalır."
  },
  "bgp.ausfallKein": {
    de: "Das Ziel ist von {start} aus unerreichbar.",
    en: "The destination cannot be reached from {start}.",
    tr: "Hedefe {start} üzerinden ulaşılamaz."
  },

  "bgp.eintraege": { de: "Ankündigungen, die {start} kennt", en: "Announcements known to {start}", tr: "{start} tarafından bilinen duyurular" },
  "bgp.eintragVon": { de: "von {netz}", en: "from {netz}", tr: "duyuran: {netz}" },
  "bgp.eintragWeg": { de: "{zahl} Leitungen", en: "{zahl} links", tr: "{zahl} hat" },
  "bgp.stGewaehlt": { de: "gewählt", en: "chosen", tr: "seçildi" },
  "bgp.stPasstNicht": { de: "enthält die Adresse nicht", en: "does not contain the address", tr: "adresi içermiyor" },
  "bgp.stUngenauer": { de: "passt, ist aber ungenauer", en: "matches, but is less specific", tr: "eşleşiyor, ama daha az belirli" },
  "bgp.stUnerreichbar": { de: "nicht erreichbar", en: "unreachable", tr: "ulaşılamıyor" },

  "bgp.e1Titel": { de: "Autonomes System", en: "Autonomous system", tr: "Otonom sistem" },
  "bgp.e1Text": {
    de: "Das Internet ist kein einzelnes Netz, sondern ein Verbund vieler Netze. Ein Netz unter einer Verwaltung mit eigener Nummer heißt autonomes System, kurz AS. Im weltweiten Routing sind rund {zahl} davon sichtbar, mit {bloecke} angekündigten IPv4-Adressblöcken (CIDR Report, Stand {datum}). Mit dem Verfahren BGP meldet jedes Netz seinen Nachbarn, welche Adressblöcke über es erreichbar sind.",
    en: "The internet is not one network but a federation of many. A network under one administration with its own number is called an autonomous system, AS for short. About {zahl} of them are visible in global routing, with {bloecke} announced IPv4 address blocks (CIDR Report, as of {datum}). Using the BGP protocol, each network tells its neighbours which address blocks can be reached through it.",
    tr: "İnternet tek bir ağ değil, pek çok ağın birleşimidir. Tek bir yönetim altındaki, kendi numarası olan ağa otonom sistem, kısaca AS denir. Küresel yönlendirmede bunlardan yaklaşık {zahl} tanesi görünür; duyurulan IPv4 adres bloğu sayısı {bloecke} (CIDR Report, {datum} itibarıyla). Her ağ, BGP adlı yöntemle komşularına hangi adres bloklarına kendi üzerinden ulaşılabildiğini bildirir."
  },
  "bgp.e2Titel": { de: "Peering und Transit", en: "Peering and transit", tr: "PEERING ve transit" },
  "bgp.e2Text": {
    de: "Eine Leitung zwischen zwei Netzen kann zweierlei bedeuten. Beim Peering tauschen zwei Netze ihren Verkehr direkt miteinander aus. Beim Transit bezahlt ein Netz ein anderes dafür, den Rest des Internets zu erreichen. Peering ist nicht immer kostenlos. Im Beispiel hat {start} nur eine einzige Leitung: Fällt sie aus, ist das Netz abgeschnitten.",
    en: "A link between two networks can mean two things. With peering, two networks exchange their traffic directly with each other. With transit, one network pays another to reach the rest of the internet. Peering is not always free of charge. In the example, {start} has only a single link: if it fails, the network is cut off.",
    tr: "İki ağ arasındaki bir hat iki anlama gelebilir. Peering'de iki ağ trafiğini doğrudan birbiriyle değiş tokuş eder. Transit'te bir ağ, internetin geri kalanına ulaşmak için başka bir ağa ödeme yapar. Peering her zaman ücretsiz değildir. Örnekte {start} yalnızca tek bir hatta bağlıdır: o hat kesilirse ağ dışarıyla bağlantısını yitirir."
  },
  "bgp.e3Titel": { de: "Warum sich ein Fehler ausbreitet", en: "Why a mistake spreads", tr: "Bir hata neden yayılır" },
  "bgp.e3Text": {
    de: "Es gibt keine zentrale Leitstelle, die Ankündigungen prüft. Jedes Netz gibt an seine Nachbarn weiter, was es selbst gehört hat. Filtert ein Netz nicht, wandert eine falsche Ankündigung von Netz zu Netz und lenkt den Verkehr um. Dahinter steckt nicht immer ein Angriff: 2019 war der Auslöser eine fehlerhafte Einstellung.",
    en: "There is no central control room that checks announcements. Each network passes on to its neighbours what it has heard itself. If a network does not filter, a false announcement travels from network to network and diverts traffic. This is not always an attack: in 2019 the trigger was a faulty configuration.",
    tr: "Duyuruları denetleyen merkezi bir kontrol noktası yoktur. Her ağ, kendi duyduğunu komşularına iletir. Bir ağ süzme yapmazsa yanlış bir duyuru ağdan ağa yayılır ve trafiği saptırır. Bunun ardında her zaman bir saldırı yoktur: 2019'da neden hatalı bir yapılandırmaydı."
  },
  "bgp.beispiel": {
    de: "Veranschaulichung: Die acht Netze sind erfunden. Ihre Nummern und der Adressblock stammen aus Bereichen, die für Beispiele in Dokumentationen reserviert sind (AS64496 bis AS64511 und 203.0.113.0/24).",
    en: "Illustration: the eight networks are invented. Their numbers and the address block come from ranges reserved for examples in documentation (AS64496 to AS64511 and 203.0.113.0/24).",
    tr: "Örnekleme: Sekiz ağ kurmacadır. Numaraları ve adres bloğu, belgelerdeki örnekler için ayrılmış aralıklardan alınmıştır (AS64496 ile AS64511 arası ve 203.0.113.0/24)."
  },

  "bgp.vorfaelle": { de: "Drei belegte Vorfälle", en: "Three documented incidents", tr: "Belgelenmiş üç olay" },
  "bgp.vDatum": { de: "Datum", en: "Date", tr: "Tarih" },
  "bgp.vWas": { de: "Was geschah", en: "What happened", tr: "Ne oldu" },
  "bgp.v2008": {
    de: "Pakistan Telecom (AS17557) kündigt den Block 208.65.153.0/24 an. Er ist ein genauerer Teil des Blocks 208.65.152.0/22, den YouTube (AS36561) ankündigt. PCCW (AS3491) reicht die Ankündigung an den Rest des Internets weiter. Sie besteht von 18:47 bis 21:01 UTC.",
    en: "Pakistan Telecom (AS17557) announces the block 208.65.153.0/24. It is a more specific part of the block 208.65.152.0/22 announced by YouTube (AS36561). PCCW (AS3491) forwards the announcement to the rest of the internet. It lasts from 18:47 to 21:01 UTC.",
    tr: "Pakistan Telecom (AS17557) 208.65.153.0/24 bloğunu duyurur. Bu blok, YouTube'un (AS36561) duyurduğu 208.65.152.0/22 bloğunun daha belirli bir parçasıdır. PCCW (AS3491) duyuruyu internetin geri kalanına iletir. Duyuru 18:47'den 21:01'e kadar (UTC) sürer."
  },
  "bgp.v2019": {
    de: "Routenleck ab 10:30 UTC: Bei DQE (AS33154) erzeugt ein Gerät zur Wegoptimierung genauere Teilblöcke. Sie gelangen über einen Kunden (AS396531) zu Verizon (AS701), das sie ungefiltert weiterverbreitet. Cloudflare verliert zeitweise rund 15 % seines weltweiten Verkehrs.",
    en: "Route leak from 10:30 UTC: at DQE (AS33154), a route optimisation device creates more specific sub-blocks. Through a customer (AS396531) they reach Verizon (AS701), which passes them on unfiltered. At the worst point Cloudflare loses about 15% of its global traffic.",
    tr: "10:30 UTC'den itibaren rota sızıntısı: DQE'de (AS33154) bir rota iyileştirme aygıtı daha belirli alt bloklar üretir. Bunlar bir müşteri (AS396531) üzerinden Verizon'a (AS701) ulaşır; Verizon bunları süzmeden yayar. Cloudflare bir süre küresel trafiğinin yaklaşık %15'ini kaybeder."
  },
  "bgp.v2021": {
    de: "Bei Wartungsarbeiten trennt ein Befehl versehentlich alle Verbindungen im internen Fernnetz von Facebook (AS32934). Die DNS-Server ziehen daraufhin ihre Ankündigungen zurück. Ab etwa 15:40 UTC ändern sich die Wege; der Name facebook.com ist bis 21:20 UTC nicht auflösbar.",
    en: "During maintenance, a command accidentally takes down all connections in Facebook's (AS32934) internal backbone. The DNS servers then withdraw their announcements. From about 15:40 UTC the routes change; the name facebook.com cannot be resolved until 21:20 UTC.",
    tr: "Bakım sırasında bir komut, Facebook'un (AS32934) iç omurga ağındaki tüm bağlantıları yanlışlıkla keser. Bunun üzerine DNS sunucuları duyurularını geri çeker. Yaklaşık 15:40 UTC'den itibaren yollar değişir; facebook.com adı 21:20 UTC'ye kadar çözümlenemez."
  },

  "bgp.grenze": {
    de: "Echtes Routing entscheidet zuerst nach Geschäftsregeln, die jeder Betreiber selbst festlegt, und erst danach nach der Weglänge. Das Schaubild rechnet nur mit zwei Regeln: Der genauere Adressblock gewinnt, und unter gleich genauen Blöcken gewinnt der Weg über weniger Netze. Ob eine Leitung Peering oder Transit ist, spielt hier keine Rolle. Filter und Prüfverfahren, mit denen Netze falsche Ankündigungen abweisen können, fehlen. Das Netz ist ein Beispiel aus acht Netzen; im echten Internet sind es rund {zahl}.",
    en: "Real routing decides first by business rules that each operator sets for itself, and only then by path length. This diagram calculates with two rules only: the more specific address block wins, and among equally specific blocks the path across fewer networks wins. Whether a link is peering or transit plays no role here. Filters and validation methods with which networks can reject false announcements are missing. The network is an example of eight networks; the real internet has about {zahl}.",
    tr: "Gerçek yönlendirme önce her işletmecinin kendi belirlediği ticari kurallara, ancak ondan sonra yol uzunluğuna göre karar verir. Bu şema yalnızca iki kuralla hesap yapar: daha belirli adres bloğu kazanır; eşit belirlilikteki bloklar arasında daha az ağdan geçen yol kazanır. Bir hattın peering mi transit mi olduğu burada rol oynamaz. Ağların yanlış duyuruları reddetmesini sağlayan süzgeçler ve doğrulama yöntemleri yoktur. Ağ, sekiz ağdan oluşan bir örnektir; gerçek internette yaklaşık {zahl} ağ vardır."
  }
});
