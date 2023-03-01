# Verarbeitung von Post-Anfragen mit Body Parser

Wenn wir nun den Rechner testen, erhalten wir die Fehlermeldung "Cannot POST to /index.html".

Woher kommt das nun?

Nun, wenn wir einen Blick in unsere index.html werfen, können Sie sehen, dass unser Formular eine Aktion und eine Methode hat. Die Methode ist die Post-Methode, wir senden diese Daten also irgendwohin, und dieser Ort wird durch das Attribut action definiert.
Wir senden sie also an etwas namens index.html, was nicht das ist, was wir wollen. Wir wollen sie an unseren Server senden, der sich am Standort der Home-Route befindet, also ist es nur ein Schrägstrich:

```html
  <form action="/" method="post">
```

Wenn Sie kein Aktionsattribut haben, ist das auch in Ordnung. Wenn es nicht vorhanden ist, sendet das Formular standardmäßig einfach die Daten an die aktuelle Seite, auf der es sich befindet, das entspricht also action="/".


Unser Formular hat also eine post-Methode, was bedeutet, dass es versuchen wird, die in die Eingaben eingegebenen Daten an einen Ort zu senden, der unsere Startseite ist. Wenn wir nun auf Speichern klicken und zu unserem localhost:3000, unserer Homepage, zurückkehren, versuchen wir erneut, die Schaltfläche Berechnen zu drücken. Diesmal erhalten wir immer noch eine 404 und ein "Cannot POST", aber wenn Sie darauf klicken und zur Registerkarte "Headers" gehen und nach unten scrollen, können Sie sehen, dass wir
Die Daten, auf die wir Zugriff haben, sind der Parameter num1, der, wie Sie sich erinnern, über das Attribut name an unsere erste Eingabe gebunden ist.

HTTP-METHODEN:

1. Wenn sie in den 100ern ist, bedeutet das, dass etwas passieren wird.

2. 200 bedeutet "Bitte sehr", dies ist in der Regel ein Code für eine erfolgreiche Anfrage

3. 300 bedeutet "Geh weg", es geht um die Sicherheit

4. 400er bedeutet, dass du es vermasselt hast

5. 500s bedeutet, dass ich es vermasselt habe (der Server hat es vermasselt)


Die beiden häufigsten Codes, die Sie sehen werden, sind 200, was bedeutet, dass alles erfolgreich war. 400er sind in der Regel Client-Fehler, d.h. der Benutzer, der einen Browser benutzt, um etwas anzufordern, das es nicht gibt, zum Beispiel.


Was ist in unserem Fall eigentlich los? Nun, das Problem ist, dass unser Server nicht in der Lage ist, Post-Anfragen zu verarbeiten, so dass wir im Grunde niemanden akzeptieren, der auf unserer Home-Route postet. Lassen Sie uns also weitermachen und das beheben.

Fügen wir eine app.post-Methode hinzu, um alle Post-Requests zu verarbeiten, die auf unserer Home-Route ankommen, und dann haben wir einen Callback mit req und res, Request und Response, und senden einfach zurück: "Thanks for posting that!":

```js
app.post("/", (req, res) => {
  res.send("Thank you for posting");
});
```

und jetzt werden wir zur Homepage umgeleitet, aber diesmal mit dem Text, den wir oben angegeben haben. 

Jetzt gibt es nur noch ein Problem. Wie kommen wir an die Formulardaten heran? Denn das ist genau das, was wir brauchen.

Um diese Daten abzugreifen, müssen wir ein weiteres NPM-Paket installieren, das Body Parser heißt.

Hinweis: Wenn Sie mit Importen arbeiten, müssen Sie dieses Paket nicht installieren!!! Überspringen Sie die folgende Überschrift, in der ich angeben werde, wo (Zeile 84)


```bash
npm i body-parser
```
Und was dies tun wird, ist, dass es uns erlauben wird, die Informationen zu übergeben, die wir von der Post-Anfrage gesendet bekommen. Wir werden sie parsen, so dass wir Zugriff auf Eigenschaften und Variablen haben, damit wir unsere Berechnungen durchführen können.

