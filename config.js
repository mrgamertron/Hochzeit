// ============================================================
//  HIER ÄNDERST DU ALLE BILDER – sonst musst du nichts anfassen
// ============================================================
// Lege deine Fotos in den Ordner "images" und trage den Dateinamen ein
// (oder eine komplette Internetadresse https://...).
// bild:     Pfad zum Hintergrundbild ('' = nur Farbe, kein Bild)
// abdunkeln: 0 = unverändert, 0.3 = leicht dunkler, 0.6 = deutlich dunkler
//            (hilft, damit weißer Text auf hellen Fotos lesbar bleibt)
window.CONFIG = {
  // Microsoft Forms: Einbettungs-Link hier einfügen (Forms > Teilen > Einbetten > Adresse aus src="...").
  // Leer lassen = eigenes Formular der Seite verwenden.
  formsUrl: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__dOjDjxUMkJNSDRUVUNWSjk4RDJMSDU0N1VMTkpZUC4u',

  hintergruende: {
    hero:         { bild: '',        abdunkeln: 0.15 }, // Startbild ganz oben
    hochzeit:     { bild: 'images/welcome.mp4',                       abdunkeln: 0 },    // "Die Hochzeit" (sonst dunkelgrün)
    tagesablauf:  { bild: 'images/Canada.jpeg',     abdunkeln: 0 },
	willkommen:  { bild: '',     abdunkeln: 0.15 },
    anreise:      { bild: 'images/GolfLounge.jpg',  abdunkeln: 0.2 },
    registry:     { bild: 'images/weg.jpg',         abdunkeln: 0.1 },  // "Weitere Informationen"
    trauzeugen:   { bild: 'images/hero.jpg',        abdunkeln: 0.15 },
    abschluss:    { bild: 'images/fuesse.jpg',      abdunkeln: 0 },    // gelbes Banner unten
    rsvp:         { bild: '',                       abdunkeln: 0 },    // Seite "Zeit und Ort"
    danke:        { bild: '',                       abdunkeln: 0 },    // Dankeseite
    nele:         { bild: 'images/Nele.jpeg' },                      // Foto Trauzeugin
    florian:      { bild: 'images/Flo.jpeg' }                      // Foto Trauzeuge
  },

  // Bildergalerie: beliebig viele Einträge, Reihenfolge = Reihenfolge auf der Seite.
  // Einfach eine Zeile kopieren/löschen. "text" ist die Bildbeschreibung (für Screenreader).
  galerie: [
  { bild: 'images/Canada.jpeg',               text: 'Annika und Nick in Kanada' },
  { bild: 'images/Ostsee.jpg',                text: 'Ostsee' },
  { bild: 'images/Schottland.jpg',            text: 'Schottland' },
  { bild: 'images/Teneriffa.jpg',             text: 'Teneriffa' },
  { bild: 'images/Westcoast-Halloween.jpg',   text: 'WestCoast Halloween' },
  { bild: 'images/Canada-Tree.jpg',           text: 'Baum in Kanada' }
]
};
