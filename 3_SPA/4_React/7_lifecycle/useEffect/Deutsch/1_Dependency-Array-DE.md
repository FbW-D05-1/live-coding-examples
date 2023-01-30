##  useEffect Dependency Array 🐱‍👤

```jsx

useEffect(()  =>  {

fetchTrips();


  //dependency array
},  []);

```

Wir haben gesehen, dass wir den useEffect Hook verwenden können, um eine Funktion nur einmal in einer Component auszuführen, wenn die Component erstmalig evaluiert (überprüft) wird, obwohl die Component später mehrmals neu evaluiert werden kann. Die Funktion innerhalb von useEffect wird nur einmal ausgeführt, weil wir ein leeres Dependency-Array als zweites Argument verwenden und die Funktion innerhalb von useEffect nur bei Start ausgeführt wird, also beim ersten Evaluieren (Überprüfen) der Component und danach bei jeder Änderung. Da es keine Dependency in diesem Array gibt, gibt es niemals Dependencies, die sich ändern. Es wird also nur einmal bei der erstmaligen Evaluierung (Überprüfung) der Component ausgeführt.

Aber jetzt werden wir uns diese Dependency genauer ansehen. Wir werden versuchen, eine Dependency innerhalb des Arrays hinzuzufügen, um zu sehen, was passiert.

Also sagen wir, dass das API-Endpoint, den wir jetzt fetchen, dynamisch sein wird und auf einen Benutzerclick auf z.B.einem Button reagieren kann (.addEventListener(click, ... )). Falls sich der Endpoint irgendwann ändert, sollten wir die URL des Endpoints als State eines Components festlegen.

Also machen wir das zuerst.

```jsx

  const  [url,  setUrl]  =  useState(import.meta.env.VITE_API_BASE_URL);

//in CRA
  const [url, setUrl] = useState(process.env.REACT_APP_API_BASE_URL);

// den Fetch ändern wir auch.

const  response  =  await  fetch(url);

```

Wenn nun ein User in der Zukunft einen Button clicked, können wir diese Funktion callen um den Endpoint der URL zu ändern.

Aber wir sehen auch folgende Warnung in der Console:

EN:
```React Hook use effect has a missing dependency URL either include it or remove the dependency array.```

DE:
```React Hook use effect hat eine fehlende Dependency URL, füge es hinzu oder entferne das Dependency Array.```

Was genau bedeutet das für uns? 🤔

Nun, das bedeutet, dass wir im State unseres useEffect-Hooks irgendeinen dynamischen Wert oder irgendeine dynamische Variable verwenden. Und wenn wir so einen Wert z.B. in einem State, einer normalen Variable oder, wie bei uns, einer Funktion verwenden, sollte es unbedingt als State außerhalb von useEffect deklariert werden, da jedesmal, wenn sich dieser Wert ändert, automatisch erwartet wird, dass wir die Funktion innerhalb von useEffect neu ausführen möchten, in unserem Fall passiert das, wenn wir den State der URL, also seinen Wert ändern bzw. updaten wollen."

Es macht also Sinn, das wir natürlich die Data der neuen, geupdateten URL fetchen wollen! 🧐


## TL;DR 🔎:

Kurzgesagt, immer wenn der URL-Wert sich ändert, wird die dazugehörige useEffect-Funktion erneut ausgeführt und damit das passiert, müssen wir nur die URL als useEffect-Dependency hinzufügen.

Alles, was wir tun müssen, um es als Dependency hinzuzufügen, ist, die URL hier in das Array zu übergeben:

```jsx

useEffect(()  =>  {

fetchTrips();

},  [url]);

```

Wenn die Component nun erstmalig überprüft wird, führt useEffect unsere Funktion erstmals automatisch aus; und für jede weitere Reevaluierung der Component danach auch.

Sollte React während der Reevaluierung herausfinden, dass der Wert der URL sich seit der Letzten geändert hat, wird useEffect dazu getriggert die Funktion erneut auszuführen.

Nun erscheint dir Warnung in der Console nicht mehr.


##  Als nächstes gehen wir zu db.json 👀

Wir fügen Orte zu unseren Trips hinzu. 

```json

{
  "trips": [{
      "id": 1,
      "title": "2 Night Stay in Sheraton",
      "price": "$180",
      "loc": "Europe"

    },
    {
      "id": 2,
      "title": "3 Night Stay in Hitlon",
      "price": "$290",
      "loc": "Europe"
    },
    {
      "id": 3,
      "title": "5 Night Stay in Bangkok",
      "price": "$3",
      "loc": "Europe"
    },
    {
      "id": 4,
      "title": "1 Week All Inclusive Furry Sex Dungeon",
      "price": "Why!?",
      "loc": "Europe"
    },
    {
      "id": 5,
      "title": "3 Night Stay in some Serbian hotel",
      "price": "$325",
      "loc": "America"
    },
    {
      "id": 6,
      "title": "69 NICE Stay in Hosam's Kingsize Bedroom",
      "price": "$69",
      "loc": "America"
    },
    {
      "id": 7,
      "title": "1 Night Stand in Hosam's Penthouse",
      "price": "Infinite",
      "loc": "America"
    },
    {
      "id": 8,
      "title": "420 Nights in Belle Delphine's Bathtub ",
      "price": "Go to horny jail! *bonk*",
      "loc": "America"
    }
  ]
}

```

Um es schlicht zu halten, nehmen wir hier Amerika und Europa als Beispiel. So können wir mit einem Button nur Trips nach Amerika oder Europa anzeigen lassen.

Wir werden die Endpunkte für Amerika und Europa ändern, damit wir mit useEffect spielen können.

nach unserem **map > ul**, erstellen wir einen neuen Button.

```jsx

<div  className="filters">

<button

onClick={()  =>  setUrl("http://localhost:3000/trips?loc=europe")}

>

Europa Trips

</button>

<button>Alle Trips</button>

</div>

```

Und was dieser Endpunkt für uns tut, wenn wir JSON-Server verwenden, ist sich diese Ressource...
(**Ressource steht hier für unsere Data, die als Array von Objekten im JSON Format vorliegt**)
...zu betrachten, dann schaut es sich alle Items (**Objekte**) in dieser Ressource (**Array**) und den **Wert** der **"loc" Keys** jedes einzelnen dieser Items an. Und es gibt uns nur die Items zurück, bei denen die "loc" gleich Europa ist.

Das heißt, genau hier ändern wir den **Endpoint** um uns die Tripdaten für Europa zu schnappen.

Dasselbe tun wir für den Amerika-Button auch:

```jsx

<div  className="filters">

<button

onClick={()  =>  setUrl("http://localhost:3000/trips?loc=europe")}>

Amerika Trips

</button>

<button  onClick={()  =>  setUrl("http://localhost:3000/trips")}>

Alle Trips

</button>

</div>

```

Herzlichen Glükwunsch, nun haben wir einen Filter für unsere Trips. 💖
