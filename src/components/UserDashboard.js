import React,{useEffect , useState} from "react";
import axios from "axios";
import Hero from "./Hero";
import UserReview from "./UserReview" ;
import UserEvent from "./UserEvent";
import Footer from "./Footer";

const UserDashboard = ({ user }) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  // const yourEventArray = []; 
  return (
    <div>
      {/* <h2>Welcome to the User Dashboard, {user?.name}!</h2> */}
      <Hero />
      <UserEvent events={events} />
      <UserReview />
      <Footer />
    </div>
  );
};

export default UserDashboard;
