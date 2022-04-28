import { useState } from "react";
import "../../styles/starrating.css";

const StarRating = ({movieRating}) => {

  // Comment for fun
    const rating = movieRating;

    // Rounding up rating for stars
    const starRating = parseInt(Math.round(rating));


    return (
      <div className="star-rating">
          <p>{rating}</p>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <div             
              key={index}
              className={index <= (starRating) ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </div>
          );
        })}
      </div>
    );
  };

export default StarRating;