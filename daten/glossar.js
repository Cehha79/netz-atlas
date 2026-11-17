// Glossar: Fachbegriffe der Website in Deutsch, Englisch und Türkisch. Von Hand gepflegt.
// „siehe“ ist wahlweise und nennt die Kennungen verwandter Begriffe aus dieser Liste.
window.NETZ_GLOSSAR = [
  {
    id: "anlandeort", siehe: ["landestation", "seekabel", "engstelle"],
    begriff: { de: "Anlandeort", en: "Landing place", tr: "Karaya çıkış yeri" },
    text: {
      de: "Der Ort an der Küste, an dem ein Seekabel das Meer verlässt. Vom Strand führt es meist unterirdisch weiter zur Landestation.",
      en: "The place on the coast where a submarine cable leaves the sea, also called a landing point. From the beach it usually continues underground to the landing station.",
      tr: "Bir denizaltı kablosunun denizden çıktığı kıyıdaki yer. Kablo sahilden sonra çoğunlukla yer altından kablo iniş istasyonuna devam eder."
    }
  },
  {
    id: "anycast", siehe: ["root-server", "bgp", "cdn"],
    begriff: { de: "Anycast", en: "Anycast", tr: "Anycast" },
    text: {
      de: "Eine einzige Adresse wird an vielen Standorten zugleich angeboten. Welcher Standort eine Anfrage beantwortet, entscheidet das Routing; meist ist es ein naher. So arbeiten zum Beispiel die Root-Server des DNS.",
      en: "A single address is offered at many locations at once. Routing decides which location answers a request; usually it is a nearby one. The root servers of the DNS work this way, for example.",
      tr: "Tek bir adres aynı anda birçok yerde sunulur. Bir isteği hangi yerin yanıtlayacağını yönlendirme belirler; çoğu zaman bu yakın bir yerdir. Örneğin DNS'in kök sunucuları böyle çalışır."
    }
  },
  {
    id: "auslegungskapazitaet", siehe: ["faserpaar", "wdm", "bit-pro-sekunde"],
    begriff: { de: "Auslegungskapazität", en: "Design capacity", tr: "Tasarım kapasitesi" },
    text: {
      de: "Die Datenrate, die ein Kabel höchstens tragen kann, wenn es vollständig mit Technik bestückt ist. Sie ist eine Angabe der Planer und Betreiber; wie viel davon tatsächlich geschaltet und genutzt ist, sagt sie nicht.",
      en: "The highest data rate a cable can carry when it is fully equipped. It is a figure given by planners and operators; it does not say how much of it is actually lit and in use.",
      tr: "Bir kablonun, tüm donanımı takıldığında en fazla taşıyabileceği veri hızı. Planlayıcıların ve işletmecilerin verdiği bir değerdir; bunun ne kadarının gerçekten devrede ve kullanımda olduğunu göstermez."
    }
  },
  {
    id: "autonomes-system", siehe: ["bgp", "praefix", "peering"],
    begriff: { de: "Autonomes System (AS)", en: "Autonomous system (AS)", tr: "Otonom sistem (AS)" },
    text: {
      de: "Ein Netz oder ein Verbund von Netzen unter einer gemeinsamen Verwaltung, etwa das Netz eines Anbieters, einer Hochschule oder eines großen Unternehmens. Jedes hat eine eigene Nummer (ASN), unter der es im weltweiten Routing auftritt.",
      en: "A network or group of networks under one administration, such as the network of a provider, a university or a large company. Each has its own number (ASN) under which it appears in worldwide routing.",
      tr: "Tek bir yönetim altındaki ağ ya da ağlar topluluğu; örneğin bir internet sağlayıcısının, bir üniversitenin ya da büyük bir şirketin ağı. Her birinin, dünya çapındaki yönlendirmede kullandığı kendi numarası (ASN) vardır."
    }
  },
  {
    id: "backbone", siehe: ["glasfaser", "seekabel", "transit"],
    begriff: { de: "Backbone", en: "Backbone", tr: "Omurga ağı (backbone)" },
    text: {
      de: "Das Fernverkehrsnetz eines Betreibers: leistungsstarke Leitungen, die Städte, Länder und Kontinente verbinden. Vergleichbar mit den Autobahnen im Straßennetz.",
      en: "The long-distance network of an operator: high-capacity lines that connect cities, countries and continents. Comparable to the motorways in a road network.",
      tr: "Bir işletmecinin uzak mesafe ağı: şehirleri, ülkeleri ve kıtaları birbirine bağlayan yüksek kapasiteli hatlar. Kara yolu ağındaki otoyollara benzer."
    }
  },
  {
    id: "bandbreite", siehe: ["bit-pro-sekunde", "latenz"],
    begriff: { de: "Bandbreite", en: "Bandwidth", tr: "Bant genişliği" },
    text: {
      de: "Die Datenmenge, die eine Leitung je Sekunde höchstens übertragen kann. Sie gleicht der Zahl der Fahrspuren einer Straße: Mehr Spuren lassen mehr Autos durch, aber kein Auto kommt deshalb schneller ans Ziel.",
      en: "The largest amount of data a line can carry per second. It resembles the number of lanes on a road: more lanes let more cars through, but no car reaches its destination faster because of them.",
      tr: "Bir hattın saniyede en fazla taşıyabildiği veri miktarı. Bir yolun şerit sayısına benzer: Daha çok şerit daha çok aracın geçmesini sağlar, ama hiçbir araç bu yüzden hedefe daha hızlı varmaz."
    }
  },
  {
    id: "bgp", siehe: ["autonomes-system", "praefix", "routenleck", "praefix-kapern"],
    begriff: { de: "BGP", en: "BGP", tr: "BGP" },
    text: {
      de: "Border Gateway Protocol: das Verfahren, mit dem autonome Systeme einander mitteilen, welche Adressblöcke über sie erreichbar sind. Aus diesen Meldungen wählt jedes Netz seine Wege nach eigenen Regeln. Eine zentrale Leitstelle gibt es nicht.",
      en: "Border Gateway Protocol: the method by which autonomous systems tell each other which address blocks can be reached through them. From these announcements each network chooses its routes by its own rules. There is no central control.",
      tr: "Border Gateway Protocol: Otonom sistemlerin, hangi adres bloklarına kendileri üzerinden ulaşılabildiğini birbirine bildirdiği yöntem. Her ağ bu bildirimlerden yollarını kendi kurallarına göre seçer. Merkezi bir yönetim yoktur."
    }
  },
  {
    id: "bit-pro-sekunde", siehe: ["bandbreite", "auslegungskapazitaet"],
    begriff: { de: "Bit/s (Mbit/s, Gbit/s, Tbit/s)", en: "bit/s (Mbit/s, Gbit/s, Tbit/s)", tr: "bit/s (Mbit/s, Gbit/s, Tbit/s)" },
    text: {
      de: "Maß für die Datenrate: wie viele Bit je Sekunde übertragen werden. Die Vorsilben Mega, Giga und Tera stehen für Million, Milliarde und Billion. Ein Byte hat acht Bit; 8 Mbit/s entsprechen deshalb einem Megabyte je Sekunde.",
      en: "The measure of data rate: how many bits are transmitted per second. The prefixes mega, giga and tera stand for million, billion and trillion. A byte has eight bits, so 8 Mbit/s equal one megabyte per second.",
      tr: "Veri hızının ölçüsü: saniyede kaç bit iletildiği. Mega, giga ve tera ön ekleri milyon, milyar ve trilyon anlamına gelir. Bir bayt sekiz bittir; bu yüzden 8 Mbit/s saniyede bir megabayta karşılık gelir."
    }
  },
  {
    id: "brechungsindex", siehe: ["glasfaser", "latenz"],
    begriff: { de: "Brechungsindex", en: "Refractive index", tr: "Kırılma indisi" },
    text: {
      de: "Zahl, die angibt, wie stark ein Stoff das Licht bremst. In Glasfaser liegt sie bei knapp 1,5; das Licht ist dort also nur etwa zwei Drittel so schnell wie im leeren Raum.",
      en: "A number that states how much a material slows light down. In optical fibre it is just under 1.5, so light travels there at only about two thirds of its speed in empty space.",
      tr: "Bir maddenin ışığı ne kadar yavaşlattığını gösteren sayı. Optik fiberde 1,5'e yakındır; ışık orada boşluktaki hızının yalnızca yaklaşık üçte ikisiyle ilerler."
    }
  },
  {
    id: "cdn", siehe: ["rechenzentrum", "latenz", "anycast"],
    begriff: { de: "CDN", en: "CDN", tr: "CDN" },
    text: {
      de: "Content Delivery Network: ein Verbund von Servern an vielen Orten, die Kopien von Inhalten nahe bei den Nutzern bereithalten. Das verkürzt die Wege, entlastet die Fernleitungen und hilft, wenn ein Standort ausfällt.",
      en: "Content delivery network: a group of servers in many places that keep copies of content close to the users. This shortens the paths, relieves the long-distance lines and helps when one site fails.",
      tr: "Content Delivery Network (içerik dağıtım ağı): İçeriklerin kopyalarını kullanıcılara yakın tutan, birçok yere dağılmış sunucular topluluğu. Yolları kısaltır, uzak mesafe hatlarının yükünü azaltır ve bir yer devre dışı kaldığında yardımcı olur."
    }
  },
  {
    id: "daempfung", siehe: ["repeater", "verstaerkerabstand", "glasfaser"],
    begriff: { de: "Dämpfung (dB/km)", en: "Attenuation (dB/km)", tr: "Zayıflama (dB/km)" },
    text: {
      de: "Der Verlust an Lichtstärke auf dem Weg durch die Faser, gemessen in Dezibel je Kilometer. Weil das Signal mit jedem Kilometer schwächer wird, braucht ein langes Kabel Verstärker.",
      en: "The loss of light power on the way through the fibre, measured in decibels per kilometre. Because the signal weakens with every kilometre, a long cable needs repeaters.",
      tr: "Işığın fiber boyunca yol alırken uğradığı güç kaybı; kilometre başına desibel olarak ölçülür. Sinyal her kilometrede zayıfladığı için uzun bir kablonun yineleyicilere ihtiyacı vardır."
    }
  },
  {
    id: "dns", siehe: ["resolver", "root-server", "ip-adresse", "ttl"],
    begriff: { de: "DNS", en: "DNS", tr: "DNS" },
    text: {
      de: "Domain Name System: das weltweit verteilte Verzeichnis, das zu einem Namen wie example.org die zugehörige IP-Adresse liefert. Es arbeitet wie ein Telefonbuch, das auf viele Auskunftsstellen verteilt ist.",
      en: "Domain Name System: the worldwide distributed directory that returns the IP address belonging to a name such as example.org. It works like a phone book spread across many enquiry desks.",
      tr: "Domain Name System (alan adı sistemi): example.org gibi bir ada karşılık gelen IP adresini veren, dünyaya dağılmış dizin. Birçok danışma noktasına dağıtılmış bir telefon rehberi gibi çalışır."
    }
  },
  {
    id: "engstelle", siehe: ["seekabel", "anlandeort", "kabelschiff"],
    begriff: { de: "Engstelle", en: "Chokepoint", tr: "Dar geçit" },
    text: {
      de: "Eine Meerenge oder ein schmaler Korridor, durch den viele Seekabel dicht nebeneinander laufen. Ein einzelnes Ereignis, etwa ein schleifender Anker oder ein Seebeben, kann dort mehrere Kabel zugleich treffen.",
      en: "A strait or narrow corridor through which many submarine cables run close together. A single event there, such as a dragging anchor or a seaquake, can hit several cables at once.",
      tr: "Çok sayıda denizaltı kablosunun yan yana geçtiği boğaz ya da dar koridor. Sürüklenen bir çapa ya da deniz depremi gibi tek bir olay orada aynı anda birkaç kabloyu etkileyebilir."
    }
  },
  {
    id: "faserpaar", siehe: ["glasfaser", "auslegungskapazitaet", "wdm"],
    begriff: { de: "Faserpaar", en: "Fibre pair", tr: "Fiber çifti" },
    text: {
      de: "Zwei Glasfasern, die zusammengehören: eine für jede Richtung. Die Kapazität eines Seekabels wird meist je Faserpaar angegeben und über alle Paare zusammengezählt.",
      en: "Two optical fibres that belong together: one for each direction. The capacity of a submarine cable is usually stated per fibre pair and added up over all pairs.",
      tr: "Birbirine ait iki fiber: her yön için bir tane. Bir denizaltı kablosunun kapasitesi çoğunlukla fiber çifti başına verilir ve tüm çiftler için toplanır."
    }
  },
  {
    id: "glasfaser", siehe: ["brechungsindex", "daempfung", "faserpaar"],
    begriff: { de: "Glasfaser", en: "Optical fibre", tr: "Optik fiber" },
    text: {
      de: "Ein haardünner Faden aus sehr reinem Glas, der Lichtimpulse leitet. Das Licht bleibt im Kern, weil es an dessen Rand immer wieder zurückgeworfen wird. Fast alle Fernverbindungen des Internets laufen über Glasfaser.",
      en: "A hair-thin strand of very pure glass that carries pulses of light. The light stays in the core because it is reflected back again and again at its edge. Almost all long-distance links of the internet run over optical fibre.",
      tr: "Işık darbelerini ileten, saç teli inceliğinde, çok saf camdan bir tel. Işık, çekirdeğin kenarından tekrar tekrar geri yansıdığı için çekirdekte kalır. İnternetin uzak mesafe bağlantılarının neredeyse tamamı optik fiber üzerinden geçer."
    }
  },
  {
    id: "hop", siehe: ["router", "traceroute", "ttl"],
    begriff: { de: "Hop", en: "Hop", tr: "Atlama (hop)" },
    text: {
      de: "Ein Schritt eines Pakets von einem Router zum nächsten. Der Weg zu einem Ziel besteht aus einer Folge solcher Schritte. Ein Hop ist nicht dasselbe wie ein Ort: Zwei Router können im selben Gebäude stehen oder einen Ozean auseinander.",
      en: "One step of a packet from one router to the next. The path to a destination consists of a series of such steps. A hop is not the same as a place: two routers can stand in the same building or an ocean apart.",
      tr: "Bir paketin bir yönlendiriciden sonrakine attığı adım. Bir hedefe giden yol bu adımların dizisinden oluşur. Bir atlama bir yer demek değildir: İki yönlendirici aynı binada da olabilir, aralarında bir okyanus da olabilir."
    }
  },
  {
    id: "ip-adresse", siehe: ["ipv4-ipv6", "paket", "praefix", "dns"],
    begriff: { de: "IP-Adresse", en: "IP address", tr: "IP adresi" },
    text: {
      de: "Die Anschrift eines Geräts oder Anschlusses im Internet. Jedes Paket trägt die Adresse des Absenders und die des Ziels, so wie ein Brief.",
      en: "The address of a device or connection on the internet. Every packet carries the address of the sender and of the destination, like a letter.",
      tr: "Bir cihazın ya da bağlantının internetteki adresi. Her paket, bir mektup gibi, gönderenin ve hedefin adresini taşır."
    }
  },
  {
    id: "ipv4-ipv6", siehe: ["ip-adresse", "praefix"],
    begriff: { de: "IPv4 / IPv6", en: "IPv4 / IPv6", tr: "IPv4 / IPv6" },
    text: {
      de: "Die ältere und die neuere Form der IP-Adresse. IPv4-Adressen sind 32 Bit lang und längst knapp; IPv6-Adressen sind 128 Bit lang und reichen praktisch unbegrenzt. Beide Formen laufen heute nebeneinander.",
      en: "The older and the newer form of the IP address. IPv4 addresses are 32 bits long and have long been scarce; IPv6 addresses are 128 bits long and practically inexhaustible. Both forms run side by side today.",
      tr: "IP adresinin eski ve yeni biçimi. IPv4 adresleri 32 bit uzunluğundadır ve çoktandır yetmemektedir; IPv6 adresleri 128 bit uzunluğundadır ve pratikte tükenmez. Bugün iki biçim yan yana kullanılır."
    }
  },
  {
    id: "isp", siehe: ["autonomes-system", "transit", "peering"],
    begriff: { de: "ISP (Internetanbieter)", en: "ISP (internet service provider)", tr: "İSS (internet servis sağlayıcı)" },
    text: {
      de: "Internet Service Provider: das Unternehmen, das Haushalte und Firmen an das Internet anschließt. Sein Netz ist das erste, das ein Paket auf dem Weg nach draußen durchquert.",
      en: "Internet service provider: the company that connects homes and businesses to the internet. Its network is the first one a packet crosses on its way out.",
      tr: "Evleri ve iş yerlerini internete bağlayan şirket; İngilizce kısaltması ISP'dir. Onun ağı, bir paketin dışarıya giderken geçtiği ilk ağdır."
    }
  },
  {
    id: "ixp", siehe: ["peering", "transit", "rechenzentrum"],
    begriff: { de: "IXP (Internet-Knoten)", en: "IXP (internet exchange point)", tr: "IXP (internet değişim noktası)" },
    text: {
      de: "Internet Exchange Point: ein Ort, an dem viele Netze ihre Daten direkt untereinander austauschen, meist über gemeinsame Switches in Rechenzentren. Örtlicher Verkehr bleibt so in der Region und muss keinen Umweg über ferne Netze nehmen. Ein IXP ist selbst kein Internetanbieter.",
      en: "Internet exchange point: a place where many networks exchange data directly with each other, usually through shared switches in data centres. Local traffic stays in the region and does not have to detour through distant networks. An IXP itself is not an internet provider.",
      tr: "Internet Exchange Point: Birçok ağın verilerini doğrudan birbiriyle değiş tokuş ettiği yer; çoğunlukla veri merkezlerindeki ortak anahtarlar üzerinden. Yerel trafik böylece bölgede kalır ve uzak ağlar üzerinden dolaşmak zorunda kalmaz. Bir IXP'nin kendisi internet sağlayıcısı değildir."
    }
  },
  {
    id: "kabelschiff", siehe: ["seekabel", "repeater", "engstelle"],
    begriff: { de: "Kabelschiff", en: "Cable ship", tr: "Kablo gemisi" },
    text: {
      de: "Ein Spezialschiff, das Seekabel verlegt oder repariert. Für eine Reparatur holt es die beschädigten Enden vom Meeresboden an Deck und fügt ein neues Stück ein.",
      en: "A special ship that lays or repairs submarine cables. For a repair it lifts the damaged ends from the seabed onto the deck and splices in a new section.",
      tr: "Denizaltı kablolarını döşeyen ya da onaran özel gemi. Onarım için hasarlı uçları deniz tabanından güverteye çeker ve araya yeni bir parça ekler."
    }
  },
  {
    id: "landestation", siehe: ["anlandeort", "seekabel", "repeater"],
    begriff: { de: "Landestation", en: "Cable landing station", tr: "Kablo iniş istasyonu" },
    text: {
      de: "Das Gebäude nahe der Küste, in dem ein Seekabel endet. Dort stehen die Sende- und Empfangsgeräte und die Stromversorgung für die Verstärker, und dort geht das Kabel in die Netze an Land über.",
      en: "The building near the coast where a submarine cable ends. It houses the transmitting and receiving equipment and the power supply for the repeaters, and it is where the cable joins the networks on land.",
      tr: "Bir denizaltı kablosunun sona erdiği, kıyıya yakın bina. Gönderme ve alma cihazları ile yineleyicilerin güç kaynağı burada bulunur; kablo burada karadaki ağlara bağlanır."
    }
  },
  {
    id: "latenz", siehe: ["rtt", "ping", "brechungsindex", "bandbreite"],
    begriff: { de: "Latenz", en: "Latency", tr: "Gecikme" },
    text: {
      de: "Die Verzögerung zwischen dem Absenden und dem Ankommen von Daten, gemessen in Millisekunden. Auf weiten Strecken bestimmt vor allem die Länge des Wegs die Latenz, denn auch Licht in Glasfaser braucht Zeit.",
      en: "The delay between sending data and its arrival, measured in milliseconds. Over long distances it is mainly the length of the path that sets the latency, because even light in optical fibre takes time.",
      tr: "Verinin gönderilmesi ile ulaşması arasında geçen süre; milisaniye olarak ölçülür. Uzun mesafelerde gecikmeyi en çok yolun uzunluğu belirler, çünkü fiberdeki ışığın da zamana ihtiyacı vardır."
    }
  },
  {
    id: "leo-geo", siehe: ["latenz", "rtt"],
    begriff: { de: "LEO / GEO", en: "LEO / GEO", tr: "LEO / GEO" },
    text: {
      de: "Zwei Arten von Umlaufbahnen für Satelliten. LEO ist die niedrige Bahn in einigen hundert bis etwa 2.000 Kilometern Höhe; die Satelliten ziehen schnell über den Himmel. GEO ist die geostationäre Bahn in rund 36.000 Kilometern Höhe; der Satellit steht scheinbar still, das Signal braucht aber spürbar länger.",
      en: "Two kinds of orbit for satellites. LEO is the low orbit at a few hundred to about 2,000 kilometres above the ground; the satellites move quickly across the sky. GEO is the geostationary orbit at about 36,000 kilometres; the satellite seems to stand still, but the signal takes noticeably longer.",
      tr: "Uydular için iki yörünge türü. LEO, birkaç yüz kilometreden yaklaşık 2.000 kilometreye kadar olan alçak yörüngedir; uydular gökyüzünden hızla geçer. GEO, yaklaşık 36.000 kilometre yükseklikteki yer sabit yörüngedir; uydu yerinde duruyor gibi görünür, ama sinyalin yolu belirgin biçimde daha uzun sürer."
    }
  },
  {
    id: "paket", siehe: ["ip-adresse", "router", "paketverlust"],
    begriff: { de: "Paket", en: "Packet", tr: "Paket" },
    text: {
      de: "Ein kleines Stück Daten mit Absender- und Zieladresse. Jede Übertragung wird in viele Pakete zerlegt, die einzeln durch das Netz reisen und am Ziel wieder zusammengesetzt werden.",
      en: "A small piece of data with a sender address and a destination address. Every transmission is split into many packets that travel through the network individually and are put together again at the destination.",
      tr: "Gönderen ve hedef adresini taşıyan küçük bir veri parçası. Her aktarım, ağda ayrı ayrı yol alan ve hedefte yeniden birleştirilen birçok pakete bölünür."
    }
  },
  {
    id: "paketverlust", siehe: ["paket", "ping"],
    begriff: { de: "Paketverlust", en: "Packet loss", tr: "Paket kaybı" },
    text: {
      de: "Pakete, die unterwegs verloren gehen, zum Beispiel weil eine Leitung überlastet ist. Manche Anwendungen schicken sie neu, was Zeit kostet; bei Telefonaten und Spielen fehlen sie einfach, und es kommt zu Aussetzern.",
      en: "Packets that get lost on the way, for example because a line is overloaded. Some applications send them again, which costs time; in phone calls and games they are simply missing, which shows as dropouts.",
      tr: "Yolda kaybolan paketler; örneğin bir hat aşırı yüklendiğinde. Bazı uygulamalar bunları yeniden yollar, bu da zaman alır; telefon görüşmelerinde ve oyunlarda ise paketler eksik kalır ve kesintiler olur."
    }
  },
  {
    id: "peering", siehe: ["transit", "ixp", "autonomes-system"],
    begriff: { de: "Peering", en: "Peering", tr: "Peering" },
    text: {
      de: "Zwei Netze tauschen den Verkehr ihrer eigenen Kunden direkt miteinander aus, oft an einem Internet-Knoten. Meist geschieht das ohne gegenseitige Bezahlung, es gibt aber auch bezahltes Peering.",
      en: "Two networks exchange the traffic of their own customers directly with each other, often at an internet exchange point. Usually no money changes hands, but paid peering exists too.",
      tr: "İki ağ, kendi müşterilerinin trafiğini doğrudan birbiriyle değiş tokuş eder; çoğu zaman bir internet değişim noktasında. Genellikle karşılıklı ödeme yapılmaz, ama ücretli peering de vardır."
    }
  },
  {
    id: "ping", siehe: ["rtt", "latenz", "traceroute"],
    begriff: { de: "Ping", en: "Ping", tr: "Ping" },
    text: {
      de: "Ein Werkzeug, das eine kleine Anfrage an einen Rechner schickt und misst, wie lange die Antwort braucht. Das Ergebnis ist die Zeit für Hin- und Rückweg, nicht für eine Richtung.",
      en: "A tool that sends a small request to a computer and measures how long the reply takes. The result is the time for the way there and back, not for one direction.",
      tr: "Bir bilgisayara küçük bir istek gönderip yanıtın ne kadar sürede geldiğini ölçen araç. Sonuç tek yönün değil, gidiş ve dönüşün toplam süresidir."
    }
  },
  {
    id: "praefix", siehe: ["ip-adresse", "bgp", "praefix-kapern"],
    begriff: { de: "Präfix", en: "Prefix", tr: "Ön ek (prefix)" },
    text: {
      de: "Ein zusammenhängender Block von IP-Adressen, geschrieben als Anfangsadresse und Länge, etwa 192.0.2.0/24. Netze melden einander im Routing ganze Präfixe, nicht einzelne Adressen. Passen mehrere Präfixe auf ein Ziel, gilt der Weg des genauesten, also des kleinsten Blocks.",
      en: "A contiguous block of IP addresses, written as a start address and a length, for example 192.0.2.0/24. In routing, networks announce whole prefixes to each other, not single addresses. If several prefixes match a destination, the route of the most specific one, the smallest block, applies.",
      tr: "Başlangıç adresi ve uzunlukla yazılan, kesintisiz bir IP adresi bloğu; örneğin 192.0.2.0/24. Ağlar yönlendirmede birbirine tek tek adresleri değil, ön eklerin tamamını bildirir. Bir hedefe birden çok ön ek uyuyorsa en belirli olanın, yani en küçük bloğun yolu geçerlidir."
    }
  },
  {
    id: "praefix-kapern", siehe: ["bgp", "praefix", "routenleck", "rpki"],
    begriff: { de: "Präfix-Kapern (Hijack)", en: "Prefix hijack", tr: "Ön ek ele geçirme (hijack)" },
    text: {
      de: "Ein Netz meldet im Routing Adressblöcke als eigene an, die einem anderen gehören. Andere Netze schicken den Verkehr dann an die falsche Stelle. Das kann ein Angriff sein, aber auch ein Versehen.",
      en: "A network announces address blocks in routing as its own although they belong to someone else. Other networks then send the traffic to the wrong place. This can be an attack, but also a mistake.",
      tr: "Bir ağ, başkasına ait adres bloklarını yönlendirmede kendisininmiş gibi duyurur. Diğer ağlar trafiği o zaman yanlış yere gönderir. Bu bir saldırı olabilir, ama bir hata da olabilir."
    }
  },
  {
    id: "rechenzentrum", siehe: ["cdn", "ixp"],
    begriff: { de: "Rechenzentrum", en: "Data centre", tr: "Veri merkezi" },
    text: {
      de: "Ein Gebäude voller Server mit gesicherter Stromversorgung, Kühlung und vielen Netzanschlüssen. Hier liegen die Inhalte und Dienste, die oft „die Cloud“ genannt werden.",
      en: "A building full of servers with a secured power supply, cooling and many network connections. This is where the content and services often called “the cloud” are kept.",
      tr: "Güvenceli elektrik beslemesi, soğutması ve çok sayıda ağ bağlantısı olan, sunucularla dolu bina. Çoğu zaman “bulut” denen içerikler ve hizmetler burada durur."
    }
  },
  {
    id: "repeater", siehe: ["verstaerkerabstand", "daempfung", "landestation"],
    begriff: { de: "Repeater (Verstärker)", en: "Repeater", tr: "Yineleyici (repeater)" },
    text: {
      de: "Ein druckfestes Gehäuse im Seekabel, das das schwächer gewordene Lichtsignal wieder verstärkt. Heutige Repeater verstärken das Licht selbst, ohne es in Strom umzuwandeln. Den Strom dafür liefern die Landestationen über einen Leiter im Kabel.",
      en: "A pressure-resistant housing in a submarine cable that boosts the weakened light signal again. Today's repeaters amplify the light itself without converting it into electricity. The landing stations supply the power through a conductor in the cable.",
      tr: "Denizaltı kablosunda, zayıflamış ışık sinyalini yeniden güçlendiren, basınca dayanıklı gövde. Bugünkü yineleyiciler ışığı elektriğe çevirmeden doğrudan güçlendirir. Gereken elektriği kablo iniş istasyonları kablodaki bir iletken üzerinden sağlar."
    }
  },
  {
    id: "resolver", siehe: ["dns", "root-server", "ttl"],
    begriff: { de: "Resolver", en: "Resolver", tr: "Çözümleyici (resolver)" },
    text: {
      de: "Der Rechner, der für dich die Namensauflösung übernimmt, oft bei deinem Internetanbieter. Er fragt die zuständigen DNS-Server ab und merkt sich die Antworten eine Zeit lang, damit die nächste Anfrage schneller geht.",
      en: "The computer that handles name resolution for you, often at your internet provider. It queries the responsible DNS servers and remembers the answers for a while so that the next request is faster.",
      tr: "Ad çözümlemeyi senin yerine yapan bilgisayar; çoğu zaman internet sağlayıcındadır. Yetkili DNS sunucularına sorar ve bir sonraki istek daha hızlı yanıtlansın diye yanıtları bir süre aklında tutar."
    }
  },
  {
    id: "root-server", siehe: ["dns", "anycast", "resolver"],
    begriff: { de: "Root-Server", en: "Root server", tr: "Kök sunucu" },
    text: {
      de: "Die oberste Auskunft des DNS. Die Root-Server kennen nicht jede Adresse; sie verweisen nur auf die Server der Endungen wie .org oder .de. Es gibt 13 Namen, hinter denen dank Anycast sehr viele Standorte auf der ganzen Welt stehen.",
      en: "The top enquiry desk of the DNS. The root servers do not know every address; they only refer to the servers of endings such as .org or .uk. There are 13 names, and thanks to anycast a great many locations around the world stand behind them.",
      tr: "DNS'in en üst danışma noktası. Kök sunucular her adresi bilmez; yalnızca .org ya da .tr gibi uzantıların sunucularına yönlendirir. 13 ad vardır; Anycast sayesinde bunların ardında dünyanın her yerinde çok sayıda yer bulunur."
    }
  },
  {
    id: "routenleck", siehe: ["bgp", "praefix-kapern", "rpki"],
    begriff: { de: "Routenleck", en: "Route leak", tr: "Rota sızıntısı" },
    text: {
      de: "Ein Netz gibt gelernte Wege an Nachbarn weiter, für die sie nicht bestimmt waren. Der Verkehr nimmt dann einen Umweg über ein Netz, das dafür nicht ausgelegt ist, und staut sich oder geht verloren. Ursache ist meist ein Fehler in der Einstellung, kein Angriff.",
      en: "A network passes on routes it has learned to neighbours they were not meant for. Traffic then detours through a network that is not built for it and gets congested or lost. The cause is usually a configuration mistake, not an attack.",
      tr: "Bir ağ, öğrendiği yolları, bu yolların amaçlanmadığı komşulara iletir. Trafik o zaman buna uygun olmayan bir ağ üzerinden dolaşır, sıkışır ya da kaybolur. Neden çoğunlukla bir yapılandırma hatasıdır, saldırı değil."
    }
  },
  {
    id: "router", siehe: ["paket", "hop", "bgp"],
    begriff: { de: "Router", en: "Router", tr: "Yönlendirici (router)" },
    text: {
      de: "Ein Gerät, das Pakete von einem Netz ins nächste weiterleitet. Es liest die Zieladresse und entscheidet anhand seiner Routing-Tabelle, wohin das Paket als Nächstes geht, wie ein Verteilzentrum der Post.",
      en: "A device that forwards packets from one network to the next. It reads the destination address and uses its routing table to decide where the packet goes next, like a postal sorting centre.",
      tr: "Paketleri bir ağdan diğerine ileten cihaz. Hedef adresini okur ve yönlendirme tablosuna bakarak paketin bir sonraki adımda nereye gideceğine karar verir; postanın dağıtım merkezi gibi."
    }
  },
  {
    id: "rpki", siehe: ["bgp", "praefix-kapern", "autonomes-system"],
    begriff: { de: "RPKI", en: "RPKI", tr: "RPKI" },
    text: {
      de: "Resource Public Key Infrastructure: ein System aus digitalen Zertifikaten, mit dem der Inhaber eines Adressblocks festlegt, welches autonome System ihn im Routing anmelden darf. Andere Netze können falsche Anmeldungen damit erkennen und ablehnen.",
      en: "Resource Public Key Infrastructure: a system of digital certificates with which the holder of an address block states which autonomous system may announce it in routing. Other networks can use it to detect and reject false announcements.",
      tr: "Resource Public Key Infrastructure: Bir adres bloğunun sahibinin, bu bloğu yönlendirmede hangi otonom sistemin duyurabileceğini belirlediği dijital sertifika sistemi. Diğer ağlar yanlış duyuruları bununla fark edip reddedebilir."
    }
  },
  {
    id: "rtt", siehe: ["ping", "latenz", "traceroute"],
    begriff: { de: "RTT (Hin- und Rückweg)", en: "RTT (round-trip time)", tr: "RTT (gidiş-dönüş süresi)" },
    text: {
      de: "Round Trip Time: die Zeit, die ein Signal zum Ziel und wieder zurück braucht. Ping und Traceroute zeigen diesen Wert. Die einfache Laufzeit ist ungefähr die Hälfte, wenn Hin- und Rückweg gleich lang sind.",
      en: "Round-trip time: the time a signal needs to reach the destination and come back. Ping and traceroute show this value. The one-way time is roughly half of it if both directions are equally long.",
      tr: "Round Trip Time: Bir sinyalin hedefe gidip geri dönmesi için geçen süre. Ping ve Traceroute bu değeri gösterir. Gidiş ve dönüş yolu aynı uzunluktaysa tek yönün süresi bunun yaklaşık yarısıdır."
    }
  },
  {
    id: "seekabel", siehe: ["glasfaser", "repeater", "anlandeort", "kabelschiff"],
    begriff: { de: "Seekabel", en: "Submarine cable", tr: "Denizaltı kablosu" },
    text: {
      de: "Ein Glasfaserkabel auf dem Meeresboden, das Küsten und Kontinente verbindet. In der Tiefsee ist es kaum dicker als ein Gartenschlauch; nahe der Küste schützt eine Hülle aus Stahldrähten vor Ankern und Fischernetzen. Fast der gesamte Datenverkehr zwischen den Kontinenten läuft über Seekabel.",
      en: "A fibre-optic cable on the seabed that connects coasts and continents. In the deep sea it is hardly thicker than a garden hose; near the coast a sheath of steel wires protects it from anchors and fishing nets. Almost all data traffic between continents runs through submarine cables.",
      tr: "Kıyıları ve kıtaları birbirine bağlayan, deniz tabanındaki fiber optik kablo. Derin denizde bir bahçe hortumundan pek kalın değildir; kıyıya yakın yerlerde çelik tellerden bir kılıf onu çapalardan ve balık ağlarından korur. Kıtalar arası veri trafiğinin neredeyse tamamı denizaltı kablolarından geçer."
    }
  },
  {
    id: "traceroute", siehe: ["hop", "rtt", "ttl", "ping"],
    begriff: { de: "Traceroute", en: "Traceroute", tr: "Traceroute" },
    text: {
      de: "Ein Werkzeug, das die Router auf dem Weg zu einem Ziel der Reihe nach sichtbar macht und für jeden die Zeit für Hin- und Rückweg misst. Es zeigt nur den Hinweg und nur Router, die antworten; Seekabel und Verstärker sieht es nicht.",
      en: "A tool that reveals the routers on the way to a destination one after another and measures the round-trip time to each. It shows only the outbound path and only routers that reply; it does not see submarine cables or repeaters.",
      tr: "Bir hedefe giden yoldaki yönlendiricileri sırayla görünür kılan ve her biri için gidiş-dönüş süresini ölçen araç. Yalnızca gidiş yolunu ve yanıt veren yönlendiricileri gösterir; denizaltı kablolarını ve yineleyicileri görmez."
    }
  },
  {
    id: "transit", siehe: ["peering", "isp", "backbone"],
    begriff: { de: "Transit", en: "Transit", tr: "Transit" },
    text: {
      de: "Ein Netz bezahlt ein größeres dafür, dass es seine Daten in den Rest des Internets trägt und von dort annimmt. Transit ist der Gegenbegriff zum Peering, bei dem nur der Verkehr der beiden Partner und ihrer Kunden getauscht wird.",
      en: "A network pays a larger one to carry its data to the rest of the internet and to accept data from there. Transit is the counterpart of peering, in which only the traffic of the two partners and their customers is exchanged.",
      tr: "Bir ağ, verilerini internetin geri kalanına taşıması ve oradan gelenleri teslim etmesi için daha büyük bir ağa ödeme yapar. Transit, yalnızca iki tarafın ve müşterilerinin trafiğinin değiş tokuş edildiği peering'in karşıtıdır."
    }
  },
  {
    id: "ttl", siehe: ["dns", "resolver", "traceroute", "hop"],
    begriff: { de: "TTL", en: "TTL", tr: "TTL" },
    text: {
      de: "Time to Live, eine Lebensdauer. Im DNS sagt sie, wie viele Sekunden eine Antwort zwischengespeichert werden darf. Im IP-Paket ist sie ein Zähler, der bei jedem Router um eins sinkt; bei null wird das Paket verworfen, was Endlosschleifen verhindert und Traceroute erst möglich macht.",
      en: "Time to live. In the DNS it says for how many seconds an answer may be cached. In an IP packet it is a counter that drops by one at every router; at zero the packet is discarded, which prevents endless loops and makes traceroute possible.",
      tr: "Time to Live, yani yaşam süresi. DNS'te bir yanıtın kaç saniye önbellekte tutulabileceğini söyler. IP paketinde ise her yönlendiricide bir azalan sayaçtır; sıfıra inince paket atılır, bu da sonsuz döngüleri önler ve Traceroute'u mümkün kılar."
    }
  },
  {
    id: "verstaerkerabstand", siehe: ["repeater", "daempfung"],
    begriff: { de: "Verstärkerabstand", en: "Repeater spacing", tr: "Yineleyici aralığı" },
    text: {
      de: "Die Strecke zwischen zwei Verstärkern in einem Seekabel. Sie ist so gewählt, dass das Lichtsignal den nächsten Verstärker noch gut lesbar erreicht. Aus der Länge des Kabels und dem Abstand ergibt sich die Zahl der Verstärker.",
      en: "The distance between two repeaters in a submarine cable. It is chosen so that the light signal still reaches the next repeater clearly readable. Cable length and spacing together give the number of repeaters.",
      tr: "Bir denizaltı kablosunda iki yineleyici arasındaki mesafe. Işık sinyali bir sonraki yineleyiciye hâlâ iyi okunur biçimde ulaşacak şekilde seçilir. Kablonun uzunluğu ve bu aralık, yineleyici sayısını belirler."
    }
  },
  {
    id: "wdm", siehe: ["glasfaser", "faserpaar", "auslegungskapazitaet"],
    begriff: { de: "Wellenlängenmultiplex (WDM)", en: "Wavelength-division multiplexing (WDM)", tr: "Dalga boyu bölmeli çoğullama (WDM)" },
    text: {
      de: "Viele Lichtsignale mit leicht verschiedenen Wellenlängen, also Farben, laufen gleichzeitig durch dieselbe Faser. Jede Farbe trägt einen eigenen Datenstrom; so vervielfacht sich die Kapazität einer einzigen Faser.",
      en: "Many light signals with slightly different wavelengths, that is colours, travel through the same fibre at the same time. Each colour carries its own data stream, which multiplies the capacity of a single fibre.",
      tr: "Dalga boyları, yani renkleri birbirinden biraz farklı birçok ışık sinyali aynı fiberden aynı anda geçer. Her renk ayrı bir veri akışı taşır; böylece tek bir fiberin kapasitesi katlanır."
    }
  }
];
