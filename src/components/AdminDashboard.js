import React from "react";

const AdminDashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome to the Admin Dashboard, {user?.name}!</h2>
    </div>
  );
};

export default AdminDashboard;
