import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Button, Card, Alert } from "react-bootstrap";
import TypeWriterEffect from "react-typewriter-effect";
import uuid from "react-uuid";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const {
    data: trips,
    isPending: loading,
    errors: error,
  } = useFetch(url, { type: "GET" });

  return (
    <>
      <div className="mt-5">
        {loading && (
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#3F3D56",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            startDelay={500}
            cursorColor="#3F3D56"
            multiText={[
              "Loading...",
              "Please Wait...",
              "Hol up...",
              "Bruh upgrade inet...",
              "Potato kekw",
            ]}
            multiTextDelay={1000}
            typeSpeed={20}
          />
        )}

        {error && <Alert variant="danger">{error.message}</Alert>}

        {!loading &&
          trips?.map((trip) => (
            <Card key={uuid()}>
              <Card.Body>{trip.title}</Card.Body>
              <Card.Footer>{trip.price}</Card.Footer>
            </Card>
          ))}
      </div>
      <div className="mt-3">
        <Button
          onClick={() => setUrl("http://localhost:3000/trips/?loc=europe")}
        >
          Euro Trips
        </Button>{" "}
        <Button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </Button>
      </div>
    </>
  );
}
