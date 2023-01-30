# Why we need a Cleanup Function

keywords used you might not know yet => componentDidMount() componentWillUnmount()

They both come from when react was class based

tl;dr:

componentDidMount means our component entered the DOM

componentWillUnmount means our component was removed from the DOM

## Back to topic

So currently, our useFetch right here is all working really well. But there is one problem with it, and that's to do with what happens when we asynchronously try to update state in a component after it's unmounted.

So to demo this, I'm going to go to the app component right here where we output the list:
```jsx
function App() {
  return (
    <>
      <TripList />
    </>
  );
}
```
And what I'm going to do is create a state inside this function. Now, in order to use the useState, like always I have to import it at the top.

```jsx
import {useState} from 'react';
function App() {
 const [showTrips, setShowTrips] = useState(true);
  return (
    <>
      <TripList />
    </>
  );
}
```
Now what I want to do is only output the trip list if show trips is true.

```jsx

{showTrips && <TripList />}

```
Now I want to make a button that is going to toggle this value to false.

```jsx
    <button onClick={() => setShowTrips(false)}>hide Trips</button>
      {showTrips && <TripList />}
```

So think about this when we first load the page. TripList is going to show because showTrips is true. And when this shows and we use the useFetch hook, it's going to automatically start to fetch the data. What if we were to click this button while the fetch is going on?
Again to see it best we would need to throttle and before everything loads up trigger the button

Vite will be like always quiet but if we do this with CRA we will get:

```Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a``` **memory leak** ``` in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function at TripList```

[Why memory leaks can be harmful](https://en.wikipedia.org/wiki/Memory_leak)

[Thrashing](https://en.wikipedia.org/wiki/Thrashing_(computer_science))

P.S. With any kind of memory it's meant RAM => Random Access Memory

### So what's going on ?

> We load the page 

> TripList component starts to load 

> useFetch triggers 

> fetch happens in the background 

> in the meantime while the fetch is ongoing we trigger the button to remove TripList 

> But the fetch is still going on in the background 

> fetch is complete and is trying to update the state in the component we just removed.

We can't do that it's illegal, [Zucc Police will get ya](https://youtu.be/9ZrAYxWPN6c).

So what we have to do is we have to use what's known as a cleanup function to cancel any kind of async tasks like the fetch request so it doesn't try to do the state update.

## Aborting Fetch Requests

A cleanup function is just a function that we return inside a useEffect and that return will always run the component using the useEffect hook on mounts(**componentDidMount**).
Meaning when TripList component mounts it will fire it's clean up function.

in our useEffect in useFetch:

```jsx
useEffect(() => {
    //setting up abort controller in a constant
    const controller = new AbortController();

    // rest of the code

    // we already saw options, methods like headers post get etc.. here we will set our controller aswell so it can signal an abort when needed

        const res = await fetch(url, {signal: controller.signal});
        // now it associates the fetch request with our abort controller

    // rest of the code
    fetchData();

    // here we will abort any async tasks or subscriptions to some kind of data stream
    return () => {
      // it's called abort controller in JavaScript regular js nothing to do with react

      // and finally we abort
      controller.abort()
    }
  }, [url]);
```
And this method looks at any fetch requests associated with this abort controller and it stops them immediately.

Now we can pass an Error aswell:
```jsx
} catch (e) {
    if(e.name === "AbortError"){
        console.log("The fetch was aborted");
    }else{
        //not necessary to put inside else but we can do this
        setError(e);
        setIsPending(false);
    }
      }
```

We don't need to pass in any state for erros right now unless we had extra component(best practice) to show our errors individually, our TripList was aborted/unMounted so everything will be invisible anyway but with our console.log we will definetly know it worked and we shouldn't get any warnings(KEK VITE) or memory leaks and our component can safely unmount.