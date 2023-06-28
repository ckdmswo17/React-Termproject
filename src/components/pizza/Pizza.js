// import list_icon from "./img/list_icon.png";
// import alvolo_icon from "./img/pizza_avollo_icon.png";
// import pizza_icon from "./img/pizza_logo_icon.png";
// import right_arrow_icon from "./img/right_arrow_icon.png";
// import ji_pizza_1 from "./img/ji_pizza_1.png";
// import ji_pizza_2 from "./img/ji_pizza_2.png";
// import di_pizza_1 from "./img/di_pizza_1.png";
// import di_pizza_2 from "./img/di_pizza_2.png";
// import di_pizza_3 from "./img/di_pizza_3.png";
// import mp_pizza_1 from "./img/mp_pizza_1.png";
// import mp_pizza_2 from "./img/mp_pizza_2.jpg";
// import mp_pizza_3 from "./img/mp_pizza_3.png";
// import go_review from "./img/img_review_icon.png";
// import go_basket from "./img/img_basket_icon.png";

import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "./Pizza.css";

import PizzaItem from "./PizzaItem";
import Pagination from "./Pagination";
import Rank from "./Rank";

// const initData =
const Pizza = () => {
  useEffect(() => {
    axios
      .get("/api/pizza")
      .then((res) => {
        console.log(res.data);
        setPizzas(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const [pizzas, setPizzas] = useState([
    {
      name: "",
      cost: 0,
      pizzatype: "",
      registerdatetime: "",
      image: "",
    },
  ]);
  // const [selected, setSelected] = useState("");
  const handleSelect = useCallback((e) => {
    if (e.target.value == "신제품순") {
      const sorted = [...pizzas].sort((a, b) =>
        a.registerdatetime.localeCompare(b.registerdatetime)
      );
      setPizzas(sorted);
    } else if (e.target.value == "가격낮은순") {
      const sorted = [...pizzas].sort((a, b) => a.cost - b.cost);
      setPizzas(sorted);
    } else if (e.target.value == "가격높은순") {
      const sorted = [...pizzas].sort((a, b) => b.cost - a.cost);
      setPizzas(sorted);
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState([]);
  const itemsPerPage = 2;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = pizzas.slice(startIndex, endIndex);
    setVisibleItems(itemsToDisplay);
  }, [currentPage, pizzas]);

  // const abc = useCallback((currentPage) => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const itemsToDisplay = pizzas.slice(startIndex, endIndex);
  //   setVisibleItems(itemsToDisplay);
  // });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // abc(currentPage);
  };

  return (
    <div id="app">
      <div>
        <div className="main-page">
          <div className="main-top">
            <p className="main-top-text"> 피자</p>
            <p className="main-top-footer">
              맛있고 건강한 피자! 피자알볼로의
              <span> 다양한 피자를 주문</span>해 보세요.
            </p>
          </div>
          <div className="main-tab-area">
            <table className="tab-container">
              <tr className="column">
                <td className="tab-title active"> 전체 </td>
                <Link to="/pizza/1" className="route">
                  <td className="tab-title default"> 장인피자 </td>
                </Link>
                <Link to="/pizza/2" className="route">
                  <td className="tab-title default"> 달인피자 </td>
                </Link>
                <Link to="/pizza/3" className="route">
                  <td className="tab-title default"> 명품피자 </td>
                </Link>
              </tr>
            </table>
          </div>
          <div className="main-menu">
            <div className="menu-text-area">
              <div className="menu-allergie-circle-area">
                <a className="menu-allergie-circle">i</a>
                <a> 재료성분 </a>
              </div>
              <div className="menu-rank">
                <select
                  id="selectActive"
                  className="rank-select"
                  onChange={handleSelect}
                >
                  <option value="신제품순">신제품순</option>
                  <option value="가격낮은순">가격낮은순</option>
                  <option value="가격높은순">가격높은순</option>
                </select>
              </div>
              {/* <Rank getRank={getRank}></Rank> */}
            </div>
            <div className="menu-card-area">
              {visibleItems.map((pizza) => (
                <PizzaItem pizza={pizza}></PizzaItem>
              ))}

              {/* <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={ji_pizza_1} className="image" alt="pizza image" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">쉬림프&핫치킨골드피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;34,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;29,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={ji_pizza_2} className="image" alt="pizza img" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;34,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;29,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={di_pizza_1} className="image" alt="pizza image" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">쉬림프&핫치킨골드피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;31,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;27,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={di_pizza_2} className="image" alt="pizza img" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;31,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;27,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={di_pizza_3} className="image" alt="pizza img" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;31,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;27,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={mp_pizza_1} className="image" alt="pizza image" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">쉬림프&핫치킨골드피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;34,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;29,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={mp_pizza_2} className="image" alt="pizza img" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span>
                        &nbsp;34,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span>
                        &nbsp;29,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <div className="card-item-container">
                  <div className="menu-state-container">
                    <img className="menu-state" />
                  </div>
                  <div className="image-container">
                    <img src={mp_pizza_3} className="image" alt="pizza img" />
                  </div>
                  <div className="item-container">
                    <h5 className="item-name">피자</h5>

                    <h5 className="item-price">
                      <span>
                        <span className="large">L</span> 34,500
                      </span>
                      &nbsp;
                      <span>
                        <span className="regular">R</span> 29,000
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="click-active shadow-box">
                  <div className="review-button">
                    <Link to="/review" className="route">
                      <div className="inner-container">
                        <img
                          src={go_review}
                          className="review-card"
                          alt="go-review"
                        />{" "}
                        리뷰보기
                      </div>
                    </Link>
                  </div>
                  <div className="basket-button">
                    <div className="inner-container">
                      <img
                        src={go_basket}
                        className="basket-card"
                        alt="go-basket"
                      />{" "}
                      장바구니
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <Pagination
              itemAmount={pizzas.length}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            ></Pagination>
            {/* itemAmount, currentPage, itemsPerPage, onPageChange */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
