# Nested Routes

So how do we create Nested Routes in V6?

previously it was like this:
```jsx
<Route path="/about/offers">
    <OffersScreen />
</Route>
```

So if we used this and went into /about/offers it wouldn't load anymore. If we open console we will get an error:

```No routes matched location "/about/offers"```

If we go to /about it will spit out a ton of errors and first one will be:

 ```A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>```

 We know what it means if not go to 1_Intro.md

So let's do what it tells us to do:

```jsx
<Routes>
    // and now all paths are relative to parent so we don't need to set /about/offers it can be just offers
    <Route path="offers" element={<OffersScreen />} />
</Routes>
```

Now since all paths are relative to parents remember that i said all paths in our App.jsx are exact? Yes that would be an issue now so let's change it

```jsx
    //we only add an asterisk and that fixes the issue
<Route path="/about/*" element={<About />} />
```

This asterisk means match against any of the [slug](https://developer.mozilla.org/en-US/docs/Glossary/Slug) or path that comes after the about part.

tl;dr Asterisk will match anything **AFTER** /about/

Even if we add anything random after about it will just show us About Page since random one doesn't exist.

Now if we test out /about/offers it works.

## Let's fix ProductDetailsScreen

So the path id was changable since each product had it's own id. with useRouteMatch() we got the current path that we are on. So since our paths are now relative we don't need them anymore

```jsx
<Routes>
    <Route path="offers" element={<OffersScreen />} />
</Routes>
```
Go back to App.jsx and add asterisk at the end after the .../:id

Now let's go to product page and choose one then add /offers it will all work

Congrats you Learned most important changes in V6