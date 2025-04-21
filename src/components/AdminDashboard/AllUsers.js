// client/src/components/admin/AllUsers.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="all-users">
      <h2>Registered Users</h2>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Registered On</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
