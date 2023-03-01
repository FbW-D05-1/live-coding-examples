# BMI-Routing-Herausforderung

Wir werden den Code, den wir zuvor für Calculator geschrieben haben, in eine echte Website verwandeln und dabei das in diesem Modul Gelernte anwenden. Folgen Sie den folgenden Schritten, um die Aufgabe zu lösen:

1. Erstellen Sie eine neue Datei namens bmiCalculator.html im Calculator-Ordner aus der letzten Aufgabe 

2. Fügen Sie das HTML-Boilerplate hinzu und setzen Sie den Seitentitel auf BMI-Rechner

3. Fügen Sie ein HTML-Formular hinzu. Dieses Formular wird eine Post-Anfrage an unseren Server unter der Adresse /bmicalculator stellen. Das Formular wird 2 Eingaben haben, Gewicht und Größe mit Platzhaltertext, der dem Benutzer sagt, was er in welches Textfeld eingeben soll. 

4. Fügen Sie eine Schaltfläche mit der Aufschrift "BMI berechnen" hinzu.

5. Fügen Sie die get- und post-Methoden für die /bmicalculator-Route in dieselbe server.js-Datei ein, die wir bereits verwendet haben.

6. Verwenden Sie sendFile(), um die Seite bmiCalculator.html als Antwort innerhalb der get-Methode zu senden.

6. Fügen Sie ein h1 hinzu, das BMI-Rechner heißt.

7. Erstellen Sie in server.js 2 Variablen, eine für das Gewicht und eine für die Größe. 

8. Verwenden Sie den Code des BMI-Rechners, den Sie zuvor geschrieben haben, oder schreiben Sie einen neuen Code, um das Ergebnis zu berechnen und als Text zurückzusenden. Der Text sollte in etwa lauten: "Ihr BMI ist n", wobei n gleich dem berechneten BMI ist, der auf den Eingaben für Gewicht und Größe basiert.


Hinweis: BMI's können Fließkommazahlen haben.


Extra: eine Prüfung hinzufügen, um zu sehen, ob der Körperfettanteil zu hoch oder zu niedrig ist