import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function ManagerTitleMenu() {
  return (
    <div>
      <div className="title">마이페이지</div>
      <div className="myPage_tab">
        <Link to="/managerMyPage/menuInsert" className="myPage_tab_title">
          <h5>메뉴등록</h5>
        </Link>
        <Link to="/managerMyPage/sellBarCheck" className="myPage_tab_title">
          <h5>판매수량확인</h5>
        </Link>
      </div>
    </div>
  );
}

export default ManagerTitleMenu;
