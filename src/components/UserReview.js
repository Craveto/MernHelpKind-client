import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserReview.css";

const UserReview = () => {
  const [reviewText, setReviewText] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [user, setUser] = useState(null);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    const fetchUserAndReviews = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found");
          return;
        }

        const decoded = JSON.parse(atob(token.split(".")[1]));
        setUser({ name: decoded.name || "Anonymous" });

        const res = await axios.get("http://localhost:5000/api/reviews");
        setAllReviews(res.data);
      } catch (error) {
        console.error("Error loading user or reviews:", error);
      }
    };

    fetchUserAndReviews();
  }, []);

  const handleReviewSubmit = async () => {
    if (!user) {
      alert("User not loaded yet.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/reviews",
        { reviewText, name: user.name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setReviewText("");
      setShowReviewForm(false);
      alert("Review submitted!");

      // Update review list with the new one
      setAllReviews([...allReviews, res.data]);
    } catch (error) {
      console.error("Review submission error:", error);
      alert("Failed to submit review. Check console for details.");
    }
  };

  return (
    <div className="user-review">
      <h3>Share Your Experience</h3>
      {showReviewForm ? (
        <div className="review-form">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
            rows={4}
          />
          <button className="submit-btn" onClick={handleReviewSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <button className="give-review-btn" onClick={() => setShowReviewForm(true)}>
          Give a Review
        </button>
      )}

      {/* Review Cards */}
      <div className="review-list">
        {allReviews.length > 0 ? (
          allReviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <p>{review.reviewText}</p>
              <div className="review-author">— {review.name}</div>
            </div>
          ))
        ) : (
          <p style={{ marginTop: "20px", color: "#777" }}>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserReview;
