import { useState } from "react";
import "./App.css";
import { EventList, UseRefHook, Modal, Title } from "./components/index";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // at the step fifth event delete objects inside of this state
  const [events, setEvents] = useState([]);

  // fifth step we are going to pass down our events from component
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the latest events in MarioLand";

  return (
    <div className="App">
      <Title title="Welcum Scrubs" subtitle={subtitle} />
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>hide events</button>
      )}
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>show events</button>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          {/* at the end of fifth step pass down handleClose */}
          <UseRefHook addEvent={addEvent} handleClose={handleClose} />
        </Modal>
      )}
      {/* Now will add a new button to create brand new event 
      what we will do is create a new Form component first then Nest it in our Modal component 
      lastly on click of this button modal with form will pop up and everything we write there will be sent over and will create a new event
      */}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
