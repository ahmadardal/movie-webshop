import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import GetMovieData from "./components/GetMovieData";
import ShoppingCartContainer from "./components/shoppingCart/shoppingCartContainer";
import SelectedMovie from "./components/SelectedMovie";

const App = () => {
  const [listOfMovies, setListOfMovies] = useState(null);

  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(10);
  const [cartItems, setCardItems] = useState([
    {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 10, movieId: 1, cartCount: 2},
     {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 20, movieId: 2, cartCount: 3},
     {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 30, movieId: 3, cartCount: 5},
     {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 50, movieId: 6, cartCount: 7}]);

  // The title of the movie we want to search for in our GetMovieData component. This should be a State later on.
  const title = "Spiderman";


  const updateCart = (movieName,movieId, movieImg, moviePrice) => {

    setItemCount(prevCount => prevCount + 1)
    setTotalPrice(prevPrice => prevPrice + moviePrice)

    if (cartItems.find(item => item.id === movieId)) {
      const result = cartItems.find(item => item.id === movieId);
      result.cartCount++;
      return;
    }
    setCardItems([...cartItems,
    { movieName: movieName,img: movieImg, price: moviePrice, movieId: movieId, cartCount: 1 }
    ])
  }

  const removeItem = (movieId) => {
    const newItem = cartItems.filter(cartItem => cartItem.movieId !== movieId);
    setCardItems(newItem);

    const itemCountResult = newItem.reduce(
      (acc, val) => (acc += val.cartCount), 0
    );
    setItemCount(itemCountResult);

    const priceResult = newItem.reduce(
      (acc, val) => (acc += val.price * val.cartCount), 0
    );

    setTotalPrice(priceResult)
  }




  useEffect(() => {
    GetMovieData(setListOfMovies, title);
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home
          hiddenMenu={hiddenMenu}
          cartItems={cartItems}
          itemCount={itemCount}
          removeItem={removeItem}
          totalPrice={totalPrice}
          setHiddenMenu={setHiddenMenu} />} />
        <Route path="/SelectedMovie" element={
          <SelectedMovie updateCart={updateCart}/>} />
      </Routes>
    </Router>
  );
};

export default App;
