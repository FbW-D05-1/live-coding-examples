# Light && Dark Mode Selector

[From Google Icons](https://fonts.google.com/icons) We will take the Brightneess 4 or 6 Icon and use it as our button. We can download the svg, Next let's create assets folder in our src and paste them there.

But for now, what we need to do, first of all, is go to the ThemeContext.js created and implement the

## functionality of this light and dark mode.

So first of all, We are going to add on an extra property to useReducers initial state object in ThemeProvider function:

```jsx
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "hotpink",
    // if you want you can make your initial value light
    mode: "dark",
  });
```

Now We also want to create a function like we have the changeColor, but this time for changeMode:

```jsx
const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
```

Next in our themeReducer action we need a new case for mode:

```jsx
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };

    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
```


Now again, we want to spread the current state that we take in because if we don't do that and we just return a new object and we say the mode is whatever the payload is, then this becomes the new state object. And there's no color property on that anymore. So we won't get the color property in any component consuming that context. So we have to spread the current state, first of all, to make sure we still get that color property.

There's one more thing we need to do.

And that's just a pass in the changeMode function into the value prop:

```jsx
   <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
```


So next then, we want to use the changeMode function inside our ThemeSelector.jsx:

import icon
```jsx
import iconSun from "../assets/sun.svg";
```
We will create a new div for it above the theme buttons:

```jsx
<div className="mode-toggle">
    <img src={iconSun} alt="dark mode toggler icon" />
</div>
```

So next let's create a function but this time not inline since we have more to do:

first let's destructure our useTheme:

```jsx
 const { changeColor, changeMode, mode } = useTheme();
```

now the function itself:

```jsx
const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
```

Let's make dynamic icon to see if everything works we can style later:

```jsx
<img
    src={mode === "dark" ? iconSun : iconMoon}
    onClick={toggleMode}
    alt="dark/light mode toggler icon"
/>
```

So icons switch now but we have to make one a bit lighter when mode changes so let's style the icons in ThemeSelector.css:

```css
.mode-toggle {
    margin-right: auto;
}

.mode-toggle img {
    width: 24px;
    height: 24px;
    cursor: pointer;
}
```
```jsx
 <img
src={mode === "dark" ? iconSun : iconMoon}
onClick={toggleMode}
alt="dark/light mode toggler icon"

          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
```

## Styling Time

So we will have to grab our mode value and inject it into different components and with condition style them, easy right? Let's go then.

 In App.jsx:

```jsx
 const { mode } = useTheme();


   <div className={`App ${mode}`}>
```

Now in App.css:

```css
.App.dark {
  background-color: #333;
}
```

Yay BUTTTT our recipes didn't change so let's head to RecipeList.jsx component:

```jsx
  const { mode } = useTheme();
// rest of the code

 <div key={recipe.id} className={`card ${mode}`}>
```

and the css:

```css
/* dark mode */

.recipe-list .card.dark {
  background: #555
}

.recipe-list .card.dark p,
.recipe-list .card.dark h3,
.recipe-list .card.dark div {
  color: #e4e4e4
}
```

brilliant we now have a Dark/ Light Theme, enjoy

![hol up](./images/but-wait.jpg)

If we click on each Recipe.jsx with dark mode it looks ugly so quick change that too yourself




```jsx
<div className={`recipe ${mode}`}>
```

```css
.recipe.dark {
  background: #555;
  color: #e4e4e4;
}
```

gj