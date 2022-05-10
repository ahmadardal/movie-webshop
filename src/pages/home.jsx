import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import BaseMain from "../components/basecomponents/basemain";
import FeedbackCard from "../components/FeedbackCard";
import FeedbackForm from "../components/FeedbackForm";
import Button from "../components/reusableComponents/button";
import { actions } from "../state/reducers/counterReducer.js";
import ShoppingCartContainer from "../components/shoppingCart/shoppingCartContainer";
import Movies from "../components/movies";
import MovieCard from "../components/MovieCard";
import MovieSlider from "../components/movieslider";
import BurgerMenyIcon from "../assets/hamburger.png"
import MenuItem from "../components/basecomponents/menuitem";
import { useState } from "react";
import "../styles/Home.css"


const Home = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [itemCount, setItemCount] = useState(9);
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const increase = () => dispatch(actions.increase());
  const decrease = () => dispatch(actions.decrease());

  function btnPress() {
    decrease();
  }

  return (
    <div className="homeBaseContainer">
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
      <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>
        <p>{itemCount > 0 && itemCount}</p>
        <i className={hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"}></i>
        {hiddenMenu ? <ShoppingCartContainer /> : ''}
      </div>
      <BaseMain
        headerContent={
          <div id="headerContentContainer">
            <h1 id="pageTitle">Välkommen till Filmcentralen</h1>
          </div>
        }
        mainContent={
          <div>
            <h1>{value}</h1>
            <MovieSlider />
            <Movies />
            <Button btnText={"Hello"} handleClick={btnPress} />
            <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18" />
            <FeedbackForm />
            <FeedbackCard feedback="Hej" author="Ahmad Ardal" age="18" />
          </div>
        }
      />
    </div>
  );
};

const MenuList = () => {
  return (
    <div>
      <MenuItem
      title="Hem"
      image={require("../assets/home.png")}
      navigatesTo=""
      />
    </div>
  )
}

export default Home;
