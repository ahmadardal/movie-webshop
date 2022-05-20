import { useEffect } from "react";
import { actions } from "../../state/reducers/cartReducer.js";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "./shoppingCart";
import TotalPrice from "./totalPrice";

const ShoppingCartContainer = (props, { addMovie, removeMovie }) => {
  const { hiddenMenu, itemCount, removeItem } = props;
 // const movies = useSelector((state) => state.cart.items);
 const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();



  const addToCart = (movie) => dispatch(actions.addToCart(movie));
  const removeFromCart = (movieId) => { dispatch(actions.removeFromCart(movieId)); };
  return (
    <div className="shoppingCartContainer">
      <ShoppingCart  cartItems = {cartItems} removeItem={removeFromCart}/>
      {/* {movies.map((movie) => {
        return <ShoppingCart movie={movie} removeItem={removeFromCart} />;
      })} */}

      <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
    </div>
  );
};

export default ShoppingCartContainer;
