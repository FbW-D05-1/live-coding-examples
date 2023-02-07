# Posting Firestore Data

So we have a create recipe button but it's still connected with json-server let's make it real now.

Let's go to Create.jsx:
Let's delete useFetch like always and the import.
then import recipeStore

we can use it in our handleSubmit:
first let's remove ONLY postData keep the object itself:
```jsx
const handleSubmit = (e) => {
    e.preventDefault();
  const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
   }
  };
```
All we need to do is:
```jsx
recipeStore.collection("recipes").add(doc);
```

that's pretty much all we have to do. BUT I'm going to wrap this in a try n catch block just to catch any errors with it if there is one cause we can't use .then method:

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

a bit down we have a useEffect which fire when we have a data from useFetch since we are no longer using it delete all of useEffect

Bon apple tea