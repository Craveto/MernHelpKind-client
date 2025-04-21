import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSignupOpen, onLoginOpen,user, onLogout  }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (user && user.role === "admin") {
    return null;
  }

  return (
    <div className="navbar">
      <div className="logo">HelpKind</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <input className="nav-input" type="text" placeholder="🔍 Search events" />
        <input className="nav-input" type="text" placeholder="📍 Locations" />

        {user ? (
          <>
            <span className="welcome-msg">👋 Hello, {user.name}</span>
            <button className="nav-btn logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="nav-btn user-btn" onClick={onSignupOpen}>Signup</button>
            <button className="nav-btn user-btn login-btn" onClick={onLoginOpen}>Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
