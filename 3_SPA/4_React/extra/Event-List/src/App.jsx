import { useState, useId } from "react";
import "./App.css";

import { EventList, Title, Modal } from "./components/index";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const handleClick = (id) => {
    console.log(id);

    setEvents((prevEvents) =>
      prevEvents.filter((event) => {
        return id !== event.id;
      })
    );
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the latest events as a Prop";

  return (
    <div className="App">
      <Title title="Welcum" subtitle={subtitle} />
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>hide events</button>
      )}
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>show events</button>
      )}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}></Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
