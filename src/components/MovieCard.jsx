import "../styles/MovieCard.css";
import StarRating from "./reusableComponents/starrating";

// TODO LIST
// Förbättra randomPrice funktion
// Ersätt 55kr med StarRating med korrekt storlek

const MovieCard = ({ title, img }) => {
  const randomPrice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  return (
    <div className="movieCardContainer">
      <img
        className="movieCardImage"
        alt="The Batman"
        src={img}
      />

      <div className="movieCardInfoContent">
        <div className="movieCardUpperInfo">
          <p>The Batman</p>
        </div>
        <div className="movieCardLowerInfo">
          <p>{randomPrice()} kr</p>
          {/* <StarRating/> */}

          <StarRating movieRating={2.7} size={'small-star-rating'} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
