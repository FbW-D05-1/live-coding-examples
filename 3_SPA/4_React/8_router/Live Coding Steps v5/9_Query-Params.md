# Query Parameters

All right, then gang, so there's one more thing I want to you to see when it comes to the react router that thing is query parameters not to be confused with route parameters.

Query parameters are the parts of the URL that you see at the end. We learned that for example everything after question mark(?) they're normally key value pairs like name Ex. Ali or equals email or something like that.(localhost:3000/articles/?name=ali)

They're often used for searches on a website, and we'll see how to do something like that with them later.

But for now, I just want to introduce you to the idea of them with a simple example.

## Trying out

Now, when we're using query parameters, we don't need to set up a whole route for every query parameter. For example, if we wanted to have a query parameter on the contact route, we wouldn't need to set up a separate routes which have that query parameter like this:

```jsx
<Route path="/contact/?">
    <ContactPage />
</Route>
```
Instead, we can just go directly into the contact components and we can detect any query parameters at the end of this route.

## Let's do that

The way we do this is by using another hook from React router dom, which we have to import in at the top of the file:

```jsx
import { useLocation } from "react-router-dom";
```

What this allows us to do is basically get the query string from the path in the browser.

```jsx
const queryString = useLocation().search;
```
So **_useLocation_** gets us information about the current location that we're on in the browser.

There is a property on that called _**search**_, which we want to get, and that is the query parameter. It's called _**search**_ and it gets us. The question mark, the key, the equal sign and the value.

So let's just log this to the console:

```js
console.log(queryString);
```

So now if we go to contact page in the browser then tamper with the link we should get almost everything logged. For example try something like this => _http://localhost:3000/contact?name=monke_

our console should show _?name=monke_

Next, we need to pass our queryString into some kind of format where we can easily get the different properties.

So the way we're going to do that is by using something called a 

## URL search params function.

This is just normal JavaScript not react, and it's a _new URLSearchParams()_ object that we want and all we have to do is putting our query string like this:

```js
const queryParams = new URLSearchParams(queryString);
```

And what that does is give us query params object and that object will have a get method to get a specific parameter:

```jsx
const name = queryParams.get("name");
```
So like this i could get the name. So what we're doing is saying, we want this name parameter(?name=monke) and we're storing it inside this name constant(the code above), and that will be the value of monke.

So now what we could do is output that in the browser:

```jsx
 <h2>Hey {name}, Contact us here...</h2>
```

Awesome. Now, if we change to a different value it will change aswell

So that, my friends, is the React router, in a nutshell. You are going to be using it a hell of a lot going forward on in all of the different projects, be it personal or work. It is that important.

We will takle Router V6 tomorrow, gn8