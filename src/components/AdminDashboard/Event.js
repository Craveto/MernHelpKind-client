import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/events/${editingId}`, newEvent);
      } else {
        await axios.post("http://localhost:5000/api/events", newEvent);
      }

      setNewEvent({
        name: "",
        date: "",
        location: "",
        description: "",
        status: "active",
      });

      setIsEditing(false);
      setEditingId(null);
      fetchEvents();
    } catch (err) {
      console.error("Error submitting event:", err);
    }
  };

  const handleEdit = (event) => {
    setNewEvent(event);
    setIsEditing(true);
    setEditingId(event._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
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
        <button type="submit">{isEditing ? "Update Event" : "Add Event"}</button>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td>{event.name}</td>
                  <td>{new Date(event.date).toLocaleString()}</td>
                  <td>{event.location}</td>
                  <td>{event.status}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(event)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(event._id)}>Delete</button>
                  </td>
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
