import React from 'react';
import './Navbardash.css';  
 
import nikelogo from './Images/nikelogosvg.svg'
import Notification from './Icons/notifications.svg'

const Navbardash = () => {
  return (
    <div className="navbar">
      <img className='nikelogo' src={nikelogo}  alt="logo"/>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="notification-square">
        <img src={Notification} alt="Notifications" />
      </div>
    </div>
  );
};

export default Navbardash;