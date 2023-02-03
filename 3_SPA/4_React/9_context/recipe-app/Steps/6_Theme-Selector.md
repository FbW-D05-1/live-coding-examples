# Color Theme Selector

So what we are going to do now is just play around and make a theme color selector.

Let's create a new File inside components folder we will call it ThemeSelector.jsx + a css file for it aswell

inside ThemeSelector.jsx:

```jsx
import { useTheme } from "../hooks/useTheme";
//styles
import "./ThemeSelector.css";

export default function ThemeSelector() {
  return <div></div>;
}
```

So what i want to do is have an option to select colors and then change the background color with selected color

let's make some color array:
```js
 const themeColors = ["#BFACAA", "#9792E3", "#BBA0B2"];
```

Now let's make them and make a button for each one:
```jsx
return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
```

some styling:
```css
.theme-selector {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 12000px;
    margin: 20px auto;
}

.theme-buttons div {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 15px;
    border-radius: 50%;
}
```

So everything is almost done now we need to import the theme selector under our navbar in App.jsx:

```jsx
 <BrowserRouter>
        <Navbar />
        <ThemeSelector />
    <Switch>
```

now we can select a custom theme not only on navbar but we could add it everywhere we want since our App is the child of ThemeProvider.