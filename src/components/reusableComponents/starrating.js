import { useState } from "react";
import "../../styles/starrating.css";

const StarRating = ({movieRating}) => {

    // This is temporary, this will be a int and set int function we take in from the moviecard component
    const rating = movieRating;

    // Rounding up rating for stars
    const starRating = parseInt(Math.round(rating));


    return (
      <div className="star-rating">
          <p>{rating}</p>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (starRating) ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;

/* 

Find a way to show half a star                                      []

*/