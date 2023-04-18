require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const expressFileupload = require("express-fileupload");
const fs = require("fs");


app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));

app.use(cors({
    origin: "http://localhost:5501",
}));

app.use(express.json());
app.use(expressFileupload());

app.post("/images", (req, res) => {
    const filename = req.files.image.name;
    req.files.image.mv(`${process.env.FILEDIR}/${filename}`);

    res.status(204).end();
});


app.get("/images", async (req, res) => {
    const files = await fs.promises.readdir(process.env.FILEDIR);

    const urls = files.map(file => `http://localhost:4000/images/${file}`);

    res.json(urls);
});

app.use("/images", express.static(process.env.FILEDIR));

// --------------------
// Beispiel Datenbank-Anbindung
// --------------------
// Unsere Connection bauen wir in einer separaten Datei auf.
// Mit require (oder import) wird die Datei beim Starten des Prozesses initialisiert
// und somit einmalig ausgeführt.
// So baut mongoose wie gewohnt eine Verbindung zur Datenbank auf und hält sie geöffnet.
// Da wir den Verbindungsaufbau ausgelagert haben,
// können wir den gleichen Code auch bspw. für Seed-Skripte verwenden.
require("./lib/mongoose.js");

const Picture = require("./models/Picture.js");

app.get("/pictures", async (req, res) => {
    const pictures = await Picture.find();
    res.json(pictures);
});

// Validierung mittels express-validator oder ajv o.ä. nicht vergessen!
app.post("/pictures", async (req, res) => {
    // Als ganz simple Validierung nutzen wir in diesem Beispiel Guard Clauses,
    // die überprüfen, ob die Werte überhaupt im Body enthalten sind.
    if (!req.body.title) return res.status(400).json("title missing");
    if (!req.body.url) return res.status(400).json("url missing");

    const picture = new Picture({
        title: req.body.title,
        url: req.body.url,
    });
    picture.save();
    res.status(201).end();
});
