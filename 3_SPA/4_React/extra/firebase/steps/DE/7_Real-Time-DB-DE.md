# Echtzeit-Datenbank

Ich werde nicht zu sehr in die Theorie einsteigen, das könnt ihr selbst machen.

## Datenerhebung in Echtzeit

in Home.jsx wollen wir einen Real-Time Listener:

```jsx
recipeStore.collection("recipes").onSnapshot((snapshot) => {
  if (snapshot.empty) {
    setError("No recipes to load");
    setIsPending(false);
  } else {
    let result = [];
    snapshot.docs.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    setData(result);
    setIsPending(false);
  }
});
```

mit Error message :

```jsx
recipeStore.collection("recipes").onSnapshot(
  (snapshot) => {
    if (snapshot.empty) {
      setError("No recipes to load");
      setIsPending(false);
    } else {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setData(result);
      setIsPending(false);
    }
  },
  (err) => {
    setError(err.message);
    setIsPending(false);
  }
);
```

Aufräumfunktion:

```jsx
const unsub = recipeStore.collection("recipes").onSnapshot(
  (snapshot) => {
    if (snapshot.empty) {
      setError("No recipes to load");
      setIsPending(false);
    } else {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setData(result);
      setIsPending(false);
    }
  },
  (err) => {
    setError(err.message);
    setIsPending(false);
  }
);
return () => unsub();
```

## Dokumente aktualisieren

Die Real-Time-DB aktualisiert jedes Rezept und wir gehen zu Recipe.jsx woohoo!!!
zuerst eine neue Schaltfläche hinzufügen:

```jsx
<button onClick={() => handleUpdate()}>Update Recipe</button>
```

dann den handleClick:

```jsx
const handleUpdate = () => {
  recipeStore.collection("recipes").doc(id).update({
    title: "Something else",
  });
};
```

## Real-Time Document Data

Da es sich auch hier nicht um Echtzeitdaten handelt, müssen wir das Dokument aktualisieren, um die Aktualisierung zu sehen, genau wie bei der Homepageänderung:

```jsx
useEffect(() => {
  setIsPending(true);

  const unsub = recipeStore
    .collection("recipes")
    .doc(id)
    .onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false);
        setRecipe(doc.data());
      } else {
        setIsPending(false);
        setError("Could not find");
      }
    });

  return () => unsub();
}, [id]);
```

und wenn wir jetzt auf le Button klicken, wird sie in Echtzeit aktualisiert! 😮😮😮
