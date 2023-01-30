##  Schritt Eins
​
Entferne alles Unnötige (falls in CRA).
​
Dann verwenden wir das JSON-Server-Paket, da wir unsere eigene API haben möchten, aber noch nicht erstellen können, da wir das Backend noch nicht wirklich kennen. 
​
Globale Installation für JSON-Server.
​
```bash
npm install -g json-server
```
​
## Schritt Zwei lege dir eine JSON-Datei an
​
Irgendwo im Root-Ordner erstellen wir unsere JSON-Datei, die als unsere lokale Datenbank dient. Im Root-Ordner erstellen wir einen Ordner "Data". Füge eine Datei namens "db.json" hinzu. Füge  folgendes in die Datei ein, damit wir einige Daten zum Abrufen haben.
​
```json
{
    "trips": [{
            "id": 1,
            "title": "2 Night Stay in Bangkok",
            "price": "$180"
        },
        {
            "id": 2,
            "title": "3 Night Stay in New York",
            "price": "$290"
        },
        {
            "id": 3,
            "title": "5 Night Stay in Poland",
            "price": "$420"
        },
        {
            "id": 4,
            "title": "3 Night Stay in DifneyLand",
            "price": "$3252"
        }
    ]
}
```
​
## Starten des JSON-Servers
​
​
Wir starten den Server, damit wir mit folgendem Befehl fetchen können(stelle sicher das du dich in dem Projekt-Ordner befindest) : 
​
```bash
json-server --watch ./data/db.json
```
falls du bereits in dem Ordner "data" bist nutze diesen Befehl: 
​
```bash
json-server --watch db.json
```
​
Wenn wir das ganze jetzt in unserem Browser oder Postman öffnen bekommen wir unser fetch Ergebnis.


## Env's und wie wir unsere Api-Endpunkte und Schlüssel sichern
React hat bereits alles für unsere Umgebungsvariablen(env's) vorinstalliert

Als erstes erstellen wir in unserem Root eine Datei namens .env, ja mit einem Punkt.
Darin können wir nun mehrere Variablen speichern.

Regeln für das Setzen von Umgebungsvariablen(env's):

1. Alles muss in Großbuchstaben geschrieben werden
2. SNAKE_CASE_YEET
3. Der Wert(value) kommt nach dem Gleichheitszeichen
4. Strings beginnen und enden **nicht** in Anführungszeichen

Zum Beispiel wird es so aussehen:
* API_BASE_URL=http://localhost:3000
* API_KEY=1wdsadcsacc2145
* FIREBASE_CONNCETION_KEY=12443253qweq

Wenn wir nun Vite verwenden, müssen unsere Umgebungsvariablen mit => **VITE_** beginnen.

Zum Beispiel:
* VITE_API_BASE_URL=http://localhost:3000

Wenn wir aber CRA verwenden, müssen unsere Umgebungsdaten mit => **REACT_APP_** beginnen. 

Zum Beispiel:
* REACT_APP_API_BASE_URL=http://localhost:3000

### Wie wir env's in unserem Code verwenden

Unsere Umgebungsvariablen(env's) werden global in jeder Datei verfügbar sein, so dass Wir sie in einer neuen Variablen speichern oder einfach mit einem speziellen Befehl verwenden können:

VITE
1. const url = import.meta.env.VITE_API_BASE_URL;

* So können wir die Url unseres localhost:3000 verwenden

2. oder direkt in unser Abruf(fetch) => **await fetch(import.meta.env.VITE_API_BASE_URL)**


CRA
1. const url = process.env.REACT_APP_API_BASE_URL;

* So können wir die Url unseres localhost:3000 verwenden

2. oder direkt in unser Abruf(fetch) => **await fetch(process.env.REACT_APP_BASE_URL)**


**WARNUNG: Wenn du npm run build verwendest, werden alle deine Schlüssel konvertiert und öffentlich zugägnlich gemacht. Wenn du also deine Anwendung wirklich in Vanilla HTML und JS bauen willst, sei bitte vorsichtig.**

Falls du deine CRA-Anwendung/App veröffentlichst, mach dir keine Sorgen, wenn du Vercel oder einen anderen Anbieter verwendest, kannst du alle deine Umgebungsvariablen (env's) dort manuell einrichten.

Bei Vite hingegen lies bitte die mf Docs, da ich persönlich noch keine Vite Apps veröffentlicht habe.

## Warum wir useEffect brauchen

useEffekt ist ein spezieller Hook der für das fetchen von Daten benutzt wird. 

Als erster fetchen wir ohne Hook: 
​
```jsx
import { useState } from "react";
​
export default function VanillaTripList() {
  const [trips, setTrips] = useState([]);
​
  console.log(trips);
  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((json) => setTrips(json));
  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}
```
Mit diesem Beispiel erhalten wir Endlosschleife und es wird einfach immer und immer und immer wieder abgerufen...

Das Problem ist, wie React arbeitet, wenn wir es auf State setzen, werden die Komponente neu berechnet(revaluated) / neu gestartet(reruns).

**Deshalb brauchen wir useEffect**

useEffect ist ein Hook, der es uns erlaubt, einen Seiteneffekt der Komponente auszuführen => was nicht bedeutet, dass wir unsere Komponente jedes Mal neu starten wollen.

Wir brauchen es nicht zu speichern, wir können es einfach aufrufen, da wir "Promises" verwenden. Das leere Array wird Dependency Array genannt, wir werden später darüber sprechen. Für den Moment, wenn Sie es nicht übergeben, wird es wieder eine Endlosschleife sein.

```jsx
 useEffect(() => {
    fetch("http://localhost:3000/trips")
       .then((response) => response.json())
       .then((json) => setTrips(json));
   }, []);
```

async await version

```jsx
const fetchTrips = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
    } catch (e) {
      console.log(e, e.message);
    }
  };

  useEffect(() => {
    fetchTrips();
    console.log(trips);
  }, []);
```

Oder IIFE

```jsx
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrips(data);
      } catch (e) {
        console.log(e, e.message);
      }
    })();
    console.log(trips);
  }, []);
```