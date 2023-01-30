# useCallback für Funktionsabhängigkeiten
​
Jetzt haben wir gesehen, wie Abhängigkeiten funktionieren und im Übrigen können wir mehr als eine Abhängigkeit in unserem useEffect haben (es wird ausgelöst, wenn eine von ihnen sich ändert). Wenn wir zusätzliche dynamische Werte oder Zustände darin verwenden.

Aber was ist, wenn eine dieser Abhängigkeiten eine Funktion ist, zum Beispiel möchten wir all unsere Abruflogik in eine eigene Funktion auslagern und auf diese Weise können wir die Funktion immer wieder verwenden, indem wir sie in der Zukunft aufrufen. Und es bedeutet auch, dass wir eine asynchrone Funktion mit dem Schlüsselwort async erstellen können. Denk daran, dass wir diese Funktion direkt innerhalb von use effect async nicht erstellen können, das kann zu Problemen führen, wenn wir diesen useEffect-Hook verwenden.

Aber wenn wir die Abruflogik in eine eigene Funktion auslagern, können wir diese Funktion nicht in eine asynchrone Funktion umwandeln. Da wir es bereits async-await verwenden, wenn wir Vite verwenden, werden keine Warnungen angezeigt, aber wenn wir CRA verwenden, kann es zu folgenden Problemen kommen:

```React Hook useEffect has a missing dependency: 'fetchTrips'. Either include it or remove the dependency array...```

Da wir innerhalb des useEffect-Hooks diese fetchTrips-Funktion aufrufen und da wir uns auf einen Außenwert, eine außerhalb des Geltungsbereichs dieses useEffect-Hooks deklarierte Funktion, verlassen, sollte sie als Abhängigkeit aufgeführt werden.

Lass uns das zunächst zum Abhängigkeitsarray hinzufügen.
​
```jsx
  useEffect(() => {
    fetchTrips();
    console.log("useEffect fired");
    console.log(trips);
    // Hinzufügen von fetchTrips in das Array
  }, [url, fetchTrips]);
```

Jetzt ist die Warnung weg, aber wir haben eine unendliche Schleife.

Aber warum?

Nun, wenn wir die fetchTrips-Funktion als Abhängigkeit von useEffect kennzeichnen, bedeutet das, dass die Funktion jedes Mal geändert wird, wenn wir diese useEffect-Funktion erneut ausführen. Also, wenn der Component zum ersten Mal geladen wird, feuern wir die useEffect-Funktion zum ersten Mal, wie wir es immer tun und holen die Daten und updaten dann die states. Jetzt, wenn wir den State updaten, evaluiert der Component erneut, das bedeutet die Component-Funktion läuft erneut und jetzt feuert unser useEffect-Hook unsere Funktion erneut ein zweites Mal.

Die Verwendung der fetchTrips-Funktion als Abhängigkeit führt zu einer unendlichen Schleife, da jede Änderung im Zustand die Komponentenfunktion erneut ausführt und somit die useEffect-Funktion erneut aufruft, was wiederum die fetchTrips-Funktion aufruft und so weiter. Um dieses Problem zu beheben, kann die fetchTrips-Funktion in eine separate useEffect-Funktion ausgelagert werden, die nur dann aufgerufen wird, wenn bestimmte Bedingungen erfüllt sind, oder wir können die useCallback-Hook verwenden, um sicherzustellen, dass die fetchTrips-Funktion nur dann neu erstellt wird, wenn sich eine Abhängigkeit ändert.

Aber warum macht es das? Die URL hat sich nicht geändert und die fetchTrips-Funktion hat sich auch nicht geändert, sie sind die beiden Abhängigkeiten und es sei denn, eine von ihnen hat sich seit der letzten Komponentenauswertung geändert, sollten wir die useEffect-Funktion nicht erneut aufrufen. Technisch gesehen hat sich jedoch eine von ihnen jedes Mal geändert, wenn unsere Komponente neu evaluiert wird. Alle Funktionen oder regulären JavaScript-Variablen, die innerhalb dieser Komponenten deklariert werden, werden neu erstellt und an einem anderen Speicherort gespeichert. **Wenn React die alte Funktion mit der neuen Funktion vergleicht, vergleicht es nicht den Namen der Funktion, den Inhalt oder die Funktion selbst.** Wenn es das täte, würde es wahrscheinlich sagen, dass die Funktion sich nicht geändert hat und wir hätten dieses Problem nicht. Stattdessen vergleicht es die Verweise(references) auf diese Funktionen.

