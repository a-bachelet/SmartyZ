// Partial Libraries Imports
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Redux Reducers Imports
import RootReducer from "./CombineReducers";

export default createStore(RootReducer, applyMiddleware(thunk));
