export default function EventList({ events, handleDelete }) {
  return (
    <>
      {events.map((event, i) => (
        <div key={event.id}>
          <h2>
            {i + 1} - {event.title}
          </h2>
          <p>{event.location}</p>
          <p>{event.date}</p>
          <button onClick={() => handleDelete(event.id)}>Delete ME PLOX</button>
        </div>
      ))}
    </>
  );
}
