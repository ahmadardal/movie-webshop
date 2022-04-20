async function GetMovieData(setListOfMovies, title) {

    console.log("GET DATA RUNNING!!!")

    const moviesApi = 'http://www.omdbapi.com/?apikey=d18ade2a&s=' + title;
    const respons = await fetch(moviesApi);
    const data = await respons.json();

    await setListOfMovies(data);
    console.log(data);

  }

  export default GetMovieData;