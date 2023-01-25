import "./App.css";
import Modal from "./components/Modal";
import ReusableModal from "./components/ReusableModal";

function App() {
  return (
    <div className="App">
      <ReusableModal>
        <h2>10% Off Coupon Code!!!!</h2>
        <p>Use the code BABABOOEY2023</p>
      </ReusableModal>
    </div>
  );
}

export default App;
