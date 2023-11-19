import React from "react";
import "./Admin_header.css";
import search from "../../assets/search-input.png";
import notification from "../../assets/notification-bell.png";
function Admin_header() {
  return (
    <div className="admin-header">
      <div className="admin-header-content">
        <div className="admin-header-title">
          <h1>Users</h1>
        </div>
        <div className="admin-header-search">
          <img src={search} className="search-icon" />
          <input type="text" placeholder="Search ..." />
        </div>
        <div className="notification">
          <img src={notification} />
        </div>
        <div className="settings"></div>
        <div className="prifile-picture"></div>
      </div>
    </div>
  );
}

export default Admin_header;
