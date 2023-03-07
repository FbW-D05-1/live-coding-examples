# SQL-BEFEHLE: DELETE

## D steht für Delete

Diesmal schauen wir uns den letzten Buchstaben von CRUD an, nämlich DELETE.

Wenn wir Datensätze löschen wollen, können wir einfach DELETE FROM tabellenname WHERE schreiben, wenn etwas eine bestimmte Bedingung erfüllt:

```SQL
DELETE FROM tabellenname
WHERE Bedingung;
```

Wenn wir z.B. unseren Datensatz für unseren Bleistift löschen wollen, sagen wir, wenn wir keine Bleistifte mehr in unserem Geschäft verkaufen, dann können Sie einfach sagen:

```SQL
DELETE FROM produkte
WHERE Name = "Bleistift"
```

Auch hier sollten Sie darauf achten, dass Sie die Anweisung nicht ohne WHERE-Anweisung ausführen, denn dann wird alles in Ihrer Produkttabelle gelöscht und Sie verlieren alle Daten. Es ist also wieder eine gefährliche Anweisung, die Sie ausführen sollten, und stellen Sie sicher, dass Sie Ihre Anweisung überprüfen, bevor Sie auf die Schaltfläche "Ausführen" klicken. Und jetzt hat unsere Produkttabelle nur noch einen Eintrag. Aber durch diesen Prozess haben Sie gesehen, wie wir die strukturierte Abfragesprache zum Erstellen, Lesen, Aktualisieren und Löschen von Daten aus unserer SQL-Tabelle verwenden können.

Multi Delete:
```SQL
DELETE FROM kunden
WHERE id=1 AND id=2
```