import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function TitleMenu() {
  return (
    <div>
      <div className="title">마이페이지</div>
      <div className="myPage_tab">
        <Link to="/mypage/orderHistory" className="myPage_tab_title">
          <h5>주문내역</h5>
        </Link>
        <div className="myPage_tab_title">
          <h5>쿠폰함</h5>
        </div>
        <div className="myPage_tab_title">
          <h5>MY CLASS</h5>
        </div>
        <div className="myPage_tab_title">
          <h5>비행기스탬프</h5>
        </div>
        <Link to="/mypage/infoUpdate" className="myPage_tab_title">
          <h5>정보수정</h5>
        </Link>
        <div className="myPage_tab_title">
          <h5>회원탈퇴</h5>
        </div>
      </div>
    </div>
  );
}

export default TitleMenu;
