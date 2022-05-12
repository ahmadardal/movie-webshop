import "../styles/MoviePage.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BaseLayout from "../components/basecomponents/BaseLayout";
// import FeedbackForm from "../components/FeedbackForm";
// import FeedbackCard from "../components/FeedbackCard";
import { actions } from "../state/reducers/counterReducer.js";
// import StarRating from "../components/reusableComponents/starrating";

const MoviePage = (props) => {
  const { movie } = useLocation().state;

  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increase = () => dispatch(actions.increase());
  const decrease = () => dispatch(actions.decrease());

  function btnPress() {
    decrease();
  }

  return (
    <BaseLayout
      showSearch={false}
      headerContent={
        <div className="moviepage-container">
          <div className="image-container">
            <img
              alt="fuckyou"
              className="image-sm"
              src={require("../assets/img2.jpg")}
            />
          </div>
          </div>
      }
      mainContent={
<div>

          {/* <div className="selected-movie-container">
            <div className="background-image-container">
              <img
                className="background-image-sm"
                src={require("../assets/img2.jpg")}
              />
            </div>
            <div className="background-info-container">
              <div className="selected-movie-info">
                <div className="title-rating">
                  <h1>Title</h1>
                  <StarRating movieRating={2.7} size={"medium-star-rating"} />
                </div>
                <div className="price">
                  <p>Price: 47 kr</p>
                  <button>Lägg till</button>
                </div>
              </div>
              <div className="movie-info">
                <p>Här ska det tas in info om filmen</p>
              </div>
              <div className="movie-feedback">
                <FeedbackForm />
              </div>
              <div className="feedback-info">
                <h1>Recensioner</h1>
                <FeedbackCard className="FeedbackCard" />
              </div>
            </div>
          </div> */}
        </div>
      }
    />
  );
};

export default MoviePage;
