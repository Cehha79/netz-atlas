// Texte des Bausteins „Satellit“ der Technikseite in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern setzt js/technik-satellit.js ein, Zahlen in der Schreibweise der Sprache.
window.NETZ_TEXTE_DAZU({
  "sat.hoehe": { de: "Bahnhöhe", en: "Orbit altitude", tr: "Yörünge yüksekliği" },
  "sat.boden": {
    de: "Bodenentfernung zwischen Nutzer und Bodenstation",
    en: "Ground distance between user and ground station",
    tr: "Kullanıcı ile yer istasyonu arasındaki yer mesafesi"
  },
  "sat.marken": { de: "Bahnhöhe wählen", en: "Choose an orbit altitude", tr: "Yörünge yüksekliği seç" },
  "sat.markeTief": { de: "Niedrige Bahn · {z} km", en: "Low orbit · {z} km", tr: "Alçak yörünge · {z} km" },
  "sat.markeGeo": { de: "Geostationär · {z} km", en: "Geostationary · {z} km", tr: "Yer sabit yörünge · {z} km" },
  "sat.wertKm": { de: "{z} km", en: "{z} km", tr: "{z} km" },
  "sat.wertMs": { de: "{z} ms", en: "{z} ms", tr: "{z} ms" },
  "sat.wertTbit": { de: "{z} Tbit/s", en: "{z} Tbit/s", tr: "{z} Tbit/s" },
  "sat.wertKnapp": { de: "knapp {z} Tbit/s", en: "nearly {z} Tbit/s", tr: "neredeyse {z} Tbit/s" },

  "sat.erkBahnTitel": { de: "Niedrige und geostationäre Bahn", en: "Low and geostationary orbit", tr: "Alçak ve yer sabit yörünge" },
  "sat.erkBahnText": {
    de: "Ein geostationärer Satellit steht {geo} km über dem Äquator und läuft genau mit der Erddrehung mit. Vom Boden aus scheint er stillzustehen. Der Weg hinauf und wieder hinunter kostet aber hin und zurück mindestens {geoMs} ms. Satelliten in niedriger Bahn fliegen nur einige hundert Kilometer hoch. Ihr Weg ist kurz, doch sie stehen nicht über einem Ort still. Deshalb braucht eine Konstellation sehr viele davon.",
    en: "A geostationary satellite sits {geo} km above the equator and moves exactly with the Earth's rotation. From the ground it seems to stand still. But the way up and back down costs at least {geoMs} ms there and back. Satellites in low orbit fly only a few hundred kilometres high. Their path is short, but they do not stay above one place. That is why a constellation needs very many of them.",
    tr: "Yer sabit bir uydu ekvatorun {geo} km üzerinde durur ve Dünya'nın dönüşüyle tam aynı hızda döner. Yerden bakınca yerinde duruyor gibi görünür. Ama yukarı ve tekrar aşağı giden yol, gidiş dönüşte en az {geoMs} ms sürer. Alçak yörüngedeki uydular yalnızca birkaç yüz kilometre yüksekte uçar. Yolları kısadır, ancak bir yerin üzerinde sabit durmazlar. Bu yüzden bir uydu takımyıldızında çok sayıda uydu gerekir."
  },
  "sat.erkRechnungTitel": { de: "So wird gerechnet", en: "How it is calculated", tr: "Nasıl hesaplanıyor" },
  "sat.erkRechnungText": {
    de: "Die Erde ist eine Kugel mit {r} km Radius. Nutzer und Bodenstation liegen am Boden. Der Satellit steht genau über der Mitte zwischen beiden; kürzer kann der Weg über einen Satelliten dieser Höhe nicht sein. Das Signal läuft mit Lichtgeschwindigkeit im Vakuum vom Nutzer zum Satelliten, weiter zur Bodenstation und denselben Weg zurück. Die Glasfaser liegt ohne Umweg auf der Bodenentfernung und ist mit rund {v} km je Sekunde gerechnet.",
    en: "The Earth is a sphere with a radius of {r} km. User and ground station are on the ground. The satellite sits exactly above the midpoint between them; the path via a satellite at this altitude cannot be shorter. The signal travels at the speed of light in a vacuum from the user to the satellite, on to the ground station and back the same way. The fibre runs along the ground distance without any detour and is calculated at about {v} km per second.",
    tr: "Dünya {r} km yarıçaplı bir küredir. Kullanıcı ve yer istasyonu yerdedir. Uydu, ikisinin tam ortasının üzerinde durur; bu yükseklikteki bir uydu üzerinden yol bundan kısa olamaz. Sinyal boşluktaki ışık hızıyla kullanıcıdan uyduya, oradan yer istasyonuna gider ve aynı yoldan geri döner. Fiber, yer mesafesi boyunca dolanmadan uzanır ve saniyede yaklaşık {v} km ile hesaplanmıştır."
  },

  "sat.zSat": { de: "Über Satellit, hin und zurück", en: "Via satellite, round trip", tr: "Uydu üzerinden, gidiş dönüş" },
  "sat.zFaser": { de: "Über Glasfaser, hin und zurück", en: "Via fibre, round trip", tr: "Fiber üzerinden, gidiş dönüş" },
  "sat.zWeg": { de: "Weg über den Satelliten, eine Richtung", en: "Path via the satellite, one way", tr: "Uydu üzerinden yol, tek yön" },
  "sat.zReichweite": { de: "Größte Bodenentfernung mit Sichtkontakt", en: "Largest ground distance with line of sight", tr: "Görüş hattı olan en büyük yer mesafesi" },
  "sat.balkenSat": { de: "Satellit", en: "Satellite", tr: "Uydu" },
  "sat.balkenFaser": { de: "Glasfaser", en: "Fibre", tr: "Fiber" },
  "sat.ohneSicht": {
    de: "Kein Sichtkontakt: In {h} km Höhe sieht ein einzelner Satellit Nutzer und Bodenstation nur bis {max} km Bodenentfernung gleichzeitig. Weitere Strecken brauchen mehrere Satelliten oder Zwischenstationen. Das rechnet dieses Schaubild nicht.",
    en: "No line of sight: at an altitude of {h} km a single satellite sees user and ground station at the same time only up to {max} km of ground distance. Longer routes need several satellites or stations in between. This diagram does not calculate that.",
    tr: "Görüş hattı yok: {h} km yükseklikteki tek bir uydu, kullanıcıyı ve yer istasyonunu aynı anda yalnızca {max} km yer mesafesine kadar görür. Daha uzun yollar için birden fazla uydu veya ara istasyon gerekir. Bu şema onu hesaplamaz."
  },
  "sat.vermerk": {
    de: "Näherung: Gerechnet ist nur die Geometrie. Gemessene Werte liegen höher. Starlink nannte für die USA einen Median von {star} ms zur Spitzenzeit (Betreiberangabe, Pressebericht vom {datum}).",
    en: "Approximation: only the geometry is calculated. Measured values are higher. Starlink reported a median of {star} ms at peak hours for the United States (operator figure, press report of {datum}).",
    tr: "Yaklaşık değer: yalnızca geometri hesaplanmıştır. Ölçülen değerler daha yüksektir. Starlink, ABD için yoğun saatlerde {star} ms ortanca gecikme bildirdi (işletmeci beyanı, {datum} tarihli basın haberi)."
  },

  "sat.bildSat": { de: "Satellit · {h} km", en: "Satellite · {h} km", tr: "Uydu · {h} km" },
  "sat.bildFaser": { de: "Glasfaser · {d} km", en: "Fibre · {d} km", tr: "Fiber · {d} km" },
  "sat.bildNutzer": { de: "Nutzer", en: "User", tr: "Kullanıcı" },
  "sat.bildStation": { de: "Bodenstation", en: "Ground station", tr: "Yer istasyonu" },
  "sat.bildMassstab": { de: "maßstabsgetreu", en: "to scale", tr: "ölçekli" },
  "sat.bildLabel": {
    de: "Maßstabsgetreue Zeichnung: Satellit in {h} km Höhe über der Mitte zwischen Nutzer und Bodenstation, die {d} km auseinanderliegen. Hin und zurück über Satellit {sat} ms, über Glasfaser {faser} ms.",
    en: "Drawing to scale: satellite at an altitude of {h} km above the midpoint between user and ground station, which are {d} km apart. There and back via satellite {sat} ms, via fibre {faser} ms.",
    tr: "Ölçekli çizim: uydu, birbirinden {d} km uzaktaki kullanıcı ile yer istasyonunun ortasının {h} km üzerinde. Gidiş dönüş uydu üzerinden {sat} ms, fiber üzerinden {faser} ms."
  },
  "sat.bildLabelOhne": {
    de: "Maßstabsgetreue Zeichnung: Satellit in {h} km Höhe, Nutzer und Bodenstation liegen {d} km auseinander. Die Erde verdeckt den Satelliten, es gibt keinen Sichtkontakt. Über Glasfaser hin und zurück {faser} ms.",
    en: "Drawing to scale: satellite at an altitude of {h} km, user and ground station are {d} km apart. The Earth hides the satellite, there is no line of sight. There and back via fibre {faser} ms.",
    tr: "Ölçekli çizim: uydu {h} km yükseklikte, kullanıcı ile yer istasyonu birbirinden {d} km uzakta. Dünya uyduyu kapatıyor, görüş hattı yok. Fiber üzerinden gidiş dönüş {faser} ms."
  },

  "sat.kapTitel": { de: "Kapazität im Vergleich", en: "Capacity compared", tr: "Kapasite karşılaştırması" },
  "sat.kapZusatz": { de: "Drei Größen, die nicht dasselbe messen", en: "Three figures that do not measure the same thing", tr: "Aynı şeyi ölçmeyen üç büyüklük" },
  "sat.kapStarlink": {
    de: "Starlink, ganze Konstellation (Betreiberangabe, Pressebericht vom {datum})",
    en: "Starlink, whole constellation (operator figure, press report of {datum})",
    tr: "Starlink, tüm uydu takımyıldızı (işletmeci beyanı, {datum} tarihli basın haberi)"
  },
  "sat.kapKabel": {
    de: "Ein einzelnes Seekabel: Dunant mit 12 Faserpaaren (Betreiberangabe, in Betrieb seit {datum})",
    en: "A single submarine cable: Dunant with 12 fibre pairs (operator figure, in service since {datum})",
    tr: "Tek bir denizaltı kablosu: 12 fiber çiftli Dunant (işletmeci beyanı, {datum} tarihinden beri hizmette)"
  },
  "sat.kapWelt": {
    de: "Internationale Internet-Bandbreite, alle Strecken zusammen (TeleGeography, Stand Mitte 2026)",
    en: "International internet bandwidth, all routes together (TeleGeography, as of mid-2026)",
    tr: "Uluslararası internet bant genişliği, tüm güzergâhlar birlikte (TeleGeography, 2026 ortası)"
  },
  "sat.kapVermerk": {
    de: "Die drei Größen messen nicht dasselbe. Die Kapazität einer Konstellation verteilt sich über die ganze Erde. Ein Kabel bringt seine Kapazität zwischen zwei Küsten; der Wert ist eine Auslegungsangabe. Die internationale Bandbreite ist die Summe über alle internationalen Strecken. Alle drei Zahlen altern schnell.",
    en: "The three figures do not measure the same thing. The capacity of a constellation is spread over the whole Earth. A cable delivers its capacity between two coasts; the value is a design figure. International bandwidth is the sum over all international routes. All three numbers age quickly.",
    tr: "Bu üç büyüklük aynı şeyi ölçmez. Bir uydu takımyıldızının kapasitesi bütün Dünya'ya dağılır. Bir kablo kapasitesini iki kıyı arasında taşır; bu değer bir tasarım değeridir. Uluslararası bant genişliği, tüm uluslararası güzergâhların toplamıdır. Üç sayı da hızla eskir."
  },
  "sat.erkErsatzTitel": { de: "Warum Satelliten Seekabel nicht ersetzen", en: "Why satellites do not replace submarine cables", tr: "Uydular denizaltı kablolarının yerini neden tutmaz" },
  "sat.erkErsatzText": {
    de: "Auch Satellitenverkehr geht nach der Bodenstation in Glasfaser und Seekabel weiter. Die genannte Konstellation bietet insgesamt weniger Kapazität als zwei Seekabel dieser Größe, und das verteilt über die ganze Erde. Fast der gesamte Datenverkehr zwischen den Kontinenten läuft über Seekabel. Schätzungen nennen über 95 bis 99 Prozent; gemessen ist das nicht.",
    en: "Satellite traffic, too, continues in fibre and submarine cables after the ground station. The constellation named here offers less capacity in total than two submarine cables of this size, and that is spread over the whole Earth. Almost all data traffic between the continents runs through submarine cables. Estimates put it at more than 95 to 99 per cent; this has not been measured.",
    tr: "Uydu trafiği de yer istasyonundan sonra fiber ve denizaltı kablolarıyla devam eder. Burada anılan uydu takımyıldızının toplam kapasitesi, bu büyüklükteki iki denizaltı kablosundan azdır ve bütün Dünya'ya dağılır. Kıtalar arasındaki veri trafiğinin neredeyse tamamı denizaltı kablolarından geçer. Tahminler yüzde 95 ile 99'un üzerinde bir pay verir; bu ölçülmüş değildir."
  },

  "sat.tabTitel": { de: "Satelliten großer Konstellationen", en: "Satellites of large constellations", tr: "Büyük uydu takımyıldızlarındaki uydular" },
  "sat.tabName": { de: "Konstellation", en: "Constellation", tr: "Takımyıldız" },
  "sat.tabOben": { de: "In der Umlaufbahn", en: "In orbit", tr: "Yörüngede" },
  "sat.tabBetrieb": { de: "Auf Betriebsbahn", en: "In operational orbit", tr: "İşletme yörüngesinde" },
  "sat.tabHinweis": {
    de: "Stand {datum}, nach der Zählung von Jonathan's Space Report, die nur die Bahnen auswertet. „Auf Betriebsbahn“ beschreibt die Bahn, nicht den Dienst: Auch Satelliten außerhalb davon können in Betrieb sein.",
    en: "As of {datum}, according to the count by Jonathan's Space Report, which evaluates orbits only. “In operational orbit” describes the orbit, not the service: satellites outside it may be in service as well.",
    tr: "{datum} tarihli durum; yalnızca yörüngeleri değerlendiren Jonathan's Space Report sayımına göre. “İşletme yörüngesinde” ifadesi hizmeti değil yörüngeyi anlatır: bunun dışındaki uydular da hizmette olabilir."
  },

  "sat.grenze": {
    de: "Gerechnet wird nur die Geometrie: Licht im Vakuum, Satellit genau über der Mitte, Erde als Kugel. Verarbeitung, Bodenstation und Weiterleitung fehlen. Die Rechnung lässt den Satelliten bis hinunter zum Horizont zu. Die Glasfaser ist ohne Umweg und mit einem Näherungswert für eine typische Standardfaser gerechnet; echte Kabelwege sind länger. Die Beispielhöhe {tief} km steht für eine niedrige Bahn; Bahnhöhen einzelner Anbieter sind hier nicht bestätigt. Die Kapazität einer Konstellation ist nicht mit einer Strecke von Punkt zu Punkt gleichzusetzen.",
    en: "Only the geometry is calculated: light in a vacuum, satellite exactly above the midpoint, Earth as a sphere. Processing, ground station and onward routing are missing. The calculation allows the satellite all the way down to the horizon. The fibre is calculated without any detour and with an approximate value for a typical standard fibre; real cable routes are longer. The example altitude of {tief} km stands for a low orbit; orbit altitudes of individual providers have not been confirmed here. The capacity of a constellation must not be equated with a point-to-point route.",
    tr: "Yalnızca geometri hesaplanır: boşlukta ışık, tam ortanın üzerinde uydu, küre biçiminde Dünya. İşleme, yer istasyonu ve sonraki iletim hesapta yoktur. Hesap, uydunun ufka kadar inmesine izin verir. Fiber, dolanmadan ve tipik bir standart fiber için yaklaşık bir değerle hesaplanmıştır; gerçek kablo yolları daha uzundur. Örnek yükseklik olan {tief} km alçak bir yörüngeyi temsil eder; tek tek sağlayıcıların yörünge yükseklikleri burada doğrulanmamıştır. Bir uydu takımyıldızının kapasitesi, noktadan noktaya bir hatla bir tutulamaz."
  }
});
