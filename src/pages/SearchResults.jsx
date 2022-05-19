import MovieCard from "../components/MovieCard";
import "../styles/SearchResults.css";
import GetMovieData from "../components/GetMovieData";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* 
Skapa funktion som kallar på getmoviedata   (useEffect) [x]
Få tillbaka en lista som du loggar                      [x]
Gör en map om listan inte är tom                        [x]
Varför laddas searchresult så mycket?                   []
Kom på hur du ska kunna uppdatera sidan                 []
Fixa så det står "inga träffar" om filmen inte finns    []

*/

const SearchResults = ({title}) => {

    const [searchResults, setSearchResults] = useState(null);
    let content = null;

    const generatePrice = () => {
        return Math.floor(Math.random() * (99 - 11 + 1)) + 11;
      };

    useEffect(() => {

        const fetchSearchData = async () => {
            console.log('Search Results fetching!')
            const tempList = await GetMovieData(title);
            tempList.results.forEach((movie) => (movie.price = generatePrice()));
            setSearchResults(tempList);
            
        }

        fetchSearchData()
    }, [title]);

    useEffect(() => {
        console.log('searchResults laddas');
    });

    if(searchResults != null) {
        console.log('Searchresults not empty:', searchResults);
    content = searchResults.results.map((movie) => (
        <div key={movie.id} className="search-result-container">
            <Link to={"/selectedmovie"} state={{ movie: movie}}>
            <MovieCard
            movie={movie}
            />
            </Link>
        </div>
    ));
    } 
    return (
        <div className="search-results-container">
            {content}
        </div>
    );

}

export default SearchResults;