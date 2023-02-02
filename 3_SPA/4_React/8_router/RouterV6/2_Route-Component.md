# The Route Component

So we saw there are a lot of breaking changes.

## So let's Start fixing

Now, the first thing I want to do is comment out wherever we're using nested routes because some of the areas that we saw are caused by the nested routes, but we're not going to cover those until later on. So I want to comment them out now so that it's not causing those errors in the browser.

We have nested Routes in

> ProductDetailsScreen.jsx

Comment out useRouteMatch, down at the bottom the nested Route comment that boiii out aswell and you can delete the import for routeMatch

> AboutScreen.jsx

Again at the bottom comment out nested route

We will still get warning but our page will load so we can at least see something

Now that's out of the way I want to talk about how we use the route components in version 6 in App.jsx.

However, just quickly, first of all, I want to talk about this switch component that we saw before.

Typically, we normally put all of our routes inside the switch component, and that means that only one route can match at a time inside the switch component, and therefore we don't see multiple different pages on the screen at once.

Now in React router version 6, we don't have a switch component, so this is going to cause an error. So I'm going to delete it from App.jsx(don't forget import). And instead of the switch component, we have a Routes components:

```jsx
// don't forget to import
// this is our new switch
<Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
</Routes>
```

So when we are using version 6 we have to place all of our routes inside a **_Routes_** component whenever we have a route that we want to register. If we didn't have this component, it wouldn't work.

It would cause errors.

We have to wrap all of the route components inside a **_Routes_** component. So I guess it's kinda the **_Switch_** component got replaced with the **_Routes_** component.

I know it sounds very confusing don't blame me, they named that shit same as the nested children but plural just bear with me(the italic Bold is main Routes component that wraps all other routes).

![heard you like routes](./images/you-like-routes.png)

So that's the first major change

## Now let's talk about Routes components 😂
Again confusing naming I know, but basically we will talk about the inner nested Route(s)

So when we were using version 5 we registered our paths like this:

```jsx
<Route exact path="/">
    <Home />
<Route>
```
or
```jsx
<Route path="/" component={Home} />
```


first we don't need _**exact**_ anymore because the default behavior now of these route components is to exact match, which is pretty very nice. Yes all routes are now exact.

So remove dat exact
```jsx
<Route path="/">
    <Home />
<Route>
```
The second change is how we actually register what components or JSX we want to show for a particular routes. We don't nest them as children but rather pass them as a prop like the second example but instead of writing component we pass the component as element prop. And we have to use tags aswell since it isn't a reference but full JSX component passed down.

```jsx
<Route path="/" element={<Home />} />
```

So we replace the nested component with prop element, and we set that equal to the JSX that we want to show for the particular route path

So let's update all of them now...

So after we are done our page should load up easy right?

Now, obviously, if we try to use those nested routes inside pages, then it's not going to work.

Now, the other thing I wanted to show you is that we can 
## Inline some JSX template inside the element prop

If for whatever reason you want to create a full page inside of your route component.... well you can do that now 🤔
You have to use parenthesis inside your element and shoot out a whole new Page
example:

```jsx
<Route path="/test" element={(
    <div>
        <h2>Why on earth would you do this?</h2>
        <p>Seriously what's wrong with you</p>
    </div>
)} />
```

## Summarize

> Switch gone and replaced with new confusing Routes

> Each route component is on a self closing tag and has element prop where we output the JSX

> Exact gone and we don't miss it

> Inline pages....

Seriously don't use Inline Pages