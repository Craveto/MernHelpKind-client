import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section branding">
            <h3>HelpKind</h3>
            <p>Empowering communities through connection and coordination.</p>
          </div>

          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#volunteer">Become a Volunteer</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Email: support@helpkind.org</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HelpKind TheVolunteers Coordination Hub. All rights reserved.</p>
        </div>
      </footer>

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Back to Top">
          ⬆
        </button>
      )}
    </>
  );
};

export default Footer;
