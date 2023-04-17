require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

// Damit wir Dateien aus dem Body parsen können, verwenden wir express-fileupload:
// https://www.npmjs.com/package/express-fileupload
const expressFileupload = require("express-fileupload");

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));

app.use(cors({
    origin: "http://localhost:5501",
}));

app.use(express.json());
// Eingebunden wird express-fileupload wie die üblichen Body Parser als Middleware.
// In diesem Beispiel ist die MW global eingebunden.
// Bindet sie in euren Projekten bitte nur in den Endpoints ein,
// in denen ihr sie auch wirklich benötigt.
app.use(expressFileupload());

app.post("/images", (req, res) => {
    console.log(req.body);
    // Durch express-fileupload stehen uns die übermittelten Dateien in req.files zur Verfügung.
    console.log(req.files);

    // Hier verschieben wir sie jetzt in ein Verzeichnis im Dateisystem.
    // Eine weitere Verarbeitung wäre natürlich auch möglich, bspw. mit sharp bei Bilddateien:
    // https://www.npmjs.com/package/sharp
    const filename = req.files.image.name;
    req.files.image.mv(`${process.env.FILEDIR}/${filename}`);

    res.status(204).end();
});



// mygreatapp.com
// mygreatapp.com/api
