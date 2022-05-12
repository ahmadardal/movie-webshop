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

const BaseLayout = ({ headerContent, mainContent, footerContent }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
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

      <div className="Sidebar">  
        <MenuList />
      </div> 

      <div className="header-and-main-content-container">
        <div className="margin">
        <div className="headContent">433
          <Search />

        </div>
        
        <div className="mainContent" style={{ marginTop: 30 }}>
        {mainContent}
       
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