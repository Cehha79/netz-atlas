// Störfälle: belegte Schäden an Seekabeln und Vorfälle im Routing zwischen Netzen. Von Hand gepflegt.
// gesichert: true heißt, die Ursache ist von zuständiger Stelle festgestellt. Bei false nennt ursache
// nur die meistgenannte Vermutung; die Seite zeigt sie als nicht gesichert und weist niemandem Schuld zu.
// ort: ungefähre Lage, aus den Ortsangaben der Quellen abgeleitet; null, wenn die Quellen die Stelle nicht bestätigen.
// quellen.art: primaer (Betreiber, Behörde, Fachverband), analyse (Messdienst, Fachanalyse) oder presse.
window.NETZ_VORFAELLE = [
  {
    id: "perth-indigo-2026",
    datum: "2026-08-08",
    art: "kabel",
    ursache: "unklar",
    gesichert: false,
    titel: {
      de: "Perth: Indigo West und Indigo Central gestört",
      en: "Perth: faults on Indigo West and Indigo Central",
      tr: "Perth: Indigo West ve Indigo Central arızalandı"
    },
    text: {
      de: "Am 8. und 9. August 2026 traten an den Kabeln Indigo West und Indigo Central in der Kabelschutzzone vor Perth kurz nacheinander Isolationsfehler auf. Der Eigentümer SUBCO sprach von einem Zufall oder einer äußeren Einwirkung; die australische Bundespolizei teilte mit, eine Anzeige zu prüfen. Die Ursache ist nicht festgestellt, die Reparatur war für Ende August 2026 angekündigt.",
      en: "On 8 and 9 August 2026 shunt faults occurred in quick succession on the Indigo West and Indigo Central cables in the cable protection zone off Perth. The owner SUBCO spoke of either a coincidence or external aggression; the Australian Federal Police said it was assessing a report of crime. The cause has not been established, and repair was announced for late August 2026.",
      tr: "8 ve 9 Ağustos 2026'da Perth açıklarındaki kablo koruma bölgesinde Indigo West ve Indigo Central kablolarında kısa aralıkla yalıtım arızaları oluştu. Kabloların sahibi SUBCO bunun bir tesadüf ya da dış etki olabileceğini belirtti; Avustralya Federal Polisi bir suç duyurusunu değerlendirdiğini açıkladı. Neden saptanmadı; onarım Ağustos 2026 sonu için duyurulmuştu."
    },
    ort: {
      name: {
        de: "Kabelschutzzone vor Perth",
        en: "Cable protection zone off Perth",
        tr: "Perth açıklarındaki kablo koruma bölgesi"
      },
      lat: -31.9,
      lon: 114.75
    },
    kabel: ["Indigo West", "Indigo Central"],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "iTnews: AFP assessing report in connection with Perth cable faults (11.08.2026)",
        url: "https://www.itnews.com.au/news/afp-assessing-report-in-connection-with-perth-cable-faults-628061",
        art: "presse"
      },
      {
        name: "Capacity: Two Perth subsea cable faults test Australia (19.08.2026)",
        url: "https://capacityglobal.com/news/two-perth-subsea-cable-faults-test-australia/",
        art: "presse"
      },
      {
        name: "APNIC Blog: Submarine cable resilience (14.10.2026)",
        url: "https://blog.apnic.net/2026/10/14/submarine-cable-resilience/",
        art: "analyse"
      }
    ],
    offen: ["ursache", "dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "cloudflare-miami-2026",
    datum: "2026-01-22",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: true,
    titel: {
      de: "Cloudflare: Routenleck in Miami",
      en: "Cloudflare: route leak in Miami",
      tr: "Cloudflare: Miami'de rota sızıntısı"
    },
    text: {
      de: "Am 22. Januar 2026 um 20:25 UTC führte eine fehlerhafte automatische Änderung der Routing-Richtlinien dazu, dass ein Cloudflare-Router in Miami Routen an Peers und Anbieter weitergab, die dafür nicht bestimmt waren. Die Folge war eine Überlastung von Teilen der Backbone-Infrastruktur in Miami. Das Leck dauerte nach Angaben des Unternehmens 25 Minuten.",
      en: "On 22 January 2026 at 20:25 UTC a faulty automated change to routing policy caused a Cloudflare router in Miami to pass routes on to peers and providers for which they were not intended. The result was congestion on parts of the backbone infrastructure in Miami. According to the company the leak lasted 25 minutes.",
      tr: "22 Ocak 2026'da saat 20:25 UTC'de yönlendirme politikasındaki hatalı bir otomatik değişiklik, Miami'deki bir Cloudflare yönlendiricisinin rotaları amaçlanmayan eşlere ve sağlayıcılara aktarmasına yol açtı. Sonuç, Miami'deki omurga altyapısının bazı bölümlerinde tıkanıklık oldu. Şirkete göre sızıntı 25 dakika sürdü."
    },
    ort: null,
    kabel: [],
    netze: ["AS13335 Cloudflare"],
    dauerTage: 0.02,
    quellen: [
      {
        name: "Cloudflare: Route leak incident on January 22, 2026 (23.01.2026)",
        url: "https://blog.cloudflare.com/route-leak-incident-january-22-2026/",
        art: "primaer"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "rotes-meer-2025",
    datum: "2025-09-06",
    art: "kabel",
    ursache: "anker",
    gesichert: false,
    titel: {
      de: "Rotes Meer: SEA-ME-WE 4 und IMEWE getrennt",
      en: "Red Sea: SEA-ME-WE 4 and IMEWE cut",
      tr: "Kızıldeniz: SEA-ME-WE 4 ve IMEWE koptu"
    },
    text: {
      de: "Am 6. September 2025 meldeten Betreiber Kabelschäden im Roten Meer; öffentlich bestätigt sind SEA-ME-WE 4 und IMEWE. Cloudflare maß in Pakistan und den Vereinigten Arabischen Emiraten Verkehrsrückgänge von bis zu 30 Prozent und höhere Laufzeiten zwischen Indien und Europa. Ursache und genaue Stelle sind nicht bestätigt; Kentik nennt einen Schiffsanker als vorherrschende Vermutung.",
      en: "On 6 September 2025 operators reported cable damage in the Red Sea; SEA-ME-WE 4 and IMEWE have been publicly confirmed. Cloudflare measured traffic drops of up to 30 percent in Pakistan and the United Arab Emirates and higher latency between India and Europe. The cause and the exact location have not been confirmed; Kentik describes a ship anchor as the prevailing theory.",
      tr: "6 Eylül 2025'te işletmeciler Kızıldeniz'de kablo hasarı bildirdi; SEA-ME-WE 4 ve IMEWE kamuya açık biçimde doğrulandı. Cloudflare, Pakistan ve Birleşik Arap Emirlikleri'nde yüzde 30'a varan trafik düşüşü ve Hindistan ile Avrupa arasında artan gecikme ölçtü. Neden ve tam konum doğrulanmadı; Kentik, bir gemi demirini en yaygın varsayım olarak belirtiyor."
    },
    ort: null,
    kabel: ["SEA-ME-WE 4", "IMEWE"],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "Kentik: Subsea Cables Parted in Red Sea Again (09.09.2025)",
        url: "https://www.kentik.com/blog/subsea-cables-parted-in-red-sea-again",
        art: "analyse"
      },
      {
        name: "Cloudflare: Q3 2025 Internet disruption summary",
        url: "https://blog.cloudflare.com/q3-2025-internet-disruption-summary/",
        art: "analyse"
      },
      {
        name: "Gulf News: Red Sea cable chaos, mit Einschätzung des ICPC (10.09.2025)",
        url: "https://gulfnews.com/technology/red-sea-cable-chaos-why-the-internet-didnt-go-dark-1.500263896",
        art: "presse"
      }
    ],
    offen: ["ursache", "ort", "dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ostsee-lettland-gotland-2025",
    datum: "2025-01-26",
    art: "kabel",
    ursache: "anker",
    gesichert: true,
    titel: {
      de: "Ostsee: Kabel zwischen Ventspils und Gotland beschädigt",
      en: "Baltic Sea: Ventspils to Gotland cable damaged",
      tr: "Baltık Denizi: Ventspils ile Gotland arası kablo hasarlı"
    },
    text: {
      de: "Am frühen 26. Januar 2025 meldete der lettische Betreiber LVRTC Störungen auf seinem Glasfaserkabel zwischen Ventspils und Fårösund auf Gotland; der Schaden lag in rund 100 m Tiefe in der schwedischen Wirtschaftszone. Die schwedische Staatsanwaltschaft schloss Sabotage aus und nannte schlechtes Wetter, technische Mängel und mangelhafte Seemannschaft auf einem Frachtschiff als Ursache. Am 28. Februar 2025 war der Dienst vollständig wiederhergestellt.",
      en: "Early on 26 January 2025 the Latvian operator LVRTC detected disruptions on its fibre-optic cable between Ventspils and Fårösund on Gotland; the damage lay at a depth of about 100 m in the Swedish economic zone. The Swedish Prosecution Authority ruled out sabotage and named severe weather, technical deficiencies and inadequate seamanship on a cargo ship as the cause. Service was fully restored on 28 February 2025.",
      tr: "26 Ocak 2025'in erken saatlerinde Letonyalı işletmeci LVRTC, Ventspils ile Gotland'daki Fårösund arasındaki fiber optik kablosunda kesinti saptadı; hasar İsveç'in münhasır ekonomik bölgesinde yaklaşık 100 m derinlikteydi. İsveç Savcılığı sabotajı dışladı ve neden olarak kötü hava koşullarını, teknik eksiklikleri ve bir yük gemisindeki yetersiz denizciliği gösterdi. Hizmet 28 Şubat 2025'te tümüyle yeniden sağlandı."
    },
    ort: {
      name: {
        de: "Ostsee östlich von Gotland",
        en: "Baltic Sea east of Gotland",
        tr: "Gotland'ın doğusunda Baltık Denizi"
      },
      lat: 57.75,
      lon: 19.75
    },
    kabel: ["LVRTC Ventspils-Gotland (Fårösund)"],
    netze: [],
    dauerTage: 33,
    quellen: [
      {
        name: "Ministerkabinett Lettlands: Mitteilung zum Schaden am LVRTC-Kabel (26.01.2025)",
        url: "https://www.mk.gov.lv/en/node/18609",
        art: "primaer"
      },
      {
        name: "LVRTC: Submarine Fiber Optic Cable Repair Work, laufende Meldungen bis 28.02.2025",
        url: "https://www.lvrtc.lv/en/?p=27205",
        art: "primaer"
      },
      {
        name: "LVRTC: Submarine Fiber Optic Cable Operation Restored (28.02.2025)",
        url: "https://www.lvrtc.lv/en/?p=28227",
        art: "primaer"
      },
      {
        name: "The Record: Sweden releases ship, Angaben der schwedischen Staatsanwaltschaft (03.02.2025)",
        url: "https://therecord.media/sweden-releases-ship-suspected-cable-sabotage",
        art: "presse"
      },
      {
        name: "The Maritime Executive: Swedish Prosecutors Confirm January Cable Break was Accident by Bulker (14.10.2025)",
        url: "https://maritime-executive.com/article/swedish-prosecutors-confirm-january-cable-break-was-accident-by-bulker",
        art: "presse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ostsee-estlink2-2024",
    datum: "2024-12-25",
    art: "kabel",
    ursache: "anker",
    gesichert: false,
    titel: {
      de: "Finnischer Meerbusen: EstLink 2 und Datenkabel",
      en: "Gulf of Finland: EstLink 2 and data cables damaged",
      tr: "Finlandiya Körfezi: EstLink 2 ve veri kabloları hasarlı"
    },
    text: {
      de: "Am 25. Dezember 2024 fiel das Stromkabel EstLink 2 zwischen Finnland und Estland aus; am selben Tag wurden Datenkabel beschädigt, darunter C-Lion1. Die finnische Polizei fand eine Schleifspur von mehreren Dutzend Kilometern am Meeresgrund und ordnete sie vorläufig einem Schiffsanker zu; das Gerichtsverfahren ist nicht abgeschlossen. C-Lion1 war am 6. Januar 2025 repariert, EstLink 2 sollte laut Fingrid am 20. Juni 2025 wieder in den kommerziellen Betrieb gehen.",
      en: "On 25 December 2024 the EstLink 2 power cable between Finland and Estonia failed; data cables were damaged the same day, among them C-Lion1. Finnish police found a drag mark several tens of kilometres long on the seabed and provisionally attributed it to a ship's anchor; court proceedings have not been concluded. C-Lion1 was repaired on 6 January 2025, and according to Fingrid EstLink 2 was due to return to commercial use on 20 June 2025.",
      tr: "25 Aralık 2024'te Finlandiya ile Estonya arasındaki EstLink 2 elektrik kablosu devre dışı kaldı; aynı gün aralarında C-Lion1'in de bulunduğu veri kabloları hasar gördü. Finlandiya polisi deniz tabanında onlarca kilometre uzunluğunda bir sürüklenme izi buldu ve bunu ilk değerlendirmede bir gemi demirine bağladı; yargı süreci sonuçlanmadı. C-Lion1 6 Ocak 2025'te onarıldı; Fingrid'e göre EstLink 2'nin 20 Haziran 2025'te ticari işletmeye dönmesi öngörülüyordu."
    },
    ort: {
      name: {
        de: "Finnischer Meerbusen südöstlich von Porkkalanniemi",
        en: "Gulf of Finland south-east of Porkkalanniemi",
        tr: "Porkkalanniemi'nin güneydoğusunda Finlandiya Körfezi"
      },
      lat: 59.8,
      lon: 24.7
    },
    kabel: ["EstLink 2", "C-Lion1"],
    netze: [],
    dauerTage: 177,
    quellen: [
      {
        name: "Fingrid: Fault in the EstLink 2 connection located in the submarine cable (26.12.2024)",
        url: "https://www.fingrid.fi/en/news/news/2024/fault-in-the-estlink-2-electricity-transmission-connection-between-finland-and-estonia-located-in-the-submarine-cable/",
        art: "primaer"
      },
      {
        name: "Fingrid: EstLink 2 electricity transmission link returns to commercial use (18.06.2025)",
        url: "https://www.fingrid.fi/en/news/news/2025/estlink-2-electricity-transmission-link-returns-to-commercial-use/",
        art: "primaer"
      },
      {
        name: "Cinia: C-Lion1 submarine cable fully restored (07.01.2025)",
        url: "https://www.cinia.fi/en/news/c-lion1-submarine-cable-fully-restored",
        art: "primaer"
      },
      {
        name: "ERR: Finnish police: Eagle S dragged anchor for almost 100 km (30.12.2024)",
        url: "https://news.err.ee/1609562608/finnish-police-eagle-s-dragged-anchor-for-almost-100-km",
        art: "presse"
      },
      {
        name: "The Record: Finland appeals court revives case against Eagle S (27.08.2026)",
        url: "https://therecord.media/finland-appeals-court-revives-case-against-eagle-s",
        art: "presse"
      }
    ],
    offen: ["ursache", "kabel"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ostsee-clion1-bcs-2024",
    datum: "2024-11-17",
    art: "kabel",
    ursache: "anker",
    gesichert: true,
    titel: {
      de: "Ostsee: C-Lion1 und BCS East-West getrennt",
      en: "Baltic Sea: C-Lion1 and BCS East-West severed",
      tr: "Baltık Denizi: C-Lion1 ve BCS East-West koptu"
    },
    text: {
      de: "Am 17. November 2024 riss das Kabel BCS East-West Interlink zwischen Gotland und Litauen, am 18. November das Kabel C-Lion1 zwischen Finnland und Deutschland. Die schwedische Havariekommission stellte fest, dass der über rund 330 km geschleifte Anker eines Frachtschiffs die Kabel beschädigte; ob das absichtlich geschah, ließ sich nicht klären. Beide Verbindungen waren am 28. November 2024 wiederhergestellt.",
      en: "On 17 November 2024 the BCS East-West Interlink cable between Gotland and Lithuania was severed, followed on 18 November by the C-Lion1 cable between Finland and Germany. The Swedish Accident Investigation Authority found that the anchor of a cargo ship, dragged for about 330 km, damaged the cables; whether this was deliberate could not be determined. Both links were restored on 28 November 2024.",
      tr: "17 Kasım 2024'te Gotland ile Litvanya arasındaki BCS East-West Interlink kablosu, 18 Kasım'da ise Finlandiya ile Almanya arasındaki C-Lion1 kablosu koptu. İsveç Kaza Araştırma Kurumu, bir yük gemisinin yaklaşık 330 km boyunca sürüklenen demirinin kablolara zarar verdiğini saptadı; bunun kasıtlı olup olmadığı belirlenemedi. Her iki bağlantı da 28 Kasım 2024'te yeniden kuruldu."
    },
    ort: {
      name: {
        de: "Ostsee östlich von Öland",
        en: "Baltic Sea east of Öland",
        tr: "Öland'ın doğusunda Baltık Denizi"
      },
      lat: 56.6,
      lon: 18.0
    },
    kabel: ["BCS East-West Interlink", "C-Lion1"],
    netze: [],
    dauerTage: 11,
    quellen: [
      {
        name: "Statens haverikommission (SHK): Promemoria A-166/24 zu YI PENG 3 (15.04.2025)",
        url: "https://shk.se/download/18.ffd11bf19626c638f3623/1744702687838/YP3-PM%202025-04-15%20-%20slutlig.docx.pdf",
        art: "primaer"
      },
      {
        name: "Cinia: Cinia's C-Lion1 submarine cable has fully restored (29.11.2024)",
        url: "https://www.cinia.fi/en/news/cinias-c-lion1-submarine-cable-has-fully-restored",
        art: "primaer"
      },
      {
        name: "LRT/BNS: Damaged Lithuania-Sweden telecoms cable repaired, Angaben von Telia Lietuva (28.11.2024)",
        url: "https://www.lrt.lt/en/news-in-english/19/2426533/damaged-lithuania-sweden-telecoms-cable-repaired-telia",
        art: "presse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ostafrika-2024",
    datum: "2024-05-12",
    art: "kabel",
    ursache: "anker",
    gesichert: false,
    titel: {
      de: "EASSy und SEACOM vor Südafrika beschädigt",
      en: "EASSy and SEACOM damaged off South Africa",
      tr: "EASSy ve SEACOM Güney Afrika açıklarında hasar gördü"
    },
    text: {
      de: "Am 12. Mai 2024 wurden die Kabel EASSy und SEACOM vor der Küste von KwaZulu-Natal beschädigt. In mehreren ostafrikanischen Ländern ging der Internetverkehr zurück, in Tansania, Ruanda und Malawi um ein Drittel oder mehr. Die Internet Society nennt als vermutete Ursache einen schleifenden Schiffsanker; laut Cloudflare waren die Reparaturen am 31. Mai abgeschlossen.",
      en: "On 12 May 2024 the EASSy and SEACOM cables were damaged off the coast of KwaZulu-Natal. Internet traffic fell in several East African countries, by a third or more in Tanzania, Rwanda and Malawi. The Internet Society names a dragging ship anchor as the suspected cause; according to Cloudflare, repairs were completed on 31 May.",
      tr: "12 Mayıs 2024'te EASSy ve SEACOM kabloları KwaZulu-Natal kıyısı açıklarında hasar gördü. Birkaç Doğu Afrika ülkesinde internet trafiği düştü; Tanzanya, Ruanda ve Malavi'de düşüş üçte bir veya daha fazlaydı. Internet Society olası neden olarak sürüklenen bir gemi demirini gösteriyor; Cloudflare'e göre onarımlar 31 Mayıs'ta tamamlandı."
    },
    ort: {
      name: {
        de: "Indischer Ozean vor KwaZulu-Natal",
        en: "Indian Ocean off KwaZulu-Natal",
        tr: "KwaZulu-Natal açıklarında Hint Okyanusu"
      },
      lat: -29.55,
      lon: 31.4
    },
    kabel: ["EASSy", "SEACOM"],
    netze: [],
    dauerTage: 19,
    quellen: [
      {
        name: "Internet Society: 2024 East Africa Submarine Cable Outage Report",
        url: "https://internetsociety.org/wp-content/uploads/2024/07/Internet-Societys-Report-On-East-Africa-Submarine-Cable-Outage-2024.pdf",
        art: "analyse"
      },
      {
        name: "Cloudflare: East African Internet connectivity again impacted by submarine cable cuts (13.05.2024)",
        url: "https://blog.cloudflare.com/east-african-internet-connectivity-again-impacted-by-submarine-cable-cuts",
        art: "analyse"
      },
      {
        name: "Cloudflare: Q2 2024 Internet disruption summary",
        url: "https://blog.cloudflare.com/q2-2024-internet-disruption-summary/",
        art: "analyse"
      }
    ],
    offen: ["ursache"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "abidjan-2024",
    datum: "2024-03-14",
    art: "kabel",
    ursache: "hangrutsch",
    gesichert: false,
    titel: {
      de: "Vier Seekabel vor Abidjan fallen aus",
      en: "Four submarine cables fail off Abidjan",
      tr: "Abidjan açıklarında dört denizaltı kablosu devre dışı"
    },
    text: {
      de: "Am 14. März 2024 fielen vor der Elfenbeinküste die Kabel WACS, MainOne, SAT-3 und ACE aus; Cloudflare stellte Störungen in 13 afrikanischen Ländern fest. Der Betreiber MainOne ging nach vorläufiger Analyse von seismischer Aktivität am Meeresboden aus, eine 2025 veröffentlichte Studie hält einen untermeerischen Hangrutsch im Trou-Sans-Fond-Canyon für wahrscheinlich. Das Ende der Reparaturen ist in den gelesenen Quellen nicht belegt.",
      en: "On 14 March 2024 the WACS, MainOne, SAT-3 and ACE cables failed off Côte d'Ivoire; Cloudflare observed disruptions in 13 African countries. The operator MainOne, in a preliminary analysis, pointed to seismic activity on the seabed, and a study published in 2025 considers a submarine landslide in the Trou Sans Fond Canyon likely. The sources consulted do not document when repairs were completed.",
      tr: "14 Mart 2024'te Fildişi Sahili açıklarında WACS, MainOne, SAT-3 ve ACE kabloları devre dışı kaldı; Cloudflare 13 Afrika ülkesinde aksama gözlemledi. İşletmeci MainOne ön incelemesinde deniz tabanındaki sismik hareketliliğe işaret etti; 2025'te yayımlanan bir çalışma ise Trou Sans Fond Kanyonu'nda bir denizaltı heyelanını olası görüyor. Onarımların ne zaman tamamlandığı incelenen kaynaklarda belgelenmiyor."
    },
    ort: {
      name: {
        de: "Trou-Sans-Fond-Canyon vor Abidjan",
        en: "Trou Sans Fond Canyon off Abidjan",
        tr: "Abidjan açıklarındaki Trou Sans Fond Kanyonu"
      },
      lat: 4.35,
      lon: -4.0
    },
    kabel: ["WACS", "MainOne", "SAT-3/WASC", "ACE"],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "Cloudflare: Undersea cable failures cause Internet disruptions for multiple African countries (14.03.2024)",
        url: "https://blog.cloudflare.com/undersea-cable-failures-cause-internet-disruptions-across-africa-march-14-2024/",
        art: "analyse"
      },
      {
        name: "Seismological Society of America: Nuclear Monitoring System Suggests Landslide Cut Off Internet in West Africa (27.03.2025)",
        url: "https://www.seismosoc.org/news/nuclear-monitoring-system-suggests-landslide-cut-off-internet-in-west-africa/",
        art: "analyse"
      },
      {
        name: "TeleGeography: Beyond the Red Sea Blues: West Africa Faces Fresh Cable Faults (15.03.2024)",
        url: "https://resources.telegeography.com/march-2024-west-africa-cable-faults",
        art: "analyse"
      },
      {
        name: "Reuters via TechCentral: Erklärung von MainOne zur Ursache (17.03.2024)",
        url: "https://techcentral.co.za/african-internet-cables-seismic-activity/241494",
        art: "presse"
      }
    ],
    offen: ["ursache", "dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "rotes-meer-2024",
    datum: "2024-02-24",
    art: "kabel",
    ursache: "anker",
    gesichert: false,
    titel: {
      de: "Drei Seekabel im Roten Meer beschädigt",
      en: "Three submarine cables damaged in the Red Sea",
      tr: "Kızıldeniz'de üç denizaltı kablosu hasar gördü"
    },
    text: {
      de: "Am 24. Februar 2024 fielen im Roten Meer die Kabel Seacom/TGN-EA und AAE-1 aus; EIG war nach Kentik bereits seit einem früheren Schaden außer Betrieb. Der Netzbetreiber HGC schätzte, dass 25 Prozent des Verkehrs zwischen Asien, Europa und dem Nahen Osten betroffen waren. Als wahrscheinlichste Erklärung gilt der schleifende Anker eines treibenden Schiffs, bestätigt ist das nicht; im Juli 2024 dauerten die Reparaturen noch an.",
      en: "On 24 February 2024 the Seacom/TGN-EA and AAE-1 cables failed in the Red Sea; according to Kentik, EIG was already out of service following an earlier fault. The network operator HGC estimated that 25 percent of traffic between Asia, Europe and the Middle East was affected. The dragging anchor of a drifting ship is regarded as the most likely explanation but has not been confirmed; repairs were still under way in July 2024.",
      tr: "24 Şubat 2024'te Kızıldeniz'de Seacom/TGN-EA ve AAE-1 kabloları devre dışı kaldı; Kentik'e göre EIG daha önceki bir arıza nedeniyle zaten hizmet dışıydı. Ağ işletmecisi HGC, Asya, Avrupa ve Orta Doğu arasındaki trafiğin yüzde 25'inin etkilendiğini tahmin etti. En olası açıklama olarak sürüklenen bir geminin demirinin deniz tabanında sürünmesi gösteriliyor, ancak bu doğrulanmadı; Temmuz 2024'te onarımlar hâlâ sürüyordu."
    },
    ort: null,
    kabel: ["Seacom/TGN-EA", "AAE-1", "EIG"],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "Kentik: What Caused the Red Sea Submarine Cable Cuts? (31.03.2024)",
        url: "https://www.kentik.com/blog/what-caused-the-red-sea-submarine-cable-cuts/",
        art: "analyse"
      },
      {
        name: "Cloudflare: Q2 2024 Internet disruption summary",
        url: "https://blog.cloudflare.com/q2-2024-internet-disruption-summary/",
        art: "analyse"
      },
      {
        name: "CNN via WRAL: Red Sea cables have been damaged, Angaben von HGC (04.03.2024)",
        url: "https://wral.com/red-sea-cables-have-been-damaged-disrupting-global-internet-traffic/21311852/",
        art: "presse"
      }
    ],
    offen: ["ursache", "ort", "dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "matsu-2023",
    datum: "2023-02-02",
    art: "kabel",
    ursache: "fischerei",
    gesichert: true,
    titel: {
      de: "Beide Seekabel zu den Matsu-Inseln getrennt",
      en: "Both submarine cables to the Matsu Islands cut",
      tr: "Matsu Adaları'na giden iki denizaltı kablosu koptu"
    },
    text: {
      de: "Am 2. und am 8. Februar 2023 wurden die Kabel Taima Nr. 2 und Taima Nr. 3 zwischen Taiwan und den Matsu-Inseln beschädigt. Nach Angaben der Aufsichtsbehörde NCC riss ein Fischerboot das eine und ein Frachtschiff das andere Kabel; die Verbindung lief so lange über eine Richtfunkstrecke. Taima Nr. 3 war am 31. März 2023 repariert.",
      en: "On 2 and 8 February 2023 the Taima No. 2 and Taima No. 3 cables between Taiwan and the Matsu Islands were damaged. According to the regulator NCC, a fishing boat broke one cable and a cargo ship the other; in the meantime the link ran over a microwave backup system. Taima No. 3 was repaired on 31 March 2023.",
      tr: "2 ve 8 Şubat 2023'te Tayvan ile Matsu Adaları arasındaki Taima No. 2 ve Taima No. 3 kabloları hasar gördü. Düzenleyici kurum NCC'ye göre kablolardan birini bir balıkçı teknesi, diğerini bir yük gemisi kopardı; bu sürede bağlantı yedek bir radyolink sistemi üzerinden sağlandı. Taima No. 3 31 Mart 2023'te onarıldı."
    },
    ort: {
      name: {
        de: "Seegebiet zwischen Taiwan und den Matsu-Inseln",
        en: "Waters between Taiwan and the Matsu Islands",
        tr: "Tayvan ile Matsu Adaları arasındaki deniz"
      },
      lat: 26.2,
      lon: 120.2
    },
    kabel: ["Taima No. 2", "Taima No. 3"],
    netze: [],
    dauerTage: 57,
    quellen: [
      {
        name: "Taipei Times: Bericht über die Erklärung der NCC zu den Matsu-Kabeln (17.02.2023)",
        url: "https://www.taipeitimes.com/News/taiwan/archives/2023/02/17/2003794526",
        art: "presse"
      },
      {
        name: "Taiwan News: Taima No. 3 repariert (31.03.2023)",
        url: "https://www.taiwannews.com.tw/en/news/4852575",
        art: "presse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "shetland-2022",
    datum: "2022-10-20",
    art: "kabel",
    ursache: "fischerei",
    gesichert: true,
    titel: {
      de: "Shetland: Seekabel SHEFA-2 beschädigt",
      en: "Shetland: SHEFA-2 submarine cable damaged",
      tr: "Shetland: SHEFA-2 denizaltı kablosu hasar gördü"
    },
    text: {
      de: "In der Nacht zum 20. Oktober 2022 fiel der Abschnitt von SHEFA-2 zwischen Shetland und Orkney aus, nachdem in der Woche zuvor schon der Abschnitt zu den Färöern beschädigt worden war. Telefon und Internet auf Shetland waren gestört, bis der Betreiber am Nachmittag Reservefasern schaltete. Der Betreiber Faroese Telecom führt den Schaden auf Fischerei zurück und einigte sich später mit den Versicherern eines Fischereifahrzeugs auf eine Entschädigung.",
      en: "In the night to 20 October 2022 the SHEFA-2 section between Shetland and Orkney failed, after the section to the Faroe Islands had already been damaged the week before. Telephone and Internet services on Shetland were disrupted until the operator activated spare fibre that afternoon. The operator Faroese Telecom attributes the damage to fishing and later reached a compensation agreement with the insurers of a fishing vessel.",
      tr: "19'u 20 Ekim 2022'ye bağlayan gece SHEFA-2'nin Shetland ile Orkney arasındaki bölümü devre dışı kaldı; Faroe Adaları'na giden bölüm bir hafta önce hasar görmüştü. İşletmeci öğleden sonra yedek fiberleri devreye alana kadar Shetland'da telefon ve internet hizmetleri aksadı. İşletmeci Faroese Telecom hasarı balıkçılığa bağlıyor; sonradan bir balıkçı gemisinin sigortacılarıyla tazminat konusunda anlaştı."
    },
    ort: {
      name: {
        de: "Nordsee südlich von Shetland",
        en: "North Sea south of Shetland",
        tr: "Shetland'ın güneyinde Kuzey Denizi"
      },
      lat: 59.85,
      lon: -1.25
    },
    kabel: ["SHEFA-2"],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "Shetland News: Subsea cable fault took place a few kilometres off Shetland, Angaben von Faroese Telecom (25.10.2022)",
        url: "https://www.shetnews.co.uk/2022/10/25/subsea-cable-fault-took-place-a-few-kilometres-off-shetland-telecoms-chief-says",
        art: "presse"
      },
      {
        name: "Shetland News: 'Perfect storm' of cable failure was 'incredibly bad luck' (24.10.2022)",
        url: "https://shetnews.co.uk/2022/10/24/perfect-storm-of-cable-failure-was-incredibly-bad-luck",
        art: "presse"
      },
      {
        name: "Shetland News: Bericht über Entschädigungsvereinbarung zum Schaden vom Oktober 2022 (27.11.2025)",
        url: "https://www.shetnews.co.uk/2025/11/27/damage-vital-communication-links-caused/",
        art: "presse"
      }
    ],
    offen: ["dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tonga-2022",
    datum: "2022-01-15",
    art: "kabel",
    ursache: "vulkan",
    gesichert: true,
    titel: {
      de: "Vulkanausbruch trennt Tonga vom Internet",
      en: "Volcanic eruption cuts Tonga off the Internet",
      tr: "Yanardağ patlaması Tonga'nın internetini kesti"
    },
    text: {
      de: "Der Ausbruch des Hunga Tonga-Hunga Ha'apai am 15. Januar 2022 zerstörte Teile des internationalen Kabels nach Fidschi und des Inlandskabels. Das internationale Kabel war am 22. Februar 2022 repariert, das Inlandskabel nach Ha'apai und Vava'u erst am 12. Juli 2023. Zur Länge der zerstörten Kabelstrecke nennen die Quellen unterschiedliche Werte.",
      en: "The eruption of Hunga Tonga-Hunga Ha'apai on 15 January 2022 destroyed parts of the international cable to Fiji and of the domestic cable. The international cable was repaired on 22 February 2022, the domestic cable to Ha'apai and Vava'u only on 12 July 2023. Sources give differing figures for the length of cable destroyed.",
      tr: "Hunga Tonga-Hunga Ha'apai yanardağının 15 Ocak 2022'deki patlaması, Fiji'ye giden uluslararası kablonun ve yurt içi kablonun bazı bölümlerini tahrip etti. Uluslararası kablo 22 Şubat 2022'de, Ha'apai ve Vava'u'ya giden yurt içi kablo ise ancak 12 Temmuz 2023'te onarıldı. Tahrip olan kablo uzunluğu için kaynaklar farklı değerler veriyor."
    },
    ort: {
      name: {
        de: "Seegebiet beim Vulkan Hunga Tonga-Hunga Ha'apai",
        en: "Waters near the Hunga Tonga-Hunga Ha'apai volcano",
        tr: "Hunga Tonga-Hunga Ha'apai yanardağı çevresindeki deniz"
      },
      lat: -20.55,
      lon: -175.39
    },
    kabel: ["Tonga Cable (international)", "Tonga Domestic Cable"],
    netze: [],
    dauerTage: 38,
    quellen: [
      {
        name: "RNZ: Tonga's international cable restored, Angaben von Tonga Cable Ltd (22.02.2022)",
        url: "https://www.rnz.co.nz/international/pacific-news/462052/the-southern-cross-cable-that-connects-tonga-to-the-outside-world-is-fixed",
        art: "presse"
      },
      {
        name: "Islands Business: Tonga Domestic submarine cable repair completed, Angaben von Tonga Cable Ltd (18.07.2023)",
        url: "https://islandsbusiness.com/news-break/tonga-domestic-submarine-cable-repair-completed/",
        art: "presse"
      },
      {
        name: "AAAS/EurekAlert: Mitteilung zu Clare u. a., Science 2023 (doi 10.1126/science.adi3038)",
        url: "https://www.eurekalert.org/news-releases/1000406",
        art: "analyse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "spitzbergen-2022",
    datum: "2022-01-07",
    art: "kabel",
    ursache: "unklar",
    gesichert: false,
    titel: {
      de: "Spitzbergen: eines von zwei Seekabeln fällt aus",
      en: "Svalbard: one of two submarine cables fails",
      tr: "Svalbard: iki denizaltı kablosundan biri arızalandı"
    },
    text: {
      de: "Am 7. Januar 2022 fiel eines der beiden Seekabel zwischen Spitzbergen und dem norwegischen Festland aus; der Schaden lag laut Betreiber Space Norway 130 bis 230 km von Longyearbyen entfernt. Das zweite Kabel trug den Verkehr weiter, die Redundanz war am 18. Januar wiederhergestellt. Die Polizei ging zunächst von menschlicher Einwirkung aus und stellte die Ermittlungen später mangels Beweisen ein.",
      en: "On 7 January 2022 one of the two submarine cables between Svalbard and the Norwegian mainland failed; according to the operator Space Norway the fault lay 130 to 230 km from Longyearbyen. The second cable continued to carry traffic, and redundancy was restored on 18 January. Police initially assumed human impact and later dropped the investigation for lack of evidence.",
      tr: "7 Ocak 2022'de Svalbard ile Norveç anakarası arasındaki iki denizaltı kablosundan biri arızalandı; işletmeci Space Norway'e göre arıza Longyearbyen'e 130 ila 230 km uzaklıktaydı. İkinci kablo trafiği taşımayı sürdürdü, yedeklilik 18 Ocak'ta yeniden sağlandı. Polis başlangıçta insan etkisi olduğunu varsaydı, sonra soruşturmayı delil yetersizliğinden kapattı."
    },
    ort: {
      name: {
        de: "Seegebiet südwestlich von Spitzbergen",
        en: "Waters south-west of Spitsbergen",
        tr: "Spitsbergen'in güneybatısındaki deniz"
      },
      lat: 76.9,
      lon: 13.0
    },
    kabel: ["Svalbard Fiber"],
    netze: [],
    dauerTage: 11,
    quellen: [
      {
        name: "The Barents Observer: 'Human activity' behind Svalbard cable disruption, Angaben von Polizei und Space Norway (11.02.2022)",
        url: "https://www.thebarentsobserver.com/security/human-activity-behind-svalbard-cable-disruption/160886",
        art: "presse"
      },
      {
        name: "High North News: Still Breach on Svalbard Fiber Cable, Angaben von Space Norway (19.01.2022)",
        url: "https://en.highnorthnews.com/arctic-living/still-breach-on-svalbard-fiber-cable-we-will-not-speculate-about-cause/168966",
        art: "presse"
      },
      {
        name: "heise online: Bericht über Fotos des Schadens und die Einstellung der Ermittlungen (28.05.2024)",
        url: "https://www.heise.de/-9736465",
        art: "presse"
      }
    ],
    offen: ["ursache"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "facebook-2021",
    datum: "2021-10-04",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: true,
    titel: {
      de: "Facebook-Ausfall nach Wartungsfehler",
      en: "Facebook outage after maintenance error",
      tr: "Bakım hatası sonrası Facebook kesintisi"
    },
    text: {
      de: "Am 4. Oktober 2021 trennte ein Wartungsbefehl versehentlich das Backbone-Netz von Facebook; ein Prüfwerkzeug hätte ihn stoppen sollen, hatte aber einen Fehler. Daraufhin zogen die DNS-Server ihre BGP-Ankündigungen zurück, und die Dienste des Unternehmens waren weltweit nicht erreichbar. Cloudflare sah die Rücknahmen ab etwa 15:40 UTC und die Rückkehr gegen 21:20 UTC.",
      en: "On 4 October 2021 a maintenance command unintentionally disconnected Facebook's backbone network; an audit tool should have stopped it but contained a bug. As a result the DNS servers withdrew their BGP announcements and the company's services were unreachable worldwide. Cloudflare saw the withdrawals from about 15:40 UTC and the return at around 21:20 UTC.",
      tr: "4 Ekim 2021'de bir bakım komutu Facebook'un omurga ağının bağlantılarını istemeden kesti; bir denetim aracının komutu durdurması gerekiyordu, ancak araçta bir hata vardı. Bunun üzerine DNS sunucuları BGP duyurularını geri çekti ve şirketin hizmetleri dünya genelinde erişilemez oldu. Cloudflare geri çekmeleri yaklaşık 15:40 UTC'den itibaren, geri dönüşü ise 21:20 UTC dolaylarında gözlemledi."
    },
    ort: null,
    kabel: [],
    netze: ["AS32934 Facebook"],
    dauerTage: 0.24,
    quellen: [
      {
        name: "Meta Engineering: More details about the October 4 outage (05.10.2021)",
        url: "https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/",
        art: "primaer"
      },
      {
        name: "Cloudflare: Understanding how Facebook disappeared from the Internet (04.10.2021)",
        url: "https://blog.cloudflare.com/october-2021-facebook-outage/",
        art: "analyse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "rostelecom-2020",
    datum: "2020-04-01",
    art: "routing",
    ursache: "unklar",
    gesichert: false,
    titel: {
      de: "Rostelecom kündigt Präfixe großer Dienste an",
      en: "Rostelecom announces prefixes of major services",
      tr: "Rostelecom büyük hizmetlerin ön eklerini duyurdu"
    },
    text: {
      de: "Am 1. April 2020 ab 19:28 UTC kündigte Rostelecom (AS12389) Adressbereiche anderer Netze an, darunter Amazon und Akamai. Zur Zahl der Präfixe gibt es abweichende Angaben (mehr als 8.800 laut BGPmon, 4.569 laut der MANRS-Auswertung), ebenso zur Dauer (etwa zehn Minuten bis knapp eine Stunde). Die Ursache ist nicht festgestellt.",
      en: "On 1 April 2020 from 19:28 UTC Rostelecom (AS12389) announced address ranges of other networks, among them Amazon and Akamai. Figures differ on the number of prefixes (more than 8,800 according to BGPmon, 4,569 according to the MANRS analysis) and on the duration (about ten minutes to almost an hour). The cause has not been established.",
      tr: "1 Nisan 2020'de saat 19:28 UTC'den itibaren Rostelecom (AS12389), aralarında Amazon ve Akamai'nin de bulunduğu başka ağların adres aralıklarını duyurdu. Ön ek sayısı (BGPmon'a göre 8.800'den fazla, MANRS incelemesine göre 4.569) ve süre (yaklaşık on dakika ile bir saate yakın) konusunda veriler farklı. Neden saptanmış değil."
    },
    ort: null,
    kabel: [],
    netze: ["AS12389 Rostelecom", "AS20764 Rascom"],
    dauerTage: null,
    quellen: [
      {
        name: "MANRS: Not just another BGP Hijack (April 2020)",
        url: "https://manrs.org/2020/04/not-just-another-bgp-hijack/",
        art: "analyse"
      }
    ],
    offen: ["ursache", "dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "verizon-dqe-2019",
    datum: "2019-06-24",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: true,
    titel: {
      de: "Routenleck über Verizon stört Teile des Netzes",
      en: "Route leak via Verizon disrupts parts of the Internet",
      tr: "Verizon üzerinden rota sızıntısı interneti aksattı"
    },
    text: {
      de: "Am 24. Juni 2019 um 10:34 UTC gelangten kleinteilige Routen, die ein Routen-Optimierer beim Anbieter DQE erzeugt hatte, über dessen Kunden Allegheny Technologies zu Verizon (AS701) und von dort ins weltweite Netz. Verkehr zu Cloudflare, Amazon und anderen wurde fehlgeleitet; Cloudflare verlor zeitweise rund 15 Prozent seines weltweiten Verkehrs. Das Leck endete um 12:38 UTC nach gut zwei Stunden.",
      en: "On 24 June 2019 at 10:34 UTC more-specific routes generated by a route optimizer at the provider DQE reached Verizon (AS701) via DQE's customer Allegheny Technologies and from there the global Internet. Traffic to Cloudflare, Amazon and others was misdirected; at its worst Cloudflare lost about 15 percent of its global traffic. The leak ended at 12:38 UTC after a little over two hours.",
      tr: "24 Haziran 2019'da saat 10:34 UTC'de, sağlayıcı DQE'deki bir rota iyileştirme yazılımının ürettiği daha dar kapsamlı rotalar, DQE'nin müşterisi Allegheny Technologies üzerinden Verizon'a (AS701), oradan da küresel internete ulaştı. Cloudflare, Amazon ve başkalarına giden trafik yanlış yönlendirildi; Cloudflare en kötü anda küresel trafiğinin yaklaşık yüzde 15'ini yitirdi. Sızıntı, iki saati biraz aşan bir sürenin ardından 12:38 UTC'de sona erdi."
    },
    ort: null,
    kabel: [],
    netze: ["AS33154 DQE Communications", "AS396531 Allegheny Technologies", "AS701 Verizon", "AS13335 Cloudflare"],
    dauerTage: 0.09,
    quellen: [
      {
        name: "Cloudflare: How Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Today (24.06.2019)",
        url: "https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/",
        art: "analyse"
      },
      {
        name: "Cloudflare: The deep-dive into how Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Monday",
        url: "https://blog.cloudflare.com/the-deep-dive-into-how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-monday/",
        art: "analyse"
      },
      {
        name: "Kentik: A Brief History of the Internet's Biggest BGP Incidents (06.06.2023)",
        url: "https://www.kentik.com/blog/a-brief-history-of-the-internets-biggest-bgp-incidents/",
        art: "analyse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "google-mainone-2018",
    datum: "2018-11-12",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: true,
    titel: {
      de: "MainOne leitet Google-Verkehr fehl",
      en: "MainOne misroutes Google traffic",
      tr: "MainOne Google trafiğini yanlış yönlendirdi"
    },
    text: {
      de: "Am 12. November 2018 ab 21:12 UTC gab der nigerianische Anbieter MainOne (AS37282) Routen zu Adressbereichen von Google an China Telecom (AS4809) weiter, das sie nicht filterte. Google-Dienste waren 74 Minuten lang gestört. MainOne räumte einen Konfigurationsfehler ein.",
      en: "On 12 November 2018 from 21:12 UTC the Nigerian provider MainOne (AS37282) passed routes to Google address ranges on to China Telecom (AS4809), which did not filter them. Google services were disrupted for 74 minutes. MainOne acknowledged a configuration error.",
      tr: "12 Kasım 2018'de saat 21:12 UTC'den itibaren Nijeryalı sağlayıcı MainOne (AS37282), Google'a ait adres aralıklarının rotalarını China Telecom'a (AS4809) aktardı; China Telecom bunları filtrelemedi. Google hizmetleri 74 dakika boyunca aksadı. MainOne bir yapılandırma hatasını kabul etti."
    },
    ort: null,
    kabel: [],
    netze: ["AS37282 MainOne", "AS4809 China Telecom", "AS15169 Google", "AS20485 TransTelecom"],
    dauerTage: 0.05,
    quellen: [
      {
        name: "Internet Society: Route Leak Causes Major Google Outage (15.11.2018)",
        url: "https://www.internetsociety.org/blog/2018/11/route-leak-caused-a-major-google-outage/",
        art: "analyse"
      },
      {
        name: "Cloudflare: How a Nigerian ISP Accidentally Knocked Google Offline (15.11.2018)",
        url: "https://blog.cloudflare.com/how-a-nigerian-isp-knocked-google-offline/",
        art: "analyse"
      },
      {
        name: "Kentik: A Brief History of the Internet's Biggest BGP Incidents (06.06.2023)",
        url: "https://www.kentik.com/blog/a-brief-history-of-the-internets-biggest-bgp-incidents/",
        art: "analyse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "indosat-2014",
    datum: "2014-04-02",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: false,
    titel: {
      de: "Indosat kündigt massenhaft fremde Präfixe an",
      en: "Indosat announces masses of foreign prefixes",
      tr: "Indosat çok sayıda yabancı ön eki duyurdu"
    },
    text: {
      de: "Am Abend des 2. April 2014 kündigte der indonesische Anbieter Indosat (AS4761) Adressbereiche an, die ihm nicht zugeteilt waren. BGPmon meldete 417.038 betroffene Präfixe, das RIPE NCC sah in seinen Messdaten 10.635; die Häufung lag zwischen 18:00 und 21:00 UTC. Das RIPE NCC wertet den Vorfall als Fehlkonfiguration, eine Stellungnahme des Betreibers enthalten die gelesenen Quellen nicht.",
      en: "On the evening of 2 April 2014 the Indonesian provider Indosat (AS4761) announced address ranges that were not allocated to it. BGPmon reported 417,038 affected prefixes, while the RIPE NCC saw 10,635 in its measurement data; the surge occurred between 18:00 and 21:00 UTC. The RIPE NCC describes the incident as a misconfiguration; the sources consulted contain no statement from the operator.",
      tr: "2 Nisan 2014 akşamı Endonezyalı sağlayıcı Indosat (AS4761), kendisine tahsis edilmemiş adres aralıklarını duyurdu. BGPmon 417.038 etkilenen ön ek bildirdi, RIPE NCC ise kendi ölçüm verilerinde 10.635 ön ek gördü; yoğunlaşma 18:00 ile 21:00 UTC arasındaydı. RIPE NCC olayı bir yapılandırma hatası olarak değerlendiriyor; incelenen kaynaklarda işletmecinin bir açıklaması yer almıyor."
    },
    ort: null,
    kabel: [],
    netze: ["AS4761 Indosat"],
    dauerTage: null,
    quellen: [
      {
        name: "RIPE Labs: BGP Leaks in Indonesia (04.04.2014)",
        url: "https://labs.ripe.net/author/wilhelm/bgp-leaks-in-indonesia",
        art: "analyse"
      },
      {
        name: "The Register: Bericht zum Indosat-Vorfall mit Angaben von BGPmon und Renesys (03.04.2014)",
        url: "https://www.theregister.com/2014/04/03/indosat_fatthumbs_route_announcements_again/",
        art: "presse"
      }
    ],
    offen: ["ursache", "dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tohoku-2011",
    datum: "2011-03-11",
    art: "kabel",
    ursache: "beben",
    gesichert: true,
    titel: {
      de: "Tohoku-Beben beschädigt Seekabel vor Japan",
      en: "Tohoku earthquake damages cables off Japan",
      tr: "Tohoku depremi Japonya açıklarında kablolara zarar verdi"
    },
    text: {
      de: "Das Tohoku-Beben vom 11. März 2011 beschädigte mehrere Seekabel, die Japan mit dem übrigen Asien und den USA verbinden. Betreiber meldeten Ausfälle unter anderem auf PC-1 (Nord- und Weststrecke), APCN-2 und Japan-US; der Verkehr wurde über andere Strecken umgeleitet. Die Nordstrecke von PC-1 war am 26. Mai 2011 wieder in Betrieb, die vollständige Wiederherstellung von PC-1 wurde am 22. Juni 2011 gemeldet.",
      en: "The Tohoku earthquake of 11 March 2011 damaged several submarine cables linking Japan with the rest of Asia and the United States. Operators reported outages on PC-1 (North and West routes), APCN-2 and Japan-US, among others; traffic was rerouted over other paths. The PC-1 North route was back in service on 26 May 2011, and full restoration of PC-1 was reported on 22 June 2011.",
      tr: "11 Mart 2011 Tohoku depremi, Japonya'yı Asya'nın geri kalanına ve ABD'ye bağlayan birkaç denizaltı kablosuna zarar verdi. İşletmeciler, aralarında PC-1 (kuzey ve batı güzergâhları), APCN-2 ve Japan-US'in de bulunduğu kablolarda kesinti bildirdi; trafik başka güzergâhlara aktarıldı. PC-1'in kuzey güzergâhı 26 Mayıs 2011'de yeniden hizmete girdi, PC-1'in tümüyle onarıldığı ise 22 Haziran 2011'de bildirildi."
    },
    ort: {
      name: {
        de: "Pazifik vor der Ostküste von Honshu",
        en: "Pacific Ocean off the east coast of Honshu",
        tr: "Honshu'nun doğu kıyısı açıklarında Büyük Okyanus"
      },
      lat: 37.5,
      lon: 142.0
    },
    kabel: ["PC-1", "APCN-2", "Japan-US"],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "NTT Communications: Earthquake Update, Mitteilung vom 22.03.2011 (PR Newswire)",
        url: "https://www.prnewswire.co.uk/news-releases/earthquake-update-ntt-com-services-gradually-restored-156807605.html",
        art: "primaer"
      },
      {
        name: "Lightwave: Fiber effect of Japan earthquake still sorting out (17.03.2011)",
        url: "https://www.lightwaveonline.com/network-design/article/16660580/fiber-effect-of-japan-earthquake-still-sorting-out",
        art: "presse"
      },
      {
        name: "Lightwave: Pacific Crossing repairs transpacific cable, restores PC-1 West route (22.06.2011)",
        url: "https://www.lightwaveonline.com/network-design/article/16661083/pacific-crossing-repairs-transpacific-cable-restores-pc1-west-route",
        art: "presse"
      }
    ],
    offen: ["dauerTage"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "china-telecom-2010",
    datum: "2010-04-08",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: false,
    titel: {
      de: "China Telecom kündigt fremde Netze an",
      en: "China Telecom announces foreign networks",
      tr: "China Telecom başka ağların adreslerini duyurdu"
    },
    text: {
      de: "Am 8. April 2010 kündigte AS23724, ein Netz von China Telecom, kurzzeitig Adressbereiche zahlreicher anderer Netze an. Renesys zählte bis zu 31.847 Präfixe in einem Fenster von 18 Minuten ab etwa 15:54 UTC, eine begutachtete Auswertung von 2013 nennt rund 50.000. Diese Auswertung stützt die Annahme eines Versehens; von zuständiger Stelle festgestellt ist die Ursache nicht.",
      en: "On 8 April 2010 AS23724, a network of China Telecom, briefly announced address ranges belonging to numerous other networks. Renesys counted up to 31,847 prefixes in an 18-minute window starting at about 15:54 UTC, while a peer-reviewed analysis from 2013 gives about 50,000. That analysis supports the assumption of an accident; the cause has not been established by a competent body.",
      tr: "8 Nisan 2010'da China Telecom'a ait AS23724 ağı, çok sayıda başka ağın adres aralıklarını kısa süreliğine duyurdu. Renesys, yaklaşık 15:54 UTC'de başlayan 18 dakikalık bir aralıkta 31.847'ye varan ön ek saydı; 2013 tarihli hakemli bir çalışma ise yaklaşık 50.000 diyor. Bu çalışma bir kaza olduğu varsayımını destekliyor; neden yetkili bir merci tarafından saptanmış değil."
    },
    ort: null,
    kabel: [],
    netze: ["AS23724 China Telecom", "AS4134 China Telecom"],
    dauerTage: 0.01,
    quellen: [
      {
        name: "Hiran, Carlsson, Gill: Characterizing Large-scale Routing Anomalies: A Case Study of the China Telecom Incident, PAM 2013",
        url: "https://www.ida.liu.se/~nikca89/papers/pam13.pdf",
        art: "analyse"
      },
      {
        name: "NANOG-Mailingliste: Bestätigung von Renesys zu AS23724 (08.04.2010)",
        url: "https://lists.nanog.org/archives/list/test@lists.nanog.org/message/RDEPBNXYHGIEILMSVTXNZNDVQ3MBBYJV",
        art: "analyse"
      },
      {
        name: "Kentik: A Brief History of the Internet's Biggest BGP Incidents (06.06.2023)",
        url: "https://www.kentik.com/blog/a-brief-history-of-the-internets-biggest-bgp-incidents/",
        art: "analyse"
      }
    ],
    offen: ["ursache"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "youtube-pakistan-2008",
    datum: "2008-02-24",
    art: "routing",
    ursache: "kapern",
    gesichert: true,
    titel: {
      de: "Pakistan Telecom leitet YouTube-Verkehr um",
      en: "Pakistan Telecom diverts YouTube traffic",
      tr: "Pakistan Telecom YouTube trafiğini saptırdı"
    },
    text: {
      de: "Am 24. Februar 2008 um 18:47 UTC kündigte Pakistan Telecom (AS17557) ein Teilnetz von YouTube an; der Anbieter PCCW Global gab die Ankündigung weltweit weiter. Weil das Teilnetz kleiner war als YouTubes eigene Ankündigung, floss der Verkehr vielerorts nach Pakistan und YouTube war für viele Nutzer nicht erreichbar. Um 21:01 UTC zog PCCW die Routen zurück, nach gut zwei Stunden.",
      en: "On 24 February 2008 at 18:47 UTC Pakistan Telecom (AS17557) announced a subnet of YouTube's address space; the provider PCCW Global propagated the announcement worldwide. Because the subnet was more specific than YouTube's own announcement, traffic in many places flowed to Pakistan and YouTube was unreachable for many users. At 21:01 UTC PCCW withdrew the routes, after a little over two hours.",
      tr: "24 Şubat 2008'de saat 18:47 UTC'de Pakistan Telecom (AS17557), YouTube'a ait bir alt ağı duyurdu; sağlayıcı PCCW Global bu duyuruyu dünya geneline yaydı. Alt ağ YouTube'un kendi duyurusundan daha dar olduğu için trafik birçok yerde Pakistan'a aktı ve YouTube birçok kullanıcı için erişilemez oldu. PCCW, iki saati biraz aşan bir sürenin ardından 21:01 UTC'de rotaları geri çekti."
    },
    ort: null,
    kabel: [],
    netze: ["AS17557 Pakistan Telecom", "AS36561 YouTube", "AS3491 PCCW Global"],
    dauerTage: 0.09,
    quellen: [
      {
        name: "RIPE NCC: YouTube Hijacking: A RIPE NCC RIS case study",
        url: "https://www.ripe.net/about-us/news/youtube-hijacking-a-ripe-ncc-ris-case-study/",
        art: "analyse"
      },
      {
        name: "Kentik: A Brief History of the Internet's Biggest BGP Incidents (06.06.2023)",
        url: "https://www.kentik.com/blog/a-brief-history-of-the-internets-biggest-bgp-incidents/",
        art: "analyse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "alexandria-2008",
    datum: "2008-01-30",
    art: "kabel",
    ursache: "unklar",
    gesichert: false,
    titel: {
      de: "Zwei Seekabel vor Alexandria getrennt",
      en: "Two submarine cables cut off Alexandria",
      tr: "İskenderiye açıklarında iki denizaltı kablosu koptu"
    },
    text: {
      de: "Am 30. Januar 2008 fielen binnen weniger Stunden SEA-ME-WE 4 und FLAG Europe-Asia aus, 25 km und rund 8 km von Alexandria entfernt. Betroffen war der Internet- und Telefonverkehr im Nahen Osten und in Südasien. SEA-ME-WE 4 war am 8. Februar repariert, FLAG Europe-Asia am 9. Februar; die Ursache ist in den gelesenen Quellen nicht festgestellt.",
      en: "On 30 January 2008 SEA-ME-WE 4 and FLAG Europe-Asia failed within a few hours of each other, 25 km and about 8 km from Alexandria. Internet and telephone traffic in the Middle East and South Asia was affected. SEA-ME-WE 4 was repaired on 8 February and FLAG Europe-Asia on 9 February; the sources consulted do not establish the cause.",
      tr: "30 Ocak 2008'de SEA-ME-WE 4 ve FLAG Europe-Asia kabloları, İskenderiye'ye 25 km ve yaklaşık 8 km uzaklıkta birkaç saat arayla devre dışı kaldı. Orta Doğu ve Güney Asya'da internet ve telefon trafiği etkilendi. SEA-ME-WE 4 8 Şubat'ta, FLAG Europe-Asia 9 Şubat'ta onarıldı; incelenen kaynaklarda neden saptanmış değil."
    },
    ort: {
      name: {
        de: "Mittelmeer vor Alexandria",
        en: "Mediterranean Sea off Alexandria",
        tr: "İskenderiye açıklarında Akdeniz"
      },
      lat: 31.4,
      lon: 29.8
    },
    kabel: ["SEA-ME-WE 4", "FLAG Europe-Asia (FEA)"],
    netze: [],
    dauerTage: 10,
    quellen: [
      {
        name: "RIPE NCC: Mediterranean Fibre Cable Cut, Zeitleiste",
        url: "https://www.ripe.net/analyse/archived-projects/mediterranean-fibre-cable-cut/",
        art: "analyse"
      },
      {
        name: "RIPE NCC und Universität Roma Tre: Mediterranean Fiber Cable Cut (January-February 2008), Bericht RT-DIA-124-2008",
        url: "https://compunet.ing.uniroma3.it/assets/publications/2008-124.pdf",
        art: "analyse"
      }
    ],
    offen: ["ursache"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "taiwan-hengchun-2006",
    datum: "2006-12-26",
    art: "kabel",
    ursache: "beben",
    gesichert: true,
    titel: {
      de: "Beben vor Taiwan kappt Kabel in der Luzonstraße",
      en: "Earthquake off Taiwan cuts cables in Luzon Strait",
      tr: "Tayvan açıklarındaki deprem Luzon Boğazı'nda kablo kopardı"
    },
    text: {
      de: "Am 26. Dezember 2006 löste das Pingtung-Beben (Hengchun) vor Südtaiwan Rutschungen und mindestens drei Sedimentströme aus, die Seekabel in der Luzonstraße beschädigten. Carter u. a. (2014) nennen 22 Kabelbrüche, eine Darstellung des Fachverbands ICPC mehr als 15 Fehler an 9 Kabeln. Internetverbindungen in der Region waren 49 Tage lang beeinträchtigt, während elf Kabelschiffe reparierten.",
      en: "On 26 December 2006 the Pingtung (Hengchun) earthquake off southern Taiwan triggered landslides and at least three sediment flows that damaged submarine cables in the Luzon Strait. Carter et al. (2014) report 22 cable breaks, while a presentation by the industry body ICPC cites more than 15 faults on 9 cables. Internet connections in the region were impaired for 49 days while eleven cable ships carried out repairs.",
      tr: "26 Aralık 2006'da Tayvan'ın güneyi açıklarındaki Pingtung (Hengchun) depremi heyelanları ve en az üç tortul akıntıyı tetikledi; bunlar Luzon Boğazı'ndaki denizaltı kablolarına zarar verdi. Carter ve arkadaşları (2014) 22 kablo kopmasından, meslek birliği ICPC'nin bir sunumu ise 9 kabloda 15'ten fazla arızadan söz ediyor. On bir kablo gemisi onarım yaparken bölgedeki internet bağlantıları 49 gün boyunca aksadı."
    },
    ort: {
      name: {
        de: "Luzonstraße südlich von Taiwan",
        en: "Luzon Strait south of Taiwan",
        tr: "Tayvan'ın güneyindeki Luzon Boğazı"
      },
      lat: 21.8,
      lon: 120.5
    },
    kabel: [],
    netze: [],
    dauerTage: 49,
    quellen: [
      {
        name: "Carter u. a.: Insights into Submarine Geohazards from Breaks in Subsea Telecommunication Cables, Oceanography 27(2), 2014",
        url: "https://tos.org/oceanography/assets/docs/27-2_carter.pdf",
        art: "analyse"
      },
      {
        name: "ICPC (S. Drew): Causes of Cable Faults and Repairs in Regional Seas, Vortragsfolien",
        url: "https://cil.nus.edu.sg/wp-content/uploads/2009/10/Causes_of_Cable_Faults_and_Repairs_in_Regional_Seas.pdf",
        art: "primaer"
      }
    ],
    offen: ["kabel"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "as7007-1997",
    datum: "1997-04-25",
    art: "routing",
    ursache: "fehlkonfiguration",
    gesichert: true,
    titel: {
      de: "AS7007 flutet das Netz mit falschen Routen",
      en: "AS7007 floods the Internet with false routes",
      tr: "AS7007 interneti hatalı rotalarla doldurdu"
    },
    text: {
      de: "Am 25. April 1997 gab ein Router mit der Kennung AS7007 eine vollständige Routingtabelle in zerlegter Form und ohne Pfadangaben weiter, sodass große Teile des Internetverkehrs zu ihm gelenkt wurden. Der Betreiber trennte die Verbindung nach rund 45 Minuten, die Routen hielten sich aber noch bis zum Abend. Er nannte einen fehlenden Eingangsfilter als eigenen Fehler; warum der Router die Routen zerlegte, blieb nach seiner Darstellung ungeklärt.",
      en: "On 25 April 1997 a router identified as AS7007 passed on a full routing table in de-aggregated form and without path information, drawing large parts of Internet traffic towards itself. The operator disconnected after about 45 minutes, but the routes persisted until the evening. It named a missing inbound filter as its own error; why the router de-aggregated the routes remained unexplained in its account.",
      tr: "25 Nisan 1997'de AS7007 kimlikli bir yönlendirici, tam bir yönlendirme tablosunu parçalanmış biçimde ve yol bilgisi olmadan yaydı; böylece internet trafiğinin büyük bölümü ona yöneldi. İşletmeci yaklaşık 45 dakika sonra bağlantıyı kesti, ancak rotalar akşama kadar dolaşımda kaldı. İşletmeci, eksik giriş filtresini kendi hatası olarak belirtti; yönlendiricinin rotaları neden parçaladığı ise kendi anlatımına göre açıklanamadı."
    },
    ort: null,
    kabel: [],
    netze: ["AS7007 MAI Network Services (Management Analysis, Inc.)"],
    dauerTage: 0.3,
    quellen: [
      {
        name: "NANOG-Mailingliste: 7007 Explanation and Apology, Nachricht des Betreibers (27.04.1997)",
        url: "https://lists.nanog.org/archives/list/test@lists.nanog.org/thread/V4BT7NISHJSXVHZ2EZ3Q3GQRZ3WZDJRM/",
        art: "primaer"
      },
      {
        name: "Kentik: A Brief History of the Internet's Biggest BGP Incidents (06.06.2023)",
        url: "https://www.kentik.com/blog/a-brief-history-of-the-internets-biggest-bgp-incidents/",
        art: "analyse"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "grand-banks-1929",
    datum: "1929-11-18",
    art: "kabel",
    ursache: "beben",
    gesichert: true,
    titel: {
      de: "Grand-Banks-Beben zerreißt Atlantikkabel",
      en: "Grand Banks earthquake breaks Atlantic cables",
      tr: "Grand Banks depremi Atlantik kablolarını kopardı"
    },
    text: {
      de: "Am Abend des 18. November 1929 löste ein Erdbeben der Stärke 7,2 südlich von Neufundland untermeerische Rutschungen und einen Trübestrom aus. Transatlantische Telegrafenkabel rissen teils sofort, teils nacheinander in den folgenden Stunden, in Wassertiefen bis 5.270 m. Wie lange die Reparaturen dauerten, nennen die gelesenen Quellen nicht.",
      en: "On the evening of 18 November 1929 a magnitude 7.2 earthquake south of Newfoundland triggered submarine landslides and a turbidity current. Transatlantic telegraph cables broke, some at once and others one after another over the following hours, in water depths down to 5,270 m. The sources consulted do not state how long the repairs took.",
      tr: "18 Kasım 1929 akşamı Newfoundland'ın güneyinde 7,2 büyüklüğündeki bir deprem, denizaltı heyelanlarını ve bir türbidite akıntısını tetikledi. Transatlantik telgraf kablolarının bir kısmı hemen, bir kısmı ise izleyen saatlerde art arda koptu; kopmalar 5.270 m derinliğe kadar görüldü. Onarımların ne kadar sürdüğü incelenen kaynaklarda belirtilmiyor."
    },
    ort: {
      name: {
        de: "Kontinentalhang südlich von Neufundland",
        en: "Continental slope south of Newfoundland",
        tr: "Newfoundland'ın güneyindeki kıta yamacı"
      },
      lat: 44.5,
      lon: -56.0
    },
    kabel: [],
    netze: [],
    dauerTage: null,
    quellen: [
      {
        name: "Carter u. a.: Insights into Submarine Geohazards from Breaks in Subsea Telecommunication Cables, Oceanography 27(2), 2014",
        url: "https://tos.org/oceanography/assets/docs/27-2_carter.pdf",
        art: "analyse"
      },
      {
        name: "EARTH Magazine (American Geosciences Institute): Benchmarks: November 18, 1929 (27.10.2017)",
        url: "https://www.earthmagazine.org/article/benchmarks-november-18-1929-turbidity-currents-snap-trans-atlantic-cables/",
        art: "presse"
      }
    ],
    offen: ["kabel", "dauerTage"],
    geprueftAm: "2026-11-17"
  }
];
