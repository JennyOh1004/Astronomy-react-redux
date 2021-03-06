// 1. components 에 LastSpace.js 페이지 추가합니다. +
// 2. LastSpace.js 에 '이전우주보기' 버튼을 추가합니다. +
// 3. 오늘 날짜는 new Date() 로 가져와서 설정합니다. +
// 4. LastSpace 로 새로운 리듀서를 만들고 여기에 state 값을 설정해줍니다. +
// 5. 렌더에 currentDate 를 props 로 보내줍니다. +
// 6. 현재 설정된 날짜는 변수로 받아옵니다. +
// 7. 현재 날짜를  저장하도록 componentDidMount에서 initialize 해줍니다(action을 날려서) +
// 8. 이전우주보기를 클릭하면 전날짜로 계속 옮겨집니다. ( onClick으로 연결 ) !!중요!!
// 9. LastSpace.js 에 router 로 붙여줍니다.

import React, { Component } from "react";
import * as types from "../actions";
import { connect } from "react-redux";
import lastSpace from "../reducers/lastSpace";

class LastSpace extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("LastSpace componentDidMount!!");
    const { action } = this.props;
    this.getAstronomyData();
    this.currentDates();
    // this.getPrev();
  }

  currentDates() {
    const { action } = this.props;
    action(
      types.LAST_ASTRONOMY_DATA_REQUEST,
      new Date().toISOString().slice(0, 10)
    );
  }

  getPrev() {
    const { action } = this.props;
    const current = new Date().toISOString().slice(0, 10);
    const prevDate = current.setDate(getDate() - 1);
    console.log("어제 날짜 계산하기 ", prevDate);

    action(types.SPACE_ASTRONOMY_DATA_REQUEST, {
      prevDate: data.date
    });
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
        action(types.SPACE_ASTRONOMY_DATA_REQUEST, {
          title: data.title,
          img: data.hdurl,
          date: data.date
        });
      });
  }

  render() {
    // const { currentDates } = this;
    // console.log("렌더에서 현재날짜", currentDates);

    const { astronomy, currentDate, prevDate } = this.props;
    const { title, img, date } = astronomy;
    const { getPrev, currentDates } = this;
    console.log("프롭스 현재 날짜", currentDate);
    console.log("프롭스 이전 날짜", prevDate);
    return (
      <div>
        <button onClick={() => getPrev()}> 이전 우주 보기 </button>
        <p>현재 날짜 : {currentDate} </p>
        <p>이전 날짜 : {prevDate} </p>
      </div>
    );
  }
}

//map 설정해주기

function mapStateToProps(state) {
  return {
    astronomy: state.lastSpace.astronomy,
    currentDate: state.lastSpace.currentDate
  };
}

function mapDispatchToProps(dispatch) {
  console.log("이전우주보기 !!", dispatch);
  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LastSpace);
