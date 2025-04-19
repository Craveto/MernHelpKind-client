import React from "react";
import "./SignupModal.css";

const SignupModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Join HelpKind</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default SignupModal;
