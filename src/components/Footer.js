import React from 'react';
import './Footer.css';

function Footer({ totalStudents, activeStudents }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Total Students: <strong>{totalStudents}</strong></p>
        <p>Active Students: <strong>{activeStudents}</strong></p>
       </div>
    </footer>
  );
}

export default Footer;
