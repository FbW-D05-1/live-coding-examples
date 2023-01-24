import { useState } from "react";

import "./App.css";

function App() {
  const [events, setEvents] = useState([
    { title: "Joe's birthday bash", id: 1 },
    { title: "Tom's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    // to delete the event we want we wil need to know inside this function which event was clicked exactly
    // we need to pass in an argument which we can accept in this handler function, which will tell us which events the user wants to delete
    // for example we can take in id as an argument both up here and down onClick
    // for onClick we will need anonymous function that fires itself onclick if we don't do that it will fire instantly on load

    console.log(id);
    //BAD PRACTICE AND NOT FUTURE PROOF
    // now to delete we will use setEvent with filter method
    // we want to remove the said event with id
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
  };
  // Best PRACTICE
  // prevState which is guaranteed to be up to date
  // rule of thumb, whenever your state update depends on the previous state that we are updating always use a callback function to acccess the previous state first of all  and then base any state update
  // basically everything will work the same but now we are using the best practice
  const realHandleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
          <button
            onClick={() => {
              realHandleClick(event.id);
            }}
          >
            Delete event
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
