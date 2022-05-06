import { createAction, createReducer } from "@reduxjs/toolkit";

const increase = createAction("increase counter");
const decrease = createAction("decrease counter");

const actions = { increase, decrease };

const initialState = 10;

const counterReducer = createReducer(initialState, {
  [increase]: (state, action) => state + 1,
  [decrease]: (state, action) => state - 1,
});

export { counterReducer, actions };
