// import "./App.css";
// import React, { useState } from "react";

// function Review() {
//   const [showForm, setShowForm] = useState(false);
//   const [star, setStar] = useState([{ id: 1, text: "✨" }]);
//   const [nextId, setNextID] = useState(2);

//   // 폼 토글 함수
//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const addStar = () => {
//     if (star.id < 4) {
//       const NewStar = star.concat({
//         id: nextId,
//         text: "✨",
//       });
//       setNextID(nextId + 1);
//       setStar(NewStar);
//     }
//   };

//   const addReview = () => {
//     console.log("리뷰 등록 완료");
//   };

//   return (
//     <div className="review_wrapper">
//       <button className="button" onClick={toggleForm}>
//         리뷰 작성
//       </button>

//       {showForm && (
//         <div className="form_review">
//           <button className="button_star" onClick={addStar}>
//             ✨
//           </button>
//           <input placeholder="리뷰를 작성하세요"></input>
//           <button className="button_regist" onClick={addReview}>
//             리뷰 등록
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Review;

// import "./App.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Contents from "./Contents";

// function Review() {
//   const [showForm, setShowForm] = useState(false);
//   const [reviewData, setReviewData] = useState({
//     reviewnum: "",
//     starrate: "",
//     content: "",
//     writername: "",
//     pizzaname: "",
//   });

//   // 폼 토글 함수
//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const setStarRate = (n) => {
//     setReviewData((prevData) => ({
//       ...prevData,
//       starrate: n.toString(),
//     }));
//   };

//   const addReview = () => {
//     console.log("리뷰 등록 완료");
//     console.log(reviewData.starrate);

//     setShowForm(false);
//   };

//   // 백엔드 서버로 보낼 데이터를 생성합니다.
//   const requestData = {
//     reviewnum: reviewData.reviewnum,
//     starrate: reviewData.starrate,
//     content: reviewData.content,
//     writername: reviewData.writername,
//     pizzaname: reviewData.pizzaname,
//   };

//   axios
//     .post("/mypage/insertReview", requestData)
//     .then((response) => {
//       console.log("리뷰 등록 성공:", response.data);
//       setShowForm(false);
//     })
//     .catch((error) => {
//       console.error("리뷰 등록 실패:", error);
//       // 실패 처리 로직을 추가해야 합니다.
//     });

//   return (
//     <div className="review_wrapper">
//       <button className="button" onClick={toggleForm}>
//         리뷰 작성
//       </button>

//       {showForm && (
//         <div className="form_review">
//           <div class="star-rating">
//             <input type="radio" id="5-stars" name="rating" value="5" />
//             <label for="5-stars" class="star" onClick={() => setStarRate(5)}>
//               &#9733;
//             </label>

//             <input type="radio" id="4-stars" name="rating" value="4" />
//             <label for="4-stars" class="star" onClick={() => setStarRate(4)}>
//               &#9733;
//             </label>

//             <input type="radio" id="3-stars" name="rating" value="3" />
//             <label for="3-stars" class="star" onClick={() => setStarRate(3)}>
//               &#9733;
//             </label>

//             <input type="radio" id="2-stars" name="rating" value="2" />
//             <label for="2-stars" class="star" onClick={() => setStarRate(2)}>
//               &#9733;
//             </label>

//             <input type="radio" id="1-star" name="rating" value="1" />
//             <label for="1-star" class="star" onClick={() => setStarRate(1)}>
//               &#9733;
//             </label>
//           </div>

//           <input
//             type="text"
//             placeholder="리뷰를 작성하세요"
//             value={reviewData.content}
//             onChange={(e) =>
//               setReviewData((prevData) => ({
//                 ...prevData,
//                 content: e.target.value,
//               }))
//             }
//           />

//           <button className="button_regist" onClick={addReview}>
//             리뷰 등록
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Review;
