# Redirects and useNavigate(don't mix up with Nav)

Let's take a look how we can perform a redirect for certain routes and aswell how to programmatically redirect users.

Things have changed but war never changes.

Before we always used the ```<Redirect to="/" />``` component

But now in V6 it doesn't exist And instead, we have to use a new component called the navigate component. Again it doesn't mean Nav(navigator).

So let's try it:
```jsx
// don't forget to import
// we still keep the to=""
<Route path="/redirect" element={<Navigate to="/" />} />
```

We could also create conditional redirects as well based on certain criteria.

For example, you might have a website with an authentication system where a user can be logged in or out. You want to redirect users who are logged out away from protected pages. Dependent on whether a user is logged in or out. You can redirect them to a different page, like a log in form. Or when checkout happens in a web shop and users get redirected.

So let's do a very simple example based on what I just described, but very simplified.

First let's create a new condition at the top:
```jsx
const [cartIsEmpty] = useState(true);
```

Now let's make a new Route:
```jsx
<Route
    path="/checkout"
        element={
            // if it's true gets redirected if not then it renders the next component
            cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>
        }
/>
```

Yes i said don't use inline but i ain't gonna create a new page shut up.

## Programmatically Redirect

In V5 we used the useHistory hook rip :c

In V6 we sadly don't use history anymore

So let's go to AboutScreen.jsx and see the new one:

Import useNavigate hook first then inside the function:
```jsx
const navigate = useNavigate();
```

Let's create a button below our paragraphs now:
```jsx
<button onClick={() => navigate("/products")}>See our Products</button>
```