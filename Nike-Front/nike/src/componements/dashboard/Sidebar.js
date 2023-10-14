import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import dashVector from './Icons/dashvector.svg'
import customersIcon from './Icons/custvec.svg'
import messagessIcon from './Icons/mesvec.svg'
import reportsIcon from './Icons/repvec.svg'
import settingsIcon from './Icons/setvec.svg'
import ordersIcon from './Icons/ordvec.svg'
import productsIcon from './Icons/prodvec.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
            <img src={dashVector}  />
            Dashboard
        </li>
        
        <li className="sidebar-item">
            <img src={productsIcon} />
            Products
        </li>

        <li className="sidebar-item"><img src={ordersIcon} />Orders</li>
        <li className="sidebar-item"><img src={customersIcon} />Customers</li>
        <li className="sidebar-item"><img src={reportsIcon} />Reports</li>
        <li className="sidebar-item"><img src={messagessIcon} />Messages</li>
        <li className="sidebar-item"><img src={settingsIcon} />Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
