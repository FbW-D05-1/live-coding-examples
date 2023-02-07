# Senden von Firestore-Daten

Wir haben also eine Schaltfläche zum Erstellen von Rezepten, aber sie ist immer noch mit dem json-server verbunden, also machen wir sie jetzt echt.

Gehen wir zu Create.jsx:
Löschen wir useFetch wie immer und den Import.
dann importiere recipeStore.

Wir können es in unserem handleSubmit verwenden:
Zuerst entfernen wir **NUR** postData und behalten das Objekt selbst:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const doc = {
    title,
    ingredients,
    method,
    cookingTime: cookingTime + " minutes",
  };
};
```

Alles, was wir tun müssen, ist:

```jsx
recipeStore.collection("recipes").add(doc);
```

das ist so ziemlich alles, was wir tun müssen. ABER ich werde dies in einem Try-n-Catch-Block wickeln, nur um alle Fehler mit ihm zu fangen, wenn es einen gibt, weil wir nicht .then verwenden können.

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const doc = {
    title,
    ingredients,
    method,
    cookingTime: cookingTime + " minutes",
  };
  try {
    await recipeStore.collection("recipes").add(doc);
    history.push("/");
  } catch (err) {
    console.error(err);
  }
};
```

Etwas weiter unten haben wir einen useEffect, der ausgelöst wird, wenn wir Daten von useFetch haben, da wir ihn nicht mehr verwenden, löschen wir alle useEffects.
Bone apple tea
