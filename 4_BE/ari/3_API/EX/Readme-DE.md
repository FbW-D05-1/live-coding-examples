## Was Sie bauen werden.

Die Web-App, die Sie bauen werden, ist eine Newsletter-App. 

Wenn Sie also jemand sind, der einen eigenen Newsletter einrichten will, mit dem Sie Menschen, die an Ihnen interessiert sind, per E-Mail erreichen wollen, dann brauchen Sie eine Anmeldeseite.
Das ist es also, was Sie bauen werden.

Es handelt sich um eine einseitige Website, die recht hübsch aussieht, und auf der Vorderseite sieht sie unglaublich einfach aus, aber auf der Rückseite verfügt sie über einige leistungsstarke Funktionen, mit denen Sie Leute in Ihre Mailingliste eintragen können.

Angenommen, John Doe möchte sich in Ihre Mailingliste eintragen.
Wenn der Benutzer auf "Anmelden" klickt, wird er auf die Erfolgsseite weitergeleitet, wenn nicht, wird eine Fehlerseite angezeigt.

Der Benutzer war also erfolgreich, und die Daten, die er in das Formularfeld eingegeben hat, verschwinden nicht einfach.

Sie werden an Ihre MailChimp-Liste gesendet, und all diese Daten werden in Ihre Liste aufgenommen, und unser neuer Abonnent wird hinzugefügt.

Das bedeutet, dass Sie nun Ihre Newsletter oder Ihre E-Mail-Kampagnen an Ihre Abonnenten senden können.

## Einrichtung

Erstellen Sie zunächst ein kostenloses Konto bei [Mail Chimp] (https://mailchimp.com)

Richten Sie einen brandneuen Server/ein neues Projekt ein:

 * CD zu dem Ort, an dem Sie Ihr neues Projekt erstellen möchten

 * Erstellen Sie einen neuen Projektordner und nennen Sie ihn z.B. Newsletter-Signup.

 * Erstellen Sie innerhalb von Newsletter-Signup eine neue app.js oder server.js Datei, signup.html Datei, success.html Datei und failure.html Datei.

 * Initialisieren Sie npm mit den Standardoptionen.

 * Installieren Sie dotenv, request, express und bei Bedarf body-parser.

 * Die neu installierten Module in app/server.js einbinden.

 * Erstellen Sie eine neue express-App und richten Sie sie so ein, dass sie auf Port 3000 lauscht.

 * Sobald der Port eingerichtet ist, protokollieren Sie, wo der Server läuft.

## Verbinden Sie Ihren Server mit html

 1. Gestalten Sie Ihre signup.html mit Bootstrap und richten Sie dann die Get-Route zu Ihrer Anmeldeseite ein

 > Falls Sie externes CSS verwendet haben, werden Sie sehen, dass es nicht funktioniert.

 Damit Ihr Server statische Dateien wie CSS und Bilder ausliefern kann, müssen Sie eine spezielle Funktion von Express verwenden, und zwar die Funktion static.

 Erstellen Sie also einen öffentlichen Ordner und verwenden Sie diesen in Ihrer app/server.js

 Hinweis: Erstellen Sie eine CSS- und ein Bild Ordner, damit alles ordentlich bleibt

 ```js
app.use(express.static("public"));
 ```
 Ändern Sie nun Ihr HTML in etwas wie dieses:

 ```html
    <link rel="stylesheet" href="css/style.css">
 ```
 Dasselbe gilt für Bilder

  ```HTML
    <img class="mb-4" src="images/logo.png" alt="" width="72" height="57">
 ```

 2. Holen Sie die Daten aus Ihrem Forms und console.log sie

 > Wiederum wenn Sie required verwenden, installieren Sie body-parser, wenn Sie imports verwenden, schauen Sie sich Calculator project an, wie man body parst


Jetzt haben Sie alle Vorbereitungen getroffen, um Ihre Anmeldeseite einzurichten und die Daten zu erhalten, die in den Eingaben enthalten sind.

## Mailchimp einrichten

[Mailchimp-Dokumente](https://mailchimp.com/developer/marketing/api/)

[was Sie brauchen](https://mailchimp.com/developer/marketing/api/list-members/)

Was Sie tun müssen:

 * API-Schlüssel abrufen und in .env speichern

 > mailchimp.com => Profil => Extras => API-Schlüssel

 * Holen Sie Ihre Listen-ID und speichern Sie sie in .env

   > mailchimp.com => Zielgruppe => alle Kontakte => Dropdown-Einstellungen => Name der Zielgruppe und Standardwerte => Zielgruppen-ID auf der rechten Seite


## Anfrage an mailchimp senden

 * Post request create a new object with input fields you get

 > [docs](https://mailchimp.com/developer/marketing/api/list-members/list-members-info/) scrollen Sie ein wenig nach unten und öffnen Sie die Eigenschaften der Mitglieder, um zu sehen, welche Schlüssel Sie verwenden müssen

 > für Merge-Felder gehen Sie zu Audience fields und *|MERGE| * tags

 * Formatieren Sie zu flatpack(stringify)

 * Stellen Sie eine Anfrage mit https 

Zuerst benötigen Sie den url endpoint

 > [urls](https://mailchimp.com/developer/marketing/docs/methods-parameters/) am Anfang der url steht usX ersetzen Sie das X mit der Nummer, die in Ihrem api Schlüssel angegeben ist

Zweitens benötigen Sie Optionen

> Methode, Authentifizierung

Schließlich 

 * HTTP-Anfrage stellen und eine Antwort erhalten

 > request.send()

 > request.end()


Wenn Sie zu mailchimp gehen, sollten Sie ein neues Mitglied erhalten

## Erfolgs- und Fehlerseiten hinzufügen

 * Use response.statusCode to send user to specific pages

 * Um failed.html zu testen, brechen Sie einfach Ihren Api-Schlüssel

 * Fügen Sie eine Schaltfläche hinzu, um den Benutzer mit Hilfe der Formularaktion und -methode zurück zur Startseite zu schicken.

 * Route für Fehler erstellen

 * res.redirect verwenden