import { combineReducers } from "redux";
import quoteReducer from "./quote-reducer";
import statusReducer from "./status-reducer";

export const appReducer = combineReducers({
  quote: quoteReducer,
  status: statusReducer
});
