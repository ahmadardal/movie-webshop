import { combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { cartReducer } from "./reducers/cartReducer";
import { feedbackReducer } from "./reducers/feedbackReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
  feedback: feedbackReducer
});

export { rootReducer };
