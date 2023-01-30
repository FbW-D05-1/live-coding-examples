import "./App.css";
import { useState } from "react";
import TripList from "./components/TripList";
import "./bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

function App() {
  const [showPage, setShowPage] = useState(true);
  return (
    <div className="App">
      <Container>
        {showPage && <TripList />}
        <Button onClick={() => setShowPage(false)}>Hide</Button>
        <Button onClick={() => setShowPage(true)}>Show</Button>
      </Container>
    </div>
  );
}

export default App;
