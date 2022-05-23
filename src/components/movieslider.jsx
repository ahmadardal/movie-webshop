import "../styles/movieSlider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { topMovies } from "../api";

const MovieSlider = () => {
  const [slides, setSlides] = useState(null);
  let sliderList = null;
  
  useEffect(() => {
    const getSlides = async () => {
      const movies = await topMovies();
      setSlides(movies);
    };

    if (!slides) {
      getSlides();
    }
  }, []);

  if (slides != null) {
    sliderList = slides.results.map((movie) => (
      <div className="slider-card" key={movie.id}>
        <Link to="/SelectedMovie" state={{ movie: movie }}>
          <MovieCard movie={movie} />
        </Link>
      </div>
    ));
  }

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">{sliderList}</div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default MovieSlider;
