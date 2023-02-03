# Reducers && useReducer

So how it works currently with our context is that each time we pass a new value right every component will have to be re-rendered but a lot of the time when you're working with context, context state and different ways of updating states, you might want to reach for something called a reducer instead.


## Reducer

A reducer is just a function, and it's a way of working with state. Just like useState is a way of working with states. But it reduces, makes it easier to work with multiple bits of related states that can be updated in several different ways.

An example might be an array of data where you can:

> add to it

> delete from it

> update an item inside of it

> sort it

> filter it

> and so on...

There might be many ways you need to update that state, and you might need varying logic to do it.

Now you could do that using the useState hook and several different functions inside the component to update the state, depending on what we needed to do to it. But then it bloats our component with many functions and as our logic becomes a little more complex, it becomes harder to manage.
Also, you might want to perform multiple state changes at once, so you could end up with calling several different functions at once. Now, this again becomes harder to manage in react, and also our state updates become less reliable and less predictable.

We can use a reducer function, which is a single function that encapsulates all the logic.


Now you might be thinking that our state an object with a property of color is not exactly complex, and you're right, it's not.Yes a useState would be enough. Leave me be. We are ending this lesson then bye.


For people who actually want to learn reducer then

## Let's start using reducer

So let's go to our ThemeContext.js and import our useReducer:

```jsx
import { createContext, useReducer } from "react";
```

And what this does for us, is allow us to specify a reducer function, which is going to be responsible for updating our state and keeping all of that update logic together in one place. And it also lets us specify an initial state value as well.

Inside our component then, first we need a function for the reducer before we can pass it in:

```js
const themeReducer = () => {
    console.log("we will do this later");
  };
```

We can leave it empty for now. then let's creat the useReducer

```js
// we will pass name of the function
  useReducer(themeReducer);
```

As the second argument we will pass in initial state that we want to use. In our case that's going to be an object with the color property and the value:

```js
  useReducer(themeReducer, {
    color: "hotpink"
  });
```

Just like the useState hook, it returns to values inside an array so it can capture them the same way.

```js
 const [state, dispatch] = useReducer(themeReducer, {
    color: "hotpink"
  });
```

Now these two values are the state, which to begin with is going to be the initial state that we specified and next to it also what's known as a dispatch function.

The dispatch function is a way that we can dispatch a state change to reducer function that we made, so if in the future we want to call this function to change our state we do that using the dispatch function.

## Let's take a quick look at how that works.

Let's imagine we want to change this color value in the state.

How do we do that?

Well, first of all, We are going to create a function called changeColor below the useReducer:

```jsx
 const changeColor = (color) => {
    // The type property basically describes the type of state change we want to make.
    // The payload is any data we want to base the state change on.
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
```

So now we're calling dispatch function and we're putting in the action object with  two properties on it.(yes type always has to be fully capitalized snake_case)

Now, in turn, when we use dispatch function, React looks at the reducer function associated with that dispatch, and it finds our theme reducer function and then it fires that function to make the state change inside it.

Now let's update our ThemeContext function that we left empty: (***NOTE LAST TIME I PUT THIS INSIDE OF THE _ThemeProvider_ FUNCTION IT SHOULD BE OUTSIDE ABOVE IT***)

```jsx
 //So then we can use both of those two things to update the state.
  const themeReducer = (state, action) => {
    //So all we need to do is return a value which represents the new state at the end.
    switch (action.type) {
      case "CHANGE_COLOR":
        // Right now, there's only the color property, but in the future, there might be more properties as well, and we need to add all those properties to the new state value because if we don't, then they just won't exist after this update happens.
        return { ...state, color: action.payload };
      // finally, we also need a default case in the Switch statement to pass back a default value in case none of the cases matched
      default:
        // And that default value is just going to be an unchanged state.
        return state;
    }
  };
```

So now we have the initial state value, which is an object with a color property set to be hotpink to begin with if we want to change that color in the States. We can call changeColor function and passing a new color that's going to fire dispatch where we specify the type and the payload on the action object. And in turn, this fires the theme reducer function, which takes in the current state and the action. We check the action type, and if it's equal to changeColor, then we return a new state object with a new value that then updates the state object that we get back from the use reducer.


Now all we need to do is pass any values into the value prop of the provider that we want to provide to our components, cause currently we are just passing this _{{color : 'hotpink'}}_ object in that never changes.

We want to pass in the state object:

```jsx
                                //color and change our color function
 <ThemeContext.Provider value={{ ...state, changeColor }}>
```

## Let's try using it inside a component.

So since we have a great custom hook to changeTheme we don't have to rewrite anything just destructure in Navbar.jsx:

```jsx
 const { color, changeColor } = useTheme();
```

Then let's add a click event on the nav itself

```jsx
  <nav onClick={() => changeColor("red")}>
```

And now we have a ugly red navbar congrats