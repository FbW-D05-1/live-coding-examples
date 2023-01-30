import "./App.css";
import TripList from "./components/TripList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <TripList />
      </Container>
    </div>
  );
}

export default App;
