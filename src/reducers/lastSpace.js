import * as types from "../actions";

const initialState = {
  astronomy: {
    title: "",
    img: "",
    date: ""
  },
  currentDate: "",
  prevDate: ""
};

const lastSpace = (state = initialState, action) => {
  switch (action.type) {
    case types.LAST_ASTRONOMY_DATA_REQUEST:
      return {
        ...state,
        currentDate: action.data
      };
    case types.PREV_ASTRONOMY_DATA_REQUEST:
      return {
        ...state,
        prevDate: action.data
      };
    default:
      return state;
  }
};
export default lastSpace;
