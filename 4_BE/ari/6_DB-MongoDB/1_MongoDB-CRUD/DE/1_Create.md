# MongoDB CRUD-Operationen in der Shell: Erstellen

[docs](https://www.mongodb.com/docs/manual/crud/)

Wenn Sie ein neues Datenbanksystem erforschen, sollten Sie sich als erstes Gedanken darüber machen, wie Sie CRUD-Operationen mit dieser speziellen Datenbank durchführen können. Im letzten Abschnitt haben wir gesehen, wie wir mit einem SQL-basierten System wie SQL lite Daten erstellen, lesen, aktualisieren und löschen können. In diesem Abschnitt sehen wir uns an, wie wir das mit MongoDB über die Kommandozeile machen können.


Es ist also an der Zeit, Ihr Terminal zu öffnen. Nach der Eingabeaufforderung geben wir mongod (buchstabiert: mongo-d) ein, manche nennen es auch "mon-god", und das wird unseren Mongo-Server hochfahren, wenn Sie auf Enter drücken. Sobald Sie sehen, dass an Port 27017 auf Verbindungen gewartet wird, können Sie loslegen. Das ist in etwa so, wie wir einen localhost 3000 hatten. Aber in diesem Fall haben wir eine lokale Datenbank, die auf diesem speziellen Port bedient wird. (Falls mongod nicht funktioniert, gib einfach mongo ein und die Verbindung wird angezeigt, dann führe mongod erneut aus)

Dieses Terminal ist mit der MongoDB-Datenbank verbunden. Nun lassen Sie dieses Terminal in Ruhe und öffnen Sie ein neues. Geben Sie nun ```Mongo``` ein und um zu überprüfen, ob alles funktioniert, geben Sie ```show dbs``` ein, wenn Sie keine Fehlermeldung erhalten, funktioniert alles einwandfrei.


Aber bevor wir eine neue Datenbank erstellen, sollten wir uns ansehen, welche Datenbanken wir bereits haben. Wie machen wir das? Nun, wenn Sie irgendwann einmal nicht mehr weiterkommen und Sie sich in der Mongo-Shell befinden, so dass Ihre kleine spitze Klammer dort zu sehen ist, können Sie immer Hilfe eintippen, als Hilferuf, und Sie können eine hilfreiche Liste von Dingen erhalten, die Sie tun können, während Sie die Mongo-Shell benutzen. Also haben wir eines davon ausprobiert ```show dbs``` Und das zeigt die Namen der Datenbanken, die wir momentan auf unserem lokalen System haben. Sie sehen, dass MongoDB bei der Installation standardmäßig mit drei Datenbanken vorinstalliert ist: admin, config und local, und Sie können sehen, dass sie alle null Gigabyte Speicherplatz belegen, weil sie komplett leer sind. So würde es aussehen, wenn Sie eine brandneue Konfiguration von MongoDB hätten.

Machen wir also weiter und erstellen unsere allererste Datenbank.

## Erste Mongo DB

Um das zu tun, müssen wir nur ```use``` eingeben und dann den Namen unserer Datenbank angeben.

Sagen wir also, ich möchte eine Datenbank für meinen Shop erstellen und nenne meine Datenbank shopDB. Ich kann ```use shopDB``` schreiben und Enter drücken.

Jetzt sagt mir Mongo, dass ich zu der Datenbank mit dem Namen ShopDB gewechselt habe. Aber wenn ich show dbs schreibe, sehe ich nirgendwo shopDB.

Das liegt daran, dass die Datenbank, um aufgelistet zu werden, einen Inhalt haben muss. Wir müssen ihr also zuerst einige Daten geben. Wir sind jetzt bereit, das "C" in CRUD in Angriff zu nehmen und zu sehen, wie wir mit MongoDB Daten erstellen können.

## C steht für CREATE

Wenn du wissen willst, in welcher Datenbank du dich gerade befindest, kannst du immer ```db``` eingeben, die Eingabetaste drücken und du erfährst, dass du gerade in der shopDB (oder dem Namen, den du deiner db gegeben hast) arbeitest.

Wie erstellen wir nun Daten in unserer Datenbank?

An dieser Stelle ist es an der Zeit, einen Blick in unsere Dokumentation zu werfen, in der wir die CRUD-Operationen von MongoDB erklärt bekommen.

Was wir also tun wollen, ist, Daten zu erstellen, und Sie können sehen, dass die Syntax, um einen oder mehrere Einträge in unserer Datenbank zu erstellen, in etwa wie folgt aussieht:

```
    db.collection.insertOne() Neu in Version 3.2

    db.collection.insertMany() Neu in Version 3.2
```

Wir schreiben ```db.collection``` und diese Collection ist eigentlich der Name einer Collection. Und wenn dieser Sammlungsname noch nicht existiert, dann wird durch das Schreiben dieser Zeile und deren Ausführung diese Sammlung tatsächlich erstellt. Und dann benutzen wir eine Methode wie ```einfügenEins``` oder ```einfügenViele```. Und dies ist ein Beispiel dafür, wie man diese Methode verwenden kann. Wenn Sie zum Beispiel eine Sammlung namens users in Ihrer Datenbank haben wollen, würden Sie sagen ```db.users.insertOne``` und innerhalb der Methode insertone würden Sie ein Javascript Objekt übergeben, welches das Dokument sein wird. Es wird also Felder und Werte haben.

```
db.users.insertOne(
    {
        Name: "sue",
        age: 26,
        status: "pending"
    }
)
```

Und das entspricht ziemlich genau den Schlüssel-Wert-Paaren, die wir in Javascript-Objekten gesehen haben. Nehmen wir das, was wir hier gelernt haben, und implementieren wir es für unsere ShopDB:

```
db.products.insertOne({_id:1, name: "Stift", preis: 1.20})
```

Collections in MongoDB sind ähnlich wie Tabellen in der SQL-Welt.

Wenn Sie keine Tippfehler gemacht haben, sollten Sie folgendes erhalten:

```
{ "acknowledged" : true, "insertedId" : 1 }
```

Wir können nun ```show collections``` schreiben und es werden alle Sammlungen angezeigt, die derzeit in der aktuellen Datenbank, in meinem Fall shopDB, existieren. So einfach ist es, mit MongoDB Daten zu unserer Datenbank hinzuzufügen. Und wenn man sich die Dokumentation anschaut, kann man sehen, dass man entweder insertOne oder insertMany verwenden kann.

```
db.collection.insertMany(
   [ <Dokument 1> , <Dokument 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <Boolesch>
   }
)
```
document => Ein Array von Dokumenten, die in die Sammlung eingefügt werden sollen.

writeConcern => Optional. Ein Dokument, das das Schreibinteresse ausdrückt. Lassen Sie es weg, um den Standard-Schreibzugriff zu verwenden.

Setzen Sie nicht explizit die Schreibsorge für die Operation, wenn sie in einer Transaktion ausgeführt wird. Zur Verwendung von Write Concern mit Transaktionen siehe Transaktionen und Write Concern.

ordered => boolean Optional. Ein boolescher Wert, der angibt, ob die Mongod-Instanz eine geordnete oder ungeordnete Einfügung durchführen soll. Der Standardwert ist true.

Grundsätzlich können Sie auf diese Weise mehrere Sammlungen erstellen.
MongoDB ist sehr gut dokumentiert, und so ziemlich alles, was man damit machen möchte, wird in der Dokumentation anhand von Grafiken und Beispielen sehr gut erklärt.

## Herausforderung
Jetzt sind Sie an der Reihe, ein neues Dokument mit der Mongo-Shell zu erstellen, und Sie werden das zweite Produkt in unserer Produktsammlung erstellen, nämlich das Produkt Bleistift. (id 2, Name Bleistift, Preis 0.80)

Die Lösung:

```
db.products.insertMany(
    {_id:2, name: "Bleistift", preis: 0.80},
    {_id:2, name: "Bleistift", preis: 0.80},
    {_id:2, name: "Bleistift", preis: 0.80}
    )




db.products.insertOne({_id:2, name: "Bleistift", preis: 0.80})
```

Jetzt haben wir eine Datenbank namens ShopDB, die eine einzige Sammlung namens Produkte enthält, und innerhalb dieser Sammlung befinden sich zwei Dokumente, eines mit Stiftdaten und ein weiteres mit Bleistiftdaten.