import React, { useEffect, useState } from "react";
import StarRating from "./reusableComponents/starrating";
import GetMovieData from '../components/GetMovieData';
import "../../src/styles/Movies.css";

const Movies = () => {
    const [tempMovies, setTempMovies] = useState(null);
    let listOfMovies = null;


    // Removie this code when redux is installed
    useEffect(() => {

        const fetchData = async () => {
            const moviesApi = 'https://api.themoviedb.org/3/search/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&query=batman';
            const respons = await fetch(moviesApi);
            const data = await respons.json();
            setTempMovies(data);
        }

        fetchData();
        
    }, [])


    if(tempMovies != null) {
        listOfMovies = tempMovies.results.map(movie => (
            <div key={movie.id} className="moviesMovieContainer">
                <p>{movie.title}</p>
                <img src={movie.poster_path} alt="Movie image" />
            </div>
        )); 
    }



    return (
        <div className="discoverMoviesContainer">
           {listOfMovies}
        </div>
    )
}


export default Movies;
