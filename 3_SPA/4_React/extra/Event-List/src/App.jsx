import { useState, useId } from "react";
import "./App.css";
import EventForm from "./components/EventForm/EventForm";

import { EventList, Title, Modal } from "./components/index";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  const handleClick = (id) => {
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
      {showEvents && <EventList events={events} handleDelete={handleClick} />}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>hide events</button>
      )}
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>show events</button>
      )}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <EventForm addEvent={addEvent} handleClose={handleClose} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
