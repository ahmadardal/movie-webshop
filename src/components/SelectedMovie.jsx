import "../styles/SelectedMovie.css";
import StarRating from "./reusableComponents/starrating";
import FeedbackCard from "./FeedbackCard";

const SelectedMovie = () => {

    return (
        <div className="selected-movie-container">  
            <div className="background-image-container">      
               <img className="background-image-sm" src={require("../assets/img2.jpg")} />
            </div>
            <div className="selected-movie-info">
                <p>Title</p>
                <StarRating movieRating={2.7} size={'small-star-rating'} />
                <p>Price: 47 kr</p>
                <button className="button-add">Lägg till</button>
            </div>
            <div className="movie-info">
                <p>Här ska det tas in info om filmen</p>
            </div>
            <div className="feedback-info">
                <h1>Recensioner</h1>
                <FeedbackCard />
            </div>
        </div>
    )
}

export default SelectedMovie