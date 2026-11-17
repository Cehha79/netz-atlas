// Internet-Knoten: eine Auswahl großer und regional wichtiger Austauschpunkte. Von Hand gepflegt.
// Jede Angabe stammt von der Seite des Betreibers; was sich nicht bestätigen ließ, ist null und steht unter offen.
// netze: angeschlossene Netze laut Betreiber. spitzeGbit: höchster gemeldeter Verkehr dieses Standorts in Gbit/s.
// Gesamtwerte aller Standorte eines Betreibers stehen nur im Text, nie in spitzeGbit.
window.NETZ_KNOTEN = [
  {
    id: "de-cix-frankfurt",
    name: "DE-CIX Frankfurt",
    stadt: { de: "Frankfurt am Main", en: "Frankfurt", tr: "Frankfurt" },
    land: "DE",
    lat: 50.11,
    lon: 8.68,
    betreiber: "DE-CIX Management GmbH",
    gegruendet: "1995",
    netze: 1000,
    netzeStand: null,
    spitzeGbit: 22298,
    spitzeStand: "2026-11-10",
    text: {
      de: "DE-CIX Frankfurt besteht seit 1995 und verbindet nach Angaben des Betreibers mehr als 1000 Netze. Die Verkehrsstatistik des Betreibers weist als bisherigen Höchstwert rund 22,3 Tbit/s aus.",
      en: "DE-CIX Frankfurt has existed since 1995 and, according to the operator, connects more than 1000 networks. The operator's traffic statistics show an all-time peak of about 22.3 Tbit/s.",
      tr: "DE-CIX Frankfurt 1995'ten beri faaliyettedir ve işletmecinin verilerine göre 1000'den fazla ağı birbirine bağlar. İşletmecinin trafik istatistiği bugüne kadarki en yüksek değeri yaklaşık 22,3 Tbit/s olarak gösterir."
    },
    quellen: [
      { name: "DE-CIX: Standort Frankfurt", url: "https://www.de-cix.net/en/locations/frankfurt" },
      {
        name: "DE-CIX: Verkehrsstatistik Frankfurt",
        url: "https://www.de-cix.net/en/locations/frankfurt/statistics"
      },
      { name: "DE-CIX: Über DE-CIX", url: "https://www.de-cix.net/en/about-de-cix" }
    ],
    offen: ["netzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ams-ix-amsterdam",
    name: "AMS-IX Amsterdam",
    stadt: { de: "Amsterdam", en: "Amsterdam", tr: "Amsterdam" },
    land: "NL",
    lat: 52.37,
    lon: 4.9,
    betreiber: "Amsterdam Internet Exchange (AMS-IX)",
    gegruendet: "1994",
    netze: 917,
    netzeStand: "2026-11-17",
    spitzeGbit: 15822,
    spitzeStand: "2026-11-17",
    text: {
      de: "AMS-IX entstand 1994 in Amsterdam. Die Statistik des Betreibers nennt 917 angeschlossene Netze und einen Jahreshöchstwert von rund 15,8 Tbit/s.",
      en: "AMS-IX was established in Amsterdam in 1994. The operator's statistics list 917 connected networks and a yearly peak of about 15.8 Tbit/s.",
      tr: "AMS-IX 1994'te Amsterdam'da kuruldu. İşletmecinin istatistiği 917 bağlı ağ ve yaklaşık 15,8 Tbit/s'lik bir yıllık en yüksek değer gösterir."
    },
    quellen: [
      { name: "AMS-IX: Amsterdam in Zahlen", url: "https://www.ams-ix.net/ams" },
      {
        name: "AMS-IX: Gesamtstatistik Amsterdam",
        url: "https://www.ams-ix.net/ams/documentation/total-stats"
      },
      {
        name: "AMS-IX: Mitteilung zum 30-jährigen Bestehen (31.01.2024)",
        url: "https://www.ams-ix.net/car/news/internet-exchange-ams-ix-celebrates-30-year-anniversary"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "linx-london",
    name: "LINX London (LON1)",
    stadt: { de: "London", en: "London", tr: "Londra" },
    land: "GB",
    lat: 51.51,
    lon: -0.13,
    betreiber: "London Internet Exchange Ltd",
    gegruendet: "1994",
    netze: null,
    netzeStand: null,
    spitzeGbit: 9800,
    spitzeStand: "2026-09",
    text: {
      de: "LINX wurde 1994 von fünf britischen Internetanbietern gegründet. LON1 ist das Hauptnetz in London und erreicht laut Betreiber in der Spitze knapp 9,8 Tbit/s; die Zahl der Netze nennt er nur für alle Standorte zusammen (über 900).",
      en: "LINX was founded in 1994 by five UK internet service providers. LON1 is its main network in London and, according to the operator, peaks at nearly 9.8 Tbit/s; the number of networks is only given for all locations combined (more than 900).",
      tr: "LINX 1994'te beş Britanyalı internet sağlayıcısı tarafından kuruldu. LON1 Londra'daki ana ağdır ve işletmeciye göre en yüksek değeri yaklaşık 9,8 Tbit/s'dir; ağ sayısı yalnızca tüm konumlar için toplu olarak verilir (900'den fazla)."
    },
    quellen: [
      { name: "LINX: About", url: "https://www.linx.net/about/" },
      { name: "LINX: History of LINX", url: "https://www.linx.net/about/history-of-linx/" },
      {
        name: "LINX: LON2 LAN Hits 1Tb of Traffic (15.09.2026)",
        url: "https://www.linx.net/news/lon2-hits-1tb-traffic/"
      }
    ],
    offen: ["netze", "netzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ix-br-sao-paulo",
    name: "IX.br São Paulo",
    stadt: { de: "São Paulo", en: "São Paulo", tr: "São Paulo" },
    land: "BR",
    lat: -23.55,
    lon: -46.63,
    betreiber: "NIC.br",
    gegruendet: null,
    netze: 2720,
    netzeStand: "2026-11-17",
    spitzeGbit: 32000,
    spitzeStand: "2026-03",
    text: {
      de: "IX.br São Paulo gehört zum brasilianischen Knotennetz IX.br, einer Initiative von CGI.br und NIC.br. Die Teilnehmerliste nennt 2720 Teilnehmer; im März 2026 meldete NIC.br für São Paulo 32 Tbit/s.",
      en: "IX.br São Paulo is part of the Brazilian exchange network IX.br, an initiative of CGI.br and NIC.br. The participant list shows 2720 participants; in March 2026 NIC.br reported 32 Tbit/s for São Paulo.",
      tr: "IX.br São Paulo, CGI.br ve NIC.br'nin girişimi olan Brezilya değişim noktaları ağı IX.br'nin bir parçasıdır. Katılımcı listesi 2720 katılımcı gösterir; NIC.br Mart 2026'da São Paulo için 32 Tbit/s bildirdi."
    },
    quellen: [
      { name: "IX.br: Teilnehmer São Paulo", url: "https://ix.br/particip/sp" },
      {
        name: "NIC.br: Mitteilung zu 50 Tbit/s (27.03.2026)",
        url: "https://nic.br/noticia/releases/ix-br-hits-record-50-tbit-s-of-aggregated-internet-traffic-driven-by-content-and-digital-services/"
      },
      { name: "IX.br: Verkehr São Paulo", url: "https://ix.br/trafego/agregado/sp" }
    ],
    offen: ["gegruendet"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "de-cix-istanbul",
    name: "DE-CIX Istanbul",
    stadt: { de: "Istanbul", en: "Istanbul", tr: "İstanbul" },
    land: "TR",
    lat: 41.01,
    lon: 28.98,
    betreiber: "DE-CIX",
    gegruendet: "2015",
    netze: 60,
    netzeStand: "2025-10",
    spitzeGbit: 533,
    spitzeStand: "2025-09",
    text: {
      de: "DE-CIX Istanbul besteht seit 2015. Der Betreiber nannte im Oktober 2025 mehr als 60 angeschlossene Netze und für September 2025 einen Höchstwert von mehr als 533 Gbit/s.",
      en: "DE-CIX Istanbul was established in 2015. In October 2025 the operator reported more than 60 connected networks and a peak of more than 533 Gbit/s for September 2025.",
      tr: "DE-CIX Istanbul 2015'te kuruldu. İşletmeci Ekim 2025'te 60'tan fazla bağlı ağ ve Eylül 2025 için 533 Gbit/s'nin üzerinde bir en yüksek değer bildirdi."
    },
    quellen: [
      {
        name: "DE-CIX: Pressemitteilung zu Istanbul (01.10.2025)",
        url: "https://www.de-cix.net/en/about-de-cix/media/press-releases/istanbul-emerges-as-a-strategic-digital-hub-bridging-europe-central-asia-and-the-middle-east-turkish-interconnection-market-set-to-double-by-2030"
      },
      { name: "DE-CIX: Standort Istanbul", url: "https://www.de-cix.net/en/locations/istanbul" }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "france-ix-paris",
    name: "France-IX Paris",
    stadt: { de: "Paris", en: "Paris", tr: "Paris" },
    land: "FR",
    lat: 48.86,
    lon: 2.35,
    betreiber: "France IX Services",
    gegruendet: "2010",
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "France-IX wurde im Juni 2010 gegründet und betreibt Knoten in Paris und weiteren französischen Städten. Der Betreiber nennt nur Gesamtwerte für alle Standorte: mehr als 600 angeschlossene Netze und über 3 Tbit/s Spitzenverkehr.",
      en: "France-IX was founded in June 2010 and operates exchanges in Paris and other French cities. The operator only publishes totals for all locations: more than 600 connected networks and a traffic peak above 3 Tbit/s.",
      tr: "France-IX Haziran 2010'da kuruldu ve Paris ile diğer Fransız şehirlerinde değişim noktaları işletir. İşletmeci yalnızca tüm konumların toplamını yayımlar: 600'den fazla bağlı ağ ve 3 Tbit/s'nin üzerinde en yüksek trafik."
    },
    quellen: [
      { name: "France-IX: Startseite", url: "https://www.franceix.net/en/" },
      { name: "France-IX: About France-IX", url: "https://www.franceix.net/en/about/about-france-ix/" },
      { name: "France-IX: Statistics", url: "https://www.franceix.net/en/infrastructure/statistics/" }
    ],
    offen: ["netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "netnod-stockholm",
    name: "Netnod IX Stockholm",
    stadt: { de: "Stockholm", en: "Stockholm", tr: "Stockholm" },
    land: "SE",
    lat: 59.33,
    lon: 18.07,
    betreiber: "Netnod",
    gegruendet: "1996",
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "Netnod nahm 1996 den Betrieb auf und führt den Stockholmer Knoten weiter, der 1992 als D-GIX entstand. Der Betreiber nennt nur Werte für Netnod IX insgesamt: 217 angeschlossene Netze und einen Höchstwert von 3,48 Tbit/s.",
      en: "Netnod started operations in 1996 and continues the Stockholm exchange that was launched in 1992 as D-GIX. The operator only publishes figures for Netnod IX as a whole: 217 connected networks and a peak of 3.48 Tbit/s.",
      tr: "Netnod 1996'da faaliyete başladı ve 1992'de D-GIX adıyla kurulan Stockholm değişim noktasını sürdürüyor. İşletmeci yalnızca Netnod IX'in tamamı için değer yayımlar: 217 bağlı ağ ve 3,48 Tbit/s'lik en yüksek değer."
    },
    quellen: [
      { name: "Netnod: Netnod IX", url: "https://www.netnod.se/ix" },
      { name: "Netnod: Netnod IX Stockholm", url: "https://www.netnod.se/ix/stockholm" },
      { name: "Netnod: Netnod history", url: "https://www.netnod.se/about-netnod/netnod-history" }
    ],
    offen: ["netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "mix-mailand",
    name: "MIX (Milan Internet eXchange)",
    stadt: { de: "Mailand", en: "Milan", tr: "Milano" },
    land: "IT",
    lat: 45.46,
    lon: 9.19,
    betreiber: "MIX S.r.l.",
    gegruendet: "2000",
    netze: 471,
    netzeStand: "2026-11-17",
    spitzeGbit: 3890,
    spitzeStand: "2026-11-17",
    text: {
      de: "MIX wurde 2000 in Mailand gegründet. Die Startseite des Betreibers zeigt 471 angeschlossene Netze und einen Höchstwert von 3890 Gbit/s.",
      en: "MIX was founded in Milan in 2000. The operator's home page shows 471 connected networks and a peak of 3890 Gbit/s.",
      tr: "MIX 2000'de Milano'da kuruldu. İşletmecinin ana sayfası 471 bağlı ağ ve 3890 Gbit/s'lik bir en yüksek değer gösterir."
    },
    quellen: [
      { name: "MIX: Startseite", url: "https://www.mix-it.net/en/" },
      { name: "MIX: About us", url: "https://www.mix-it.net/en/about-us/" }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "msk-ix-moskau",
    name: "MSK-IX",
    stadt: { de: "Moskau", en: "Moscow", tr: "Moskova" },
    land: "RU",
    lat: 55.76,
    lon: 37.62,
    betreiber: "JSC MSK-IX",
    gegruendet: "1995",
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "MSK-IX geht auf eine Gründungsvereinbarung von 1995 zurück und ist heute in zehn Städten vertreten. Der Betreiber nennt nur Werte für das gesamte Netz, im September 2026 eine Spitzenlast von 8,7 Tbit/s und 624 Teilnehmer am Verkehrsaustausch.",
      en: "MSK-IX goes back to a founding agreement signed in 1995 and is now present in ten cities. The operator only reports figures for the whole network, in September 2026 a peak load of 8.7 Tbit/s and 624 traffic exchange participants.",
      tr: "MSK-IX'in temeli 1995'te imzalanan kuruluş anlaşmasına dayanır ve bugün on şehirde bulunur. İşletmeci yalnızca tüm ağ için değer verir: Eylül 2026'da 8,7 Tbit/s'lik en yüksek yük ve 624 trafik değişimi katılımcısı."
    },
    quellen: [
      { name: "MSK-IX: Startseite", url: "https://www.msk-ix.ru/en/" },
      { name: "MSK-IX: About", url: "https://www.msk-ix.ru/en/about/" }
    ],
    offen: ["netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "de-cix-new-york",
    name: "DE-CIX New York",
    stadt: { de: "New York", en: "New York", tr: "New York" },
    land: "US",
    lat: 40.71,
    lon: -74.01,
    betreiber: "DE-CIX",
    gegruendet: "2014",
    netze: null,
    netzeStand: null,
    spitzeGbit: 2439,
    spitzeStand: "2026",
    text: {
      de: "DE-CIX New York ging 2014 in Betrieb. Die Verkehrsstatistik des Betreibers weist als bisherigen Höchstwert rund 2,4 Tbit/s aus.",
      en: "DE-CIX New York went live in 2014. The operator's traffic statistics show an all-time peak of about 2.4 Tbit/s.",
      tr: "DE-CIX New York 2014'te hizmete girdi. İşletmecinin trafik istatistiği bugüne kadarki en yüksek değeri yaklaşık 2,4 Tbit/s olarak gösterir."
    },
    quellen: [
      {
        name: "DE-CIX: Verkehrsstatistik New York",
        url: "https://www.de-cix.net/en/locations/new-york/statistics"
      },
      {
        name: "DE-CIX: 10 years of DE-CIX New York (03.06.2024)",
        url: "https://de-cix.net/en/about-de-cix/news/10-years-of-de-cix-new-york"
      },
      { name: "DE-CIX: Standort New York", url: "https://www.de-cix.net/en/locations/new-york" }
    ],
    offen: ["netze", "netzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "any2-los-angeles",
    name: "Any2Exchange (Any2West)",
    stadt: { de: "Los Angeles", en: "Los Angeles", tr: "Los Angeles" },
    land: "US",
    lat: 34.05,
    lon: -118.24,
    betreiber: "CoreSite",
    gegruendet: null,
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "Any2Exchange gehört dem Rechenzentrumsbetreiber CoreSite und wird von ihm betrieben. Die Standorte Los Angeles und Silicon Valley bilden zusammen Any2West; der Betreiber nennt über 250 angeschlossene Mitglieder in Kalifornien, aber keinen Wert für Los Angeles allein.",
      en: "Any2Exchange is owned and operated by the data centre operator CoreSite. The Los Angeles and Silicon Valley markets together form Any2West; the operator reports over 250 members connected in California but no figure for Los Angeles alone.",
      tr: "Any2Exchange, veri merkezi işletmecisi CoreSite'a aittir ve onun tarafından işletilir. Los Angeles ve Silikon Vadisi birlikte Any2West'i oluşturur; işletmeci Kaliforniya'da 250'den fazla bağlı üye bildirir, ancak yalnızca Los Angeles için bir değer vermez."
    },
    quellen: [
      {
        name: "CoreSite: Any2 Internet Peering Exchange",
        url: "https://www.coresite.com/interconnection/peering-exchanges/any2-internet-peering-exchange"
      },
      {
        name: "CoreSite: Dokumentation Any2Exchange",
        url: "https://docs.coresite.com/any-2-exchange/introduction"
      }
    ],
    offen: ["gegruendet", "netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "jpnap-tokio",
    name: "JPNAP Tokyo",
    stadt: { de: "Tokio", en: "Tokyo", tr: "Tokyo" },
    land: "JP",
    lat: 35.68,
    lon: 139.69,
    betreiber: "Internet Multifeed Co.",
    gegruendet: null,
    netze: null,
    netzeStand: null,
    spitzeGbit: 5220,
    spitzeStand: "2025",
    text: {
      de: "JPNAP Tokyo wird von Internet Multifeed Co. betrieben, einem 1997 gegründeten Unternehmen. Die Verkehrsgrafik des Betreibers für Tokio zeigt als höchsten Tageswert der letzten zwei Jahre 5,22 Tbit/s.",
      en: "JPNAP Tokyo is operated by Internet Multifeed Co., a company established in 1997. The operator's traffic graph for Tokyo shows 5.22 Tbit/s as the highest daily value of the past two years.",
      tr: "JPNAP Tokyo, 1997'de kurulan Internet Multifeed Co. tarafından işletilir. İşletmecinin Tokyo trafik grafiği son iki yılın en yüksek günlük değerini 5,22 Tbit/s olarak gösterir."
    },
    quellen: [
      { name: "JPNAP: Verkehr Tokio", url: "https://www.jpnap.net/en/ix/traffic_tokyo" },
      { name: "JPNAP: Unternehmen", url: "https://www.jpnap.net/en/company" },
      { name: "JPNAP: Startseite", url: "https://www.jpnap.net/en/" }
    ],
    offen: ["gegruendet", "netze", "netzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "hkix-hongkong",
    name: "HKIX (Hong Kong Internet eXchange)",
    stadt: { de: "Hongkong", en: "Hong Kong", tr: "Hong Kong" },
    land: "HK",
    lat: 22.32,
    lon: 114.17,
    betreiber: "Hong Kong Internet eXchange Limited",
    gegruendet: "1995",
    netze: 298,
    netzeStand: "2026-11-17",
    spitzeGbit: 3202,
    spitzeStand: "2026-11-17",
    text: {
      de: "HKIX wurde im April 1995 gegründet und gehört der Hong Kong Internet eXchange Limited, einer Tochter der Stiftung der Chinesischen Universität Hongkong. Die Teilnehmerliste führt 298 Netze, die Verkehrsgrafik zeigt einen Höchstwert von 3,2 Tbit/s.",
      en: "HKIX was established in April 1995 and is owned and operated by Hong Kong Internet eXchange Limited, a subsidiary of The Chinese University of Hong Kong Foundation. The participant list contains 298 networks and the traffic graph shows a peak of 3.2 Tbit/s.",
      tr: "HKIX Nisan 1995'te kuruldu ve Hong Kong Çin Üniversitesi Vakfı'nın bağlı kuruluşu olan Hong Kong Internet eXchange Limited'e aittir. Katılımcı listesinde 298 ağ yer alır, trafik grafiği 3,2 Tbit/s'lik bir en yüksek değer gösterir."
    },
    quellen: [
      { name: "HKIX: What is HKIX", url: "https://www.hkix.net/hkix/whatishkix.htm" },
      { name: "HKIX: Participants", url: "https://www.hkix.net/hkix/participant.htm" },
      {
        name: "HKIX: Aggregate Switching Statistics",
        url: "https://www.hkix.net/hkix/stat/aggt/hkix-aggregate.html"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "sgix-singapur",
    name: "SGIX (Singapore Internet Exchange)",
    stadt: { de: "Singapur", en: "Singapore", tr: "Singapur" },
    land: "SG",
    lat: 1.35,
    lon: 103.82,
    betreiber: "Singapore Internet Exchange Ltd.",
    gegruendet: "2009",
    netze: 277,
    netzeStand: "2026-11-17",
    spitzeGbit: 5540,
    spitzeStand: "2026-11-17",
    text: {
      de: "SGIX wurde 2009 mit Unterstützung der Behörde IMDA gegründet und arbeitet nicht gewinnorientiert. Die Teilnehmerliste führt 277 Netze, die Verkehrsgrafik zeigt für das letzte Jahr einen Höchstwert von 5,54 Tbit/s.",
      en: "SGIX was established in 2009 with support from the authority IMDA and operates as a not-for-profit provider. The participant list contains 277 networks and the traffic graph shows a peak of 5.54 Tbit/s for the past year.",
      tr: "SGIX 2009'da IMDA kurumunun desteğiyle kuruldu ve kâr amacı gütmeden çalışır. Katılımcı listesinde 277 ağ yer alır, trafik grafiği son yıl için 5,54 Tbit/s'lik bir en yüksek değer gösterir."
    },
    quellen: [
      { name: "SGIX: About us", url: "https://www.sgix.sg/about-us/" },
      { name: "SGIX: Peering Participants", url: "https://www.sgix.sg/peering-participants/" },
      { name: "SGIX: Traffic Statistics", url: "https://www.sgix.sg/services/traffic-statistics/" }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "de-cix-mumbai",
    name: "DE-CIX Mumbai",
    stadt: { de: "Mumbai", en: "Mumbai", tr: "Mumbai" },
    land: "IN",
    lat: 19.08,
    lon: 72.88,
    betreiber: "DE-CIX India (DE-CIX Interwire Internet Services)",
    gegruendet: null,
    netze: null,
    netzeStand: null,
    spitzeGbit: 2760,
    spitzeStand: "2025",
    text: {
      de: "DE-CIX Mumbai ist über mehrere Rechenzentren in Mumbai verteilt und gehört zu DE-CIX India. Laut Betreiber erreichte der Knoten 2025 einen Höchstwert von 2,76 Tbit/s; die Zahl der Netze nennt er nur für ganz Indien (über 600).",
      en: "DE-CIX Mumbai is distributed across several data centres in Mumbai and is part of DE-CIX India. According to the operator it reached a peak of 2.76 Tbit/s in 2025; the number of networks is only given for all of India (more than 600).",
      tr: "DE-CIX Mumbai, Mumbai'deki birkaç veri merkezine dağılmıştır ve DE-CIX India'nın bir parçasıdır. İşletmeciye göre 2025'te 2,76 Tbit/s'lik en yüksek değere ulaştı; ağ sayısı yalnızca tüm Hindistan için verilir (600'den fazla)."
    },
    quellen: [
      { name: "DE-CIX India: DE-CIX Mumbai", url: "https://www.de-cix.in/de-cix-mumbai/" },
      {
        name: "DE-CIX: Pressemitteilung (12.05.2026)",
        url: "https://www.de-cix.net/en/about-de-cix/media/press-releases/de-cix-ranks-1-internet-exchange"
      }
    ],
    offen: ["gegruendet", "netze", "netzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "uae-ix-dubai",
    name: "UAE-IX powered by DE-CIX",
    stadt: { de: "Dubai", en: "Dubai", tr: "Dubai" },
    land: "AE",
    lat: 25.2,
    lon: 55.27,
    betreiber: "DE-CIX Management GmbH",
    gegruendet: "2012",
    netze: 109,
    netzeStand: "2026-11-17",
    spitzeGbit: 1000,
    spitzeStand: "2025",
    text: {
      de: "UAE-IX wurde 2012 vom Telekommunikationsunternehmen EITC gestartet und wird von DE-CIX betrieben. Die Betreiberseite zeigt 109 aktive Netze; 2025 überschritt der Verkehr laut DE-CIX erstmals 1 Tbit/s.",
      en: "UAE-IX was launched in 2012 by the telecommunications company EITC and is operated by DE-CIX. The operator's page shows 109 active networks; according to DE-CIX, traffic exceeded 1 Tbit/s for the first time in 2025.",
      tr: "UAE-IX 2012'de telekomünikasyon şirketi EITC tarafından başlatıldı ve DE-CIX tarafından işletilir. İşletmecinin sayfası 109 etkin ağ gösterir; DE-CIX'e göre trafik 2025'te ilk kez 1 Tbit/s'yi aştı."
    },
    quellen: [
      { name: "UAE-IX: About", url: "https://www.uae-ix.net/en/about" },
      { name: "UAE-IX: Connected networks", url: "https://www.uae-ix.net/en/location/connected-networks" },
      {
        name: "DE-CIX: Pressemitteilung (12.05.2026)",
        url: "https://www.de-cix.net/en/about-de-cix/media/press-releases/de-cix-ranks-1-internet-exchange"
      }
    ],
    offen: [],
    geprueftAm: "2026-11-17"
  },
  {
    id: "napafrica-johannesburg",
    name: "NAPAfrica IX Johannesburg",
    stadt: { de: "Johannesburg", en: "Johannesburg", tr: "Johannesburg" },
    land: "ZA",
    lat: -26.2,
    lon: 28.05,
    betreiber: "NAPAfrica",
    gegruendet: null,
    netze: 610,
    netzeStand: "2026-11-17",
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "NAPAfrica betreibt Knoten in den Rechenzentren von Teraco in Johannesburg, Kapstadt und Durban. Die Teilnehmerliste führt für Johannesburg 610 Netze; Verkehrswerte nennt der Betreiber nur für alle drei Standorte zusammen (über 6 Tbit/s).",
      en: "NAPAfrica operates exchanges in Teraco's data centres in Johannesburg, Cape Town and Durban. The peering list contains 610 networks for Johannesburg; traffic figures are only given for all three locations combined (more than 6 Tbit/s).",
      tr: "NAPAfrica, Teraco'nun Johannesburg, Cape Town ve Durban'daki veri merkezlerinde değişim noktaları işletir. Katılımcı listesinde Johannesburg için 610 ağ yer alır; trafik değerleri yalnızca üç konumun toplamı için verilir (6 Tbit/s'nin üzerinde)."
    },
    quellen: [
      { name: "NAPAfrica: Who is Peering", url: "https://www.napafrica.net/who-is-peering/" },
      { name: "NAPAfrica: Peering Traffic", url: "https://www.napafrica.net/peering-traffic/" },
      {
        name: "Teraco: Mitteilung zu 6 Tbit/s (11.11.2025)",
        url: "https://www.teraco.co.za/news/napafrica-and-teraco-acx-growing-africas-digital-community-as-napafrica-hits-6tbps/"
      }
    ],
    offen: ["gegruendet", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ixpn-lagos",
    name: "Internet Exchange Point of Nigeria (IXPN)",
    stadt: { de: "Lagos", en: "Lagos", tr: "Lagos" },
    land: "NG",
    lat: 6.52,
    lon: 3.38,
    betreiber: "Internet Exchange Point of Nigeria (IXPN)",
    gegruendet: "2006",
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "IXPN nahm 2006 im NECOM House in Lagos den Betrieb auf und ist heute in sieben Bundesstaaten Nigerias vertreten. Der Betreiber nennt nur Gesamtwerte für alle Standorte: mehr als 130 angeschlossene Netze.",
      en: "IXPN began operations in 2006 at NECOM House in Lagos and is now present in seven Nigerian states. The operator only gives totals for all locations: more than 130 connected networks.",
      tr: "IXPN 2006'da Lagos'taki NECOM House'da faaliyete başladı ve bugün Nijerya'nın yedi eyaletinde bulunur. İşletmeci yalnızca tüm konumların toplamını verir: 130'dan fazla bağlı ağ."
    },
    quellen: [
      { name: "IXPN: Startseite", url: "https://ixpn.ng/" },
      { name: "IXPN: History", url: "https://ixpn.ng/about/history" }
    ],
    offen: ["netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "kixp-nairobi",
    name: "Kenya Internet Exchange Point (KIXP)",
    stadt: { de: "Nairobi", en: "Nairobi", tr: "Nairobi" },
    land: "KE",
    lat: -1.29,
    lon: 36.82,
    betreiber: "Technology Service Providers of Kenya (TESPOK)",
    gegruendet: "2000",
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "KIXP wurde Ende November 2000 vom Verband TESPOK in Nairobi gestartet, kurz darauf von der Aufsichtsbehörde geschlossen und erhielt im November 2001 eine Lizenz. Der Knoten hat Standorte in Nairobi und Mombasa.",
      en: "KIXP was launched in Nairobi in late November 2000 by the association TESPOK, was closed by the regulator shortly afterwards and received a licence in November 2001. The exchange has sites in Nairobi and Mombasa.",
      tr: "KIXP, Kasım 2000 sonunda TESPOK birliği tarafından Nairobi'de başlatıldı, kısa süre sonra düzenleyici kurum tarafından kapatıldı ve Kasım 2001'de lisans aldı. Değişim noktasının Nairobi ve Mombasa'da konumları vardır."
    },
    quellen: [
      { name: "TESPOK: KIXP", url: "https://www.tespok.co.ke/?page_id=6274" },
      { name: "TESPOK: Startseite", url: "https://www.tespok.co.ke/" },
      { name: "KIXP: Public Traffic Statistics", url: "https://portal.kixp.or.ke/statistics/ixp" }
    ],
    offen: ["netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "ix-australia-sydney",
    name: "IX Australia NSW-IX",
    stadt: { de: "Sydney", en: "Sydney", tr: "Sidney" },
    land: "AU",
    lat: -33.87,
    lon: 151.21,
    betreiber: "Internet Association of Australia Ltd",
    gegruendet: null,
    netze: 194,
    netzeStand: "2026-11-17",
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "NSW-IX ist der Knoten von IX Australia in Sydney; betrieben wird er von der Internet Association of Australia. Die öffentliche Peer-Liste führt 194 Netze und ist laut Betreiber nicht vollständig.",
      en: "NSW-IX is the IX Australia exchange in Sydney, operated by the Internet Association of Australia. The public peer list contains 194 networks and, according to the operator, is not exhaustive.",
      tr: "NSW-IX, IX Australia'nın Sidney'deki değişim noktasıdır ve Internet Association of Australia tarafından işletilir. Herkese açık eş listesi 194 ağ içerir ve işletmeciye göre eksiksiz değildir."
    },
    quellen: [
      { name: "IX Australia: Startseite", url: "https://www.ix.asn.au/" },
      { name: "IX Australia: Peers and partners", url: "https://ix.asn.au/peers-and-partners/" }
    ],
    offen: ["gegruendet", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  },
  {
    id: "cabase-buenos-aires",
    name: "CABASE IXP Buenos Aires",
    stadt: { de: "Buenos Aires", en: "Buenos Aires", tr: "Buenos Aires" },
    land: "AR",
    lat: -34.6,
    lon: -58.38,
    betreiber: "CABASE (Cámara Argentina de Internet)",
    gegruendet: null,
    netze: null,
    netzeStand: null,
    spitzeGbit: null,
    spitzeStand: null,
    text: {
      de: "Die argentinische Internetkammer CABASE betreibt ein landesweites Netz von 28 Knoten, zu dem der Knoten in Buenos Aires gehört. Der Betreiber nennt nur Gesamtwerte: 550 Mitglieder und laut einer Mitteilung von 2024 Spitzen bis 6 Tbit/s.",
      en: "The Argentine Internet chamber CABASE operates a national network of 28 exchanges that includes the one in Buenos Aires. The operator only gives totals: 550 members and, according to a 2024 statement, peaks of up to 6 Tbit/s.",
      tr: "Arjantin İnternet Odası CABASE, Buenos Aires'teki değişim noktasını da kapsayan 28 noktalı ülke çapında bir ağ işletir. İşletmeci yalnızca toplam değerler verir: 550 üye ve 2024 tarihli bir açıklamaya göre 6 Tbit/s'ye varan en yüksek değerler."
    },
    quellen: [
      { name: "CABASE: Red de IXP", url: "https://ixp.cabase.org.ar/" },
      { name: "CABASE: The Chamber", url: "https://cabase.org.ar/en/the-chamber" },
      { name: "DPL News: Mitteilung von CABASE (24.09.2024)", url: "https://dplnews.com/?p=250373" }
    ],
    offen: ["gegruendet", "netze", "netzeStand", "spitzeGbit", "spitzeStand"],
    geprueftAm: "2026-11-17"
  }
];
