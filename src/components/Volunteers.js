import React from "react";
import "./Volunteers.css"
const Volunteers = () =>{
    return(
        <>
        <div className="volunteer-section">
  <img
    src="/images/volunteers.jpeg"
    alt="Volunteers"
    className="volunteer-image"
  />
  <h2 className="volunteer-title">VOLUNTEERS</h2>
  <p className="volunteer-text">
    <strong>
      Be part of impactful projects that bring real change to people’s lives.
      Meet like-minded people who share a passion for making the world a better place
    </strong>
  </p>
  <button className="volunteer-btn">Become a Volunteer</button>
</div>

        </>
    )
}
export default Volunteers;