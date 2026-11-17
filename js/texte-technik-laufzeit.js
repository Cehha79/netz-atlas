// Texte des Bausteins „Laufzeit“ der Technikseite in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern setzt js/technik-laufzeit.js ein, Zahlen in der Schreibweise der Sprache.
window.NETZ_TEXTE_DAZU({
  "lz.start": { de: "Start", en: "From", tr: "Başlangıç" },
  "lz.ziel": { de: "Ziel", en: "To", tr: "Hedef" },

  "lz.stadtDubai": { de: "Dubai", en: "Dubai", tr: "Dubai" },
  "lz.stadtFrankfurt": { de: "Frankfurt", en: "Frankfurt", tr: "Frankfurt" },
  "lz.stadtIstanbul": { de: "Istanbul", en: "Istanbul", tr: "İstanbul" },
  "lz.stadtLagos": { de: "Lagos", en: "Lagos", tr: "Lagos" },
  "lz.stadtLondon": { de: "London", en: "London", tr: "Londra" },
  "lz.stadtLosAngeles": { de: "Los Angeles", en: "Los Angeles", tr: "Los Angeles" },
  "lz.stadtMumbai": { de: "Mumbai", en: "Mumbai", tr: "Mumbai" },
  "lz.stadtNewYork": { de: "New York", en: "New York", tr: "New York" },
  "lz.stadtSaoPaulo": { de: "São Paulo", en: "São Paulo", tr: "São Paulo" },
  "lz.stadtSingapur": { de: "Singapur", en: "Singapore", tr: "Singapur" },
  "lz.stadtSydney": { de: "Sydney", en: "Sydney", tr: "Sidney" },
  "lz.stadtTokio": { de: "Tokio", en: "Tokyo", tr: "Tokyo" },

  "lz.faktor": { de: "Umwegfaktor des Kabelwegs", en: "Detour factor of the cable route", tr: "Kablo yolunun uzama katsayısı" },
  "lz.medium": { de: "Medium", en: "Medium", tr: "Ortam" },
  "lz.faser": { de: "Glasfaser", en: "Fibre", tr: "Fiber" },
  "lz.vakuum": { de: "Vakuum", en: "Vacuum", tr: "Vakum" },
  "lz.richtung": { de: "Richtung", en: "Direction", tr: "Yön" },
  "lz.hinrueck": { de: "Hin und zurück", en: "Round trip", tr: "Gidiş dönüş" },
  "lz.einfach": { de: "Einfacher Weg", en: "One way", tr: "Tek yön" },

  "lz.erkGlasTitel": { de: "Warum Licht in Glas langsamer ist", en: "Why light is slower in glass", tr: "Işık camda neden daha yavaş" },
  "lz.erkGlasText": {
    de: "Im Vakuum legt Licht {c} km je Sekunde zurück. Glas bremst es: In einer typischen Standardfaser sind es rund {v} km je Sekunde, etwa zwei Drittel davon. Je {tausend} km Faser vergehen so rund {je} ms in eine Richtung.",
    en: "In a vacuum light travels {c} km per second. Glass slows it down: in a typical standard fibre it covers about {v} km per second, roughly two thirds of that. Every {tausend} km of fibre therefore takes about {je} ms in one direction.",
    tr: "Işık boşlukta saniyede {c} km yol alır. Cam onu yavaşlatır: tipik bir standart fiberde saniyede yaklaşık {v} km, yani bunun kabaca üçte ikisi kadar yol alır. Böylece her {tausend} km fiber tek yönde yaklaşık {je} ms sürer."
  },
  "lz.erkWegTitel": { de: "Warum echte Laufzeiten höher sind", en: "Why real latency is higher", tr: "Gerçek süreler neden daha uzun" },
  "lz.erkWegText": {
    de: "Kabel folgen nicht der Luftlinie. Sie liegen dort, wo man sie verlegen kann, und machen Umwege. Dazu kommt die Zeit in den Geräten unterwegs. Eine Messstudie von 2017 fand: Die kleinste Ping-Zeit war im Median {ping}-mal so lang wie die Laufzeit von Licht im Vakuum auf der Luftlinie. In drei Forschungsnetzen ergab allein der Faserweg im Median das {von}- bis {bis}-Fache.",
    en: "Cables do not follow the great-circle line. They run where they can be laid and take detours. On top of that comes the time spent in the devices along the way. A measurement study from 2017 found: the smallest ping time was, in the median, {ping} times as long as light in a vacuum needs along the great-circle line. In three research networks the fibre route alone amounted to {von} to {bis} times that in the median.",
    tr: "Kablolar kuş uçuşu hattı izlemez. Döşenebildikleri yerden geçer ve yolu uzatırlar. Buna yol üzerindeki cihazlarda geçen süre eklenir. 2017 tarihli bir ölçüm çalışmasına göre en küçük PING süresi, ortanca değerde, ışığın boşlukta kuş uçuşu hat boyunca harcadığı sürenin {ping} katıydı. Üç araştırma ağında yalnızca fiber yolu, ortanca değerde bu sürenin {von} ile {bis} katını buluyordu."
  },
  "lz.erkPingTitel": { de: "Was Ping misst", en: "What ping measures", tr: "PING neyi ölçer" },
  "lz.erkPingText": {
    de: "Ping schickt ein kleines Paket zum Ziel und stoppt die Zeit, bis die Antwort zurück ist. Gemessen wird also der Hin- und Rückweg zusammen, nicht die einfache Laufzeit. Mehr Bandbreite ändert daran nichts: Sie bestimmt, wie viel gleichzeitig durch die Leitung passt, nicht wie schnell das Licht ist.",
    en: "Ping sends a small packet to the destination and times how long the reply takes to come back. So it measures the way there and back together, not the one-way delay. More bandwidth does not change this: it determines how much fits through the line at once, not how fast light travels.",
    tr: "PING hedefe küçük bir paket gönderir ve yanıt dönene kadar geçen süreyi ölçer. Yani tek yönlü süreyi değil, gidiş ile dönüşü birlikte ölçer. Daha fazla bant genişliği bunu değiştirmez: bant genişliği hattan aynı anda ne kadar veri geçtiğini belirler, ışığın hızını değil."
  },

  "lz.grossHinrueck": { de: "Laufzeit hin und zurück", en: "Round-trip time", tr: "Gidiş dönüş süresi" },
  "lz.grossEinfach": { de: "Laufzeit in eine Richtung", en: "One-way delay", tr: "Tek yönlü süre" },
  "lz.ms": { de: "ms", en: "ms", tr: "ms" },
  "lz.wertMs": { de: "{z} ms", en: "{z} ms", tr: "{z} ms" },
  "lz.wertKm": { de: "{z} km", en: "{z} km", tr: "{z} km" },
  "lz.wertKmMs": { de: "{z} km/ms", en: "{z} km/ms", tr: "{z} km/ms" },
  "lz.wertFach": { de: "{z}-fach", en: "× {z}", tr: "{z} kat" },
  "lz.wertAbweichung": { de: "{ms} ms ({vz}{p} %)", en: "{ms} ms ({vz}{p}%)", tr: "{ms} ms ({vz}%{p})" },

  "lz.bildLuft": { de: "Luftlinie {km} km", en: "Great circle {km} km", tr: "Kuş uçuşu {km} km" },
  "lz.bildKabel": { de: "Angenommener Kabelweg {km} km", en: "Assumed cable route {km} km", tr: "Varsayılan kablo yolu {km} km" },
  "lz.bildLabel": {
    de: "Von {start} nach {ziel}: Luftlinie {luft} km, angenommener Kabelweg {kabel} km, Laufzeit {ms} ms.",
    en: "From {start} to {ziel}: great-circle distance {luft} km, assumed cable route {kabel} km, delay {ms} ms.",
    tr: "{start} ile {ziel} arası: kuş uçuşu {luft} km, varsayılan kablo yolu {kabel} km, süre {ms} ms."
  },
  "lz.bildVermerk": {
    de: "Veranschaulichung: Die Zickzacklinie ist genau um den Umwegfaktor länger als die gerade Linie. Sie zeigt keinen echten Kabelverlauf.",
    en: "Illustration: the zigzag line is longer than the straight line by exactly the detour factor. It does not show a real cable route.",
    tr: "Örnekleme: zikzak çizginin uzunluğu, düz çizginin tam uzama katsayısı katıdır. Gerçek bir kablo güzergâhını göstermez."
  },

  "lz.zLuft": { de: "Luftlinie", en: "Great-circle distance", tr: "Kuş uçuşu mesafe" },
  "lz.zKabel": { de: "Angenommener Kabelweg", en: "Assumed cable route", tr: "Varsayılan kablo yolu" },
  "lz.zTempo": { de: "Geschwindigkeit", en: "Speed", tr: "Hız" },
  "lz.zVielfach": { de: "Gegenüber Licht im Vakuum auf der Luftlinie", en: "Compared with light in a vacuum on the great circle", tr: "Boşlukta kuş uçuşu giden ışığa göre" },
  "lz.vermerk": {
    de: "Näherung: Die Erde ist als Kugel mit {r} km Radius gerechnet, jede Stadt als Punkt in der Stadtmitte. Die Geschwindigkeit in Glasfaser ist ein Näherungswert für eine typische Standardfaser. Der Umwegfaktor ist eine Annahme.",
    en: "Approximation: the Earth is calculated as a sphere with a radius of {r} km, each city as a point at its centre. The speed in fibre is an approximate value for a typical standard fibre. The detour factor is an assumption.",
    tr: "Yaklaşık değer: Dünya {r} km yarıçaplı bir küre, her şehir de merkezindeki bir nokta olarak hesaplanmıştır. Fiberdeki hız, tipik bir standart fiber için yaklaşık bir değerdir. Uzama katsayısı bir varsayımdır."
  },

  "lz.regelTitel": { de: "Faustregeln im Vergleich", en: "Rules of thumb compared", tr: "Pratik kuralların karşılaştırması" },
  "lz.regelSpalte": { de: "Regel", en: "Rule", tr: "Kural" },
  "lz.regelTempo": { de: "Entspricht", en: "Equals", tr: "Karşılığı" },
  "lz.regelErgebnis": { de: "Ergebnis", en: "Result", tr: "Sonuç" },
  "lz.regelSeite": { de: "Diese Seite, Glasfaser (Näherungswert)", en: "This page, fibre (approximate value)", tr: "Bu sayfa, fiber (yaklaşık değer)" },
  "lz.regelZweiDrittel": { de: "„2/3 der Lichtgeschwindigkeit“", en: "“2/3 of the speed of light”", tr: "“Işık hızının 2/3’ü”" },
  "lz.regelZweihundert": { de: "„200 km je Millisekunde“", en: "“200 km per millisecond”", tr: "“Milisaniyede 200 km”" },
  "lz.regelHundert": { de: "„1 ms hin und zurück je 100 km Faser“", en: "“1 ms round trip per 100 km of fibre”", tr: "“Her 100 km fiber için gidiş dönüş 1 ms”" },
  "lz.regelHinweisHinrueck": {
    de: "Die Regeln gelten für Glasfaser und für die Länge des Kabels, nicht für die Luftlinie. Gerechnet für {kabel} km Kabelweg, hin und zurück.",
    en: "The rules apply to fibre and to the length of the cable, not to the great-circle distance. Calculated for {kabel} km of cable route, there and back.",
    tr: "Kurallar fiber ve kablonun uzunluğu için geçerlidir, kuş uçuşu mesafe için değil. {kabel} km kablo yolu için gidiş dönüş hesaplanmıştır."
  },
  "lz.regelHinweisEinfach": {
    de: "Die Regeln gelten für Glasfaser und für die Länge des Kabels, nicht für die Luftlinie. Gerechnet für {kabel} km Kabelweg, in eine Richtung.",
    en: "The rules apply to fibre and to the length of the cable, not to the great-circle distance. Calculated for {kabel} km of cable route, in one direction.",
    tr: "Kurallar fiber ve kablonun uzunluğu için geçerlidir, kuş uçuşu mesafe için değil. {kabel} km kablo yolu için tek yön hesaplanmıştır."
  },

  "lz.messTitel": { de: "Gemessen in einem Betreibernetz", en: "Measured in an operator network", tr: "Bir işletmeci ağında ölçülen değerler" },
  "lz.messStrecke": { de: "Strecke", en: "Route", tr: "Güzergâh" },
  "lz.messWert": { de: "Hin und zurück", en: "Round trip", tr: "Gidiş dönüş" },
  "lz.messAtlantik": { de: "Transatlantik (London und New York)", en: "Transatlantic (London and New York)", tr: "Atlantik ötesi (Londra ve New York)" },
  "lz.messEuropa": { de: "Innerhalb Europas", en: "Within Europe", tr: "Avrupa içinde" },
  "lz.messNordamerika": { de: "Innerhalb Nordamerikas", en: "Within North America", tr: "Kuzey Amerika içinde" },
  "lz.messPazifik": { de: "Transpazifik", en: "Transpacific", tr: "Pasifik ötesi" },
  "lz.messHinweis": {
    de: "Monatsmittel für {monat}, vom Betreiber Verizon mit Ping zwischen ausgewählten Routern des eigenen Netzes gemessen. Zum Vergleich die Rechnung dieser Seite: Zwischen London und New York braucht Licht in Glasfaser auf der Luftlinie hin und zurück {ms} ms.",
    en: "Monthly average for {monat}, measured by the operator Verizon using ping between selected routers of its own network. For comparison, the calculation on this page: between London and New York light in fibre needs {ms} ms there and back along the great-circle line.",
    tr: "{monat} ayı ortalaması; işletmeci Verizon tarafından kendi ağındaki seçilmiş yönlendiriciler arasında PING ile ölçülmüştür. Karşılaştırma için bu sayfanın hesabı: Londra ile New York arasında ışık, fiberde kuş uçuşu hat üzerinden gidiş dönüş {ms} ms harcar."
  },

  "lz.grenze": {
    de: "Der Umwegfaktor ist eine Annahme, kein Messwert der gewählten Strecke. Die Zeit in Geräten und Warteschlangen und der Weg bis zum Hausanschluss fehlen. Die Geschwindigkeit in Glasfaser ist eine Näherung für eine typische Standardfaser. Sie hängt von Fasertyp und Wellenlänge ab, und die Brechzahl dahinter ist hier nicht an einem Datenblatt bestätigt. Die Luftlinie ist auf einer Kugel gerechnet, jede Stadt ist ein Punkt. Die gemessenen Werte stammen aus einem einzigen Betreibernetz.",
    en: "The detour factor is an assumption, not a measured value for the chosen route. The time spent in devices and queues and the way to the home connection are missing. The speed in fibre is an approximation for a typical standard fibre. It depends on fibre type and wavelength, and the refractive index behind it has not been confirmed against a data sheet here. The great-circle distance is calculated on a sphere, and each city is a point. The measured values come from a single operator network.",
    tr: "Uzama katsayısı bir varsayımdır, seçilen güzergâhın ölçülmüş değeri değildir. Cihazlarda ve kuyruklarda geçen süre ile ev bağlantısına kadar olan yol hesapta yoktur. Fiberdeki hız, tipik bir standart fiber için yaklaşık bir değerdir. Fiber türüne ve dalga boyuna bağlıdır; arkasındaki kırılma indisi burada bir veri föyünden doğrulanmamıştır. Kuş uçuşu mesafe bir küre üzerinde hesaplanmıştır, her şehir bir noktadır. Ölçülen değerler tek bir işletmeci ağından gelir."
  }
});
