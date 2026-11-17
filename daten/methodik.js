// Methodik: Beschreibung der Datenarten, der Pflege und der Grenzen der Website. Von Hand gepflegt.
// Umfang und Prüfdatum je Datenart rechnet js/methodik.js aus den Datendateien; hier stehen nur die Texte.
window.NETZ_DATENARTEN = [
  {
    id: "kabel",
    name: { de: "Seekabel", en: "Submarine cables", tr: "Denizaltı kabloları" },
    herkunft: { de: "Seiten und Mitteilungen der Betreiber und Eigentümer, Behörden wie die FCC, Fachverbände. Die Fachseite submarinenetworks.com dient als zweite Wahl. Die Datenbank von TeleGeography wird nicht verwendet, weil sie nicht frei ist.", en: "Websites and announcements of operators and owners, authorities such as the FCC, industry bodies. The trade site submarinenetworks.com serves as second choice. The TeleGeography database is not used because it is not free.", tr: "İşletmecilerin ve sahiplerin siteleri ile duyuruları, FCC gibi kurumlar, meslek birlikleri. submarinenetworks.com uzmanlık sitesi ikinci tercih olarak kullanılır. TeleGeography veritabanı serbest olmadığı için kullanılmaz." },
    pflege: { de: "Von Hand. Jede Angabe wird an der Quelle gelesen; was sich nicht bestätigen lässt, steht als nicht bestätigt da.", en: "By hand. Every figure is read at the source; what cannot be confirmed is shown as unconfirmed.", tr: "Elle. Her bilgi kaynağında okunur; doğrulanamayan bilgi doğrulanmadı olarak gösterilir." }
  },
  {
    id: "verlauf",
    name: { de: "Kabelverläufe auf der Karte", en: "Cable routes on the map", tr: "Haritadaki kablo güzergâhları" },
    herkunft: { de: "Eigenes Netz aus Punkten auf See. Die Karte verbindet die belegten Anlandeorte über dieses Netz. Echte Kabellagen sind nicht frei verfügbar; die Linien sind schematisch.", en: "Own network of points at sea. The map connects the documented landing places via this network. Real cable positions are not freely available; the lines are schematic.", tr: "Denizdeki noktalardan oluşan kendi ağımız. Harita, belgelenmiş karaya çıkış yerlerini bu ağ üzerinden birleştirir. Gerçek kablo konumları serbestçe erişilebilir değildir; çizgiler şematiktir." },
    pflege: { de: "Von Hand, bei neuen Kabeln. Ein Skript prüft, ob Linien über Land laufen.", en: "By hand, when cables are added. A script checks whether lines run across land.", tr: "Elle, yeni kablolar eklendiğinde. Bir betik, çizgilerin karadan geçip geçmediğini denetler." }
  },
  {
    id: "knoten",
    name: { de: "Internet-Knoten", en: "Internet exchanges", tr: "İnternet değişim noktaları" },
    herkunft: { de: "Seiten, Statistiken und Mitteilungen der Betreiber der Knoten. Sammelverzeichnisse werden nicht übernommen, weil ihre Bedingungen die Weitergabe einschränken.", en: "Websites, statistics and announcements of the exchange operators. Aggregated directories are not copied because their terms restrict redistribution.", tr: "Değişim noktası işletmecilerinin siteleri, istatistikleri ve duyuruları. Toplu dizinler, koşulları yeniden dağıtımı kısıtladığı için alınmaz." },
    pflege: { de: "Von Hand. Spitzenwerte stehen nur dort, wo der Betreiber sie für den Standort nennt, immer mit Datum.", en: "By hand. Peak values are given only where the operator states them for the site, always with a date.", tr: "Elle. En yüksek değerler yalnızca işletmecinin o yer için bildirdiği durumlarda, her zaman tarihle verilir." }
  },
  {
    id: "root",
    name: { de: "Root-Server", en: "Root servers", tr: "Kök sunucular" },
    herkunft: { de: "root-servers.org (Angaben der Betreiber) und die Liste der IANA.", en: "root-servers.org (data from the operators) and the IANA list.", tr: "root-servers.org (işletmecilerin verileri) ve IANA listesi." },
    pflege: { de: "Von Hand aus den veröffentlichten Listen gezählt. Die Zahl der Instanzen ändert sich laufend.", en: "Counted by hand from the published lists. The number of instances changes constantly.", tr: "Yayımlanan listelerden elle sayılır. Örnek sayısı sürekli değişir." }
  },
  {
    id: "vorfaelle",
    name: { de: "Störfälle", en: "Incidents", tr: "Arızalar" },
    herkunft: { de: "Mitteilungen von Betreibern und Behörden, Fachverbände, Analysen von Messdiensten, begutachtete Arbeiten. Presse nur ergänzend und als solche gekennzeichnet.", en: "Announcements by operators and authorities, industry bodies, analyses by measurement services, peer-reviewed papers. Press only as a supplement and marked as such.", tr: "İşletmecilerin ve kurumların duyuruları, meslek birlikleri, ölçüm hizmetlerinin analizleri, hakemli çalışmalar. Basın yalnızca tamamlayıcı olarak ve öyle işaretlenerek kullanılır." },
    pflege: { de: "Von Hand. Ist die Ursache nicht von zuständiger Stelle festgestellt, steht sie als nicht gesichert da.", en: "By hand. If the cause has not been established by a competent body, it is shown as not established.", tr: "Elle. Neden yetkili bir kurumca saptanmamışsa kesinleşmedi olarak gösterilir." }
  },
  {
    id: "engstellen",
    name: { de: "Engstellen", en: "Chokepoints", tr: "Dar geçitler" },
    herkunft: { de: "Bericht des Beratungsgremiums von ITU und ICPC (2026) und eine Analyse von APNIC (2026).", en: "Report of the ITU and ICPC advisory body (2026) and an analysis by APNIC (2026).", tr: "ITU ve ICPC danışma kurulunun raporu (2026) ve APNIC'in bir analizi (2026)." },
    pflege: { de: "Von Hand. Die Zahlen sind Angaben und Schätzungen Dritter.", en: "By hand. The figures are statements and estimates by third parties.", tr: "Elle. Sayılar üçüncü tarafların bilgi ve tahminleridir." }
  },
  {
    id: "kennzahlen",
    name: { de: "Kennzahlen der Startseite", en: "Key figures on the start page", tr: "Başlangıç sayfasındaki temel sayılar" },
    herkunft: { de: "Je Zahl eine genannte Quelle: TeleGeography, ITU und ICPC, Packet Clearing House, CIDR Report, root-servers.org.", en: "One named source per figure: TeleGeography, ITU and ICPC, Packet Clearing House, CIDR Report, root-servers.org.", tr: "Her sayı için adı verilen bir kaynak: TeleGeography, ITU ve ICPC, Packet Clearing House, CIDR Report, root-servers.org." },
    pflege: { de: "Von Hand. Schätzungen sind als Schätzung bezeichnet.", en: "By hand. Estimates are labelled as estimates.", tr: "Elle. Tahminler tahmin olarak belirtilir." }
  },
  {
    id: "land",
    name: { de: "Landflächen der Karten", en: "Land areas of the maps", tr: "Haritalardaki kara alanları" },
    herkunft: { de: "Natural Earth, Maßstab 1:110 Mio., gemeinfrei.", en: "Natural Earth, scale 1:110 million, public domain.", tr: "Natural Earth, 1:110 milyon ölçek, kamu malı." },
    pflege: { de: "Ein Skript erzeugt die Datei aus den Geodaten. Grenzen und Küsten sind stark vereinfacht.", en: "A script generates the file from the geodata. Borders and coasts are heavily simplified.", tr: "Bir betik dosyayı coğrafi verilerden üretir. Sınırlar ve kıyılar büyük ölçüde sadeleştirilmiştir." }
  },
  {
    id: "technik",
    name: { de: "Schaubilder und Glossar", en: "Diagrams and glossary", tr: "Şemalar ve sözlük" },
    herkunft: { de: "Eigene Rechnungen und Zeichnungen. Zahlen stammen aus den Quellen, die unter jedem Schaubild stehen. Beispielnetze, Beispielwege und Adressen sind erfunden und so gekennzeichnet.", en: "Own calculations and drawings. Figures come from the sources listed under each diagram. Example networks, example paths and addresses are invented and marked as such.", tr: "Kendi hesaplarımız ve çizimlerimiz. Sayılar her şemanın altında belirtilen kaynaklardan gelir. Örnek ağlar, örnek yollar ve adresler uydurmadır ve öyle işaretlenmiştir." },
    pflege: { de: "Von Hand. Was genähert oder nur veranschaulicht ist, steht als Näherung oder Veranschaulichung da.", en: "By hand. What is approximated or only illustrated is labelled as an approximation or illustration.", tr: "Elle. Yaklaşık hesaplanan ya da yalnızca örneklenen şeyler yaklaşık değer veya örnekleme olarak belirtilir." }
  },
  {
    id: "live",
    name: { de: "Live-Daten", en: "Live data", tr: "Canlı veriler" },
    herkunft: { de: "USGS (Erdbeben), IODA (Ausfälle), RIPE NCC (Routing), GeoJS (Standort), Cloudflare (Messung). Abgerufen wird nur nach Klick des Besuchers, direkt aus seinem Browser.", en: "USGS (earthquakes), IODA (outages), RIPE NCC (routing), GeoJS (location), Cloudflare (measurement). Data is fetched only after the visitor's click, directly from their browser.", tr: "USGS (depremler), IODA (kesintiler), RIPE NCC (yönlendirme), GeoJS (konum), Cloudflare (ölçüm). Veri yalnızca ziyaretçi tıkladıktan sonra, doğrudan tarayıcısından alınır." },
    pflege: { de: "Keine eigene Speicherung. Die Website zeigt, was die Quelle im Augenblick des Abrufs liefert.", en: "No storage of our own. The website shows what the source delivers at the moment of the request.", tr: "Kendi saklamamız yoktur. Site, kaynağın istek anında verdiğini gösterir." }
  }
];

