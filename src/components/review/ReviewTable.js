import React, { useEffect, useState } from "react";
import "./Review.css";
import axios from "axios";

const ReviewTable = ({ pizzaName }) => {
  const [reviewInfos, setReviewInfos] = useState([
    {
      reviewnum: 0,
      starrate: 0,
      content: "",
      writername: "",
      pizzaname: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("/api/reviewInfo?pizzaName=" + pizzaName)
      .then((res) => {
        setReviewInfos(res.data);
        console.log(reviewInfos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main-review">
      <table className="review-table">
        <thead>
          <tr className="table-header">
            <th> 별점 </th>
            <th> 리뷰 </th>
            <th> 작성자 </th>
          </tr>
        </thead>
        <tbody>
          {reviewInfos.map((reviewInfo) => (
            <tr className="row">
              <td id="review-star">{reviewInfo.starrate}</td>
              <td id="review-body">{reviewInfo.content}</td>
              <td id="review-writer">{reviewInfo.writername}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
