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
  
  return (
    <div className="baseMainContentContainer">

      <div className="contentContainer">
        <div className="margin">
        <div className="headContent">433
          <Search />
          {/* <MovieCard /> */}
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



export default BaseMain;
