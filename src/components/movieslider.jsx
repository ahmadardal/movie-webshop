import "../styles/movieSlider.css";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import MovieCard from "./MovieCard"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const MovieSlider = () => {

  const [slides, setSlides] = useState(null);
  let sliderList = null;

  useEffect(() => {
  const fetchData = async () => {
    const moviesApi =
      "https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&api_key=357fd9dbde100c5f47082ae6a7f86d8b&sort_by=vote_average.desc";
    const respons = await fetch(moviesApi);
    const data = await respons.json();
    setSlides(data);
  };

  fetchData()
}, []);

if (slides != null) {
  sliderList = slides.results.map((movie) => (
    <div className="slider-card" key={movie.id}> 
      <Link to="/SelectedMovie" state={{ movie: movie}}>       
          <MovieCard movie={movie}/>        
      </Link> 
    </div>
  ));
}

  const slideLeft = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
        <div id="slider"> 
          {sliderList}
        </div>      
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
    </div>
  );
}

export default MovieSlider


