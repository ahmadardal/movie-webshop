import Movies from "./movies";
import "../styles/CheckoutPage.css";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart.items);

  const cartItems = cart.items.map(item => {
    console.log(item.movie.title, item.movie.price, item.quantity);
  })

  const CartItem = ({item}) => {
    return (
    <div className="cartItem">
      <MovieCard movie={item.movie}/>
      <p>First item</p>
      <p>Hello</p>
    </div>);
  };

  return (
    <div className="homeBaseContainer">
      <div className="cartList">
        {cart.items.map(item => {return (
          <CartItem item={item}/>
        )})}
      </div>
    </div>
  );
};

export default CheckoutPage;
