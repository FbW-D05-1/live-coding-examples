# SQL KOMMANDOS: CREATE TABLE und INSERT data

Letztes Mal haben wir von den Vor- und Nachteilen von SQL-Datenbanken und noSQL-Datenbanken gehört, aber nichts ist wahrer, als wenn man es selbst ausprobiert hat. Versuchen wir also einmal, eine Datenbank mit einer SQL-basierten Datenbank zu erstellen und uns selbst ein Bild davon zu machen, wie sie funktioniert.

Eine großartige Quelle für die Dokumentation von SQL ist [w3schools](https://www.w3schools.com/sql/). Hier wird die gesamte SQL- oder Structured Query Language-Syntax dokumentiert und es ist ein wirklich guter Leitfaden, um sich mit dieser im Grunde neuen Programmiersprache vertraut zu machen. 

Die Art und Weise, wie SQL funktioniert, ist, dass man diese Schlüsselwörter wie ``SELECT`` oder ``FROM`` oder ``CREATE`` oder ``TABLE`` hat, und man neigt dazu, sie in Großbuchstaben zu schreiben, und mit dieser strukturierten Abfragesprache können wir Tabellen erstellen, sie manipulieren, aktualisieren, zerstören, etc.


Bei jedem einzelnen Datenbanktyp bestehen die Hauptaufgaben darin, Tabellen zu erstellen, zu lesen, zu aktualisieren und zu löschen. Im Datenbankjargon nennt man das CRUD.

 * CRUD

 * C => CREATE(Erstellen)

 * R => READ(Lesen)

 * U => UPDATE(Aktualisieren)

 * D => DELETE/ DESTROY(Zerstören)

Für jede einzelne Datenbank muss man sich also erst einmal daran gewöhnen, CRUD mit dieser speziellen Datenbank durchzuführen.


## Probieren wir es also mit einer SQL-basierten Datenbank aus.

## C für Erstellen

Gehen Sie zu [sql lite online](https://sqliteonline.com/). Da SQL für uns optional ist, werden wir nichts installieren, aber wenn Sie daran interessiert sind, mehr zu lernen und es mit Express verwenden wollen, schauen Sie sich das [pgadmin](https://www.pgadmin.org/download/) Tool und das [sequelize](https://sequelize.org/) Paket an.

sqliteonline.com ist eine Website, die eine Spielumgebung schafft, die es Ihnen ermöglicht, die Verwendung einer SQL-ähnlichen Datenbank auszuprobieren und sich mit der Abfragesprache vertraut zu machen und einfach zu sehen, wie sie funktioniert. Wenn du auf den Link klickst, wirst du zu dieser Datenbank weitergeleitet. Sie hat eine Demo-Tabelle in der Seitenleiste und in der Mitte werden wir eine neue Tabelle erstellen, die wir benutzen werden:

```SQL
    CREATE TABLE kunden (
       id INT NOT NULL PRIMARY KEY,
       first_name STRING,
       last_name STRING,
       address VARCHAR(255),
      );
```

[sql-datentypen](https://www.w3schools.com/sql/sql_datatypes.asp)

CREATE TABLE tablename => erstellt eine neue Tabelle mit dem angegebenen Namen
id int => id oder pk(Primärschlüssel) ist eine ganze Zahl
address varchar(255) ist eine Zeichenkette mit einer maximalen Länge von 255 Zeichen 


Als erstes werden wir die Tabellenstruktur, die wir vorhin gesehen haben, replizieren. Wir werden die Tabelle Products, die wir hatten, neu erstellen, aber diesmal mit echtem SQL-Code.

Wir brauchen also eine weitere Tabelle für unsere Produkte, Challenge verwendet [diese Seite](https://www.w3schools.com/sql/sql_create_table.asp), um eine neue Tabelle zu erstellen:

Sie benötigt:

 * id mit pk

 * Name, der ein String sein kann

 * Preis prüfen, welcher Datentyp am besten passt

Lösung:


```SQL
CREATE TABLE produkte(
	id INT NOT NULL,
  	name STRING,
  	preis MONEY,
  	PRIMARY KEY (id)
)
```

Klicken Sie dann auf "Ausführen". Sobald die neue Tabelle erstellt wurde, klicken Sie auf die Schaltfläche "Dropdown". Sie können sehen, dass sie leer ist.

## Fügen wir also einige Daten hinzu

[was wir brauchen](https://www.w3schools.com/sql/sql_insert.asp)

Es gibt zwei Möglichkeiten, Daten in Tabellen einzufügen

Die erste Möglichkeit:

```SQL
INSERT INTO tabelle_name (spalte1, spalte2, spalte3, ...)
VALUES (wert1, wert2, wert3, ...); 
```

Wenn Sie Werte für jede einzelne Spalte einfügen wollen, dann brauchen Sie diesen Teil eigentlich nicht und können einfach alle Werte angeben:

```SQL
INSERT INTO tabelle_name
VALUES (wert1, wert2, wert3, ...); 
```

Lassen Sie uns das für unsere Produkttabelle tun.

```SQL
INSERT INTO produkte
VALUES (1, "Stift", 1.20)
```

Klicken Sie nun mit der rechten Maustaste auf Produkte und klicken Sie auf Auswählen (Tabelle anzeigen) Unsere Daten sind drin!

Machen Sie dasselbe für Kunden.


Wenn wir nun ein Feld auslassen wollen, z.B. wenn wir einen weiteren Datensatz hinzufügen wollen, der nicht das Produkt ist, das wir haben, nämlich Bleistift, aber im Moment haben wir noch keinen Preis für die Bleistifte, also haben wir noch keinen Wert für den Preis. Wenn wir in unsere Tabelle Produkte einfügen wollen, aber wir haben noch nicht den Wert für alle Spalten, dann können Sie einfach:

```SQL
INSERT INTO produkte (id, name)
VALUES (2, "Bleistift")
```

Wenn wir nun wieder unsere Produkttabelle anzeigen, können Sie sehen, dass der zweite Datensatz eine ID und einen Namen hat, aber keinen Preis. Der Preis ist im Moment gleich Null.


Erinnern Sie sich, als wir vorhin unser Produktschema erstellt haben, also wenn Sie mit der rechten Maustaste klicken und SQL Schema sagen, können Sie sehen, dass das Feld id nicht null sein kann. Das heißt, wenn wir keine ID angeben, sondern nur Name und Preis. Wenn Sie auf "Ausführen" klicken, werden Sie sehen, dass ich hier einen Fehler erhalte, der besagt: "NOT NULL constraint failed". Das liegt daran, dass products.id nicht null sein kann.

Dies ist nur eine kleine Überprüfung, damit Ihre Datenbank gut organisiert ist und die von uns angegebene Struktur beibehält. Das war also die Art und Weise, wie Sie eine neue Tabelle mit der Structured Query Language erstellen und wie Sie Daten in Ihre Tabelle einfügen können.