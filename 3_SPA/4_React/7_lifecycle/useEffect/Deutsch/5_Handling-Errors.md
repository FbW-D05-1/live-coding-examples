# Let's Show dem Erros 🥵
![Errors got hands](../images/Damn-Errors.jpg)
​
Genau wie beim Pending State ist es wichtig, Fehler zu haben, denn unsere Nutzer wollen nicht verwirrt dasitzen und sich fragen, warum ihre Seite einfach leer ist oder unendlich lange lädt.

Wir brauchen eine Möglichkeit, den Fehler zu behandeln und dem Benutzer eine Nachricht im Template anzuzeigen.

Damit wir alles DRY halten können, gehen wir zurück zu unserem benutzerdefinierten useFetch Hook und erstellen einen neuen Status für Fehler:

```jsx
const [error, setError] = useState(null);
```

Der Anfangswert wird null sein, weil wir keinen Fehler ganz am anfang haben, und wir haben bereits gesehen, dass durch try n catch unsere Fehler Objekte sind.

Wie ich oben sagte, werden wir unser gutes altes try und catch innerhalb unserer fetchData verwenden:

```jsx
    const fetchData = async () => {
        // unsere auf true gesetztes loading kann draußen bleiben
      setIsPending(true);


      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setIsPending(false);

        // extra für den Fall, dass unser vorheriger Fehler zwischengespeichert wird, wollen wir ihn wieder auf null setzen
        setError(null)
      } catch (e) {
        // jetzt können wir den Fehler einfach hier festlegen
        setError(e)
        // da wir unseren Fehler erhalten haben und ihn anzeigen wollen, wird das Laden nicht mehr benötigt
        setIsPending(false);
      }
    };
```
​
Nun, wie wir bereits gelernt haben, WENN kein wirklicher Fehler auftritt, wie z.B. das Ändern einer falschen URL, werden wir keinen Fehler erhalten, bis wir tatsächlich einen neuen Fehler auslösen, wenn die Response nicht in Ordnung war.

Hinweis: Mit cra wird das Herumspielen mit url eine Menge Fehler auslösen, während Vite sie ignoriert und fast nichts anzeigt

```jsx
      try {
        const res = await fetch(url);
        // direkt nachdem wir unsere Response erhalten haben, wollen wir einen neuen Fehler auslösen, wenn etwas schief geht
        console.log(res);
        if(!res.ok){
            // console.log immer deine Response, um zu sehen, wo ein Fehler oder ein Status-Text versteckt sein könnte, und benutze ihn dann. Falls du nichts findest, schreibe deinen eigenen String, um dem Benutzer mitzuteilen, dass etwas schief gelaufen ist.
            throw new Error(res.statusText)
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      }
```

Jetzt können wir den Fehler als Prop übergeben, damit wir ihn in unseren Komponenten verwenden können

```jsx
return { data, isPending, error };
```

In TripList greifen wir wie immer zu unserer brandneuen, frischen Prop:

```jsx
const { data: trips, isPending, error } = useFetch(url);
```

Jetzt können wir unterhalb unseres Loading's und oberhalb unserer Trips eine Bedingung für unseren Fehler festlegen:

```jsx
{error && <h3>Error: {error.message}</h3>}
```
erledigt