# Fetchen von Daten und Einfügen in eine Page
​
​
Ein kurzer Abstecher, um **einige Daten** abzrufen und sie in unsere Anwendung **zu injecten**, damit wir mehr mit **Fetching und Router** zusammen arbeiten können.
​
Dazu verwenden wir den Datenordner, den wir in **0_introDE.md** erstellt haben.
​
Und dazu verwenden wir den **useFetch-Hook**, den wir vor ein paar Tagen erstellt haben.
​
​
```jsx
​
import { useState, useEffect, useRef } from "react";
​
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
​
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
​
    return () => {
      controller.abort();
    };
  }, [url, options]);
​
  return { data, isPending, error };
};
​
```
​
​
Wir werden einfach den Hook, den wir zuvor erstellt haben, wiederverwenden.
​
==Denkt daran, das JSON Server-Paket laufen zu lassen und die db.json-Datei zu beobachten.==
​
==Geht zuerst zu HomePage.jsx, importiert dann useFetch und destrukturiert data, loading und errors.==
​
​
```jsx
​
import { useFetch } from "../hooks/useFetch";
​
export default function HomePage() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch(" http://localhost:4000/articles");
​
```
​
​
Und jetzt können wir die statischen h2 und p aus unserer Page entfernen und sie mit folgendem ersetzen:
​
​
```jsx
​
import { useFetch } from "../hooks/useFetch";
​
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
​
```
​
​
Ich werde nicht jedes kleine Detail erklären, wenn ihr vergessen habt, was was tut, geht zurück und lest alte Readmes. Derzeit sehen wir in Home-Page nur Title und Author, aber  Article müssen wir dynamisch machen, so dass jede dieser Cards anklickbar ist, und eine neue Page öffnet und uns das ganze Article zeigt.
​
​
## Jetzt etwas CSS-Zeit.
​
​
```css
​
.home .card {
    padding: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
}
​
```
​
​
Das alles funktioniert also, und wir brauchen dich, um diesen Sidestep zu machen und einfach die Daten zu holen, damit wir in der nächsten Readme darüber nachdenken können, wie wir von diesem Article aus verlinken können. Wenn wir auf einen der einzelnen Articles klicken, gelangen wir auf eine neue Page, auf der wir das gesamte Article dymanisch anzeigen.
​
gn8 süßer Prinz/ süße Prinzessin 😘😘