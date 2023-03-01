# Verstehen und Arbeiten mit Routen

Dieser erste Parameter ("/") gibt also die Route an, auf die wir reagieren werden. Das heißt, wenn wir eine Get-Anfrage von einem Browser erhalten, der auf diese Route abzielt, die die Home-Route ist, dann werden wir mit unserem Callback reagieren. 

Jetzt können wir auf verschiedene Routen reagieren.

Wenn ich zum Beispiel eine weitere app.get-Methode erstelle und statt der Home-Route vielleicht die Kontakt-Route anspreche:

```js
app.get("/", function (req, res) {
  res.send("<h1>Hallo Welt</h1>");
});

app.get("/kontakt", function (req, res) {
  res.send("<h2>Kontaktieren Sie mich unter: baba@gmail.com</h2>");
});
```

Genau wie bei react-router-dom können wir mehrere Seiten mit ihren eigenen Routen rendern lassen.

Sie können damit beginnen, den Code für eine Vielzahl von verschiedenen Routen einzurichten.

Hier ist also eine Herausforderung. Ich möchte, dass du eine neue Route erstellst, damit ich, wenn ich auf die Seite "About" meiner Website auf localhost gehe, einen kurzen Lebenslauf sehen kann, wer du bist.

```js
app.get("/about", function (req, res) {
  res.send(
    "<h2>Hallo, ich bin Ari</h2> \n <p>Ich mag Peperoni</p> \n <strong>und Vidya</strong>"
  );
});
```
Jetzt hat unsere Info-Seite eine Antwort von unserem Server.

Sie können also im Grunde so viele Routen einrichten, wie Sie möchten, und das bedeutet, dass Sie mit dem Aufbau Ihrer Website beginnen können, um viele verschiedene Seiten zu haben.

Challenge. Erstellen Sie eine Route für Ihre Hobbys und listen Sie diese in einer ungeordneten Liste auf:










Lösung

```js
app.get("/hobbies", function (req, res) {
  res.send(
    "<ul><li>beer</li> <li>snacks</li> <li>Anime</li> <li>Joe</li></ul>"
  );
});
```