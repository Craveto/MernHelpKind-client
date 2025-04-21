import React, { useState } from 'react';
import AdminSidebar from './AdminDashboard/AdminSidebar';
import AdminTopbar from './AdminDashboard/AdminTopbar';
import AdminHome from './AdminDashboard/AdminHome';
import AllUsers from './AdminDashboard/AllUsers';
import './AdminDashboard';
import Event from './AdminDashboard/Event';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <AdminHome />;
      case 'users':
        return <AllUsers />;
      case 'event':
        return <Event />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminTopbar
        toggleSidebar={toggleSidebar}
      />
      <AdminSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveView={setActiveView}
      />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
