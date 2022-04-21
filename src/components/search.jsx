import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Search = () => {

    return (
        <form onSubmit={getMovies}>
            <div className="formContainer">

            </div>
        </form>
    )
}

export default Search;