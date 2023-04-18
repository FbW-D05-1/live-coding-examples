// Unser Seed-Skript soll folgende Aufgaben erfüllen:
// - Collections zurücksetzen (Altdaten entfernen)
// - Collections mit Testdaten befüllen
// - UND: Testdaten sollen wie echte Daten aussehen

// Aufgerufen wird dieses Skript über den Befehl "npm run seed",
// definiert in der package.json als "node seed.js".
require("dotenv").config();
const { faker } = require('@faker-js/faker');

// Wir verwenden die gleiche Verbindung wie zuvor in server.js...
require("./lib/mongoose.js");

// ...und natürlich auch unser Model.
const Picture = require("./models/Picture.js");

// Hauptlogik
// -----------------
// In diesem Abschnitt beschreiben wir die Hauptlogik,
// also den grundsätzlichen Ablauf des Skripts.
// Die einzelnen Teilschritte sind in Funktionen definiert,
// die bei Bedarf näher betrachtet werden können.
// Dank des Hoistings in JavaScript können wir die Teilschritte
// auch nach der Hauptlogik definieren.
(async () => {
    try {
        await resetPictures(); // Collection pictures zurücksetzen
        await createPictures(); // Collection pictures mit Daten befüllen

        // Wenn alles durchgelaufen ist, beenden wir den Prozess.
        // Das ist notwendig, da die Datenbankverbindung nicht automatisch geschlossen wird.
        // Ein Exit Code 0 bedeutet, dass alles in Ordnung war - clean exit.
        process.exit(0);
    } catch (error) {
        // Sollte es Probleme geben, zeigen wir diese mit console.error (nicht log!) an.
        // Anschließend beenden wir den Prozess mit dem Exit Code 1 (oder einem anderen. Nur nicht 0)
        // So erreichen wir, dass der Prozess als gecrashed gewertet wird.
        console.error(error);
        process.exit(1);
    }
})();
// -----------------


async function resetPictures() {
    await Picture.deleteMany();
}

async function createPicture(title, url) {
    const picture = new Picture({
        title: title,
        url: url,
    });
    await picture.save();
}

async function createPictures() {
    for (let i = 0; i < 20; i++) {
        // Damit wir möglichst realistische Daten erhalten, können wir faker verwenden.
        await createPicture(
            faker.name.fullName(),
            faker.image.imageUrl(1234, 2345, 'cat', true),
        );
    }
}
