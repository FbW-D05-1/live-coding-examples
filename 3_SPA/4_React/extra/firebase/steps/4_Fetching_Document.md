# Fetching a Firestore Document

So we fetched a full collection now let's fetch singular document(recipe).

It will be very very similar how we fetched before. Only this time we're just going to get a single document.

Next we go to Recipe.jsx:

delete everything except for these two:
```jsx
const { id } = useParams();
const { mode } = useTheme();
```

insert again states:
```jsx
const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
```

useEffect time:
```jsx
 useEffect(() => {
    setIsPending(true);
    //we just give it id from our params
    recipeStore.collection("recipes").doc(id);
  }, []);
```

Now we can fetch:
```jsx
recipeStore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
      });
```

next

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


      // adn finally
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

now we see our terminal says useEffect is missing id dependancy it actually isn't but just give it id as a dependency so it can shut up 🧑‍🍳