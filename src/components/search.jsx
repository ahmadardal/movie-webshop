import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from "./reusableComponents/button";
import GetMovieData from "./GetMovieData";
import { Link } from "react-router-dom";

/* 
Gör button till en länk till searchResult           [x]
Skicka med titel                                    [x]
Nollställ input                                     []
 */

const Search = ({setSearchTitle}) => {

    const [input, setInput] = useState('');

    function setTitleAndResetInput() {
        setSearchTitle(input);
        setInput('');
        console.log('jag körs alltså finns jag');
    }

    return (
        <form>
            <div className="searchFormContainer">
                <input type="text"
                required
                value={input}
                onChange={e => setInput(e.target.value)}
                 />
                <label>Movie name:</label>
            </div>
            <Link to={"/searchresults"}>
            <button onClick={setTitleAndResetInput}>Search</button>
            </Link>
        </form>
    )
}

export default Search;