async function GetMovieData(setListOfMovies, title) {

  console.log("GET DATA RUNNING!!!")

  const moviesApi = 'https://api.themoviedb.org/3/search/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&query=' + title;
  const respons = await fetch(moviesApi);
  const data = await respons.json();
  // kommentar
  await setListOfMovies(data);
  console.log(data);

}

export default GetMovieData;