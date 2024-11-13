import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [id]);

  const handleDelete = () => {
    fetch(`/events/${id}`, { method: 'DELETE' })
      .then(() => navigate('/'));
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="card">
        <h3 className="card-title">{event.title}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <div className="card-actions">
          <button className="edit" onClick={() => navigate(`/edit-event/${event.id}`)}>Edit</button>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
        <Link to="/" className="back-link" style={{ color: '#00796b' }}>Back to Events</Link>
      </div>
    </div>
  );
}

export default EventDetails;
