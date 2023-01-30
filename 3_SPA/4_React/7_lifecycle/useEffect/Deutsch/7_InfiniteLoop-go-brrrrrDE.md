# Eine Erinnerung, was zu tun ist, wenn man Endlosschleifen bekommt

Es ist wichtig zu beachten, dass useEffect dazu neigt, Endlosschleifen zu erzeugen, wenn etwas anderes als das verwendet wird, was es in seinem Abhängigkeits-Array erwartet. Es gibt eine große Fallgrube voller Stacheln am Boden, in die man fallen kann, wenn man sich dessen nicht bewusst ist. Das hat alles mit der Übergabe von Referenztypen als Argumenten wie Objekten oder Arrays zu tun und wurde bereits in der Vergangenheit kurz erwähnt. Im Moment geben wir eine URL als Argument für den useEffect-Hook ein.

```jsx
/* rest of the code*/ = useFetch(url);
```

Und die Art und Weise, wie wir das tun, ist in Ordnung. Wir übergeben nur einige Zustände, so dass die URL ein Zustand in der TripList-Komponente war, und wir übergeben diesen Zustandswert als Argument in useFetch, das im useEffect verwendet wird.

**BUT** und das ist ein großes **BUTT**, wenn wir ein Argument, das kein Zustand ist, als useEffect-Abhängigkeit verwenden, würden wir in Schwierigkeiten geraten

Lassen Sie mich also zunächst ein zweites Argument, eine Zeichenkette, in den useFetch-Haken einfügen:

```jsx
  const { data: trips, isPending, error } = useFetch(url, "Bob");
```

Dann gehe ich zu useFetch über und akzeptiere es als Argument namens name:

```jsx
                            //right here
export const useFetch = (url, name) => {
```
Dann möchte ich diesen Namen in der Funktion useEffect verwenden, um ihn auf der Konsole zu protokollieren.

Also innerhalb von useEffect in useFetch:

```jsx
useEffect(() => {
    console.log(name);
```
Und da wir nun diesen externen Wert verwenden, der sich innerhalb der useEffect-Funktion ändern kann, sollten wir ihn unten als Abhängigkeit deklarieren.

Übergeben wir also diesen Namen am Ende.

```jsx
   };
  }, [url, name]);
```

Und jetzt können wir sehen, dass alles in Ordnung ist.
Es gibt keine Endlosschleifen oder etwas Ähnliches.

Was wäre nun, wenn wir anstelle eines primitiven Wertes für useFetch ein Objekt oder Array verwenden?

Nehmen wir an, wir wollen ein options-Objekt übergeben, wie wir es zu Beginn des Abrufs getan haben, das unsere Header, Post-Methoden usw. enthält.

Beginnen wir mit der Änderung von bob:

```jsx
  /*rest of the code*/ = useFetch(url, { type: "GET" });
```

Jetzt übergeben wir also einen Referenzwert in den Hook, ein Objekt, das sich nun innerhalb des Hooks befindet.

**HINWEIS!!!** bevor wir fortfahren, dies könnte deinen Browser zum Absturz bringen, sei also vorsichtig!

In unserem useFetch Hook benennen wir nun name in options um:

```jsx
export const useFetch = (url, options) => {
```
change everything with "name" to "options" now:
```jsx
 useEffect(() => {
    console.log(options);
    
    // REST OF THE CODE
      
  }, [url, options]);
```
## TADA, infinite loop go brrrrrrrrrrr...

Das passiert, weil ein Objekt ein Referenztyp ist und wenn React eine Komponentenfunktion neu bewertet, wird useEffect einen Referenztyp als geänderten Wert erkennen, obwohl das Objekt selbst gleich ist.

Dies geschieht aus dem gleichen Grund, über den bereits gesprochen wurde, wenn Funktionen als Abhängigkeiten verwendet werden. (Speicher-Cache)

Es ist also wichtig bei jedem Referenztyp zu beachten: Objekte, Arrays und Funktionen. Wenn sie direkt als Abhängigkeiten verwendet werden, lösen sie eine Endlosschleife aus.

Wir haben bereits gesehen, wie man das mit Funktionen umgeht, indem man den useCallback-Hook verwendet. 

## Es gibt ein paar Optionen für Objekte und Arrays.


Erstens, sollten wir das Objekt in einen Zustands-Hook verpacken und dann einfach den Zustand als Argument an den useFetch-Hook oder den von uns verwendeten benutzerdefinierten Hook übergeben. Denn jeder Zustandswert, auch Objekte und Arrays, werden keine Endlosschleife auslösen.

Die andere Möglichkeit, wenn wir useState nicht verwenden wollen, besteht darin, den Wert in einen useRef-Hook innerhalb des benutzerdefinierten Hooks selbst zu verpacken. Erinnern wir uns daran, dass wir den useRef-Hook bereits verwendet haben, als wir direkten Zugriff auf einen Dom-Knoten haben wollten, aber wir können ihn auch für diesen Zweck verwenden.

Wenn wir also wissen, dass wir ein Objekt oder ein Array als Argument in unserem benutzerdefinierten Hook erhalten werden, können wir einen dieser Ansätze verwenden.

Als Erstes importieren wir also useRef aus react am Anfang der Seite.

```jsx
import { useState, useEffect, useRef } from "react";
```

 Ich werde den Parameter hier in _options umbenennen. So gibt es keine Namenskonflikte.

 ```jsx
export const useFetch = (url, _options) => {
```

und dann können wir sie unter den anderen States verwenden.

```jsx
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  // create a new constant called options and set it equalt to useRef
  const options = useRef(_options);
```
Und schließlich müssen wir am Ende .current sagen, um den aktuellen Wert der Referenz zu erhalten.

```jsx
  const options = useRef(_options).current;
```

In diesem Fall verwenden wir also kein ref, um auf ein DOM-Element zuzugreifen, sondern wir nutzen die Vorteile von useRef, um unser Objekt zu verpacken. Und wenn wir das tun und die React-Komponenten neu bewertet werden. Die ref-Werte werden nicht bei jeder Auswertung als neu oder anders angesehen.
Wenn wir sie also als Abhängigkeiten wie hier für einen Referenzwert verwenden, wird die useEffect-Funktion nicht erneut ausgeführt.

**Wenn wir im Browser die Konsole öffnen, sehen wir die Endlosschleife nicht.**

Dies ist wahrscheinlich nicht etwas, das wir sehr oft tun müssen, aber ich wollte euch dies nur zeigen, damit ihr, falls ihr auf dieses Problem stoßt, eine Lösung habt.


