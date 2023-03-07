# SQL-RELATIONSHIPS, Fremdschlüssel und innere Joins verstehen

Nachdem wir nun gesehen haben, wie man CRUD mit SQL implementiert, müssen wir uns als Nächstes die Beziehungen in SQL ansehen.

Fügen wir also zunächst den gelöschten Stift wieder hinzu.




Die Lösung:

```SQL
INSERT INTO Produkte
VALUES (2, "Bleistift", 0.8, 12)
```

Als Nächstes erstellen wir eine neue Tabelle mit dem Namen Bestellungen. Diese Tabelle "Bestellungen" hat eine Reihe von Feldern. Sie hat ein id-Feld, das eine ganze Zahl ist, die nicht null ist, dann hat sie ein Auftragsnummer-Feld, das eine ganze Zahl ist, und das uns erlaubt, alle Aufträge zu verfolgen, die wir jemals in unserem Geschäft erhalten haben. Als nächstes geben wir ein Feld namens customer_id an, das eine ganze Zahl ist. Hier wird der Kunde gespeichert, der diese bestimmte Bestellung aufgegeben hat.
Dies wird also ein Feld sein, das als Fremdschlüssel zu unserer Tabelle fungiert und auf einen bestimmten Datensatz in unserer Kundentabelle verweist. Und wir werden das auch mit einer product_id tun, um eine Beziehung zu unserer Tabelle products herzustellen.

```SQL
CREATE TABLE orders(
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    produkt_id INT,
)
```