// Pflegeplan: was in welchem Abstand geprüft wird.
window.NETZ_PFLEGE = [
  {
    abstand: { de: "Monatlich", en: "Monthly", tr: "Aylık" },
    was: { de: "Kennzahlen der Startseite, Zahl der Root-Instanzen, Spitzenwerte der Knoten, neue Störfälle.", en: "Key figures on the start page, number of root instances, peak values of the exchanges, new incidents.", tr: "Başlangıç sayfasındaki temel sayılar, kök örneği sayısı, değişim noktalarının en yüksek değerleri, yeni arızalar." },
    wie: { de: "An der Quelle nachlesen, Wert und Prüfdatum eintragen, Prüfskript laufen lassen.", en: "Read at the source, enter value and check date, run the check script.", tr: "Kaynağında oku, değeri ve denetim tarihini gir, denetim betiğini çalıştır." }
  },
  {
    abstand: { de: "Vierteljährlich", en: "Quarterly", tr: "Üç ayda bir" },
    was: { de: "Kabel: neue Inbetriebnahmen, geplante Kabel, Stilllegungen, offene Angaben. Alle Quellenadressen.", en: "Cables: new systems in service, planned cables, retirements, open items. All source addresses.", tr: "Kablolar: hizmete giren yeni sistemler, planlanan kablolar, hizmetten çıkanlar, açık bilgiler. Tüm kaynak adresleri." },
    wie: { de: "Betreiberseiten lesen, das Skript für tote Verweise laufen lassen, die Karte auf Linien über Land prüfen.", en: "Read operator pages, run the script for dead links, check the map for lines across land.", tr: "İşletmeci sayfalarını oku, ölü bağlantı betiğini çalıştır, haritada karadan geçen çizgileri denetle." }
  },
  {
    abstand: { de: "Bei Anlass", en: "When needed", tr: "Gerektiğinde" },
    was: { de: "Ein großer Kabelschaden oder Routing-Vorfall, ein neues großes Kabel, eine geänderte Schnittstelle der Live-Quellen.", en: "A major cable fault or routing incident, a major new cable, a changed interface of the live sources.", tr: "Büyük bir kablo hasarı veya yönlendirme olayı, büyük bir yeni kablo, canlı kaynakların değişen bir arayüzü." },
    wie: { de: "Erst die Feststellung der zuständigen Stelle abwarten, dann eintragen. Vermutungen bleiben als nicht gesichert gekennzeichnet.", en: "Wait for the finding of the competent body first, then enter it. Assumptions remain marked as not established.", tr: "Önce yetkili kurumun saptamasını bekle, sonra gir. Tahminler kesinleşmedi olarak işaretli kalır." }
  }
];

