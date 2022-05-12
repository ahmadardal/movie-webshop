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
import '../styles/Home.css';

const Home = (props) => {

  const { hiddenMenu, cartItems, totalPrice, itemCount, removeItem, setHiddenMenu } = props;

  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increase = () => dispatch(actions.increase());
  const decrease = () => dispatch(actions.decrease());

  function btnPress() {
    decrease();
  }

  return (
    <div>
      {/* Shopping Cart */}
      <div></div>
        <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>
          <p>{itemCount > 0 && itemCount}</p>
          <i className={hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"} ></i>
      
          {/* {hiddenMenu ? <ShoppingCartContainer
          hiddenMenu={hiddenMenu}
          cartItems={cartItems}
          itemCount={itemCount}
          removeItem={removeItem}
          totalPrice={totalPrice} /> : ''} */}
  

        </div>
        <div id="deneme">
        {hiddenMenu ? <ShoppingCartContainer
          hiddenMenu={hiddenMenu}
          cartItems={cartItems}
          itemCount={itemCount}
          removeItem={removeItem}
          totalPrice={totalPrice} /> : ""} 

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
    </div>
  );
};

export default Home;
