# Fetching a Firestore Collection

So at the moment, we're using local host and JSON server to fetch our recipes data from db.json file.

We don't want to do that anymore.

Instead, We want to fetch the data from Firestore.

So let's delete the line from Home.jsx:
```jsx
// also delete the import
const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
```
Delete import aswell don't need that anymore.

And instead, we're going to import recipeStore:
```jsx
import { recipeStore } from "../../firebase/config";
```

So we've imported that now and we can use it down in the component to fetch the data from our database.

So the way we're going to do this is by using the useEffect hook. But later on, we will be making custom hooks to connect a firestore as well.

```jsx
 const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    
  }, []);

```
BEFORE WE CONTINUE I HAD TO USE CHROME SO MY CONSOLES WORK IDK WHY BUT FIREFOX IS MESSED UP AND SHOWED STUFF I DIDNT NEED
then:

```jsx
 useEffect(() => {
    setIsPending(true);
    // sets a connection with our collection in db
    recipeStore.collection("recipes");
  }, []);
```
```jsx
//1. will get us the data in our collection asynchronously
recipeStore.collection("recipes").get();

//2. snapshot of the recipes collection when we go to get the data.
recipeStore.collection("recipes").get().then((snapshot)=>{
console.log(snapshot)
 console.log(snapshot.docs);
});
//Now on this snapshot, there's different properties and methods and also contains all the data inside the recipes collection.

//3. check if snapshot is empty
recipeStore.collection("recipes").get().then((snapshot)=>{ 
    if(snapshot.empty){
        setError("No recipes to load")
        setIsPending(false)
    }else{
        let result = [];
        snapshot.docs.forEach(doc => {
            // if you open prototype there will be data function which we will use
            console.log(doc);
        })
    }
});
//4. pushing into results

recipeStore.collection("recipes").get().then((snapshot)=>{ 
    if(snapshot.empty){
        setError("No recipes to load")
        setIsPending(false)
    }else{
        let result = [];
        snapshot.docs.forEach(doc => {
            // we push the correspondinig id and then spread out all the data like title, method, ingredients
            result.push({id: doc.id, ...doc.data()})
            console.log(result)
        })
    }
});

// 5. update our data state

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

//finally catch dem errors

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

Now when we click on any recipe we get the correct id but we couldn't fetch the data we need to update that next.