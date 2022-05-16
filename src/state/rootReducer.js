import { combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});

export { rootReducer };
