import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EventForm({ addEvent, updateEvent }) {
  const { id: eventId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (eventId) {
      fetch(`${process.env.REACT_APP_API_URL}/events/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDate(data.date);
          setTime(data.time);
          setLocation(data.location);
          setDescription(data.description);
        });
    }
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !time || !location || !description) {
      setMessage('Please fill out all fields.');
      return;
    }

    const event = { title, date, time, location, description };

    fetch(eventId ? `${process.env.REACT_APP_API_URL}/events/${eventId}` : `${process.env.REACT_APP_API_URL}/events`, {
      method: eventId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (eventId) {
          updateEvent(data);
          setMessage('Event updated!');
        } else {
          addEvent(data);
          setMessage('Event added!');
        }
        setTimeout(() => navigate('/'), 1000); // Redirect to events page after adding/updating the event
      })
      .catch(() => setMessage('An error occurred. Please try again.'));

    setTitle('');
    setDate('');
    setTime('');
    setLocation('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{eventId ? 'Edit Event' : 'Create Event'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        rows="4"
      />
      <button type="submit" className="add">{eventId ? 'Update Event' : 'Add Event'}</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default EventForm;
