# Abrufen einer Firestore-Sammlung

Im Moment verwenden wir einen lokalen Host und einen JSON-Server, um unsere Rezeptdaten aus der db.json-Datei zu holen.

Das wollen wir nicht mehr tun.

Stattdessen wollen wir die Daten aus dem Firestore abrufen.

Löschen wir also die Zeile aus Home.jsx:
```jsx
// auch den Import löschen
const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
```

Lösche auch den Import, den wir nicht mehr brauchen.

Stattdessen werden wir recipeStore importieren:

```jsx
import { recipeStore } from "../../firebase/config";
```


Wir haben das jetzt importiert und können es unten in der Komponente verwenden, um die Daten aus unserer Datenbank zu holen.

Wir werden dies also mit dem useEffect-Hook tun. Später werden wir aber auch benutzerdefinierte Hooks erstellen, um einen Firestore zu verbinden.

```jsx
 const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    
  }, []);

```
BEVOR WIR WEITERMACHEN, MUSSTE ICH CHROME BENUTZEN, DAMIT MEINE KONSOLEN FUNKTIONIEREN, ICH WEISS NICHT WARUM, ABER FIREFOX IST DURCHEINANDER UND ZEIGTE SACHEN AN, DIE ICH NICHT BRAUCHTE.

dann:

```jsx
 useEffect(() => {
    setIsPending(true);
    // stellt eine Verbindung mit unserer Sammlung in db her
    recipeStore.collection("recipes");
  }, []);
```
```jsx
// 1. wird uns die Daten in unserer Sammlung asynchron liefern
recipeStore.collection("recipes").get();

// 2. Schnappschuss der Rezeptsammlung, wenn wir die Daten abrufen wollen.
recipeStore.collection("recipes").get().then((snapshot)=>{
console.log(snapshot)
 console.log(snapshot.docs);
});
// Dieser Snapshot enthält verschiedene Eigenschaften und Methoden sowie alle Daten in der Rezeptsammlung.

//3. check if snapshot is empty
recipeStore.collection("recipes").get().then((snapshot)=>{ 
    if(snapshot.empty){
        setError("No recipes to load")
        setIsPending(false)
    }else{
        let result = [];
        snapshot.docs.forEach(doc => {
            // Wenn du den Prototyp öffnest, findest du eine Datenfunktion, die wir verwenden werden
            console.log(doc);
        })
    }
});
// 4. in die Ergebnisse schieben

recipeStore.collection("recipes").get().then((snapshot)=>{ 
    if(snapshot.empty){
        setError("No recipes to load")
        setIsPending(false)
    }else{
        let result = [];
        snapshot.docs.forEach(doc => {
            // wir geben die entsprechende ID ein und verteilen dann alle Daten wie Titel, Methode, Zutaten
            result.push({id: doc.id, ...doc.data()})
            console.log(result)
        })
    }
});

// 5. Aktualisierung des Datenstandes

recipeStore.collection("recipes").get().then((snapshot)=>{ 
    if(snapshot.empty){
        setError("No recipes to load")
        setIsPending(false)
    }else{
        let result = [];
        snapshot.docs.forEach(doc => {
            result.push({id: doc.id, ...doc.data()})
            
        })
        setData(result)
        setIsPending(false);
    }
});

// abfangen der Fehler

recipeStore.collection("recipes").get().then((snapshot)=>{ 
    if(snapshot.empty){
        setError("No recipes to load")
        setIsPending(false)
    }else{
        let result = [];
        snapshot.docs.forEach(doc => {
            result.push({id: doc.id, ...doc.data()})
            
        })
        setData(result)
        setIsPending(false);
    }
}).catch((err)=> {
    setError(err.message)
    setIsPending(false)
});

```

Wenn wir nun auf ein beliebiges Rezept klicken, erhalten wir zwar die korrekte ID, können aber nicht die Daten abrufen, die wir für die nächste Aktualisierung benötigen.
