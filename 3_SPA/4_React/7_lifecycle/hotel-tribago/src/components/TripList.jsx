import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import uuid from "react-uuid";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips } = useFetch(url);

  return (
    <div>
      <ul>
        {trips?.map((trip) => (
          <li key={uuid()}>
            <p>{trip.title}</p>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setUrl("http://localhost:3000/trips/?loc=europe")}>
        Euro Trips
      </button>
      <button onClick={() => setUrl("http://localhost:3000/trips")}>
        All trips
      </button>
    </div>
  );
}
