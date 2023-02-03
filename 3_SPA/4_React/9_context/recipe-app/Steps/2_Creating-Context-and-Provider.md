# Creating a Context & Provider

From this point on, we are going to be using context to make some kind of a theme selector where a user can select a color theme for the websites. And our context is going to hold on to that theme color value, which will then be accessible throughout our applications components. 


So the first thing we need to do is create a context and then also a context-provider, which can wrap our application and provide the context value to it.

Now to do this, we'll be creating a brand new file inside a new folder in our src.

> I will call my folder context and the file: ThemeContext.js

Again like always call them whatever you want but it always has to make sense

And in this file now we can create our context and context-provider:

> Note: It's possible to have multiple contexts

```js
// first import from react
import { createContext } from "react";

//So this then returns a new context object, which is now stored in theme context.
export const ThemeContext = createContext();

```

And on that context object is a context provider component, which we can then access by writing:
```jsx
<ThemeContext.Provider>
  {/* This is to provide a component that would wrap any part of our component tree to provide it with the value of this context. */}
</ThemeContext.Provider>;
```

Now let's go to index.js:

```jsx
import { ThemeContext } from "./context/ThemeContext";
// don't forget to import first


// then at the bottom wrap our App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <ThemeContext.Provider>
        <App />
    </ThemeContext.Provider>

    );
```

And what this would do is provide a global context value to the entire application because it's wrapping the root component.


So We could add in a value prop to ThemeContext.Provider and put an object. And then in the object we could have a color property:

```jsx
<ThemeContext.Provider value={{ color: "hotpink" }}>
```

And now any components in our application can access this same context value an object with a color property red.

Now, although this way of wrapping the up component is completely fine.
You'll find most react developers do a slightly different way. And the reason they do it a different way is to make it easier to update context values like _{{color: 'hotpink'}}_ in the future, cause it might change at some point.


So a better way to do this is to first come back to our ThemeContext.js file and then create in there a function called ThemeProvider, which will just be a react component in itself:

```jsx
export function ThemeProvider({ children }) {
    return(
        <ThemeContext.Provider value={{color: "hotpink"}}>
            {children}
        </ThemeContext.Provider>
    )
}
```

Now let's head back to index.js and wrap it in our new future proof Provider:

```jsx
<ThemeProvider>
    <App />
</ThemeProvider>
```

I hope i don't have to explain you why we did this.

Next up, how can we access context value in our other components in the project.