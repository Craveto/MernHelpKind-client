import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">HelpKind</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <input className="nav-input" type="text" placeholder="🔍 Search events" />
        <input className="nav-input" type="text" placeholder="📍 Locations" />
        <button className="nav-btn user-btn">User</button>
        <button className="nav-btn admin-btn">Admin</button>
      </div>
    </div>
  );
};

export default Navbar;
