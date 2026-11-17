// Texte des Bausteins „Inhalte in der Nähe“ (Technik) in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern ersetzt js/technik-inhalte.js durch Zahlen in der Schreibweise der Sprache.
window.NETZ_TEXTE_DAZU({
  "inh.fall": { de: "Woher die Inhalte kommen", en: "Where the content comes from", tr: "İçeriğin geldiği yer" },
  "inh.fall.fern": { de: "Server weit weg", en: "Server far away", tr: "Sunucu uzakta" },
  "inh.fall.nah": { de: "Kopie in der Nähe", en: "Copy nearby", tr: "Kopya yakında" },
  "inh.r.fern": { de: "Entfernung zum Server", en: "Distance to the server", tr: "Sunucuya uzaklık" },
  "inh.r.nah": { de: "Entfernung zur Kopie", en: "Distance to the copy", tr: "Kopyaya uzaklık" },
  "inh.r.wege": { de: "Hin- und Rückwege je Seitenaufruf", en: "Round trips per page view", tr: "Sayfa açılışı başına gidiş dönüş" },
  "inh.r.umweg": { de: "Umweg der Leitung", en: "Detour of the line", tr: "Hattın dolaşma katsayısı" },
  "inh.fach": { de: "{a}-fach", en: "{a} times", tr: "{a} kat" },

  "inh.e.wege.titel": { de: "Woraus die Hin- und Rückwege bestehen", en: "What the round trips consist of", tr: "Gidiş dönüşler nelerden oluşur" },
  "inh.e.wege.text": {
    de: "Bevor eine Seite erscheint, gehen Fragen und Antworten mehrmals hin und her: die Namensauflösung (DNS), der Aufbau der Verbindung, das Aushandeln der Verschlüsselung und dann die Abrufe der Seite und ihrer Teile. Jeder Schritt kostet mindestens einmal den Weg hin und zurück. Die Zahl am Regler ist eine Annahme. Sie hängt von Protokoll und Sitzung ab.",
    en: "Before a page appears, questions and answers travel back and forth several times: name resolution (DNS), setting up the connection, negotiating encryption, and then the requests for the page and its parts. Each step costs at least one trip there and back. The number on the slider is an assumption. It depends on the protocol and the session.",
    tr: "Bir sayfa görünmeden önce sorular ve yanıtlar birkaç kez gidip gelir: ad çözümleme (DNS), bağlantının kurulması, şifrelemenin kararlaştırılması ve ardından sayfanın ve parçalarının istenmesi. Her adım en az bir gidiş dönüşe mal olur. Kaydırıcıdaki sayı bir varsayımdır. Protokole ve oturuma göre değişir."
  },
  "inh.e.netz.titel": { de: "Was ein Content-Netz ist", en: "What a content network is", tr: "İçerik ağı nedir" },
  "inh.e.netz.text": {
    de: "Ein Content-Netz (CDN) hält Kopien von Inhalten auf vielen Servern in vielen Städten bereit. Dein Abruf geht an eine Kopie in deiner Nähe statt an den fernen Ursprung. Cloudflare nennt für sein Netz 348 Städte und über 13.000 Zusammenschaltungen mit anderen Netzen (Stand {datum}).",
    en: "A content network (CDN) keeps copies of content on many servers in many cities. Your request goes to a copy near you instead of the distant origin. For its network, Cloudflare states 348 cities and more than 13,000 interconnections with other networks (as of {datum}).",
    tr: "Bir içerik ağı (CDN), içeriğin kopyalarını birçok şehirdeki birçok sunucuda hazır tutar. İsteğin uzaktaki kaynak yerine yakınındaki bir kopyaya gider. Cloudflare, kendi ağı için 348 şehir ve diğer ağlarla 13.000'den fazla ara bağlantı bildiriyor ({datum} itibarıyla)."
  },
  "inh.e.anbieter.titel": { de: "Warum Server beim Zugangsanbieter stehen", en: "Why servers sit inside access networks", tr: "Sunucular neden erişim sağlayıcıda durur" },
  "inh.e.anbieter.text": {
    de: "Netflix stellt mit Open Connect eigene Server direkt in die Netze der Zugangsanbieter. Nach eigener Angabe arbeitet Netflix dafür mit über tausend Anbietern zusammen und betreibt Server in über 60 Rechenzentren weltweit. So bleibt der Verkehr am Ort und muss nicht über Transitnetze laufen. Das vermeidet deren Kosten und Engpässe. Ein Content-Netz dient also nicht nur der Geschwindigkeit.",
    en: "With Open Connect, Netflix places its own servers directly inside the networks of access providers. Netflix says it partners with over a thousand providers for this and runs servers in more than 60 data centres worldwide. Traffic stays local and does not have to cross transit networks. That avoids their cost and congestion. So a content network is not only about speed.",
    tr: "Netflix, Open Connect ile kendi sunucularını doğrudan erişim sağlayıcıların ağlarına yerleştirir. Netflix'in kendi açıklamasına göre bunun için binden fazla sağlayıcıyla çalışır ve dünyada 60'tan fazla veri merkezinde sunucu işletir. Böylece trafik yerelde kalır ve transit ağlardan geçmek zorunda kalmaz. Bu da transitin maliyetini ve tıkanıklığını önler. Yani bir içerik ağı yalnızca hız için değildir."
  },

  "inh.z.fern": { de: "Wartezeit, Server weit weg", en: "Waiting time, server far away", tr: "Bekleme süresi, sunucu uzakta" },
  "inh.z.nah": { de: "Wartezeit, Kopie in der Nähe", en: "Waiting time, copy nearby", tr: "Bekleme süresi, kopya yakında" },
  "inh.z.ersparnis": { de: "Ersparnis durch die Kopie", en: "Saved by the copy", tr: "Kopyanın kazandırdığı süre" },
  "inh.z.rundlauf": { de: "Ein Hin- und Rückweg im gewählten Fall", en: "One round trip in the chosen case", tr: "Seçilen durumda bir gidiş dönüş" },
  "inh.k.nutzer": { de: "Du", en: "You", tr: "Sen" },
  "inh.k.kopie": { de: "Kopie", en: "Copy", tr: "Kopya" },
  "inh.k.ursprung": { de: "Ursprung", en: "Origin", tr: "Kaynak" },
  "inh.bild": {
    de: "Vom fernen Server in {fern} km Entfernung wartest du rund {tfern}, von der Kopie in {nah} km rund {tnah}. Zahl der Hin- und Rückwege: {wege}.",
    en: "From the distant server {fern} km away you wait about {tfern}, from the copy {nah} km away about {tnah}. Number of round trips: {wege}.",
    tr: "{fern} km uzaktaki sunucudan yaklaşık {tfern}, {nah} km uzaktaki kopyadan yaklaşık {tnah} beklersin. Gidiş dönüş sayısı: {wege}."
  },
  "inh.vermerk": {
    de: "Gerechnet ist nur die Laufzeit des Lichts in der Glasfaser: rund 204 km je Millisekunde, etwa zwei Drittel der Lichtgeschwindigkeit im Vakuum. Entfernung mal Umweg mal zwei, mal Zahl der Hin- und Rückwege. Die Zeichnung ist nicht maßstäblich.",
    en: "Only the travel time of light in glass fibre is calculated: about 204 km per millisecond, roughly two thirds of the speed of light in a vacuum. Distance times detour times two, times the number of round trips. The drawing is not to scale.",
    tr: "Yalnızca ışığın cam fiberdeki yol süresi hesaplanır: milisaniyede yaklaşık 204 km, yani ışığın boşluktaki hızının kabaca üçte ikisi. Uzaklık çarpı dolaşma katsayısı çarpı iki, çarpı gidiş dönüş sayısı. Çizim ölçekli değildir."
  },
  "inh.keinGewinn": {
    de: "Die Kopie liegt hier nicht näher als der Server. Sie spart keine Laufzeit.",
    en: "Here the copy is no closer than the server. It saves no travel time.",
    tr: "Burada kopya sunucudan daha yakın değil. Yol süresinden kazandırmaz."
  },
  "inh.grenze": {
    de: "Die Zahl der Hin- und Rückwege ist eine Annahme und hängt von Protokoll und Sitzung ab. Der Umweg ist ebenfalls eine Annahme. Der Startwert 1,4 folgt aus einer Messstudie von 2017: Router-Wege brauchten im Median 2,1-mal so lang wie Licht im Vakuum auf der Luftlinie, davon rund 1,5 durch das Glas. Gerechnet ist nur die Laufzeit. Die Rechenzeit des Servers, Warteschlangen und die letzte Meile fehlen, ebenso die Frage, ob die Kopie den Inhalt schon hat. In derselben Studie dauerte der Abruf der HTML-Datei einer Seite im Median 36,5-mal so lang, wie Licht im Vakuum für den Hin- und Rückweg gebraucht hätte.",
    en: "The number of round trips is an assumption and depends on the protocol and the session. The detour is an assumption too. The starting value of 1.4 follows from a 2017 measurement study: router paths took a median 2.1 times as long as light in a vacuum along the straight line, of which about 1.5 is due to the glass. Only travel time is calculated. Server processing time, queues and the last mile are missing, as is the question of whether the copy already holds the content. In the same study, fetching the HTML file of a page took a median 36.5 times as long as light in a vacuum would have needed for the round trip.",
    tr: "Gidiş dönüş sayısı bir varsayımdır; protokole ve oturuma göre değişir. Dolaşma katsayısı da bir varsayımdır. 1,4 başlangıç değeri 2017 tarihli bir ölçüm çalışmasına dayanır: yönlendirici yolları, ortanca değerde, ışığın boşlukta kuş uçuşu hatta harcayacağı sürenin 2,1 katını aldı; bunun yaklaşık 1,5 katı camdan kaynaklanır. Yalnızca yol süresi hesaplanır. Sunucunun işlem süresi, kuyruklar ve son kilometre eksiktir; kopyanın içeriği zaten barındırıp barındırmadığı da hesaba katılmaz. Aynı çalışmada bir sayfanın HTML dosyasının alınması, ortanca değerde, ışığın boşlukta gidiş dönüş için harcayacağı sürenin 36,5 katı sürdü."
  }
});
