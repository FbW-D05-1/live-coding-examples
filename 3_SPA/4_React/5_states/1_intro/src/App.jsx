import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Hosam");
  const [events, setEvents] = useState([
    { title: "Hosam's bday Party", id: 1 },
    { title: "Micha's bday Party", id: 2 },
    { title: "Ali's bday Party", id: 3 },
  ]);

  console.log(events);
  return (
    <div className="App">
      <h1>Hi my name is {name}</h1>
      <button onClick={() => setName("Ali")}>Click me to change name</button>

      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
