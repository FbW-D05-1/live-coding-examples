import { useState } from "react";

import "./App.css";
// first we create a new folder inside src called components
// second we need to import each component here
import Title from "./components/Title";
// thirdly we create css for Title itself
function App() {
  const [showEvents, setShowEvents] = useState(true);

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
    <div className="App">
      <Title />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}

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

export default App;
