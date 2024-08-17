import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Activity App</h1>
      </div>
      <ul className="nav-links">
        <li><a>Add Activity</a></li>
        <li><a>Find Activity</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
