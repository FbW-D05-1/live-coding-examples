# Abrufen eines Firestore-Dokuments

Wir haben also eine vollständige Sammlung abgerufen, nun wollen wir ein einzelnes Dokument (Rezept) abrufen.

Es wird sehr ähnlich sein, wie wir sie vorher gefetched haben. Nur dass wir dieses Mal nur ein einzelnes Dokument abrufen werden.

Als nächstes gehen wir zu Recipe.jsx;

Löscht alles **außer** diesen beiden:

```jsx
const { id } = useParams();
const { mode } = useTheme();
```

fügt die states ein:

```jsx
const [recipe, setRecipe] = useState(null);
const [isPending, setIsPending] = useState(false);
const [error, setError] = useState(false);
```

useEffect:

```jsx
useEffect(() => {
  setIsPending(true);
  //we just give it id from our params
  recipeStore.collection("recipes").doc(id);
}, []);
```

Jetzt können wir fetchen:

```jsx
recipeStore
  .collection("recipes")
  .doc(id)
  .get()
  .then((doc) => {
    console.log(doc);
  });
```

als nächstes

```jsx
recipeStore
  .collection("recipes")
  .doc(id)
  .get()
  .then((doc) => {
    if (doc.exists) {
      setIsPending(false);
      setRecipe(doc.data());
    }
  });

// und endlich
recipeStore
  .collection("recipes")
  .doc(id)
  .get()
  .then((doc) => {
    if (doc.exists) {
      setIsPending(false);
      setRecipe(doc.data());
    } else {
      setIsPending(false);
      setError("Could not find");
    }
  });
```

Jetzt sehen wir, dass unser Terminal sagt, dass useEffect eine id-Abhängigkeit fehlt, was es eigentlich nicht ist, aber gebt ihm einfach id als eine Abhängigkeit, damit es die Klappe halten kann 🧑‍🍳
