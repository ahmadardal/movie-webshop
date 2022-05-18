import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../../src/styles/Movies.css";
import { Link } from "react-router-dom";

const Movies = ({ category }) => {
  const [tempMovies, setTempMovies] = useState(null);
  let listOfMovies = null;

  const generatePrice = () => {
    return Math.floor(Math.random() * (99 - 11 + 1)) + 11;
  };

  // Removie this code when redux is installed
  useEffect(() => {
    let genreCode;
    let URL;
    switch (category) {
      case "action":
        genreCode = 28;
        break;
      case "drama":
        genreCode = 18;
        break;
      case "comedy":
        genreCode = 35;
        break;
      case "horror":
        genreCode = 27;
        break;
      default:
        genreCode = 0;
        break;
    }

    const fetchData = async () => {
      if (!category || genreCode === 0) {
        URL =
          "https://api.themoviedb.org/3/discover/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&sort_by=popularity.desc";
      } else {
        URL = `https://api.themoviedb.org/3/discover/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreCode}&with_watch_monetization_types=flatrate`;
      }

      const respons = await fetch(URL);
      const movies = await respons.json();
      movies.results.forEach((movie) => (movie.price = generatePrice()));
      // console.log(movies);

      setTempMovies(movies);
    };

    fetchData();
  }, []);

  if (tempMovies != null) {
    listOfMovies = tempMovies.results.map((movie) => (
      <div key={movie.id} className="moviesMovieContainer">
        <Link to={"/selectedmovie"} state={{ movie: movie }}>
          <MovieCard movie={movie} />
        </Link>
      </div>
    ));
  }

  return <div className="discoverMoviesContainer">{listOfMovies}</div>;
};

export default Movies;
