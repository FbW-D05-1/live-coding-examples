# Fetching Data and Injecting it to a Page

A quick side step away so that we can fetch some data and start to inject that into our application so we can work more with fetching and the router together.

So to do this, we'll be using data folder we created in 0_Intro.md.

And to do this, we'll be using the use fetch hook that we created a couple of days ago.

```jsx
import { useState, useEffect, useRef } from "react";

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const options = useRef(_options);
  useEffect(() => {
    console.log(options);
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setError(e);
          setIsPending(false);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isPending, error };
};
```
We're just going to be recycling that hook that we created earlier.

Remember to have the JSON Server package running and watching db.json file.


First head to HomePage.jsx and then import useFetch and then destructure data, loading and errors.

```jsx
import { useFetch } from "../hooks/useFetch";

export default function HomePage() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch(" http://localhost:4000/articles");
```

And now we can get rid of static h2 and p from our Page and replace them with:

```jsx
import { useFetch } from "../hooks/useFetch";

export default function HomePage() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch(" http://localhost:4000/articles");
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {articles?.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  );
}
```

I won't be explaining every tiny detail if you forgot what what does go back and read old readmes. Currently in HomePage we will only see title and author and not the article itself well we will make it dynamic so each one of these cards will be clickable and a new page will open and show us full article.

## Now some CSS Time.

```css
.home .card {
    padding: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
}
```

So this all works, and we need you to do this sidestep and just fetch the data so that in the next Readme, we can start to think about how we can link from these Articles. If we click on one of the particular Articles we get to a fresh page where we show full Article dymanically.

gn8 sweet prince