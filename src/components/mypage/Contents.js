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
import { wait } from "@testing-library/user-event/dist/utils";
import OrderItem from "./OrderItem";

function Contents() {
  const [orderDatas, setOrderDatas] = useState([
    {
      ordernum: 0,
      orderdatetime: "",
      ordermenu: "",
      totalcost: 0,
      orderuserId: "",
    },
  ]);

  useEffect(function () {
    axios
      .get("/api/orderDetail?userId=" + sessionStorage.getItem("user_id"))
      .then((res) => {
        setOrderDatas(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log(orderData);
  //console.log(orderdatetime?.orderdatetime);
  return (
    <div>
      {orderDatas.forEach((orderData) => {
        <OrderItem orderData={orderData}></OrderItem>;
      })}
    </div>
  );
}
//console.log();
export default Contents;
