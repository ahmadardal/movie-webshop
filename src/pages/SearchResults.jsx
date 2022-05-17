import MovieCard from "../components/MovieCard";
import "../styles/SearchResults.css";
import GetMovieData from "../components/GetMovieData";
import React, { useState } from "react";

/* 
Skapa funktion som kallar på getmoviedata   (useEffect) []
Få tillbaka en lista som du loggar                      []
Gör en map om listan inte är tom                        []

*/

const SearchResults = ({title}) => {

let content = null;

/* if(searchReults != null) {
    content = searchReults.map((movie) => (
        <div key={movie.id} className="search-result-container">
            <MovieCard
            movie={movie}
            />
        </div>
    ));
} */
    return (
        <div className="search-results-container">
            Här kommer alla sökresultat vara
            <h1>{title}</h1>
            {content}
        </div>
    );

}

export default SearchResults;