import "./App.css";
import React, { useState, useCallback } from "react";
import ManagerTitleMenu from "./ManagerTitleMenu";
import axios from "axios";

function MenuInsert() {
  const [names, setNames] = useState("");
  const [costs, setCosts] = useState(0);
  const [pizzaTypes, setPizzaTypes] = useState("");
  const [registerDateTimes, setRegisterDateTimes] = useState("");
  const [images, setImages] = useState("");

  const onChangeNames = useCallback((e) => {
    setNames(e.target.value);
  });
  const onChangeCosts = useCallback((e) => {
    setCosts(e.target.value);
  });
  const onChangePizzaTypes = useCallback((e) => {
    setPizzaTypes(e.target.value);
  });
  const onChangeRegisterDateTimes = useCallback((e) => {
    setRegisterDateTimes(e.target.value);
  });
  const onChangeImages = useCallback((e) => {
    setImages(e.target.value);
  });

  const onInsert = useCallback((e) => {
    const datas = {
      name: names,
      cost: costs,
      pizzaType: pizzaTypes,
      registerDateTime: registerDateTimes,
      image: images,
    };
    axios
      .post("/api/menuInsert", datas)
      .then((res) => {
        if (res.data == "등록 성공") {
          alert("등록 성공");
        } else {
          alert("등록 실패");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <ManagerTitleMenu></ManagerTitleMenu>
      <div data-v-3e4a2001="">
        <div data-v-2ecae326="" data-v-3e4a2001="" class="my-page-editinfo">
          <div data-v-2ecae326="">
            <div data-v-2ecae326="" class="pc-top-text">
              피자 등록
            </div>
            <div data-v-2ecae326="" class="pc-body-container">
              <div data-v-2ecae326="" class="padding-box">
                <div
                  data-v-8d79ce1c=""
                  data-v-2ecae326=""
                  class="alvolo-input box-text"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    maxlength="524288"
                    placeholder="피자 이름"
                    oninput=""
                    class="input-defalut"
                    value={names}
                    onChange={onChangeNames}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    class="success-img"
                  />
                  {/* <span data-v-8d79ce1c="" class="label-validate">
                    입력 형식을 확인해 주세요
                  </span> */}
                  <span data-v-8d79ce1c="" class="label-validate"></span>
                </div>
                <div
                  data-v-8d79ce1c=""
                  data-v-2ecae326=""
                  class="alvolo-input box-text"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    maxlength="524288"
                    placeholder="가격"
                    oninput=""
                    class="input-defalut"
                    value={costs}
                    onChange={onChangeCosts}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    class="success-img"
                  />
                  {/* <span data-v-8d79ce1c="" class="label-validate">
                    입력 형식을 확인해 주세요
                  </span> */}
                  <span data-v-8d79ce1c="" class="label-validate"></span>
                </div>
                <div
                  data-v-8d79ce1c=""
                  data-v-2ecae326=""
                  class="alvolo-input box-text"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    maxlength="524288"
                    placeholder="피자 종류"
                    oninput=""
                    class="input-defalut"
                    value={pizzaTypes}
                    onChange={onChangePizzaTypes}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    class="success-img"
                  />
                  {/* <span data-v-8d79ce1c="" class="label-validate">
                    비밀번호는 아이디와 상이하게 8~16자리 영문/숫자 조합으로
                    만들어 주세요.
                  </span> */}
                  <span data-v-8d79ce1c="" class="label-validate"></span>
                </div>
                {/* <div data-v-2ecae326="" class="special_signInfo">
                  ※ 특수기호는 ! @ # $ % ^ * + = - 가능합니다
                </div> */}
                <div
                  data-v-8d79ce1c=""
                  data-v-2ecae326=""
                  class="alvolo-input box-text"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    placeholder="등록 일자(ex : 2023-03-01)"
                    oninput=""
                    class="input-defalut"
                    value={registerDateTimes}
                    onChange={onChangeRegisterDateTimes}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    class="success-img"
                  />
                  {/* <span data-v-8d79ce1c="" class="label-validate">
                    비밀번호가 일치하지 않습니다.
                  </span> */}
                  <span data-v-8d79ce1c="" class="label-validate"></span>
                </div>
              </div>
              <div data-v-2ecae326="" class="padding-box2">
                <div
                  data-v-8d79ce1c=""
                  data-v-2ecae326=""
                  class="alvolo-input box-text"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    maxlength="524288"
                    placeholder="이미지 주소"
                    oninput=""
                    class="input-defalut"
                    value={images}
                    onChange={onChangeImages}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    class="success-img"
                  />
                  {/* <span data-v-8d79ce1c="" class="label-validate">
                    입력 형식을 확인해 주세요
                  </span> */}
                  <span data-v-8d79ce1c="" class="label-validate"></span>
                </div>
              </div>
              <div data-v-2ecae326="" class="edit-membership-button-container">
                <div data-v-2ecae326="" class="blue-button" onClick={onInsert}>
                  등록
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuInsert;
