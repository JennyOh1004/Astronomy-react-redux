import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import * as types from "../actions";

class Astronomy extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { action } = this.props;
    console.log("componentDidMount!!", action);
    this.getAstronomyData();
  }

  getAstronomyData() {
    const { action } = this.props;
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2"
    )
      .then(response => {
        console.log("첫번째 then", response);
        return response.json();
      })
      .then(data => {
        console.log("두번쨰 then", data);
        console.log("제목", data.title);

        // action
        action(types.APP_ASTRONOMY_DATA_REQUEST, {
          title: data.title,
          img: data.hdurl,
          date: data.date
        });
      });
  }
  render() {
    const { astronomy } = this.props;
    const { title, img, date } = astronomy;
    console.log(this.props);
    return (
      <div>
        {/* <AstronomyCard /> */}
        <h1>{title}</h1>
        <img src={img} alt={title}></img>
        <h3>{date}</h3>
      </div>
    );
  }
}

//store 안의 state 값을 Props 로 연결해준다.
function mapStateToProps(state) {
  return {
    astronomy: state.app.astronomy
  };
}

//해당 액션을 dispatch 하는 함수를 만든후 이를 props 로 연결.
function mapDispatchToProps(dispatch) {
  console.log("state dispatch", dispatch);

  return {
    action: (type, data) => dispatch({ type, data })
  };
}

//컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할.
export default connect(mapStateToProps, mapDispatchToProps)(Astronomy);
