//express-import

// alte Methode
// const express = require("express");

// neue Methode
// braucht "type": "module", in package.json
import express from "express";

// neue Konstante, die express referenziert
// die meisten Entwickler nennen es entweder app oder server, wählen Sie, was immer Sie wollen, aber app ist wegen der Dokumentation gebräuchlicher
const app = express();

// Verwendung der Anwendungsmethoden
// listen bedeutet, dass es auf dem angegebenen Port für http-Anfragen verwendet wird
// app.listen(3000);

// Führen wir nun "node server.js" in unserem Terminal aus
// es sieht vielleicht so aus, als ob es klemmt, aber das ist es nicht, es hört auf Port 3000, wenn Sie auf http://localhost:3000/ gehen, werden Sie dort etwas sehen
// um zu sehen, ob tatsächlich alles funktioniert:
app.listen(3000, function () {
  console.log("server started on port 3000");
});
// wenn wir es jetzt noch einmal versuchen
// zurück zu readme
