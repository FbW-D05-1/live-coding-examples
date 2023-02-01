# The useParams Hook

So the next step is to extract that _ID_ route parameter in the article components so that we can use it to fetch the article with that _ID_. And then we can show all the content from the fetched article in ArticlePage.

tl;dr We want to set it so each content from the fetched article will be injected into ArticlePage.jsx

We head back to ArticlePage.jsx component, where we need to extract that _ID_ parameter.

So here comes le Hook, first import 😾

```jsx
                        //don't forget it comes from rrd not react
import {useParams} from 'react-router-dom'
```

So now we can use this down here:

```jsx
export default function ArticlePage() {

    const params = useParams();
```

And what this does is, it give us a parameter object and on that object will be any route parameters from the URL on this specific page. So it will look at the URL and it will see that we have an ID parameter.

So it will give use => params.id property

And the name of this property is dictated by whatever we call that route parameter inside this Route component =>  <Route path="/articles/:id">

Since i called it id for me it will be params.id if it was :abcd it would be params.abcd. You get the gist.

Just like props we could go ahead and use that as params.id but I will destructure it:

```jsx
const { id } = useParams();
```

And then let's see if it will work:

```jsx
return <div>Article - { id }</div>;
```

Open the browser and see if all pages are getting same id as the url.


AYYY

## Now we can fetch that single article.

Let's again import our good ol useFetch Hook and reuse it to fetch single article.

Fetching single article by id with our hook:

```jsx
  const url = `http://localhost:4000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
```

Now we can bring loadings and errors like always i won't explain everything again.

```jsx
{isPending && <h2>Loading...</h2>} 
{error && <h2>{error}</h2>}
```

Now since we won't be mapping article (cause it's a singular article duh) we can't use article?.map so what we can do instead is just like above with loading and error use &&

```jsx
{article && (
    <div>
        <h2>{article.title}</h2>
        <p>By {article.author}</p>
        <p>{article.body}</p>
    </div>
)}
```

Everything here should be self explanatory but incase you don't understand what .title, .author, .body is then check out db.json.

Now every article we click is dynamic.

If we set url with id above ones that we have we get errors but we want to redirect.

Next we will redirect if page doesn't exist etc.