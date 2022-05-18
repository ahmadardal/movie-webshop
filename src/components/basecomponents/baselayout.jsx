import "../../styles/BaseComponent.css";
import { useState } from "react";
import MenuItem from "./menuitem";
import Search from "../search";
import BurgerMenyIcon from "../../assets/hamburger.png";
import Logo from "../../assets/webpagelogo.png";
import ShoppingCartContainer from "../shoppingCart/shoppingCartContainer";
import Home from "../../pages/home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SelectedMovie from "../../pages/SelectedMovie";
import SearchResults from "../../pages/SearchResults";
import { actions } from "../../state/reducers/counterReducer.js";
import { useDispatch, useSelector } from "react-redux";

// This is the base layout for the entire page:
const BaseLayout = ({ headerContent, mainContent, footerContent }) => {
  const totalPrice = useSelector((state) => state.cart.total);
  const itemCount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // This is for the shoppingcart function, all the way down to line 61
  const [hiddenMenu, setHiddenMenu] = useState(false);
  // const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCardItems] = useState([
    {
      movieName: "Batman",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
      price: 10,
      movieId: 1,
      cartCount: 2,
    },
    {
      movieName: "Batman",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
      price: 20,
      movieId: 2,
      cartCount: 3,
    },
    {
      movieName: "Batman",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
      price: 30,
      movieId: 3,
      cartCount: 5,
    },
    {
      movieName: "Batman",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo",
      price: 50,
      movieId: 6,
      cartCount: 7,
    },
  ]);

  // const updateCart = (movieName, movieId, movieImg, moviePrice) => {
  //   setItemCount((prevCount) => prevCount + 1);
  //   setTotalPrice((prevPrice) => prevPrice + moviePrice);

  //   if (cartItems.find((item) => item.id === movieId)) {
  //     const result = cartItems.find((item) => item.id === movieId);
  //     result.cartCount++;
  //     return;
  //   }
  //   setCardItems([
  //     ...cartItems,
  //     {
  //       movieName: movieName,
  //       img: movieImg,
  //       price: moviePrice,
  //       movieId: movieId,
  //       cartCount: 1,
  //     },
  //   ]);
  // };

  // const removeItem = (movieId) => {
  //   const newItem = cartItems.filter(
  //     (cartItem) => cartItem.movieId !== movieId
  //   );
  //   setCardItems(newItem);

  //   const itemCountResult = newItem.reduce(
  //     (acc, val) => (acc += val.cartCount),
  //     0
  //   );
  //   setItemCount(itemCountResult);

  //   const priceResult = newItem.reduce(
  //     (acc, val) => (acc += val.price * val.cartCount),
  //     0
  //   );

  //   setTotalPrice(priceResult);
  // };


  const addToCart = (movie) => dispatch(actions.addToCart(movie));

  return (
    <div className="base-layout-all-content-container">
      <img
        src={BurgerMenyIcon}
        id="burgerMenyIcon"
        alt="Menu"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />

      {showMobileMenu ? (
        <div
          className="mobileMenu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <MenuList />
        </div>
      ) : (
        <div />
      )}

      <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>
        <p>{itemCount > 0 && itemCount}</p>
        <i
          className={
            hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"
          }
        ></i>
        <div id="ShoppingCartMenu">
          {hiddenMenu ? (
            <ShoppingCartContainer
              hiddenMenu={hiddenMenu}
              cartItems={cartItems}
              itemCount={itemCount}
              // removeItem={removeItem}
              totalPrice={totalPrice}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="Sidebar">
        <MenuList />
      </div>

      {/* Everything on the page that is NOT menu, sidebar or shoppingcart goes here */}
      <div className="header-and-main-content-container">
        {/* <div className="margin"> */}
        <div className="headContent">
          <img src={Logo} alt="Webpage Logo" className="webpage-logo-image" />
          <Search />
        </div>

        {/* Here are all the replaceble components */}
        <div className="mainContent" style={{ marginTop: 30 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="selectedmovie" element={<SelectedMovie />} />
            <Route path="searchresults" element={<SearchResults />} />
          </Routes>
        </div>

        <div className="footerContent"></div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default BaseLayout;

const MenuList = () => {
  return (
    <div>
      <MenuItem
        title="Hem"
        image={require("../../assets/home.png")}
        navigatesTo=""
      />
    </div>
  );
};
