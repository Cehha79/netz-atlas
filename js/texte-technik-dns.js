// Texte des Bausteins „Namensauflösung“ der Technikseite in Deutsch, Englisch und Türkisch.
// Platzhalter in geschweiften Klammern setzt js/technik-dns.js ein, Zahlen in der Schreibweise der Sprache.
window.NETZ_TEXTE_DAZU({
  "dns.name": { de: "Beispielname", en: "Example name", tr: "Örnek ad" },
  "dns.speicher": { de: "Zwischenspeicher des Resolvers zu Beginn", en: "Resolver cache at the start", tr: "Başlangıçta çözümleyicinin önbelleği" },
  "dns.leer": { de: "Leer", en: "Empty", tr: "Boş" },
  "dns.voll": { de: "Gefüllt", en: "Filled", tr: "Dolu" },
  "dns.bedienung": { de: "Ablauf steuern", en: "Control the sequence", tr: "Akışı yönet" },
  "dns.weiter": { de: "Schritt weiter", en: "Next step", tr: "Sonraki adım" },
  "dns.vonVorn": { de: "Von vorn", en: "Start over", tr: "Baştan" },

  "dns.t.geraet": { de: "Dein Gerät", en: "Your device", tr: "Cihazın" },
  "dns.t.resolver": { de: "Resolver", en: "Resolver", tr: "Çözümleyici" },
  "dns.t.root": { de: "Root-Server", en: "Root server", tr: "Kök sunucu" },
  "dns.t.endung": { de: "Server der Endung {endung}", en: "Server for {endung}", tr: "{endung} uzantısı sunucusu" },
  "dns.t.zustaendig": { de: "Zuständiger Namensserver", en: "Authoritative name server", tr: "Yetkili ad sunucusu" },
  "dns.sp.leer": { de: "Speicher leer", en: "cache empty", tr: "önbellek boş" },
  "dns.sp.voll": { de: "Speicher gefüllt", en: "cache filled", tr: "önbellek dolu" },
  "dns.p.anfrage": { de: "Anfrage", en: "Query", tr: "Sorgu" },
  "dns.p.verweis": { de: "Verweis", en: "Referral", tr: "Yönlendirme" },
  "dns.p.antwort": { de: "Antwort", en: "Answer", tr: "Yanıt" },

  "dns.veranschaulichung": {
    de: "Veranschaulichung: Die Antworten sind gespielt, es wird nichts abgefragt. Namen und Adressen stammen aus Bereichen, die für Beispiele und Dokumentation reserviert sind.",
    en: "Illustration: the answers are staged, nothing is queried. Names and addresses come from ranges reserved for examples and documentation.",
    tr: "Örnekleme: Yanıtlar canlandırmadır, hiçbir sorgu gönderilmez. Adlar ve adresler, örnekler ve belgeleme için ayrılmış aralıklardan alınmıştır."
  },
  "dns.bildLabel": {
    de: "Ablauf der Namensauflösung für {name}, Zwischenspeicher zu Beginn: {zustand}. Schritt {schritt} von {gesamt}, Anfragen bisher: {anfragen}.",
    en: "Sequence of name resolution for {name}, cache at the start: {zustand}. Step {schritt} of {gesamt}, queries so far: {anfragen}.",
    tr: "{name} için ad çözümleme akışı, başlangıçta önbellek: {zustand}. Adım {schritt} / {gesamt}, şimdiye kadarki sorgu: {anfragen}."
  },

  "dns.schritt": { de: "Schritt {a} von {b}", en: "Step {a} of {b}", tr: "Adım {a} / {b}" },
  "dns.start": {
    de: "Noch ist nichts gefragt. Drücke „Schritt weiter“.",
    en: "Nothing has been asked yet. Press “Next step”.",
    tr: "Henüz hiçbir şey sorulmadı. “Sonraki adım” düğmesine bas."
  },
  "dns.l1": {
    de: "Dein Gerät fragt den Resolver ({resolver}): Welche Adresse hat {name}? Der Resolver ist der Rechner, der Namen für dich auflöst.",
    en: "Your device asks the resolver ({resolver}): what is the address of {name}? The resolver is the computer that resolves names for you.",
    tr: "Cihazın çözümleyiciye ({resolver}) sorar: {name} adının adresi nedir? Çözümleyici, adları senin için çözen bilgisayardır."
  },
  "dns.l2": {
    de: "Der Resolver hat dazu nichts im Zwischenspeicher. Er fragt einen Root-Server.",
    en: "The resolver has nothing about this in its cache. It asks a root server.",
    tr: "Çözümleyicinin önbelleğinde bununla ilgili bir şey yok. Bir kök sunucuya sorar."
  },
  "dns.l3": {
    de: "Der Root-Server kennt die Adresse nicht. Er verweist an die Server der Endung {endung}.",
    en: "The root server does not know the address. It refers the resolver to the servers for the ending {endung}, the top-level domain.",
    tr: "Kök sunucu adresi bilmez. Çözümleyiciyi {endung} uzantısının sunucularına yönlendirir."
  },
  "dns.l3res": {
    de: "Die Endung .example ist für Beispiele reserviert und wird im echten DNS nicht vergeben. Ihren Server gibt es nur in diesem Schaubild.",
    en: "The ending .example is reserved for examples and is not assigned in the real DNS. Its server exists only in this diagram.",
    tr: ".example uzantısı örnekler için ayrılmıştır ve gerçek DNS'te kimseye verilmez. Sunucusu yalnızca bu şemada vardır."
  },
  "dns.l4": {
    de: "Der Resolver fragt einen Server der Endung {endung}.",
    en: "The resolver asks a server for {endung}.",
    tr: "Çözümleyici, {endung} uzantısının bir sunucusuna sorar."
  },
  "dns.l5": {
    de: "Auch dieser Server kennt die Adresse nicht. Er verweist an den Namensserver, der für {zone} zuständig ist: {ns} ({nsAdresse}).",
    en: "This server does not know the address either. It refers the resolver to the name server responsible for {zone}: {ns} ({nsAdresse}).",
    tr: "Bu sunucu da adresi bilmez. Çözümleyiciyi {zone} için yetkili ad sunucusuna yönlendirir: {ns} ({nsAdresse})."
  },
  "dns.l6": {
    de: "Der Resolver fragt den zuständigen Namensserver {ns}.",
    en: "The resolver asks the authoritative name server {ns}.",
    tr: "Çözümleyici, yetkili ad sunucusuna ({ns}) sorar."
  },
  "dns.l7": {
    de: "Der zuständige Namensserver antwortet: {name} hat die Adresse {adresse}. Der Resolver legt die Antwort in seinen Zwischenspeicher.",
    en: "The authoritative name server answers: {name} has the address {adresse}. The resolver stores the answer in its cache.",
    tr: "Yetkili ad sunucusu yanıt verir: {name} adının adresi {adresse}. Çözümleyici yanıtı önbelleğine koyar."
  },
  "dns.l8": {
    de: "Der Resolver gibt die Adresse an dein Gerät weiter. Bilanz: {anfragen} Anfragen. Stelle den Zwischenspeicher auf „Gefüllt“ und sieh dir den Unterschied an.",
    en: "The resolver passes the address on to your device. Total: {anfragen} queries. Set the cache to “Filled” and see the difference.",
    tr: "Çözümleyici adresi cihazına iletir. Toplam: {anfragen} sorgu. Önbelleği “Dolu” yap ve farkı gör."
  },
  "dns.v2": {
    de: "Der Resolver hat die Antwort noch im Zwischenspeicher und gibt sie sofort zurück: {adresse}. Root-Server, Server der Endung und zuständiger Namensserver werden nicht gefragt. Bilanz: {anfragen} Anfrage.",
    en: "The resolver still has the answer in its cache and returns it at once: {adresse}. The root server, the server for the ending and the authoritative name server are not asked. Total: {anfragen} query.",
    tr: "Yanıt çözümleyicinin önbelleğinde durmaktadır ve hemen geri verilir: {adresse}. Kök sunucuya, uzantı sunucusuna ve yetkili ad sunucusuna sorulmaz. Toplam: {anfragen} sorgu."
  },

  "dns.z.bisher": { de: "Anfragen bisher", en: "Queries so far", tr: "Şimdiye kadarki sorgu" },
  "dns.z.gesamt": { de: "Anfragen in diesem Ablauf", en: "Queries in this sequence", tr: "Bu akıştaki sorgu" },
  "dns.z.schritt": { de: "Schritt", en: "Step", tr: "Adım" },

  "dns.root.titel": { de: "Root-Server in Zahlen", en: "Root servers in numbers", tr: "Sayılarla kök sunucular" },
  "dns.root.namen": { de: "Namen, von a bis m", en: "Names, a to m", tr: "Ad, a'dan m'ye" },
  "dns.root.betreiber": { de: "Betreiber", en: "Operators", tr: "İşletmeci" },
  "dns.root.instanzen": { de: "Instanzen weltweit", en: "Instances worldwide", tr: "Dünya genelinde örnek" },
  "dns.root.vermerk": {
    de: "Die Zahl der Instanzen ändert sich laufend. Stand {datum}, Angabe der Betreiber auf root-servers.org. Einer der {betreiber} Betreiber führt zwei der {namen} Namen.",
    en: "The number of instances changes all the time. As of {datum}, as stated by the operators on root-servers.org. One of the {betreiber} operators runs two of the {namen} names.",
    tr: "Örnek sayısı sürekli değişir. Tarih: {datum}, işletmecilerin root-servers.org üzerindeki bilgisi. {betreiber} işletmeciden biri {namen} addan ikisini yürütür."
  },
  "dns.any.titel": { de: "Anycast: eine Adresse, viele Standorte", en: "Anycast: one address, many locations", tr: "ANYCAST: tek adres, çok konum" },
  "dns.any.text": {
    de: "Hinter jedem der {namen} Namen steht nicht ein einzelner Rechner. Dieselbe Adresse wird an vielen Standorten zugleich angeboten, und das Netz leitet eine Anfrage zu einem davon. Welcher Standort antwortet, bestimmt der Weg im Routing, nicht die Entfernung auf der Karte.",
    en: "Behind each of the {namen} names there is not one single computer. The same address is offered at many locations at once, and the network routes a query to one of them. Which location answers is decided by the routing path, not by the distance on the map.",
    tr: "{namen} adın her birinin arkasında tek bir bilgisayar yoktur. Aynı adres aynı anda birçok konumda sunulur ve ağ, sorguyu bunlardan birine iletir. Hangi konumun yanıt vereceğini haritadaki uzaklık değil, yönlendirmedeki yol belirler."
  },

  "dns.e1.titel": { de: "Wozu Namensauflösung", en: "What name resolution is for", tr: "Ad çözümleme ne işe yarar" },
  "dns.e1.text": {
    de: "Rechner erreichen einander über Adressen aus Zahlen. Das DNS ist das Verzeichnis, das zu einem Namen die Adresse liefert. Für dich erledigt das ein Resolver.",
    en: "Computers reach each other via numeric addresses. The DNS is the directory that supplies the address for a name. A resolver does this job for you.",
    tr: "Bilgisayarlar birbirine sayılardan oluşan adreslerle ulaşır. DNS, bir adın adresini veren dizindir. Bu işi senin yerine bir çözümleyici yapar."
  },
  "dns.e2.titel": { de: "Der Zwischenspeicher", en: "The cache", tr: "Önbellek" },
  "dns.e2.text": {
    de: "Der Resolver darf eine Antwort für eine Frist behalten, die der Verwalter des Namens festlegt (TTL). Solange sie läuft, beantwortet er dieselbe Frage aus dem Zwischenspeicher. Das spart Zeit und entlastet die anderen Server.",
    en: "The resolver may keep an answer for a period set by the administrator of the name (TTL). While it lasts, the resolver answers the same question from its cache. This saves time and takes load off the other servers.",
    tr: "Çözümleyici bir yanıtı, adın yöneticisinin belirlediği süre boyunca (TTL) saklayabilir. Bu süre dolmadıkça aynı soruyu önbellekten yanıtlar. Bu, zaman kazandırır ve diğer sunucuların yükünü azaltır."
  },
  "dns.e3.titel": { de: "Häufige Irrtümer", en: "Common misconceptions", tr: "Yaygın yanılgılar" },
  "dns.e3.text": {
    de: "Es gibt nicht nur {namen} Root-Rechner: {namen} ist die Zahl der Namen, dahinter stehen weltweit {instanzen} Instanzen. Nicht jede Anfrage geht zur Root: Was der Resolver im Zwischenspeicher hat, beantwortet er selbst. Und die Root-Server kennen nicht jede Adresse, sie verweisen nur an die Server der Endung.",
    en: "There are not just {namen} root computers: {namen} is the number of names, with {instanzen} instances behind them worldwide. Not every query goes to the root: what the resolver has in its cache it answers itself. And the root servers do not know every address, they only refer to the servers for the ending.",
    tr: "Yalnızca {namen} kök bilgisayar yoktur: {namen}, adların sayısıdır; bunların arkasında dünya genelinde {instanzen} örnek bulunur. Her sorgu köke gitmez: Çözümleyici, önbelleğinde olanı kendisi yanıtlar. Kök sunucular da her adresi bilmez, yalnızca uzantının sunucularına yönlendirir."
  },

  "dns.grenze": {
    de: "Die Antworten sind gespielt, es findet keine echte Abfrage statt. Die Namen sind für Beispiele reserviert, die Adressen für Dokumentation; die Endung .example wird im echten DNS nicht vergeben. Gezeigt sind nur zwei Grenzfälle: Zwischenspeicher ganz leer und Antwort schon vorhanden. Dazwischen liegen Fälle, in denen der Resolver einen Teil des Wegs schon kennt und weiter unten beginnt. Die Zahl der Root-Instanzen ist eine Momentaufnahme.",
    en: "The answers are staged, no real query takes place. The names are reserved for examples, the addresses for documentation; the ending .example is not assigned in the real DNS. Only two extreme cases are shown: a completely empty cache and an answer that is already there. In between lie cases in which the resolver already knows part of the way and starts further down. The number of root instances is a snapshot.",
    tr: "Yanıtlar canlandırmadır, gerçek bir sorgu yapılmaz. Adlar örnekler için, adresler belgeleme için ayrılmıştır; .example uzantısı gerçek DNS'te kimseye verilmez. Yalnızca iki uç durum gösterilir: tamamen boş önbellek ve yanıtın zaten hazır olması. İkisinin arasında, çözümleyicinin yolun bir bölümünü zaten bildiği ve daha aşağıdan başladığı durumlar vardır. Kök örneklerinin sayısı anlık bir görüntüdür."
  }
});
