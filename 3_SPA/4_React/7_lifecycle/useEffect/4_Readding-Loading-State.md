# Now we can bring back our beautiful Loaders

This time we will put the loading into our custom useFetch Hook so we don't have to reuse same loaders everywhere

first step we need a new state inside our useFetch.js

```jsx
const [isPending, setIsPending] = useState(false);
```

So again like before we will set the state to true when initial fetch starts and set it back to false when the data is fetched

inside our useEffect in useFetch:
```jsx
useEffect(() => {
    const fetchData = async () => {
        // here the fetch begins so we set to true
        setIsPending(true)

      const res = await fetch(url);
      const json = await res.json();


      setData(json);
      // at the very end we will set it back to false
      setIsPending(false)
    };
    fetchData();
  }, [url]);

  // so we can use the pending/ loading state else where we will have to pass it over with our data

  return { data, isPending };
```

Now in our TripList component we can extract our isPending state

```jsx
const { data: trips, isPending } = useFetch(url);
```

Next same as we did at the beginning we will use same logical && for our loading
above our trips ul and under our title we can set this

```jsx
{isPending && <h3>Loading...</h3>}
```

Now everytime that fetch get's triggered we get a loading

Note: To set longer load times without creating extra function like I did at the very beginning we can open our _dev-console_ in browser then go to _Network_ => _Throttling_ => _Slow3G_ Now refresh the page (it will be very very slow)

German: _Dev-Konsole_ => _Netzwerkanalyse_ => _Drosselung_ => _3G_ oder langsamer

P.S. Throttling works waaaaay better on chrome than Firefox developer edition it's been 30min and my page didn't load on 4g for firefox :C