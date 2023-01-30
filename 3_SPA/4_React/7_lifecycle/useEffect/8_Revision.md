# Revision 
​
## useEffect
​
​
​
`useEffect` is a Hook in React that allows you to synchronize a component with an external system. Effects are a way to synchronize a component with the browser, a network, or a web worker.
​
### Example
​
​
```jsx 
import { useEffect, useState } from 'react';
​
function Example() {
  const [count, setCount] = useState(0);
​
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
​
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
``` 
​
In this example, `useEffect` is used to update the document title with the current count every time the `count` state is updated.
​
-   The first argument of useEffect is a function that contains the effect logic.
-   The second argument of useEffect is an array of dependencies. The effect will only re-run if any of the dependencies change.
​
You can also add a cleanup function that will be called before the component unmounts or before the effect is re-run.
​
​
​
```jsx
useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
        document.title = "initial title";
    }
}, [count]);
``` 
​
To run an effect only on the initial render, you can pass an empty array as the second argument.
​
​
​
`useEffect(() => {
    // this effect will only run on the initial render
}, []);` 
​
By using `useEffect`, we can synchronize a component with an external system.
​
​
## Dependency Array
​
The second argument of `useEffect` is an array of dependencies. This array tells `useEffect` which values from the component's state and props should be "observed" for changes. If any of the values in the dependency array change, the effect will be re-run. If you pass an empty array, the effect will only run on the initial render and not re-run again.
​
It is important to be mindful of the dependencies you pass to `useEffect`, as passing the wrong values can cause unnecessary re-renders and performance issues.
​
For example, in the above example, `useEffect` is only re-run when the `count` state changes because `count` is the only value in the dependency array. If we added another state variable to the dependency array, such as `example`, the effect would re-run whenever either `count` or `example` changed.
​
### Example
​
```jsx
useEffect(() => {
    document.title = `You clicked ${count} times`;
}, [count, example]);
```
In this example, the effect will re-run when either `count` or `example` change, so be sure to include only the values that your effect truly depends on.
​
## useCallback
​
`useCallback` is a Hook in React that allows you to memoize a function. It will return a memoized version of the callback that only changes if one of the dependencies has changed.
​
It works similar to `useMemo` which is used to memoize a value, but `useCallback` is used to memoize a function.
​
### Example
​
```jsx
import { useCallback } from  'react'; 
function  Parent({ value }) { 
const memoizedCallback = useCallback( () => { 
    // do something with value 
}, 
  [value] 
 ); 
 return  <Child onClick={memoizedCallback} />; 
}
```
​
In this example, `useCallback` is used to memoize the callback function that is passed as a prop to the `Child` component. The callback only changes if the `value` prop changes. This can be useful for performance optimization, as it will prevent unnecessary re-renders of the child component.
​
The first argument of `useCallback` is the callback function. The second argument of `useCallback` is an array of dependencies.
​
It's important to note that the callback will only change if one of the dependencies has changed, so be sure to include only the values that the callback truly depends on.
​
​
```jsx
useCallback( () => { 
​
  // do something with value1 and value2 
​
 }, 
 [value1, value2] 
);
```
​
In this example, the callback will change if either `value1` or `value2` change.
​
`useCallback` can be particularly useful when passing callbacks down through multiple levels of components. It can help prevent unnecessary re-renders and improve the performance of your application.
​
## Custom hooks
​
Custom Hooks are a way to reuse stateful logic between components in React. They are a way to extract component logic into reusable functions. They follow a naming convention of starting with the word "use" to indicate that it is a Hook.
​
Here's an example of a custom Hook that manages a local state for a toggle:
​
### Example
​
```jsx
import { useState } from 'react';
​
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}
​
function MyComponent() {
  const [isToggled, toggle] = useToggle(false);
​
  return (
    <div>
      <p>The toggle is currently {isToggled ? 'on' : 'off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```
