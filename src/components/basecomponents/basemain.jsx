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

const BaseMain = ({ headerContent, mainContent, footerContent }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [itemCount, setItemCount] = useState(9);
  return (
    <div className="baseMainContentContainer">
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

      <div className="Sidebar">
       <MenuList />
      </div>

      <div className="contentContainer">
        <div className="margin">
        <div className="headContent">
        <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>
            <i className={hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"}></i>
            <p>{itemCount > 0 && itemCount}</p>
          </div>
          <Search />
          {/* <MovieCard /> */}
        </div>

        {hiddenMenu ? <ShoppingCartContainer /> : 
        <div className="mainContent" style={{ marginTop: 30 }}>
          <MovieSlider />
          <Movies />
          {mainContent}
        </div> }
        
        <div className="footerContent">{footerContent}</div>
        </div>
      </div>
     
    </div>
  );
};

const MenuList = () => {
  return (
    <div>
      <MenuItem
      title="Hem"
      image={require("../../assets/home.png")}
      navigatesTo=""
      />
      <MenuItem
        title="Register"
        image={require("../../assets/happy.png")}
      />
    </div>
  )
}

export default BaseMain;
