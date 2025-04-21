// AdminSidebar.js
import React from 'react';
import './AdminSidebar.css';

const AdminSidebar = ({ isOpen, toggleSidebar, setActiveView }) => {
  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">HelpKind</div>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
      </div>
      <ul className="sidebar-nav">
        <li onClick={() => { setActiveView('home'); toggleSidebar(); }}>Dashboard</li>
        <li onClick={() => { setActiveView('users'); toggleSidebar(); }}>Volunteers</li>
        <li onClick={() => { setActiveView('event'); toggleSidebar(); }}>Event</li>
        {/* Add other menu items as needed */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
