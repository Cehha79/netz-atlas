// DNS-Root-Server: die 13 Namen mit Betreiber, Adressen und Zahl der Instanzen. Quelle: root-servers.org und IANA.
// instanzenGesamt: Zahl der arbeitenden Instanzen laut Startseite von root-servers.org.
// instanzen je Server und instanzenListe: Summe aus den Standortlisten, einschließlich ruhender Standorte;
// deshalb ist die Summe etwas höher als instanzenGesamt.
window.NETZ_ROOT = {
  stand: "2026-11-17",
  instanzenGesamt: 2046,
  betreiberGesamt: 12,
  quellen: [
    { name: "root-servers.org", url: "https://root-servers.org/" },
    { name: "IANA: Root Servers", url: "https://www.iana.org/domains/root/servers" }
  ],
  server: [
    {
      buchstabe: "A",
      name: "a.root-servers.net",
      betreiber: "Verisign, Inc.",
      ipv4: "198.41.0.4",
      ipv6: "2001:503:ba3e::2:30",
      instanzen: 56,
      laender: 9
    },
    {
      buchstabe: "B",
      name: "b.root-servers.net",
      betreiber: "Information Sciences Institute",
      ipv4: "170.247.170.2",
      ipv6: "2801:1b8:10::b",
      instanzen: 6,
      laender: 4
    },
    {
      buchstabe: "C",
      name: "c.root-servers.net",
      betreiber: "Cogent Communications",
      ipv4: "192.33.4.12",
      ipv6: "2001:500:2::c",
      instanzen: 13,
      laender: 10
    },
    {
      buchstabe: "D",
      name: "d.root-servers.net",
      betreiber: "University of Maryland",
      ipv4: "199.7.91.13",
      ipv6: "2001:500:2d::d",
      instanzen: 248,
      laender: 129
    },
    {
      buchstabe: "E",
      name: "e.root-servers.net",
      betreiber: "NASA Office of the Chief Information Officer",
      ipv4: "192.203.230.10",
      ipv6: "2001:500:a8::e",
      instanzen: 355,
      laender: 126
    },
    {
      buchstabe: "F",
      name: "f.root-servers.net",
      betreiber: "Internet Systems Consortium, Inc.",
      ipv4: "192.5.5.241",
      ipv6: "2001:500:2f::f",
      instanzen: 655,
      laender: 138
    },
    {
      buchstabe: "G",
      name: "g.root-servers.net",
      betreiber: "Defense Information Systems Agency",
      ipv4: "192.112.36.4",
      ipv6: "2001:500:12::d0d",
      instanzen: 6,
      laender: 4
    },
    {
      buchstabe: "H",
      name: "h.root-servers.net",
      betreiber: "U.S. Army DEVCOM Army Research Lab",
      ipv4: "198.97.190.53",
      ipv6: "2001:500:1::53",
      instanzen: 12,
      laender: 9
    },
    {
      buchstabe: "I",
      name: "i.root-servers.net",
      betreiber: "Netnod",
      ipv4: "192.36.148.17",
      ipv6: "2001:7fe::53",
      instanzen: 106,
      laender: 67
    },
    {
      buchstabe: "J",
      name: "j.root-servers.net",
      betreiber: "Verisign, Inc.",
      ipv4: "192.58.128.30",
      ipv6: "2001:503:c27::2:30",
      instanzen: 147,
      laender: 60
    },
    {
      buchstabe: "K",
      name: "k.root-servers.net",
      betreiber: "RIPE NCC",
      ipv4: "193.0.14.129",
      ipv6: "2001:7fd::1",
      instanzen: 169,
      laender: 79
    },
    {
      buchstabe: "L",
      name: "l.root-servers.net",
      betreiber: "ICANN",
      ipv4: "199.7.83.42",
      ipv6: "2001:500:9f::42",
      instanzen: 257,
      laender: 81
    },
    {
      buchstabe: "M",
      name: "m.root-servers.net",
      betreiber: "WIDE Project",
      ipv4: "202.12.27.33",
      ipv6: "2001:dc3::35",
      instanzen: 34,
      laender: 27
    }
  ],
  instanzenListe: 2064
};
