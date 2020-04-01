import { createStore } from "redux";
import reducers from "../reducers";
// import promise from "react-promise";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
