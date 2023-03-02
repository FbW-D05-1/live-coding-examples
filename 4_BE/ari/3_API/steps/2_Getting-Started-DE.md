# Einige Wetterdaten

zuerst neue index.html und app.js erstellen dann init dann express installieren

neue node app in app.js

``js
importiere express von "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server ist in Betrieb");
});

app.listen(3000, () => {
  console.log("Server läuft auf Port 3k");
});
```

Wir sind jetzt bereit, loszulegen.


Ich muss irgendwie eine get-Anfrage an den OpenWeatherMap-Server stellen und in der Lage sein, die Daten als JSON zurückzuholen und sie zu parsen, damit ich die relevanten Informationen erhalte.

## Abrufen der Daten

Der erste Weg ist der systemeigene Weg, der die Standard Node Library verwendet, etwas, das HTTP-Modul genannt wird. Und tatsächlich gibt es das HTTPS-Modul, das die sichere Version ist. Darüber hinaus können Sie aber auch das Request-Modul, Axios, SuperAgent oder Got verwenden.

Bei den letzten vier handelt es sich um externe NPM-Pakete, aber ich möchte Ihnen zeigen, wie Sie es nativ tun können.

Wir werden also das native HTTPS-Node-Modul verwenden.

Wenn wir also in unserer [Node-Dokumentation] (https://nodejs.org/api/http.html#httpgeturl-options-callback) danach suchen, können Sie das irgendwo dort sehen

importieren:

```js
//alt
import http = require('http')
//neu
import * as http from 'http';
```

Innerhalb meiner app.get werde ich, bevor ich das Ergebnis an meinen Client zurücksende, mein HTTPS-Modul verwenden und die get-Methode aufrufen. Die get-Methode benötigt eine URL:

```
https://api.openweathermap.org/data/2.5/weather?q={Stadtname}&appid={API-Schlüssel}
```

innerhalb von app.get:

```js
app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=alsheim&appid=125e0bd3302b64278d69cc208ddcd956";
  https.get(url);
  res.send("Server steht und läuft");
});
```

Die Callback-Funktion nach unserer url-Konstante gibt uns eine Antwort zurück. Normalerweise wird es in der Dokumentation mit res abgekürzt, aber da wir hier schon req und res haben, möchte ich nicht noch ein res haben, weil das irgendwie verwirrend ist, also nenne ich es mit dem vollen Namen _response_, 

```js
https.get(url, (response) => {});
```



und wenn wir unsere Antwort zurueckbekommen, ist alles, was ich tun werde, diese Antwort zu protokollieren, um zu sehen, ob dieser ganze Prozess, eine HTTP get Anfrage ueber das Internet an die URL zu stellen, wo wir einige Daten holen sollen, ob es tatsaechlich funktioniert und ob wir etwas zurueckbekommen.

```js
 https.get(url, (response) => {
    console.log(response);
  });
```

Wenn wir nun in unser Terminal gehen, können Sie sehen, dass wir eine ganze Reihe von Daten zurückbekommen haben, darunter die Art der Anfrage, die wir gestellt haben, den Pfad, an den unsere Anfragen gingen, und vor allem den Statuscode, den wir vom externen OpenWeatherMap-Server zurückbekommen haben. Und der lautet 200, was im Grunde ein OK bedeutet. So, jetzt haben wir alles zum Laufen gebracht.

Fun Fact siehe 418 Antwortcode
[weitere lustige Möglichkeiten, http-Codes zu lernen](https://httpstatusdogs.com/)

## JSON parsen

Zusätzlich zur Überprüfung des Statuscodes können wir nun auch die Antwort, die wir zurückbekommen, anzapfen und eine Methode aufrufen, die wir nach einigen Daten durchsuchen. Dies entspricht dann dem eigentlichen Nachrichtentext, den wir zurückbekommen haben und den uns OpenWeatherMap tatsächlich gesendet hat. Lassen Sie uns also versuchen, diese Methode zu implementieren.

```js
https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      console.log(data);
    });
  });
```

Schauen wir uns nun die Antwort in unserem Terminal an. Sie können sehen, dass wir den Antwortcode 200 erhalten, was bedeutet, dass alles funktioniert, aber die Daten, die wir ausdrucken, sehen ein bisschen komisch aus.

Sie scheinen völlig durcheinander zu sein, und wir können uns nicht wirklich einen Reim darauf machen. Was ist das also genau?
Nun, das ist eigentlich ein Hexadezimalcode.
Wenn wir ihn kopieren und in einen [Hexadezimalkonverter] (https://cryptii.com/pipes/hex-to-text) eingeben, können wir ihn in Text umwandeln, und Sie können sehen, dass der Text, den wir zurückbekommen, so ziemlich der Anfang des JSON ist, den wir von OpenWeatherMap zurückbekommen, das wir zuvor gesehen haben.

Was für uns jedoch viel nützlicher wäre, ist, ein Javascript-Objekt zu erhalten, und das können wir tun, indem wir die Daten in ein Javascript-Objekt konvertieren. Und um das zu tun, müssen wir JSON parse schreiben, und das wird ein JSON in eine Art String-Format umwandeln, sagen wir hexadezimal oder binär oder Text, und es dann in ein tatsächliches Javascript-Objekt umwandeln.

```js
 response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
    });
```

Jetzt können Sie sehen, dass wir in der Lage sind, ein komplettes Javascript-Objekt zu drucken, d.h. es gibt keine Zeichenketten in den Schlüsseln, und alles ist so organisiert, wie Sie es von jedem anderen Javascript-Objekt gewohnt sind.


Holen wir uns ein paar Temps.

```js
response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp);
    });
```

Herausforderung, die Beschreibung des Wetters zu erhalten:



Lösung:




```js
response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);
    });
```