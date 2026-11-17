// Texte des Bausteins „Paketweg“ der Technikseite in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern setzt js/technik-paketweg.js ein, Zahlen in der Schreibweise der Sprache.
window.NETZ_TEXTE_DAZU({
  "pw.weg": { de: "Beispielweg", en: "Example route", tr: "Örnek yol" },
  "pw.weg.stuttgart": { de: "Von Stuttgart zu einem Server in Frankfurt", en: "From Stuttgart to a server in Frankfurt", tr: "Stuttgart'tan Frankfurt'taki bir sunucuya" },
  "pw.weg.istanbul": { de: "Von Istanbul zu einem Server in Frankfurt", en: "From Istanbul to a server in Frankfurt", tr: "İstanbul'dan Frankfurt'taki bir sunucuya" },
  "pw.weg.newyork": { de: "Von Frankfurt zu einem Server in New York", en: "From Frankfurt to a server in New York", tr: "Frankfurt'tan New York'taki bir sunucuya" },
  "pw.weg.singapur": { de: "Von Frankfurt zu einem Server in Singapur", en: "From Frankfurt to a server in Singapore", tr: "Frankfurt'tan Singapur'daki bir sunucuya" },

  "pw.bedienung": { de: "Ablauf steuern", en: "Control the sequence", tr: "Akışı yönet" },
  "pw.weiter": { de: "Schritt weiter", en: "Next step", tr: "Sonraki adım" },
  "pw.vonVorn": { de: "Von vorn", en: "Start over", tr: "Baştan" },
  "pw.abspielen": { de: "Abspielen", en: "Play", tr: "Oynat" },
  "pw.anhalten": { de: "Anhalten", en: "Pause", tr: "Duraklat" },
  "pw.abspielenAus": { de: "Läuft nur bei eingeschalteter Bewegung", en: "Runs only while motion is switched on", tr: "Yalnızca hareket açıkken çalışır" },

  "pw.art.heim": { de: "Heimnetz", en: "Home network", tr: "Ev ağı" },
  "pw.art.zugang": { de: "Zugangsanbieter", en: "Access provider", tr: "Erişim sağlayıcı" },
  "pw.art.knoten": { de: "Internet-Knoten", en: "Internet exchange", tr: "İnternet değişim noktası" },
  "pw.art.transit": { de: "Transitnetz", en: "Transit network", tr: "Transit ağı" },
  "pw.art.seekabel": { de: "Seekabel", en: "Submarine cable", tr: "Denizaltı kablosu" },
  "pw.art.ziel": { de: "Zielnetz", en: "Destination network", tr: "Hedef ağ" },
  "pw.art.server": { de: "Server", en: "Server", tr: "Sunucu" },

  "pw.netz": { de: "Beispielnetz", en: "Example network", tr: "Örnek ağ" },
  "pw.beispielknoten": { de: "Beispielknoten", en: "Example exchange", tr: "Örnek değişim noktası" },
  "pw.beispielkabel": { de: "Beispielkabel", en: "Example cable", tr: "Örnek kablo" },
  "pw.zuHause": { de: "bei dir zu Hause", en: "at your home", tr: "senin evinde" },

  "pw.veranschaulichung": {
    de: "Veranschaulichung: Wege, Netze, Rechnernamen und Adressen sind erfundene Beispiele. Die Adressen stammen aus Bereichen, die für Dokumentation reserviert sind. Echte Wege wechseln laufend.",
    en: "Illustration: routes, networks, host names and addresses are invented examples. The addresses come from ranges reserved for documentation. Real routes change all the time.",
    tr: "Örnekleme: Yollar, ağlar, makine adları ve adresler uydurma örneklerdir. Adresler, belgeleme için ayrılmış aralıklardan alınmıştır. Gerçek yollar sürekli değişir."
  },

  "pw.schritt": { de: "Schritt {a} von {b}", en: "Step {a} of {b}", tr: "Adım {a} / {b}" },
  "pw.jetzt.start": { de: "Start", en: "Start", tr: "Başlangıç" },
  "pw.jetzt.rueck": { de: "Rückweg", en: "Return path", tr: "Dönüş yolu" },
  "pw.s.start": {
    de: "Start. Dein Gerät schickt ein Paket los. Im Paket steht die Adresse des Ziels: {adresse} ({host}). Drücke „Schritt weiter“.",
    en: "Start. Your device sends a packet. The packet carries the address of the destination: {adresse} ({host}). Press “Next step”.",
    tr: "Başlangıç. Cihazın bir paket gönderir. Pakette hedefin adresi yazılıdır: {adresse} ({host}). “Sonraki adım” düğmesine bas."
  },
  "pw.s.heim": {
    de: "Heimnetz. Das Paket geht vom Gerät zu deinem Router. Diese wenigen Meter zählen für die Laufzeit fast nicht.",
    en: "Home network. The packet travels from your device to your router. These few metres hardly count for the travel time.",
    tr: "Ev ağı. Paket, cihazından yönlendiricine gider. Bu birkaç metre, yolculuk süresinde neredeyse hiç yer tutmaz."
  },
  "pw.s.zugang": {
    de: "Zugangsanbieter ({netz}). Sein Netz übernimmt das Paket an deinem Anschluss und trägt es bis zur Übergabe an das nächste Netz.",
    en: "Access provider ({netz}). Its network takes the packet at your line and carries it to the handover to the next network.",
    tr: "Erişim sağlayıcı ({netz}). Ağı, paketi hattından alır ve bir sonraki ağa devredeceği yere kadar taşır."
  },
  "pw.s.knoten": {
    de: "Internet-Knoten ({netz}). Ein Ort, an dem Netze Verkehr tauschen. Hier gibt der Zugangsanbieter das Paket direkt an das Zielnetz weiter.",
    en: "Internet exchange ({netz}). A place where networks exchange traffic. Here the access provider hands the packet straight to the destination network.",
    tr: "İnternet değişim noktası ({netz}). Ağların trafik değiştirdiği bir yer. Erişim sağlayıcı paketi burada doğrudan hedef ağa verir."
  },
  "pw.s.transit": {
    de: "Transitnetz ({netz}). Ein Netz, das gegen Bezahlung den Zugang zum Rest des Internets herstellt. Es trägt das Paket über die lange Landstrecke.",
    en: "Transit network ({netz}). A network that provides paid access to the rest of the internet. It carries the packet over the long stretch on land.",
    tr: "Transit ağı ({netz}). Ücret karşılığında internetin geri kalanına erişim sağlayan bir ağ. Paketi uzun kara yolu boyunca taşır."
  },
  "pw.s.tunnel": {
    de: "Auf diesem Abschnitt läuft das Paket durch einen Tunnel: Die Router dazwischen erscheinen in Traceroute nicht.",
    en: "On this section the packet runs through a tunnel: the routers in between do not appear in traceroute.",
    tr: "Bu bölümde paket bir tünelden geçer: Aradaki yönlendiriciler traceroute çıktısında görünmez."
  },
  "pw.s.seekabel": {
    de: "Seekabel ({netz}). Ein Glasfaserkabel am Meeresboden und der längste Abschnitt dieses Wegs. Traceroute zeigt das Kabel nicht, nur den Sprung der Zeit zwischen zwei Schritten.",
    en: "Submarine cable ({netz}). A fibre-optic cable on the seabed and the longest section of this route. Traceroute does not show the cable, only the jump in time between two hops.",
    tr: "Denizaltı kablosu ({netz}). Deniz tabanındaki bir fiber optik kablo ve bu yolun en uzun bölümü. Traceroute kabloyu göstermez; yalnızca iki adım arasındaki süre sıçramasını gösterir."
  },
  "pw.s.ziel": {
    de: "Zielnetz ({netz}). Das Netz, in dem der Server steht. Es bringt das Paket bis zum Rechenzentrum.",
    en: "Destination network ({netz}). The network that hosts the server. It takes the packet to the data centre.",
    tr: "Hedef ağ ({netz}). Sunucunun bulunduğu ağ. Paketi veri merkezine kadar götürür."
  },
  "pw.s.stumm": {
    de: "Ein Router in diesem Netz antwortet nicht auf Traceroute. In der Ausgabe stehen dann Sternchen. Ein Ausfall ist das nicht.",
    en: "One router in this network does not answer traceroute. The output then shows asterisks. That is not an outage.",
    tr: "Bu ağdaki bir yönlendirici traceroute'a yanıt vermez. Çıktıda o zaman yıldızlar görünür. Bu bir kesinti değildir."
  },
  "pw.s.server": {
    de: "Server ({host}). Das Paket ist am Ziel. Bis hierher reicht, was Traceroute zeigen kann.",
    en: "Server ({host}). The packet has arrived. This is as far as traceroute can show.",
    tr: "Sunucu ({host}). Paket hedefe ulaştı. Traceroute'un gösterebildiği yol burada biter."
  },
  "pw.s.rueck": {
    de: "Rückweg. Die Antwort läuft zurück zu deinem Gerät. Sie kann über andere Netze laufen als der Hinweg; Traceroute zeigt davon nichts. Gerechnet ist hier derselbe Weg zurück: {rtt} ms hin und zurück.",
    en: "Return path. The reply travels back to your device. It may cross other networks than the outbound path; traceroute shows none of this. The calculation here assumes the same route back: {rtt} ms there and back.",
    tr: "Dönüş yolu. Yanıt cihazına geri döner. Gidiş yolundakinden başka ağlardan geçebilir; traceroute bunu göstermez. Burada dönüş için aynı yol varsayılmıştır: gidiş dönüş {rtt} ms."
  },
  "pw.bisHier": { de: "Bis hier: {km} km, {ms} ms (einfach)", en: "So far: {km} km, {ms} ms (one way)", tr: "Buraya kadar: {km} km, {ms} ms (tek yön)" },

  "pw.rueckweg": { de: "Rückweg der Antwort: kann anders verlaufen", en: "Return path of the reply: may differ", tr: "Yanıtın dönüş yolu: farklı olabilir" },
  "pw.bildLabel": {
    de: "Stationenkette des Beispielwegs „{weg}“: {n} Abschnitte, {km} km angenommene Strecke, gerechnet {rtt} ms hin und zurück. Aktuell: {jetzt}.",
    en: "Chain of stations of the example route “{weg}”: {n} sections, {km} km assumed distance, calculated {rtt} ms there and back. Current: {jetzt}.",
    tr: "“{weg}” örnek yolunun durak zinciri: {n} bölüm, varsayılan {km} km yol, hesaplanan gidiş dönüş {rtt} ms. Şu an: {jetzt}."
  },

  "pw.z.weg": { de: "Weg gesamt (angenommen)", en: "Total route (assumed)", tr: "Toplam yol (varsayılan)" },
  "pw.z.hin": { de: "Laufzeit hin", en: "One way", tr: "Tek yön" },
  "pw.z.rtt": { de: "Hin und zurück", en: "There and back", tr: "Gidiş dönüş" },
  "pw.z.luft": { de: "Luftlinie (gerechnet)", en: "Great-circle distance (calculated)", tr: "Kuş uçuşu (hesaplanan)" },
  "pw.z.faktor": {
    de: "mal so lang wie Licht im Vakuum auf der Luftlinie",
    en: "times as long as light in a vacuum along the great circle",
    tr: "kat: boşlukta kuş uçuşu ilerleyen ışığa göre"
  },
  "pw.naeherung": {
    de: "Näherung: Laufzeit eines Abschnitts = Länge geteilt durch {v} km/s. Das ist die Faustregel, dass Licht in Glasfaser etwa zwei Drittel so schnell ist wie im Vakuum. Die Längen sind angenommen, nicht gemessen. Gerätezeiten und Warteschlangen fehlen.",
    en: "Approximation: travel time of a section = length divided by {v} km/s. This is the rule of thumb that light in optical fibre is about two thirds as fast as in a vacuum. The lengths are assumed, not measured. Device times and queues are missing.",
    tr: "Yaklaşık değer: Bir bölümün süresi = uzunluk bölü {v} km/s. Bu, ışığın fiberde boşluktakinin yaklaşık üçte ikisi hızında ilerlediği kuralıdır. Uzunluklar varsayılmıştır, ölçülmemiştir. Cihaz süreleri ve kuyruklar yoktur."
  },
  "pw.vergleich": {
    de: "Zum Vergleich: Eine Messstudie von 2017 fand im Median das {a}-Fache für den Weg über die Router und das {b}-Fache für die kleinste gemessene Ping-Zeit, jeweils gegenüber Licht im Vakuum auf der Luftlinie.",
    en: "For comparison: a 2017 measurement study found a median of {a} times for the path via the routers and {b} times for the smallest measured ping time, each relative to light in a vacuum along the great circle.",
    tr: "Karşılaştırma: 2017 tarihli bir ölçüm çalışması, kuş uçuşu boşluktaki ışığa göre yönlendiriciler üzerinden giden yol için ortancada {a} kat, ölçülen en küçük ping süresi için {b} kat buldu."
  },

  "pw.tr.titel": { de: "Nachgestellte Traceroute-Ausgabe", en: "Simulated traceroute output", tr: "Canlandırılmış TRACEROUTE çıktısı" },
  "pw.tr.text": {
    de: "So könnte derselbe Weg in Traceroute aussehen. Gemessen wurde nichts; die Zeiten sind die gerechneten Werte hin und zurück. Zeilen mit dem Zeichen □ stehen in keiner echten Ausgabe: Sie markieren, was Traceroute nicht zeigt.",
    en: "This is how the same route might look in traceroute. Nothing was measured; the times are the calculated values there and back. Lines marked □ do not appear in any real output: they mark what traceroute does not show.",
    tr: "Aynı yol traceroute çıktısında böyle görünebilirdi. Hiçbir şey ölçülmedi; süreler hesaplanan gidiş dönüş değerleridir. □ işaretli satırlar gerçek bir çıktıda yer almaz: Traceroute'un göstermediklerini işaretler."
  },
  "pw.tr.tunnel": { de: "Tunnel: Die Router dazwischen erscheinen nicht.", en: "Tunnel: the routers in between do not appear.", tr: "Tünel: Aradaki yönlendiriciler görünmez." },
  "pw.tr.seekabel": {
    de: "Seekabel, {km} km: kein eigener Schritt, nur der Sprung der Zeit.",
    en: "Submarine cable, {km} km: no hop of its own, only the jump in time.",
    tr: "Denizaltı kablosu, {km} km: kendi adımı yok, yalnızca süre sıçraması."
  },
  "pw.tr.stumm": { de: "Keine Antwort von diesem Router. Das ist kein Ausfall.", en: "No reply from this router. That is not an outage.", tr: "Bu yönlendiriciden yanıt yok. Bu bir kesinti değildir." },
  "pw.tr.rueck": { de: "Rückweg der Antwort: erscheint nirgends in der Ausgabe.", en: "Return path of the reply: appears nowhere in the output.", tr: "Yanıtın dönüş yolu: çıktının hiçbir yerinde görünmez." },

  "pw.e1.titel": { de: "Was ist ein Paket", en: "What is a packet", tr: "Paket nedir" },
  "pw.e1.text": {
    de: "Ein Paket ist ein kleines Datenstück mit Adresse. Router leiten es von Netz zu Netz weiter. Jeder Schritt von Router zu Router heißt Hop.",
    en: "A packet is a small piece of data with an address. Routers pass it on from network to network. Each step from router to router is called a hop.",
    tr: "Paket, adres taşıyan küçük bir veri parçasıdır. Yönlendiriciler onu ağdan ağa iletir. Yönlendiriciden yönlendiriciye her adıma hop denir."
  },
  "pw.e2.titel": { de: "Was Traceroute zeigt und was nicht", en: "What traceroute shows and what it does not", tr: "TRACEROUTE neyi gösterir, neyi göstermez" },
  "pw.e2.text": {
    de: "Traceroute beruht auf einer Fehlermeldung: Läuft die Lebensdauer eines Pakets bei einem Router ab, verwirft er es und kann den Absender benachrichtigen. So zeigt Traceroute die antwortenden Router auf dem Hinweg und je Schritt eine Zeit hin und zurück. Es zeigt nicht den Rückweg, kein Seekabel, keine Tunnel und nicht den Ort eines Routers. Router beantworten solche Meldungen nachrangig: Ein hoher Wert an einem Zwischenschritt beweist keinen Engpass.",
    en: "Traceroute relies on an error message: when a packet's time to live runs out at a router, the router discards it and may notify the sender. This way traceroute shows the answering routers on the outbound path and a there-and-back time for each hop. It does not show the return path, submarine cables, tunnels or the location of a router. Routers answer such messages with low priority: a high value at an intermediate hop does not prove a bottleneck.",
    tr: "Traceroute bir hata iletisine dayanır: Bir paketin yaşam süresi bir yönlendiricide dolarsa yönlendirici paketi atar ve göndereni bilgilendirebilir. Böylece traceroute, gidiş yolunda yanıt veren yönlendiricileri ve her adım için bir gidiş dönüş süresi gösterir. Dönüş yolunu, denizaltı kablosunu, tünelleri ve yönlendiricinin yerini göstermez. Yönlendiriciler bu iletileri düşük öncelikle yanıtlar: Ara adımdaki yüksek bir değer darboğaz olduğunu kanıtlamaz."
  },
  "pw.e3.titel": { de: "Warum Hin- und Rückweg verschieden sein können", en: "Why the outbound and return paths can differ", tr: "Gidiş ve dönüş yolu neden farklı olabilir" },
  "pw.e3.text": {
    de: "Es gibt keine zentrale Leitstelle. Jedes Netz entscheidet selbst, an welches Nachbarnetz es ein Paket weitergibt, und folgt dabei eigenen Geschäftsregeln, nicht nur dem kürzesten Weg. Die Antwort wird vom Zielnetz aus neu geleitet und kann deshalb über andere Netze laufen.",
    en: "There is no central control room. Each network decides for itself which neighbouring network it hands a packet to, following its own business rules and not just the shortest path. The reply is routed afresh from the destination network and can therefore cross other networks.",
    tr: "Merkezî bir kontrol odası yoktur. Her ağ, paketi hangi komşu ağa vereceğine kendisi karar verir; bunu yaparken yalnızca en kısa yola değil, kendi ticari kurallarına uyar. Yanıt, hedef ağdan yeniden yönlendirilir ve bu yüzden başka ağlardan geçebilir."
  },

  "pw.grenze": {
    de: "Die vier Wege sind feste, erfundene Beispiele und kein Abbild eines echten Wegs; echte Wege wechseln laufend. Die Längen der Abschnitte sind angenommen. Gerechnet wird nur die Laufzeit des Lichts in der Glasfaser, ohne Gerätezeiten, Warteschlangen und die Eigenheiten der letzten Meile. Für den Rückweg ist derselbe Weg angenommen, obwohl er im echten Netz oft ein anderer ist. Die Luftlinie ist aus den Koordinaten der Städte gerechnet.",
    en: "The four routes are fixed, invented examples and not a picture of a real route; real routes change all the time. The section lengths are assumed. Only the travel time of light in optical fibre is calculated, without device times, queues and the particularities of the last mile. The same route is assumed for the return path, although in the real network it is often a different one. The great-circle distance is calculated from the coordinates of the cities.",
    tr: "Dört yol sabit, uydurma örneklerdir ve gerçek bir yolun görüntüsü değildir; gerçek yollar sürekli değişir. Bölüm uzunlukları varsayılmıştır. Yalnızca ışığın fiberdeki yolculuk süresi hesaplanır; cihaz süreleri, kuyruklar ve son kilometrenin özellikleri yoktur. Dönüş için aynı yol varsayılmıştır, oysa gerçek ağda dönüş yolu çoğu zaman başkadır. Kuş uçuşu mesafe, şehirlerin koordinatlarından hesaplanmıştır."
  }
});
