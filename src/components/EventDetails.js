import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [id]);

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/events/${id}`, { method: 'DELETE' })
      .then(() => navigate('/'))
      .catch((error) => console.error('Error deleting event:', error));
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <button onClick={() => navigate(`/edit-event/${event.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/">Back to Events</Link>
    </div>
  );
}

export default EventDetails;
