# Verbinden mit Firebase 🔥

Wir haben ein Firebase-Projekt erstellt, das als Backend für unsere React-Anwendung dienen wird.

Das Frontend ist nun die React-Anwendung, an der wir zuvor gearbeitet haben (recipe-app).

Le Cook und was wir tun müssen, ist unsere Front-End-Anwendung mit dem Back-End-Firebase-Projekt zu verbinden, damit sie kommunizieren können und wir die Datenbank erreichen und die Daten abrufen können. Der erste Schritt dazu ist, das Firebase-Paket lokal in unserem React-Projekt zu installieren.

Um das zu tun, öffnet man ein Terminal.
Jetzt werden wir eine bestimmte Version von Firebase installieren. Vergewissern Sie sich, dass Ihre Version die gleiche ist wie meine. (Firebase ist derzeit auf 9, aber wir haben nicht mehr viel Zeit, also werden wir die Version verwenden, die ich kenne)
Stellt sicher, dass ihr euch im richtigen Verzeichnis im Stammverzeichnis des Projekts befindet und gebt dann ein:

```bash
npm install firebase@8.5
```

Wenn ihr Version neun verwenden wollt, könnt ihr das tun, aber es wird etwas anders sein, weil es einen modulareren Ansatz hat. Lest also die Dokumentation? oder fragt [**chatgpt**](https://chat.openai.com/chat)😎?!

Während der Installation müssen wir unser Projektkonfigurationsobjekt für das Projekt abrufen, das wir auf Firebase eingerichtet haben.

Dieses Konfigurationsobjekt enthält eine Projekt-ID, damit wir uns mit diesem speziellen Firebase-Backend-Projekt verbinden können. Wenn du sie ausblenden möchtest, kannst du .env react von Anfang an mit einbinden, aber im Moment müssen wir eine neue Frontend-App für dieses Projekt registrieren, um das Konfigurationsobjekt zu erhalten.

Um das zu tun, klickt man einfach auf das React-Fragment-Symbol (</>), und wenn man den Mauszeiger über das Symbol bewegt, wird es _Web_ genannt, und es wird nach einem Namen für die Web-App gefragt.

Dieser Name ist nicht derselbe wie der Name für das Firebase-Projekt. Diesen Namen haben wir bereits vergeben.

Was hier abgefragt wird, ist der Name der Frontend-Anwendung, die wir jetzt mit unserem Firebase-Projekt verbinden werden.

Ihr könnt sie also nennen, wie ihr wollt. Ich werde sie "El Cooker React App" nennen. Wir werden auch nicht die Option zum Einrichten des Firebase-Hostings aktivieren. Das können wir später machen.

Klickt auf App registrieren.

Nachdem wir das getan haben, sollte es uns zeigen, wie wir Firebase jetzt im Frontend verwenden können.

Wir haben es bereits installiert, also sehen wir als nächstes alle Konfigurationsobjekte, die wir später brauchen werden. Aber macht jetzt noch nichts damit. Klickt einfach auf continue to console. Und ihr könnt jetzt sehen, dass wir eine App ganz oben für dieses Backend registriert haben.

Wenn wir also darauf klicken und dann auf das Zahnradsymbol auf der rechten Seite gehen, dann ein wenig nach unten scrollen, finden wir das gleiche Objekt, das wir brauchen. Klickt auf config radial check und kopiert es.

Jetzt können wir dieses Konfigurationsobjekt verwenden, um von unserer Anwendung aus eine Verbindung zum Backend herzustellen.

Um dies zu tun, erstelle ich im Ordner source(src) einen neuen Ordner namens firebase.

Darin erstellen wir eine neue Datei namens config.js

Innerhalb der config.js müssen wir Firebase, das wir gerade installiert haben, importieren:

```js
import firebase from "firebase/app";
import "firebase/firestore";
```

Fügt dann die von Firebase kopierte Konfiguration ein:

```js
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,

  authDomain: process.env.REACT_AUTH_DOMAIN,

  projectId: process.env.REACT_PROJECT_ID,

  storageBucket: process.env.REACT_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_MESSAGE_SENDER_ID,

  appId: process.env.REACT_APP_ID,
};
```

Danach werden wir Firebase initialisieren:

```js
// init firebase

firebase.initializeApp(firebaseConfig);
```

Diese Methode stellt also eine Verbindung zu unserem Firebase-Backend her.

Und danach, sobald die Verbindung hergestellt ist, können wir alle Dienste nutzen, die wir wollen, wie z. B. den Firestore.

Wir müssen auch diese Dienste initialisieren.

Lasst uns also einen weiteren Initialisierungsdienst für Firestore wie folgt durchführen:

```js
// init services

const recipeStore = firebase.firestore();
```

Als Nächstes werden wir aus dieser Datei exportieren, um sie später in einer anderen Datei verwenden zu können:

```js
//export

export { recipeStore };
```

Wenn unsere Anwendung also läuft, wird **firebase.initializeApp(firebaseConfig);** uns mit unserem Firebase-Backend verbinden. Und sobald das geschehen ist, haben wir auch den **firebase.firestore();** Service initialisiert und wir verwenden seine Konstante in der Zukunft in allen Dateien, um mit dem firestore oder der Datenbank zu interagieren.
