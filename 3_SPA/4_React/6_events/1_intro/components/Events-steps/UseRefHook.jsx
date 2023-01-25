import { useState, useRef } from "react";
import "./styles/NewEventForm.css";

// useRef hook is like vanilla js targeting
// we will replace our controlled inputs with useRef
// typically you would still use useState
// with useRef we are reverting back to vanilla js

export default function UseRefHook({ addEvent, handleClose }) {
  const title = useRef();
  const date = useRef();

  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date);

    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
    handleClose();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" ref={title} />
      </label>

      <label>
        <span>Event Date:</span>
        <input type="date" ref={date} />
      </label>
      <button>Submit</button>
    </form>
  );
}
