import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from "./reusableComponents/button";

const Search = () => {

    return (
        <form>
            <div className="searchFormContainer">
                <input type="text"
                required
                // value={search}
                // onChange={e => setSearch(e.target.value)}
                 />
                <label>Type a movie name :</label>
            </div>
            <Button btnText={"Search"} />
        </form>
    )
}

export default Search;