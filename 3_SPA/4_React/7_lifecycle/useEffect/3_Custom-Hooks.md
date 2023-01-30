# Now Champs we will make our own Hook

If we were to make another components in the application that also needed to fetch some data then we'd find ourselves rewriting the same kind of code in that component as we have done before. So we essentially just be duplicating all of this code. Then if we had more components with that fetch data, we'd be duplicating our code again. Now, in the long run, this is going to lead to bloated code that's hard to maintain and update.

So it would be nice if we could package this kind of logic, all of this logic into a reusable function that we can call on in any component that needs to fetch data.

And we can do that.

**We can create what's known as a custom react hook to package any functionality we want.**
We can use that hook in any component that needs it, just like we use our other React hooks for states, effects or callbacks.

## We're going to create a custom hook to fetch data which bundles up all of the logic and code that we need

First of for custom hooks better create an extra folder inside src dir and work there.
I like to call mine hooks, you can call it whatever you like.
Inside i will create a new file => _useFile.js_ . Again same rule as above. **BUT ANY REACT HOOKS MUST START WITH THE WORD use...** This way React knows it's a hook and can process them as such **AND don't name them as already premade react hooks like useState, useEffect...**

So now First we need to import some things from react:

```jsx
import {useState, useEffect} from 'react';
```

afterwards:
```jsx
export const useFetch = (url) => {};


```

So when we use this hook inside a component, for example, in this trip component, what I'm going to do is putting the URL and point into the hook and that we can use that URL and point inside our hook to fetch that data.


So the first thing I'll do inside the hook is create some states

```jsx
const [data, setData] = useState(null);
```
null => we don't have initial value for the data

underneath that we will use useEffect:

```jsx
useEffect(() => {}, []);
```
inside here we want to fetch the data.
We could fetch outside of effect but then we'd have to wrap it with useCallback like we did before and putting the function as a dependency to useEffect.

But I want to show you a different approach now, and that is to manually create the function inside useEffect itself.

```jsx
useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch(url)
        // normally i call it data but i wanted to avoid confusion with our state data
        const json = await res.json();
    }
}, []);
```

You cannot use asynchronous functions inside hooks. What I mean by this is that your hook itself cannot be asynchronous `useEffect`.

```jsx
//I mean this function right here, directly inside useEffect
//cannot be async
//everything inside can be
useEffect(async() => {
 // here the code can be asynchronous
 const fetchSomething = async() =>{}
}, []);
```


Now we will update our state:

```jsx
useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch(url)
        const json = await res.json();
        setData(json)
        // again to avoid confusion with setData(data) 
    }
    // and lastly we will pass in the url as dependency
}, [url]);
```
If the URL changes in our component at some point,  it's going to rerun this useEffect function.


If we were to use this custom hook inside our function over TripList, then it's going to automatically find this useEffect when this component first evaluates, right?
That always happens.
But at the moment, all we're doing is creating this function and not invoking it.
We need to invoke it in order to fetch the data so we can just do that down below.

```jsx
useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch(url);
        const json = await res.json();
        setData(json)
    }
    // invoking outside of fetchData
   fetchData();
}, [url]);
```
And now when the function runs, it creates this fetch data function and then we invoke it.


## So finally, all we need to do is return our data from this hook.

When you have a custom Hook, you're always going to return some kind of value.

I will be using objects as our return down below


```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // fetch happening here
  }, []);

    //return a data property, which is going to be our data state.
    //either return it like this
  return {data: data}
  // or
  return {data}
  // they're the same
};
```

So now when we use this fetch, we're going to get this data property back, which will be this data state.

## Now we will use our brand new Hook in the TripList component

step one import:
```jsx
import { useFetch } from "../hooks/useFetch";
```

Then i can remove:
```jsx
const [trips, setTrips] = useState([]);
```

afterwards under url state we can invoke it and pass our url as param:

```jsx
useFetch(url);
```

Next we want to destructure our data property:

```jsx
const {data} = useFetch(url);
```
So now we're grabbing the data from this useFetch and we're putting in that URL.
It should contain all of the trips we get from the endpoint.

So we can remove our old fetch now :

```jsx
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const fetchTrips = useCallback(async () => {
    setLoading(true);
    try {
      await delay(500);
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
  }, [url]);

  useEffect(() => {
    fetchTrips();
    console.log("useEffect fired");
    console.log(trips);
  }, [fetchTrips]);
```

as next we have to change trips.map variable to data.map
or we can just give it a name trips in destructuring:
```jsx
const {data: trips} = useFetch(url);
```
so now it won't work cause for the first ms when fetch happens value of our data is null to combat this either we set our state in useFetch to Array 

```jsx
                                //changed to [] from null
const [data, setData] = useState([]);
```

or better before our map we put trips && trips.map

```jsx
{trips && trips.map(
    /*rest of the code*/
    )}
```

Now with this single hook we can keep fetching data in all of our components without the need to rewrite same code C: