# Jetzt können wir unsere schönen Loader zurückbringen.

Dieses Mal werden wir das Laden in unseren benutzerdefinierten useFetch Hook einfügen, damit wir nicht überall dieselben Loader wiederverwenden müssen.

Der erste Schritt, den wir benötigen, ist ein neuer Zustand innerhalb unseres useFetch.js

```jsx
const [isPending, setIsPending] = useState(false);
```

Genau wie zuvor werden wir den Zustand(state) auf "true" setzen, wenn der ursprüngliche Fetch beginnt, und ihn nach dem Abrufen der Daten wieder auf "false" zurücksetzen. Innerhalb unseres useEffect in useFetch:
​
```jsx
useEffect(() => {
    const fetchData = async () => {
        // Hier beginnt der Fetch also setzen wir setIsPendingauf true
        setIsPending(true)
​
      const res = await fetch(url);
      const json = await res.json();
​
      setData(json);

      // am Ende setzen wir setIsPending wieder auf false
      setIsPending(false)
    };
    fetchData();
  }, [url]);
​
  // So können wir den ausstehenden / Ladezustand an anderer Stelle verwenden, ansonsten müssten wir ihn zusammen mit unseren Daten übergeben.
​
  return { data, isPending };
```

Jetzt können wir im TripList-Komponenten den isPending Zustand extrahieren und es verwenden um einen Ladebildschirm oder eine Nachricht anzuzeigen, wenn die Daten noch geladen werden.

```jsx
const { data: trips, isPending } = useFetch(url);
```

Als Nächstes werden wir, wie zu Beginn, das logische && für das Laden verwenden
oberhalb unserer Trips ul und unter unserem Titel können wir dies setzen

```jsx
{isPending && <h3>Loading...</h3>}
```


Jetzt wird jedes Mal, wenn der Fetch ausgelöst wird, ein Ladebildschirm angezeigt.

Hinweis: Um längere Ladezeiten ohne Erstellung einer extra Funktion wie am Anfang zu simulieren, kann man die Dev-Konsole im Browser öffnen, dann zu Netzwerk => Drosselung => 3G gehen und die Seite aktualisieren (die Seite wird sehr, sehr langsam sein).

**Dev-Konsole_ => _Netzwerkanalyse_ => _Drosselung_ => _3G_ oder langsamer**

Auf Chrome funktioniert Drosselung deutlich besser als auf Firefox Developer Edition. Ich hatte 30 Minuten lang Probleme, meine Seite auf 4G in Firefox zum Laden zu bringen.