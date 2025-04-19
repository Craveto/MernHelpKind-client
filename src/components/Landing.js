import React, { useState, useEffect } from "react";
import "./Landing.css";
import Hero from "./Hero";
import Signup from "./Signup";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal";
// import SignupModal from "./SignupModal";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import Volunteers from "./Volunteers";
import FeaturesSlider from "./FeaturesSlider";
import ReviewSection from "./ReviewSection";

const Landing = () => {

  const [showSignup, setShowSignup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // user object

  const handleSignupOpen = () => setShowSignup(true);
  const handleSignupClose = () => setShowSignup(false);
  const handleLoginModalOpen = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const handleLoginSuccess = (user) => {

    localStorage.setItem("user", JSON.stringify(user));
    setLoggedInUser(user);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedInUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }


  }, []);




  return (
    <>
      <Navbar
        onSignupOpen={handleSignupOpen}
        onLoginOpen={handleLoginModalOpen}
        onLogout={handleLogout}
        user={loggedInUser}
      />

      {/* Show dashboard if logged in */}
      {loggedInUser ? (
        loggedInUser.role === "admin" ? (
          <AdminDashboard user={loggedInUser} />
        ) : (
          <UserDashboard user={loggedInUser} />
        )
      ) : (
        <>
          <Navbar onSignupOpen={handleSignupOpen} onLoginOpen={handleLoginModalOpen} />
          <Hero />
          {showSignup && <Signup onClose={handleSignupClose} />}
          {showLoginModal && (
            <LoginModal onClose={handleLoginModalClose} onLoginSuccess={handleLoginSuccess} />
          )}

          <Volunteers />
          <FeaturesSlider />
          <ReviewSection />

        </>
      )}
    </>
  );
};

export default Landing;
