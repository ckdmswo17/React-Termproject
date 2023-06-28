// import "./App.css";
// import React from "react";

// function Contents() {
//   const orderdatetime = "2023-05-31 12:28";
//   const ordermenu = "허리를 피자";
//   const totalcost = "23000";
//   const ordershop = "구미 봉곡점";

//   return (
//     <div>
//       <div className="orderContent">
//         <div className="date_wapper">
//           <div className="date">주문일자</div>
//           <div>{orderdatetime}</div>
//         </div>

//         <div className="menu_wapper">
//           <div className="menu">주문메뉴</div>
//           <div>{ordermenu}</div>
//         </div>

//         <div className="cost_wapper">
//           <div className="cost">결제금액</div>
//           <div>{totalcost}</div>
//         </div>

//         <div className="shop_wapper">
//           <div className="shop">주문매장</div>
//           <div>{ordershop}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contents;

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderItem({ orderData }) {
  return (
    <div>
      <div className="orderContent">
        <div className="date_wapper">
          <div className="date">주문일자</div>
          <div>{orderData.orderdatetime}</div>
        </div>

        <div className="menu_wapper">
          <div className="menu">주문메뉴</div>
          <div>{orderData.ordermenu}</div>
        </div>

        <div className="cost_wapper">
          <div className="cost">결제금액</div>
          <div>{orderData.totalcost}</div>
        </div>

        <div className="shop_wapper">
          <div className="shop">주문매장</div>
          <div>구미 봉곡점</div>
        </div>

        <button className="review_write">후기작성</button>
      </div>
    </div>
  );
}
//console.log();
export default OrderItem;
