import React, { useEffect, useState } from "react";
import StarRating from "../components/reusableComponents/starrating";
import GetMovieData from "../components/GetMovieData";
import MovieCard from "../components/MovieCard";
import "../../src/styles/Movies.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const [tempMovies, setTempMovies] = useState(null);
  let listOfMovies = null;

  // Removie this code when redux is installed
  useEffect(() => {
    const fetchData = async () => {
      const moviesApi =
        "https://api.themoviedb.org/3/discover/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&sort_by=popularity.desc";
      const respons = await fetch(moviesApi);
      const data = await respons.json();
      setTempMovies(data);
    };

    fetchData();
  }, []);

  if (tempMovies != null) {
    listOfMovies = tempMovies.results.map((movie) => (
      <div key={movie.id} className="moviesMovieContainer">
        <Link to={"/selectedmovie"} state={{ movie: movie}}>
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
