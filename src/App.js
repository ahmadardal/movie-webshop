import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseMovie from "./components/BaseComponents/basemovie";
import BaseMain from "./components/BaseComponents/basemain";
import { useEffect, useState } from "react";
import GetMovieData from "./components/GetMovieData";

const App = () => {
  const [listOfMovies, setListOfMovies] = useState(null);

  // The title of the movie we want to search for in our GetMovieData component. This should be a State later on.
  const title = "Spiderman";

  useEffect(() => {
    GetMovieData(setListOfMovies, title);
  }, []);

  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<BaseMain />} />
          <Route path="/movie/:id" element={<BaseMovie />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
