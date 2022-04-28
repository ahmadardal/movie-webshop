import "../styles/MovieCard.css";
import StarRating from "./reusableComponents/starrating";
const MovieCard = ({title, rating}) => {

// TODO LIST
// Förbättra randomPrice funktion



const MovieCard = ({ title }) => {
  const randomPrice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  return (
    <div className="container">
      <img
        className="Image"
        alt="The Batman"
        src={require("../assets/batman.png")}
      />

      <div className="InfoContent">
        <div className="UpperInfo">
          <p>The Batman</p>
        </div>
        <div className="LowerInfo">
          <p>{randomPrice()} kr</p>
          <StarRating movieRating={2.7} size={'small-star-rating'} />

        </div>
      </div>
    </div>
  );
};

export default MovieCard;
