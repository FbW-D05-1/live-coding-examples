# SQL-Befehle: READ, SELECT und WHERE

## R für Read

In dieser Folge der dbz schauen wir uns den nächsten Teil von CRUD an, nämlich 'R' für Read.

Das am häufigsten verwendete Schlüsselwort ist das SQL [SELECT](https://www.w3schools.com/sql/sql_select.asp) Schlüsselwort. Damit können Sie die Daten aus Ihrer Datenbank lesen.

Wenn ich zum Beispiel mit der rechten Maustaste auf meine Tabellen klicke und auf Tabelle anzeigen klicke, siehst du oben

```SELECT * FROM 'products'```

Syntax wird automatisch angezeigt, weil ich die Tabelle mit dieser Anweisung anzeigen kann. Sie lautet: SELECT * FROM products. Produkte ist die Tabelle, die ich sehen möchte, und * steht für einen Platzhalter. Es bedeutet also, dass alles aus der Tabelle Produkte ausgewählt wird, und deshalb sehen wir alles in unserer Tabelle. Wenn Sie nun nur eine oder zwei Spalten aus dieser Tabelle haben wollen, können Sie anstelle von Sternchen oder * einfach schreiben:

```SELECT name, price FROM 'products'```

Und wenn Sie auf "run" klicken, sehen Sie, dass wir die id-Spalte entfernt haben.

Was ist nun, wenn Sie nur eine bestimmte Zeile aus Ihrer Datenbank benötigen?

Nehmen wir an, Sie wollen nur die erste Zeile sehen, die mit der ID eins.

In diesem Fall müssten Sie Ihre Datenbank mit dem Schlüsselwort [WHERE](https://www.w3schools.com/sql/sql_where.asp) durchsuchen.

```SQL
SELECT spalte1, spalte2, ...
FROM tabelle_name
WHERE Bedingung; 


zum Beispiel
WHERE Land='Mexiko'; 

oder
WHERE KundenID=1; 
```

damit es mit id funktioniert, probieren wir es selbst aus

```SQL
SELECT * FROM produkte WHERE id=1; 
```

Wenn ich jetzt auf "run" drücke, wird der einzelne Datensatz isoliert, bei dem die id gleich 1 ist, und wir wählen eine einzelne Zeile aus.

Herausforderung: Versuchen Sie, den Bleistift auszuwählen, ohne id zu verwenden.


Sie können also Dinge wie "gleich" oder "größer" oder "kleiner als" zwischen allen möglichen Dingen verwenden, um diese WHERE-Anweisung so zu ändern, dass Sie die benötigten Datenteile auswählen können. Diese Anweisung dient also dazu, Daten aus Ihrer Datenbank zu lesen und die Daten zu erfassen, die bestimmten Kriterien entsprechen. Sie werden diese Anweisung häufig sehen, wenn Sie anfangen, mit SQL-Datenbanken zu arbeiten.

Einige Beispiele:

```SQL
WHERE Preis BETWEEN 50 AND 60;


SELECT * FROM Produkte
WHERE Preis > 30;


SELECT * FROM Produkte
WHERE Preis <= 30;


SELECT * FROM Kunden
WHERE Stadt IN ('Paris','London');

SELECT * FROM Kunden
WHERE NOT Stadt = 'Berlin';


SELECT * FROM Kunden
WHERE Stadt = 'Berlin'
AND PostalCode = 12209;


SELECT * FROM Kunden
WHERE Stadt = 'Berlin'
OR Stadt = 'London';
```

Fin