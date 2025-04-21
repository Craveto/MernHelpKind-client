import React, { useState } from "react";
import "./Event.css";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    status: "active",
  });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({
      name: "",
      date: "",
      location: "",
      description: "",
      status: "active",
    });
  };

  return (
    <div className="event-container">
      <h2 className="event-heading">Event Management</h2>

      <form className="event-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleChange}
          required
        />
        <select name="status" value={newEvent.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">Add Event</button>
      </form>

      <div className="event-list">
        {events.length === 0 ? (
          <p className="no-events">No events yet.</p>
        ) : (
          <table className="event-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Event;
