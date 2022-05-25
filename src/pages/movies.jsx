import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../../src/styles/Movies.css";
import { Link } from "react-router-dom";
import { discoverMovies, genreMovies } from "../api";

const Movies = ({ category }) => {
  const [tempMovies, setTempMovies] = useState(null);
  let listOfMovies = null;

  const generatePrice = () => {
    return Math.floor(Math.random() * (99 - 11 + 1)) + 11;
  };

  // Removie this code when redux is installed
  useEffect(() => {
    let genreCode;
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

    const getMovies = async () => {
      let movies;
      if (!category || genreCode === 0) {
        movies = await discoverMovies();
      } else {
        movies = await genreMovies(genreCode);
      }
      setTempMovies(movies);
    };

    if (!tempMovies) {
      getMovies();
    }
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
