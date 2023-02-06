# Accessing Context Values

We've created ThemeContext and a Provider for the ThemeContext, which is providing a value of the context to all the children.

So what I want to show you is how to access that context now in one of the components, and we'll do that inside the NavBar.jsx component.

First we will always need to import a special hook:
```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
```

And now we can use this hook down in the component to use a specific context:

```jsx
export default function Navbar() {
  // inside the useContext we pass in whatever context we need to access
  // we need the theme context not provider, provider wraps children where it can be used
  // inside curly brackets we get the value that we have set
  const { color } = useContext(ThemeContext);
```

So let's use that color now:

```jsx
<div className="navbar" style={{ background: color }}>
```

Now save and try it out, now we have a beautiful hosampink navbar.