import { useState } from "react";
import "./styles/NewEventForm.css";
// Submitting Forms with onSubmit
// now we will collect the data and show it later in the page

export default function SecondEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    // default behaviour is always refresh and we don't want that
    e.preventDefault();

    // now we start collecting trash
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000) + 5,
    };
    console.log(event);

    resetForm();
  };

  return (
    // important don't attach the onSubmit to button cause it's not the button that emits the event
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
      <button>Submit</button>
    </form>
  );
}
