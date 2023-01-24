import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Hosam's bday Party", id: 1 },
    { title: "Micha's bday Party", id: 2 },
    { title: "Ali's bday Party", id: 3 },
  ]);

  const handleClick = (id) => {
    console.log(id);

    setEvents((prevEvents) =>
      prevEvents.filter((event) => {
        return id !== event.id;
      })
    );
  };

  return (
    <div className="App">
      {/* <h1>Number is {count}</h1>

      <div>
        <button onClick={() => setCount(count + 1)}>Increse Count</button>
      </div>
      <div>
        <button
          onClick={() =>
            setCount((prevCount) => {
              console.log(prevCount);
              return prevCount - 1;
            })
          }
        >
          Decrese Count
        </button>
      </div> */}

      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index + 1} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}> Delete</button>
          </div>
        ))}

      {!showEvents && (
        <div>
          <button
            onClick={() =>
              setShowEvents((prevShowEvents) => (prevShowEvents = true))
            }
          >
            Show Events
          </button>
        </div>
      )}
      {showEvents && (
        <div>
          <button
            onClick={() =>
              setShowEvents((prevShowEvents) => (prevShowEvents = false))
            }
          >
            Hide Events
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
