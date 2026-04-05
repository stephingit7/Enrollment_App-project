import React, { useState } from "react";
import EventForm from "./EventForm";

const Home = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      date: "2025-09-10",
      description: "Weekly project sync and planning session",
      attendees: [],
      eventLink: "#"
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "2025-09-12",
      description: "Annual technology innovation conference with industry leaders",
      attendees: [],
      eventLink: "#"
    }
  ]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  return (
    <div className="home-container">
      <EventForm onAdd={addEvent} />
    </div>
  );
};

export default Home;