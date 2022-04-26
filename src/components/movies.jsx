import React from "react";
import StarRating from "./reusableComponents/starrating";

const Movies = () => {

    // Switch me for the movie rating
    const rating = 3.4;

    return (
        <div className="movies">
            <p>All movies are here</p>
            <StarRating movieRating ={rating} />
        </div>
    )
}

export default Movies;
