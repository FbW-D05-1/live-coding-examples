# MongoDB CRUD-Operationen in der Shell:Löschen

Nachdem wir nun gelernt haben, wie man mit MongoDB in der Mongo-Shell Daten erstellt, liest und aktualisiert, ist es nun an der Zeit, sich anzuschauen, wie wir Daten aus unseren Sammlungen löschen können.

Wenn Sie in der CRUD-Dokumentation nach unten scrollen, finden Sie einen Abschnitt, der uns erklärt, wie das geht. Und Sie können sehen, dass die beiden Hauptmethoden, auf die wir uns verlassen werden, deleteOne und deleteMany sind. Mit einem Beispiel:

```
db.collection.deleteOne()
db.collection.deleteMany()
```

Sie würden also db.collection name.deleteMany oder deleteOne sagen und im Filter angeben, welche Datensätze Sie löschen wollen.

Dies ist eine gute Gelegenheit, um das, was Sie in der [Dokumentation](https://www.mongodb.com/docs/manual/crud/) sehen, in tatsächlichen Arbeitscode zu übersetzen, der das tut, was Sie wollen. Ich möchte, dass Sie den zweiten hinzugefügten Datensatz, den Bleistift-Datensatz, entfernen, indem Sie die Dokumentation zu MongoDB lesen und verwenden.



Lösung:

```
db.products.deleteOne({_id: 2})
```