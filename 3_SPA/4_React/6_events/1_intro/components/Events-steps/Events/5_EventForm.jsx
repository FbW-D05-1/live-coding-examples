import { useState } from "react";
import "./styles/NewEventForm.css";
// add handleClose at the very end since it was annoying that modal was still there or better yet give it as a challenge
// now we will show the events in our main page

// add select boxes after showing useRef

export default function FifthEventForm({ addEvent, handleClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // after useRef
  const [location, setLocation] = useState("tokyo");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("tokyo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000) + 5,
      // after useRef
      location: location,
    };
    console.log(event);

    // here i will add the addEvent function
    addEvent(event);

    resetForm();
    handleClose();
  };

  return (
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
      {/* after useRef */}
      <label>
        <span>Event Location:</span>
        <select onChane={(e) => setLocation(e.target.value)}>
          <option value="tokyo">Tokyo</option>
          <option value="berlin">Berlin</option>
          <option value="london">London</option>
          <option value="Washington">Washington</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
