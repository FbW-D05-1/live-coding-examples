import { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";

// we can pass in functions as a prop aswell

// Now normally you'd want to do this when the child component needs to manipulate states in the parent components.

// For example, we could house some state in the parent component, maybe a Boolean, which we can call
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et
            assumenda sint impedit laudantium ullam explicabo dolorum eaque vel
            ex ut aut, eos quidem aspernatur molestiae accusantium quae maxime.
            Aspernatur?
          </p>
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Show me da Modal</button>
      </div>
    </div>
  );
}

export default App;
