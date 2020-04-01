import * as types from "../actions";

// 기본값
const initialState = {
  // app: {
  //   datas: {
  //     title: "Astronomy",
  //     hdurl:
  //       "https://apod.nasa.gov/apod/image/2003/SaturnColors_CassiniSchmidt_1000.jpg",
  //     url:
  //       "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2",
  //     explanation: "",
  //     copyright: null,
  //     date: "2020-03-30"
  //   }
  // }
  astronomy: {
    title: "",
    img: "",
    date: ""
  }
};

// 리듀서
const app = (state = initialState, action) => {
  console.log("app의 리듀서: ", state, action);
  switch (action.type) {
    case types.APP_ACTION_TEST:
      return {
        ...state,
        datas: action.data
      };
    case types.APP_ASTRONOMY_DATA_REQUEST:
      return {
        ...state,
        astronomy: action.data
      };
    default:
      return state;
  }
};

export default app;
