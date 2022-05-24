import Movies from "./movies";
import "../styles/CheckoutPage.css";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart.items);

  const cartItems = cart.items.map((item) => {
    console.log(item.movie.title, item.movie.price, item.quantity);
  });

  const CartItem = ({ item }) => {
    return (
      <div className="cartItem">
        <MovieCard movie={item.movie} isSmall={true} />

        <div className="itemQuantity">
          <a
            href={`tel:`}
            class="btn btn-success"
            role="button"
            data-bs-toggle="button"
          >
            +
          </a>
          <p className="itemPrice">{item.quantity * item.movie.price}kr</p>
          <a
            href={`tel:`}
            class="btn btn-danger"
            role="button"
            data-bs-toggle="button"
          >
          -
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="homeBaseContainer">
      <div className="cartList">
        {cart.items.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default CheckoutPage;
