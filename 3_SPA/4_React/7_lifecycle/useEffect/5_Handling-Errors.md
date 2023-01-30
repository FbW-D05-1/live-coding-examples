# Let's Show dem Erros 🥵
![Errors got hands](./images/Damn-Errors.jpg)

So just like the Pending State it is important to have Errors our users don't wanna sit there confused and wonder why their page is just blank or infinitely loading.

We need a way to handle the error and show some kind of a message to the user in the template.

Again so we can keep everything DRY we head back to our custom useFetch Hook there we create a new state for error:

```jsx
const [error, setError] = useState(null);
```
Initial value will be null cause we won't have an error to begin with and we already saw that by try n catch our errors are objects.

As i said above we gonna be using our good ol try and catch block inside of our fetchData:

```jsx
    const fetchData = async () => {
        // our loading set to true can stay outside
      setIsPending(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setIsPending(false);
        // just extra incase our previous error is cached we want to set it to null again
        setError(null)
      } catch (e) {
        //now we can just set the error here
        setError(e)
        // since we get our error and want to display it loading isn't needed anymore
        setIsPending(false);
      }
    };
```

Now as we have learned before IF no real error happens like just changin to false url we won't get an error until we actually throw a new Error if the response wasn't ok

Note: with cra messing around with url will throw a ton of errors while Vite will ignore them and show almost nothing
```jsx
      try {
        const res = await fetch(url);
        // directly after we get our response we want to throw a new error if something goes wrong
        console.log(res);
        if(!res.ok){
            // always console log your response to see where an error or status text might be hidden then use it, incase you don't find anything write your own string to tell the user something went wrong
            throw new Error(res.statusText)
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      }
```

Now we can pass the error as a prop so we can use it in our components

```jsx
return { data, isPending, error };
```

In TripList as always we grab our brand new fresh prop:

```jsx
const { data: trips, isPending, error } = useFetch(url);
```

Now below our loading and above our trips we can set a condition for our error:

```jsx
{error && <h3>Error: {error.message}</h3>}
```

fin