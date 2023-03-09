# MongoDB CRUD-Operationen in der Shell:Update

Jetzt können wir lernen, wie wir unsere Daten in der Datenbank aktualisieren können, indem wir einen Bestandswert zu jedem unserer Dokumente hinzufügen.
Im Moment haben wir zwei Produkte, einen Stift und einen Bleistift, und sie haben nur eine ID, einen Namen und ein Preisfeld.

Wenn ich einen der Datensätze auch mit einem Bestandswert aktualisieren möchte, könnte ich etwas wie db.product.updateOne() sagen und innerhalb meiner Klammern die Abfragekriterien einfügen.

```
db.products.updateOne({_id: 1}, {$set: {stock: 32}})

```

Als erstes geben wir ein, welches Produkt wir aktualisieren wollen und als zweites, was wir aktualisieren wollen, und wir erhalten:

```
{"acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

```

was wiederum bedeutet, dass unser Dokument geändert/aktualisiert wurde.

Wenn ich nun die Datei product.find noch einmal aufrufe, können Sie sehen, dass mein Stift nun auch einen Lagerwert hat, der ihm zugeordnet ist.

```
db.products.find()
```

Jetzt ist es Zeit für eine Herausforderung.

Ich möchte, dass Sie unser zweites Dokument mit der ID 2 aktualisieren, damit es ein Feld für den Bestand mit dem Wert 12 erhält.


Die Lösung: 

```
db.products.updateOne({_id: 2}, {$set: {stock: 12}})

```

Jetzt haben unsere beiden Produkte einen Lagerbestand.