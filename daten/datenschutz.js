// Datenschutzhinweise der Website in drei Sprachen. Von Hand gepflegt; der deutsche Text ist die
// Vorlage. Jeder Abschnitt besteht aus Teilen der Art "absatz" (Text), "liste" (Überschrift und Punkte)
// oder "verweise" (Name und Adresse). Texte stehen nie als HTML in den Daten.
// Änderungen an diesem Text immer dem Verantwortlichen vorlegen; nichts erfinden.
window.NETZ_DATENSCHUTZ = {
  // Monat, in dem die Hinweise zuletzt geändert wurden.
  stand: "2026-11",
  kurz: {
    de: "Diese Website verwendet keine Cookies, keinen Besucherzähler und keine Werbe- oder Profiling-Werkzeuge. Beim bloßen Aufruf erhält nur der Hosting-Anbieter Ihre IP-Adresse. Abrufe bei anderen Stellen (Erdbeben, Ausfälle, Routing, Standort, Messung der Verbindung) finden nur statt, wenn Sie auf der Seite „Live“ den jeweiligen Knopf drücken. Drei Einstellungen, Sprache, Klang und Bewegung, bleiben in Ihrem Browser gespeichert und werden nicht übertragen.",
    en: "This website uses no cookies, no visitor counter and no advertising or profiling tools. When you merely open it, only the hosting provider receives your IP address. Requests to other parties (earthquakes, outages, routing, location, connection measurement) take place only when you press the respective button on the page “Live”. Three settings, language, sound and motion, remain stored in your browser and are not transmitted.",
    tr: "Bu site çerez, ziyaretçi sayacı, reklam veya profil çıkarma aracı kullanmaz. Siteyi yalnızca açtığınızda IP adresinizi sadece barındırma sağlayıcısı alır. Diğer kurumlara yapılan istekler (depremler, kesintiler, yönlendirme, konum, bağlantı ölçümü) ancak “Canlı” sayfasında ilgili düğmeye bastığınızda gerçekleşir. Üç ayar, yani dil, ses ve hareket, tarayıcınızda saklanır ve iletilmez."
  },
  abschnitte: [
    {
      titel: { de: "Verantwortlicher", en: "Controller", tr: "Veri sorumlusu" },
      teile: [
        { art: "absatz", text: {
          de: "Verantwortlich für diese Website ist MikaTec (Hasan Tepegöz). Anschrift, Kontakt und die vollständigen Pflichtangaben stehen im Impressum und in der ausführlichen Datenschutzerklärung von MikaTec. Kontakt in Datenschutzfragen: info@mika-tec.com.",
          en: "MikaTec (Hasan Tepegöz) is responsible for this website. Address, contact details and the complete mandatory information are given in the legal notice and in the detailed privacy policy of MikaTec. Contact for privacy matters: info@mika-tec.com.",
          tr: "Bu sitenin sorumlusu MikaTec'tir (Hasan Tepegöz). Adres, iletişim ve zorunlu bilgilerin tamamı MikaTec'in künyesinde ve ayrıntılı gizlilik bildiriminde yer alır. Gizlilik konularında iletişim: info@mika-tec.com."
        } },
        { art: "verweise", liste: [
          { name: { de: "Impressum von MikaTec", en: "Legal notice of MikaTec", tr: "MikaTec künyesi" }, url: "https://mika-tec.com/impressum.html" },
          { name: { de: "Datenschutzerklärung von MikaTec", en: "Privacy policy of MikaTec", tr: "MikaTec gizlilik bildirimi" }, url: "https://mika-tec.com/datenschutz.html" },
          { name: { de: "E-Mail an MikaTec", en: "E-mail to MikaTec", tr: "MikaTec'e e-posta" }, url: "mailto:info@mika-tec.com" }
        ] }
      ]
    },
    {
      titel: { de: "Hosting (GitHub Pages)", en: "Hosting (GitHub Pages)", tr: "Barındırma (GitHub Pages)" },
      teile: [
        { art: "absatz", text: {
          de: "Diese Website wird über GitHub Pages (GitHub, Inc., USA) ausgeliefert. Beim Abruf der Website verarbeitet GitHub technisch notwendige Verbindungsdaten in Server-Logfiles (u. a. IP-Adresse, Zeitpunkt, abgerufene Datei), um die Auslieferung und Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Näheres regelt die Datenschutzerklärung von GitHub.",
          en: "This website is delivered via GitHub Pages (GitHub, Inc., USA). When the website is accessed, GitHub processes technically necessary connection data in server log files (including IP address, time, requested file) in order to ensure delivery and security. The legal basis is Art. 6(1)(f) GDPR. Details are set out in GitHub's privacy statement.",
          tr: "Bu site GitHub Pages (GitHub, Inc., ABD) üzerinden sunulur. Site açıldığında GitHub, sunumu ve güvenliği sağlamak için teknik olarak gerekli bağlantı verilerini (IP adresi, zaman, istenen dosya gibi) sunucu günlüklerinde işler. Hukuki dayanak GDPR md. 6(1)(f)'dir. Ayrıntılar GitHub'ın gizlilik bildiriminde yer alır."
        } },
        { art: "verweise", liste: [
          { name: "GitHub Privacy Statement", url: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" }
        ] }
      ]
    },
    {
      titel: { de: "Abrufe nach Ihrem Klick (Seite „Live“)", en: "Requests after your click (page “Live”)", tr: "Tıklamanızdan sonraki istekler (“Canlı” sayfası)" },
      teile: [
        { art: "absatz", text: {
          de: "Die Seite „Live“ kann auf Ihren Wunsch Daten bei fremden Stellen abrufen. Ohne Ihren Klick geschieht das nicht. Jeder Abruf geht direkt von Ihrem Browser an die genannte Stelle. Dabei erhält sie technisch bedingt Ihre IP-Adresse sowie Angaben Ihres Browsers, zum Beispiel Browsertyp und Sprache. Wir selbst erhalten und speichern diese Daten nicht.",
          en: "At your request the page “Live” can fetch data from third parties. This does not happen without your click. Each request goes directly from your browser to the named party. For technical reasons it thereby receives your IP address and details of your browser, for example browser type and language. We ourselves neither receive nor store this data.",
          tr: "“Canlı” sayfası, isteğiniz üzerine üçüncü taraflardan veri alabilir. Siz tıklamadan bu gerçekleşmez. Her istek tarayıcınızdan doğrudan adı geçen kuruma gider. Bu sırada kurum, teknik nedenlerle IP adresinizi ve tarayıcı türü ile dil gibi tarayıcı bilgilerinizi alır. Biz bu verileri ne alırız ne de saklarız."
        } },
        { art: "liste", titel: { de: "Die Abrufe im Einzelnen", en: "The requests in detail", tr: "İsteklerin ayrıntısı" }, punkte: [
          { de: "Erdbeben: U.S. Geological Survey (USGS), eine Behörde der USA. Abgerufen wird die Liste der Erdbeben der letzten 24 Stunden.", en: "Earthquakes: U.S. Geological Survey (USGS), a United States government agency. The list of earthquakes of the last 24 hours is fetched.", tr: "Depremler: ABD'nin bir kurumu olan U.S. Geological Survey (USGS). Son 24 saatin deprem listesi alınır." },
          { de: "Ausfälle: IODA, ein Projekt des Georgia Institute of Technology in den USA. Abgerufen werden die gemeldeten Auffälligkeiten je Land; übermittelt wird dabei der abgefragte Zeitraum.", en: "Outages: IODA, a project of the Georgia Institute of Technology in the United States. The reported anomalies per country are fetched; the requested period is transmitted.", tr: "Kesintiler: ABD'deki Georgia Institute of Technology'nin bir projesi olan IODA. Ülke bazında bildirilen olağandışılıklar alınır; bu sırada sorgulanan zaman aralığı iletilir." },
          { de: "Routing live: RIPE NCC, Amsterdam, Niederlande. Es besteht eine Dauerverbindung, bis Sie sie ausschalten oder die Seite verdecken, längstens zwei Minuten. Übermittelt wird die Kennung „netz-atlas“ für diese Website.", en: "Routing live: RIPE NCC, Amsterdam, the Netherlands. A persistent connection exists until you switch it off or hide the page, for two minutes at most. The identifier “netz-atlas” for this website is transmitted.", tr: "Canlı yönlendirme: RIPE NCC, Amsterdam, Hollanda. Siz kapatana ya da sayfayı gizleyene kadar, en fazla iki dakika süren kalıcı bir bağlantı kurulur. Bu site için “netz-atlas” tanımlayıcısı iletilir." },
          { de: "Standort, IP-Adresse und Anbieter: GeoJS (geojs.io), nach eigenen Angaben von einer Einzelperson betrieben. Der Dienst leitet aus Ihrer IP-Adresse Ort, Land und Anbieter ab und sendet sie an Ihren Browser zurück. Angezeigt werden sie nur Ihnen.", en: "Location, IP address and provider: GeoJS (geojs.io), according to its own information run by an individual. The service derives place, country and provider from your IP address and sends them back to your browser. They are displayed only to you.", tr: "Konum, IP adresi ve sağlayıcı: kendi beyanına göre bir kişi tarafından işletilen GeoJS (geojs.io). Hizmet, IP adresinizden yer, ülke ve sağlayıcıyı çıkarır ve tarayıcınıza geri gönderir. Bunlar yalnızca size gösterilir." },
          { de: "Messung der Verbindung: Cloudflare, Inc., USA. Die Messung besteht aus kurzen Abrufen, einem Download von 5 MB und einem Upload von 2 MB ohne Inhalt. Cloudflare kann dabei Ihre IP-Adresse und die Messwerte verarbeiten.", en: "Connection measurement: Cloudflare, Inc., USA. The measurement consists of short requests, a download of 5 MB and an upload of 2 MB without content. Cloudflare may process your IP address and the measured values in the process.", tr: "Bağlantı ölçümü: Cloudflare, Inc., ABD. Ölçüm kısa isteklerden, 5 MB'lık bir indirmeden ve içeriksiz 2 MB'lık bir yüklemeden oluşur. Cloudflare bu sırada IP adresinizi ve ölçüm değerlerini işleyebilir." }
        ] },
        { art: "absatz", text: {
          de: "Rechtsgrundlage ist Ihre Einwilligung, die Sie durch den Klick auf den jeweiligen Knopf erteilen (Art. 6 Abs. 1 lit. a DSGVO). Der Hinweis, an wen der Abruf geht, steht jeweils unmittelbar am Knopf. Sie können die Einwilligung für die Zukunft widerrufen, indem Sie die Knöpfe nicht mehr benutzen; die Dauerverbindung beenden Sie mit „Ausschalten“. Für die weitere Verarbeitung bei den genannten Stellen gelten deren Datenschutzhinweise. Für die Schnittstelle von IODA haben wir keine eigenen Datenschutzhinweise gefunden (Stand November 2026).",
          en: "The legal basis is your consent, which you give by clicking the respective button (Art. 6(1)(a) GDPR). The notice stating to whom the request goes is placed directly at the button. You can withdraw your consent for the future by no longer using the buttons; you end the persistent connection with “Switch off”. Further processing by the named parties is governed by their privacy notices. For the IODA interface we have not found a privacy notice of its own (as of November 2026).",
          tr: "Hukuki dayanak, ilgili düğmeye tıklayarak verdiğiniz rızadır (GDPR md. 6(1)(a)). İsteğin kime gittiğini belirten not doğrudan düğmenin yanında yer alır. Düğmeleri artık kullanmayarak rızanızı ileriye dönük olarak geri alabilirsiniz; kalıcı bağlantıyı “Kapat” ile sonlandırırsınız. Adı geçen kurumlardaki sonraki işlemeler için onların gizlilik bildirimleri geçerlidir. IODA arayüzü için ayrı bir gizlilik bildirimi bulamadık (Kasım 2026 itibarıyla)."
        } },
        { art: "verweise", liste: [
          { name: "USGS Privacy Policies", url: "https://www.usgs.gov/privacy-policies" },
          { name: "RIPE NCC Privacy Statement", url: "https://www.ripe.net/about-us/legal/ripe-ncc-privacy-statement/" },
          { name: "GeoJS Privacy", url: "https://www.geojs.io/privacy/" },
          { name: "Cloudflare Privacy Policy", url: "https://www.cloudflare.com/privacypolicy/" }
        ] }
      ]
    },
    {
      titel: { de: "Datenübermittlung in Drittländer", en: "Data transfer to third countries", tr: "Üçüncü ülkelere veri aktarımı" },
      teile: [
        { art: "absatz", text: {
          de: "Das Hosting (GitHub Pages, Abschnitt 2) wird von einem Anbieter mit Sitz in den USA betrieben. Beim Aufruf der Website kann daher Ihre IP-Adresse in die USA übermittelt werden. Die Übermittlung stützt sich auf die vom Anbieter bereitgestellten Garantien, etwa eine Zertifizierung unter dem EU-US Data Privacy Framework oder EU-Standardvertragsklauseln; Einzelheiten finden Sie in der Datenschutzerklärung des Anbieters.",
          en: "The hosting (GitHub Pages, section 2) is operated by a provider based in the United States. When the website is accessed, your IP address may therefore be transferred to the United States. The transfer is based on the safeguards provided by the provider, such as certification under the EU-US Data Privacy Framework or EU standard contractual clauses; details can be found in the provider's privacy statement.",
          tr: "Barındırma (GitHub Pages, bölüm 2) ABD merkezli bir sağlayıcı tarafından işletilir. Bu nedenle site açıldığında IP adresiniz ABD'ye aktarılabilir. Aktarım, sağlayıcının sunduğu güvencelere, örneğin AB-ABD Veri Gizliliği Çerçevesi sertifikasına veya AB standart sözleşme maddelerine dayanır; ayrıntılar sağlayıcının gizlilik bildiriminde yer alır."
        } },
        { art: "absatz", text: {
          de: "Die Abrufe nach Abschnitt 3 gehen an Stellen in den USA (USGS, IODA, Cloudflare) und an GeoJS, dessen Betreiber nach eigenen Angaben australischem Recht unterliegt. Cloudflare ist nach eigenen Angaben unter dem EU-US Data Privacy Framework zertifiziert. Für USGS, IODA und GeoJS ist uns keine solche Zertifizierung bekannt. Dort besteht möglicherweise kein Datenschutzniveau, das dem der EU entspricht; insbesondere können Behörden auf Daten zugreifen, ohne dass Ihnen wirksame Rechtsbehelfe zustehen. Die Übermittlung Ihrer IP-Adresse an diese Stellen erfolgt deshalb nur aufgrund Ihrer ausdrücklichen Einwilligung durch den Klick (Art. 49 Abs. 1 lit. a DSGVO). Der Abruf beim RIPE NCC geht in die Niederlande.",
          en: "The requests under section 3 go to parties in the United States (USGS, IODA, Cloudflare) and to GeoJS, whose operator according to its own information is subject to Australian law. According to its own information Cloudflare is certified under the EU-US Data Privacy Framework. We are not aware of such a certification for USGS, IODA and GeoJS. There may be no level of data protection there that corresponds to that of the EU; in particular, authorities may access data without effective legal remedies being available to you. Your IP address is therefore transferred to these parties only on the basis of your explicit consent given by the click (Art. 49(1)(a) GDPR). The request to the RIPE NCC goes to the Netherlands.",
          tr: "Bölüm 3'teki istekler ABD'deki kurumlara (USGS, IODA, Cloudflare) ve işletmecisi kendi beyanına göre Avustralya hukukuna tabi olan GeoJS'ye gider. Cloudflare kendi beyanına göre AB-ABD Veri Gizliliği Çerçevesi kapsamında sertifikalıdır. USGS, IODA ve GeoJS için böyle bir sertifikadan haberdar değiliz. Oralarda AB'dekine denk bir veri koruma düzeyi bulunmayabilir; özellikle kamu makamları, size etkili başvuru yolları tanınmaksızın verilere erişebilir. Bu nedenle IP adresinizin bu kurumlara aktarımı yalnızca tıklamayla verdiğiniz açık rızaya dayanır (GDPR md. 49(1)(a)). RIPE NCC'ye yapılan istek Hollanda'ya gider."
        } }
      ]
    },
    {
      titel: { de: "Keine Tracker, keine externen Ressourcen", en: "No trackers, no external resources", tr: "İzleyici yok, dış kaynak yok" },
      teile: [
        { art: "absatz", text: {
          de: "Wir binden keine Analyse- oder Werbe-Dienste, keinen Besucherzähler, keine externen Schriften, Kartendienste oder Content-Delivery-Netzwerke ein. Die Karten und den Globus zeichnet die Website selbst aus Daten, die mit ihr ausgeliefert werden. Ihre Angaben holt die Website beim Öffnen nicht von fremden Diensten.",
          en: "We do not embed any analytics or advertising services, any visitor counter, any external fonts, map services or content delivery networks. The website draws the maps and the globe itself from data delivered with it. The website does not fetch its content from third-party services when it is opened.",
          tr: "Analiz veya reklam hizmeti, ziyaretçi sayacı, dış yazı tipi, harita hizmeti ya da içerik dağıtım ağı kullanmıyoruz. Site, haritaları ve küreyi kendisiyle birlikte sunulan verilerden kendisi çizer. Site açılırken içeriğini üçüncü taraf hizmetlerden almaz."
        } },
        { art: "absatz", text: {
          de: "Verweise auf Quellen und Betreiber führen zu fremden Websites. Eine Verbindung dorthin entsteht erst, wenn Sie einen Verweis anklicken; dann gelten die Datenschutzhinweise der jeweiligen Website.",
          en: "Links to sources and operators lead to third-party websites. A connection to them is established only when you click a link; the privacy notices of the respective website then apply.",
          tr: "Kaynaklara ve işletmecilere verilen bağlantılar üçüncü taraf sitelere götürür. Oraya bağlantı ancak bir bağlantıya tıkladığınızda kurulur; o zaman ilgili sitenin gizlilik bildirimi geçerlidir."
        } }
      ]
    },
    {
      titel: { de: "Einstellungen und Angaben in Ihrem Browser", en: "Settings and details in your browser", tr: "Tarayıcınızdaki ayarlar ve bilgiler" },
      teile: [
        { art: "absatz", text: {
          de: "Die Website merkt sich drei Einstellungen im Speicher Ihres Browsers (localStorage): die gewählte Sprache (Schlüssel „netzatlas-lang“), ob der Klang ein- oder ausgeschaltet ist (Schlüssel „netzatlas-klang“) und ob Bewegung ein- oder ausgeschaltet ist (Schlüssel „netzatlas-bewegung“). Diese Werte bleiben auf Ihrem Gerät, werden weder an uns noch an Dritte übertragen und enthalten keine personenbezogenen Daten.",
          en: "The website remembers three settings in your browser's storage (localStorage): the selected language (key “netzatlas-lang”), whether sound is switched on or off (key “netzatlas-klang”) and whether motion is switched on or off (key “netzatlas-bewegung”). These values remain on your device, are transmitted neither to us nor to third parties and contain no personal data.",
          tr: "Site, tarayıcınızın belleğinde (localStorage) üç ayarı hatırlar: seçilen dil (“netzatlas-lang” anahtarı), sesin açık mı kapalı mı olduğu (“netzatlas-klang” anahtarı) ve hareketin açık mı kapalı mı olduğu (“netzatlas-bewegung” anahtarı). Bu değerler cihazınızda kalır, ne bize ne de üçüncü taraflara iletilir ve kişisel veri içermez."
        } },
        { art: "absatz", text: {
          de: "Die Speicherung ist erforderlich, um die von Ihnen gewählte Einstellung beim nächsten Aufruf beizubehalten (§ 25 Abs. 2 Nr. 2 TDDDG); eine Einwilligung ist dafür nicht nötig. Sie können die Werte jederzeit über die Einstellungen Ihres Browsers löschen. Die Website funktioniert auch, wenn der Speicher gesperrt ist.",
          en: "The storage is necessary in order to keep the setting you have chosen the next time you visit (Section 25(2) no. 2 TDDDG); consent is not required for this. You can delete the values at any time via your browser settings. The website also works when the storage is blocked.",
          tr: "Bu saklama, seçtiğiniz ayarın bir sonraki ziyarette korunması için gereklidir (TDDDG § 25 f. 2 b. 2); bunun için rıza gerekmez. Değerleri istediğiniz zaman tarayıcı ayarlarınızdan silebilirsiniz. Site, bellek engellenmiş olsa da çalışır."
        } },
        { art: "absatz", text: {
          de: "Die Seite „Live“ zeigt Ihnen an, was Ihr Browser selbst mitteilt: Zeitzone, Sprache und, soweit Ihr Browser sie bereitstellt, die Verbindungsart und ein geschätztes Tempo. Diese Angaben werden nur angezeigt. Sie werden weder gespeichert noch übertragen.",
          en: "The page “Live” shows you what your browser itself provides: time zone, language and, where your browser makes them available, the connection type and an estimated speed. These details are only displayed. They are neither stored nor transmitted.",
          tr: "“Canlı” sayfası, tarayıcınızın kendi bildirdiklerini size gösterir: saat dilimi, dil ve tarayıcınız sağlıyorsa bağlantı türü ile tahmini hız. Bu bilgiler yalnızca gösterilir. Ne saklanır ne de iletilir."
        } }
      ]
    },
    {
      titel: { de: "Kontakt und Ihre Rechte", en: "Contact and your rights", tr: "İletişim ve haklarınız" },
      teile: [
        { art: "absatz", text: {
          de: "Nehmen Sie per E-Mail Kontakt zu uns auf, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu; außerdem ein Beschwerderecht bei einer Aufsichtsbehörde. Die ausführliche Darstellung dieser Rechte finden Sie in der Datenschutzerklärung von MikaTec.",
          en: "If you contact us by e-mail, we process your details exclusively to handle your enquiry. You have the rights of access, rectification, erasure, restriction of processing, data portability and objection, as well as the right to lodge a complaint with a supervisory authority. A detailed description of these rights can be found in the privacy policy of MikaTec.",
          tr: "Bize e-postayla ulaşırsanız bilgilerinizi yalnızca talebinizi yanıtlamak için işleriz. Bilgi edinme, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz haklarına, ayrıca bir denetim makamına şikâyet hakkına sahipsiniz. Bu hakların ayrıntılı açıklaması MikaTec'in gizlilik bildiriminde yer alır."
        } },
        { art: "verweise", liste: [
          { name: { de: "Datenschutzerklärung von MikaTec", en: "Privacy policy of MikaTec", tr: "MikaTec gizlilik bildirimi" }, url: "https://mika-tec.com/datenschutz.html" }
        ] }
      ]
    }
  ],
  schluss: {
    de: "Diese Hinweise gelten für die Website Netz-Atlas. Für alle weiteren Angaben gilt die Datenschutzerklärung von MikaTec.",
    en: "This notice applies to the website Netz-Atlas. For all further information the privacy policy of MikaTec applies.",
    tr: "Bu bildirim Netz-Atlas sitesi için geçerlidir. Diğer tüm bilgiler için MikaTec'in gizlilik bildirimi geçerlidir."
  }
};
