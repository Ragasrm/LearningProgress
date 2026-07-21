"use client"
import { useState } from 'react';
import './StarRating.css';

function StarRating({
  maxStars = 5,
  initialRating = 0,
  onRatingChange
}) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (starValue) => {
    setRating(starValue);
    if (onRatingChange) {
      onRatingChange(starValue);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className="star"
            style={{
              color: starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
              cursor: 'pointer'
            }}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() =>  setHover(starValue)}
            onMouseLeave={() =>  setHover(0)}
          >
            ★
          </span>
        );
      })}
      <p>Your rating: {rating}</p>
    </div>
  );
}

export default StarRating;