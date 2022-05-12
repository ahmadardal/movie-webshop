import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import BaseLayout from "../components/basecomponents/baselayout";
import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import Button from "../components/reusableComponents/button";
import { actions } from "../state/reducers/counterReducer.js";

import Movies from "../components/movies";
import MovieCard from "../components/MovieCard";
import MovieSlider from "../components/movieslider";
import BurgerMenyIcon from "../assets/hamburger.png"
import MenuItem from "../components/basecomponents/menuitem";
import "../styles/Home.css"


const Home = (props) => {

  

  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increase = () => dispatch(actions.increase());
  const decrease = () => dispatch(actions.decrease());

  function btnPress() {
    decrease();
  }

  return (
    <div className="homeBaseContainer">
        <MovieSlider />
        <Movies />
        {/* <Button btnText={"Hello"} handleClick={btnPress} />
        <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18" />
        <FeedbackForm />
        <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18" /> */}
   
    </div>
  );
};



export default Home;
