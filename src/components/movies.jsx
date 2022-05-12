import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./reusableComponents/starrating";
import GetMovieData from "../components/GetMovieData";
import MovieCard from "../components/MovieCard";
import "../../src/styles/Movies.css";

const Movies = () => {
  const [tempMovies, setTempMovies] = useState(null);
  let listOfMovies = null;

  // Removie this code when redux is installed
  useEffect(() => {
    const fetchData = async () => {
      const moviesApi =
        "https://api.themoviedb.org/3/search/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&query=batman";
      const respons = await fetch(moviesApi);
      const data = await respons.json();
      setTempMovies(data);
    };

    fetchData();
  }, []);

  if (tempMovies != null) {
    listOfMovies = tempMovies.results.map((movie) => (
      <div key={movie.id} className="moviesMovieContainer">
        <Link
          to={`/MoviePage`}
          state={{ movie: movie }}
          style={{ textDecoration: "none" }}
        >
          <MovieCard
            movie={movie}
          />
        </Link>
      </div>
    ));
  }

  return <div className="discoverMoviesContainer">{listOfMovies}</div>;
};

export default Movies;
