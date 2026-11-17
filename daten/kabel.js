// Seekabel: eine von Hand gepflegte Auswahl wichtiger Kabel, nicht alle Kabel der Welt.
// Jede Angabe stammt aus den genannten Quellen; was sich nicht bestätigen ließ, ist null und steht unter offen.
// status: betrieb, geplant oder stillgelegt. laengeKm: Länge laut Betreiber. kapazitaetTbit: Auslegungskapazität
// in Tbit/s, je nach Quelle die Erstauslegung oder der Stand nach einem Ausbau; keine genutzte Kapazität.
// orte: belegte Anlandeorte in der Reihenfolge entlang des Kabels, höchstens zwölf; die Koordinaten meinen den Ort,
// nicht die Station. weitereOrte: Zahl der Anlandeorte darüber hinaus. Ein Ort kann mit „see“ den Punkt des
// Seewegenetzes (daten/seewege.js) vorgeben, an den die Karte ihn anschließt.
window.NETZ_KABEL = [
  {
    id: "marea",
    name: "MAREA",
    status: "betrieb",
    inBetrieb: "2018",
    ausserBetrieb: null,
    laengeKm: 6600,
    faserpaare: 8,
    kapazitaetTbit: 200,
    eigner: ["Microsoft", "Meta", "Telxius"],
    konsortium: true,
    gebiet: "atlantik",
    orte: [
      { name: "Virginia Beach", land: "US", lat: 36.85, lon: -75.98 },
      { name: "Sopelana", land: "ES", lat: 43.38, lon: -2.98 }
    ],
    weitereOrte: 0,
    text: {
      de: "MAREA verbindet Virginia Beach in den USA mit Sopelana bei Bilbao in Spanien. Das Kabel wurde von Microsoft, Facebook (heute Meta) und Telxius gebaut und wird von Telxius betrieben.",
      en: "MAREA connects Virginia Beach in the United States with Sopelana near Bilbao in Spain. The cable was built by Microsoft, Facebook (now Meta) and Telxius and is operated by Telxius.",
      tr: "MAREA, ABD'deki Virginia Beach ile İspanya'da Bilbao yakınlarındaki Sopelana'yı birbirine bağlar. Kablo Microsoft, Facebook (bugünkü Meta) ve Telxius tarafından inşa edilmiştir ve Telxius tarafından işletilmektedir."
    },
    quellen: [
      { name: "Telxius: Marea", url: "https://telxius.com/en/our-network/marea/" },
      {
        name: "Microsoft: Microsoft and Facebook to build subsea cable across Atlantic (2016)",
        url: "https://learn.microsoft.com/en-us/archive/blogs/testtesttestbug/microsoft-and-facebook-to-build-subsea-cable-across-atlantic"
      },
      {
        name: "Lightwave: Amazon Web Services to take capacity on MAREA (2019)",
        url: "https://lightwaveonline.com/data-center/data-center-interconnectivity/article/16667845/amazon-web-services-to-take-capacity-on-marea-transatlantic-submarine-cable-system"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "dunant",
    name: "Dunant",
    status: "betrieb",
    inBetrieb: "2021",
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: 12,
    kapazitaetTbit: 250,
    eigner: ["Google"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Virginia Beach", land: "US", lat: 36.85, lon: -75.98 },
      { name: "Saint-Hilaire-de-Riez", land: "FR", lat: 46.72, lon: -1.95 }
    ],
    weitereOrte: 0,
    text: {
      de: "Dunant ist ein Seekabel von Google zwischen Virginia Beach in den USA und Saint-Hilaire-de-Riez an der französischen Atlantikküste. Es war das erste Langstreckenkabel mit zwölf Faserpaaren in Raummultiplex-Technik (SDM).",
      en: "Dunant is a Google subsea cable between Virginia Beach in the United States and Saint-Hilaire-de-Riez on the French Atlantic coast. It was the first long-haul cable with twelve fibre pairs using space-division multiplexing (SDM).",
      tr: "Dunant, ABD'deki Virginia Beach ile Fransa'nın Atlantik kıyısındaki Saint-Hilaire-de-Riez arasında uzanan bir Google denizaltı kablosudur. Uzay bölmeli çoğullama (SDM) tekniğiyle on iki fiber çifti taşıyan ilk uzun mesafe kablosudur."
    },
    quellen: [
      {
        name: "SubCom und Google: Dunant Submarine Cable System Ready for Service (03.02.2021)",
        url: "https://www.subcom.com/documents/2021/Dunant_RFS_Final_3FEBRUARY2021.pdf"
      },
      { name: "EXA Infrastructure: Our subsea cable systems", url: "https://exainfra.net/subsea-systems" }
    ],
    offen: ["laengeKm"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "grace-hopper",
    name: "Grace Hopper",
    status: "betrieb",
    inBetrieb: "2022",
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: 16,
    kapazitaetTbit: 352,
    eigner: ["Google"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Bellport", land: "US", lat: 40.76, lon: -72.94 },
      { name: "Bude", land: "GB", lat: 50.83, lon: -4.55, see: "keltischeSee" },
      { name: "Sopelana", land: "ES", lat: 43.38, lon: -2.98 }
    ],
    weitereOrte: 0,
    text: {
      de: "Grace Hopper ist ein Seekabel von Google mit 16 Faserpaaren, das New York mit Bude in Cornwall und mit Bilbao in Spanien verbindet. Die Strecke zwischen den USA und Großbritannien ging im September 2022 in Betrieb.",
      en: "Grace Hopper is a Google subsea cable with 16 fibre pairs linking New York with Bude in Cornwall and with Bilbao in Spain. The section between the United States and the United Kingdom entered service in September 2022.",
      tr: "Grace Hopper, New York'u Cornwall'daki Bude'a ve İspanya'daki Bilbao'ya bağlayan, 16 fiber çiftli bir Google denizaltı kablosudur. ABD ile Birleşik Krallık arasındaki bölüm Eylül 2022'de hizmete girmiştir."
    },
    quellen: [
      {
        name: "Google: Our Grace Hopper subsea cable has landed in the UK (14.09.2021)",
        url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/united-kingdom/our-grace-hopper-subsea-cable-has-landed-uk/"
      },
      {
        name: "Submarine Networks: Grace Hopper",
        url: "https://www.submarinenetworks.com/en/systems/trans-atlantic/grace-hopper"
      },
      {
        name: "DCD: Google's Grace Hopper cable now live between New York and Cornwall (03.10.2022, Archivkopie)",
        url: "https://web.archive.org/web/20240306222355/https://www.datacenterdynamics.com/en/news/googles-grace-hopper-cable-now-live-between-new-york-and-cornwall/"
      }
    ],
    offen: ["laengeKm"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "amitie",
    name: "Amitié",
    status: "betrieb",
    inBetrieb: "2023",
    ausserBetrieb: null,
    laengeKm: 6783,
    faserpaare: 16,
    kapazitaetTbit: 400,
    eigner: ["Meta", "Microsoft", "EXA Infrastructure", "Vodafone", "Orange"],
    konsortium: true,
    gebiet: "atlantik",
    orte: [
      { name: "Lynn", land: "US", lat: 42.47, lon: -70.95 },
      { name: "Bude", land: "GB", lat: 50.83, lon: -4.55, see: "keltischeSee" },
      { name: "Le Porge", land: "FR", lat: 44.87, lon: -1.09 }
    ],
    weitereOrte: 0,
    text: {
      de: "Amitié verbindet Lynn bei Boston mit Bude in England und Le Porge bei Bordeaux. Orange meldete das Kabel im Oktober 2023 als betriebsbereit; Partner sind Meta, Microsoft, Vodafone und Aqua Comms, das heute zu EXA Infrastructure gehört.",
      en: "Amitié connects Lynn near Boston with Bude in England and Le Porge near Bordeaux. Orange announced the cable as ready for service in October 2023; the partners are Meta, Microsoft, Vodafone and Aqua Comms, which is now part of EXA Infrastructure.",
      tr: "Amitié, Boston yakınlarındaki Lynn'i İngiltere'deki Bude ve Bordeaux yakınlarındaki Le Porge ile birbirine bağlar. Orange, kablonun hizmete hazır olduğunu Ekim 2023'te duyurmuştur; ortaklar Meta, Microsoft, Vodafone ve bugün EXA Infrastructure'a ait olan Aqua Comms'tur."
    },
    quellen: [
      {
        name: "Orange: Pressemitteilung zum Start von AMITIE (18.10.2023)",
        url: "https://newsroom.orange.com/orange-announces-the-launch-of-the-amitie-subsea-cable-offering-a-unique-and-robust-transatlantic-solution-with-ultra-low-latency?lang=eng"
      },
      { name: "EXA Infrastructure: Our subsea cable systems", url: "https://exainfra.net/subsea-systems" },
      {
        name: "Converge Digest: Orange activates AMITIE transatlantic subsea cable",
        url: "https://convergedigest.com/orange-activates-amitie-transatlantic-subsea-cable/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "havfrue-aec-2",
    name: "Havfrue/AEC-2",
    status: "betrieb",
    inBetrieb: "2020",
    ausserBetrieb: null,
    laengeKm: 7851,
    faserpaare: 6,
    kapazitaetTbit: 108,
    eigner: ["Meta", "Google", "EXA Infrastructure", "Bulk Infrastructure"],
    konsortium: true,
    gebiet: "atlantik",
    orte: [
      { name: "Wall Township", land: "US", lat: 40.17, lon: -74.09 },
      { name: "Lecanvey", land: "IE", lat: 53.78, lon: -9.69 },
      { name: "Blaabjerg", land: "DK", lat: 55.75, lon: 8.24 },
      { name: "Kristiansand", land: "NO", lat: 58.15, lon: 8.0 }
    ],
    weitereOrte: 0,
    text: {
      de: "Havfrue, bei EXA Infrastructure als AEC-2 geführt, verbindet New Jersey mit Blaabjerg in Dänemark und hat Abzweige nach Irland und Norwegen. Das Kabel ist seit Ende 2020 in Betrieb.",
      en: "Havfrue, listed by EXA Infrastructure as AEC-2, connects New Jersey with Blaabjerg in Denmark and has branches to Ireland and Norway. The cable has been in service since the end of 2020.",
      tr: "EXA Infrastructure'ın AEC-2 adıyla işlettiği Havfrue, New Jersey'yi Danimarka'daki Blaabjerg'e bağlar ve İrlanda ile Norveç'e uzanan kollara sahiptir. Kablo 2020 yılının sonundan beri hizmettedir."
    },
    quellen: [
      { name: "EXA Infrastructure: Our subsea cable systems", url: "https://exainfra.net/subsea-systems" },
      {
        name: "Submarine Networks: HAVFRUE/AEC-2",
        url: "https://www.submarinenetworks.com/en/systems/trans-atlantic/havfrue"
      },
      {
        name: "Lightwave: Transatlantic AEC-2 submarine cable system is now live (01.12.2020)",
        url: "https://www.lightwaveonline.com/network-design/high-speed-networks/article/14188208/transatlantic-aec2-submarine-cable-system-is-now-live"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ac-1",
    name: "Atlantic Crossing 1 (AC-1)",
    status: "betrieb",
    inBetrieb: "1998-05-01",
    ausserBetrieb: null,
    laengeKm: 14000,
    faserpaare: 2,
    kapazitaetTbit: 5.6,
    eigner: ["Colt Technology Services"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Shirley (Brookhaven)", land: "US", lat: 40.79, lon: -72.87 },
      { name: "Whitesand Bay", land: "GB", lat: 50.08, lon: -5.7 },
      { name: "Beverwijk", land: "NL", lat: 52.48, lon: 4.67 },
      { name: "Sylt", land: "DE", lat: 54.91, lon: 8.31 }
    ],
    weitereOrte: 0,
    text: {
      de: "Atlantic Crossing 1 verbindet Brookhaven im US-Bundesstaat New York mit Whitesand Bay in Cornwall, Beverwijk in den Niederlanden und Sylt in Deutschland. Nach Angaben der US-Behörde FCC ging das System am 1. Mai 1998 in Betrieb.",
      en: "Atlantic Crossing 1 connects Brookhaven in the US state of New York with Whitesand Bay in Cornwall, Beverwijk in the Netherlands and Sylt in Germany. According to the US regulator FCC, the system commenced service on 1 May 1998.",
      tr: "Atlantic Crossing 1, ABD'nin New York eyaletindeki Brookhaven'ı Cornwall'daki Whitesand Bay, Hollanda'daki Beverwijk ve Almanya'daki Sylt ile birbirine bağlar. ABD düzenleyici kurumu FCC'ye göre sistem 1 Mayıs 1998'de hizmete girmiştir."
    },
    quellen: [
      {
        name: "FCC: Public Notice DA 23-945, Cable Landing License AC-1 (12.10.2023)",
        url: "https://docs.fcc.gov/public/attachments/DA-23-945A1.pdf"
      },
      {
        name: "Submarine Networks: AC-1",
        url: "https://submarinenetworks.com/en/systems/trans-atlantic/ac-1"
      },
      {
        name: "Colt: Colt completes $1.8bn acquisition of Lumen EMEA (02.11.2023)",
        url: "https://www.colt.net/resources/colt-lumen-emea"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "apollo",
    name: "Apollo",
    status: "betrieb",
    inBetrieb: "2003",
    ausserBetrieb: null,
    laengeKm: 13000,
    faserpaare: 4,
    kapazitaetTbit: 6.4,
    eigner: ["Vodafone"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Shirley", land: "US", lat: 40.79, lon: -72.87 },
      { name: "Bude", land: "GB", lat: 50.83, lon: -4.55, see: "keltischeSee" },
      { name: "Lannion", land: "FR", lat: 48.73, lon: -3.46 },
      { name: "Manasquan", land: "US", lat: 40.13, lon: -74.05 }
    ],
    weitereOrte: 0,
    text: {
      de: "Apollo besteht aus zwei getrennten Transatlantikkabeln mit je vier Faserpaaren: Apollo North zwischen Bude in England und Shirley im Bundesstaat New York sowie Apollo South zwischen Lannion in Frankreich und Manasquan in New Jersey. Das System ist seit 2003 in Betrieb.",
      en: "Apollo consists of two separate transatlantic cables with four fibre pairs each: Apollo North between Bude in England and Shirley in the state of New York, and Apollo South between Lannion in France and Manasquan in New Jersey. The system has been in service since 2003.",
      tr: "Apollo, her biri dört fiber çifti taşıyan iki ayrı transatlantik kablodan oluşur: İngiltere'deki Bude ile New York eyaletindeki Shirley arasındaki Apollo North ve Fransa'daki Lannion ile New Jersey'deki Manasquan arasındaki Apollo South. Sistem 2003 yılından beri hizmettedir."
    },
    quellen: [
      {
        name: "FCC: Cable Landing License Apollo, DA 01-1395 (2001)",
        url: "https://docs.fcc.gov/public/attachments/DA-01-1395A1.pdf"
      },
      {
        name: "Submarine Networks: Apollo",
        url: "https://www.submarinenetworks.com/en/systems/trans-atlantic/apollo"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tat-14",
    name: "TAT-14",
    status: "stillgelegt",
    inBetrieb: "2001-03-21",
    ausserBetrieb: "2020",
    laengeKm: 15428,
    faserpaare: 4,
    kapazitaetTbit: null,
    eigner: ["AT&T", "BT", "Deutsche Telekom", "France Telecom", "KPN", "Sprint"],
    konsortium: true,
    gebiet: "atlantik",
    orte: [
      { name: "Manasquan", land: "US", lat: 40.13, lon: -74.05 },
      { name: "Blaabjerg", land: "DK", lat: 55.75, lon: 8.24 },
      { name: "Norden", land: "DE", lat: 53.6, lon: 7.2 },
      { name: "Katwijk", land: "NL", lat: 52.2, lon: 4.4 },
      { name: "Saint-Valery-en-Caux", land: "FR", lat: 49.86, lon: 0.71 },
      { name: "Widemouth Bay", land: "GB", lat: 50.79, lon: -4.55, see: "keltischeSee" },
      { name: "Tuckerton", land: "US", lat: 39.6, lon: -74.34 }
    ],
    weitereOrte: 0,
    text: {
      de: "TAT-14 war ein Kabel eines Konsortiums von elf Telefongesellschaften zwischen den USA, Großbritannien, Frankreich, den Niederlanden, Deutschland und Dänemark. Es ging im März 2001 in Betrieb und wurde am 15. Dezember 2020 abgeschaltet.",
      en: "TAT-14 was a cable owned by a consortium of eleven carriers linking the United States, the United Kingdom, France, the Netherlands, Germany and Denmark. It entered service in March 2001 and was retired on 15 December 2020.",
      tr: "TAT-14, on bir telekomünikasyon şirketinden oluşan bir konsorsiyumun ABD, Birleşik Krallık, Fransa, Hollanda, Almanya ve Danimarka arasındaki kablosuydu. Mart 2001'de hizmete girmiş ve 15 Aralık 2020'de kapatılmıştır."
    },
    quellen: [
      {
        name: "Submarine Networks: TAT-14",
        url: "https://www.submarinenetworks.com/en/systems/trans-atlantic/tat-14"
      },
      {
        name: "EXA Infrastructure: Subsea Datasheet (01/2026)",
        url: "https://exainfra.net/media/xvxlkuuy/exa-infrastructure-subsea-datasheet-012026.pdf"
      }
    ],
    offen: ["kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "exa-express",
    name: "EXA Express",
    status: "betrieb",
    inBetrieb: "2015-09-15",
    ausserBetrieb: null,
    laengeKm: 4600,
    faserpaare: 6,
    kapazitaetTbit: 53,
    eigner: ["EXA Infrastructure"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Halifax", land: "CA", lat: 44.65, lon: -63.59 },
      { name: "Cork", land: "IE", lat: 51.9, lon: -8.47 },
      { name: "Brean", land: "GB", lat: 51.31, lon: -3.02, see: "bristolkanal" }
    ],
    weitereOrte: 0,
    text: {
      de: "EXA Express, früher Hibernia Express, verbindet Halifax in Kanada mit Brean in England und hat einen Abzweig nach Cork in Irland. Das Kabel wurde im September 2015 in Betrieb genommen und gehört vollständig EXA Infrastructure.",
      en: "EXA Express, formerly Hibernia Express, connects Halifax in Canada with Brean in England and has a branch to Cork in Ireland. The cable entered service in September 2015 and is wholly owned by EXA Infrastructure.",
      tr: "Eski adı Hibernia Express olan EXA Express, Kanada'daki Halifax'ı İngiltere'deki Brean'a bağlar ve İrlanda'daki Cork'a uzanan bir kola sahiptir. Kablo Eylül 2015'te hizmete girmiştir ve tamamı EXA Infrastructure'a aittir."
    },
    quellen: [
      { name: "EXA Infrastructure: Our subsea cable systems", url: "https://exainfra.net/subsea-systems" },
      {
        name: "EXA Infrastructure: Subsea Datasheet (01/2026)",
        url: "https://exainfra.net/media/xvxlkuuy/exa-infrastructure-subsea-datasheet-012026.pdf"
      },
      {
        name: "Submarine Networks: EXA Express (Hibernia Express)",
        url: "https://www.submarinenetworks.com/en/systems/trans-atlantic/project-express"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "aec-1",
    name: "AEC-1",
    status: "betrieb",
    inBetrieb: "2016",
    ausserBetrieb: null,
    laengeKm: 5536,
    faserpaare: 4,
    kapazitaetTbit: null,
    eigner: ["EXA Infrastructure"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Shirley", land: "US", lat: 40.79, lon: -72.87 },
      { name: "Killala", land: "IE", lat: 54.21, lon: -9.22 }
    ],
    weitereOrte: 0,
    text: {
      de: "AEC-1, früher AEConnect, verbindet Shirley im Bundesstaat New York mit Killala an der irischen Westküste. Das von Aqua Comms gebaute Kabel ging im Januar 2016 in Betrieb und gehört heute EXA Infrastructure.",
      en: "AEC-1, formerly AEConnect, connects Shirley in the state of New York with Killala on the west coast of Ireland. Built by Aqua Comms, the cable entered service in January 2016 and is now owned by EXA Infrastructure.",
      tr: "Eski adı AEConnect olan AEC-1, New York eyaletindeki Shirley'yi İrlanda'nın batı kıyısındaki Killala'ya bağlar. Aqua Comms tarafından inşa edilen kablo Ocak 2016'da hizmete girmiştir ve bugün EXA Infrastructure'a aittir."
    },
    quellen: [
      { name: "EXA Infrastructure: Our subsea cable systems", url: "https://exainfra.net/subsea-systems" },
      {
        name: "Submarine Networks: AEConnect (AEC-1)",
        url: "https://submarinenetworks.com/en/systems/trans-atlantic/aeconnect"
      }
    ],
    offen: ["kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ellalink",
    name: "EllaLink",
    status: "betrieb",
    inBetrieb: "2021",
    ausserBetrieb: null,
    laengeKm: 6600,
    faserpaare: 4,
    kapazitaetTbit: 100,
    eigner: ["EllaLink"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Sines", land: "PT", lat: 37.96, lon: -8.87 },
      { name: "Praia", land: "CV", lat: 14.92, lon: -23.51 },
      { name: "Fortaleza", land: "BR", lat: -3.73, lon: -38.52 }
    ],
    weitereOrte: 3,
    text: {
      de: "EllaLink verbindet Sines in Portugal direkt mit Fortaleza in Brasilien und ist seit Juni 2021 in Betrieb. Abzweige erschließen weitere Orte, darunter Praia in Cabo Verde.",
      en: "EllaLink connects Sines in Portugal directly with Fortaleza in Brazil and has been in service since June 2021. Branches reach further places, including Praia in Cabo Verde.",
      tr: "EllaLink, Portekiz'deki Sines'i doğrudan Brezilya'daki Fortaleza'ya bağlar ve Haziran 2021'den beri hizmettedir. Kollar, Cabo Verde'deki Praia dahil başka yerlere de ulaşır."
    },
    quellen: [
      { name: "EllaLink: Who we are", url: "https://ella.link/about/" },
      { name: "EllaLink: Q&A", url: "https://ella.link/questions/" }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sacs",
    name: "SACS (South Atlantic Cable System)",
    status: "betrieb",
    inBetrieb: "2018",
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: 4,
    kapazitaetTbit: 40,
    eigner: ["Angola Cables"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Sangano", land: "AO", lat: -9.57, lon: 13.24 },
      { name: "Fortaleza", land: "BR", lat: -3.73, lon: -38.52 }
    ],
    weitereOrte: 0,
    text: {
      de: "SACS verbindet Sangano in Angola über den Südatlantik mit Fortaleza in Brasilien. Das Kabel gehört Angola Cables und wurde im Herbst 2018 als betriebsbereit gemeldet.",
      en: "SACS connects Sangano in Angola with Fortaleza in Brazil across the South Atlantic. The cable is owned by Angola Cables and was announced as ready for service in autumn 2018.",
      tr: "SACS, Angola'daki Sangano'yu Güney Atlantik üzerinden Brezilya'daki Fortaleza'ya bağlar. Kablo Angola Cables'a aittir ve 2018 sonbaharında hizmete hazır olduğu duyurulmuştur."
    },
    quellen: [
      {
        name: "Submarine Networks: SACS",
        url: "https://www.submarinenetworks.com/en/systems/brazil-africa/sacs"
      },
      {
        name: "Lightwave: South Atlantic Cable System between Angola and Brazil completes construction (02.10.2018)",
        url: "https://www.lightwaveonline.com/network-design/high-speed-networks/article/16676017/south-atlantic-cable-system-between-angola-and-brazil-completes-construction"
      }
    ],
    offen: ["laengeKm"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "equiano",
    name: "Equiano",
    status: "betrieb",
    inBetrieb: "2023",
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: 12,
    kapazitaetTbit: 144,
    eigner: ["Google"],
    konsortium: false,
    gebiet: "afrika",
    orte: [
      { name: "Sesimbra", land: "PT", lat: 38.44, lon: -9.1 },
      { name: "Lomé", land: "TG", lat: 6.13, lon: 1.22 },
      { name: "Lagos", land: "NG", lat: 6.46, lon: 3.39 },
      { name: "Rupert's Bay", land: "SH", lat: -15.92, lon: -5.71 },
      { name: "Swakopmund", land: "NA", lat: -22.68, lon: 14.53 },
      { name: "Cape Town", land: "ZA", lat: -33.93, lon: 18.42 }
    ],
    weitereOrte: 0,
    text: {
      de: "Equiano ist ein Seekabel von Google, das von Portugal entlang der Westküste Afrikas bis Südafrika führt. Abzweige erreichen Togo, Nigeria, St. Helena und Namibia.",
      en: "Equiano is a Google subsea cable running from Portugal along the west coast of Africa to South Africa. Branches reach Togo, Nigeria, St Helena and Namibia.",
      tr: "Equiano, Portekiz'den Afrika'nın batı kıyısı boyunca Güney Afrika'ya uzanan bir Google denizaltı kablosudur. Kollar Togo, Nijerya, Saint Helena ve Namibya'ya ulaşır."
    },
    quellen: [
      {
        name: "Google: The Equiano subsea cable has arrived in Togo (2022)",
        url: "https://africa.googleblog.com/2022/03/the-equiano-subsea-cable-has-arrived-in.html"
      },
      {
        name: "Submarine Networks: Equiano",
        url: "https://www.submarinenetworks.com/en/systems/euro-africa/equiano"
      }
    ],
    offen: ["laengeKm"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "2africa",
    name: "2Africa",
    status: "betrieb",
    inBetrieb: "2025",
    ausserBetrieb: null,
    laengeKm: 45000,
    faserpaare: 16,
    kapazitaetTbit: 180,
    eigner: ["Meta", "Bayobab", "center3", "China Mobile International", "Orange", "Vodafone"],
    konsortium: true,
    gebiet: "afrika",
    orte: [
      { name: "Bude", land: "GB", lat: 50.83, lon: -4.55, see: "keltischeSee" },
      { name: "Yanbu", land: "SA", lat: 24.09, lon: 38.07 },
      { name: "Ras Ghareb", land: "EG", lat: 28.36, lon: 33.08 },
      { name: "Port Said", land: "EG", lat: 31.26, lon: 32.31 },
      { name: "Genoa", land: "IT", lat: 44.41, lon: 8.93 }
    ],
    weitereOrte: 41,
    text: {
      de: "2Africa führt rund um den afrikanischen Kontinent und verbindet ihn mit Europa und dem Nahen Osten. Das Konsortium aus acht Unternehmen meldete im November 2025 die Fertigstellung des Kernsystems; die Erweiterung Pearls in die Golfregion, nach Pakistan und Indien ist für 2026 angekündigt.",
      en: "2Africa runs around the African continent and connects it with Europe and the Middle East. The consortium of eight companies announced the completion of the core system in November 2025; the Pearls extension to the Gulf region, Pakistan and India is announced for 2026.",
      tr: "2Africa, Afrika kıtasının çevresini dolaşır ve kıtayı Avrupa ve Orta Doğu'ya bağlar. Sekiz şirketten oluşan konsorsiyum, çekirdek sistemin tamamlandığını Kasım 2025'te duyurmuştur; Körfez bölgesine, Pakistan'a ve Hindistan'a uzanan Pearls uzantısı 2026 için açıklanmıştır."
    },
    quellen: [
      { name: "2Africa: FAQ", url: "https://www.2africacable.net/faq" },
      {
        name: "Meta Engineering: Announcing the Completion of the Core 2Africa System (17.11.2025)",
        url: "https://engineering.fb.com/2025/11/17/connectivity/core-2africa-system-completion-future-connectivity/"
      },
      {
        name: "Vodafone UK: World's largest subsea cable system landed in the UK (07.06.2024)",
        url: "https://www.vodafone.co.uk/newscentre/press-release/worlds-largest-subsea-cable-system-landed-uk/"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ace",
    name: "ACE (Africa Coast to Europe)",
    status: "betrieb",
    inBetrieb: "2012-12-15",
    ausserBetrieb: null,
    laengeKm: 17000,
    faserpaare: null,
    kapazitaetTbit: 20,
    eigner: ["Orange", "Sonatel", "MEO", "Bayobab", "Canalink", "International Mauritania Telecom"],
    konsortium: true,
    gebiet: "afrika",
    orte: [
      { name: "Penmarch", land: "FR", lat: 47.81, lon: -4.34 },
      { name: "Carcavelos", land: "PT", lat: 38.69, lon: -9.34 },
      { name: "Tenerife", land: "ES", lat: 28.29, lon: -16.62 },
      { name: "Nouakchott", land: "MR", lat: 18.08, lon: -15.98 },
      { name: "Dakar", land: "SN", lat: 14.69, lon: -17.45 },
      { name: "Conakry", land: "GN", lat: 9.52, lon: -13.7 },
      { name: "Freetown", land: "SL", lat: 8.48, lon: -13.23 },
      { name: "Abidjan", land: "CI", lat: 5.32, lon: -4.02 },
      { name: "Accra", land: "GH", lat: 5.56, lon: -0.2 },
      { name: "Lagos", land: "NG", lat: 6.46, lon: 3.39 },
      { name: "Libreville", land: "GA", lat: 0.41, lon: 9.44 },
      { name: "Duynefontein", land: "ZA", lat: -33.69, lon: 18.45 }
    ],
    weitereOrte: 7,
    text: {
      de: "ACE führt von Penmarch in Frankreich entlang der afrikanischen Westküste bis Südafrika. Das Kabel eines Konsortiums aus 20 Mitgliedern ging am 15. Dezember 2012 in Betrieb.",
      en: "ACE runs from Penmarch in France along the west coast of Africa to South Africa. The cable of a consortium of 20 members was put into service on 15 December 2012.",
      tr: "ACE, Fransa'daki Penmarch'tan Afrika'nın batı kıyısı boyunca Güney Afrika'ya uzanır. 20 üyeli bir konsorsiyuma ait olan kablo 15 Aralık 2012'de hizmete girmiştir."
    },
    quellen: [
      {
        name: "ACE Consortium: Submarine Cable",
        url: "https://www.ace-submarinecable.com/en/submarine-cable/"
      },
      { name: "ACE Consortium: History", url: "https://www.ace-submarinecable.com/en/history/" },
      { name: "ACE Consortium: Members", url: "https://www.ace-submarinecable.com/en/members/" }
    ],
    offen: ["faserpaare"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "wacs",
    name: "WACS (West Africa Cable System)",
    status: "betrieb",
    inBetrieb: "2012",
    ausserBetrieb: null,
    laengeKm: 14530,
    faserpaare: 4,
    kapazitaetTbit: 14.5,
    eigner: ["Telkom", "MTN", "Vodacom", "Tata Communications", "Angola Cables", "Telecom Namibia"],
    konsortium: true,
    gebiet: "afrika",
    orte: [
      { name: "Yzerfontein", land: "ZA", lat: -33.35, lon: 18.16 },
      { name: "Highbridge", land: "GB", lat: 51.22, lon: -2.98, see: "bristolkanal" }
    ],
    weitereOrte: 12,
    text: {
      de: "WACS verbindet Yzerfontein in Südafrika entlang der afrikanischen Westküste mit Highbridge in England. Das Konsortialkabel mit vier Faserpaaren wurde 2012 fertiggestellt.",
      en: "WACS connects Yzerfontein in South Africa along the west coast of Africa with Highbridge in England. The consortium cable with four fibre pairs was completed in 2012.",
      tr: "WACS, Güney Afrika'daki Yzerfontein'i Afrika'nın batı kıyısı boyunca İngiltere'deki Highbridge'e bağlar. Dört fiber çiftli konsorsiyum kablosu 2012'de tamamlanmıştır."
    },
    quellen: [
      {
        name: "Submarine Networks: WACS Overview",
        url: "https://www.submarinenetworks.com/en/systems/euro-africa/wacs/wacs-overview"
      },
      {
        name: "SAnews (Regierung Südafrika): New cable to double SA's broadband capacity",
        url: "https://www.sanews.gov.za/node/4307"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sat-3-wasc",
    name: "SAT-3/WASC",
    status: "betrieb",
    inBetrieb: "2001",
    ausserBetrieb: null,
    laengeKm: 13000,
    faserpaare: null,
    kapazitaetTbit: 0.12,
    eigner: ["AT&T", "France Telecom", "VSNL", "Telkom SA", "Nitel", "Sonatel"],
    konsortium: true,
    gebiet: "afrika",
    orte: [
      { name: "Sesimbra", land: "PT", lat: 38.44, lon: -9.1 },
      { name: "Chipiona", land: "ES", lat: 36.74, lon: -6.43 },
      { name: "Dakar", land: "SN", lat: 14.69, lon: -17.45 },
      { name: "Abidjan", land: "CI", lat: 5.32, lon: -4.02 },
      { name: "Accra", land: "GH", lat: 5.56, lon: -0.2 },
      { name: "Cotonou", land: "BJ", lat: 6.37, lon: 2.43 },
      { name: "Lagos", land: "NG", lat: 6.46, lon: 3.39 },
      { name: "Douala", land: "CM", lat: 4.04, lon: 9.71 },
      { name: "Libreville", land: "GA", lat: 0.41, lon: 9.44 },
      { name: "Cacuaco", land: "AO", lat: -8.78, lon: 13.37 },
      { name: "Melkbosstrand", land: "ZA", lat: -33.72, lon: 18.45 }
    ],
    weitereOrte: 1,
    text: {
      de: "SAT-3/WASC verbindet Portugal und Spanien entlang der afrikanischen Westküste mit Südafrika. In Melkbosstrand schließt es an das Kabel SAFE an.",
      en: "SAT-3/WASC connects Portugal and Spain along the west coast of Africa with South Africa. At Melkbosstrand it interconnects with the SAFE cable.",
      tr: "SAT-3/WASC, Portekiz ve İspanya'yı Afrika'nın batı kıyısı boyunca Güney Afrika'ya bağlar. Melkbosstrand'da SAFE kablosuna bağlanır."
    },
    quellen: [
      { name: "WIOCC: SAT 3/WASC Subsea Cable System", url: "https://www.wiocc.net/sat-3" },
      {
        name: "Submarine Networks: SAT-3/WASC",
        url: "https://www.submarinenetworks.com/en/systems/euro-africa/sat-3"
      }
    ],
    offen: ["faserpaare"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "mainone",
    name: "MainOne",
    status: "betrieb",
    inBetrieb: "2010",
    ausserBetrieb: null,
    laengeKm: 7000,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Equinix"],
    konsortium: false,
    gebiet: "afrika",
    orte: [
      { name: "Seixal", land: "PT", lat: 38.64, lon: -9.11 },
      { name: "Dakar", land: "SN", lat: 14.69, lon: -17.45 },
      { name: "Abidjan", land: "CI", lat: 5.32, lon: -4.02 }
    ],
    weitereOrte: 2,
    text: {
      de: "MainOne verbindet Nigeria und Ghana mit Seixal in Portugal und wurde später nach Dakar im Senegal und Abidjan in der Elfenbeinküste erweitert. Das Kabel ging 2010 in Betrieb; die Betreibergesellschaft MainOne gehört seit 2022 zu Equinix.",
      en: "MainOne connects Nigeria and Ghana with Seixal in Portugal and was later extended to Dakar in Senegal and Abidjan in Côte d'Ivoire. The cable entered commercial service in 2010; its operator MainOne has been part of Equinix since 2022.",
      tr: "MainOne, Nijerya ve Gana'yı Portekiz'deki Seixal'a bağlar ve sonradan Senegal'deki Dakar ile Fildişi Sahili'ndeki Abidjan'a uzatılmıştır. Kablo 2010'da hizmete girmiştir; işletmeci şirket MainOne 2022'den beri Equinix'e aittir."
    },
    quellen: [
      {
        name: "Submarine Networks: MainOne",
        url: "https://www.submarinenetworks.com/en/systems/euro-africa/mainone"
      }
    ],
    offen: ["faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "mednautilus",
    name: "MedNautilus",
    status: "betrieb",
    inBetrieb: "2001",
    ausserBetrieb: null,
    laengeKm: 7500,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Sparkle"],
    konsortium: false,
    gebiet: "mittelmeer",
    orte: [
      { name: "Catania", land: "IT", lat: 37.5, lon: 15.09 },
      { name: "Chania", land: "GR", lat: 35.51, lon: 24.02 },
      { name: "Athens", land: "GR", lat: 37.98, lon: 23.73 },
      { name: "Istanbul", land: "TR", lat: 41.01, lon: 28.98 },
      { name: "Haifa", land: "IL", lat: 32.82, lon: 35.0 },
      { name: "Tel Aviv", land: "IL", lat: 32.09, lon: 34.78 }
    ],
    weitereOrte: 1,
    text: {
      de: "MedNautilus ist ein ringförmig aufgebautes Kabelnetz im Mittelmeer, das Italien, Griechenland, die Türkei, Israel und Zypern verbindet. Es besteht seit 2001 und gehört Sparkle.",
      en: "MedNautilus is a ring-configured cable network in the Mediterranean connecting Italy, Greece, Turkey, Israel and Cyprus. It has existed since 2001 and is owned by Sparkle.",
      tr: "MedNautilus, Akdeniz'de İtalya, Yunanistan, Türkiye, İsrail ve Kıbrıs'ı birbirine bağlayan halka yapılı bir kablo ağıdır. 2001'den beri vardır ve Sparkle'a aittir."
    },
    quellen: [
      {
        name: "Sparkle: Pressemitteilung MedNautilus (24.04.2012)",
        url: "https://www.tisparkle.com/media/press-release/mednautilus-new-cloud-solutions-now-available-for-turkish-corporate-customers"
      },
      {
        name: "Submarine Networks: MedNautilus",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/mednautilus"
      }
    ],
    offen: ["faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "kafos",
    name: "KAFOS",
    status: "betrieb",
    inBetrieb: "1997",
    ausserBetrieb: null,
    laengeKm: 504,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Türk Telekom"],
    konsortium: false,
    gebiet: "mittelmeer",
    orte: [
      { name: "İstanbul", land: "TR", lat: 41.01, lon: 28.98 },
      { name: "İğneada", land: "TR", lat: 41.89, lon: 27.96 },
      { name: "Varna", land: "BG", lat: 43.21, lon: 27.92 },
      { name: "Mangalia", land: "RO", lat: 43.82, lon: 28.58 }
    ],
    weitereOrte: 0,
    text: {
      de: "KAFOS (Karadeniz Fiber Optik Sistemi) verbindet die Türkei über das Schwarze Meer mit Bulgarien und Rumänien. Nach Angaben der türkischen Regulierungsbehörde BTK ist das Kabel 504 km lang.",
      en: "KAFOS (Karadeniz Fiber Optik Sistemi) connects Turkey with Bulgaria and Romania across the Black Sea. According to the Turkish regulator BTK, the cable is 504 km long.",
      tr: "KAFOS (Karadeniz Fiber Optik Sistemi), Türkiye'yi Karadeniz üzerinden Bulgaristan ve Romanya'ya bağlar. Türkiye'nin düzenleyici kurumu BTK'ya göre kablo 504 km uzunluğundadır."
    },
    quellen: [
      {
        name: "BTK: Denizaltı Kablolarının Dünya Haberleşmesindeki Önemi (Bericht, 2026)",
        url: "https://www.btk.gov.tr/s3/web-btk-site/7708c26c-5161-4919-8b3d-daa31d4ac8fb/2026/05/6f101a20-010a-4295-bd1c-688a69e96da5.pdf"
      },
      {
        name: "Habertürk: Modern dünyanın damarları fiber kablolar",
        url: "https://www.haberturk.com/modern-dunyanin-damarlari-fiber-kablolar-3713570"
      }
    ],
    offen: ["faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "turcyos-1",
    name: "Turcyos-1",
    status: "betrieb",
    inBetrieb: null,
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Türk Telekom"],
    konsortium: false,
    gebiet: "mittelmeer",
    orte: [
      { name: "Bozyazı", land: "TR", lat: 36.1, lon: 32.97 },
      { name: "Girne", land: "CY", lat: 35.34, lon: 33.32 }
    ],
    weitereOrte: 0,
    text: {
      de: "Turcyos-1 verbindet Bozyazı in der türkischen Provinz Mersin mit Girne im Norden Zyperns. Das Kabel wurde von Türk Telekom gebaut.",
      en: "Turcyos-1 connects Bozyazı in the Turkish province of Mersin with Girne in the north of Cyprus. The cable was built by Türk Telekom.",
      tr: "Turcyos-1, Mersin'in Bozyazı ilçesini Kıbrıs'ın kuzeyindeki Girne'ye bağlar. Kablo Türk Telekom tarafından yapılmıştır."
    },
    quellen: [
      {
        name: "BTK: Denizaltı Kablolarının Dünya Haberleşmesindeki Önemi (Bericht, 2026)",
        url: "https://www.btk.gov.tr/s3/web-btk-site/7708c26c-5161-4919-8b3d-daa31d4ac8fb/2026/05/6f101a20-010a-4295-bd1c-688a69e96da5.pdf"
      },
      {
        name: "Habertürk: Modern dünyanın damarları fiber kablolar",
        url: "https://www.haberturk.com/modern-dunyanin-damarlari-fiber-kablolar-3713570"
      }
    ],
    offen: ["inBetrieb", "laengeKm", "faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "turcyos-2",
    name: "Turcyos-2",
    status: "betrieb",
    inBetrieb: "2011",
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Türk Telekom"],
    konsortium: false,
    gebiet: "mittelmeer",
    orte: [
      { name: "Samandağ", land: "TR", lat: 36.09, lon: 35.98 },
      { name: "İskele", land: "CY", lat: 35.29, lon: 33.89 }
    ],
    weitereOrte: 0,
    text: {
      de: "Turcyos-2 verbindet Samandağ in der türkischen Provinz Hatay mit İskele im Norden Zyperns. Das Kabel wurde 2011 gebaut.",
      en: "Turcyos-2 connects Samandağ in the Turkish province of Hatay with İskele in the north of Cyprus. The cable was built in 2011.",
      tr: "Turcyos-2, Hatay'ın Samandağ ilçesini Kıbrıs'ın kuzeyindeki İskele'ye bağlar. Kablo 2011'de yapılmıştır."
    },
    quellen: [
      {
        name: "BTK: Denizaltı Kablolarının Dünya Haberleşmesindeki Önemi (Bericht, 2026)",
        url: "https://www.btk.gov.tr/s3/web-btk-site/7708c26c-5161-4919-8b3d-daa31d4ac8fb/2026/05/6f101a20-010a-4295-bd1c-688a69e96da5.pdf"
      },
      {
        name: "Habertürk: Modern dünyanın damarları fiber kablolar",
        url: "https://www.haberturk.com/modern-dunyanin-damarlari-fiber-kablolar-3713570"
      }
    ],
    offen: ["laengeKm", "faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "caucasus-cable-system",
    name: "Caucasus Cable System",
    status: "betrieb",
    inBetrieb: "2008",
    ausserBetrieb: null,
    laengeKm: 1200,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Caucasus Online"],
    konsortium: false,
    gebiet: "mittelmeer",
    orte: [
      { name: "Poti", land: "GE", lat: 42.14, lon: 41.67 },
      { name: "Varna", land: "BG", lat: 43.21, lon: 27.92 }
    ],
    weitereOrte: 0,
    text: {
      de: "Das Caucasus Cable System führt durch das Schwarze Meer von Poti in Georgien nach Bulgarien. Eigentümer ist seit 2008 der georgische Anbieter Caucasus Online.",
      en: "The Caucasus Cable System runs across the Black Sea from Poti in Georgia to Bulgaria. Since 2008 it has been owned by the Georgian provider Caucasus Online.",
      tr: "Caucasus Cable System, Karadeniz üzerinden Gürcistan'daki Poti'den Bulgaristan'a uzanır. Kablo 2008'den beri Gürcistan'ın Caucasus Online şirketine aittir."
    },
    quellen: [{ name: "Caucasus Online: About us", url: "http://www.co.ge/en/441/" }],
    offen: ["faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "blue",
    name: "Blue",
    status: "betrieb",
    inBetrieb: null,
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: 16,
    kapazitaetTbit: null,
    eigner: ["Google", "Sparkle"],
    konsortium: true,
    gebiet: "mittelmeer",
    orte: [
      { name: "Genoa", land: "IT", lat: 44.41, lon: 8.93 },
      { name: "Tel Aviv", land: "IL", lat: 32.09, lon: 34.78 }
    ],
    weitereOrte: 2,
    text: {
      de: "Blue ist der Mittelmeerabschnitt des von Google geführten Kabelprojekts Blue-Raman und verbindet Italien, Frankreich, Griechenland und Israel. Das Kabel hat 16 Faserpaare; Sparkle betreibt auf derselben Trasse sein eigenes Kabel BlueMed mit vier Faserpaaren.",
      en: "Blue is the Mediterranean section of the Google-led Blue-Raman cable project and connects Italy, France, Greece and Israel. The cable has 16 fibre pairs; Sparkle operates its own BlueMed cable with four fibre pairs along the same route.",
      tr: "Blue, Google'ın önderlik ettiği Blue-Raman kablo projesinin Akdeniz bölümüdür ve İtalya, Fransa, Yunanistan ile İsrail'i birbirine bağlar. Kablo 16 fiber çiftine sahiptir; Sparkle aynı güzergâhta dört fiber çiftli kendi BlueMed kablosunu işletmektedir."
    },
    quellen: [
      {
        name: "Sparkle: Sparkle to Build Blue and Raman Submarine Cable Systems in Collaboration with Google (29.07.2021)",
        url: "https://www.tisparkle.com/sparkle-blue-raman-submarine-cable-google"
      },
      {
        name: "Submarine Networks: Blue-Raman",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/blue-raman"
      },
      {
        name: "Sparkle: BlueMed Submarine Cable Lands in Cyprus (29.10.2025)",
        url: "https://www.tisparkle.com/media/press-release/sparkle-bluemed-submarine-cable-lands-cyprus"
      }
    ],
    offen: ["status", "inBetrieb", "laengeKm", "kapazitaetTbit", "orte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "c-lion1",
    name: "C-Lion1",
    status: "betrieb",
    inBetrieb: "2016",
    ausserBetrieb: null,
    laengeKm: 1173,
    faserpaare: 8,
    kapazitaetTbit: 144,
    eigner: ["Cinia"],
    konsortium: false,
    gebiet: "nord-ostsee",
    orte: [
      { name: "Helsinki", land: "FI", lat: 60.17, lon: 24.94 },
      { name: "Rostock", land: "DE", lat: 54.09, lon: 12.14 }
    ],
    weitereOrte: 0,
    text: {
      de: "C-Lion1 verbindet Helsinki in Finnland durch die Ostsee mit Rostock in Deutschland. Das Kabel gehört dem finnischen Unternehmen Cinia und ging 2016 in Betrieb.",
      en: "C-Lion1 connects Helsinki in Finland with Rostock in Germany across the Baltic Sea. The cable is owned by the Finnish company Cinia and was commissioned in 2016.",
      tr: "C-Lion1, Finlandiya'daki Helsinki'yi Baltık Denizi üzerinden Almanya'daki Rostock'a bağlar. Kablo Finlandiya şirketi Cinia'ya aittir ve 2016'da hizmete girmiştir."
    },
    quellen: [
      {
        name: "Cinia: Fault detected in Cinia C-Lion1 submarine cable (Meldung mit Kabeldaten)",
        url: "https://www.cinia.fi/en/news/fault-detected-in-cinia-c-lion1-submarine-cable"
      },
      {
        name: "eco Verband der Internetwirtschaft: 144 Tbit/s under the sea (09.05.2016)",
        url: "https://eco.de/news/144-tbits-under-the-sea"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "farice-1",
    name: "FARICE-1",
    status: "betrieb",
    inBetrieb: "2004",
    ausserBetrieb: null,
    laengeKm: 1205,
    faserpaare: 2,
    kapazitaetTbit: 11,
    eigner: ["Korda Networks"],
    konsortium: false,
    gebiet: "nord-ostsee",
    orte: [
      { name: "Seyðisfjörður", land: "IS", lat: 65.26, lon: -14.01 },
      { name: "Funningsfjørður", land: "FO", lat: 62.24, lon: -6.93 },
      { name: "Dunnet Bay", land: "GB", lat: 58.62, lon: -3.34 }
    ],
    weitereOrte: 0,
    text: {
      de: "FARICE-1 verbindet Seyðisfjörður in Island mit Dunnet Bay in Schottland und hat einen Abzweig nach Funningsfjørður auf den Färöern. Das Kabel ging im Januar 2004 in Betrieb und gehört dem staatlichen isländischen Betreiber Korda Networks, früher Farice.",
      en: "FARICE-1 connects Seyðisfjörður in Iceland with Dunnet Bay in Scotland and has a branch to Funningsfjørður in the Faroe Islands. The cable entered commercial operation in January 2004 and is owned by the Icelandic state operator Korda Networks, formerly Farice.",
      tr: "FARICE-1, İzlanda'daki Seyðisfjörður'u İskoçya'daki Dunnet Bay'e bağlar ve Faroe Adaları'ndaki Funningsfjørður'a uzanan bir kola sahiptir. Kablo Ocak 2004'te hizmete girmiştir ve eski adı Farice olan, İzlanda devletine ait Korda Networks'e aittir."
    },
    quellen: [
      {
        name: "Farice: Company history (Archivkopie 02.12.2024)",
        url: "https://web.archive.org/web/20241202071146/https://farice.is/company-history/"
      },
      {
        name: "Farice: Network (Archivkopie 21.01.2025)",
        url: "https://web.archive.org/web/20250121155028/https://farice.is/network/"
      },
      { name: "Korda Networks: About Korda Networks", url: "https://www.korda.is/en/about-korda" }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "danice",
    name: "DANICE",
    status: "betrieb",
    inBetrieb: "2009",
    ausserBetrieb: null,
    laengeKm: 2304,
    faserpaare: 4,
    kapazitaetTbit: 40,
    eigner: ["Korda Networks"],
    konsortium: false,
    gebiet: "nord-ostsee",
    orte: [
      { name: "Landeyjar", land: "IS", lat: 63.53, lon: -20.12 },
      { name: "Blaabjerg", land: "DK", lat: 55.75, lon: 8.24 }
    ],
    weitereOrte: 0,
    text: {
      de: "DANICE verbindet Landeyjar an der Südküste Islands mit Blaabjerg in Dänemark. Das Kabel ging im September 2009 in Betrieb und gehört Korda Networks, früher Farice.",
      en: "DANICE connects Landeyjar on the south coast of Iceland with Blaabjerg in Denmark. The cable entered commercial operation in September 2009 and is owned by Korda Networks, formerly Farice.",
      tr: "DANICE, İzlanda'nın güney kıyısındaki Landeyjar'ı Danimarka'daki Blaabjerg'e bağlar. Kablo Eylül 2009'da hizmete girmiştir ve eski adı Farice olan Korda Networks'e aittir."
    },
    quellen: [
      {
        name: "Farice: Company history (Archivkopie 02.12.2024)",
        url: "https://web.archive.org/web/20241202071146/https://farice.is/company-history/"
      },
      {
        name: "Converge Digest: Farice upgrades Iceland-Denmark cable (15.01.2013)",
        url: "https://convergedigest.com/farice-upgrades-iceland-denmark-cable/"
      },
      { name: "Korda Networks: About Korda Networks", url: "https://www.korda.is/en/about-korda" }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "svalbard-undersea-cable-system",
    name: "Svalbard Undersea Cable System",
    status: "betrieb",
    inBetrieb: "2004",
    ausserBetrieb: null,
    laengeKm: 1400,
    faserpaare: 8,
    kapazitaetTbit: null,
    eigner: ["Space Norway"],
    konsortium: false,
    gebiet: "arktis",
    orte: [
      { name: "Harstad", land: "NO", lat: 68.8, lon: 16.54 },
      { name: "Breivika (Andøya)", land: "NO", lat: 69.21, lon: 16.08 },
      { name: "Longyearbyen", land: "SJ", lat: 78.22, lon: 15.65 }
    ],
    weitereOrte: 0,
    text: {
      de: "Das Svalbard Undersea Cable System verbindet Longyearbyen auf Spitzbergen über Breivika auf Andøya mit Harstad auf dem norwegischen Festland. Es besteht aus zwei getrennten Kabeln mit je acht Faserpaaren, gehört Space Norway und ist seit Januar 2004 in Betrieb.",
      en: "The Svalbard Undersea Cable System connects Longyearbyen on Svalbard via Breivika on Andøya with Harstad on the Norwegian mainland. It consists of two separate cables with eight fibre pairs each, is owned by Space Norway and has been operational since January 2004.",
      tr: "Svalbard Undersea Cable System, Svalbard'daki Longyearbyen'i Andøya'daki Breivika üzerinden Norveç anakarasındaki Harstad'a bağlar. Her biri sekiz fiber çifti taşıyan iki ayrı kablodan oluşur, Space Norway'e aittir ve Ocak 2004'ten beri hizmettedir."
    },
    quellen: [
      {
        name: "Space Norway: Fibre optic cables",
        url: "https://spacenorway.com/infrastructure/subsea-fibre-cables/fibre-optic-cables/"
      },
      {
        name: "Telektronikk 3/2004: Technical solution and implementation of the Svalbard fibre cable (Archivkopie)",
        url: "https://web.archive.org/web/20120415123547/http://www.telektronikk.com/volumes/pdf/3.2004/Page_140-152.pdf"
      }
    ],
    offen: ["kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "atlantic-telegraph-1858",
    name: "Atlantic Telegraph Cable (1858)",
    status: "stillgelegt",
    inBetrieb: "1858-08-16",
    ausserBetrieb: "1858",
    laengeKm: 3200,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Atlantic Telegraph Company"],
    konsortium: false,
    gebiet: "atlantik",
    orte: [
      { name: "Valentia Island", land: "IE", lat: 51.91, lon: -10.36 },
      { name: "Bay Bulls Arm (Sunnyside)", land: "CA", lat: 47.86, lon: -53.92 }
    ],
    weitereOrte: 0,
    text: {
      de: "Das erste transatlantische Telegrafenkabel verband 1858 die Insel Valentia in Irland mit Neufundland. Am 16. August 1858 wurde es mit Telegrammen zwischen Königin Victoria und US-Präsident Buchanan eröffnet; nach wenigen Wochen fiel es aus.",
      en: "The first transatlantic telegraph cable linked Valentia Island in Ireland with Newfoundland in 1858. It was opened on 16 August 1858 with telegrams exchanged between Queen Victoria and US President Buchanan; within a few weeks it failed.",
      tr: "İlk transatlantik telgraf kablosu 1858'de İrlanda'daki Valentia Adası'nı Newfoundland'a bağlamıştır. 16 Ağustos 1858'de Kraliçe Victoria ile ABD Başkanı Buchanan arasındaki telgraflarla açılmış, birkaç hafta sonra devre dışı kalmıştır."
    },
    quellen: [
      {
        name: "IEEE Spectrum: The First Transatlantic Telegraph Cable Was a Bold, Beautiful Failure (2019)",
        url: "https://spectrum.ieee.org/the-first-transatlantic-telegraph-cable-was-a-bold-beautiful-failure"
      },
      {
        name: "IET Archives: The first transatlantic telegraph cable 1858",
        url: "https://www.theiet.org/membership/library-and-archives/the-iet-archives/archives-highlights/the-first-transatlantic-telegraph-cable-1858"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tat-1",
    name: "TAT-1",
    status: "stillgelegt",
    inBetrieb: "1956-09-25",
    ausserBetrieb: "1978",
    laengeKm: null,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["AT&T", "British Post Office", "Canadian Overseas Telecommunication Corporation"],
    konsortium: true,
    gebiet: "atlantik",
    orte: [
      { name: "Oban", land: "GB", lat: 56.41, lon: -5.47, see: "hebriden" },
      { name: "Clarenville", land: "CA", lat: 48.17, lon: -53.96 },
      { name: "Sydney Mines", land: "CA", lat: 46.23, lon: -60.22 }
    ],
    weitereOrte: 0,
    text: {
      de: "TAT-1 war das erste transatlantische Telefonkabel und verband ab dem 25. September 1956 Oban in Schottland mit Clarenville in Neufundland. Das System aus zwei Kabeln von je rund 1950 Seemeilen blieb bis 1978 in Betrieb.",
      en: "TAT-1 was the first transatlantic telephone cable and linked Oban in Scotland with Clarenville in Newfoundland from 25 September 1956. The system of two cables of approximately 1950 nautical miles each operated until 1978.",
      tr: "TAT-1 ilk transatlantik telefon kablosuydu ve 25 Eylül 1956'dan itibaren İskoçya'daki Oban'ı Newfoundland'daki Clarenville'e bağladı. Her biri yaklaşık 1950 deniz mili uzunluğundaki iki kablodan oluşan sistem 1978'e kadar hizmette kaldı."
    },
    quellen: [
      {
        name: "IEEE Milestone (ETHW): The First Submarine Transatlantic Telephone Cable System (TAT-1), 1956",
        url: "https://ethw.org/Milestones:The_First_Submarine_Transatlantic_Telephone_Cable_System_(TAT-1),_1956"
      }
    ],
    offen: ["laengeKm"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tat-8",
    name: "TAT-8",
    status: "stillgelegt",
    inBetrieb: "1988-12-14",
    ausserBetrieb: "2002",
    laengeKm: 5846,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["AT&T", "British Telecom", "France Telecom"],
    konsortium: true,
    gebiet: "atlantik",
    orte: [
      { name: "Tuckerton", land: "US", lat: 39.6, lon: -74.34 },
      { name: "Widemouth Bay", land: "GB", lat: 50.79, lon: -4.55, see: "keltischeSee" },
      { name: "Penmarch", land: "FR", lat: 47.81, lon: -4.34 }
    ],
    weitereOrte: 0,
    text: {
      de: "TAT-8 war das erste Glasfaserkabel durch einen Ozean und ging am 14. Dezember 1988 zwischen Nordamerika und Europa in Betrieb. Es war für rund 40000 gleichzeitige Telefongespräche ausgelegt und wurde 2002 nach einem Defekt außer Betrieb genommen.",
      en: "TAT-8 was the first fibre-optic cable to cross an ocean and entered service between North America and Europe on 14 December 1988. It was designed for about 40000 simultaneous telephone calls and was taken out of operation in 2002 after a fault.",
      tr: "TAT-8, bir okyanusu aşan ilk fiber optik kabloydu ve 14 Aralık 1988'de Kuzey Amerika ile Avrupa arasında hizmete girdi. Aynı anda yaklaşık 40000 telefon görüşmesi için tasarlanmıştı ve 2002'de bir arızanın ardından hizmet dışı bırakıldı."
    },
    quellen: [
      {
        name: "IEEE Milestone (ETHW): Trans-Atlantic Telephone Fiber-Optic Submarine Cable (TAT-8), 1988",
        url: "https://ethw.org/Milestones:Trans-Atlantic_Telephone_Fiber-Optic_Submarine_Cable_(TAT-8),_1988"
      },
      {
        name: "Tom's Hardware: The world's first transatlantic fiber-optic cable is being ripped up (25.02.2026)",
        url: "https://www.tomshardware.com/tech-industry/the-worlds-first-transatlantic-fiber-optic-cable-is-being-ripped-up"
      },
      { name: "Wikipedia: TAT-8 (nur für die Anlandeorte)", url: "https://en.wikipedia.org/wiki/TAT-8" }
    ],
    offen: ["faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sea-me-we-3",
    name: "SEA-ME-WE 3",
    status: "stillgelegt",
    inBetrieb: "1999-09-30",
    ausserBetrieb: "2024",
    laengeKm: 39000,
    faserpaare: 2,
    kapazitaetTbit: null,
    eigner: ["Orange", "Deutsche Telekom", "Singtel", "KDDI", "Telecom Egypt", "Türk Telekom"],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Norden", land: "DE", lat: 53.6, lon: 7.21 },
      { name: "Penmarch", land: "FR", lat: 47.81, lon: -4.34 },
      { name: "Sesimbra", land: "PT", lat: 38.44, lon: -9.1 },
      { name: "Marmaris", land: "TR", lat: 36.85, lon: 28.27 },
      { name: "Alexandria", land: "EG", lat: 31.2, lon: 29.89 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 },
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 },
      { name: "Perth", land: "AU", lat: -31.95, lon: 115.86 },
      { name: "Deep Water Bay", land: "HK", lat: 22.24, lon: 114.18 },
      { name: "Chongming", land: "CN", lat: 31.67, lon: 121.5 },
      { name: "Okinawa", land: "JP", lat: 26.48, lon: 127.93 }
    ],
    weitereOrte: 27,
    text: {
      de: "SEA-ME-WE 3 verband 39 Landestationen in 33 Ländern zwischen Westeuropa, dem Nahen Osten, Asien und Australien, in der Türkei landete es in Marmaris. Das 39 000 km lange System ging am 30. September 1999 in Betrieb und wurde am 2. Dezember 2024 stillgelegt.",
      en: "SEA-ME-WE 3 linked 39 landing stations in 33 countries between Western Europe, the Middle East, Asia and Australia, with a landing in Marmaris in Turkey. The 39,000 km system entered service on 30 September 1999 and was retired on 2 December 2024.",
      tr: "SEA-ME-WE 3, Batı Avrupa, Orta Doğu, Asya ve Avustralya arasında 33 ülkedeki 39 karaya çıkış istasyonunu birbirine bağlıyordu, Türkiye'de Marmaris'te karaya çıkıyordu. 39.000 km uzunluğundaki sistem 30 Eylül 1999'da hizmete girdi ve 2 Aralık 2024'te hizmet dışı bırakıldı."
    },
    quellen: [
      { name: "Djibouti Telecom: SEA-ME-WE-3", url: "https://international.djiboutitelecom.dj/sea-me-we-3/" },
      {
        name: "Submarine Networks: SEA-ME-WE 3",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/smw3"
      }
    ],
    offen: ["kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sea-me-we-4",
    name: "SEA-ME-WE 4",
    status: "betrieb",
    inBetrieb: "2005-12-13",
    ausserBetrieb: null,
    laengeKm: 18800,
    faserpaare: 2,
    kapazitaetTbit: 4.6,
    eigner: [
      "Singtel",
      "Orange",
      "Telecom Italia Sparkle",
      "Tata Communications",
      "Telecom Egypt",
      "Saudi Telecom Company"
    ],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Marseille", land: "FR", lat: 43.3, lon: 5.37 },
      { name: "Annaba", land: "DZ", lat: 36.9, lon: 7.77 },
      { name: "Bizerte", land: "TN", lat: 37.28, lon: 9.86 },
      { name: "Palermo", land: "IT", lat: 38.11, lon: 13.35 },
      { name: "Alexandria", land: "EG", lat: 31.2, lon: 29.89 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 },
      { name: "Karachi", land: "PK", lat: 24.86, lon: 67.01 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 },
      { name: "Colombo", land: "LK", lat: 6.93, lon: 79.84 },
      { name: "Chennai", land: "IN", lat: 13.08, lon: 80.28 },
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 }
    ],
    weitereOrte: 5,
    text: {
      de: "SEA-ME-WE 4 verbindet Marseille mit Singapur über das Mittelmeer, Ägypten, das Rote Meer und den Indischen Ozean und ist seit dem 13. Dezember 2005 in Betrieb. Das rund 18 800 km lange System hat zwei Faserpaare, seine Auslegungskapazität wurde 2015 von 1,28 auf 4,6 Tbit/s erhöht.",
      en: "SEA-ME-WE 4 connects Marseille with Singapore via the Mediterranean, Egypt, the Red Sea and the Indian Ocean and has been in service since 13 December 2005. The system of about 18,800 km has two fibre pairs, and its design capacity was raised from 1.28 to 4.6 Tbit/s in 2015.",
      tr: "SEA-ME-WE 4, Marsilya'yı Akdeniz, Mısır, Kızıldeniz ve Hint Okyanusu üzerinden Singapur'a bağlar ve 13 Aralık 2005'ten beri hizmettedir. Yaklaşık 18.800 km uzunluğundaki sistemin iki fiber çifti vardır, tasarım kapasitesi 2015'te 1,28 Tbit/s'den 4,6 Tbit/s'ye yükseltilmiştir."
    },
    quellen: [
      {
        name: "Submarine Networks: SEA-ME-WE 4",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/smw4"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sea-me-we-5",
    name: "SEA-ME-WE 5",
    status: "betrieb",
    inBetrieb: "2016-12-13",
    ausserBetrieb: null,
    laengeKm: 20000,
    faserpaare: 3,
    kapazitaetTbit: 24,
    eigner: [
      "Singtel",
      "Orange",
      "Telecom Italia Sparkle",
      "Türk Telekom",
      "Telecom Egypt",
      "China Mobile International"
    ],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Toulon", land: "FR", lat: 43.13, lon: 5.93 },
      { name: "Catania", land: "IT", lat: 37.5, lon: 15.09 },
      { name: "Marmaris", land: "TR", lat: 36.85, lon: 28.27 },
      { name: "Abu Talat", land: "EG", lat: 31.06, lon: 29.7 },
      { name: "Zafarana", land: "EG", lat: 29.12, lon: 32.65 },
      { name: "Yanbu", land: "SA", lat: 24.09, lon: 38.06 },
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 },
      { name: "Karachi", land: "PK", lat: 24.86, lon: 67.01 },
      { name: "Matara", land: "LK", lat: 5.95, lon: 80.53 },
      { name: "Melaka", land: "MY", lat: 2.19, lon: 102.25 },
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 }
    ],
    weitereOrte: 6,
    text: {
      de: "SEA-ME-WE 5 ist ein 20 000 km langes Konsortialkabel zwischen Singapur und Frankreich mit 18 Anlandeorten, darunter Marmaris in der Türkei. Es ist seit Dezember 2016 in Betrieb und führt drei Faserpaare zwischen Singapur und Ägypten sowie vier zwischen Ägypten und Europa.",
      en: "SEA-ME-WE 5 is a 20,000 km consortium cable between Singapore and France with 18 landing points, including Marmaris in Turkey. It has been in service since December 2016 and carries three fibre pairs between Singapore and Egypt and four between Egypt and Europe.",
      tr: "SEA-ME-WE 5, Singapur ile Fransa arasında uzanan 20.000 km uzunluğunda bir konsorsiyum kablosudur ve aralarında Türkiye'deki Marmaris'in de bulunduğu 18 karaya çıkış noktasına sahiptir. Aralık 2016'dan beri hizmettedir, Singapur ile Mısır arasında üç, Mısır ile Avrupa arasında dört fiber çifti taşır."
    },
    quellen: [
      { name: "Djibouti Telecom: SEA-ME-WE 5", url: "https://international.djiboutitelecom.dj/seamewe-5/" },
      {
        name: "Submarine Networks: SEA-ME-WE 5",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/smw5"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sea-me-we-6",
    name: "SEA-ME-WE 6",
    status: "geplant",
    inBetrieb: null,
    ausserBetrieb: null,
    laengeKm: 21700,
    faserpaare: 8,
    kapazitaetTbit: 120,
    eigner: ["Singtel", "Orange", "Bharti Airtel", "Telecom Egypt", "Microsoft", "Telekom Malaysia"],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Marseille", land: "FR", lat: 43.3, lon: 5.37 },
      { name: "Port Said", land: "EG", lat: 31.26, lon: 32.31 },
      { name: "Ras Ghareb", land: "EG", lat: 28.36, lon: 33.08 },
      { name: "Yanbu", land: "SA", lat: 24.09, lon: 38.06 },
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Karachi", land: "PK", lat: 24.86, lon: 67.01 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 },
      { name: "Hulhumalé", land: "MV", lat: 4.21, lon: 73.54 },
      { name: "Matara", land: "LK", lat: 5.95, lon: 80.53 },
      { name: "Chennai", land: "IN", lat: 13.08, lon: 80.28 },
      { name: "Cox's Bazar", land: "BD", lat: 21.43, lon: 92.0 },
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 }
    ],
    weitereOrte: 5,
    text: {
      de: "SEA-ME-WE 6 soll Singapur über den Indischen Ozean, das Rote Meer und Ägypten mit Marseille verbinden, die Landstrecke in Ägypten führt von Ras Ghareb nach Port Said. Das Konsortium aus 16 Unternehmen nannte bei Vertragsbeginn 2022 das erste Quartal 2025 als Ziel, der Abschluss der beiden Anlandungen in Ägypten wurde im Juli 2025 gemeldet.",
      en: "SEA-ME-WE 6 is to connect Singapore with Marseille via the Indian Ocean, the Red Sea and Egypt, with a terrestrial segment in Egypt from Ras Ghareb to Port Said. The consortium of 16 companies named the first quarter of 2025 as its target when the contract came into force in 2022, and the completion of the two landings in Egypt was announced in July 2025.",
      tr: "SEA-ME-WE 6, Singapur'u Hint Okyanusu, Kızıldeniz ve Mısır üzerinden Marsilya'ya bağlayacak, Mısır'daki kara bölümü Ras Ghareb'den Port Said'e uzanıyor. 16 şirketten oluşan konsorsiyum 2022'de sözleşme yürürlüğe girdiğinde hedef olarak 2025'in ilk çeyreğini açıklamıştı, Mısır'daki iki karaya çıkışın tamamlandığı Temmuz 2025'te duyuruldu."
    },
    quellen: [
      {
        name: "SubCom und SEA-ME-WE 6 Konsortium: Contract in Force (21.02.2022)",
        url: "https://www.subcom.com/documents/2022/SEA-ME-WE_6_SubCom_CIF_21FEB2022.pdf"
      },
      {
        name: "Telecom Egypt: SEA-ME-WE-6 Completes its Two Landings in Egypt (02.07.2025)",
        url: "https://ir.te.eg/en/CorporateNews/PressRelease/221/SEA-ME-WE-6-Subsea-Cable-Completes-its-Two-Landings-and-Crossing-Activities-in-Egypt"
      },
      { name: "Djibouti Telecom: SEA-ME-WE 6", url: "https://international.djiboutitelecom.dj/sea-me-we-6/" }
    ],
    offen: ["status", "inBetrieb"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "aae-1",
    name: "Asia Africa Europe-1 (AAE-1)",
    status: "betrieb",
    inBetrieb: "2017",
    ausserBetrieb: null,
    laengeKm: 25000,
    faserpaare: 5,
    kapazitaetTbit: 40,
    eigner: ["China Unicom", "PCCW Global", "Etisalat", "Omantel", "Ooredoo", "Telecom Egypt"],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Marseille", land: "FR", lat: 43.3, lon: 5.37 },
      { name: "Bari", land: "IT", lat: 41.13, lon: 16.87 },
      { name: "Chania", land: "GR", lat: 35.52, lon: 24.02 },
      { name: "Zafarana", land: "EG", lat: 29.12, lon: 32.65 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 },
      { name: "Karachi", land: "PK", lat: 24.86, lon: 67.01 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 },
      { name: "Songkhla", land: "TH", lat: 7.21, lon: 100.6, see: "golfVonThailand" },
      { name: "Vung Tau", land: "VN", lat: 10.35, lon: 107.07 },
      { name: "Cape D'Aguilar", land: "HK", lat: 22.21, lon: 114.26 }
    ],
    weitereOrte: 8,
    text: {
      de: "AAE-1 ist ein 25 000 km langes Konsortialkabel, das Südostasien über Ägypten mit Europa verbindet und in Hongkong, Singapur und Marseille endet. Es ist seit Juni 2017 in Betrieb und auf mindestens 40 Tbit/s ausgelegt.",
      en: "AAE-1 is a 25,000 km consortium cable that connects Southeast Asia with Europe via Egypt and terminates in Hong Kong, Singapore and Marseille. It has been in service since June 2017 and has a minimum design capacity of 40 Tbit/s.",
      tr: "AAE-1, Güneydoğu Asya'yı Mısır üzerinden Avrupa'ya bağlayan ve Hong Kong, Singapur ile Marsilya'da sonlanan 25.000 km uzunluğunda bir konsorsiyum kablosudur. Haziran 2017'den beri hizmettedir ve en az 40 Tbit/s kapasite için tasarlanmıştır."
    },
    quellen: [
      { name: "AAE-1 (Betreiberseite)", url: "https://www.aaeone.com/" },
      { name: "Djibouti Telecom: AAE-1", url: "https://international.djiboutitelecom.dj/aae1/" },
      {
        name: "Submarine Networks: AAE-1",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/aae-1"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "eig",
    name: "Europe India Gateway (EIG)",
    status: "betrieb",
    inBetrieb: "2010",
    ausserBetrieb: null,
    laengeKm: 15000,
    faserpaare: 3,
    kapazitaetTbit: 3.84,
    eigner: ["AT&T", "Bharti Airtel", "BT", "Telecom Egypt", "Verizon", "Vodafone"],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Bude", land: "GB", lat: 50.83, lon: -4.55, see: "keltischeSee" },
      { name: "Sesimbra", land: "PT", lat: 38.44, lon: -9.1 },
      { name: "Gibraltar", land: "GI", lat: 36.14, lon: -5.35 },
      { name: "Monaco", land: "MC", lat: 43.73, lon: 7.42 },
      { name: "Tripoli", land: "LY", lat: 32.89, lon: 13.19 },
      { name: "Abu Talat", land: "EG", lat: 31.06, lon: 29.7 },
      { name: "Zafarana", land: "EG", lat: 29.12, lon: 32.65 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Barka", land: "OM", lat: 23.7, lon: 57.89 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 }
    ],
    weitereOrte: 0,
    text: {
      de: "Europe India Gateway ist ein 15 000 km langes Kabel eines Konsortiums aus 16 Netzbetreibern zwischen Großbritannien und Indien mit zwölf Anlandeorten. Es hat drei Faserpaare und eine anfängliche Auslegungskapazität von 3,84 Tbit/s.",
      en: "Europe India Gateway is a 15,000 km cable of a consortium of 16 carriers between the United Kingdom and India with twelve landing points. It has three fibre pairs and an initial design capacity of 3.84 Tbit/s.",
      tr: "Europe India Gateway, 16 operatörden oluşan bir konsorsiyumun Birleşik Krallık ile Hindistan arasındaki 15.000 km uzunluğundaki kablosudur ve on iki karaya çıkış noktası vardır. Üç fiber çiftine ve 3,84 Tbit/s başlangıç tasarım kapasitesine sahiptir."
    },
    quellen: [
      {
        name: "Djibouti Telecom: EIG (Europe India Gateway)",
        url: "https://international.djiboutitelecom.dj/eig-europe-india-gateway/"
      },
      {
        name: "Submarine Networks: EIG",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/eig"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "imewe",
    name: "IMEWE",
    status: "betrieb",
    inBetrieb: "2010-12-11",
    ausserBetrieb: null,
    laengeKm: 13000,
    faserpaare: 3,
    kapazitaetTbit: 3.84,
    eigner: [
      "Bharti Airtel",
      "Etisalat",
      "Orange",
      "Telecom Italia Sparkle",
      "Tata Communications",
      "Saudi Telecom Company"
    ],
    konsortium: true,
    gebiet: "europa-asien",
    orte: [
      { name: "Marseille", land: "FR", lat: 43.3, lon: 5.37 },
      { name: "Catania", land: "IT", lat: 37.5, lon: 15.09 },
      { name: "Tripoli", land: "LB", lat: 34.44, lon: 35.83 },
      { name: "Alexandria", land: "EG", lat: 31.2, lon: 29.89 },
      { name: "Suez", land: "EG", lat: 29.97, lon: 32.55 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 },
      { name: "Karachi", land: "PK", lat: 24.86, lon: 67.01 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 }
    ],
    weitereOrte: 1,
    text: {
      de: "IMEWE (India-Middle East-Western Europe) verbindet Indien über Pakistan, die Vereinigten Arabischen Emirate, Saudi-Arabien, Ägypten und den Libanon mit Italien und Frankreich. Das Kabel mit drei Faserpaaren gehört einem Konsortium aus neun Unternehmen und ging im Dezember 2010 in den kommerziellen Betrieb.",
      en: "IMEWE (India-Middle East-Western Europe) connects India with Italy and France via Pakistan, the United Arab Emirates, Saudi Arabia, Egypt and Lebanon. The three fibre pair cable is owned by a consortium of nine companies and was launched for commercial use in December 2010.",
      tr: "IMEWE (India-Middle East-Western Europe), Hindistan'ı Pakistan, Birleşik Arap Emirlikleri, Suudi Arabistan, Mısır ve Lübnan üzerinden İtalya ve Fransa'ya bağlar. Üç fiber çiftli kablo dokuz şirketten oluşan bir konsorsiyuma aittir ve Aralık 2010'da ticari hizmete girmiştir."
    },
    quellen: [
      {
        name: "Sparkle: IMEWE submarine cable launched for commercial use (11.12.2010)",
        url: "https://www.tisparkle.com/media/press-release/imewe-submarine-cable-launched-for-commercial-use"
      },
      {
        name: "Submarine Networks: IMEWE",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/imewe"
      },
      {
        name: "Wikipedia: I-ME-WE (Wegweiser für die Ortsliste)",
        url: "https://en.wikipedia.org/wiki/I-ME-WE"
      }
    ],
    offen: ["orte", "weitereOrte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "falcon",
    name: "FALCON",
    status: "betrieb",
    inBetrieb: "2006",
    ausserBetrieb: null,
    laengeKm: 11859,
    faserpaare: null,
    kapazitaetTbit: 2.56,
    eigner: ["FLAG"],
    konsortium: false,
    gebiet: "indik",
    orte: [
      { name: "Suez", land: "EG", lat: 29.97, lon: 32.55 },
      { name: "Port Sudan", land: "SD", lat: 19.6, lon: 37.21 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Al Hudaydah", land: "YE", lat: 14.8, lon: 42.95 },
      { name: "Al Seeb", land: "OM", lat: 23.68, lon: 58.18 },
      { name: "Dubai", land: "AE", lat: 25.2, lon: 55.27 },
      { name: "Doha", land: "QA", lat: 25.29, lon: 51.53 },
      { name: "Manama", land: "BH", lat: 26.22, lon: 50.59 },
      { name: "Kuwait City", land: "KW", lat: 29.37, lon: 47.98 },
      { name: "Al-Faw", land: "IQ", lat: 29.98, lon: 48.47 },
      { name: "Bandar Abbas", land: "IR", lat: 27.2, lon: 56.29 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 }
    ],
    weitereOrte: 5,
    text: {
      de: "FALCON ist ein 11 859 km langes Kabel, das Indien und Sri Lanka mit den Staaten am Persischen Golf, am Roten Meer und mit Ägypten verbindet. Es ist seit September 2006 in Betrieb, hat eine anfängliche Auslegungskapazität von 2,56 Tbit/s und wurde als privates Kabel von FLAG Telecom gebaut, dem heutigen Netzbetreiber FLAG (früher Global Cloud Xchange).",
      en: "FALCON is an 11,859 km cable that connects India and Sri Lanka with the states on the Persian Gulf and the Red Sea and with Egypt. It has been in service since September 2006, has an initial design capacity of 2.56 Tbit/s and was built as a private cable by FLAG Telecom, today the network operator FLAG (formerly Global Cloud Xchange).",
      tr: "FALCON, Hindistan ve Sri Lanka'yı Basra Körfezi ve Kızıldeniz kıyısındaki ülkelere ve Mısır'a bağlayan 11.859 km uzunluğunda bir kablodur. Eylül 2006'dan beri hizmettedir, 2,56 Tbit/s başlangıç tasarım kapasitesine sahiptir ve bugün FLAG (eski adıyla Global Cloud Xchange) adını taşıyan FLAG Telecom tarafından özel kablo olarak inşa edilmiştir."
    },
    quellen: [
      {
        name: "Submarine Networks: FALCON",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/falcon"
      },
      {
        name: "Submarine Networks: FLAG Acquires One Fiber Pair on Echo (FLAG, früher GCX)",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/echo/flag-acquires-one-fiber-pair-on-echo-subsea-cable"
      }
    ],
    offen: ["faserpaare"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "peace",
    name: "PEACE Cable",
    status: "betrieb",
    inBetrieb: "2022-12-22",
    ausserBetrieb: null,
    laengeKm: 15000,
    faserpaare: null,
    kapazitaetTbit: 192,
    eigner: ["PEACE Cable International Network Co., Ltd."],
    konsortium: false,
    gebiet: "europa-asien",
    orte: [
      { name: "Marseille", land: "FR", lat: 43.3, lon: 5.37 },
      { name: "Abu Talat", land: "EG", lat: 31.06, lon: 29.7 },
      { name: "Zafarana", land: "EG", lat: 29.12, lon: 32.65 },
      { name: "Mombasa", land: "KE", lat: -4.05, lon: 39.67 },
      { name: "Karachi", land: "PK", lat: 24.86, lon: 67.01 },
      { name: "Kulhudhuffushi", land: "MV", lat: 6.62, lon: 73.07 },
      { name: "Singapore", land: "SG", lat: 1.28, lon: 103.83 }
    ],
    weitereOrte: 2,
    text: {
      de: "PEACE ist ein privates Kabel der PEACE Cable International Network, einer Tochter der chinesischen Hengtong-Gruppe, und verbindet Pakistan und Kenia über Ägypten mit Frankreich. Die 15 000 km lange Strecke ging im Dezember 2022 in Betrieb, eine Verlängerung von Pakistan nach Singapur kam später hinzu.",
      en: "PEACE is a private cable of PEACE Cable International Network, a subsidiary of the Chinese Hengtong Group, and connects Pakistan and Kenya with France via Egypt. The 15,000 km route went live in December 2022, and an extension from Pakistan to Singapore was added later.",
      tr: "PEACE, Çinli Hengtong Grubu'nun iştiraki PEACE Cable International Network'e ait özel bir kablodur ve Pakistan ile Kenya'yı Mısır üzerinden Fransa'ya bağlar. 15.000 km uzunluğundaki hat Aralık 2022'de hizmete girdi, daha sonra Pakistan'dan Singapur'a bir uzatma eklendi."
    },
    quellen: [
      {
        name: "Submarine Networks: PEACE",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/peace"
      },
      {
        name: "PEACE Cable: Pakistan segment ready for service (Pressemitteilung bei SubTel Forum)",
        url: "https://subtelforum.com/peace-cable-to-pakistan-now-ready-for-service/"
      },
      {
        name: "Orange: Landing of PEACE submarine cable in Marseille (19.10.2021)",
        url: "https://newsroom.orange.com/orange-pccw-global-and-peace-cable-international-jointly-announce-the-landing-of-peace-submarine-cable-in-marseille/"
      }
    ],
    offen: ["faserpaare", "weitereOrte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "flag-europe-asia",
    name: "FLAG Europe-Asia (FEA)",
    status: "stillgelegt",
    inBetrieb: "1997-11-22",
    ausserBetrieb: null,
    laengeKm: 28000,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["FLAG"],
    konsortium: false,
    gebiet: "europa-asien",
    orte: [
      { name: "Porthcurno", land: "GB", lat: 50.04, lon: -5.65 },
      { name: "Estepona", land: "ES", lat: 36.43, lon: -5.15 },
      { name: "Palermo", land: "IT", lat: 38.11, lon: 13.35 },
      { name: "Alexandria", land: "EG", lat: 31.2, lon: 29.89 },
      { name: "Aqaba", land: "JO", lat: 29.53, lon: 35.01 },
      { name: "Jeddah", land: "SA", lat: 21.54, lon: 39.17 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 },
      { name: "Penang", land: "MY", lat: 5.41, lon: 100.33 },
      { name: "Silvermine Bay", land: "HK", lat: 22.27, lon: 114.0 },
      { name: "Nanhui", land: "CN", lat: 31.07, lon: 121.76 },
      { name: "Miura", land: "JP", lat: 35.15, lon: 139.62 }
    ],
    weitereOrte: 6,
    text: {
      de: "FLAG Europe-Asia, ursprünglich Fibre-optic Link Around the Globe, ist ein 28 000 km langes Kabel zwischen Großbritannien und Japan, das am 22. November 1997 den kommerziellen Betrieb aufnahm. Die Fachseite Submarine Networks führt das System als stillgelegt, ohne ein Datum zu nennen.",
      en: "FLAG Europe-Asia, originally Fibre-optic Link Around the Globe, is a 28,000 km cable between the United Kingdom and Japan that opened for commercial service on 22 November 1997. The trade site Submarine Networks lists the system as retired without giving a date.",
      tr: "Başlangıçtaki adı Fibre-optic Link Around the Globe olan FLAG Europe-Asia, Birleşik Krallık ile Japonya arasında uzanan 28.000 km uzunluğunda bir kablodur ve 22 Kasım 1997'de ticari hizmete açılmıştır. Sektör sitesi Submarine Networks sistemi tarih vermeden hizmet dışı olarak listelemektedir."
    },
    quellen: [
      {
        name: "Submarine Networks: FLAG Europe-Asia (FEA)",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/flag-fea"
      },
      {
        name: "Submarine Networks: Systeme mit dem Vermerk Retired",
        url: "https://www.submarinenetworks.com/en/component/tags/tag/retired"
      },
      {
        name: "Submarine Networks: FLAG Acquires One Fiber Pair on Echo (FLAG, früher GCX)",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/echo/flag-acquires-one-fiber-pair-on-echo-subsea-cable"
      }
    ],
    offen: ["status", "ausserBetrieb", "faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "seacom",
    name: "SEACOM",
    status: "betrieb",
    inBetrieb: "2009-07-23",
    ausserBetrieb: null,
    laengeKm: 17000,
    faserpaare: null,
    kapazitaetTbit: 1.5,
    eigner: ["IPS", "Remgro", "Sanlam", "Convergence Partners"],
    konsortium: false,
    gebiet: "afrika",
    orte: [
      { name: "Mtunzini", land: "ZA", lat: -28.95, lon: 31.75 },
      { name: "Maputo", land: "MZ", lat: -25.97, lon: 32.57 },
      { name: "Dar es Salaam", land: "TZ", lat: -6.82, lon: 39.28 },
      { name: "Mombasa", land: "KE", lat: -4.05, lon: 39.67 },
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Zafarana", land: "EG", lat: 29.12, lon: 32.65 },
      { name: "Mumbai", land: "IN", lat: 19.08, lon: 72.88 }
    ],
    weitereOrte: 2,
    text: {
      de: "SEACOM ist ein 17 000 km langes Kabel, das Südafrika, Mosambik, Tansania, Kenia und Dschibuti mit Ägypten und Indien verbindet und seit dem 23. Juli 2009 in Betrieb ist. Die Kapazität wurde 2018 auf 1,5 Tbit/s erhöht.",
      en: "SEACOM is a 17,000 km cable that connects South Africa, Mozambique, Tanzania, Kenya and Djibouti with Egypt and India and has been in service since 23 July 2009. Its capacity was upgraded to 1.5 Tbit/s in 2018.",
      tr: "SEACOM, Güney Afrika, Mozambik, Tanzanya, Kenya ve Cibuti'yi Mısır ve Hindistan'a bağlayan 17.000 km uzunluğunda bir kablodur ve 23 Temmuz 2009'dan beri hizmettedir. Kapasitesi 2018'de 1,5 Tbit/s'ye yükseltilmiştir."
    },
    quellen: [
      {
        name: "Submarine Networks: SEACOM",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/seacom"
      },
      { name: "Djibouti Telecom: SEACOM", url: "https://international.djiboutitelecom.dj/seacom/" }
    ],
    offen: ["faserpaare", "weitereOrte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "eassy",
    name: "EASSy",
    status: "betrieb",
    inBetrieb: "2010",
    ausserBetrieb: null,
    laengeKm: 10000,
    faserpaare: 2,
    kapazitaetTbit: 36,
    eigner: ["WIOCC", "Bharti Airtel", "BT", "MTN Group", "Orange", "Telkom South Africa"],
    konsortium: true,
    gebiet: "afrika",
    orte: [
      { name: "Mtunzini", land: "ZA", lat: -28.95, lon: 31.75 },
      { name: "Maputo", land: "MZ", lat: -25.97, lon: 32.57 },
      { name: "Toliara", land: "MG", lat: -23.35, lon: 43.67 },
      { name: "Moroni", land: "KM", lat: -11.7, lon: 43.26 },
      { name: "Dar es Salaam", land: "TZ", lat: -6.82, lon: 39.28 },
      { name: "Mombasa", land: "KE", lat: -4.05, lon: 39.67 },
      { name: "Mogadishu", land: "SO", lat: 2.04, lon: 45.34 },
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Port Sudan", land: "SD", lat: 19.6, lon: 37.21 }
    ],
    weitereOrte: 0,
    text: {
      de: "EASSy (Eastern Africa Submarine Cable System) ist ein 10 000 km langes Konsortialkabel entlang der Ostküste Afrikas mit neun Landestationen zwischen Südafrika und dem Sudan. Es ist seit Juli 2010 in Betrieb, hat zwei Faserpaare und wurde nach mehreren Aufrüstungen auf 36 Tbit/s ausgelegt.",
      en: "EASSy (Eastern Africa Submarine Cable System) is a 10,000 km consortium cable along the east coast of Africa with nine landing stations between South Africa and Sudan. It has been in service since July 2010, has two fibre pairs and was upgraded in several steps to a design capacity of 36 Tbit/s.",
      tr: "EASSy (Eastern Africa Submarine Cable System), Afrika'nın doğu kıyısı boyunca uzanan 10.000 km uzunluğunda bir konsorsiyum kablosudur ve Güney Afrika ile Sudan arasında dokuz karaya çıkış istasyonu vardır. Temmuz 2010'dan beri hizmettedir, iki fiber çifti vardır ve birkaç yükseltmenin ardından tasarım kapasitesi 36 Tbit/s'ye çıkarılmıştır."
    },
    quellen: [
      { name: "Djibouti Telecom: EASSy", url: "https://international.djiboutitelecom.dj/eassy/" },
      { name: "WIOCC: EASSy", url: "https://www.wiocc.net/eassy" },
      {
        name: "Submarine Networks: EASSy",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/eassy"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "teams",
    name: "TEAMS",
    status: "betrieb",
    inBetrieb: "2009-10-01",
    ausserBetrieb: null,
    laengeKm: 5000,
    faserpaare: 2,
    kapazitaetTbit: 5.6,
    eigner: ["TEAMS (Kenya) Ltd", "Etisalat"],
    konsortium: false,
    gebiet: "afrika",
    orte: [
      { name: "Mombasa", land: "KE", lat: -4.05, lon: 39.67 },
      { name: "Fujairah", land: "AE", lat: 25.12, lon: 56.33 }
    ],
    weitereOrte: 0,
    text: {
      de: "TEAMS (The East African Marine System) ist ein 5 000 km langes Kabel mit zwei Faserpaaren zwischen Mombasa in Kenia und Fujairah in den Vereinigten Arabischen Emiraten. Es ging am 1. Oktober 2009 in den kommerziellen Betrieb und gehört zu 85 Prozent TEAMS (Kenya) Ltd und zu 15 Prozent Etisalat.",
      en: "TEAMS (The East African Marine System) is a 5,000 km cable with two fibre pairs between Mombasa in Kenya and Fujairah in the United Arab Emirates. It went live for commercial service on 1 October 2009 and is owned 85 percent by TEAMS (Kenya) Ltd and 15 percent by Etisalat.",
      tr: "TEAMS (The East African Marine System), Kenya'daki Mombasa ile Birleşik Arap Emirlikleri'ndeki Fujairah arasında uzanan, iki fiber çiftli 5.000 km uzunluğunda bir kablodur. 1 Ekim 2009'da ticari hizmete girmiştir, yüzde 85'i TEAMS (Kenya) Ltd'ye, yüzde 15'i Etisalat'a aittir."
    },
    quellen: [
      {
        name: "Submarine Networks: TEAMS",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/teams"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "dare1",
    name: "DARE1",
    status: "betrieb",
    inBetrieb: "2021",
    ausserBetrieb: null,
    laengeKm: 4854,
    faserpaare: 3,
    kapazitaetTbit: 36,
    eigner: ["Djibouti Telecom", "Somtel", "Telkom Kenya", "Hormuud Telecom"],
    konsortium: true,
    gebiet: "afrika",
    orte: [
      { name: "Djibouti", land: "DJ", lat: 11.59, lon: 43.15 },
      { name: "Bosaso", land: "SO", lat: 11.29, lon: 49.18 },
      { name: "Mogadishu", land: "SO", lat: 2.04, lon: 45.34 },
      { name: "Mombasa", land: "KE", lat: -4.05, lon: 39.67 }
    ],
    weitereOrte: 0,
    text: {
      de: "DARE1 (Djibouti Africa Regional Express 1) ist ein 4 854 km langes Kabel, das Dschibuti, Somalia und Kenia verbindet. Es hat drei Faserpaare, eine Auslegungskapazität von 36 Tbit/s und ist seit 2021 in Betrieb.",
      en: "DARE1 (Djibouti Africa Regional Express 1) is a 4,854 km cable that connects Djibouti, Somalia and Kenya. It has three fibre pairs, a design capacity of 36 Tbit/s and has been in service since 2021.",
      tr: "DARE1 (Djibouti Africa Regional Express 1), Cibuti, Somali ve Kenya'yı birbirine bağlayan 4.854 km uzunluğunda bir kablodur. Üç fiber çiftine ve 36 Tbit/s tasarım kapasitesine sahiptir, 2021'den beri hizmettedir."
    },
    quellen: [
      { name: "Djibouti Telecom: DARE1", url: "https://international.djiboutitelecom.dj/dare1/" },
      {
        name: "Submarine Networks: DARE1",
        url: "https://www.submarinenetworks.com/en/systems/asia-europe-africa/dare1"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "faster",
    name: "FASTER",
    status: "betrieb",
    inBetrieb: "2016-06-30",
    ausserBetrieb: null,
    laengeKm: 9000,
    faserpaare: 6,
    kapazitaetTbit: 60,
    eigner: ["China Mobile International", "China Telecom Global", "Global Transit", "Google", "KDDI", "Singtel"],
    konsortium: true,
    gebiet: "pazifik",
    orte: [
      { name: "Tanshui", land: "TW", lat: 25.17, lon: 121.44 },
      { name: "Shima", land: "JP", lat: 34.33, lon: 136.83 },
      { name: "Chikura", land: "JP", lat: 34.95, lon: 139.95 },
      { name: "Bandon", land: "US", lat: 43.12, lon: -124.42 }
    ],
    weitereOrte: 0,
    text: {
      de: "FASTER ist ein Transpazifikkabel eines Konsortiums aus sechs Unternehmen, das Japan mit Oregon an der Westküste der USA verbindet und am 30. Juni 2016 in Betrieb ging. Das Kabel mit sechs Faserpaaren ist auf 60 Tbit/s ausgelegt, das System landet außerdem in Taiwan.",
      en: "FASTER is a trans-Pacific cable of a consortium of six companies that connects Japan with Oregon on the US West Coast and entered service on 30 June 2016. The six fibre pair cable is designed for 60 Tbit/s, and the system also lands in Taiwan.",
      tr: "FASTER, altı şirketten oluşan bir konsorsiyumun Japonya'yı ABD'nin batı kıyısındaki Oregon'a bağlayan Pasifik ötesi kablosudur ve 30 Haziran 2016'da hizmete girmiştir. Altı fiber çiftli kablo 60 Tbit/s için tasarlanmıştır, sistem ayrıca Tayvan'da da karaya çıkar."
    },
    quellen: [
      {
        name: "FASTER Konsortium und NEC: FASTER Cable System is Ready for Service (29.06.2016)",
        url: "https://sg.nec.com/en_AP/press/201606/ap_20160629_01.html"
      },
      {
        name: "Submarine Networks: FASTER",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/faster"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "jupiter",
    name: "JUPITER",
    status: "betrieb",
    inBetrieb: "2021",
    ausserBetrieb: null,
    laengeKm: 14000,
    faserpaare: 5,
    kapazitaetTbit: 60,
    eigner: ["Amazon", "Meta", "NTT", "PCCW Global", "PLDT", "SoftBank"],
    konsortium: true,
    gebiet: "pazifik",
    orte: [
      { name: "Daet", land: "PH", lat: 14.11, lon: 122.96 },
      { name: "Shima", land: "JP", lat: 34.33, lon: 136.83 },
      { name: "Maruyama", land: "JP", lat: 35.03, lon: 139.97 },
      { name: "Hermosa Beach", land: "US", lat: 33.87, lon: -118.4 },
      { name: "Pacific City", land: "US", lat: 45.21, lon: -123.95 }
    ],
    weitereOrte: 0,
    text: {
      de: "JUPITER ist ein Transpazifikkabel eines Konsortiums aus sechs Unternehmen, das Japan, die Philippinen und die USA verbindet. Die Hauptstrecke mit fünf Faserpaaren ging im Mai 2021 in Betrieb, die anfängliche Auslegungskapazität beträgt 60 Tbit/s.",
      en: "JUPITER is a trans-Pacific cable of a consortium of six companies that connects Japan, the Philippines and the United States. The main trunk with five fibre pairs entered service in May 2021, and the initial design capacity is 60 Tbit/s.",
      tr: "JUPITER, altı şirketten oluşan bir konsorsiyumun Japonya, Filipinler ve ABD'yi birbirine bağlayan Pasifik ötesi kablosudur. Beş fiber çiftli ana hat Mayıs 2021'de hizmete girmiştir, başlangıç tasarım kapasitesi 60 Tbit/s'dir."
    },
    quellen: [
      {
        name: "NTT Communications: Pressemitteilung zu JUPITER (30.10.2017)",
        url: "https://www.ntt.com/en/about-us/press-releases/news/article/2017/1030.html"
      },
      {
        name: "Submarine Networks: JUPITER",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/jupiter"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "unity",
    name: "Unity",
    status: "betrieb",
    inBetrieb: "2010-04-01",
    ausserBetrieb: null,
    laengeKm: 10000,
    faserpaare: 8,
    kapazitaetTbit: 7.68,
    eigner: ["Bharti Airtel", "Global Transit", "Google", "KDDI", "Telstra", "Singtel"],
    konsortium: true,
    gebiet: "pazifik",
    orte: [
      { name: "Chikura", land: "JP", lat: 34.95, lon: 139.95 },
      { name: "Hermosa Beach", land: "US", lat: 33.87, lon: -118.4 }
    ],
    weitereOrte: 0,
    text: {
      de: "Unity ist ein Transpazifikkabel zwischen Chikura in Japan und Los Angeles, das ein Konsortium aus sechs Unternehmen im Februar 2008 ankündigte. Es ist seit dem 1. April 2010 in Betrieb und auf bis zu 7,68 Tbit/s ausgelegt.",
      en: "Unity is a trans-Pacific cable between Chikura in Japan and Los Angeles that a consortium of six companies announced in February 2008. It has been in service since 1 April 2010 and is designed for up to 7.68 Tbit/s.",
      tr: "Unity, Japonya'daki Chikura ile Los Angeles arasında uzanan ve altı şirketten oluşan bir konsorsiyumun Şubat 2008'de duyurduğu Pasifik ötesi kablodur. 1 Nisan 2010'dan beri hizmettedir ve 7,68 Tbit/s'ye kadar kapasite için tasarlanmıştır."
    },
    quellen: [
      {
        name: "Google: Global Consortium to Construct New Cable System Linking US and Japan (26.02.2008)",
        url: "https://googlepress.blogspot.com/2008/02/global-consortium-to-construct-new_26.html"
      },
      {
        name: "Submarine Networks: Unity",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/unity"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "curie",
    name: "Curie",
    status: "betrieb",
    inBetrieb: "2019-11-15",
    ausserBetrieb: null,
    laengeKm: 10500,
    faserpaare: 4,
    kapazitaetTbit: 72,
    eigner: ["Google"],
    konsortium: false,
    gebiet: "pazifik",
    orte: [
      { name: "Los Angeles", land: "US", lat: 34.05, lon: -118.25 },
      { name: "Panama City", land: "PA", lat: 8.97, lon: -79.53 },
      { name: "Valparaíso", land: "CL", lat: -33.05, lon: -71.62 }
    ],
    weitereOrte: 0,
    text: {
      de: "Curie ist ein privates Kabel von Google, das die USA mit Chile verbindet und einen Abzweig nach Panama hat. Es ist 10 500 km lang, hat vier Faserpaare mit je 18 Tbit/s und ist seit November 2019 betriebsbereit.",
      en: "Curie is a private Google cable that connects the United States with Chile and has a branch to Panama. It is 10,500 km long, has four fibre pairs of 18 Tbit/s each and has been ready for service since November 2019.",
      tr: "Curie, Google'a ait özel bir kablodur, ABD'yi Şili'ye bağlar ve Panama'ya bir kolu vardır. 10.500 km uzunluğundadır, her biri 18 Tbit/s olan dört fiber çifti vardır ve Kasım 2019'dan beri hizmete hazırdır."
    },
    quellen: [
      {
        name: "Google Cloud: Curie subsea cable set to transmit to Chile, with a pit stop to Panama",
        url: "https://cloud.google.com/blog/products/infrastructure/curie-subsea-cable-set-to-transmit-to-chile-with-a-pit-stop-to-panama?hl=en"
      },
      {
        name: "Submarine Networks: Curie",
        url: "https://www.submarinenetworks.com/en/systems/brazil-us/curie"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "southern-cross-next",
    name: "Southern Cross NEXT",
    status: "betrieb",
    inBetrieb: "2022-07-07",
    ausserBetrieb: null,
    laengeKm: 13520,
    faserpaare: 4,
    kapazitaetTbit: 100,
    eigner: ["Spark NZ", "Singtel", "Telstra", "Verizon"],
    konsortium: false,
    gebiet: "pazifik",
    orte: [
      { name: "Sydney", land: "AU", lat: -33.87, lon: 151.21 },
      { name: "Auckland", land: "NZ", lat: -36.85, lon: 174.77 },
      { name: "Suva", land: "FJ", lat: -18.14, lon: 178.44 },
      { name: "Savusavu", land: "FJ", lat: -16.78, lon: 179.33 },
      { name: "Kiritimati", land: "KI", lat: 1.85, lon: -157.4 },
      { name: "Hermosa Beach", land: "US", lat: 33.87, lon: -118.4 }
    ],
    weitereOrte: 1,
    text: {
      de: "Southern Cross NEXT verbindet Sydney, Auckland und Los Angeles und bindet Fidschi, Tokelau und Kiribati an. Das Kabel mit vier Faserpaaren ist seit Juli 2022 in Betrieb, der Betreiber nennt eine Kapazität von mehr als 100 Tbit/s.",
      en: "Southern Cross NEXT connects Sydney, Auckland and Los Angeles and provides connectivity into Fiji, Tokelau and Kiribati. The four fibre pair cable has been in service since July 2022, and the operator states a capacity of more than 100 Tbit/s.",
      tr: "Southern Cross NEXT, Sidney, Auckland ve Los Angeles'ı birbirine bağlar, Fiji, Tokelau ve Kiribati'ye de bağlantı sağlar. Dört fiber çiftli kablo Temmuz 2022'den beri hizmettedir, işletmeci 100 Tbit/s'den fazla kapasite bildirmektedir."
    },
    quellen: [
      { name: "Southern Cross Cables: NEXT", url: "https://www.southerncrosscables.com/next" },
      {
        name: "Submarine Networks: Southern Cross NEXT",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/southern-cross-next"
      }
    ],
    offen: ["weitereOrte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "hawaiki",
    name: "Hawaiki",
    status: "betrieb",
    inBetrieb: "2018-07-20",
    ausserBetrieb: null,
    laengeKm: 15000,
    faserpaare: null,
    kapazitaetTbit: 30,
    eigner: ["BW Digital"],
    konsortium: false,
    gebiet: "pazifik",
    orte: [
      { name: "Sydney", land: "AU", lat: -33.87, lon: 151.21 },
      { name: "Mangawhai Heads", land: "NZ", lat: -36.09, lon: 174.59 },
      { name: "Kapolei", land: "US", lat: 21.33, lon: -158.08 },
      { name: "Pacific City", land: "US", lat: 45.21, lon: -123.95 }
    ],
    weitereOrte: 3,
    text: {
      de: "Hawaiki ist ein 15 000 km langes privates Kabel, das Australien und Neuseeland über Hawaii mit Oregon in den USA verbindet und seit dem 20. Juli 2018 in Betrieb ist. Abzweige führen nach Amerikanisch-Samoa, Neukaledonien und Tonga, Eigentümer ist seit der Übernahme BW Digital.",
      en: "Hawaiki is a 15,000 km private cable that connects Australia and New Zealand with Oregon in the United States via Hawaii and has been in service since 20 July 2018. Branches run to American Samoa, New Caledonia and Tonga, and the owner since the acquisition is BW Digital.",
      tr: "Hawaiki, Avustralya ve Yeni Zelanda'yı Hawaii üzerinden ABD'deki Oregon'a bağlayan 15.000 km uzunluğunda özel bir kablodur ve 20 Temmuz 2018'den beri hizmettedir. Amerikan Samoası, Yeni Kaledonya ve Tonga'ya kolları vardır, devralmadan bu yana sahibi BW Digital'dir."
    },
    quellen: [
      {
        name: "Submarine Networks: Hawaiki",
        url: "https://www.submarinenetworks.com/en/systems/australia-usa/hawaiki-cable"
      }
    ],
    offen: ["faserpaare"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "topaz",
    name: "Topaz",
    status: "betrieb",
    inBetrieb: "2024",
    ausserBetrieb: null,
    laengeKm: null,
    faserpaare: 16,
    kapazitaetTbit: 240,
    eigner: ["Google"],
    konsortium: false,
    gebiet: "pazifik",
    orte: [
      { name: "Vancouver", land: "CA", lat: 49.26, lon: -123.11 },
      { name: "Port Alberni", land: "CA", lat: 49.23, lon: -124.81 },
      { name: "Takahagi", land: "JP", lat: 36.72, lon: 140.72 },
      { name: "Shima", land: "JP", lat: 34.33, lon: 136.83 }
    ],
    weitereOrte: 0,
    text: {
      de: "Topaz ist ein von Google gebautes Kabel und die erste Glasfaserverbindung zwischen Kanada und Asien. Es führt von Vancouver über Port Alberni zu den japanischen Präfekturen Mie und Ibaraki und hat 16 Faserpaare mit zusammen 240 Tbit/s.",
      en: "Topaz is a cable built by Google and the first fibre cable to connect Canada and Asia. It runs from Vancouver via Port Alberni to the Japanese prefectures of Mie and Ibaraki and has 16 fibre pairs with a total capacity of 240 Tbit/s.",
      tr: "Topaz, Google tarafından inşa edilen ve Kanada ile Asya arasındaki ilk fiber kablo olan sistemdir. Vancouver'dan Port Alberni üzerinden Japonya'nın Mie ve Ibaraki vilayetlerine uzanır ve toplam 240 Tbit/s kapasiteli 16 fiber çifti vardır."
    },
    quellen: [
      {
        name: "Google: Introducing Topaz, the first subsea cable to connect Canada and Asia",
        url: "https://blog.google/intl/en-ca/company-news/technology/introducing-topaz/"
      },
      {
        name: "Submarine Networks: Topaz",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/topaz"
      }
    ],
    offen: ["laengeKm"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "echo",
    name: "Echo",
    status: "betrieb",
    inBetrieb: null,
    ausserBetrieb: null,
    laengeKm: 16206,
    faserpaare: 12,
    kapazitaetTbit: 144,
    eigner: ["Google", "Meta", "Trans Pacific Networks"],
    konsortium: true,
    gebiet: "pazifik",
    orte: [
      { name: "Singapore", land: "SG", lat: 1.28, lon: 103.83 },
      { name: "Tanjung Pakis", land: "ID", lat: -5.97, lon: 107.13 },
      { name: "Piti", land: "GU", lat: 13.46, lon: 144.69 },
      { name: "Agat", land: "GU", lat: 13.38, lon: 144.65 },
      { name: "Eureka", land: "US", lat: 40.8, lon: -124.16 }
    ],
    weitereOrte: 1,
    text: {
      de: "Echo soll Eureka in Kalifornien über Guam und Indonesien mit Singapur verbinden, die Hauptstrecke ist 16 206 km lang und hat zwölf Faserpaare. In Betrieb ist bisher der Abschnitt zwischen Guam und Kalifornien, in Singapur wurde das Kabel 2026 angelandet.",
      en: "Echo is to connect Eureka in California with Singapore via Guam and Indonesia, and its main trunk is 16,206 km long with twelve fibre pairs. So far the section between Guam and California is in operation, and the cable landed in Singapore in 2026.",
      tr: "Echo, Kaliforniya'daki Eureka'yı Guam ve Endonezya üzerinden Singapur'a bağlayacaktır, ana hat 16.206 km uzunluğundadır ve on iki fiber çifti vardır. Şimdiye kadar Guam ile Kaliforniya arasındaki bölüm hizmettedir, kablo 2026'da Singapur'da karaya çıkarılmıştır."
    },
    quellen: [
      {
        name: "Google Cloud: Introducing the Echo subsea cable",
        url: "https://cloud.google.com/blog/products/infrastructure/introducing-the-echo-subsea-cable?hl=en"
      },
      {
        name: "Submarine Networks: Echo",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/echo"
      },
      {
        name: "Submarine Networks: Echo Cable System Overview",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/echo/echo-cable-system-overview"
      }
    ],
    offen: ["status", "inBetrieb"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "bifrost",
    name: "Bifrost",
    status: "betrieb",
    inBetrieb: "2025-10-02",
    ausserBetrieb: null,
    laengeKm: 20230,
    faserpaare: 12,
    kapazitaetTbit: 260,
    eigner: ["Meta", "Keppel", "Telin", "Amazon"],
    konsortium: true,
    gebiet: "pazifik",
    orte: [
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 },
      { name: "Jakarta", land: "ID", lat: -6.18, lon: 106.83 },
      { name: "Manado", land: "ID", lat: 1.49, lon: 124.84 },
      { name: "Davao", land: "PH", lat: 7.07, lon: 125.61 },
      { name: "Alupang", land: "GU", lat: 13.5, lon: 144.77 },
      { name: "Grover Beach", land: "US", lat: 35.12, lon: -120.62 },
      { name: "Winema", land: "US", lat: 45.15, lon: -123.97 },
      { name: "Rosarito", land: "MX", lat: 32.34, lon: -117.06 }
    ],
    weitereOrte: 0,
    text: {
      de: "Bifrost verbindet Singapur über Indonesien, die Philippinen und Guam mit der Westküste Nordamerikas und ist seit dem 2. Oktober 2025 betriebsbereit. Das System ist mit seinen Abzweigen 20 230 km lang, hat zwölf Faserpaare und eine Kapazität von mehr als 260 Tbit/s.",
      en: "Bifrost connects Singapore with the west coast of North America via Indonesia, the Philippines and Guam and has been ready for service since 2 October 2025. Including its branches the system is 20,230 km long, has twelve fibre pairs and a capacity of more than 260 Tbit/s.",
      tr: "Bifrost, Singapur'u Endonezya, Filipinler ve Guam üzerinden Kuzey Amerika'nın batı kıyısına bağlar ve 2 Ekim 2025'ten beri hizmete hazırdır. Sistem kollarıyla birlikte 20.230 km uzunluğundadır, on iki fiber çifti ve 260 Tbit/s'den fazla kapasitesi vardır."
    },
    quellen: [
      {
        name: "Keppel: Bifrost Cable System achieves Ready for Service status (02.10.2025)",
        url: "https://www.keppel.com/media/bifrost-cable-system-achieves-ready-for-service-status-primed-for-trans-pacific-connectivity/"
      },
      {
        name: "Submarine Networks: Bifrost",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/bifrost"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "trans-pacific-express",
    name: "Trans-Pacific Express (TPE)",
    status: "betrieb",
    inBetrieb: "2008",
    ausserBetrieb: null,
    laengeKm: 18000,
    faserpaare: null,
    kapazitaetTbit: 5.12,
    eigner: ["China Telecom", "China Unicom", "Chunghwa Telecom", "KT", "Verizon", "NTT"],
    konsortium: true,
    gebiet: "pazifik",
    orte: [
      { name: "Qingdao", land: "CN", lat: 36.07, lon: 120.38 },
      { name: "Chongming", land: "CN", lat: 31.67, lon: 121.5 },
      { name: "Tanshui", land: "TW", lat: 25.17, lon: 121.44 },
      { name: "Keoje", land: "KR", lat: 34.85, lon: 128.58 },
      { name: "Maruyama", land: "JP", lat: 35.03, lon: 139.97 },
      { name: "Nedonna Beach", land: "US", lat: 45.64, lon: -123.94 }
    ],
    weitereOrte: 0,
    text: {
      de: "Trans-Pacific Express verbindet das chinesische Festland, Taiwan, Südkorea und Japan mit Oregon in den USA. Das Konsortialkabel wurde im September 2008 fertiggestellt und ist auf 5,12 Tbit/s ausgelegt, die Anlandung in Japan kam in einer zweiten Bauphase hinzu.",
      en: "Trans-Pacific Express connects mainland China, Taiwan, South Korea and Japan with Oregon in the United States. The consortium cable was completed in September 2008 and has a design capacity of 5.12 Tbit/s, and the landing in Japan was added in a second construction phase.",
      tr: "Trans-Pacific Express, Çin ana karasını, Tayvan'ı, Güney Kore'yi ve Japonya'yı ABD'deki Oregon'a bağlar. Konsorsiyum kablosu Eylül 2008'de tamamlanmıştır ve 5,12 Tbit/s için tasarlanmıştır, Japonya'daki karaya çıkış ikinci bir yapım aşamasında eklenmiştir."
    },
    quellen: [
      {
        name: "Submarine Networks: TPE",
        url: "https://www.submarinenetworks.com/en/systems/trans-pacific/tpe"
      },
      {
        name: "Lightwave: Verizon Business, Asian partners activate U.S.-China leg of TPE (18.03.2008)",
        url: "https://www.lightwaveonline.com/home/article/16662409/verizon-business-asian-partners-activate-us-china-leg-of-tpe-submarine-system"
      },
      {
        name: "NTT Communications: Pressemitteilung zu TPE (25.03.2008, japanisch)",
        url: "https://www.ntt.com/about-us/press-releases/news/article/2008/20080325.html"
      }
    ],
    offen: ["faserpaare"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "tonga-cable",
    name: "Tonga Cable",
    status: "betrieb",
    inBetrieb: "2013-08-21",
    ausserBetrieb: null,
    laengeKm: 827,
    faserpaare: null,
    kapazitaetTbit: null,
    eigner: ["Tonga Cable Limited"],
    konsortium: false,
    gebiet: "pazifik",
    orte: [
      { name: "Nukuʻalofa", land: "TO", lat: -21.13, lon: -175.2 },
      { name: "Suva", land: "FJ", lat: -18.14, lon: 178.44 }
    ],
    weitereOrte: 0,
    text: {
      de: "Tonga Cable ist ein 827 km langes Kabel zwischen Nukuʻalofa in Tonga und Suva in Fidschi, wo es an das Netz von Southern Cross anschließt. Es gehört der staatlichen Tonga Cable Limited und ist seit dem 21. August 2013 in Betrieb.",
      en: "Tonga Cable is an 827 km cable between Nukuʻalofa in Tonga and Suva in Fiji, where it connects to the Southern Cross network. It is owned by the state-owned Tonga Cable Limited and has been in service since 21 August 2013.",
      tr: "Tonga Cable, Tonga'daki Nukuʻalofa ile Fiji'deki Suva arasında uzanan 827 km uzunluğunda bir kablodur ve Suva'da Southern Cross ağına bağlanır. Devlete ait Tonga Cable Limited şirketinin mülkiyetindedir ve 21 Ağustos 2013'ten beri hizmettedir."
    },
    quellen: [
      {
        name: "Submarine Networks: Tonga Cable",
        url: "https://www.submarinenetworks.com/en/systems/australia-usa/tonga-cable"
      }
    ],
    offen: ["faserpaare", "kapazitaetTbit"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "asia-pacific-gateway",
    name: "Asia Pacific Gateway (APG)",
    status: "betrieb",
    inBetrieb: "2016-10-28",
    ausserBetrieb: null,
    laengeKm: 10400,
    faserpaare: 6,
    kapazitaetTbit: 54.8,
    eigner: ["China Mobile", "China Telecom", "China Unicom", "Chunghwa Telecom", "NTT", "Meta"],
    konsortium: true,
    gebiet: "asien",
    orte: [
      { name: "Kuantan", land: "MY", lat: 3.82, lon: 103.33 },
      { name: "Singapore", land: "SG", lat: 1.28, lon: 103.83 },
      { name: "Songkhla", land: "TH", lat: 7.21, lon: 100.6, see: "golfVonThailand" },
      { name: "Da Nang", land: "VN", lat: 16.07, lon: 108.21 },
      { name: "Tseung Kwan O", land: "HK", lat: 22.3, lon: 114.25 },
      { name: "Toucheng", land: "TW", lat: 24.85, lon: 121.82 },
      { name: "Nanhui", land: "CN", lat: 31.07, lon: 121.76 },
      { name: "Chongming", land: "CN", lat: 31.67, lon: 121.5 },
      { name: "Busan", land: "KR", lat: 35.18, lon: 129.07 },
      { name: "Shima", land: "JP", lat: 34.33, lon: 136.83 },
      { name: "Maruyama", land: "JP", lat: 35.03, lon: 139.97 }
    ],
    weitereOrte: 0,
    text: {
      de: "Asia Pacific Gateway ist ein 10 400 km langes Konsortialkabel mit Anschlusspunkten auf dem chinesischen Festland, in Hongkong, Taiwan, Japan, Südkorea, Malaysia, Singapur, Thailand und Vietnam. Es ist seit dem 28. Oktober 2016 in Betrieb und hat sechs Faserpaare mit einer Kapazität von mehr als 54 Tbit/s.",
      en: "Asia Pacific Gateway is a 10,400 km consortium cable with connectivity points in mainland China, Hong Kong, Taiwan, Japan, South Korea, Malaysia, Singapore, Thailand and Vietnam. It has been in service since 28 October 2016 and has six fibre pairs with a capacity of more than 54 Tbit/s.",
      tr: "Asia Pacific Gateway, Çin ana karası, Hong Kong, Tayvan, Japonya, Güney Kore, Malezya, Singapur, Tayland ve Vietnam'da bağlantı noktaları bulunan 10.400 km uzunluğunda bir konsorsiyum kablosudur. 28 Ekim 2016'dan beri hizmettedir ve 54 Tbit/s'den fazla kapasiteli altı fiber çifti vardır."
    },
    quellen: [
      {
        name: "NTT Communications: Pressemitteilung zu APG (31.10.2016)",
        url: "https://www.ntt.com/en/about-us/press-releases/news/article/2016/20161031_2.html"
      },
      { name: "Submarine Networks: APG", url: "https://www.submarinenetworks.com/en/systems/intra-asia/apg" },
      {
        name: "Wikipedia: Asia Pacific Gateway (Wegweiser für die Ortsliste)",
        url: "https://en.wikipedia.org/wiki/Asia_Pacific_Gateway"
      }
    ],
    offen: ["orte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sjc",
    name: "Southeast Asia-Japan Cable (SJC)",
    status: "betrieb",
    inBetrieb: "2013-06-27",
    ausserBetrieb: null,
    laengeKm: 8900,
    faserpaare: 6,
    kapazitaetTbit: 28,
    eigner: ["Singtel", "KDDI", "Google", "China Mobile", "China Telecom", "Globe Telecom"],
    konsortium: true,
    gebiet: "asien",
    orte: [
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 },
      { name: "Telisai", land: "BN", lat: 4.73, lon: 114.56 },
      { name: "Nasugbu", land: "PH", lat: 14.07, lon: 120.63 },
      { name: "Chung Hom Kok", land: "HK", lat: 22.22, lon: 114.2 },
      { name: "Shantou", land: "CN", lat: 23.35, lon: 116.68 },
      { name: "Chikura", land: "JP", lat: 34.95, lon: 139.95 }
    ],
    weitereOrte: 0,
    text: {
      de: "Das Southeast Asia-Japan Cable ist ein 8 900 km langes Konsortialkabel, das Singapur, Brunei, die Philippinen, Hongkong und das chinesische Festland mit Japan verbindet. Es ist seit dem 27. Juni 2013 in Betrieb und hat sechs Faserpaare mit einer anfänglichen Auslegungskapazität von 28 Tbit/s.",
      en: "The Southeast Asia-Japan Cable is an 8,900 km consortium cable that connects Singapore, Brunei, the Philippines, Hong Kong and mainland China with Japan. It has been in service since 27 June 2013 and has six fibre pairs with an initial design capacity of 28 Tbit/s.",
      tr: "Southeast Asia-Japan Cable, Singapur, Brunei, Filipinler, Hong Kong ve Çin ana karasını Japonya'ya bağlayan 8.900 km uzunluğunda bir konsorsiyum kablosudur. 27 Haziran 2013'ten beri hizmettedir ve 28 Tbit/s başlangıç tasarım kapasiteli altı fiber çifti vardır."
    },
    quellen: [
      { name: "Submarine Networks: SJC", url: "https://www.submarinenetworks.com/en/systems/intra-asia/sjc" },
      {
        name: "Submarine Networks: SJC Cable Ready for Service (28.06.2013)",
        url: "https://www.submarinenetworks.com/en/systems/intra-asia/sjc/sjc-cable-ready-for-service"
      },
      {
        name: "Wikipedia: SJC (Wegweiser für die Ortsliste)",
        url: "https://en.wikipedia.org/wiki/SJC_(cable_system)"
      }
    ],
    offen: ["orte"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "apricot",
    name: "Apricot",
    status: "geplant",
    inBetrieb: null,
    ausserBetrieb: null,
    laengeKm: 12000,
    faserpaare: 12,
    kapazitaetTbit: 211,
    eigner: ["Google", "Meta", "NTT", "Chunghwa Telecom", "PLDT"],
    konsortium: true,
    gebiet: "asien",
    orte: [
      { name: "Tuas", land: "SG", lat: 1.28, lon: 103.63 },
      { name: "Batam", land: "ID", lat: 1.13, lon: 104.05 },
      { name: "Tanjung Pakis", land: "ID", lat: -5.97, lon: 107.13 },
      { name: "Davao", land: "PH", lat: 7.07, lon: 125.61 },
      { name: "Agat", land: "GU", lat: 13.38, lon: 144.65 },
      { name: "Baler", land: "PH", lat: 15.76, lon: 121.56 },
      { name: "Toucheng", land: "TW", lat: 24.85, lon: 121.82 },
      { name: "Minamiboso", land: "JP", lat: 35.04, lon: 139.84 }
    ],
    weitereOrte: 0,
    text: {
      de: "Apricot ist ein 12 000 km langes Kabel, das Singapur, Indonesien, die Philippinen, Guam, Taiwan und Japan verbinden soll. Google kündigte es im August 2021 für 2024 an, nach Angaben der Fachpresse verzögert sich die Inbetriebnahme wegen Genehmigungen in Indonesien auf 2027 oder später.",
      en: "Apricot is a 12,000 km cable that is to connect Singapore, Indonesia, the Philippines, Guam, Taiwan and Japan. Google announced it in August 2021 for 2024, and according to the trade press its start of operation is delayed to 2027 or later because of permits in Indonesia.",
      tr: "Apricot, Singapur, Endonezya, Filipinler, Guam, Tayvan ve Japonya'yı birbirine bağlayacak 12.000 km uzunluğunda bir kablodur. Google kabloyu Ağustos 2021'de 2024 için duyurdu, sektör basınına göre hizmete giriş Endonezya'daki izinler nedeniyle 2027'ye veya daha sonrasına kaldı."
    },
    quellen: [
      {
        name: "Google Cloud: Announcing Apricot, a new subsea cable connecting Singapore to Japan (16.08.2021)",
        url: "https://cloud.google.com/blog/products/infrastructure/new-apricot-subsea-cable-brings-more-connectivity-to-asia"
      },
      {
        name: "Submarine Networks: Apricot",
        url: "https://www.submarinenetworks.com/en/systems/intra-asia/apricot"
      }
    ],
    offen: ["inBetrieb"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "indigo-west",
    name: "INDIGO-West",
    status: "betrieb",
    inBetrieb: "2019",
    ausserBetrieb: null,
    laengeKm: 4600,
    faserpaare: 2,
    kapazitaetTbit: 36,
    eigner: ["AARNet", "Google", "Indosat Ooredoo", "Singtel", "SubPartners", "Telstra"],
    konsortium: true,
    gebiet: "indik",
    orte: [
      { name: "Singapore", land: "SG", lat: 1.28, lon: 103.83 },
      { name: "Jakarta", land: "ID", lat: -6.18, lon: 106.83 },
      { name: "Perth", land: "AU", lat: -31.95, lon: 115.86 }
    ],
    weitereOrte: 0,
    text: {
      de: "INDIGO-West ist der 4 600 km lange Abschnitt des INDIGO-Systems zwischen Singapur und Perth mit einem Abzweig nach Jakarta. Das Konsortium aus sechs Unternehmen meldete das System am 30. Mai 2019 als betriebsbereit.",
      en: "INDIGO-West is the 4,600 km section of the INDIGO system between Singapore and Perth with a branch to Jakarta. The consortium of six companies announced the system as ready on 30 May 2019.",
      tr: "INDIGO-West, INDIGO sisteminin Singapur ile Perth arasındaki 4.600 km uzunluğundaki bölümüdür ve Jakarta'ya bir kolu vardır. Altı şirketten oluşan konsorsiyum sistemin kullanıma hazır olduğunu 30 Mayıs 2019'da duyurmuştur."
    },
    quellen: [
      {
        name: "AARNet: INDIGO project",
        url: "https://aarnet.edu.au/network-and-services/the-network/indigo-project"
      },
      {
        name: "Submarine Networks: INDIGO",
        url: "https://www.submarinenetworks.com/en/systems/asia-australia/indigo"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "australia-singapore-cable",
    name: "Australia-Singapore Cable (ASC)",
    status: "betrieb",
    inBetrieb: "2018",
    ausserBetrieb: null,
    laengeKm: 4600,
    faserpaare: 4,
    kapazitaetTbit: 60,
    eigner: ["Vocus"],
    konsortium: false,
    gebiet: "indik",
    orte: [
      { name: "Perth", land: "AU", lat: -31.95, lon: 115.86 },
      { name: "Christmas Island", land: "CX", lat: -10.43, lon: 105.67 },
      { name: "Anyer", land: "ID", lat: -6.07, lon: 105.88 },
      { name: "Singapore", land: "SG", lat: 1.28, lon: 103.83 }
    ],
    weitereOrte: 0,
    text: {
      de: "Das Australia-Singapore Cable ist ein 4 600 km langes Kabel zwischen Perth und Singapur mit Anschlüssen zur Weihnachtsinsel und nach Indonesien. Es wurde von Vocus gebaut, ist seit September 2018 in Betrieb und hat vier Faserpaare mit einer Kapazität von bis zu 60 Tbit/s.",
      en: "The Australia-Singapore Cable is a 4,600 km cable between Perth and Singapore with connections to Christmas Island and Indonesia. It was built by Vocus, has been in service since September 2018 and has four fibre pairs with a capacity of up to 60 Tbit/s.",
      tr: "Australia-Singapore Cable, Perth ile Singapur arasında uzanan, Christmas Adası ve Endonezya'ya bağlantıları bulunan 4.600 km uzunluğunda bir kablodur. Vocus tarafından inşa edilmiştir, Eylül 2018'den beri hizmettedir ve 60 Tbit/s'ye kadar kapasiteli dört fiber çifti vardır."
    },
    quellen: [
      {
        name: "Vocus: Australia Singapore Cable",
        url: "https://www.vocus.com.au/our-network/australia-singapore-cable"
      },
      {
        name: "Submarine Networks: ASC",
        url: "https://www.submarinenetworks.com/en/systems/asia-australia/asc"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  }
];
