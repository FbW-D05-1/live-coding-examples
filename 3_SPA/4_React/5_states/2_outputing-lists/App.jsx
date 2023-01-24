import { useState } from "react";

import "./App.css";

function App() {
  // for every state we need their own variables for example: name, age, email etc...
  const [name, setName] = useState("Joe");
  const [events, setEvents] = useState([
    { title: "Joes birthday bash", id: 1 },
    { title: "Toms live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const handleClick = () => {
    console.log(name);
  };
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {
        // instead of normal curly brackets we have to use normal parenthesis look how our return above looks like this is how jsx works for rendering HTML elements
        // when we don't have a key console will give us a Warning when mapping html elements each child must have a key value so thei become unique
        // tl;dr a key prop is something hat React can use to keep track of template items in an Array
        //let's say later on we need to remove/ update one of the items how will react know which one has to be removed or updated
        // IF we don't have anything unique like id's to add we can just use the index instead it isn't a good practice tho unless you are really really sure it's going to be okay
        // for example some items will be deleted then others might get changed and the indexing is ultimately going to change
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
