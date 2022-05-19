import "../styles/SelectedMovie.css";
import { useLocation } from "react-router-dom";
import { actions } from "../state/reducers/cartReducer.js";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../components/reusableComponents/starrating";
import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import { useState } from "react";
import noImage from "../assets/noimage.jpg";
// import { db } from "../firebase-config";
// import { collection, getDocs, addDoc } from "firebase/firestore";

const SelectedMovie = () => {
  const { movie } = useLocation().state;
  const dispatch = useDispatch();

  let movieImageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : noImage;

  const [feedbackhidden, setFeedbackhidden] = useState(true) 

  const addToCart = () => {
    // console.log(movie);
    dispatch(actions.addToCart(movie));
  };
  // const FeedbackForm = ({ id }) => {
  //     const [comment, SetComment] = useState("");
  //     const [comments, setComments] = useState([]);
  //     const [rating, setRating] = useState(2);
  //     const [textName, setTextName] = useState("");
  //     const [age, SetAge] = useState(0);
  //     const collectionRef = collection(db, "comments");
  // }

  // useEffect(() => {
  //     const getComments = async () => {
  //       const data = await getDocs(collectionRef);
  //       setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };

  //     getComments();
  //   }, []);

  return (
    <div className="selected-movie-container">
      <div className="background-image-container">
        <img
          className="background-image-sm"
          alt={movie.title}
          src={movieImageUrl}
        />
      </div>
      <div className="background-info-container">
        <div className="selected-movie-info">
          <div className="title-rating">
            <h1 className="selected-movie-title">{movie.title}</h1>
            <StarRating
              movieRating={movie.vote_average}
              size={"medium-star-rating"}
            />
          </div>
          <div className="price">
            <h1 className="selected-movie-title">Pris {movie.price} kr</h1>
            <button onClick={addToCart}>Lägg till</button>
          </div>
        </div>
        <div className="movie-info">
          <p>{movie.overview}</p>
        </div>
        <div className="feedback-div">
          <div className="movie-feedback">
            {feedbackhidden ? <button style={{width:200}} onClick={() => {setFeedbackhidden(false)}}>Lämna en recension</button> : <FeedbackForm movieId ={movie.id} feedbackhidden={feedbackhidden} setFeedbackhidden={setFeedbackhidden}/> }
          </div>
          <div className="feedback-info">
            <h1>Recensioner</h1>
            <FeedbackCard className="FeedbackCard"  movieId = {movie.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
