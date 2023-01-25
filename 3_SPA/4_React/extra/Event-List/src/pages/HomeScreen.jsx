import { useState } from "react";
import "./App.css";

import { Title, Modal } from "./components/index";

function App() {
  const [showModal, setShowModal] = useState(true);

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const subtitle = "All the latest events as a Prop";

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
      <Title title="All the events in your Area" subtitle={subtitle} />

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
      {/* <Modal>
        <h1>10% off coupon code!!!</h1>
        <div>use code nice </div>
        <input type="text" />
        <button>Click me</button>
      </Modal> */}

      {/* <Modal>
        <Title title="hi" subtitle="bye" />
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
      </Modal> */}

      {showModal ? (
        <Modal handleClose={handleModalClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et
            assumenda sint impedit laudantium ullam explicabo dolorum eaque vel
            ex ut aut, eos quidem aspernatur molestiae accusantium quae maxime.
            Aspernatur?
          </p>
        </Modal>
      ) : (
        <h1>Error</h1>
      )}

      <button onClick={handleModalOpen}>Show me Da Modal plox</button>
    </div>
  );
}

export default App;