Nach der Installation können wir zu unserem calculator.js übergehen und es anfordern, damit wir das Paket in unser aktuelles Projekt einbinden können.

```js
const bodyParser = require("body-parser");

```

Nachdem wir nun Body Parser in unser Projekt integriert haben, besteht der nächste Schritt darin, ihn in unserer Anwendung zu verwenden. Und Body Parser arbeitet mit Express, so dass wir app.use sagen können:

```js
app.use(bodyParser);
```

Body Parser hat mehrere Modi. Es gibt zum Beispiel bodyParser.text, also alle Anfragen in Text parsen, oder bodyParser.json, was das spezielle Format ist, das wir vorher gesehen haben, oder der, den wir verwenden werden, ist bodyParser.urlencoded:

```js
app.use(bodyParser.urlencoded());
```

Außerdem fügen wir eine Option namens "erweitert" hinzu, die wir auf "wahr" setzen:
```js
app.use(bodyParser.urlencoded({extended: true}));
```

## VERSION IMPORTIEREN

Verwenden Sie stattdessen dies, da Express 4.16 und höher mit dem Body Parser geliefert wird

```js
app.use(express.urlencoded({ extended: true }));
```

Indem wir diese erweiterte Option auf true setzen, können wir im Grunde nur verschachtelte Objekte posten. Und das ist nicht etwas, das wir verwenden werden, aber es ist etwas, das bodyParser von Ihnen verlangt, explizit zu deklarieren.

Warum sollte man BodyParser verwenden?

Nun, es erlaubt Ihnen, in jede Ihrer Routen zu gehen, und Sie können auf etwas namens request.body zugreifen:

```js
app.post("/", (req, res) => {
    req.body
  res.send("Thank you for posting");
});
```

und dies ist die geparste Version der HTTP-Anfrage. Lassen Sie uns also fortfahren und dies protokollieren und sehen, was wir erhalten, wenn wir versuchen, eine Post-Anfrage zu stellen:

```js
app.post("/", (req, res) => {
    console.log(req.body)
  res.send("Thank you for posting");
});
```

Gehen wir also zurück und drücken erneut auf "Berechnen", und unsere Konsole sollte dies ausgeben:

```
{ num1: '23', num2: '25', submit: '' }
```

Durch die Verwendung von Body Parser sind wir also in der Lage, die HTTP-Anfrage, die wir erhalten, zu analysieren, und durch die Verwendung von urlencoded können wir auf die Formulardaten zugreifen, und wir können dann auf jede dieser Daten zugreifen, als ob sie nur Eigenschaften des Objektkörpers wären.

So können wir z. B. request.body.num1 protokollieren. Und denken Sie daran, dass die Namensgebung aus dem Attribut name Ihrer Eingabe stammt.

```js
 console.log(req.body.num1);
```

Jetzt protokollieren wir nur den Wert der ersten Eingabe. Dieser Wert wird also in request.body.num1 gespeichert.


Da wir nun wissen, wie wir diese Werte anzapfen können, ist die Erstellung unseres Taschenrechners supereinfach, oder?


Alles, was wir tun müssen, ist eine Variable zu erstellen, die unsere num1 enthält, und die gleich sein wird 

request.body.num1.

Dann erstellen wir eine weitere Variable mit dem Namen num2, und diese wird gleich sein mit

request.body.num2.

Und dann können wir das Ergebnis berechnen, nämlich num1 + num2, also einen ganz einfachen Taschenrechner, der zwei Zahlen addiert.

```js
app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  const result = num1 + num2;
  res.send(`The result of the calculation is: ${result}`);
});
```

Gehen Sie auf unsere Homepage und versuchen wir es


Also, was ist hier los?

Nun, es werden zwei Strings miteinander verknüpft, was eine Herausforderung für dich ist, das zu beheben.







Lösung:

```js
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
```