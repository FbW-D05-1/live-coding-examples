# Exact path and Switch

We've set up the React router in the previous Readme, but we saw this little problem. Wherever we went in the pages our HomePage followed us like a stalker. It did show the component/pages that we needed but HomePage just didn't want to f off.

But why does it do this?

Well, there's two things at play here that's causing this.
The first is that currently the router is not set up to only show one page component at a time, so it could quite easily show three components at once if it wanted to. And we'll address that soon, using something called a switch component, which is going to allow us to show only one route component at a time.

The second thing is the way in which the React router is evaluated, the routes we go to and how it's matching them to the routes we set up in the app component. Right now, if we just go to forward slash, the React router looks at that path and then it tries to match it against the route paths that we've set up in the app component. But if we go to forward slash about(/about), then we see two components the home one and the about one. **And that's because the React router is looking at the path we go to forward slash about(/about) and is trying to match that against the route path we've set up in our project but before that, it also looks at the home route that we set up, which is just forward slash. And decides that, that's a match as well.** 

tl;dr basically everything with a forward slash is home for our dummy react.

Now you might think this is odd, but this is the way that the React router matches paths.
Well, forward slash does exist in a forward slash about(/about), so it gets a tick. Same with all our other page components. It matches it, and therefore it shows the home component. Finally, it tries to match against the forward slash contact(/contact) route, and it fails. So we don't see that in the browser.

So these are the two things causing us to see the two components at once.
First, the lack of the switch component tag, which means that more than one component can show at a time and a second the way that the React router matches routes, and we're going to combat both of those issues now.

## Combat Time
So the first thing We want to do is wrap all of the routes with the switch component. And what that's going to do is only allow one component to show at a time on a page from these routes.


So let's, first of all, import it from React router Dom Switch:
```jsx
import { BrowserRouter, Route, Switch } from "react-router-dom";
``` 


and then let's come down and wrap all the route components with Switch:

```jsx
<BrowserRouter>
    <Switch>

        <Route path="/">
            <HomePage />
        </Route>
        <Route path="/about">
            <AboutPage />
        </Route>
        <Route path="/contact">
            <ContactPage />
        </Route>

    </Switch>
</BrowserRouter>
```
So now only one of these can show at a time in the browser.


And now if we go to just forward slash, then we get the home page component. BUT if we go anywhere else it's still only Home page?????????

So the switch component is working. We're only showing one at a time.
Unfortunately, we're showing the wrong component.

We're going in the right direction, but we need to understand why it's showing home component and not the page we need.

So the reason it's only showing the home component for either of these routes is because when we go to a certain route, React router is trying to match the routes from top to bottom(and obv Home is first). Now remember, we said we can only show one at a time because if the switch component which we are doing now. But when it matches against forward slash about(/about), it starts at the top. And at the top it's Home. So this is a match. And so it shows home component. And since we can only show one at a time. It doesn't even move on to the next one to try and match home with about.

## So what now?
We give up and don't use Routes.

jk.

Well, what we can do is we can add on a prop called **exact** to the home route:

```jsx
<Route exact path="/">
    <HomePage />
</Route>
```

And now this is telling the React router to only match this EXACT path for home component. So if we go to forward slash about(/about) whereas before it would look at home route and say, Yep, that's inside this route right here, so it's a match.
Now it won't match because we're saying, look, only match this if we're going to is **exactly forward slash**. Even if it includes forward slash it is not exactly/only forward slash.

Now everything works gn8.