Der Verweis ist grundsätzlich etwas, das auf einen Wert im Speicher verweist. Diese Verweise(references) gelten nicht als gleich, da sie auf zwei verschiedene Orte verweisen.

tl;dr **Da es im Speicher anderswo gespeichert wird, ändert es sich ständig.**

Da wir Verweise(references) auf diese Weise bei jeder Neubewertung unseres Komponents vergleichen, sagt useEffect: "Hey, die Funktion ist anders als beim letzten Mal, also ruiniere ich die Karriere dieser Person."

![Gooby Be like](../images/gooby.jpg)

Die Schritte, die im Hintergrund ablaufen:

> Der Zustand löst eine Neubewertung des Komponents und eine neue Version aus.

> fetchTrips-Funktion wird im Speicher erstellt.

> Die Verweise(references) werden verglichen, die Szene ist anders.

> useEffect feuert erneut, da die Funktion eine Abhängigkeit ist und so weiter immer wieder und wieder...

Dieses Verhalten wäre dasselbe für jeden anderen Verweis, der in JavaScript eingegeben wurde. Dazu gehören Funktionen, wie wir bereits gesehen haben, aber auch Objekte und Arrays. Wenn wir also ein Objekt oder ein Array als Abhängigkeit hätten, würden wir dasselbe Verhalten sehen. **Objekte und Arrays können in den useState-Hook eingeschlossen werden, was diesen Vergleich von Verweisen aufhebt.**

Aber mit Funktionen können wir etwas anderes tun. Alles, was wir tun müssen, ist, die Funktion in einem anderen React-Hook namens useCallback zu umwickeln.

erster Import:
```jsx
import { useState, useEffect, useCallback } from "react";
```

Dann können wir zur fetchTrips-Funktion gehen und alles, einschließlich des async await-Teils, in useCallback einwickeln:

```jsx
// Wir starten vor dem async und unsere Klammern enden nach dem Schließen der geschweiften Klammern.
const fetchTrips = useCallback(async () => {
    try {
      await delay(500);
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
  });
```

Jetzt hovern wir über den useCallback. Und was es tut, ist im Grunde eine zwischengespeicherte Version einer Funktion, die wir ihm als Argument übergeben. Und bei jeder Auswertung des Komponents wird diese zwischengespeicherte Funktion nicht erneuert und daher nicht von der useEffect-Schnur als geändert angesehen, die daher nicht erneut ausgelöst wird.

Jetzt gibt es noch eine Sache, die wir tun müssen. Der useCallback-Hook hat auch ein Abhängigkeitsarray als zweites Argument und dieses Abhängigkeitsarray wird der useCallback-Uhr sagen, wann es eine neue Version der Funktion innerhalb davon erstellen sollte. Wir werden die gleichen Daten erneut abrufen, daher sollten wir die URL als Abhängigkeit für diesen useCallback übergeben. Und auf diese Weise wird jedes Mal, wenn die URL sich ändert, der useCallback eine neue Version der Funktion mit dieser neuen URL erstellen.

```jsx
const fetchTrips = useCallback(async () => {
    try {
      await delay(500);
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
    // hier
  }, [url]);
```

Da die Funktion eine Abhängigkeit des useEffect ist, wird sie den useEffect auslösen, die Funktion erneut auszuführen und das wird unsere Fetch-Funktion aufrufen, um die neuen Daten abzurufen. Wir benötigen die URL nicht mehr als Abhängigkeit des useEffect, da bei Änderung der URL und Erstellung einer neuen Funktion dies allein den useEffect auslöst.

```jsx
  useEffect(() => {
    fetchTrips();
    console.log("useEffect fired");
    console.log(trips);
    // hier wird die Url gelöscht
  }, [fetchTrips]);
```

Merke dir: Wenn du einen Verweistyp wie eine Funktion, ein Objekt oder ein Array als Abhängigkeit verwendest, wird React sehen, dass die Abhängigkeit bei jeder Komponentenauswertung geändert wird. Im Falle von Objekten und Arrays kannst du sie in deinem Status einhüllen, um das zu kontern.