import { combineReducers } from "redux";
import { reducerCounter } from "./counter/reducer";

export default combineReducers({
  counter: reducerCounter,
});
