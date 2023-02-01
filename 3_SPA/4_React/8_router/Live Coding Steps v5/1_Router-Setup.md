# How to use/ setup our Routes

So we're going to set up our different pages and the React router.

So the first thing I'd like to do is create three page components one for the home page, one for an about page and lastly one for contact page

So **INSIDE** the **Source(src)** folder, when I have different pages, what I tend to do is create a "Pages" folder some developers might call them "Screens", same thing with each component name for example: HomePage.jsx, HomeScreen.jsx. It's up to you which one you want to choose but if you start working use whatever they tell you to.

So when I'm done creating all the pages i nedd(HomePage.jsx, AboutPage.jsx and ContactPage.jsx) i will use shortcut rfc on each one of them inside Each one of them i will simply create a h2 heading  write the name of the page and create a p tag with some lorem ipsum for now.

```jsx
// inside homepage
return (
    <div>
      <h2>HomePage</h2>
      <p>lorem ipsum...</p>
    </div>
  );
//inside aboutpage
return (
    <div>
      <h2>AboutPage</h2>
      <p>lorem ipsum...</p>
    </div>
  );
//inside contactpage
return (
    <div>
      <h2>ContactPage</h2>
      <p>lorem ipsum...</p>
    </div>
  );
```

So now we have our three pages set up.

Reminder Incase you missed it in 0_Intro.md you have to install a package without it routes won't work.

Now we need to install the React router package so that we can link to these three different pages. So go back and install react router.

After everything is done we can now go back to App.jsx/js and import some packages from react-router-dom.

In App.jsx:
```jsx
import { BrowserRouter, Route } from "react-router-dom";
```

So the browser router is the thing that's going to wrap everything inside our App component. It's going to wrap our entire application that includes routes. And then Route is something that we're going to use to make a route.

So what I'm going to do, first of all, is come down after "div class=app" and use the browser router component like this:

```jsx
return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>
      </BrowserRouter>
    </div>
  );
```

So now we have this browser router component surrounding our template in there, and it surrounds anything that it's going to use the route so where we might have links or different route components showing etc. Surrounds all of that.

When we've done that, the next thing we need to do is generate or make a few different routes, three in total in this example.
So I might want a route which is just forward slash(/), which loads in the home component, then about us which is (/about) and lastly contact us which will be (/contact);

So let's create those down inside BrowserRouter:

```jsx
<BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>
        {/* inside that, we use a prop called path and we set that forwardslash */}
        <Route path="/">
          {/* And then what we would do is Nest our home component right here,Don't forget we need to import that */}
          <HomePage />
        </Route>
      </BrowserRouter>
```

So let's do the same for the other two. And don't forget to import!!!:

```jsx
<BrowserRouter>

    <Route path="/">
        <HomePage />
    </Route>

    <Route path="/about">
        <AboutPage />
    </Route>

    <Route path="/contact">
        <ContactPage />
    </Route>

</BrowserRouter>
```

So if we go to forward slash in the browser our react is going to look at that path, it's going to match it to the component and it's going to say, OK, for this route, I'm going to load in the home component into the browser. Same with all other paths try it in the browser and see.

So now you noticed that our HomePage is always visible which is a little odd. We will tackle that in the next README :^)