import { useState } from "react";
import "./styles/NewEventForm.css";
// Controlled Inputs
export default function SecondEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // first we will reset our form

  // it wont reset without value so we need to add value to inputs
  const resetForm = () => {
    setTitle("");
    setDate("");
  };
  // when we have connection between state and value and other way around it's called controlled input

  return (
    <form className="new-event-form">
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
      <button>Submit</button>
      <p>
        title - {title}, date - {date}
      </p>
      <a onClick={resetForm}>reset the form</a>
    </form>
  );
}
