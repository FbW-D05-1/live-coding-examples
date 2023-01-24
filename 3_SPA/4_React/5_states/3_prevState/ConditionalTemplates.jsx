import { useState } from "react";

import "./App.css";

function ConditionalTemplate() {
  const [showEvents, setShowEvents] = useState(true);

  // down in code what it will do is showEvents is true so if its true then it goes ahead and runs this and outputs the evenets
  // as next thing what i wanna do is show each button when other is true or false
  // not bad practice but ternary if else means it will always jump to else is something goes wrong
  const [events, setEvents] = useState([
    { title: "Joe's birthday bash", id: 1 },
    { title: "Tom's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const realHandleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  return (
    <div className="ConditionalTemplate">
      {/* {showEvents ? (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )} */}
      {
        // good practice since what if we get some issues it will jump always to else
        showEvents && (
          <div>
            <button onClick={() => setShowEvents(false)}>hide events</button>
          </div>
        )
      }

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents &&
        events.map((event, index) => (
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

export default ConditionalTemplate;
