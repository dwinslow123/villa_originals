import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="navigation">
      <h3>Villa Originals</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

