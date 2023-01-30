# Jetzt, Champs, werden wir unseren eigenen Hook erstellen.

Wenn wir in der Anwendung noch weitere Komponenten erstellen würden, die auch Daten abrufen müssten, würden wir uns wiederholt denselben Code in dieser Komponente schreiben, wie wir es vorher getan haben. Wir würden also im Grunde genommen all diesen Code duplizieren. Wenn wir dann noch mehr Komponenten mit diesem Datenabruf hätten, würden wir unseren Code erneut duplizieren. Auf lange Sicht wird dies zu überladenem Code führen, der schwer zu warten und zu aktualisieren ist.

Es wäre also schön, wenn wir diese Art von Logik in eine wiederverwendbare Funktion packen könnten, die wir in jeder Komponente aufrufen können, die Daten abrufen muss.

Und das können wir tun.

**Wir können einen sogenannten benutzerdefinierten React-Hook erstellen, um jede Funktionalität zu verpacken, die wir wollen.** Wir können diesen Hook in jeder Komponente verwenden, die ihn benötigt, genau wie wir unsere anderen React-Hooks für Zustände, Auswirkungen oder Rückrufe verwenden.

## Wir werden einen benutzerdefinierten Hook erstellen, um Daten abzurufen, der alle Logik und Code zusammenfasst, die wir benötigen.

Zunächst sollten wir für benutzerdefinierte Hooks besser einen extra Ordner im src-Verzeichnis erstellen und dort arbeiten. Ich nenne meinen Hooks, du kannst ihn nennen, wie du möchtest. Innerhalb davon erstelle ich eine neue Datei => useFile.js. Wieder dieselbe Regel wie oben. **ABER JEDER REACT HOOK MUSS MIT DEM WORT use...BEGINNEN**. So erkennt React, dass es sich um einen Hook handelt und kann sie entsprechend verarbeiten. **UND BENENNE SIE NICHT WIE SCHON VORGEMACHTE REACT HOOKS WIE useState, useEffect ...**

Jetzt müssen wir zunächst einige Dinge aus React importieren:

```jsx
import {useState, useEffect} from 'react';
```

danach:
```jsx
export const useFetch = (url) => {};
```

Wenn wir diesen Hook innerhalb eines Komponents verwenden, zum Beispiel in diesem Trip-Komponent, werde ich die URL und den Punkt in den Hook einfügen und damit können wir diese URL und diesen Punkt innerhalb unseres Hooks verwenden, um diese Daten abzurufen.

Das erste, was ich innerhalb des Hooks machen werde, ist, einige Zustände zu erstellen.

```jsx
const [data, setData] = useState(null);
```

null => richtig, da kein initialer Wert für die Daten vorliegt, wird der Wert von `data` auf `null` gesetzt.

unterhalb davon verwenden wir den `useEffect` Hook:

```jsx
useEffect(() => {}, []);
```

innerhalb davon wollen wir die Daten abrufen. Wir könnten die Daten außerhalb des Effekts abrufen, aber dann müssten wir sie mit `useCallback` wie zuvor einwickeln und die Funktion als Abhängigkeit für `useEffect` angeben.

Alternativ kann man  die Funktion innerhalb von `useEffect` selbst manuell  erstellen.

```jsx
useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch(url)
        // normalerweise nenne ich es Daten, aber ich wollte eine Verwechslung mit unseren state Daten vermeiden
        const json = await res.json();
    }
}, []);
```

Man kann keine asynchronen Funktionen innerhalb von Hooks verwenden. Was ich damit meine ist, dass Ihr Hook selbst nicht asynchron sein kann `useEffect`.

```jsx
//Ich meine diese Funktion genau hier, direkt innerhalb von useEffect
//kann nicht asynchron sein
//alles im Inneren kann asynchron sein
useEffect(async() => {
 // hier kann der Code asynchron sein
 const fetchSomething = async() =>{}
}, []);
```

Jetzt aktualisieren wir unseren State: 

```jsx
useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch(url)
        const json = await res.json();
        setData(json)
        // wieder, um Verwechslungen mit setData(data) zu vermeiden 
    }
    // und zum Schluss geben wir die URL als Abhängigkeit an
}, [url]);
```

Wenn sich die URL in unserem Komponenten zu einem späteren Zeitpunkt ändert, wird diese useEffect-Funktion erneut ausgeführt. Wenn wir diesen benutzerdefinierten Hook in unserer Funktion über TripList verwenden, wird er automatisch beim ersten Auswerten dieser Komponente gefunden. Das passiert immer. Derzeit erstellen wir jedoch nur diese Funktion und rufen sie nicht auf. Um die Daten abzurufen, müssen wir sie unterhalb aufrufen.

```jsx
useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
    }
    // Aufruf außerhalb von fetchData
   fetchData();
}, [url]);
```

Und jetzt, wenn die Funktion ausgeführt wird, erstellt sie diese fetch-Daten-Funktion und wir rufen sie dann auf.

## Jetzt müssen wir nur unsere Daten aus diesem Hook zurückgeben.

Wenn man einen benutzerdefinierten Hook hat, gibt man immer irgendeine Art von Wert zurück. Wir werden unten Objekte als Rückgabe verwenden.

```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // hier passiert der Fetch
  }, []);
​
    //eine Dateneigenschaft zurückgeben, die unser Datenstatus sein wird..
    //entweder so zurückgeben
  return {data: data}
  // oder
  return {data}
  // sie sind identisch
};
```

Jetzt, wenn wir diesen Fetch verwenden, erhalten wir die Dateneigenschaft(data-Property) zurück, die der Daten Zustand(data-State) sein wird.

Schritt eins Import: 

```jsx
import { useFetch } from "../hooks/useFetch";
```
Dann können wir folgendes löschen: 

```jsx
const [trips, setTrips] = useState([]);
```

Danach können wir den url-Zustand aufrufen und unsere URL als Parameter übergeben:

```jsx
useFetch(url);
```

Als nächstes wollen wir unsere Dateneigenschaft(data-Property) destrukturieren: 
​
```jsx
const {data} = useFetch(url);
```

Jetzt holen wir uns die Daten von diesem useFetch und legen sie in diese URL. Sie sollten alle Trips enthalten, die wir von dem Endpunkt bekommen. Wir können jetzt unseren alten Fetch entfernen.

```jsx
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const fetchTrips = useCallback(async () => {
    setLoading(true);
    try {
      await delay(500);
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
  }, [url]);
​
  useEffect(() => {
    fetchTrips();
    console.log("useEffect fired");
    console.log(trips);
  }, [fetchTrips]);
```

Als nächstes müssen wir die trips.map-Variable in data.map ändern oder wir können ihr einfach einen Namen trips in der Destrukturierung geben:

```jsx
const {data: trips} = useFetch(url);
```

Jetzt funktioniert es nicht, da der Wert unserer Daten für die ersten ms beim Abrufen Null ist, um dies zu verhindern, setzen wir entweder unseren State in useFetch auf Array.

```jsx
                      //geändert in [] von null
const [data, setData] = useState([]);
```

oder besser, bevor wir map aufrufen, setzen wir trips && trips.map.

```jsx
{trips && trips.map(
    /*Rest des Codes*/
    )}

```

oder 

```jsx
trips?.map((trip) => (
```

Jetzt können wir mit diesem einzelnen Hook weiterhin Daten in alle unseren Komponenten abrufen, ohne denselben Code erneut schreiben zu müssen.