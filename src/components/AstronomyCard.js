import React from "react";

const AstronomyCard = ({ data }) => {
  console.log("card data", data);
  return (
    <>
      {/* <h1>{data.title}</h1>
      <a href={data.hdurl}>
        <img src={data.url} alt={data.title}></img>
      </a>
      <h3>
        {data.date} {data.copyright}
      </h3>
      <p>{data.explanation}</p> */}
      <h1>홈화면이 없어서 임시로 AstronomyCard를 보여줍니다.</h1>
    </>
  );
};

// First Class Citizen
// 📎 조건1. 변수(variable)에 담을 수 있다.
// 📎 조건2. 인자(parameter)로 전달할 수 있다.
// 📎 조건3. 반환값(return value)으로 전달할 수 있다.
// 📎 일급 객체 = 특정 언어에서 객체(object)를 1급 시민으로써 취급
// 📎 일급 함수 = 함수를 1급 시민으로 취급하는 것.
// 위의 조건 + 조건4. 런타임(runtime)에 생성이 가능하다 + 조건5. 익명(anonymous)으로 생성 가능하다.

// import React, { useState, useEffect } from "react";
// const AstronomyCard = function({ datas }) {
//   const [isChecked, setIsChecked] = useState(true);
//   const [person, setPerson] = useState({
//     eyes: 2,
//     nose: 1,
//     mouth: 1
//   });
//   useEffect(() => {
//     // console.log("useEffect가 받았다", isChecked);
//     console.log("component did mount랑 똑같아");
//     return () => {};
//   }, []);

//   useEffect(() => {
//     console.log("isChecked useEffect", isChecked);
//   }, [isChecked]);
//   return (
//     <div
//       onClick={e => {
//         setIsChecked(!isChecked);
//         // console.log("defaultPrevented값 확인", e.defaultPrevented);
//       }}
//     >
//       AstronomyCard: {String(isChecked)}
//       <div
//         onClick={e => {
//           setPerson({
//             ...person,
//             nose: person.nose + 1
//           });
//           // e.preventDefault();
//           e.stopPropagation();
//         }}
//       >
//         nose 갯수 증가: {person.nose}
//       </div>
//     </div>
//   );
// };
export default AstronomyCard;
