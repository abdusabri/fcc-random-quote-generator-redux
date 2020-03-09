import { createStore, applyMiddleware } from "redux";
import { appReducer } from "../reducers/combined-reducers";
import initialState from "./initial-state";
import thunk from "redux-thunk";

export default createStore(appReducer, initialState, applyMiddleware(thunk));
