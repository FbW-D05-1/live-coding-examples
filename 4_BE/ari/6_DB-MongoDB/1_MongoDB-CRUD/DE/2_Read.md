# MongoDB CRUD-Operationen in der Shell: Lesen & Abfragen

Diesmal möchte ich Ihnen zeigen, wie wir die Daten, die in unserer Datenbank gespeichert sind, lesen können.
Wenn wir wieder ```Show Collections``` eingeben, sehen wir, dass wir nur eine einzige Collection namens Products haben, aber innerhalb von Products finden wir alle Daten.

Zurück in [docs](https://www.mongodb.com/docs/manual/crud/) können Sie sehen, dass wir eine Methode namens find verwenden können, um Daten aus unserer Datenbank zu lesen. Dem gleichen Format folgend sagen wir 

```db.collection.find()```

Und innerhalb der find-Methode übergeben wir ein Abfragekriterium. In Docs Fall wird nach Daten in der Sammlung des Benutzers gesucht, bei denen das Alter größer als 18 ist. Und wenn wir auf diese Methode klicken, gelangen wir zu einer detaillierten Seite über diese Suchmethode. Und wir haben die Definition, das Verhalten und die Beispiele in diesem sehr langen Dokument beschrieben.

Sie können sehen, wie Sie die Methode verwenden, indem Sie zwei Parameter übergeben. Einer ist die Abfrage und einer die Projektion und beide sind optional. Sie können also einfach db.collection.find mit leeren Klammern schreiben und Sie werden alles finden.

Lassen Sie uns das ausprobieren:

```
db.products.find()
```

Wenn Sie nun die Eingabetaste drücken, erhalten Sie alle Dokumente, die sich in Ihrer Produktsammlung befinden, und das ist Ihr Stift.

Aber wenn Sie eine spezifische Abfrage für ein Stück Daten in Ihrer Sammlung machen wollen, können Sie eine Abfrage hinzufügen. Und Sie können Abfrageoperatoren verwenden, um die Daten einzugrenzen, die Sie zurückerhalten werden. Zu den Abfrageoperatoren gehören z. B. größer als kleiner als oder kleiner als oder gleich. Sie können Ihre Abfragen mit den logischen Operatoren kombinieren und haben eine sehr feine Kontrolle darüber, welche Daten Sie aus Ihrer Datenbank lesen wollen.

Wenn wir zum Beispiel unsere Datenbank nach einem bestimmten Datensatz abfragen wollen, könnten wir etwas sagen wie:

```
db.products.find({name:"Bleistift"})
```

Wenn Sie nun die Eingabetaste drücken, sehen Sie, dass nur die Daten angezeigt werden, bei denen das Namensfeld mit den Abfragekriterien übereinstimmt, nämlich "Bleistift". Jetzt können Sie bestimmte Dokumente in Ihrer Sammlung oder in Ihrer Datenbank mit Hilfe einer spezifischen Abfrage lesen.

Eine andere Abfrage könnte zum Beispiel sein, wenn Sie viele Produkte haben und nur die finden wollen, die mehr als 1 $ kosten, dann

```
db.products.find({Preis: {$gt: 1}})
```

"$gt" => größer als aus [docs](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)

Wir wissen also, dass wir einen Bleistift mit einem Preis von 0,8 und einen Stift mit einem Preis von 1,2 haben. Aber wenn Sie diesen Code ausführen, erhalten Sie nur mein Stiftdokument zurück, dessen Preis größer als 1,0 ist.

Sie können die Abfragen, die Sie mit der Find-Methode machen, sehr raffiniert gestalten. Und Sie können genau die Daten aus Ihrer Datenbank heraussuchen, die Sie benötigen.

Wenn wir uns die Find-Methode noch einmal ansehen, sehen wir, dass es einen zweiten Parameter gibt, der Projektion genannt wird. Auch dieser ist optional, und obwohl wir ihn nicht in unseren Code aufgenommen haben, ist das nicht wirklich wichtig.

Sie müssen das nicht. Aber Sie können ihn einbeziehen, wenn Sie die zurückzugebenden Felder angeben möchten.

Wenn wir uns die CRUD-Dokumentation ansehen, sehen wir, dass für diese spezielle Abfrage nach Dokumenten in der Benutzersammlung gesucht wird, bei denen das Altersfeld größer als 18 ist und die Projektion oder die Felder, die zurückgegeben werden sollen, der Name und die Adresse sind.
1 bedeutet also wahr und 0 bedeutet falsch.

In unserem Fall könnten wir also zum Beispiel sagen:

```
db.products.find({_id: 1}, {name: 1})
```
bedeutet im Grunde etwas wie dies

```
db.products.find({_id: 1}, {name: 1, preis: 0})
```
nur den Namen anzeigen und alles andere ausblenden

Wenn Sie nun find verwenden, wird standardmäßig immer id angezeigt. Aber Sie können die Projektion verwenden, um sie auf false zu setzen:

```
db.products.find({_id: 1}, {_id: 0, name: 1})
```

um alle in eine Collection zu filtrieren:

```
db.products.find({}, {_id: 0, name: 1})
```

und dies wird Ihnen nur den Namen liefern. Mit dem zweiten Parameter in der Suchmethode können wir angeben, welche Felder in den Daten wir zurückhaben wollen. Und in ```{_id: 1}, {_id: 0, name: 1}``` wollen wir nur den Namen und sonst nichts. Im Fall von ```{Name: 1, Preis: 0}``` wollen wir sowohl den Namen als auch die ID, die standardmäßig enthalten ist, und wenn wir keines davon angeben, erhalten wir alle Felder in diesem Datensatz.