import React, { useEffect, useState, useCallback } from "react";
import "./Review.css";
import axios from "axios";

import shrimp from "./img/shrimp&hot_chicken_gold_review.png";
import flying from "./img/flying_review.png";
import ukke from "./img/ukke_review.png";
import ggumeul from "./img/ggumeul_review.png";
import paldo from "./img/paldo_review.jpg";
import smile_flower from "./img/smile_flower_review.jpg";
import jeonju_bulback from "./img/jeonju_bulback_review.jpg";
import palza from "./img/palza_review.png";
// 여기부터 초기 db에 없는 피자 메인 이미지
import danhobak from "./img/danhobak.jpeg";
import combination from "./img/combination.png";
import mokdong from "./img/mokdong.jpeg";
import daesae from "./img/daesae.png";
import goguma from "./img/goguma.jpeg";

const PizzaInfo = ({ pizzaInfo }) => {
  // 데이터
  const name = pizzaInfo.name;

  const [pizzaImage, setPizzaImage] = useState(""); // 이미지 상태를 관리하는 useState 훅

  useEffect(() => {
    // 페이지가 로드될 때 실행되는 효과 함수
    if (name === "쉬림프&핫치킨골드피자") {
      setPizzaImage(shrimp);
    } else if (name === "날개피자") {
      setPizzaImage(flying);
    } else if (name === "어깨피자") {
      setPizzaImage(ukke);
    } else if (name === "꿈을피자") {
      setPizzaImage(ggumeul);
    } else if (name === "팔도피자") {
      setPizzaImage(paldo);
    } else if (name === "웃음꽃피자") {
      setPizzaImage(smile_flower);
    } else if (name === "전주불백피자") {
      setPizzaImage(jeonju_bulback);
    } else if (name === "팔자피자") {
      setPizzaImage(palza);
    } else if (name === "단호박피자") {
      setPizzaImage(danhobak);
    } else if (name === "콤비네이션") {
      setPizzaImage(combination);
    } else if (name === "목동피자") {
      setPizzaImage(palza);
    } else if (name == "대세피자") {
      setPizzaImage(daesae);
    } else if (name === "고구마피자") {
      setPizzaImage(goguma);
    }
    console.log(pizzaInfo);
  }, [name]); // name이 변경될 때마다 실행되도록 의존성 배열에 name을 넣음

  //   const getReview = useCallback(() => {
  //     axios
  //     .get('/api/review/:pizzaName')
  //     .then((Response)=>{
  //       console.log(Response);
  //     }).catch((Error)=>{
  //       console.log(Error);
  //     })
  //   }, []);

  return (
    <div className="pizza-info">
      <div className="pizza-item-image">
        {/* <div className="pizza-item-image" onClick={getReview}> */}
        <img className="image" src={pizzaImage} alt="pizza image" />
      </div>
      <div className="pizza-item-info">
        <div className="pizza-item-name">{pizzaInfo.name}</div>
        <div className="pizza-item-price">
          <span className="pizza-item-price blue">L</span>
          <span className="pizza-item-price black">&nbsp;{pizzaInfo.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaInfo;
