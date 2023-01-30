# Warum wir eine Cleanup- / Aufräumfunktion brauchen

Schlüsselwörter, die Sie vielleicht noch nicht kennen => componentDidMount() componentWillUnmount()

Beide stammen aus der Zeit, als React noch klassenbasiert war

tl;dr:

componentDidMount bedeutet, dass unsere Komponente im DOM reingepusht/ rendert wurden.

componentWillUnmount bedeutet, dass unsere Komponente aus dem DOM entfernt wurden.

​
## Zurück zum Thema

Derzeit funktioniert unser "useFetch! hier wirklich gut. Aber es gibt ein Problem damit, und das hat damit zu tun, was passiert, wenn wir versuchen asynchron , den Zustand in einer Komponente zu aktualisieren, nachdem sie abgehängt wurde.

Um das zu demonstrieren, gehe ich zu der App-Komponente hier, wo wir die Liste ausgeben:

```jsx
​
function  App() {
	return (
	<>
	<TripList  />
	</>
	);
	}
​
```

Und was ich tun werde, ist einen Zustand innerhalb dieser Funktion zu erstellen. Um "useState" zu verwenden, muss ich es wie immer oben importieren.

```jsx
​
import {useState} from  'react';
​
function  App() {
const [showTrips, setShowTrips] = useState(true);
return (
<>
<TripList  />
</>
);
}
​
```

Nun möchte ich die Reiseliste nur ausgeben, wenn "show trips" wahr ist.

```jsx
​
{showTrips && <TripList  />} 
​
```

Jetzt möchte ich eine Schaltfläche erstellen, die diesen Wert auf false umschaltet.

```jsx
​
<button  onClick={() =>  setShowTrips(false)}>hide Trips</button>
​
{showTrips && <TripList  />}
​
```

Denken Sie also daran, wenn wir die Seite zum ersten Mal laden. 
TripList wird angezeigt, weil showTrips wahr ist. 
Und wenn dies angezeigt wird und wir den useFetch-Hook verwenden, werden die Daten automatisch abgerufen. 
Was passiert, wenn wir auf diese Schaltfläche klicken, während der Abruf läuft?
Um das am besten zu sehen, müssen wir die Geschwindigkeit drosseln und bevor alles geladen wird, die Schaltfläche auslösen

Vite wird wie immer ruhig sein, aber wenn wir dies mit CRA tun, werden wir erhalten:

```Warnung: Eine React-Zustandsaktualisierung kann nicht auf einer nicht eingebundenen Komponente durchgeführt werden. Dies ist ein No-op, aber es deutet auf ein ```` **Speicherleck** ``` in Ihrer Anwendung hin. Um dies zu beheben, brechen Sie alle Abonnements und asynchronen Aufgaben in einer useEffect Aufräumfunktion bei TripList`` ab.

[Warum Speicherlecks schädlich sein können](https://de.wikipedia.org/wiki/Speicherleck)

[Thrashing-Seitenflattern](https://de.wikipedia.org/wiki/Seitenflattern)

P.S. Bei jeder Art von Speicher handelt es sich um RAM(Random Access Memory) => Arbeitsspeicher

### Was geht also vor sich?

> Wir laden die Seite

> die Komponente TripList wird geladen 

> useFetch wird ausgelöst 

> der Fetch findet im Hintergrund statt 

> In der Zwischenzeit, während der Fetch läuft, lösen wir die Schaltfläche zum Entfernen von TripList aus 

> Aber der Fetch läuft immer noch im Hintergrund 

> der Fetch ist abgeschlossen und versucht, den Status in der Komponente zu aktualisieren, die wir gerade entfernt haben.

​
Das können wir nicht tun, das ist illegal, [Zucc Police will get ya](https://youtu.be/9ZrAYxWPN6c).

Wir müssen also eine so genannte Aufräumfunktion verwenden, um alle asynchronen Aufgaben wie die Fetch-Anfrage abzubrechen, damit nicht versucht wird, den Status zu aktualisieren.

## Abbruch von Fetch-Anfragen

Eine Aufräumfunktion ist nur eine Funktion, die wir innerhalb eines useEffects zurückgeben, und diese Rückgabe wird die Komponente immer mit dem useEffect-Hook bei mounts (**componentDidMount**) ausführen.
Das heißt, wenn die TripList-Komponente eingehängt wird, wird ihre Aufräumfunktion ausgelöst.

in unserem useEffect in useFetch:

```jsx
​
useEffect(() => {
​
//Einrichtung der Abbruchsteuerung in einer Konstante
​
const  controller = new  AbortController();  
​
// Rest des Codes  
​
// wir haben bereits optionen und methoden wie headers post get etc. gesehen. hier werden wir auch unseren controller einstellen, damit er bei bedarf einen abbruch signalisieren kann  
​
const  res = await  fetch(url, {signal:  controller.signal});
​
// jetzt wird die Abrufanfrage mit unserem Abbruch-Controller verknüpft  
​
// Rest des Codes
​
fetchData();  
​
// hier brechen wir alle asynchronen Aufgaben oder Abonnements für eine Art von Datenstrom ab
​
return () => {
​
// es heißt abort controller in JavaScript regular js hat nichts mit react zu tun 
​
// und schließlich brechen wir ab
​
controller.abort()
}
}, [url]);
​
```

Diese Methode prüft alle Abrufanforderungen, die mit diesem Abbruch-Controller verbunden sind, und hält sie sofort an.

Jetzt können wir auch einen Fehler in unserem catch übergeben:
​
```jsx
​
} catch (e) {
​
if(e.name === "AbortError"){
​
		console.log("The fetch was aborted");
​
		}else{
​
        //nicht notwendig in else zu setzen, aber wir können dies tun
        
        setError(e);
​
		setIsPending(false);
​
		}
​
}
​
```

Wir brauchen jetzt keinen Status für Fehler zu übergeben, es sei denn, wir hätten eine zusätzliche Komponente (Best Practice), um unsere Fehler einzeln anzuzeigen. 
Unsere TripList wurde abgebrochen/ungemountet, also wird alles sowieso unsichtbar sein, aber mit unserer console.log werden wir definitiv wissen, dass es funktioniert hat und wir sollten keine Warnungen (KEK VITE) oder Speicherlecks bekommen und unsere Komponente kann sicher unmounten.