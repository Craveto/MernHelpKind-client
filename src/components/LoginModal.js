import React, { useState } from "react";
import axios from "axios";
// import "./LoginModal.css";

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      const { user, token } = res.data;

      // Optional: Store token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Pass user info to parent
      onLoginSuccess(user);

      // Close modal
      onClose();
    } catch (err) {
      setMessage(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Login to HelpKind</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          {message && <p className="message">{message}</p>}
        </form>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
