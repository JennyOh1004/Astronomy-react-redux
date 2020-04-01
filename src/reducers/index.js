import { combineReducers } from "redux";
import app from "./app";
import space from "./space";

const reducers = combineReducers({
  app,
  space
});

export default reducers;
