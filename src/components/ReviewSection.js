import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReviewSection.css';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error("Fetch error", err));
  }, []);

  return (
    <div className="review-section">
      <h2>What Our Volunteers Say</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div className="review-list">
          {reviews.map((r) => (
            <div className="review-card" key={r._id}>
              <h4>{r.name}</h4>
              <p>{r.reviewText}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
