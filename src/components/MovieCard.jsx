import "../styles/MovieCard.css";
import StarRating from "./reusableComponents/starrating";

// TODO LIST
// Förbättra randomPrice funktion
// Ersätt 55kr med StarRating med korrekt storlek

const MovieCard = ({ movie }) => {
  const randomPrice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  return (
    <div className="movieCardContainer">
      <img
        className="movieCardImage"
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />

      <div className="movieCardInfoContent">
        <div className="movieCardUpperInfo">
          <p>{movie.title}</p>
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
