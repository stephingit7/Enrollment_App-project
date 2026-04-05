import React, { useEffect, useState } from "react";
import { getEvents, rsvpToEvent } from "../api";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((res) => setEvents(res.data));
  }, []);

  const handleRSVP = async (id) => {
    const attendee = window.prompt("Enter your name:");
    if (attendee) {
      await rsvpToEvent(id, attendee);
      setEvents((prev) =>
        prev.map((event) =>
          event.id === id ? { ...event, attendees: [...event.attendees, attendee] } : event
        )
      );
    }
  };

  if (events.length === 0) return <div className="no-events-message">No events available</div>;

  return (
    <div className="event-list-container">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-list-item premium-card">
            <div className="event-header">
              <h3>{event.title}</h3>
              <span className="attendee-count">{event.attendees.length} attending</span>
            </div>
            <p className="event-description">{event.description}</p>
            <div className="event-actions">
              <button onClick={() => handleRSVP(event.id)} className="premium-button">
                RSVP
              </button>
              <a href={event.eventLink} target="_blank" rel="noopener noreferrer" className="premium-button secondary">
                Join Event
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;