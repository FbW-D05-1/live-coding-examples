import { useState } from "react";

import "./App.css";
import BestPractice from "./components/BestPractice";

import Title from "./components/Title";

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

  const subtitle = "All the latest events in Bababooey";

  return (
    <div className="App">
      {/* first we want to add an attribute you can call it what you want but name
      it so it makes sense */}
      {/* currently we will pass only string but you can pass all data types  */}
      {/* after passing one prop now we can pass multiple props in a single component */}
      <Title title="Events in you Area" subtitle={subtitle} />
      <BestPractice title="another Title" subtitle="another sub" />
      {/* now imagine everywhere you need a title you can use it and just pass a new prop to it instead of copy pasting same code */}
      <Title
        title="Events for another page"
        subtitle="subtitles for another page"
      />
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
