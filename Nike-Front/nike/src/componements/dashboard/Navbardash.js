import React from 'react';
import './Navbardash.css'; // Create a new CSS file for Navbar
import './Images/nikelogo.jpg'
import './Icons/notifications.svg'

const Navbardash = () => {
  return (
    <div className="navbar">
      <img src="nikelogo.jpg" alt="Logo" />
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="notification-square">
        <img src="notifications.svg" alt="Notifications" />
      </div>
    </div>
  );
};

export default Navbardash;
