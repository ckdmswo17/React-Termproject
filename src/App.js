import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Pizza from "./components/pizza/Pizza";
import JangIn from "./components/pizza/1";
import DalIn from "./components/pizza/2";
import MyengPoom from "./components/pizza/3";
import Review from "./components/review/Review";
import OrderHistory from "./components/mypage/OrderHistory";
import InfoUpdate from "./components/mypage/InfoUpdate";
import Cart from "./components/cart/Cart";
import MenuInsert from "./components/managermypage/MenuInsert";
import SellBarCheck from "./components/managermypage/SellBarCheck";

import React, { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isManager, setIsManager] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user_id") != null) {
      setIsLogin(true);
      if (JSON.parse(sessionStorage.getItem("isManager"))) {
        // JSON.parse()는 해당 데이터를 문자열로 변경해서 넘겨주는게 아니라 그대로 넘겨줌
        console.log(sessionStorage.getItem("isManager"));
        setIsManager(true);
      }
      //  안해줘도 새로고침될때 기본 false로 초기화됨
      // setIsManager(false);
    }
  });
  return (
    <div>
      <Header isLogin={isLogin} isManager={isManager}></Header>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/pizza" element={<Pizza isLogin={isLogin} />} />
        <Route path="/pizza/1" element={<JangIn />} />
        <Route path="/pizza/2" element={<DalIn />} />
        <Route path="/pizza/3" element={<MyengPoom />} />
        <Route path="/review/Review/:pizzaName" element={<Review />} />
        <Route path="/mypage/orderHistory" element={<OrderHistory />} />
        <Route path="/mypage/infoUpdate" element={<InfoUpdate />} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route
          path="/managerMyPage/menuInsert"
          element={<MenuInsert></MenuInsert>}
        ></Route>
        <Route
          path="/managerMyPage/sellBarCheck"
          element={<SellBarCheck></SellBarCheck>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
