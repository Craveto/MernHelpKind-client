// client/src/pages/AdminDashboard.js
import React from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopbar from "../components/admin/AdminTopbar";
import "./AdminDashboard.css";

const AdminDashboard = ({user}) => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="main-section">
        <AdminTopbar />
        <div className="dashboard-content">
          <h2>Welcome {user?.name}! </h2>
          {/* Add dashboard widgets or cards here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;




// import React from "react";

// const AdminDashboard = ({ user }) => {
//   return (
//     <div>
//       <h2>Welcome to the Admin Dashboard, {user?.name}!</h2>
//     </div>
//   );
// };

// export default AdminDashboard;

