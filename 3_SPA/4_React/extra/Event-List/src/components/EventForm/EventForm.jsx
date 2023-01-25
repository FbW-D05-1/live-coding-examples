import { useState, useId } from "react";
import "./EventForm.css";

export default function EventForm({ handleClose, addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("cumbridge");
  const randomId = useId();
  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("cumbridge");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: randomId,
    };
    console.log(event);
    addEvent(event);
    resetForm();
    handleClose();
  };

  return (
    <>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Event Loaction:</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="cumbridge">Cumbridge</option>
            <option value="limgrave">Limgrave</option>
            <option value="altus-plateu">Altus - Plateu</option>
            <option value="alis-plateu">Alis Plateu</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