// Grenzen: was die Website nicht zeigt und nicht kann.
window.NETZ_GRENZEN = [
  { de: "Die Website zeigt eine Auswahl von Seekabeln, nicht alle. Weltweit gibt es über 600 aktive und geplante Kabel.", en: "The website shows a selection of submarine cables, not all of them. There are more than 600 active and planned cables worldwide.", tr: "Site, denizaltı kablolarının tümünü değil bir seçkisini gösterir. Dünyada 600'den fazla etkin ve planlanan kablo vardır." },
  { de: "Die Verläufe auf Karte und Globus sind schematisch. Sie zeigen, welche Orte ein Kabel verbindet, nicht, wo es liegt.", en: "The routes on the map and the globe are schematic. They show which places a cable connects, not where it lies.", tr: "Haritadaki ve küredeki güzergâhlar şematiktir. Bir kablonun hangi yerleri bağladığını gösterir, nerede yattığını değil." },
  { de: "Koordinaten meinen den Ort, nicht die genaue Station oder Schadensstelle.", en: "Coordinates refer to the place, not the exact station or fault location.", tr: "Koordinatlar tam istasyonu ya da hasar yerini değil yeri gösterir." },
  { de: "Kapazitäten sind Auslegungswerte der Betreiber, teils die Erstauslegung, teils der Stand nach einem Ausbau. Sie sagen nichts über die genutzte Kapazität.", en: "Capacities are design values given by the operators, some for the initial design, some after an upgrade. They say nothing about the capacity in use.", tr: "Kapasiteler işletmecilerin tasarım değerleridir; bazıları ilk tasarım, bazıları genişletme sonrası durumdur. Kullanılan kapasite hakkında bir şey söylemez." },
  { de: "Landkabel, Rechenzentren und die Netze der Zugangsanbieter fehlen.", en: "Terrestrial cables, data centres and the networks of access providers are missing.", tr: "Kara kabloları, veri merkezleri ve erişim sağlayıcılarının ağları yer almaz." },
  { de: "Die Störfälle sind eine Auswahl gut belegter Fälle und keine Statistik.", en: "The incidents are a selection of well-documented cases and not a statistic.", tr: "Arızalar iyi belgelenmiş olaylardan bir seçkidir, istatistik değildir." },
  { de: "Die Website bewertet keine Anbieter und empfiehlt nichts.", en: "The website does not rate providers and recommends nothing.", tr: "Site sağlayıcıları değerlendirmez ve hiçbir şey önermez." },
  { de: "Englisch und Türkisch sind Übersetzungen der deutschen Vorlage. Bei Abweichungen gilt der deutsche Text.", en: "English and Turkish are translations of the German original. In case of differences the German text applies.", tr: "İngilizce ve Türkçe, Almanca aslının çevirileridir. Farklılık olursa Almanca metin geçerlidir." }
];
