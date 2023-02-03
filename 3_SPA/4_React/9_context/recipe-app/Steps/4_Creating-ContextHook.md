# Creating a Custom Context Hook

We're consuming the context in the Navbar component and the way we consume in that context is absolutely fine. We can continue to do that if we want to.

However, what I like to do is wrap my context consumer in a custom hook, and that's going to do two things for us.

First, it's going to reduce the amount of code that we need to write in our components when we use the context.

Second, it's going to allow us to add extra functionality inside the hook as well.


Let's create a new hook in our _hooks_ folder and remember it has to start with the name use... We will call ours useTheme.js

And so inside this file, now we can create this custom hook:

```js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  // we get context again but since we have only one result we don't need to destructue
  const context = useContext(ThemeContext);

  // Now the context is going to be undefined if we're trying to use our context outside the scope of it.
  // imagine instead of wrapping App component, we wrapped the theme provider just around one or two components
  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvdider");
  }

  return context;
};
```

So now we can use this hook anywhere and we will only need a single import AND we have an extra error check.

Let's head back to NavBar and change things up:

```jsx
import { useTheme } from "../hooks/useTheme";
// don't forget to import ofc

export default function Navbar() {
  const { color } = useTheme();
```

And the navbar is still hosamPink <3

Next we will see some reducers.