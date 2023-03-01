# Umgang mit Anfragen und Antworten: die GET-Anfrage

Wir können Ihnen nichts anzeigen, weil der Server uns nichts zum Anzeigen gibt. Das werden wir also jetzt angehen.

Sie müssen sich vorstellen, dass localhost:3000 im Grunde dasselbe ist wie die Route einer beliebigen Website. Es ist also die Startseite. Es ist das Äquivalent zu google.com, aber in diesem Fall heißt unsere Domain einfach localhost:3000. Dieses "/" steht also einfach für localhost:3000/, die Route oder die Homepage unserer Website.

Zurzeit sendet unser Server nichts zurück, wenn unser Browser die get-Anfragen stellt.

Ändern wir das also. Direkt oberhalb von _app.listen_ werden wir app.get einfügen:

```js
app.get();
```

Dies ist eine Methode, die von Express zur Verfügung gestellt wird und die es uns erlaubt, zu spezifizieren, was passieren soll, wenn ein Browser mit unserem Server in Kontakt tritt und eine get-Anfrage stellt.

Der erste Parameter ist der Ort, an dem die Anfrage gestellt wird:
```js
app.get("/");
```

Wenn diese Abfrage erfolgt, können wir eine Callback-Funktion auslösen, und diese Callback-Funktion kann zwei Parameter haben: request und response.
Diese Methode, app.get, definiert also, was passieren soll, wenn jemand eine get-Anfrage an die Home-Route stellt. Das ist also der erste Parameter.
Und dann gibt es eine Callback-Funktion, die dem Server mitteilt, was zu tun ist, wenn diese Anfrage erfolgt.
```js
app.get("/", function(request, response){});
```
Drucken wir also das Request-Objekt aus, das wir erhalten, wenn der Callback ausgelöst wird, und sehen uns an, wie es aussieht:
```js
app.get("/", function(request, response){
    console.log(request)
});
```

Hinweis: Sie müssen den Server beenden und neu starten

Sie können sehen, dass es eine ganze Reihe von Informationen gibt, die in dieser Anfrage verpackt sind, die protokolliert wird. Und das sind alle Informationen, die mit der Anfrage an unseren Server verbunden sind. So können Sie zum Beispiel sehen, dass mein Browser die folgenden Sprachen akzeptiert( 'Accept-Language',
    'de,en-US;q=0.7,en;q=0.3',), und welchen Browser ich genau benutze ('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',) 
    Sie können auch andere Dinge sehen, wie z. B. die URL, auf die ich zugegriffen habe, als ich diese Anfrage ausgelöst habe (host: 'localhost:3000',),
und viele weitere Informationen über die Anfrage, die an den Server gestellt wurde.

Das zweite Objekt ist die Antwort.
Dies ist die Antwort, die der Ergebnisserver geben kann, wenn die Anfrage an diesem Heimatort ausgelöst wird. Im Moment antwortet unser Server mit nichts, und deshalb bekommen wir die Fehlermeldung

## Ändern wir das also.

```js
app.get("/", function (request, response) {
  response.send("Hallo Welt")
});
```

Terminal wieder abbrechen und neu starten

und jetzt haben wir "Hello World" gedruckt


Das liegt daran, dass wir bei der Eingabe von localhost:3000 den Standort eines Servers angegeben haben. Wenn wir also die Eingabetaste drücken, wird der Browser zu diesem Ort gehen und eine Anfrage stellen, um einige Daten zurückzubekommen. Und wenn diese Anfrage an diesem Heimatort gestellt wird, wird unser Callback ausgelöst und wir senden dem Browser eine Antwort, die nur aus dem einfachen Text "Hello World" besteht. Dieser Text wird an den Browser zurückgeschickt und auf dem Bildschirm dargestellt.

Sie müssen also nicht nur reinen Text senden.

Sie können auch HTML senden. (Vorahnung auf das Senden von stringifiziertem JSON)

Versuchen wir also, ein h1 zu senden

```js
app.get("/", function (request, response) {
  response.send("<h1>Hallo Welt</h1>");
});
```
btw ich bin genervt vom Neustart meines Servers, also benutze einfach nodemon oder node --watch


Und jetzt gehen wir zu localhost:3000, wir bekommen das h1 mit 'Hello, world!' zurückgeschickt.

Nun, in den meisten Fällen, wenn Leute mit Express und Node.js arbeiten, werden Sie diese beiden Parameter verkürzt sehen.

```js
app.get("/", function (req, res) {
  res.send("<h1>Hallo Welt</h1>");
});
```

Und das ist im Grunde die beste Praxis für die Arbeit mit Express, und das ist es, was Sie da draußen sehen werden, wenn Sie den Code anderer Leute finden und sie ihre Express-Server erstellen.


In dieser Lektion gibt es eine Menge neuer Informationen, aber vieles davon hängt vom Verständnis der Funktionsweise von Rückrufen ab. Wenn dies also verwirrend ist, empfehle ich Ihnen, einen Blick auf unsere früheren Module zu werfen, in denen wir über Javascript-Callbacks und Funktionen höherer Ordnung in Basic Programming gesprochen haben.

Und es ist eine wirklich gute Idee, dies selbst zu erstellen, damit herumzuspielen und verschiedene Antworten zu senden oder die Anfragen zu protokollieren und einfach sicherzustellen, dass Sie mit dieser Syntax und ihrer Funktionsweise vertraut sind.