# Was ist Firebase?

Wir sind an einem Punkt angelangt, an dem du hoffentlich anfängst, dich mit React und dem Erstellen von React-Projekten ein wenig wohler fühlst.

Wir haben uns State Hooks, Custom Hooks, den React-Router und die Context-API sowie andere Dinge wie Reducer angesehen.

Aber bisher haben wir immer mit lokalen Daten gearbeitet, egal ob diese in einer Art von Status in der Anwendung selbst oder in einer json-Datei gespeichert sind.


Aber in der Realität werdet ihr zweifellos mit einer Datenbank arbeiten müssen, in der ihr eure Daten speichern und organisieren könnt.

Da wir noch nicht mit dem Backend angefangen haben, möchte ich, dass ihr alle Beispiele aus dem wirklichen Leben ausprobiert, also was ist der beste Weg, um es mit minimalen Backend-Kenntnissen zu tun? Das ist richtig, kostenlos Google [Firebase](https://firebase.google.com/) zu verwenden.


Firebase stellt uns auch andere kostenlose Dienste zur Verfügung, z. B. einen Authentifizierungsdienst und einen Dateispeicherdienst. Es bündelt all diese verschiedenen Funktionen in einem Produkt, Firebase, und fungiert somit im Wesentlichen als das Backend unserer Websites. Und das ist für uns als Front-End-Entwickler großartig, denn es bedeutet, dass wir uns keine Gedanken über die Einrichtung eines eigenen Servers oder die Erstellung einer eigenen API für die Interaktion mit Daten oder die Implementierung einer eigenen Authentifizierungslösung usw. machen müssen.

Firebase übernimmt all diese schweren Aufgaben für uns, und wir können diese Funktionalität einfach in unser Projekt einbauen.


Als Erstes musst du dich für ein kostenloses Konto anmelden.

Sobald du einen Account hast, siehst du diesen Link zur Konsole. Klicke darauf, um zu deiner Firebase-Konsole zu gelangen.

Deine Firebase-Konsole ist im Grunde ein Ort, an dem alle deine verschiedenen Firebase-Projekte aufgelistet sind, die du erstellt hast. Normalerweise hast du für jede komplett neue Website, die du erstellst, ein neues Firebase-Projekt, um das Backend dieser Website zu betreiben.


Aber ein Firebase-Projekt kann auch für mehrere Fronten und Websites verwendet werden.

Ich könnte zum Beispiel eine Website und eine mobile App haben. Beide könnten dasselbe Backend-Firebase-Projekt verwenden, da sie wahrscheinlich dieselben Daten und dieselben Zwecke nutzen.


Ich werde jetzt ein neues Projekt erstellen, das wir El Cook Site nennen, und dann auf Weiter klicken.

Jetzt werden wir gefragt, ob wir Google Analytics für das Projekt aktivieren wollen.

Das brauchen wir nicht, also klicken wir es weg.

![now we wait](./images/wait.webp)


Klickt auf Weiter.

Und das bringt uns zu unserem Projekt-Dashboard.

Auf diesem Dashboard (sidenav) können wir alle verschiedenen Funktionen und Dienste sehen, die uns zur Verfügung stehen, wie Authentifizierung, Firestore-Datenbank und eine Echtzeit-Datenbank. Speicher, Hosting-Funktionen, maschinelles Lernen usw. und viele andere Dinge, die wir uns hier ansehen können.


Dieses Projekt-Dashboard ist also eine Art Kontrollzentrum für das Firebase-Projekt, das wir eingerichtet haben und das nun als Backend für unsere React-Anwendung dienen wird.


Zu eurer Information: Wenn ihr dies in der Zukunft lest, könnte die Benutzeroberfläche oder das Design etwas anders sein, aber die Funktionalität wird im Allgemeinen ziemlich gleich sein. Lest also die mf-Dokumentation!
