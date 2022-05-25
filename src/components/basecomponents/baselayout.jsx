import "../../styles/BaseComponent.css";
import { useState } from "react";
import MenuItem from "./menuitem";
import Search from "../search";
import BurgerMenyIcon from "../../assets/hamburger.png";
import Logo from "../../assets/webpagelogo.png";
import ShoppingCartContainer from "../shoppingCart/shoppingCartContainer";
import Home from "../../pages/home";
import Drama from "../../pages/drama";
import Horror from "../../pages/horror";
import Comedy from "../../pages/comedy";
import Action from "../../pages/action";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SelectedMovie from "../../pages/SelectedMovie";
import CheckoutPage from "../../pages/CheckoutPage";
import SearchResults from "../../pages/SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseShoppingCart from "../../assets/cross.png";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// This is the base layout for the entire page:
const BaseLayout = ({ headerContent, mainContent, footerContent }) => {
  const totalPrice = useSelector((state) => state.cart.total);
  const itemCount = useSelector((state) => state.cart.count);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  // This is for the shoppingcart function, all the way down to line 61
  const [hiddenMenu, setHiddenMenu] = useState(false);

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

      <div className="menuWrapper">
        {hiddenMenu ? (
          <img
            src={CloseShoppingCart}
            className="shoppingcart-close-cross"
            onClick={() => setHiddenMenu(!hiddenMenu)}
          />
        ) : (
          <div />
        )

        }
        
        <div className="shoppingcart-icons">
          <p>{itemCount > 0 && !hiddenMenu && itemCount}</p>
          <i
            onClick={() => setHiddenMenu(!hiddenMenu)}
            className={
              hiddenMenu ? "hidden-component" : "fas fa-shopping-cart fa-lg"
            }
          ></i>
        </div>
        <div id="ShoppingCartMenu">
          {hiddenMenu ? (
            <ShoppingCartContainer
              hiddenMenu={hiddenMenu}
              itemCount={itemCount}
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
          <Link to={"/"}>
            <img src={Logo} alt="Webpage Logo" className="webpage-logo-image" />
          </Link>
          <Search setSearchTitle={setSearchTitle} />
        </div>

        {/* Here are all the replaceble components */}
        <div className="mainContent" style={{ marginTop: 30 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/action" element={<Action />} />
            <Route exact path="/drama" element={<Drama />} />
            <Route exact path="/horror" element={<Horror />} />
            <Route exact path="/comedy" element={<Comedy />} />
            <Route path="selectedmovie" element={<SelectedMovie />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route
              path="searchresults"
              element={<SearchResults title={searchTitle} />}
            />
          </Routes>
        </div>

        <div className="footerContent">
          {" "}
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>

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
        title="Upptäck"
        image={require("../../assets/tv-show.png")}
        navigatesTo=""
      />
      <MenuItem
        title="Drama"
        image={require("../../assets/detective.png")}
        navigatesTo="drama"
      />
      <MenuItem
        title="Horror"
        image={require("../../assets/pumpkin.png")}
        navigatesTo="horror"
      />
      <MenuItem
        title="Action"
        image={require("../../assets/guns.png")}
        navigatesTo="action"
      />
      <MenuItem
        title="Comedy"
        image={require("../../assets/theatre.png")}
        navigatesTo="comedy"
      />
    </div>
  );
};
