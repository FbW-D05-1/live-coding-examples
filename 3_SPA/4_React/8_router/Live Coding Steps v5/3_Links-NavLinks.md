# Links and Nav Links

Alright, then so we have these different routes are working now, but at the moment, what we have to do is type the route out into the browser and then hit Enter in order to go to that specific Page. So what I'd like to do instead is place a few links inside the Nav so we can just click on those to go to these different pages.

So what I'm going to do is an anchor tag where the href is going to be just forward slash, and that's going to be for the home page and then same for all other pages:

```jsx
return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/contact">Contact us</a>
        </nav>
```

So now when we click on these, we should go to these different pages or components, right?
So let's give this a whirl so we can see all of those links up in the navbar.

And if we click on the about one, it goes to forward slash about and we see the about component that works. Same for other pages.

So all of this is working, but this is not really the way we're meant to work with React because what's happening at the minute is every time we click on an anchor tag, we're sending a fresh request to the server and the service is responding with that blank HTML page every time and then React is injecting the correct component for that route.(Take a look at our refresh icon it's refreshing, and WE WANT TO AVOID THAT).

Now, when we're working with React, react right to the whole idea is to intercept those requests to the server.

![How Router intercepts with our requests](./images/router.png)

Let's say we hosted to vercel right.
tl;dr with normal anchor tag it goes back to vercel requests a new html page and then shows it to the user. That's slow it takes time and has to reload basically everything so what router-dom does when Link should be clicked it says no don't do a request to that server here take it from me instead.

![What really happens](./images/tldr.png)

To see that we actually send a request go in browser developer console to:

> Network

> Clear it

> Go to a different Page

> You can see we are making request for the specific page => contact, about, home

> We get a HTML file returned

If you click that file you will get empty HTML page that you already have in public, just try with different pages and see for yourself.

## The correct way

So the way we do this in React is by using a special component called a Link component instead of anchor tags.

So we need to import this first of all:

```jsx
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
```

Now we can replace all our a tags with Links

```jsx
<nav>
    <h1>My Articles</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
</nav>
```

Now if you somehow missed it in 0_Intro.md about updating your index.js it won't work so go back and redo the step!!!!

So now if we open the network tab no request is being sent Nice see ya later! JK now we talk about...

## NavLink

again we can import it again:
```jsx
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
```

We can change all of these to NavLink as well:
```jsx
 <nav>
    <h1>My Articles</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
</nav>
```

Now what's the difference between a Link components and a NavLink component?

Well, the main difference is that this is for navigation, because what it does is it applies an active class to any link that is currently active.

So say we click on the About Link. Now, when it goes too far, it's about if that path is what we're seeing in the browser, then it applies an active class to this particular anchor tag so we can style it differently.

So what You're going to do is open up the App.css, paste in a style.

```css
.App {
  max-width: 960px;
  margin: 0 auto;

}

nav {
  display: flex;
  margin: 0 auto 60px;
  gap: 10px;
  align-items: center;
}

nav h1 {
  margin-right: auto;
}

nav a {
  color: #333;
  padding: 4px 10px;
}

nav a.active {
  color: white;
  background-color: #333;
  text-decoration: none;
}
```

And what that does is show the user what page we're currently on.

Now you see wherever you click somehow home is always active. Exact same reason when we had the Routing problem with routes matching.

So the way we can get around this is by using an exact prop on the NavLink, much like we did on the routes:

```jsx
  <NavLink exact to="/">
    Home
  </NavLink>
```

Beautiful, So there we go, my friends, that is Links and NavLinks. Always use these when you're navigating to other pages in your React app instead of just using plain anchor tags.