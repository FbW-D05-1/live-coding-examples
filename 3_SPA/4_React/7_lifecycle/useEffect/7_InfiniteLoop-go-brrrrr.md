# Some reminder what to do when you get infinite loops

Remember useEffect just loves giving us infinite loops when we use anything else instead of what it likes in it's dependency Array. There's a huge pitfall with spikes at the bottom that you could fall down into if you're not aware of it. And it has all to do with passing in reference types as arguments like objects or arrays, and we've kind of briefly touched on this in the past.


Right now we're putting in a URL as an argument which is used as a useEffect hook:
```jsx
/* rest of the code*/ = useFetch(url);
```

And the way we're doing this is fine. We're just passing in some states so that URL was state in the TripList component and we're passing in that state value as an argument into the useFetch which is used in the useEffect.

**BUT** and that is a big **BUTT** if we put an agrument which isn't a state and use that as a useEffect dependency, we would run into trouble

So first of all, let me pass in a second argument, which is a string into the useFetch hook:
```jsx
  const { data: trips, isPending, error } = useFetch(url, "Bob");
```
Then I'm going to go over to the useFetch and accept it as an argument called name:
```jsx
                            //right here
export const useFetch = (url, name) => {
```
Then I want to use that name in the useEffect function just to log it out to the console.

So inside useEffect in useFetch:
```jsx
useEffect(() => {
    console.log(name);
```
And now since we're using this external value, which may change inside the useEffect function, we should declare it as a dependency at the bottom.

So let's pass that name at the bottom.
```jsx
   };
  }, [url, name]);
```

And now we can see everything is totally fine.
There's no infinite loops or anything like that.

So now what if instead of putting in a primitive value to the useFetch we use an Object or Array?

Let's say we want to pass options object like we did when we started fetching which includes our headers, post methods etc..

Let's start by changing bob:
```jsx
  /*rest of the code*/ = useFetch(url, { type: "GET" });
```
So now we're passing it a reference value into the hook, an object now inside the hook.

### **NOTE!!!** before continuing on, This might crash your browser be cautious

Now inside our useFetch Hook we will rename name to options

```jsx
export const useFetch = (url, options) => {
```
change everything with "name" to "options" now:
```jsx
 useEffect(() => {
    console.log(options);
    
    // REST OF THE CODE
      
  }, [url, options]);
```

## TADA infinite loop go brrrrrrrrrrr...

Now this is happening because an object is a reference type, and when React reevaluates a component function, useEffect sees a reference types as changed values, even though the object itself is the same.

This is for the same reason we talked about earlier when functions are used as dependencies. (memory cache)

So just remember for any reference type: objects, arrays and functions. If they're used directly as dependencies, they'll trigger an infinite loop.

We already saw how to get around this with functions. We used the useCallback hook.

For object and arrays.
## You've got a couple of options.
First, you could wrap the object in a state hook, then just pass the state in as an argument to the useFetch hook or whatever custom hook you use.
Because any state value, including objects and arrays, aren't going to trigger an infinite loop.

The other option, if you don't want to useState, is to wrap the value in a useRef hook inside the custom hook itself. 
Remember, we used the useRef hook before, when we wanted direct access to a Dom node, but we can also use them for this too.

So when you know that you're going to be receiving an object or an array as an argument in your custom hook, you can use one of these approaches.


So first, what I'm going to do is import useRef from react at the top of the page
```jsx
import { useState, useEffect, useRef } from "react";
```
 I'm going to rename the parameter here to _options. So there's no name conflicts.
 ```jsx
export const useFetch = (url, _options) => {
```
and then we can use it down below the other states.
```jsx
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  // create a new constant called options and set it equalt to useRef
  const options = useRef(_options);
```
And then finally, we need to say .current at the end to get the current value of the ref.
```jsx
  const options = useRef(_options).current;
```


So in this case, we're not using a ref to get access to a DOM element, but we're taking advantage of how useRef works to wrap our object. And when we do this and react components are reevaluated. The ref values are not seen as new or different on each evaluation.
Therefore, using them as dependencies like this for a reference value doesn't trigger the useEffect function to run again.

In the browser, if we open up the console, we don't see the infinite loop.

This is probably not something that you're going to need to do very often, but I wanted to show you this just so that if you do come across this issue, then you're armed with a solution.

gn8