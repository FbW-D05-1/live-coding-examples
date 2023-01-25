import { useState } from "react";
import reactLogo from "./assets/react.svg";
// first we need to import it from our Node Modules
import ReactDOM from "react-dom";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  // then we need to activate .createPortal method
  return ReactDOM.createPortal(
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>,
    // after comma we specify where in body we want to put this documuent
    document.getElementById("here")
  );
}

export default App;
