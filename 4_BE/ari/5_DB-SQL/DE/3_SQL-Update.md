# Aktualisieren einzelner Werte und Hinzufügen von Spalten in SQL

## U steht für Update

In diesem Readme werden wir uns mit dem "U" in CRUD befassen, d.h. wie Sie Datensätze in Ihrer Datenbank aktualisieren.

Wenn wir uns die gesamte Produkttabelle ansehen, erinnern Sie sich, dass der Preis für unseren Bleistift auf null gesetzt ist, weil wir beim Erstellen dieses Datensatzes noch keinen Preis hatten. Also haben wir ihn leer gelassen. Wenn ich diesen Datensatz nun aktualisieren möchte, um einen Wert für den Preis meines Bleistifts anzugeben, kann ich die UPDATE-Anweisung verwenden.

Und so sieht die [Syntax](https://www.w3schools.com/sql/sql_update.asp) aus:

```SQL
UPDATE tabelle_name
SET spalte1 = wert1, spalte2 = wert2, ...
WHERE Bedingung; 
```

Wir verwenden das UPDATE-Schlüsselwort und geben die Tabelle an, die wir aktualisieren wollen, und legen dann die Werte fest, die wir aktualisieren wollen, und können eine bestimmte Bedingung angeben, um nur die Datensätze zu aktualisieren, die wir aktualisieren wollen.

In unserem Fall würden wir also etwas wie UPDATE schreiben und die Tabelle, die wir aktualisieren wollen, ist natürlich wieder die Tabelle products und dann schreiben wir set und wir wollen den Preis auf 0,8 als Preis unseres Bleistifts setzen:

```SQL
UPDATE Produkte
SET Preis = 0.80
```

Dies ist eine ziemlich gefährliche Anweisung, denn wenn Sie jetzt auf "run" klicken, wird alles in Ihrer Tabelle auf einen Preis von 0,8 gesetzt.

Es ist also sehr wichtig, dass Sie die WHERE-Anweisung so spezifizieren, dass sie nur den Preis von 0,8 setzt, wenn der Datensatz eine ID gleich 2 hat.

```SQL
UPDATE Produkte
SET preis = 0.80
WHERE id = 2;
```
Jetzt wird also dieser spezielle Datensatz gefunden und nur sein Preis auf 0,8 gesetzt.
Wenn Sie nun auf "Run" klicken und sich unsere Produkttabelle noch einmal ansehen, können Sie sehen, dass unser Stift jetzt einen Preis hat und keine Nullwerte mehr vorhanden sind.

Was wäre nun, wenn Sie die gesamte Tabelle und nicht nur einen bestimmten Datensatz ändern wollten? Was wäre, wenn wir in unserer Produkttabelle auch den Lagerbestand jedes unserer Produkte verfolgen wollten? Nun, dann müssten wir eine neue Spalte hinzufügen.

## Ändern der Tabellen

Dies ist die [ALTER table](https://www.w3schools.com/sql/sql_alter.asp) Syntax:

Sie wird verwendet, um Spalten in einer bestehenden Tabelle hinzuzufügen, zu löschen oder zu ändern, was genau das ist, was wir wollen

```SQL
ALTER TABLE tabelle_name
ADD column_name datatype; 
```

für uns:

```SQL
ALTER TABLE produkte
ADD stock INT
```

Wenn wir nun auf ,,run'' klicken und unsere Tabelle ,,products'' ansehen, können Sie sehen, dass wir jetzt eine zusätzliche Spalte am Ende angehängt haben, aber beide haben Nullwerte.

### Herausforderung

**Herausforderung: Fügen Sie dem Lagerbestand 32 Stifte und 12 Bleistifte hinzu**.

Die Aufgabe besteht nun darin, diese beiden Datensätze so zu aktualisieren, dass sie einen Lagerwert haben und der Wert des Lagers dem Wert in dieser Tabelle entspricht.





Lösung:
```SQL



UPDATE Produkte
SET stock = 32
WHERE id = 1;

UPDATE produkte
SET Lagerbestand = 12
WHERE id = 2;

```

Jetzt haben wir Bestandswerte für unsere beiden Produkte und unsere Tabelle ist nun vollständig und enthält keine Nullwerte mehr. Sie sehen jedoch, wie mühsam es sein kann, einige dieser Werte zu aktualisieren, vor allem, wenn Sie dies bei der Erstellung des Schemas nicht berücksichtigt haben.