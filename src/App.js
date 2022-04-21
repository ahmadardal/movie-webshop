import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import BaseMovie from "./components/basecomponents/basemovie";
import BaseMain from "./components/basecomponents/basemain";
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
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<BaseMain />} />
          <Route path="/movie/:id" element={<BaseMovie />} />
        </Routes>
      </Router>
    </main>

    // <div className="App">
    //   <header className="App-header">

    //     <p>WELCOME to Movie Shop Project</p>

    //   </header>
    // </div>
  );
};

export default App;
