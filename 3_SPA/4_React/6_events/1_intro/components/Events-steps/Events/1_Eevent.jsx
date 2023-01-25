import "./styles/NewEventForm.css";

export default function EventForm() {
  return (
    <form className="new-event-form">
      {/* htmlFor is same as for in normie html, since for is reserved for for loops*/}
      {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}

      {/* without htmlFor we can just wrap it inside of Label itself */}

      <label>
        <span>Event Title:</span>
        <input type="text" />
      </label>

      <label>
        <span>Event Date:</span>
        <input type="date" />
      </label>
      <button>Submit</button>
    </form>
  );
}
