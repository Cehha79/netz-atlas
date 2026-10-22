# Netz-Atlas — die physische Architektur des globalen Internets

![Live](https://img.shields.io/badge/Live-cehha79.github.io%2Fnetz--atlas-2f6df6)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-globe.gl-990000)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222)
![Build](https://img.shields.io/badge/Build-none-3fb950)
![Live-Daten](https://img.shields.io/badge/Live--Daten-USGS%20%C2%B7%20IODA%20%C2%B7%20RIPE-3fb950)

Eine anschauliche, ehrliche Übersicht über das **echte Internet** — die Seekabel
unter dem Meer, die großen Knotenpunkte und die Laufzeiten dazwischen. Mit echten
Live-Daten zu Erdbeben, Internet-Ausfällen und Routing-Ereignissen. Ein Projekt
von **MikaTec**.

> Statische Seite in Vanilla HTML/CSS/JavaScript — **kein Build, kein Framework,
> kein Server-Backend**. Der 3D-Globus ist lokal gebundelt und läuft offline.

## Überblick

Netz-Atlas zeigt in drei Ansichten unter einer gemeinsamen Kopf- und Fußleiste,
wie das globale Internet physisch aufgebaut ist. Sämtliche Interaktivität läuft
**client-seitig in Vanilla JavaScript**; Live-Werte kommen aus **öffentlichen,
schlüssellosen** Quellen direkt aus dem Browser. Wo es keinen echten Live-Wert
gibt, steht ein geprüfter Stand mit ehrlichem Hinweis — nie eine erfundene Zahl.

## Ansichten

- **Übersicht** (`index.html`) — Karten „Das Netz in Zahlen" (aktive Seekabel,
  live), „Typische Laufzeiten", „Deine Verbindung · Live" (Standort, IP, Anbieter)
  und „Netz-Qualität · echte Messung" (Ping/Tempo gegen Cloudflare). Dazu ein
  schematisches Seekabel-Netz auf Canvas und die Modals „Wissen" und „Dein System".
- **Globus** (`globus.html`) — echter **3D-WebGL-Globus** (globe.gl): gepunktete
  Kontinente aus Geodaten, animierte Kabel-Bögen im Kometen-Effekt, pulsierende
  Knoten-Ringe, Atmosphären-Glow. Auto-Rotation, Zoom, Klick auf Knoten/Kabel öffnet
  ein Info-Panel und fliegt hin.
- **Flache Karte** (`flachkarte.html`) — äquirektangulare Weltkarte mit feuernden
  Kabel-Bögen und drei zuschaltbaren **Live-Ebenen**.

## Live-Ebenen der flachen Karte

| Ebene | Quelle | Was sie zeigt |
|---|---|---|
| 🌋 Erdbeben | USGS | Beben der letzten 24 h, Farbe nach Stärke |
| 🔌 Ausfälle | IODA | landesweite Internet-Störungen, Marker am Land |
| 📡 BGP-Live | RIPE RIS | Routing-Updates in Echtzeit an 25 echten Kollektor-Standorten |

Jede Ebene ist einzeln zuschaltbar. Der BGP-Stream (WebSocket) ist standardmäßig
**aus** und öffnet nur beim Einschalten — das schont Bandbreite.

## Ehrliche Daten

- Alle Live-Quellen sind **öffentlich, kostenlos und ohne Schlüssel** erreichbar
  (CORS oder WebSocket) und wurden vor dem Einbau mit echten Abrufen getestet.
- Statt erfundener „Cyber-Angriffs-Karten" zeigt Netz-Atlas **echte** Ereignisse.
- Die Seekabel-Zahl kommt live von `submarinecablemap.com` (über CORS-Proxy);
  fällt der Abruf aus, bleibt der geprüfte Stand stehen.
- Weitere Quellen: GeoIP-Dienste (Standort/IP), Cloudflare (Tempo-/Ping-Messung),
  USGS (Erdbeben), IODA (Ausfälle), RIPE RIS (BGP) — alle öffentlich und ohne Schlüssel.

## Tech-Stack

| Ebene | Umsetzung |
|---|---|
| Markup | HTML5, drei eigenständige Seiten mit gemeinsamem Rahmen |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, `clamp()`, Media Queries |
| Interaktion | Vanilla JavaScript; Canvas 2D (Karten), WebGL via globe.gl (Globus) |
| Live-Daten | `fetch` (USGS, IODA, GeoIP, Cloudflare, submarinecablemap) · WebSocket (RIPE RIS) |
| Geodaten | `data/countries-110m.geojson` (Natural Earth) |
| Bibliothek | `vendor/globe.gl.min.js` (globe.gl inkl. three.js), lokal gebundelt |
| Hosting | GitHub Pages, Auslieferung aus dem Repo-Root |

## Projektstruktur

```text
netz-atlas/
├── index.html                    ← Übersicht (Karten, Live-Verbindung, Modals)
├── globus.html                   ← 3D-WebGL-Globus
├── flachkarte.html               ← flache Weltkarte mit Live-Ebenen
├── data/
│   └── countries-110m.geojson    ← Ländergrenzen für die gepunkteten Kontinente
├── vendor/
│   └── globe.gl.min.js           ← globe.gl (inkl. three.js), lokal
├── README.md                     ← diese Datei
├── .gitignore
└── .nojekyll                     ← GitHub Pages liefert statische Dateien direkt aus
```

## Lokale Nutzung

Kein Setup nötig:

```bash
# Repository klonen
git clone https://github.com/Cehha79/netz-atlas.git

# eine der Seiten im Browser öffnen (z. B. globus.html) — läuft sofort.
```

Hinweis: Die Live-Ebenen und die GeoJSON-Kontinente brauchen einen Web-Kontext
(`https://` bzw. lokaler Server); bei direktem Datei-Doppelklick (`file://`)
blockiert der Browser den Nachladen von Geodaten und Fremdabrufen. Der Globus
selbst lädt seine Bibliothek und Geodaten aus `vendor/` und `data/`.

## Deployment

Auslieferung über **GitHub Pages** aus dem Repo-Root (`main`). Ein `.nojekyll`
sorgt für die direkte Auslieferung der statischen Dateien. GitHub cacht rund
10 Minuten; nach einem Push ggf. hart neu laden (Safari: `Cmd + Option + R`).

---

Konzept & Umsetzung: **MikaTec** · © MikaTec · [www.mika-tec.com](https://www.mika-tec.com)
