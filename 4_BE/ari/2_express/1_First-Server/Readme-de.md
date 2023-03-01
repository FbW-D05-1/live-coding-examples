# Erstellung unseres ersten Servers mit Express

Erstellen wir eine neue Datei und nennen sie server.js
und dann öffnen wir unser Terminal und initialisieren mit npm:
```bash
npm init
```

Jetzt haben wir unsere package.json und server.js

Als nächstes werden wir express installieren, schau immer in [docs](https://expressjs.com/en/starter/installing.html) nach, da sich einiges ändern kann:
```bash
npm i express
```

Sobald das erledigt ist, sollten node_modules und express "dependencies" in der package.json zu finden sein.

Als nächstes gehen Sie zu server.js und lesen Sie die Kommentare dort

## Cannot Get /

Warum bekommen wir "CANNOT GET /":

Nun, es bedeutet, dass unser Browser, wenn er versucht, mit unserem Server auf dem Port 3000 in Kontakt zu treten, nicht in der Lage ist, etwas zurückzubekommen. Nun müssen wir herausfinden, wie wir einen Code schreiben können, damit unser Server antwortet, wenn ein Browser eine Anfrage an unseren Server stellt. Wir müssen dem Browser einige Informationen schicken, die er anzeigen soll. Das werden wir als nächstes tun.