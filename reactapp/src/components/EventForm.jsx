import React, { useState } from "react";

function EventForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, date, description, attendees: [], eventLink: "#" });
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="event-form premium-card">
      <h2>Add New Event</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="premium-input"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="premium-input"
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="premium-textarea"
        />
      </div>
      <button type="submit" className="premium-button primary">Add Event</button>
    </form>
  );
}

export default EventForm;