import "../../styles/BaseComponent.css";
import { useState } from "react";
import MenuItem from "./menuitem";
import Search from "../search";
import Movies from "../movies";
import MovieCard from "../MovieCard";
import MovieSlider from "../movieslider";
import BurgerMenyIcon from "../../assets/hamburger.png"
import ShoppingCartContainer from "../shoppingCart/shoppingCartContainer";
import FeedbackForm from "../FeedbackForm";
import Home from "../../pages/home";

const BaseLayout = ({ headerContent, mainContent, footerContent }) => {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(10);
  const [cartItems, setCardItems] = useState([
    {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 10, movieId: 1, cartCount: 2},
     {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 20, movieId: 2, cartCount: 3},
     {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 30, movieId: 3, cartCount: 5},
     {movieName: "Batman", img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo', price: 50, movieId: 6, cartCount: 7}]);

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

  return (
    <div className="base-layout-all-content-container">
      <img 
        src={BurgerMenyIcon}
        id="burgerMenyIcon"
        alt="Menu"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      /> 
      
      {showMobileMenu ? (
        <div className="mobileMenu">
          <MenuList />
        </div>
      ) : (
        <div />
      )}

      <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>
        <p>{itemCount > 0 && itemCount}</p>
        <i className={hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"}></i>
        <div id="ShoppingCartMenu">
          {hiddenMenu ? <ShoppingCartContainer
            hiddenMenu={hiddenMenu}
            cartItems={cartItems}
            itemCount={itemCount}
            removeItem={removeItem}
            totalPrice={totalPrice} /> : ""} 
        </div>
      </div>

      <div className="Sidebar">  
        <MenuList />
      </div> 

{/* Allt som ska vara på sidan som inte är sidebar, meny eller shoppingcart ska vara här */}
      <div className="header-and-main-content-container">
        <div className="margin">
          <div className="headContent">
            <Search />
          </div>
        {/* Här kommer komponenterna vi byter ut vara */}
        <div className="mainContent" style={{ marginTop: 30 }}>
            <Home />
        </div> 
        
        <div className="footerContent">{footerContent}</div>
        </div>
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
  )
}

/* 
Flytta sidebar till baselayout                     []
Se till att CSS hänger med                                []
Lägg till logga                                           []
FLytta burgermenu                                         []
Kolla att CSS stämmer                                     []

*/