import { useEffect } from "react";
import { actions } from "../../state/reducers/cartReducer.js";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "./shoppingCart";
import TotalPrice from "./totalPrice";

const ShoppingCartContainer = (props, { addMovie, removeMovie }) => {
  const { hiddenMenu, cartItems, totalPrice, itemCount, removeItem } = props;
  const movies = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("MOVIES LIST: ", movies);
  }, []);

  const addToCart = (movie) => dispatch(actions.addToCart(movie));
  const removeFromCart = (movieId) => {
      console.log('Removing', movieId)
    dispatch(actions.removeFromCart(movieId));
  };
  return (
    <div className="shoppingCartContainer">
      {movies.map((movie) => {
        return <ShoppingCart movie={movie} removeItem={removeFromCart} />;
      })}

      <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
    </div>
  );
};

export default ShoppingCartContainer;

// {`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}

// <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
