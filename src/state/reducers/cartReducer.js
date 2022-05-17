import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("Add to cart");
const removeFromCart = createAction("Remove from cart");

const actions = { addToCart, removeFromCart };

const initialState = [];

const cartReducer = createReducer(initialState, {

  
  [addToCart]: (state, action) => {

    const movieIndex = state.findIndex(
      (movie) => movie.movie.id === action.payload.id
    );

    if (movieIndex === -1) {
      //Movie does not exist in state!
      const newMovie = {
        movie: action.payload,
        count: 1,
      };
      state.push(newMovie);
    } else {
      //Movie exists in state already!
      state[movieIndex].count += 1;
    }

    return state;
  },





  [removeFromCart]: (state, action) => {
    const movieIndex = state.findIndex(
      (movie) => movie.movie.id === action.payload
    );

    if (movieIndex !== -1) {
      if (state[movieIndex].count > 1) {
        state[movieIndex].count -= 1;
      } else {
        state.splice(movieIndex, 1);
      }
    }

    return state;
  },
});

export { cartReducer, actions };
