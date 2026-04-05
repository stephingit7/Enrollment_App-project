import React from "react";

function CalendarView({ events }) {
  return (
    <div className="calendar-view premium-card">
      <h2>Event Calendar</h2><h8>Event</h8>
      {events.length > 0 ? (
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="calendar-event-item">
              <div className="event-indicator"></div>
              <span className="event-title">{event.title}</span>
              <span className="event-date">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events-message">No Event to display</p>
      )}
    </div>
  );
}

export default CalendarView;