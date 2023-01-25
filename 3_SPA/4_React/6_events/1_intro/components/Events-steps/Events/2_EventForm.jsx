import { useState } from "react";
import "./styles/NewEventForm.css";
// for this lesson we will learn how to store value in a state with onChange
export default function SecondEventForm() {
  // first show how it looks without state
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  // then we want to store the values inside of an state
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  //   with this example we see issue that we can't pass two states over so anon functions are better
  // issue would be any onchange would save for them both the same thing
  //   const handleChange = (e) => {
  //     setTitle(e.target.value);
  //     setDate(e.target.value);
  //   };
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <button>Submit</button>
      <p>
        title - {title}, date - {date}
      </p>
    </form>
  );
}
