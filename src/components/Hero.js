import React from "react";
import "./Hero.css";

const organizations = [
  "Sahas Foundation",
  "ACORN",
  "OSCAR",
  "Asha Kiran",
  "EdelGive",
];

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h2>
            Alone we can do so little, <br /> together we can do so much…!!!
          </h2>
          <button className="cta-btn">FIND WORK..</button>
        </div>
        <div className="hero-img">
          <img src="/images/volunteer-work.jpg" alt="Volunteer" />
        </div>
      </div>

      {/* Organization Logos Section */}
      <div className="org-section">
        <h3>Join Social Organization</h3>
        <div className="org-logos">
          {organizations.map((org, i) => (
            <div className="org-card" key={i}>
              <img src={`/images/org-${i + 1}.png`} alt={org} />
            </div>
          ))}
        </div>
        <p>Join over 1,000,000 volunteers nationwide</p>
      </div>
    </>
  );
};

export default Hero;
