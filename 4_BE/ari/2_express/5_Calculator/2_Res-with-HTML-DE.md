# Antworten auf Anfragen mit HTML-Dateien

Mit unserem Wissen über Javascript, Node und Express bewaffnet, werden wir es nun auf unserer Website einsetzen und die Daten, die in die Formulare eingegeben werden, verwenden und auf unserem Server Berechnungen damit durchführen. Also das Wichtigste zuerst. Wir werden eine neue Datei erstellen. Ich werde index.html erstellen

"html:5" Abkürzung innerhalb

Titel wird Calculator sein


Innerhalb des Body werden wir ein Formular einfügen.

Dieses Formular wird keine Klasse haben, aber es wird eine Aktion und eine Methode haben. Ich möchte, dass Sie die Methode als post und die Aktion als index.html beibehalten. Wir werden in Kürze erklären, was diese Dinge sind.

```html
<body>
    <form action="index.html" method="post"></form>
</body>
```

Nun gut. Nachdem wir nun unser Formular erstellt haben, werden wir die gesamte Datei index.html senden, wenn der Browser versucht, auf die Home-Route zuzugreifen.

Wenn wir res.send verwenden, senden wir einzelne Bits von HTML-Daten.

Wenn wir aber eine ganze Webseite, wie unsere index.html, senden wollen, müssen wir etwas anderes verwenden.

Wenn wir also zur [Express-API-Referenz] (https://expressjs.com/en/4x/api.html) gehen, können Sie sehen, dass sie nach dem gesuchten Teil in der Seitennavigation geordnet ist. Und wir suchen nach dem Antwortteil, und Sie können sehen, dass es eine ganze Reihe verschiedener Methoden gibt, zum Beispiel res.send, was wir bisher verwendet haben. Aber es gibt auch, wenn Sie nach unten scrollen, res.sendFile, und das überträgt die Datei an den Browser, wenn er eine get-Anfrage stellt.

Anstatt also res.send zu sagen, können wir res.sendFile sagen:

```js
app.get("/", (req, res) => {
  res.sendFile();
});
```

Bisher haben wir mit sogenannten relativen Dateipfaden gearbeitet, wir können also einfach index.html sagen, und es wird innerhalb des aktuellen Dateispeicherorts, also calculator.js, nach etwas namens index.html suchen. Bei einem Server funktioniert das etwas anders, denn im Moment ist der Server zwar auf unserem eigenen Computer gehostet und wir wissen genau, wo sich der Projektordner Calculator befindet, aber in Zukunft, wenn wir unseren Server in der Cloud oder auf einem anderen Computer einsetzen, haben wir keine Ahnung, wo er sich befindet.

Anstatt also einfach einen relativen Dateipfad zu senden, können wir eine Konstante mit dem Namen "__dirname" verwenden:

```js
app.get("/", (req, res) => {
  res.sendFile(__dirname);
});
```

Es sind also zwei Unterstriche, dirname, und das gibt Ihnen den Dateipfad der aktuellen Datei, egal wo sie gehostet wird, auf dem Computer eines anderen, in der Cloud, auf einem Remote-Server, was auch immer es sein mag.

Und ich möchte dies zuerst in der Konsole protokollieren, damit ich Ihnen zeigen kann, wie es aussieht.

```js
app.get("/", (req, res) => {
  console.log(__dirname);
});
```

HINWEIS: da wir type:modules verwenden, müssen wir es importieren, wenn Sie die erforderliche Version verwenden, ignorieren Sie dies

```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

importieren Sie einfach diese und es wird funktionieren


Dies ist also der gesamte Dateipfad, der zu dieser aktuellen Datei geführt hat.

```js
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
```
Und das sollte einen Pfad zu dieser index.html-Datei liefern.

Wenn wir nun die Seite neu laden, erhalten wir unsere Formulare

Es handelt sich im Grunde nur um eine Konstante, die es uns ermöglicht, den aktuellen Speicherort der Datei zu einem bestimmten Zeitpunkt zu erfassen, so dass wir diesen Speicherort verwenden und den Speicherort einer anderen Datei an ihn anhängen können.