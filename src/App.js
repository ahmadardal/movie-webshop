import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import GetMovieData from './components/GetMovieData';

function App() {

  const [listOfMovies, setListOfMovies] = useState(null);

  // The title of the movie we want to search for in our GetMovieData component. This should be a State later on.
  const title = 'Spiderman';

  useEffect(() => {GetMovieData(setListOfMovies, title)}, [])



  return (
    <div className="App">
      <header className="App-header">
      
        <p>WELCOME to Movie Shop Project</p>

      </header>
    </div>
  );
}

export default App;
