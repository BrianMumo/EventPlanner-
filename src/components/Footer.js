import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Event Planner. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        <a href="https://github.com/BrianMumo/EventPlanner-" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
