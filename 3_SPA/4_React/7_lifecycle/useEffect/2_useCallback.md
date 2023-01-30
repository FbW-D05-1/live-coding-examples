# useCallback for Function Dependencies

So now we've seen how dependencies work and by the way, you can have more than one dependency in your useEffect(it gets fired when one of them changes). If you're using extra dynamic values or state inside it.

But now what if one of those dependencies was a function, for example, we might want to extract all of our fetch logic into its own function, and that way we can reuse the function whenever we want to by invoking it in the future. And it also means that we can make an asynchronous function using the async keyword. Remember, we can't make this function directly inside use effect async that might cause problems in the future when we use this useEffect hook.

But if we extract the fetch logic into it's all function, we can't make that function into an async function.

Since we already have it async awaited when using Vite there won't be any warnings but when using CRA you might encounter: 

```React Hook useEffect has a missing dependency: 'fetchTrips'. Either include it or remove the dependency array...```

So this is because inside the useEffect hook, we're calling this fetchTrips function and since we're relying on an outside value, a function declared outside the scope of this useEffect hook it should be listed as a dependency.

So let's add that in, first of all to the dependency array.

```jsx
  useEffect(() => {
    fetchTrips();
    console.log("useEffect fired");
    console.log(trips);
    // adding fetchTrips in the array
  }, [url, fetchTrips]);
```

Now the warning is away but we have INFINITE LOOOOOOOOOOOOOOOP.

But why?

Well, when marking the fetchTrips function as a useEffect dependency and that means whatever the function changes when you run this useEffect function again,
So when the component first loads were firing the useEffect function for the first time as we always do and were fetching the data and then updating the states.
Now when we update state the component reevaluates, so the component function reruns and right now our useEffect hook is firing our function again a second time.

But why is it doing this? The URL hasn't changed and the fetchTrips function hasn't changed they're the two dependencies and unless one of them changed since the last component evaluation, we shouldn't be re-firing useEffect function.

But technically speaking, one of them has changed every time our component is reevaluated, any functions or any of the regular JavaScript variable for that matter that we declare inside that components are recreated and stored elsewhere in memory and when React compares the old function to the new one, **it's not comparing the function name or the content or the function itself.**
If it did that, then it would probably say that the function hasn't changed and we wouldn't have this issue. But instead it's comparing the references to those functions.

    Reference is basically something that points to a value in memory.
Those references are not seen as the same because the pointing to those two different places

tl;dr **Since it gets stored elswhere in memory it constantly changes**


So since we're comparing references like this every time our component is reevaluated, useEffect is saying "Hey, the function is different from the last time, so imma ruin this persons whole career"


![Gooby Be like](./images/gooby.jpg)


Steps that happen in the background:

>The state triggers a component reevaluation a new version.

>fetchTrips function is created in memory.

>The references are compared, the scene is different.

>The useEffect fires again because the function is a dependency and so forth again and again and again.

And this behavior would be the same for any other reference typed in JavaScript.
So that includes functions as we've already seen, but also objects and arrays.
So if we had an object or an array as a dependency, then you would see the same behavior.
**Objects and Arrays can be wrapped in the useState hook, which negates this effect of comparing the references.**

But with functions, we can do something else all we need to do is wrap the function inside another react hook called useCallback.


first import:
```jsx
import { useState, useEffect, useCallback } from "react";
```

then we can come down to fetchTrips function and wrap everything including async await part in useCallback:
```jsx
// we start before async and our parenthesis end after closing curly brackets
const fetchTrips = useCallback(async () => {
    try {
      await delay(500);
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
  });
```
Now hover over the useCallback.
And what it does is essentially create a cached version of a function, which we're passing to it as an argument. And then on every evaluation of the component, that cached function is not being recreated and therefore it's not being seen as changed by the useEffect hook, which will therefore not fire again.

Now there's one more thing we need to do.
The useCallback hook also has a dependency array as a second argument, and this dependency array will tell the useCallback clock when to create new version of the function inside it.
We're going to re fetch the same data, so we should pass the URL as a dependency to this useCallback.
And that way, any time the URL changes, the useCallback will generate a new version of the function using that new URL.
```jsx
const fetchTrips = useCallback(async () => {
    try {
      await delay(500);
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
    // here
  }, [url]);
```
Because the function is a useEffect dependency, it's then going to trigger the useEffect to rerun the function, and that's going to invoke our fetch function to fetch the new data.

We no longer need the URL as a useEffect dependency because when the URL changes and a new function is generated, that alone triggers the useEffect to run.

So we don't need the URL change to trigger it directly anymore.:
```jsx
  useEffect(() => {
    fetchTrips();
    console.log("useEffect fired");
    console.log(trips);
    // remove url here
  }, [fetchTrips]);
```

Just remember, find out if you use a reference type like a function object or an array as a dependency, then react will see that dependency is changed for every component evaluation.
In the case of objects and arrays, you can wrap them in you state to counter this.