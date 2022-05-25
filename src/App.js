import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/basecomponents/baselayout";
import { useEffect, useState } from "react";
import GetMovieData from "./components/GetMovieData";
import ShoppingCartContainer from "./components/shoppingCart/shoppingCartContainer";

const App = () => {
  const [listOfMovies, setListOfMovies] = useState(null);

  // The title of the movie we want to search for in our GetMovieData component. This should be a State later on.
  const title = "Spiderman";


  useEffect(() => {
    GetMovieData(setListOfMovies, title);
  }, []);

  return (
    <Router>
      <BaseLayout />
    </Router>
  );
};

export default App;
