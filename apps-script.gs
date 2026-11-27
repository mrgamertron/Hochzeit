// Google Tabelle öffnen > Erweiterungen > Apps Script > diesen Code einfügen
// > Bereitstellen > Neue Bereitstellung > Web-App > Zugriff: "Jeder" > URL kopieren (in main.js bei ENDPOINT eintragen)
function doPost(e) {
  const p = e.parameter;
  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    .appendRow([new Date(), p.status, p.vorname, p.nachname, p.email, p.essen, p.begleitung]);
  return ContentService.createTextOutput('ok');
}
