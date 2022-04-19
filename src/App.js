import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [listOfMovies, setListOfMovies] = useState(null);

  useEffect(() => {

    
    async function getData() {

      console.log("GET DATA RUNNING!!!")
  
      const moviesApi = 'http://www.omdbapi.com/?apikey=d18ade2a&s=batman';
      const respons = await fetch(moviesApi);
      const data = await respons.json();
  
      await setListOfMovies(data);
  
      console.log(listOfMovies);
  
    }
    getData()
  }, [])



  return (
    <div className="App">
      <header className="App-header">
      
        <p>WELCOME to Movie Shop Project</p>

      </header>
    </div>
  );
}

export default App;
