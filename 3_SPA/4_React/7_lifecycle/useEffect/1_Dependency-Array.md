## useEffect Dependency Array

```jsx
useEffect(() => {
    fetchTrips();

     //dependency array
  }, []);
```

We saw that we can use the useEffect hook to fire a function only once in a component when the component is first evaluated, even though that component might be reevaluated several times later on, the function inside useEffect only run once. And that's because we had an empty dependency Array as a second argument and the function inside useEffect only if it runs either at the start so when the component first evaluates and then after every time it changes. Now, since there's no dependencies in this array, there's never any dependencies to change. So it only ever runs once on the initial component evaluation.

But now we're going to take a closer look at this dependency.
We're going to try adding a dependency inside the array to see what happens then.


So let's say that the API endpoint that we are fetching right now is going to be dynamic, and it might change in reaction to something like a user clicking on a button.
Well, if it's going to change at some point, then we should store the URL of the endpoint as some components state.

So let's do that first.

```jsx
  const [url, setUrl] = useState(import.meta.env.VITE_API_BASE_URL);

  //or CRA
  const [url, setUrl] = useState(process.env.REACT_APP_API_BASE_URL);


  // we change the fetch aswell
  const response = await fetch(url);
```

In the future, if a user does click on a button, we can call this function to change the end point of the URL


But we're also seeing this warning in the console.
    ```React Hook use effect has a missing dependency URL either include it or remove the dependency array.```

So what does that mean, exactly?

Well, it means that we're using some kind of dynamic value or variable in our case state inside our useEffect hook. And when we're using such a value, whether that be state or a regular variable or a function as defined. Outside of useEffect it should be declared as a dependency because whenever that value changes would expect that we'd want to rerun the function inside useEffect that uses that value in our case, if we update the URL state.
It makes sense that we'd want to refetch the data using that new URL.

tl;dr:
 So in other words, whenever the URL value changes, Rerun the useEffect function and for that to happen, we just need to add the URL as a use effect dependency.


So all we have to do to add it as a dependency is passing the URL right here into the array:
 ```jsx
 useEffect(() => {
    fetchTrips();
  }, [url]);
 ```

And now, when the component is first evaluated, use effect will run this function automatically for the first time. But thereafter, for every further component reevaluation.
If during that evaluation, React finds that the URL value has changed since the last evaluation, then it will trigger useEffect to run the function again.

Now the warning will be gone


## Next we go to db.json

we add location to our trips.
```json
{
  "trips": [{
      "id": 1,
      "title": "2 Night Stay in Sheraton",
      "price": "$180",
      "loc": "europe"

    },
    {
      "id": 2,
      "title": "3 Night Stay in Hitlon",
      "price": "$290",
      "loc": "europe"
    },
    {
      "id": 3,
      "title": "5 Night Stay in Bangkok",
      "price": "$3",
      "loc": "europe"
    },
    {
      "id": 4,
      "title": "3 Night Stay in some Serbian hotel",
      "price": "$325",
      "loc": "america"
    },
    {
      "id": 5,
      "title": "69 Night Stay in Hosam's Bedroom",
      "price": "$69",
      "loc": "america"
    },
    {
      "id": 6,
      "title": "1 Night Stand in Hosam's Bedroom",
      "price": "$10000",
      "loc": "america"
    }
  ]
}
```

only eu and us will be added so we can have a button to show only eu trips or usa

we will change endpoints for eu and usa so we can play around with useEffect


after our map > ul we will create a new button
```jsx
    <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button>All Trips</button>
      </div>
```
And what this endpoint does for us when we're using json-server is look at this resource, then it looks all of the items in that resource and the location properties of each one of those items. And it only returns us the items where the location property is equal to europe.
So we're changing the endpoint right here to grab those trips.

Same thing for the other button
```jsx
    <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}>
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
        All Trips
        </button>
    </div>
```

Congrats now we have a filter for our trips C: