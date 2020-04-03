import React, { Component } from "react";
import * as types from "../actions";
import { connect } from "react-redux";
import space from "../reducers/space";
import LastSpace from "./LastSpace";

// 1. API data -> fetch 로 연결해주고, 이건 함수로 만들어줄게요
// 2. action type 을 설정해줍니다
// 3. action type 설정한 이름으로 reducers -> app.js 에서
// 함수를 설정해줍니다.
// 4. 설정된 함수는 state 값에 따라 업데이트 됩니다
// 5. Space.js 에서 액션을 날려주는것을 설정합니다
// 6. reducers - index.js 에서 reducers 에 따로 설정해준
//    space combineReducers, import 해줍니다.
// 7. mapStateToProps, mapDispatchToProps를 설정해줍니다
// 8. 데이터가 잘 오는지 확인한후 render 데이타가 나오게 해줍니다.

class Space extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount!");
    const { action } = this.props;
    this.getAstronomyData();

    // action(types.LASTSPACE_SET_TODAY, new Date());
  }

  getAstronomyData() {
    const { action } = this.props;
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2&date=" +
        "2020-03-10"
    )
      .then(response => {
        console.log("첫번째 then", response);
        return response.json();
      })
      .then(data => {
        console.log("두번쨰 then", data);
        console.log("제목", data.title);

        // action
        action(types.SPACE_ASTRONOMY_DATA_REQUEST, {
          title: data.title,
          img: data.hdurl,
          date: data.date
        });
      });
  }

  render() {
    const { astronomy, current } = this.props;
    const { title, img, date } = astronomy;
    console.log("props", this.props);
    return (
      <div>
        <h1>Space 페이지 입니다.</h1>

        <h1>{title}</h1>
        <img src={img} alt={title}></img>
        <h3>{date}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    astronomy: state.space.astronomy
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Dispatch!", dispatch);

  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Space);
