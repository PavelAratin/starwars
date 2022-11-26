import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";

export const rootReducer =  combineReducers({
  favoriteReducer: favoriteReducer
})
