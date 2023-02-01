# Programmatic Redirects

So before we begin with new Topic i don't like that "My Articles" in our App.jsx doesn't bring back to HomePage so let's change that.

```jsx
<Link exact to="/">
    <h1>My Articles</h1>
</Link>
```

Then in our hook let's set setError to:
```jsx
setError(e.message);
```

This way we won't get a ton of error messages in console and just written Not found


## Now let's redirect users back to home page

So what works now on this page? Our error so we can use it to redirect our users.

Firstly we will bring back our useEffect Hook. And now use our error as a dependency.

```jsx
  useEffect(() => {
    // first check if error has a vlaue and isn't null
    // we don't want to redirect if there is no error
    if (error) {
      //redirect
    }
  }, [error]);
```

So how do we redirect now? We use another Hook 🗿

useHistory again from rrd
```jsx
import { useParams, useHistory } from "react-router-dom";
```
Now let's invoke that hook(i personally always call it history).
history will be an object and it has a methods that are used to redirect our users.

 One method is go back
**_history.goBack()_**
 and what it does is take us back one in the history of the user. It's like a button in the browser but that's not what we need, Instead what we want to use is **_history.push()_** and that allows us to push or redirect the user to another route.

```jsx
  useEffect(() => {
    if (error) {
      history.push("/")
      // it can be anything /about or /contact but we want to redirect back to home
    }
  }, [error]);
```

Sounds like we are done but this is not quite finished yet because say we go to a page for an article, the ID is valid. And so therefore, after the fetch, we get an error. Now we're not going to see that error before, then we redirect the user because as soon as we get the error, we're going to redirect them straight away.

I'd like to maybe give them two seconds to read the error.

## setTimeout time

```jsx
useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error]);
```
It works. It just redirects the user after a couple of seconds to the home page.
If you don't remember what setTimout does well too bad.


Now there is quickly just one more thing I need to do, and that's to add history as a dependency in useEffect.

```jsx
useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);
```

So it's not going to trigger this to rerun at any point. And even if it did, then until we have an error, we're not going to redirect the user anyway. So like I said, it's not going to affect the way this works. It's just the other way to react will give us a warning in the console: look add history as an effect dependency.

tl;dr it doesn't affect anything we just don't want annoying warnings clustered in our terminal **:^)**