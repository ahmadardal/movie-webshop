import { useState } from "react";
import "../styles/CheckoutPage.css";
import MovieCard from "../components/MovieCard";
import { actions } from "../state/reducers/cartReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckoutPage = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(actions.addToCart(item.movie));
  };

  const decrementItem = (item) => {
    dispatch(actions.removeFromCart(item.movie.id));
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const placeOrder = () => {
    if (name === "") {
      return toast.error("Please enter a name!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    if (age < 18) {
      return toast.error("You have to be over 18!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    if (!validateEmail(mail)) {
      return toast.error("Please enter a valid email", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    toast.success("Order placed!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    dispatch(actions.clearCart());

    navigate("/");
  };

  const CartItem = ({ item }) => {
    return (
      <div className="cartItem">
        <MovieCard movie={item.movie} isSmall={true} />

        <p className="itemPrice">{item.quantity * item.movie.price}kr</p>

        <div className="itemQuantity">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => incrementItem(item)}
          >
            +
          </button>
          <p className="itemPrice">{item.quantity}</p>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => decrementItem(item)}
          >
            -
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="homeBaseContainer">
      {cart.items.length === 0 ? (
        <p className="itemPrice">No items available!</p>
      ) : (
        <>
          <div className="cartList">
            {cart.items.map((item) => {
              return <CartItem item={item} />;
            })}
            <p className="totalPrice">Total price: {cart.total}kr</p>
          </div>
          <div className="formContainer">
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Age</p>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <p>E-mail address</p>
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <button type="button" class="btn btn-primary" onClick={placeOrder}>
              Place order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
