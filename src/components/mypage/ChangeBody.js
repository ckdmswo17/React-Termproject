import "./jungbosujungstyle.css";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

function ChangeBody() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [eMail, setEMail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");

  const onAddressChange = useCallback((e) => {
    setAddress(e.target.value);
  });

  const onAddressUpdate = useCallback(() => {
    const updateData = {
      id: id,
      address: address,
    };
    axios
      .post("/api/mypageInfo", updateData)
      .then((res) => {
        if (res.data == "수정 성공") {
          alert("수정 성공");
        } else {
          alert("수정 실패");
        }
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    axios
      .get("/api/mypageInfo?id=" + sessionStorage.getItem("user_id"))
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setId(res.data.id);
        setPassword(res.data.password);
        setPhoneNum(res.data.phonenum);
        setBirthDay(res.data.birthday);
        setGender(res.data.gender);
        setEMail(res.data.email);
        setAddress(res.data.address);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="mypage-page-content">
      <div data-v-3e4a2001="">
        <div data-v-2ecae326="" data-v-3e4a2001="" class="my-page-editinfo">
          <div data-v-2ecae326="">
            <div data-v-2ecae326="" class="pc-top-text">
              나의 기본정보
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
                    placeholder="이름"
                    disabled="disabled"
                    oninput=""
                    class="input-defalut"
                    value={name}
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
                    placeholder="아이디"
                    disabled="disabled"
                    oninput=""
                    class="input-defalut"
                    value={id}
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
                    type="password"
                    maxlength="524288"
                    placeholder="비밀번호 (8~16자리 영문/숫자 조합)"
                    oninput=""
                    disabled="disabled"
                    class="input-defalut"
                    value={password}
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
                    type="password"
                    maxlength="524288"
                    placeholder="비밀번호 확인 (8~16자리 영문/숫자 조합)"
                    oninput=""
                    class="input-defalut"
                    disabled="disabled"
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
                <div
                  data-v-8d79ce1c=""
                  data-v-2ecae326=""
                  class="alvolo-input box-text"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    maxlength="524288"
                    placeholder="핸드폰 번호"
                    oninput=""
                    class="input-defalut"
                    disabled="disabled"
                    value={phoneNum}
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
                    placeholder="생년월일(성별)"
                    disabled="disabled"
                    oninput=""
                    class="input-defalut"
                    value={birthDay.substring(0, 10) + "(" + gender + ")"}
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
                    placeholder="이메일"
                    oninput=""
                    class="input-defalut"
                    disabled="disabled"
                    value={eMail}
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
                <div
                  data-v-20430a6f=""
                  data-v-2ecae326=""
                  class="box-text alvolo-input-auth"
                >
                  <input
                    data-v-20430a6f=""
                    type="address"
                    value={address}
                    placeholder="주소"
                    class="alvolo-input-default"
                    onChange={onAddressChange}
                  />
                  <span
                    data-v-20430a6f=""
                    class="btn-auth-number btn-auth-gray"
                    onClick={onAddressUpdate}
                  >
                    주소 수정
                  </span>
                </div>
                <div data-v-2ecae326="" class="membership-check-toggle">
                  <div
                    data-v-18839c38=""
                    data-v-2ecae326=""
                    class="check-toggle"
                  >
                    <div data-v-18839c38="" class="check_toggle_whole">
                      <img
                        data-v-18839c38=""
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                        class="checkImg"
                      />
                      <div data-v-18839c38="" class="toggle-txt"></div>
                    </div>
                  </div>
                  <div data-v-2ecae326="" class="context">
                    SMS 수신 동의
                  </div>
                  <div
                    data-v-18839c38=""
                    data-v-2ecae326=""
                    class="check-toggle"
                  >
                    <div data-v-18839c38="" class="check_toggle_whole">
                      <img
                        data-v-18839c38=""
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                        class="checkImg"
                      />
                      <div data-v-18839c38="" class="toggle-txt"></div>
                    </div>
                  </div>
                  <div data-v-2ecae326="" class="context">
                    E-mail 수신 동의
                  </div>
                </div>
              </div>
              <div data-v-2ecae326="" class="edit-membership-button-container">
                <div data-v-2ecae326="" class="gray-button">
                  취소
                </div>
                <div data-v-2ecae326="" class="blue-button">
                  확인
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeBody;
