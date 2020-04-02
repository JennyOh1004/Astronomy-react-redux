import { combineReducers } from "redux";
import app from "./app";
import space from "./space";
import lastSpace from "./lastSpace";

const reducers = combineReducers({
  app,
  space,
  lastSpace
});

export default reducers;
