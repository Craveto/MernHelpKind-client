// client/src/components/admin/AdminHome.js
import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import axios from "axios";

const AdminHome = () => {
  const [stats, setStats] = useState({
    users: 0,
    reviews: 0,
    volunteers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("https://mernhelpkind-server.onrender.com/api/admin/stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch admin stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-home">
      <h2>Welcome, Admin 👋</h2>
      <div className="stat-cards">
        <div className="card">
          <h3>{stats.users}</h3>
          <p>Total Users</p>
        </div>
        <div className="card">
          <h3>{stats.reviews}</h3>
          <p>Total Reviews</p>
        </div>
        <div className="card">
          <h3>{stats.volunteers}</h3>
          <p>Active Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
