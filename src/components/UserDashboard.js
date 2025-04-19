import React from "react";
import Hero from "./Hero";
import UserReview from "./UserReview" ;

const UserDashboard = ({ user }) => {
  return (
    <div>
      {/* <h2>Welcome to the User Dashboard, {user?.name}!</h2> */}
      <Hero />
      <UserReview />
    </div>
  );
};

export default UserDashboard;
