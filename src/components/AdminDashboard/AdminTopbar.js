// AdminTopbar.js
import React from 'react';
import './AdminTopbar.css';

const AdminTopbar = ({ toggleSidebar }) => {
  const adminData = JSON.parse(localStorage.getItem('user'));
  const adminName = adminData?.name || 'Admin';

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'; // Redirect to main website
  };

  return (
    <div className="admin-topbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
      <h1>Admin Dashboard</h1>
      <div className="admin-info">
        <span className="admin-name">Welcome, {adminName}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminTopbar;
