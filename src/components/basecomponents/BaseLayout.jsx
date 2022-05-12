import "../../styles/BaseLayout.css";
import { useState } from "react";
import MenuItem from "./menuitem";
import Search from "../search";
import Movies from "../movies";
import MovieCard from "../MovieCard";
import MovieSlider from "../movieslider";
import BurgerMenyIcon from "../../assets/hamburger.png";
import ShoppingCartContainer from "../shoppingCart/shoppingCartContainer";
import FeedbackForm from "../FeedbackForm";

const BaseLayout = ({
  headerContent,
  mainContent,
  footerContent,
  showSearch,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="BaseLayoutContainer">
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
            {showSearch ? <Search /> : <div />}
            {headerContent}
            {/* <MovieCard /> */}
          </div>
          <div className="margin">
          <div className="mainContent" style={{ marginTop: 30 }}>
            {mainContent}
          </div>
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
    </div>
  );
};

export default BaseLayout;
