import { useState } from "react";
import "../../styles/starrating.css";

const StarRating = (currentRating) => {

    // This is temporary, this will be a int and set int function we take in from the moviecard component
    const [rating, setRating] = useState(2);

    const [hover, setHover] = useState(0);

    return (
      <div className="star-rating">
          <p>{rating}</p>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
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

Set rating from start from the Int                                  [x]
Even up the Int so that it can be converted to a star               []
Do a average int to the left of the stars                           []
Take in Int rating from object.vote_average                         []
Change setRating to a function you take in (setRating from object)  []
Find a way to show half a star                                      []

*/