import "../../styles/BaseComponent.css";
import MenuItem from "./menuitem";
import Search from "../search";
import Movies from "../movies";
import MovieCard from "../MovieCard";
import MovieSlider from "../movieslider";
import BurgerMenyIcon from "../../assets/hamburger.png"
import { useState } from "react";
// import "../assets/happy.png";

const BaseMain = ({ headerContent, mainContent, footerContent }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div id="baseMainContentContainer">
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
        <div className="headContent">
          {headerContent}
          <Search />
          <MovieCard />
        </div>

        <div className="mainContent" style={{ marginTop: 30 }}>
          <MovieSlider />
          <Movies />
          {mainContent}
        </div>

        <div className="footerContent">{footerContent}</div>
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
        navigatesTo="Register"
      />
    </div>
  )
}

export default BaseMain;
