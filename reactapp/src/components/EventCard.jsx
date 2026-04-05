import React from "react";

function EventCard({ event }) {
  return (
    <div className="event-card premium-card">
      <div className="event-card-header">
        <h3>{event.title}</h3>
        <span className="attendee-count">{event.attendees.length} attending</span>
      </div>
      <p className="event-description">{event.description}</p>
      <div className="event-card-footer">
        <a href={event.eventLink} target="_blank" rel="noopener noreferrer" className="premium-button">
          Join Event
        </a>
      </div>
    </div>
  );
}

export default EventCard;