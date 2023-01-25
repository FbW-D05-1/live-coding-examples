import { useRef, useId } from "react";
import "./EventForm.css";

export default function UseRef({ handleClose, addEvent }) {
  const title = useRef();
  const date = useRef();

  const randomId = useId();

  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title.current.value,
      date: date.current.value,

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
          <input type="text" ref={title} />
        </label>
        <label>
          <span>Event Date:</span>
          <input type="date" ref={date} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
