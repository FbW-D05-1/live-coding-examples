# ~~Programmatic Redirects~~ Redirect Component

Everything's working pretty well, but what if a user goes to some kind of route that doesn't exist?
Like let's try to go to:
```
localhost:3000/monke
```

~~Well we are fucked aren't we~~

Fear not frend there is always a solution

## What's happening

Well, at the minute we just see a blank page underneath nav bar because we don't have a room set up for this or any other page you know, that doesn't exist. So we can combat this by making some kind of catch all routes which will match everything else that isn't defined in our routes.

So if you user goes to a route that exists, then great, they see that page but if they go to a route that doesn't exist, we catch it ~~and enslave our user~~. And then inside that route we could either show a 404 page components or, in our case,we will have a redirect component.

##  Create a kind of catch all route

So what we want to do is create this kind of catchall route at the very end of all of the other routes. So it only matches or only tries to match if none of the others match because it goes from top to bottom.

So let's do a route component first of all and then for the path we can use asterisk:

```jsx
// as we already learned it means: look just match anything
<Route path="*"></Route>
```
Matching starts from top:
> Tries to match /monke with /

doesn't match

> Tries to match /monke with /about

doesn't match

> Tries to match /monke with /contact

doesn't match

> Tries to match /monke with *

Well asterisk means anything so match.
And it says, Look, I don't care what the route is, just match me. So it matches against forward slash monke(/monke) or forward slash or whatever, and it's in here that we can then either do some kind of 404 page component. I'm not going to do that. But I suggest you to try it.

Instead, what I'm going to do is use a redirect component and that's going to redirect the user to some other page.

## Redirect component

Now we need to import that from the React router:

```jsx
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,


  Redirect,
} from "react-router-dom";
```

And then down at the bottom we can just nest the redirect components like so:
```jsx
<Route path="*">
    <Redirect to="/"/>
</Route>
```
And all we need to do is add a _**to**_ prop, which is going to be to wherever we want to redirect the user. I will leave that to be home page but it could be to something else. If you prefer, really doesn't matter.

So now in the browser, if I go to forward slash monke, then it just redirects me back to the home page.

It doesn't matter what the route is. If it doesn't match any of the others that we've set up, then it will just be caught at the end and then redirect them to the home page.

Next we will talk about query params. gn8