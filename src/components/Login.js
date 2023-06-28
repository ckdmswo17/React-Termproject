import React, { useState, useRef, useCallback, useEffect } from "react";
import "../index.css";
import axios from "axios";
import cookie from "react-cookies";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onIdChange = useCallback((e) => {
    setId(e.target.value);
  });
  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  });

  const onLogin = useCallback(() => {
    const loginData = {
      id: id,
      password: password,
    };
    axios
      .post("/api/login", loginData)
      .then((res) => {
        const ress = res.data.split(" ");
        console.log(ress);
        if (ress[0] == "로그인성공") {
          // const expires = new Date();
          // expires.setMinutes(expires.getMinutes() + 10); // 로그인 한 시간에서 10분뒤 쿠키 해제
          // cookie.save("userid", res.data, {
          //   path: "/",
          //   expires,
          // });
          sessionStorage.setItem("user_id", ress[1]);
          axios
            .get("/api/main?id=" + loginData.id)
            .then((res) => {
              if (res.data == "관리자") {
                sessionStorage.setItem("isManager", true);
              } else {
                sessionStorage.setItem("isManager", false);
              }
            })
            .catch((err) => console.log(err));

          navigate("/");
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        } else {
          alert("아이디나 비밀번호를 확인해주세요");
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <div data-v-7aec16f0="" className="login-page-container client-main-page">
      <div data-v-7aec16f0="" className="login-page-inner">
        <div data-v-7aec16f0="" className="page-header">
          <div data-v-3e045b00="" data-v-7aec16f0="" id="sub-header-container">
            <div data-v-3e045b00="" className="btn-header-back">
              <img
                data-v-3e045b00=""
                id="img-back"
                src="data:image/svg+xml;base64,PHN2ZyBpZD0iYmFjayIgCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0MCAzMiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+ICAgICAgLmNscy0xIHsgICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsgICAgICB9ICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJf65Kk66GcX2NvcHkiIGRhdGEtbmFtZT0iJmx0OyDrkqTroZwgY29weSIgY2xhc3M9ImNscy0xIiBkPSJNNjYuODY3LDQyTDY5LDQ0LjIxLDU0LjM5Miw1OC41LDY5LDcyLjc4Niw2Ni44NjgsNzUsNTAsNTguNVpNNTQsNTdIOTB2M0g1NFY1N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCAtNDIpIi8+CiAgPHJlY3QgaWQ9IuyCrOqwge2YlV8xIiBkYXRhLW5hbWU9IuyCrOqwge2YlSAxIiB4PSIzIiB5PSIxNCIgd2lkdGg9IjMiIGhlaWdodD0iNSIvPgo8L3N2Zz4="
              />
            </div>
            <div data-v-3e045b00="" className="sub-header-title">
              로그인
            </div>
          </div>
        </div>
        <div data-v-7aec16f0="" className="login-page-tab">
          <div data-v-7aec16f0="" className="menutab-page-whole-div">
            <div className="menutab-page-menutab">
              <div className="menutab-page-title">
                <h5 className="tab_start isActive">회원로그인</h5>
              </div>
              <div className="menutab-page-title">
                <h5 className="tab_middle">비회원 주문</h5>
              </div>
              <div className="menutab-page-title">
                <h5 className="tab_last">비회원 주문조회</h5>
              </div>
            </div>
          </div>
        </div>
        <div data-v-7aec16f0="" className="login-page-body">
          <div data-v-7aec16f0="" className="login-page-content">
            <div
              data-v-5eb645d0=""
              data-v-7aec16f0=""
              className="member-login-page"
            >
              <div data-v-5eb645d0="" className="banner-area">
                <div data-v-5eb645d0="" className="banner-text-area">
                  <div data-v-5eb645d0="" className="banner-text">
                    <span data-v-5eb645d0="" className="banner-font">
                      알볼로 여행을 위해
                    </span>
                    <br data-v-5eb645d0="" />
                    <span
                      data-v-5eb645d0=""
                      className="banner-font banner-font-blue"
                    >
                      로그인
                    </span>
                    <span data-v-5eb645d0="" className="banner-font">
                      을 해주세요 :)
                    </span>
                  </div>
                </div>
                <div data-v-5eb645d0="" className="banner-img-area">
                  <img
                    data-v-5eb645d0=""
                    src="data:image/png;base64,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"
                    className="banner-img"
                  />
                </div>
              </div>
              <div data-v-5eb645d0="" className="login-area">
                <div
                  data-v-8d79ce1c=""
                  data-v-5eb645d0=""
                  className="alvolo-input member-login-input"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="text"
                    maxlength="20"
                    placeholder="아이디"
                    oninput=""
                    className="input-defalut"
                    onChange={onIdChange}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    className="success-img"
                  />
                  <span data-v-8d79ce1c="" className="label-validate">
                    입력 형식을 확인해 주세요
                  </span>
                  <span data-v-8d79ce1c="" className="label-validate"></span>
                </div>
                <div
                  data-v-8d79ce1c=""
                  data-v-5eb645d0=""
                  className="alvolo-input member-login-input"
                >
                  <input
                    data-v-8d79ce1c=""
                    type="password"
                    maxlength="20"
                    placeholder="비밀번호"
                    oninput=""
                    className="input-defalut"
                    onChange={onPasswordChange}
                  />
                  <img
                    data-v-8d79ce1c=""
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MyIgaGVpZ2h0PSIzMSIgdmlld0JveD0iMCAwIDQzIDMxIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNDFiNmU2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuyCrOyaqeu2iOqwgOuKpV9jb3B5IiBkYXRhLW5hbWU9IuyCrOyaqeu2iOqwgOuKpSBjb3B5IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDI0LjA1LDE5NDUuNTdsLTE0LjI2LTE0LjkzLTIuNzksMi43MiwxNy4wNSwxNy42NCwyNS45NS0yOC4yOC0yLjc5LTIuNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNyAtMTkyMCkiLz4KPC9zdmc+Cg=="
                    className="success-img"
                  />
                  <span data-v-8d79ce1c="" className="label-validate">
                    입력 형식을 확인해 주세요
                  </span>
                  <span data-v-8d79ce1c="" className="label-validate"></span>
                </div>
                <div data-v-5eb645d0="" className="check-area">
                  <div
                    data-v-18839c38=""
                    data-v-5eb645d0=""
                    className="check-toggle-mobile"
                  >
                    <div data-v-18839c38="" className="check_toggle_whole">
                      <img
                        data-v-18839c38=""
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                        className="checkImg"
                      />
                      <div data-v-18839c38="" className="toggle-txt">
                        아이디 저장
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-18839c38=""
                    data-v-5eb645d0=""
                    className="check-toggle-mobile"
                  >
                    <div data-v-18839c38="" className="check_toggle_whole">
                      <img
                        data-v-18839c38=""
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                        className="checkImg"
                      />
                      <div data-v-18839c38="" className="toggle-txt">
                        자동 로그인
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-18839c38=""
                    data-v-5eb645d0=""
                    className="check-toggle-web"
                  >
                    <div data-v-18839c38="" className="check_toggle_whole">
                      <img
                        data-v-18839c38=""
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                        className="checkImg"
                      />
                      <div data-v-18839c38="" className="toggle-txt">
                        아이디 저장
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-18839c38=""
                    data-v-5eb645d0=""
                    className="check-toggle-web"
                  >
                    <div data-v-18839c38="" className="check_toggle_whole">
                      <img
                        data-v-18839c38=""
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                        className="checkImg"
                      />
                      <div data-v-18839c38="" className="toggle-txt">
                        자동 로그인
                      </div>
                    </div>
                  </div>
                  <div data-v-5eb645d0="" className="link-findId-web">
                    아이디/비밀번호 찾기
                  </div>
                </div>
              </div>
              <div
                data-v-5eb645d0=""
                className="btn-login"
                onClick={() => {
                  onLogin();
                }}
              >
                로그인
              </div>
              <div data-v-5eb645d0="" className="btn-login btn-loginPhone">
                휴대폰번호로 로그인 <i data-v-5eb645d0="">광고</i>
              </div>
              <h6 data-v-5eb645d0="" className="link-findId">
                아이디/비밀번호 찾기
              </h6>
              <div data-v-5eb645d0="" className="sns_login">
                <h5 data-v-5eb645d0="">간편 로그인</h5>
                <ul data-v-5eb645d0="">
                  <li data-v-5eb645d0="">
                    <button
                      data-v-5eb645d0=""
                      type="button"
                      className="sns_loginKakao"
                    >
                      카카오톡 로그인
                    </button>
                    <span data-v-5eb645d0="">카카오</span>
                  </li>
                  <li data-v-5eb645d0="">
                    <button
                      data-v-5eb645d0=""
                      type="button"
                      className="sns_loginNaver"
                    >
                      네이버 로그인
                    </button>
                    <span data-v-5eb645d0="">네이버</span>
                  </li>
                  <li data-v-5eb645d0="">
                    <button
                      data-v-5eb645d0=""
                      type="button"
                      className="sns_loginApple"
                    >
                      애플 로그인
                    </button>
                    <span data-v-5eb645d0="">애플</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// export const getList = createAsyncThunk("GET_TODO", async () => {
//   const response = await axios.get("http://localhost:8080/apitest");
//   return response.data;
// });

// let todos = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {

//   },
//   extraReducers: (builder) => {
//     builder.addCase(getList.fulfilled, (state, action) => {
//       console.log(`action.payload:${action.payload}`);
//       state = action.payload;
//       return state;
//     });
//   },
// })
