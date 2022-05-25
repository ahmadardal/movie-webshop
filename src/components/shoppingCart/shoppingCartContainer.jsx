import { useEffect } from "react";
import { actions } from "../../state/reducers/cartReducer.js";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "./shoppingCart";
import TotalPrice from "./totalPrice";
import { Link } from "react-router-dom";

const ShoppingCartContainer = (props, { addMovie, removeMovie }) => {
  const { hiddenMenu, cartItems, itemCount, removeItem } = props;
  const movies = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("MOVIES LIST: ", movies);
  }, []);

  const removeFromCart = (movieId) => {
    dispatch(actions.removeFromCart(movieId));
  };
  return (
    <div className="shoppingCartContainer">
      {movies.map((movie) => {
        return <ShoppingCart movie={movie} removeItem={removeFromCart} />;
      })}
      <Link to={"/checkout"} style={{textDecoration: 'none'}}>
        <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
      </Link>
    </div>
  );
};

export default ShoppingCartContainer;
