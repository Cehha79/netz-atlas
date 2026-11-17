// Die acht Bereiche der Website mit ihren Bausteinen, in Deutsch, Englisch und Türkisch.
// Aus dieser einen Liste entstehen die Navigation, die Seitentitel und die Übersichten.
// stand: "geplant" oder "fertig". Bausteine mit einer id stehen auf ihrer Seite als Reiter.
window.NETZ_BEREICHE = [
  {
    id: "start",
    datei: "index.html",
    nr: "01",
    name: { de: "Start", en: "Start", tr: "Başlangıç" },
    titel: { de: "Das Internet", en: "The internet", tr: "İnternet" },
    akzent: { de: "als Bauwerk", en: "as a structure", tr: "bir yapı olarak" },
    text: {
      de: "Seekabel, Knoten und Laufzeiten: wie das weltweite Netz wirklich gebaut ist. Jede Angabe mit Quelle und Datum.",
      en: "Submarine cables, exchanges and latency: how the global network is actually built. Every figure with source and date.",
      tr: "Denizaltı kabloları, değişim noktaları ve gecikme süreleri: küresel ağ gerçekte nasıl kurulu. Her bilgi kaynağı ve tarihiyle."
    },
    bausteine: [
      {
        name: { de: "Lagekarte", en: "Overview map", tr: "Genel harita" },
        text: { de: "Ausgewählte Seekabel und Knoten auf einer Weltkarte", en: "Selected submarine cables and exchanges on a world map", tr: "Seçilmiş denizaltı kabloları ve değişim noktaları dünya haritasında" },
        stand: "fertig"
      },
      {
        name: { de: "Kennzahlen", en: "Key figures", tr: "Temel sayılar" },
        text: { de: "Das Netz in Zahlen, mit Quelle und Stand", en: "The network in numbers, with source and date", tr: "Sayılarla ağ, kaynağı ve tarihiyle" },
        stand: "fertig"
      },
      {
        name: { de: "Meldungsband", en: "Incident ticker", tr: "Olay bandı" },
        text: { de: "Die jüngsten belegten Störfälle als laufende Zeile", en: "The latest documented incidents as a running line", tr: "Belgelenmiş son arızalar kayan satır olarak" },
        stand: "fertig"
      },
      {
        name: { de: "Suche", en: "Search", tr: "Arama" },
        text: { de: "Kabel, Ort oder Knoten finden", en: "Find a cable, place or exchange", tr: "Kablo, yer veya değişim noktası bul" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "atlas",
    datei: "atlas.html",
    nr: "02",
    name: { de: "Atlas", en: "Atlas", tr: "Atlas" },
    titel: { de: "Atlas", en: "Atlas", tr: "Atlas" },
    akzent: { de: "der Leitungen", en: "of the lines", tr: "hatların" },
    text: {
      de: "Die große Karte und der Globus: alle ausgewählten Kabel, Anlandeorte und Knoten. Die Verläufe sind schematisch.",
      en: "The large map and the globe: all selected cables, landing places and exchanges. The routes are schematic.",
      tr: "Büyük harita ve küre: seçilmiş tüm kablolar, karaya çıkış yerleri ve değişim noktaları. Güzergâhlar şematiktir."
    },
    bausteine: [
      {
        id: "karte",
        name: { de: "Flache Karte", en: "Flat map", tr: "Düz harita" },
        text: { de: "Flächentreue Weltkarte mit Kabeln und Knoten", en: "Equal-area world map with cables and exchanges", tr: "Kablolar ve değişim noktalarıyla eş alanlı dünya haritası" },
        stand: "fertig"
      },
      {
        id: "globus",
        name: { de: "Globus", en: "Globe", tr: "Küre" },
        text: { de: "Dieselben Daten auf der Kugel", en: "The same data on the sphere", tr: "Aynı veriler küre üzerinde" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "kabel",
    datei: "kabel.html",
    nr: "03",
    name: { de: "Kabel", en: "Cables", tr: "Kablolar" },
    titel: { de: "Seekabel", en: "Submarine cables", tr: "Denizaltı kabloları" },
    akzent: { de: "im Einzelnen", en: "one by one", tr: "tek tek" },
    text: {
      de: "Eine Auswahl wichtiger Seekabel mit Länge, Baujahr, Eigentümern und Anlandeorten. Was nicht belegt ist, steht als offen da.",
      en: "A selection of important submarine cables with length, year, owners and landing places. What is not documented is marked as open.",
      tr: "Önemli denizaltı kablolarından bir seçki: uzunluk, yıl, sahipler ve karaya çıkış yerleri. Belgelenemeyenler açık olarak işaretlidir."
    },
    bausteine: [
      {
        name: { de: "Verzeichnis", en: "Directory", tr: "Dizin" },
        text: { de: "Alle Kabel der Auswahl nach Gebiet, mit Suche", en: "All selected cables by region, with search", tr: "Seçkideki tüm kablolar bölgeye göre, aramayla" },
        stand: "fertig"
      },
      {
        name: { de: "Profil", en: "Profile", tr: "Profil" },
        text: { de: "Stammdaten, Anlandeorte und Quellen eines Kabels", en: "Key data, landing places and sources of a cable", tr: "Bir kablonun temel verileri, karaya çıkış yerleri ve kaynakları" },
        stand: "fertig"
      },
      {
        name: { de: "Verlauf", en: "Route", tr: "Güzergâh" },
        text: { de: "Der schematische Verlauf des gewählten Kabels", en: "The schematic route of the selected cable", tr: "Seçilen kablonun şematik güzergâhı" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "knoten",
    datei: "knoten.html",
    nr: "04",
    name: { de: "Knoten", en: "Exchanges", tr: "Düğümler" },
    titel: { de: "Knoten", en: "Exchanges", tr: "Düğümler" },
    akzent: { de: "und Anlandeorte", en: "and landing places", tr: "ve karaya çıkış yerleri" },
    text: {
      de: "Wo Netze sich treffen und wo Kabel an Land gehen: Internet-Knoten, Anlandeorte und die Root-Server der Namensauflösung.",
      en: "Where networks meet and where cables come ashore: internet exchanges, landing places and the root servers of name resolution.",
      tr: "Ağların buluştuğu ve kabloların karaya çıktığı yerler: internet değişim noktaları, karaya çıkış yerleri ve ad çözümlemenin kök sunucuları."
    },
    bausteine: [
      {
        id: "ixp",
        name: { de: "Internet-Knoten", en: "Internet exchanges", tr: "İnternet değişim noktaları" },
        text: { de: "Große Austauschpunkte mit Betreiber, Größe und Quelle", en: "Large exchange points with operator, size and source", tr: "Büyük değişim noktaları: işletmeci, büyüklük ve kaynak" },
        stand: "fertig"
      },
      {
        id: "anlandeorte",
        name: { de: "Anlandeorte", en: "Landing places", tr: "Karaya çıkış yerleri" },
        text: { de: "Orte, an denen die Kabel der Auswahl an Land gehen", en: "Places where the selected cables come ashore", tr: "Seçkideki kabloların karaya çıktığı yerler" },
        stand: "fertig"
      },
      {
        id: "root",
        name: { de: "Root-Server", en: "Root servers", tr: "Kök sunucular" },
        text: { de: "Die 13 Namen der obersten DNS-Ebene und ihre Instanzen", en: "The 13 names of the top DNS level and their instances", tr: "En üst DNS düzeyinin 13 adı ve örnekleri" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "technik",
    datei: "technik.html",
    nr: "05",
    name: { de: "Technik", en: "Technology", tr: "Teknik" },
    titel: { de: "Technik", en: "Technology", tr: "Teknik" },
    akzent: { de: "zum Anfassen", en: "hands-on", tr: "elle tutulur" },
    text: {
      de: "Wie Daten um die Welt kommen, gezeigt an Schaubildern, die du selbst bedienst.",
      en: "How data travels around the world, shown in diagrams you operate yourself.",
      tr: "Verinin dünyayı nasıl dolaştığı, kendi kullandığın şemalarla."
    },
    bausteine: [
      {
        id: "laufzeit",
        name: { de: "Laufzeit", en: "Latency", tr: "Gecikme" },
        text: { de: "Wie lange Licht in Glasfaser über eine Strecke braucht", en: "How long light in fibre takes over a distance", tr: "Işığın fiber içinde bir mesafeyi ne kadar sürede aştığı" },
        stand: "fertig"
      },
      {
        id: "seekabel",
        name: { de: "Seekabel", en: "Submarine cable", tr: "Denizaltı kablosu" },
        text: { de: "Aufbau, Verstärker und Kapazität eines Kabels", en: "Structure, repeaters and capacity of a cable", tr: "Bir kablonun yapısı, yineleyicileri ve kapasitesi" },
        stand: "fertig"
      },
      {
        id: "paketweg",
        name: { de: "Paketweg", en: "Packet path", tr: "Paket yolu" },
        text: { de: "Die Stationen eines Datenpakets vom Heimnetz bis zum Ziel", en: "The stations of a data packet from home network to destination", tr: "Bir veri paketinin ev ağından hedefe uğradığı duraklar" },
        stand: "fertig"
      },
      {
        id: "dns",
        name: { de: "Namensauflösung", en: "Name resolution", tr: "Ad çözümleme" },
        text: { de: "Wie aus einem Namen eine Adresse wird", en: "How a name becomes an address", tr: "Bir adın nasıl adrese dönüştüğü" },
        stand: "fertig"
      },
      {
        id: "bgp",
        name: { de: "Routing", en: "Routing", tr: "Yönlendirme" },
        text: { de: "Wie Netze einander ihre Wege melden und was ein Fehler anrichtet", en: "How networks announce routes to each other and what a mistake causes", tr: "Ağların yollarını birbirine nasıl bildirdiği ve bir hatanın neye yol açtığı" },
        stand: "fertig"
      },
      {
        id: "austausch",
        name: { de: "Austauschpunkt", en: "Exchange point", tr: "Değişim noktası" },
        text: { de: "Was ein Internet-Knoten spart", en: "What an internet exchange saves", tr: "Bir internet değişim noktasının sağladığı tasarruf" },
        stand: "fertig"
      },
      {
        id: "satellit",
        name: { de: "Satellit", en: "Satellite", tr: "Uydu" },
        text: { de: "Laufzeit und Kapazität im Vergleich zum Seekabel", en: "Latency and capacity compared with the submarine cable", tr: "Denizaltı kablosuyla karşılaştırmalı gecikme ve kapasite" },
        stand: "fertig"
      },
      {
        id: "inhalte",
        name: { de: "Inhalte in der Nähe", en: "Content nearby", tr: "Yakındaki içerik" },
        text: { de: "Warum Inhalte nah am Nutzer gespeichert werden", en: "Why content is stored close to the user", tr: "İçeriğin neden kullanıcıya yakın saklandığı" },
        stand: "fertig"
      },
      {
        id: "glossar",
        name: { de: "Glossar", en: "Glossary", tr: "Sözlük" },
        text: { de: "Die Fachbegriffe der Website kurz erklärt", en: "The technical terms of this site explained briefly", tr: "Sitedeki teknik terimlerin kısa açıklaması" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "live",
    datei: "live.html",
    nr: "06",
    name: { de: "Live", en: "Live", tr: "Canlı" },
    titel: { de: "Live", en: "Live", tr: "Canlı" },
    akzent: { de: "auf Knopfdruck", en: "on demand", tr: "tek tuşla" },
    text: {
      de: "Erdbeben, Ausfälle und Routing-Meldungen aus öffentlichen Quellen, dazu deine eigene Verbindung. Abgerufen wird erst nach deinem Klick.",
      en: "Earthquakes, outages and routing messages from public sources, plus your own connection. Nothing is fetched before you click.",
      tr: "Açık kaynaklardan depremler, kesintiler ve yönlendirme iletileri, ayrıca kendi bağlantın. Sen tıklamadan hiçbir şey alınmaz."
    },
    bausteine: [
      {
        id: "ebenen",
        name: { de: "Live-Ebenen", en: "Live layers", tr: "Canlı katmanlar" },
        text: { de: "Erdbeben, Ausfälle und zurückgezogene Routen auf der Karte", en: "Earthquakes, outages and withdrawn routes on the map", tr: "Haritada depremler, kesintiler ve geri çekilen rotalar" },
        stand: "fertig"
      },
      {
        id: "verbindung",
        name: { de: "Deine Verbindung", en: "Your connection", tr: "Bağlantın" },
        text: { de: "Standort, Anbieter und eine Messung, jeweils nach Klick", en: "Location, provider and a measurement, each after a click", tr: "Konum, sağlayıcı ve bir ölçüm, her biri tıklayınca" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "stoerfaelle",
    datei: "stoerfaelle.html",
    nr: "07",
    name: { de: "Störfälle", en: "Incidents", tr: "Arızalar" },
    titel: { de: "Störfälle", en: "Incidents", tr: "Arızalar" },
    akzent: { de: "mit Beleg", en: "with evidence", tr: "belgeli" },
    text: {
      de: "Kabelschäden und Routing-Vorfälle, die belegt sind, mit Datum, Ort und Quelle. Ungeklärte Ursachen stehen als ungeklärt da.",
      en: "Cable damage and routing incidents that are documented, with date, place and source. Unresolved causes are marked as unresolved.",
      tr: "Belgelenmiş kablo hasarları ve yönlendirme olayları: tarih, yer ve kaynakla. Nedeni bilinmeyenler bilinmiyor olarak işaretlidir."
    },
    bausteine: [
      {
        id: "zeitachse",
        name: { de: "Zeitachse", en: "Timeline", tr: "Zaman çizelgesi" },
        text: { de: "Alle Fälle nach Jahr und Art", en: "All cases by year and kind", tr: "Tüm olaylar yıla ve türe göre" },
        stand: "fertig"
      },
      {
        id: "faelle",
        name: { de: "Fälle", en: "Cases", tr: "Olaylar" },
        text: { de: "Liste und Karte der Fälle mit Quellen", en: "List and map of the cases with sources", tr: "Olayların listesi ve haritası, kaynaklarıyla" },
        stand: "fertig"
      },
      {
        id: "engstellen",
        name: { de: "Engstellen", en: "Chokepoints", tr: "Dar geçitler" },
        text: { de: "Meerengen, durch die besonders viele Kabel führen", en: "Straits through which especially many cables pass", tr: "İçinden özellikle çok kablo geçen boğazlar" },
        stand: "fertig"
      }
    ]
  },
  {
    id: "methodik",
    datei: "methodik.html",
    nr: "08",
    name: { de: "Methodik", en: "Method", tr: "Yöntem" },
    titel: { de: "Methodik", en: "Method", tr: "Yöntem" },
    akzent: { de: "und Datenherkunft", en: "and data sources", tr: "ve veri kaynakları" },
    text: {
      de: "Woher die Angaben stammen, wie alt sie sind und wie sie gepflegt werden.",
      en: "Where the figures come from, how old they are and how they are maintained.",
      tr: "Bilgilerin nereden geldiği, ne kadar eski olduğu ve nasıl güncel tutulduğu."
    },
    bausteine: [
      {
        id: "herkunft",
        name: { de: "Datenherkunft", en: "Data sources", tr: "Veri kaynakları" },
        text: { de: "Jede Datenart mit Quelle und Art der Pflege", en: "Each kind of data with source and upkeep", tr: "Her veri türü, kaynağı ve bakım biçimiyle" },
        stand: "fertig"
      },
      {
        id: "stand",
        name: { de: "Datenstand", en: "Data status", tr: "Veri durumu" },
        text: { de: "Prüfdatum und offene Angaben je Datenart", en: "Check date and open items per kind of data", tr: "Her veri türü için denetim tarihi ve açık bilgiler" },
        stand: "fertig"
      },
      {
        id: "pflege",
        name: { de: "Pflege", en: "Upkeep", tr: "Bakım" },
        text: { de: "Was wann geprüft wird", en: "What is checked when", tr: "Neyin ne zaman denetlendiği" },
        stand: "fertig"
      },
      {
        id: "grenzen",
        name: { de: "Grenzen", en: "Limits", tr: "Sınırlar" },
        text: { de: "Was die Website nicht zeigt und nicht kann", en: "What this site does not show and cannot do", tr: "Sitenin göstermediği ve yapamadığı şeyler" },
        stand: "fertig"
      }
    ]
  }
];

// Nebenseiten: gleicher Rahmen, aber ohne Bausteine und ohne Platz in der Leiste.
window.NETZ_NEBENSEITEN = [
  {
    id: "datenschutz",
    datei: "datenschutz.html",
    nr: "",
    name: { de: "Datenschutz", en: "Privacy", tr: "Gizlilik" },
    titel: { de: "Datenschutz", en: "Privacy", tr: "Gizlilik" },
    akzent: { de: "auf dieser Website", en: "on this website", tr: "bu sitede" },
    text: {
      de: "Welche Daten beim Besuch dieser Website anfallen, wer sie erhält und was nur nach deinem Klick geschieht.",
      en: "Which data arises when you visit this website, who receives it and what happens only after your click.",
      tr: "Bu siteyi ziyaret ettiğinde hangi verilerin oluştuğu, kimin aldığı ve yalnızca tıklamandan sonra neler olduğu."
    },
    bausteine: []
  }
];
