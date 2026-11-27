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
  //  hochzeit:     { bild: 'images/welcome.mp4',                       abdunkeln: 0 },    // "Die Hochzeit" (sonst dunkelgrün)
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
  { bild: 'images/Verlobung.jpg',             text: 'Verlobung Schottland' },
  { bild: 'images/Canada.jpeg',               text: 'Annika und Nick in Kanada' },
  { bild: 'images/Ostsee.jpg',                text: 'Ostsee' },
  { bild: 'images/Schottland.jpg',            text: 'Schottland' },
  { bild: 'images/Teneriffa.jpg',             text: 'Teneriffa' },
  { bild: 'images/Westcoast-Halloween.jpg',   text: 'West Coast Halloween' },
  { bild: 'images/Canada-Tree.jpg',           text: 'Baum in Kanada' },

  { bild: 'images/Austria-Skiing.jpg',        text: 'Skifahren in Österreich' },
  { bild: 'images/Canada-Cave.jpg',           text: 'Höhle in Kanada' },
  { bild: 'images/Canada-Cox-Bay.JPG',        text: 'Cox Bay Kanada' },
  { bild: 'images/Canada-Minigolf.jpg',       text: 'Minigolf in Kanada' },
  { bild: 'images/Einhorn.jpg',               text: 'Einhorn' },
  { bild: 'images/Elphi.jpg',                 text: 'Elbphilharmonie Hamburg' },
  { bild: 'images/Festival.jpg',              text: 'Festival' },
  { bild: 'images/Hawaii-Beer.jpg',           text: 'Hawaii Beer' },
  { bild: 'images/Hawaii-Heli.jpg',           text: 'Helikopterflug Hawaii' },
  { bild: 'images/Hawaii-Vulkan.jpg',         text: 'Vulkan auf Hawaii' },
  { bild: 'images/Heide-White.jpg',           text: 'Lüneburger Heide' },
  { bild: 'images/Lisbon.JPG',                text: 'Lissabon' },
  { bild: 'images/Northsea-Sundowner.jpg',    text: 'Nordsee Sundowner' },
  { bild: 'images/Otters.JPG',                text: 'Otter' },
  { bild: 'images/Paris-Tower.jpg',           text: 'Paris' },
  { bild: 'images/Plants.jpg',                text: 'Pflanzen' },
  { bild: 'images/Schottland-Sahne.jpg',      text: 'Schottland Sahne' },
  { bild: 'images/Scotland-Fairy.jpg',        text: 'Fairy Pools Schottland' },
  { bild: 'images/SHA-Garten.jpg',            text: 'Garten' },
  { bild: 'images/SPO.jpg',                   text: 'Sankt Peter-Ording' },
  { bild: 'images/Sydney.JPG',                text: 'Sydney' },
  { bild: 'images/Teneriffa-Banana.JPG',      text: 'Bananen auf Teneriffa' },
  { bild: 'images/Xmas.jpg',                  text: 'Weihnachten' }
]
};
