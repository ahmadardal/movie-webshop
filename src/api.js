import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "./components/firebase-config";

const collectionRef = collection(db, "comments");

const generatePrice = () => {
  return Math.floor(Math.random() * (99 - 11 + 1)) + 11;
};

export const fetchMovies = async (category, genreCode) => {
  let URL;
  if (!category || genreCode === 0) {
    URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&sort_by=popularity.desc";
  } else {
    URL = `https://api.themoviedb.org/3/discover/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreCode}&with_watch_monetization_types=flatrate`;
  }

  const respons = await fetch(URL);
  const movies = await respons.json();
  movies.results.forEach((movie) => (movie.price = generatePrice()));
  // console.log(movies);

  return movies;
};

export const fetchComments = async (movieId) => {
  let result;
  const q = await query(collectionRef, where("movieId", "==", movieId));
  await onSnapshot(q, (querySnapshot) => {
    result = (querySnapshot.docs.map((item) => ({ ...item.data() })));
  });
  return result;
};
