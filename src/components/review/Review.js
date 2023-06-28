import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Review.css";

import PizzaInfo from "./PizzaInfo";
import ReviewTable from "./ReviewTable";
// import { connection } from '../../../server/db';

function Review() {
  const { pizzaName } = useParams();
  const [pizzaInfo, setPizzaInfo] = useState({
    name: "",
    cost: 0,
  });
  useEffect(() => {
    axios
      .get("/api/review?pizzaName=" + pizzaName)
      .then((res) => {
        setPizzaInfo({
          name: res.data.name,
          cost: res.data.cost,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="app">
      <div>
        <div className="menu-detail main-page">
          <div className="main-top">
            <p className="main-top-text"> 피자</p>
            <p className="main-top-footer">
              맛있고 건강한 피자! 피자알볼로의
              <span> 다양한 피자를 주문</span>해 보세요.
            </p>
          </div>
          <PizzaInfo pizzaInfo={pizzaInfo} />
          <ReviewTable pizzaName={pizzaName}></ReviewTable>
        </div>
      </div>
    </div>
  );
}

export default Review;
