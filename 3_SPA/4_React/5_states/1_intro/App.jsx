import { useState } from "react";
import "./App.css";

function App() {
  // first we create a variable
  // next i want to output that in my site
  let name = "mario";
  //now we need a function that changes the name

  const handleClick = (event) => {
    name = "goomba";
    console.log(name);
  };
  // the click does run the function and changes the value but by this stage our component has already been fully evaluated

  // what needs to happen for this to work is that when we change value,that it's used in our template, React needs to re-evaluate the full component so it can see the new value

  // that's why we have to create states in special way so components get re-evaluated
  // useState is one of many hooks given by React each one of them has it's own special functions and all hooks start with the name use

  // what's special in useState that it creates a state and whenever that state value changes, it triggers our component to be re-evaluated with the new state value
  const [name1, setName1] = useState("Joe");
  // name1 will be the value itself setName is a function to change that state and anything inside useState is our initial value

  const handleClick1 = (e) => {
    setName1("Goomba");
    // why we see the old value on first click
    // it has to do with how react schedlues updates to the state and it just so happens that the console log runs before the update actually happens
    console.log(name1);
  };

  return (
    <div className="App">
      <h1>my name is {name1}</h1>

      <button onClick={handleClick1}>Change name</button>
    </div>
    //   <h1>my name is {name}</h1>

    // i want to change the name on click
    // you would expect that name would change from mario to luigi now
    // exactly it won't work why?
    // the html doesn't get re-rendered onClick here and if it did it would have to refresh our page

    //   <button onClick={handleClick}>Change name</button>
    // </div>
  );
}

export default App;
