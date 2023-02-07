# Real Time database

I won't be going too deep into theory do it yourself

## Real Time Collection Data

in Home.jsx we want real-time listener:
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

errors:
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

cleanup function:
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

## Updating Documents
With real time db updating every recipe let's go to Recipe.jsx woohoo:
first add a new button
```jsx
<button onClick={() => handleClick()}>Update Recipe</button>
```
then make the handleClick:
```jsx
const handleUpdate = () => {
    recipeStore.collection("recipes").doc(id).update({
      title: "Something else",
    });
  };
```


## Real-Time Document Data

now since it's again not real time we have to refresh to see the update so just like homepage change:

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

and now if we click le button it will update real time 