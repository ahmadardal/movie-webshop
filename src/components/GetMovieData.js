async function GetMovieData(setListOfMovies, title) {

    console.log("GET DATA RUNNING!!!")

    const moviesApi = 'https://api.themoviedb.org/3/movie/640?api_key=357fd9dbde100c5f47082ae6a7f86d8b';
    const respons = await fetch(moviesApi);
    const data = await respons.json();

    await setListOfMovies(data);
    console.log(data);

  }

  export default GetMovieData;