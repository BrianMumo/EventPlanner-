import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '100%' }}
      />
      {filteredEvents.map((event) => (
        <div className="card" key={event.id}>
          <h3 className="card-title">{event.title}</h3>
          <p className="card-date">{event.date} at {event.time}</p>
          <div className="card-actions">
            <Link to={`/events/${event.id}`}>
              <button className="edit">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
