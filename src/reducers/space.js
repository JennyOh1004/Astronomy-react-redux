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

const space = (state = initialState, action) => {
  switch (action.type) {
    case types.SPACE_ASTRONOMY_DATA_REQUEST:
      return {
        ...state,
        astronomy: action.data
      };
    default:
      return state;
  }
};

export default space;