​
In this example, `useToggle` is a custom Hook that manages the local state for a toggle. It takes an initial value as an argument and returns the current value and a function to toggle the value. The `MyComponent` component uses this Hook to display the current value of the toggle and a button to toggle it.
​
As you can see, Custom Hooks allow you to extract component logic into reusable functions, so that you can share stateful logic between different components. You can also use other Hooks inside a custom Hook like `useState` and `useEffect`
​
It's important to note that custom Hooks must follow the naming convention of starting with the word "use" and should only be called at the top level of a component.
​
Custom Hooks can be useful when you want to share stateful logic between multiple components, or when you want to abstract away complex logic from your components to make them more readable and maintainable.
​
​
## Errors
​
Handling errors is an important aspect of any application as it allows the user to understand what went wrong and take appropriate action. In this guide, we will show you how to handle errors in a React application using the `try` and `catch` block.
​
First, we create a new state for the error and initialize it with a `null` value:
​
​
​
```jsx
const [error, setError] = useState(null);
``` 
​
We use the `try` and `catch` block inside our fetch function:
​
​
​
```jsx
const fetchData = async () => {
    try {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
        setError(null);
    } catch (e) {
        setError(e);
    }
};
``` 
​
We can then pass the error as a prop to our component:
​
​
​
```jsx
return { data, error };
``` 
​
In our component, we grab the prop and use a conditional statement to display the error message:
​
​
​
```jsx
const { data, error } = useFetch(url);
​
{error && <h3>Error: {error.message}</h3>}
``` 
​
With this approach, we can handle errors in a clean and organized way, making it easier for the user to understand and take action.
​
### Full Code
​
```jsx
const [error, setError] = useState(null);
​
const  fetchData = async () => {
​
try {
​
const  res = await  fetch(url);
​
if (!res.ok) {
​
throw  new  Error(res.statusText);
​
}
​
const  json = await  res.json();
​
setData(json);
​
setError(null);
​
} catch (e) {
​
setError(e);
​
}
​
};
​
return { data, error };
​
const { data, error } = useFetch(url);
​
  
​
{
​
error  &&  <h3>Error: {error.message}</h3>;
​
}
```
​
## Cleanup Functions
​
Cleanup functions are used in conjunction with the `useEffect` hook to perform tasks before a component re-renders or unmounts. These functions are useful for cleaning up any side effects or subscriptions that were created in the `useEffect` hook.
​
For example, if you are using `useEffect` to subscribe to a real-time data stream, you would want to unsubscribe from that stream before the component re-renders or unmounts. This is where a cleanup function comes in.
​
Here's an example of how to use a cleanup function with the `useEffect` hook:
​
​
​
```jsx
function  ExampleComponent() {
​
useEffect(() => {
​
const  subscription = someDataStream.subscribe();
​
  
// Cleanup function
​
return () => {
​
subscription.unsubscribe();
​
};
​
}, [someDataStream]);
​
  
 // ... component logic
​
}
```
​
In this example, the cleanup function is the function that is returned from the `useEffect` callback. It is called just before the component re-renders or unmounts, allowing you to unsubscribe from the data stream and clean up any other resources.
​
It's also possible to pass a second argument on the useEffect which contain the dependencies that the effect rely on, so when the dependencies change, the effect will run again with the new values. If you don't pass any dependency the effect will run only once.
​
It's important to note that cleanup functions are optional and not all `useEffect` hooks need them. They should only be used when necessary to clean up any resources or subscriptions that were created in the hook.
​
​
##  Avoiding infinite loops
​
Infinite loops occur when a state update inside a useEffect callback causes another render and subsequently another state update, creating an endless cycle. To avoid this, we must ensure that the state updates inside the callback are only triggered by specific conditions.
​
One way to do this is by passing a dependency array as the second argument to useEffect. This array contains a list of state variables that the effect depends on. If the values of any of the variables in the dependency array change, the effect will run again. If the dependency array is left empty or not provided, the effect will run on every render.
​
Another way to avoid infinite loops is by using the `useCallback` hook to create a memoized callback function. This function will only change when its dependencies change, avoiding unnecessary re-renders.
​
In summary, to avoid infinite loops in your code, make sure to pass a dependency array to your useEffect callbacks, and use the `useCallback` hook to create memoized callback functions.