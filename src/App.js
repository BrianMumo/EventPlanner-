import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/create-event" element={<EventForm addEvent={addEvent} />} />
          <Route path="/edit-event/:id" element={<EventForm addEvent={addEvent} updateEvent={updateEvent} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
