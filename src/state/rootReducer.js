import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { feedbackReducer } from "./reducers/feedbackReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  feedback: feedbackReducer
});

export { rootReducer };