Wie Sie bereits gesehen haben, können wir nun einen Primärschlüssel für unsere aktuelle Tabelle festlegen, indem wir eine Reihe von Klammern öffnen und den Namen des Feldes eingeben, das als Primärschlüssel fungieren soll, also wird es das Feld id sein.
```SQL
PRIMARY KEY (id),
```
Wir können aber auch einen [Fremdschlüssel](https://www.w3schools.com/sql/sql_foreignkey.asp) angeben. Der Fremdschlüssel wird also der Schlüssel sein, der alle Tabellen miteinander verbindet. Das ist es, was die Beziehung herstellen wird. Wie Sie unten im Link sehen, gibt es Kunden und Bestellungen. Wenn Sie in der Tabelle Bestellungen eine Person mit der ID 3 haben, haben Sie ein Feld, das der Fremdschlüssel ist. Für die Tabelle Bestellungen wissen wir also, dass diese Bestellung von jemandem in der Personentabelle mit der ID 3 getätigt wurde. Zu einem späteren Zeitpunkt können wir also alle Daten in diesem Datensatz abrufen, die mit dieser Bestellung verbunden sind.

Und so stellen Sie mit SQL Beziehungen her.

In unserem Fall können wir das Feld customer_id als Fremdschlüssel festlegen, der auf die Tabelle customers verweist. Das ist also der Name der Tabelle, und in Klammern steht der Name des Feldes in der Tabelle customers, das der Primärschlüssel ist. Das wird das Feld id sein.
```SQL
CREATE TABLE orders(
    id INT NOT NULL,
    auftrag_nummer INT,
    kunden_id INT,
    produkt_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (kunden_id) REFERENCES kunden(id)
)
```

Und schließlich machen wir das Gleiche für unser anderes Feld, nämlich das Feld product id

```SQL
CREATE TABLE orders(
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    produkt_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (kunden_id) REFERENCES kunden(id)
    FOREIGN KEY (produkt_id) REFERENCES produkte(id)
)
```


Wenn Ihnen das Konzept des Primärschlüssels und des Fremdschlüssels fremd ist, empfehle ich Ihnen die Lektüre der [diese](https://www.w3schools.com/sql/sql_foreignkey.asp) Dokumentation auf w3schools, um zu verstehen, wie Sie mit SQL über diese Schlüssel Beziehungen herstellen.


Drücken wir auf run. Wir haben jetzt eine Tabelle Bestellungen. Auch hier ist die Tabelle orders völlig leer, aber wenn wir mit der rechten Maustaste darauf klicken und auf show schema klicken, können Sie sehen, dass sie nur vier Felder hat. Das erste, die ID, ist der Primärschlüssel für die Tabelle Bestellungen und zwei weitere Felder dienen als Fremdschlüssel, die diese Tabelle Bestellungen mit der Tabelle Kunden und der Tabelle Produkte verknüpfen.


Wir werden nun unseren ersten Bestellungsdatensatz in unserer Tabelle Bestellungen erstellen. Die ID wird 1 sein, die Bestellungsnummer 4362 und der Kunde, der sie gekauft hat, hat eine ID und schließlich das Produkt mit einer ID von 1.

Durch die Herstellung dieser Beziehungen können wir später eine viel größere Tabelle erstellen, in der wir alle relevanten Datensätze und alle nützlichen Spalten aus allen drei Tabellen, die wir benötigen, zusammenführen.

Lassen Sie mich Ihnen also zeigen, wie das funktioniert, indem ich den ersten Datensatz erstelle.

```SQL
INSERT INTO Bestellungen
VALUES (1, 4362, 2, 1)
```

Klicken Sie auf run.

Aber jetzt können wir etwas wirklich Mächtiges aus SQL verwenden, nämlich eine Verknüpfung. Wir können also unsere Tabellen mit dem Schlüsselwort join verbinden. Es gibt eine ganze Reihe von verschiedenen Joins: linker Join, rechter Join, vollständiger Join. Aber der am häufigsten verwendete ist der [inner join](https://www.w3schools.com/sql/sql_join_inner.asp) und den werden wir verwenden.

Wir werden die Teile unserer Tabellen zusammenführen, auf die ein bestimmter Suchschlüssel passt. Dies ist die Syntax:

```SQL
SELECT spalten_name(s)
FROM tabelle1
INNER JOIN table2
ON table1.spalten_name = table2.spalten_name;
```

Mit SELECT werden wir also die Bestellnummer aus der Tabelle orders auswählen. Wir würden also etwas sagen wie orders.der Name des Feldes. In unserem Fall ist unsere Tabelle Bestellungen klein geschrieben, Bestellungen.Bestellnummer.

```SELECT aufträge.auftragsnummer,```.

Das andere Feld, das wir benötigen, stammt aus unserer Kundentabelle und ist der Vorname, Nachname und die Adresse. Wir würden also kunden.vorname kunden.nachname und kunden.adresse schreiben.
```SELECT aufträge.auftragsnummer, kunden.vorname, kunden.nachname, kunden.adresse```. Das sind alle Felder, die wir in einer neuen Tabelle, die wir erstellen werden, zusammenführen wollen, und zwar aus den Fremdschlüsseln in unserer Tabelle "Bestellungen": "FROM orders". In der Tabelle "Bestellungen" finden Sie diese spezielle Fremdschlüsselübereinstimmung. Der nächste Schritt ist die innere Verknüpfung, und die Tabelle, die wir verknüpfen wollen, ist unsere Kundentabelle. Und nach dem Schlüsselwort on folgen die Felder, die übereinstimmen werden. Es wird der Fremdschlüssel in unserer Tabelle orders sein, der customer_id heißt, und er wird mit dem Primärschlüssel in unserer Tabelle customers übereinstimmen, der einfach id heißt. ```INNER JOIN kunden ON auftrag.kunden_id = kunden.id```

Alles zusammen:

```SQL
SELECT aufträge.auftragsnummer, kunden.vorname, kunden.nachname, kunden.adresse
FROM aufträge
INNER JOIN Kunden ON auftrag.kunden_id = kunden.id
```

Wenn Sie nun auf "run" klicken, erhalten Sie eine gemeinsame Tabelle, in der die Bestellnummer, der Vorname, der Nachname und die Adresse enthalten sind, und Sie können sehen, dass diese Felder aus verschiedenen Tabellen stammen. Aber wir haben es jetzt geschafft, alle unsere Tabellen und Datensätze zu durchsuchen und die Bestellungen in einer neuen Tabelle zusammenzufassen, was für uns viel nützlicher ist. Wenn wir also zum Beispiel die Bestellung mit der Nummer 4362 versenden wollen, wissen wir, an wen die Bestellung geschickt wird und wie die Adresse lautet.

Als Nächstes haben wir eine Aufgabe für Sie.

### Herausforderung

Wie Sie sehen, haben wir derzeit nur die Bestellung mit dem Kunden verknüpft. Als Herausforderung möchte ich, dass Sie die Bestellung mit dem Produkt verknüpfen, auf das sich die Bestellung bezieht. Versuchen Sie, den Code so zu ändern, dass Sie diese Aufgabe lösen können.



LÖSUNG:


```SQL



SELECT aufträge.auftragsnummer, produkte.name, produkte.preis, produkte.bestand
FROM aufträge
INNER JOIN products ON orders.product_id = products.id;
```

## Mehrere Tabellen verknüpfen

```SQL
SELECT aufträge.auftragsnummer, produkte.name, kunden.erster_name
FROM aufträge
INNER JOIN produkte ON bestellungen.produkt_id = produkte.id
INNER JOIN kunden ON bestellungen.kunden_id = kunden.id
```

oder mit Komma:

```SQL
SELECT aufträge.auftragsnummer, kunden.vorname, kunden.nachname, kunden.adresse, produkte.name, produkte.preis, produkte.bestand
FROM aufträge
INNER JOIN kunden ON bestellungen.kunden_id = kunden.id, produkte ON produkte.id = bestellungen.produkt_id;
```

Wir haben jetzt eine brandneue Tabelle, die auf der Grundlage dieser inneren Verknüpfung erstellt wurde. Dies ist also ein kleiner Einblick in die Magie der SQL-Datenbankbeziehungen. Sie können sehen, wie flexibel und mächtig diese Beziehungen sind, wenn Sie Ihre Datenbank durchsuchen und versuchen, alle Ihre Daten aus verschiedenen Tabellen zusammenzustellen. Sie können sehen, wie flexibel und leistungsfähig diese Beziehungen sind, wenn Sie Ihre Datenbank durchsuchen und versuchen, alle Ihre Daten aus verschiedenen Tabellen zusammenzustellen.