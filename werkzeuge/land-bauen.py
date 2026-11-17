# Erzeugt daten/land.js aus data/countries-110m.geojson (Natural Earth, gemeinfrei).
# Aufruf im Projektordner: python3 werkzeuge/land-bauen.py
# Ergebnis: Umrisse der Landflächen als ganze Zahlen (Zehntelgrad) und je Land ein Mittelpunkt.
import json, pathlib

wurzel = pathlib.Path(__file__).resolve().parent.parent
geo = json.loads((wurzel / "data/countries-110m.geojson").read_text())

def flaeche_und_mitte(ring):
    # Fläche und Schwerpunkt eines Rings nach der Gaußschen Trapezformel, in Gradkoordinaten.
    a = cx = cy = 0.0
    for (x1, y1), (x2, y2) in zip(ring, ring[1:]):
        k = x1 * y2 - x2 * y1
        a += k
        cx += (x1 + x2) * k
        cy += (y1 + y2) * k
    a /= 2
    if abs(a) < 1e-9:
        return 0.0, ring[0][0], ring[0][1]
    return abs(a), cx / (6 * a), cy / (6 * a)

ringe = []
laender = {}
for merkmal in geo["features"]:
    eig = merkmal["properties"]
    if eig.get("ADM0_A3") == "ATA":
        continue
    kennung = eig.get("ISO_A2")
    if not kennung or kennung == "-99":
        kennung = eig.get("ISO_A2_EH")
    if not kennung or kennung == "-99":
        # In den Quelldaten fehlt bei diesen beiden Ländern die zweistellige Kennung.
        kennung = {"FRA": "FR", "NOR": "NO"}.get(eig.get("ADM0_A3"))
    geom = merkmal["geometry"]
    vielecke = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
    groesste = None
    for vieleck in vielecke:
        aussen = vieleck[0]
        ringe.append([round(wert * 10) for punkt in aussen for wert in punkt[:2]])
        f, x, y = flaeche_und_mitte(aussen)
        if groesste is None or f > groesste[0]:
            groesste = (f, x, y)
    if kennung and kennung != "-99" and len(kennung) == 2 and groesste:
        laender[kennung] = [round(groesste[2], 1), round(groesste[1], 1)]

punkte = sum(len(r) // 2 for r in ringe)
text = (
    "// Landflächen der Erde für die Karten, erzeugt von werkzeuge/land-bauen.py aus den gemeinfreien\n"
    "// Daten von Natural Earth (1:110 Mio.). Nicht von Hand ändern.\n"
    "// ringe: je Umriss abwechselnd Länge und Breite in Zehntelgrad. laender: Mittelpunkt [Breite, Länge] je Landeskennung.\n"
    "window.NETZ_LAND = " + json.dumps({"ringe": ringe, "laender": dict(sorted(laender.items()))}, separators=(",", ":")) + ";\n"
)
(wurzel / "daten/land.js").write_text(text)
print(f"daten/land.js: {len(ringe)} Umrisse, {punkte} Punkte, {len(laender)} Länder, {len(text)} Bytes")
