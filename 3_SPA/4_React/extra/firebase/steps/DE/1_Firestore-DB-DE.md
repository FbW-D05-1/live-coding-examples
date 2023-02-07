# Firestore-Datenbanken

Als nächstes werden wir eine Datenbank einrichten.

Es gibt zwei Arten von Datenbanken, die uns Firebase zur Verfügung stellt.

Beide sind bekannte SQL-Datenbanken, die sehr gut mit JavaScript-Anwendungen wie der unseren funktionieren. Aber die Echtzeitdatenbank ist die ältere Originaldatenbank, die Firebase entwickelt hat. Diejenige, die du verwenden wirst, ist die neuere Firebase-Datenbank, die meiner Meinung nach besser und einfacher zu verwenden ist.


Klickt also darauf, und dann seht ihr hier eine Schaltfläche mit der Aufschrift Datenbank erstellen, also klickt auch darauf.

Und dann erscheint ein Pop-up-Fenster. Dieses Pop-up hat mit den Sicherheitsregeln für unsere Datenbank zu tun. Wenn wir im Produktionsmodus starten, bedeutet das, dass niemand Zugriff auf unsere Datenbank haben kann, auch nicht unsere eigene Front-End-Anwendung. Wenn wir im Testmodus starten, bedeutet dies, dass jeder, der über unser Firebase-Projekt (Anmeldeinformationen) Bescheid weiß, auf die Daten zugreifen kann.


Für den Moment wählen wir den Start im Testmodus, damit wir vom Frontend aus einfach auf die Datenbank zugreifen können.

Als Nächstes wählt man einen Speicherort für die Datenbank (ich wähle europe-west3(Frankfurt)).

Klickt dann wieder auf weiter, und Firebase beginnt mit der Erstellung eurer ersten Datenbank.

![Now we wait again](./images/wait.webp)


Sobald es also fertig ist, wirst du etwas sehen, und jetzt viel Spaß beim Ausprobieren.

Auf der linken Seite haben wir ein Panel, in dem wir alle unsere verschiedenen Sammlungen sehen. Eine Sammlung in Firestore ist genau das: eine Sammlung. Sie gruppiert einfach Dokumente oder Datensätze zusammen, was in SQL-Begriffen einer Tabelle entspricht.

Und wir haben eine Sammlung für jeden einzelnen Datentyp in unserer Anwendung.


Zum Beispiel könnten wir eine Rezeptsammlung, eine Sammlung von Rezeptdokumenten und eine Blog-Sammlung haben, um Blog-Dokumente zu speichern, wenn es sich um eine Blog-Site handelt.

Erstellen wir also eine Sammlung, indem wir hier auf die Schaltfläche für eine Vorratssammlung klicken, und nennen wir sie Rezepte.

Wenn wir das tun, werden wir von Firebase aufgefordert, unser erstes Dokument in dieser Sammlung zu erstellen.


Nun muss jedes Dokument in der Sammlung eine eindeutige ID haben, damit wir, wenn wir versuchen, das Dokument abzurufen, damit angeben können, welches Dokument wir wollen. Ihr könnt entweder eine eigene ID erstellen oder sie von Firebase erstellen lassen, indem ihr auf Auto-ID. klickt, was ich auch tun werde.

OK, als Nächstes müssen wir einige Dokumentenfelder hinzufügen, ein Dokument stellt also nur einen einzelnen Datensatz in einer Sammlung dar.


In unserem Fall ähnelt ein einzelnes Rezept in jedem Dokument einem JavaScript-Objekt mit Schlüssel-Wert-Paaren in Firestore. Der Schlüssel heißt Feld, und jedes Feld hat einen Datentyp, z. B. eine Zeichenkette oder eine Zahl oder einen booleschen Wert usw. Nehmen wir also ein Feld namens title, das eine Zeichenkette ist, und setzen es auf vegie pie.(field=title, value=vegie pie)

Danach können wir ein weiteres Feld zu diesem Dokument hinzufügen, indem wir auf das Plus-Symbol klicken.


Diese Zeit wird das Feld cookingTime, und dann wird das auch ein String sein, und wir werden es auf 35 Minuten setzen.

dann Zutaten, aber wenn ihr euch erinnert, waren unsere Zutaten Arrays, also klickt auf den String und es wird ein Dropdown geben, wählt Array aus, dann sind alle Werte in Array Strings.


Es wird also das Feld ingredients type array innerhalb des Arrays carrots, peas, pastry sein.

Nach den Zutaten brauchen wir ein weiteres Feld, nämlich die Methode. Fügen wir also eine zufällige Zeichenkette hinzu, die ich einfach blah blah blah blah...

Wenn wir fertig sind, können wir einfach auf "Speichern" klicken und Firestarter wird unsere Rezeptsammlung generieren und dieses Dokument darin einfügen.


Jetzt sehen wir diese Rezeptsammlung auf der linken Seite und darin werden alle Dokumente in der zweiten Spalte aufgelistet. Dies ist die Dokument-ID, die du hier sehen kannst, und wenn du auf ein Dokument klickst, siehst du den Inhalt des Dokuments auf der rechten Seite.

Wir erstellen jetzt einfach ein paar weitere Rezeptdokumente, verwenden unsere json-Datei als Beispiel und fügen sie dort ein, klicken auf die Schaltfläche Dokument hinzufügen und beginnen.

Als Nächstes müssen wir in der Lage sein, uns mit unserem Firebase-Backend und der Firestone-Datenbank von unseren React-Anwendungen aus zu verbinden, also werden wir das in der nächsten Readme-Datei einrichten.
