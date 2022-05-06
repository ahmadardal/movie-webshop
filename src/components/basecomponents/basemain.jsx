import "../../styles/BaseComponent.css";
import MenuItem from "./menuitem";
import Search from "../search";
import Movies from "../movies";
import MovieCard from "../MovieCard";
import MovieSlider from "../movieslider";
import { useState } from 'react';
import ShoppingCartContainer from "../shoppingCart/shoppingCartContainer";
import FeedbackForm from "../FeedbackForm";
// import "../assets/happy.png";

const BaseMain = ({ headerContent, mainContent, footerContent }) => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [itemCount, setItemCount] = useState(9);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f8f8f8",
        display: "flex",
      }}
    >
      <div className="Sidebar">
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

      <div className="contentContainer">
        <div className="headContent">
        <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>
            <i className={hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"}></i>
            <p>{itemCount > 0 && itemCount}</p>
          </div>
          <Search />
          <MovieCard />
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
  );
};

export default BaseMain;
