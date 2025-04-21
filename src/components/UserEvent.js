import React from "react";
import "./UserEvent.css";

const UserEvent = ({ events }) => {
    console.log("events prop:", events);
  return (
    <div className="user-event-section">
      <h2 className="user-event-heading">Upcoming Events</h2>

      {events.length === 0 ? (
        <p className="no-user-events">No events available right now.</p>
      ) : (
        <div className="user-event-grid">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <h3 className="event-title">{event.name}</h3>
              <p className="event-date">📅 {new Date(event.date).toLocaleString()}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-desc">{event.description}</p>
              <span className={`event-status ${event.status}`}>{event.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserEvent;
