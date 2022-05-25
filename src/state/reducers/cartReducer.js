import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("Add to cart");
const removeFromCart = createAction("Remove from cart");
const clearCart = createAction("Clear the cart");

const actions = { addToCart, removeFromCart, clearCart };

const initialState = {
  items: [],
  count: 0,
  total: 0,
};
const cartReducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    const movieIndex = state.items.findIndex(
      (movie) => movie.movie.id === action.payload.id
    );

    if (movieIndex === -1) {
      //Movie does not exist in state!
      const newMovie = {
        movie: action.payload,
        quantity: 1,
      };
      state.items.push(newMovie);
    } else {
      //Movie exists in state already!
      state.items[movieIndex].quantity += 1;
    }

    state.count += 1;
    state.total += action.payload.price;
    return state;
  },

  [removeFromCart]: (state, action) => {
    const movieIndex = state.items.findIndex(
      (movie) => movie.movie.id === action.payload
    );
    const moviePrice = state.items[movieIndex].movie.price;

    if (movieIndex !== -1) {
      if (state.items[movieIndex].quantity > 1) {
        state.items[movieIndex].quantity -= 1;
      } else {
        state.items.splice(movieIndex, 1);
      }
    }

    state.count -= 1;
    state.total -= moviePrice;

    return state;
  },

  [clearCart]: (state, action) => {

    const newState = {
      items: [],
      count: 0,
      total: 0,
    }

    return newState;
  },
});

export { cartReducer, actions };
