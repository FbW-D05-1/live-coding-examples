## Props

Props are basically how we can transfer/ pass down data from parent component to one of it's child components and from that child to the next one

So if we had multiple pages in our website, we could reuse the prop-data on each page but pass a different prop-data into it each time

Note: any data type or even a function can be passed down as a prop


Examples:

## Setting and passing down
How to pass down a prop to a Example component
First imagine we have a variable named foo that we want to pass down our prop
```js
const foo = "example string"
```

```jsx
<Example foo={foo} / >
```
since our prop is an object the first "foo=" is the key it can be named anything and the one inside square brackets is our value that we pass down

## Using
How to use the passed down variable inside our Example.jsx

```jsx
// first step we need to write props => properties inside parenthesis
// again it can be called anything you want but most devs use props
export default function Example(props) {
  return (
    <div>
    // i want to use the passed down string here in h1
    // we need to use the key we set above
      <h1 className="title">{props.foo}</h1>
    </div>
  );
}
```
## destructuring
Now instead of using dot notation it is always better to destructure especially if we have more than one prop
```jsx
// instead of writing props we would write empty curly brackets
// and then we can write the key value we passed
export default function Example({foo}) {
  return (
    <div>
    // now we don't need to use dot notation but can just use foo
      <h1 className="title">{foo}</h1>
    </div>
  );
}
```
## Multiple props
imagine handleClick is a function and setBoolean is a state for a bool that is initally a true
```jsx
<Example foo={foo} handleClick={handleClick} setBoolean={setBoolean}/ >
```
now using without destructuring
```jsx
export default function Example(props) {
  return (
    <div>
      <h1 className="title">{props.foo}</h1>
      <button onClick={() => props.handleClick()}>Click me to do something</button>
      <button onClick={() => props.setBoolean(false)}>Click me change the bool</button>
    </div>
  );
}
```
same with destructuring
```jsx
export default function Example({foo, handleClick, setBoolean}) {
  return (
    <div>
      <h1 className="title">{foo}</h1>
      <button onClick={() => handleClick()}>Click me to do something</button>
      <button onClick={() => setBoolean(false)}>Click me change the bool</button>
    </div>
  );
}
```