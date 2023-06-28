import React, { useCallback } from "react";
import "../index.css";

import cn from "classnames";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLogin, isManager }) => {
  let slided = "";
  const [slide, setSlide] = useState(slided);
  // const [value, setValue] = useState(isLogin);
  const navigate = useNavigate();

  const onSlide = useCallback(() => {
    if (slide === "") setSlide("yes");
    else setSlide("");
    console.log("click!");
  }, [slide]);
  const onLogout = useCallback(() => {
    // setValue(false);
    sessionStorage.clear();
    console.log(isLogin);
    navigate("/");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });

  return (
    <div className="web-main-tab-header-layout">
      <div className="web-main-tab-header">
        <div className="web-main-tab-top">
          <div className="tab-top-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAhAQMAAACsrRqAAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlP/AOW3MEoAAAAUSURBVHicY2DAAf6DwQea0YPMXgCZ+6XxJRwbQwAAAABJRU5ErkJggg=="
              className="web-icon-menu"
              onClick={() => {
                onSlide();
              }}
            />
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAATCAYAAAAAs5Y/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dJREFUeNrsWuGxmzAMJrkO4A1KJyjdgGxANyATPDLBcyYgG5ANyAbQCZINyAZkAwrvTM/PJ9mSce5eeuhOP5LYkmwJSZ/IZhiGaKWVvjpt1kBd6RVoO/Jg4W7kHNmbAutTY03hkK9zD+hoGPsl49ydkv0MikeuRxbE9dAdJcha6D4w/0jiHeXK3l7zeW2RGyn7TNmFx13NujstBmDdA43KKfManALrUmONHHhk6mgYeyWwH2Ldpoy4h8OzzZWHPdg9zpwDa7uRhbEuHrl3yE3UXhtd1TqK7yXjjmIl20adrnvLeOrj/6CCTFnuTftcBpafalUlt2RGXzqP3AIZ3Mxm70BG1/cmKju7fDqvSwJXnCtBZqzr/gYsOI78HUi/ObO8TnRCvv85cmZ81yK2/AG+fwMc8SDYUxr7YnUmGcgJFaBvFzhYD8rR5n2c1B0kgO8eat/8sHJaE6HO9SuQ/VzdU7D+iCzlt3Kk9pRRsiKj5PRAiRHEsgGVv4qoF6KeoZtbwgdlb6jSP3NpuQOoXSq0vQXwe63K8VyWa8c5fEs/5LtGK/ExEHcfsrFATYH+JUSgCkBuj/RBEGfIQTm94+AZ6K6eq7f0WiJwoApEX4Ho1/degSCl3FcdIFBrou/MYO0iBljJFwaqQBpoapAuycQZ4XzJgkCtFgA96VmZCqLfTFkmxYw7Wxqopv8yy4P/iahgaupxLgH6N7OB3o98IzbgjdHbTDb9ZvSmOt0VRwGAVeoY5czgJjQYPRHu7oL0/pTe/hGFJyquuENzVEqQ7hcaXgHg6aiQKOVwNRCkO+hAyDwxBnQfgYDLPM4GBfiNALRCASub3w6EAMwsD6DrTFxqHTp04O6cozaKpSovWGmglv58YU/YeAAUWy+n90Wdo5/zKb8NIhu7H9/Sj/V9rlJcARghJZT9MkDplwRfQi1eHRGG7tGCQM2QITJVR+lAsD69Y+qwTy54CHT5GQHY+LwUkQQgZwNwMSJ3Tk7YID52+N5GjePOrko39tClzw5UjhN6QMcSBybIGMaVsanjqpJQKRqCnUsDFZKRDX6jtCVAmhKoWIV1vhXdRl+HRGB5JbGnOwJ2uIBVgrzbPjo+z8P50MBKav16SwC+0vIyJvLEEpy3a3vG2gMVTL0iJUCjfkLAF+RYCoqHHHoHZJ+BB+H9icDqwFi/s0wFWvW7fIKtZ4fum5ro/AvozUf9/4wIqehOAFnlZKDKhIGkb0jAULPPRbNdqL1CO9fZMrkw198dWSQzRm02+dA9tZqTBPOfR5dACNwc/8WGL1xTnoJRBW+WLC+Mu4RGh+v/UVd6DVoDdaWXoL8CDACB/ewGUL09IwAAAABJRU5ErkJggg=="
                className="web-icon-logo"
              />
            </Link>
          </div>
          <div className="tab-top-middle">
            <Link to="/pizza" className="top-middle-text">
              피자
            </Link>
            <span className="top-middle-text">스페셜반반피자</span>
            <span className="top-middle-text">세트</span>
            <span className="top-middle-text">사이드</span>
            <span className="top-middle-text">하프앤하프</span>
            <span className="top-middle-text">멤버십˙제휴할인</span>
            <span className="top-middle-text">이벤트</span>
          </div>
          <div className="tab-top-right">
            <div className="tab-text-img-layout">
              <div className="top-right-text-layout">
                {isManager ? (
                  <Link
                    to="/managerMyPage/menuInsert"
                    className="top-right-text"
                  >
                    마이페이지
                  </Link>
                ) : !isLogin ? (
                  <span className="top-right-text">마이페이지</span>
                ) : (
                  <Link to="/myPage/infoUpdate" className="top-right-text">
                    마이페이지
                  </Link>
                )}
                <span className="top-right-text">회원가입</span>
                {!isLogin ? (
                  <Link to="/login" className="top-right-text">
                    로그인
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      onLogout();
                    }}
                    to="/"
                    className="top-right-text"
                  >
                    로그아웃
                  </Link>
                )}
              </div>
              {!isLogin ? (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAYAAAHFvesGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABWhJREFUeNpi/P//PwMaEADiDyAGE5qEAkwCDEA6/0MAMv0eRMN0MgJxAJQGAUGwIBY74YAJi9h5kG34dIIFAQIImyRIgBHZyPeo0hAng7AAEhvsiPtQp98nZAdYkgmbi9AtZ0AKCQaAAMIbCjCno7PRTUsA4v1I/AVA3ABlH0C2Cdk0dNORxQSR454RyRYDLBpg/imAxhFKgKJjBSQallbWgx2GRXEAGv8+EJ8H4gQo34BQ6KEDULwLAAQQPucxICXfBGQxFjymgoJaHhpqDrhSFjL+jxYg75Hl0f1ETJzBU8R9qBOQk4wAmgYHZOchO6UBiOejOwcqDleHHEIwAwyg8YLTn7g8j44NoLYRFRBEFxzIORHGfo8Udwy43P0f6q8AbPLoznsPTQHoORaWPf5jKwcE0eILpvgBNN4UiSkjsJYZAAFETCrHh89D/RkALRX/o+cIbHFLDDaAGvYej8XzybVoP9TwAjz5GpZicZqDq9yCuVoAR1H1H0c2wJnqYYz5UAUNBOLCgcg4W4/LImwu/A8tWInNo//xqUNXPB9LaXcfW/mKxzcN2FIfvvrlPxGGMxDpQwZSKmhSAUZVS6rm/2gV/39oFQ0C85HKH0ekFgzJPkLmG8DreNxqcDZTGLAUfv+RGnYTkOQuQA1hhBaQIPn1aJZOgPqSgdKyDht2gCaEfuREwcJAfXAAyVcBsCoaIAAtZnikIAyEUc6xAEugBO2A60ArMFYgVqBWQAneVWAJlKAdYAeUgDCTddbPXZKsmhn+CHETkux7yydmUCmHO0PHtTZaF1L7f+DssyEmQoxKkIaR8BZz7lJnVHt27xh6+QCSVQNbCSLwpwzgVz+R4wudB4jq/P06tGlCRqyRU4PjUmOWFCAEwWYEgk4jbwqiKzjxWSrKSZM6xRGKmAPJBqoG0l4DDiCXXAA2BfXJpUBOmQ0SthrZXbz/WVpfFMMldK6lMiRQsxXScZBe1UnYgefA+szYcxdpUNo3iAFqC0OiLb0jnF5yXkCd3jGgIgYTC5/POiNCjv21TcGEVbdyj5IfCyZK0CyeuUnDnP/thg9NE4FHVCXg1VDC00a6vgu+o1+/xqtVAbtz018V0zFnDcR9bg6mM7Q9m83gEOtY8HVQ+R2UhNsqCbWLLS1b+KMswKiZNRCll7nBUJ+S7TeUuGUBHq978gUlHgqDFftIs7YKZPq3wT7OXYBqrfY2QhiGXjsBIzACI9ANMgIblBG8AeoEuQ1OnSAjtBvQDbgNqHRKpMiyE5skXGuJPwhQnh1/5D1auE5zTWjHYrPab54NoI96acgaYGYiK51NzwZkonQOU+MofE8y5DUH1KEo7IkocOVljSLYPwPQiKKwCqMQHADIAYvCAVUAUYuwyih8IQeYGs7VRqFkEYAqmhVsJ9BWO0kUtIuIjyYOVbTpQFXcNXN57UXMyAFOm9QJvh2kgEoWEY6zuK+UALBMk12lgKwysXFfcURFGzOETm78BOa+0Ww5g+beITMV2ozec4SV5/JlLmG0OlTN5gQ7wpk72EdswqH7UW2KKpslizzS41zCWUuNPjQIt2PLa5CU8FLvLSeDykmmRQevndCKWpvxfMZP0M9rSBGtAPX+uuDfdZCt/rk38plCqm8XFJMtsUV6oqk71OeA+barfXyQAAIC3ETMaUMmZxaGfO9rymxSg0gy/YgE4DViJr+Zdz8jfTfYPdKq3s/ecpColktiCI5nROrUypbwGkMk7kuztKsz4OJ8GrQlvAaLc0MLSRUBLbgtcZSfKKnu2bycBhzFU2xYWPnLgDC4GwEOsF7WmqJtYZ2vlAbdf8gvr5f/Z3dPnr94Iv3q7z3+ZfgFs17c6KlsbuIAAAAASUVORK5CYII="
                  className="icon-pizza"
                />
              ) : (
                <Link to="/cart">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAYAAAHFvesGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABWhJREFUeNpi/P//PwMaEADiDyAGE5qEAkwCDEA6/0MAMv0eRMN0MgJxAJQGAUGwIBY74YAJi9h5kG34dIIFAQIImyRIgBHZyPeo0hAng7AAEhvsiPtQp98nZAdYkgmbi9AtZ0AKCQaAAMIbCjCno7PRTUsA4v1I/AVA3ABlH0C2Cdk0dNORxQSR454RyRYDLBpg/imAxhFKgKJjBSQallbWgx2GRXEAGv8+EJ8H4gQo34BQ6KEDULwLAAQQPucxICXfBGQxFjymgoJaHhpqDrhSFjL+jxYg75Hl0f1ETJzBU8R9qBOQk4wAmgYHZOchO6UBiOejOwcqDleHHEIwAwyg8YLTn7g8j44NoLYRFRBEFxzIORHGfo8Udwy43P0f6q8AbPLoznsPTQHoORaWPf5jKwcE0eILpvgBNN4UiSkjsJYZAAFETCrHh89D/RkALRX/o+cIbHFLDDaAGvYej8XzybVoP9TwAjz5GpZicZqDq9yCuVoAR1H1H0c2wJnqYYz5UAUNBOLCgcg4W4/LImwu/A8tWInNo//xqUNXPB9LaXcfW/mKxzcN2FIfvvrlPxGGMxDpQwZSKmhSAUZVS6rm/2gV/39oFQ0C85HKH0ekFgzJPkLmG8DreNxqcDZTGLAUfv+RGnYTkOQuQA1hhBaQIPn1aJZOgPqSgdKyDht2gCaEfuREwcJAfXAAyVcBsCoaIAAtZnikIAyEUc6xAEugBO2A60ArMFYgVqBWQAneVWAJlKAdYAeUgDCTddbPXZKsmhn+CHETkux7yydmUCmHO0PHtTZaF1L7f+DssyEmQoxKkIaR8BZz7lJnVHt27xh6+QCSVQNbCSLwpwzgVz+R4wudB4jq/P06tGlCRqyRU4PjUmOWFCAEwWYEgk4jbwqiKzjxWSrKSZM6xRGKmAPJBqoG0l4DDiCXXAA2BfXJpUBOmQ0SthrZXbz/WVpfFMMldK6lMiRQsxXScZBe1UnYgefA+szYcxdpUNo3iAFqC0OiLb0jnF5yXkCd3jGgIgYTC5/POiNCjv21TcGEVbdyj5IfCyZK0CyeuUnDnP/thg9NE4FHVCXg1VDC00a6vgu+o1+/xqtVAbtz018V0zFnDcR9bg6mM7Q9m83gEOtY8HVQ+R2UhNsqCbWLLS1b+KMswKiZNRCll7nBUJ+S7TeUuGUBHq978gUlHgqDFftIs7YKZPq3wT7OXYBqrfY2QhiGXjsBIzACI9ANMgIblBG8AeoEuQ1OnSAjtBvQDbgNqHRKpMiyE5skXGuJPwhQnh1/5D1auE5zTWjHYrPab54NoI96acgaYGYiK51NzwZkonQOU+MofE8y5DUH1KEo7IkocOVljSLYPwPQiKKwCqMQHADIAYvCAVUAUYuwyih8IQeYGs7VRqFkEYAqmhVsJ9BWO0kUtIuIjyYOVbTpQFXcNXN57UXMyAFOm9QJvh2kgEoWEY6zuK+UALBMk12lgKwysXFfcURFGzOETm78BOa+0Ww5g+beITMV2ozec4SV5/JlLmG0OlTN5gQ7wpk72EdswqH7UW2KKpslizzS41zCWUuNPjQIt2PLa5CU8FLvLSeDykmmRQevndCKWpvxfMZP0M9rSBGtAPX+uuDfdZCt/rk38plCqm8XFJMtsUV6oqk71OeA+barfXyQAAIC3ETMaUMmZxaGfO9rymxSg0gy/YgE4DViJr+Zdz8jfTfYPdKq3s/ecpColktiCI5nROrUypbwGkMk7kuztKsz4OJ8GrQlvAaLc0MLSRUBLbgtcZSfKKnu2bycBhzFU2xYWPnLgDC4GwEOsF7WmqJtYZ2vlAbdf8gvr5f/Z3dPnr94Iv3q7z3+ZfgFs17c6KlsbuIAAAAASUVORK5CYII="
                    className="icon-pizza"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="layout-tab-slide">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAeCAYAAACBkybCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMVJREFUeNrcmG1IW1cYx3Nu3qMwV02s0XVgHba+ULQTB2MMNKMZy6Bl6MpQEKfdyhjsUz90g8pYyyzsyz4YWF8IxTHYPrR1m2urCG1ntw+mvlCWLtVY35JqjYMkGvN2787Jzglnp/deU2IkeOHh3pPce+79Ped//ue5FwiCoNgtG6fYRduuggEle/fuChCvz6dQZZIIib0gsc/6psoQhMMB/nK53vR5vfPNzc2PYZvHEDzOmiSQuaQkJ+ZMEuTGzZv7l7zelYKCglsHq6oeLi4tuSenpt6D/6lhKNE58IEBilw2APRwSrgVAgBeSHXIcfuMRuMPj6anv4FNLR59BJV1IC4DkCTMWxbLw83NzT/YE/Ly8k4+npu7caanx7RTQJzIAwJ6LlAhBoTOUV66ePGUWOcajeb1rq6u0V8HBxtY2WXTmoFIKCg34hl34nC2NTAMaCCGh4c/rqquPiV1I7/f/3ltTc238DAGI0H1uS1uh6yZHRnOMzv7GfwjCif10xmPpwdnNCUTxoIJKG+xWK74fL5fpG5WWFh4Fvb3I5ZdapREFAC2UMSWMktJZmNjI5T8AU5qvV5/em5+/tbXvb1GBojAJHCmk3G4vv5MKBR6JHUz2N/b3d3dD8bHxzuxOZBEiYWSCi4dOCSzFAiWjWZ6ZuZ7g8FgJSfFYrEHLpfrpPXIkfuwGSfrB74OXaNDUoOR397eXnH23Ll+lUqVL3fjSCRyb3l52f5aY+MA6u/qtWv7SktLX1b8Z5ECdkZhcmJioqOjY42RuyAmMzJnSAZQtnStra2m3vPnf9JqtQfJyTzPB56urJyuq6u7goEEauFFQHoEg6CuDwx0NDQ0fLodcwHedz4ajf48NDT01UcnTqxhNQgsFA1DT2iUZYPVajX22e39Op3uAN05GiUoxcE1v/8Oaid4HsC2an19XR0MBLQlZvMhk8nUWFxc/EamIOFw+M9gMHgPjjIPZb/mdruvHzt6dEbMQFgYJdawFjuUvqmpqei7CxccUHKVuVJQLj958gFUx1VK7jzrZkSPCXxSFA3CyMjIP52dnR/CzP+dKzAv7tnzCVbRM6bAMTZL3CkCYxPt79y+7YcTsDsQCDhzASYejwdFnPWZCoCMThwDIZgw2v9+9+7qgcrKrtHR0S/lrHcntvtOp0NkzRN9OUvVXIwhkEiuDW1tbS+9Y7O9Wl5eXg+LyjpoEjvyhud0Or9412brh4chnOwocVbaAMSAaIfTUqHBkVrc3j9+3Gyz2Q6XlZW9UlRUVAFX+0PbCbGwsPCbva/P7nA4pmETyWwdw5DSSBKGBSIup6ZA1MzqrWRX7JaWFnNtba25uqamArphPrTq/Wq1Ol8QBADffcqlFtXV1dUpaMPC4uLi5KzH4750+fKYc2zMjyW/gSOM5zVxNFkYtvhUUtKjAVgYFVOCcEz9xToQW9D+r96j5m8ER5iRV4K2ZrnXZtIxYKw7xjyw3DEnASVVndMgZJkgSwWJGAUiPO83AHIByQLAx4DJuFyALUDEgBLU6MQpgART0jz3Bw36XQZQUAqJB5UDEJOYnNRoMF6sLsvk64zYJyReZJ7JtRUSc4YFkopt/dSUDiBI4zjd/tJ6G1VlcY0TJI6ztv0rwABne++kIircDgAAAABJRU5ErkJggg=="
            className="icon-airplane"
          />
          <div className="tab-slide-line"></div>
        </div>
        <div className={cn("web-main-tab-collapse", slide)}>
          <div className="web-collapse-tab-top">
            <div className="collapse-tab-item">
              <Link to="/pizza" className="tab-item">
                피자
              </Link>
              <Link to="/pizza" className="tab-item">
                전체피자
              </Link>
              <div className="tab-item">스페셜반반피자</div>
              <div className="tab-item">세트메뉴</div>
              <div className="tab-item">하프앤하프</div>
            </div>
            <div className="collapse-tab-item">
              <div className="tab-item">사이드메뉴</div>
            </div>
            <div className="collapse-tab-item">
              <div className="tab-item">멤버십˙제휴할인</div>
              <div className="tab-item">멤버십 혜택</div>
              <div className="tab-item">통신사 제휴 할인</div>
            </div>
            <div className="collapse-tab-item">
              <div className="tab-item">이벤트</div>
            </div>
            <div className="collapse-tab-item">
              <div className="tab-item">매장찾기</div>
              <div className="tab-item">지역명 찾기</div>
              <div className="tab-item">매장명 찾기</div>
              <div className="tab-item">현위치 찾기</div>
            </div>
            <div className="collapse-tab-item">
              {isManager ? (
                <Link to="/managerMyPage/menuInsert" className="tab-item">
                  마이페이지
                </Link>
              ) : !isLogin ? (
                <div className="tab-item">마이페이지</div>
              ) : (
                <Link to="/myPage/infoUpdate" className="tab-item">
                  마이페이지
                </Link>
              )}
              <Link to="/myPage/orderHistory" className="tab-item">
                주문내역
              </Link>
              <div className="tab-item">쿠폰함</div>
              <div className="tab-item">MY className</div>
              <div className="tab-item">비행기스탬프</div>
              <Link to="/myPage/infoUpdate" className="tab-item">
                정보수정
              </Link>
              <div className="tab-item">회원탈퇴</div>
            </div>
            <div className="collapse-tab-item">
              <div className="tab-item">주문하기</div>
              <div className="tab-item">배달주문하기</div>
              <div className="tab-item">포장주문하기</div>
              <div className="tab-item">간편주문</div>
              <div className="tab-item">E쿠폰</div>
              <div className="tab-item">선물하기</div>
            </div>
          </div>
          <div className="web-collapse-tab-middle">
            <span className="tab-middle-item">
              회사소개
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNqUk9sNgCAMRaEuUAZwBAdwVY0OpZ/+6xi1REjUUEqbXFISDo/S64nIcQRWz9qcFgwg66QnJpaPm0iKw0DfWGpQTuZWKCeQFqnQe9IE/Y9UodLDStDKChIgQbH06Co171jHDxqlxb5wwhWvZXkDWqoEln8Ay0+DpZfA0q1Q61ZMJct+gJoffHIcJsftmuFuAQYAR5iuBG4D+jIAAAAASUVORK5CYII="
                className="img-arrow-more"
              />
            </span>
            <span className="tab-middle-item">
              가맹문의
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNqUk9sNgCAMRaEuUAZwBAdwVY0OpZ/+6xi1REjUUEqbXFISDo/S64nIcQRWz9qcFgwg66QnJpaPm0iKw0DfWGpQTuZWKCeQFqnQe9IE/Y9UodLDStDKChIgQbH06Co171jHDxqlxb5wwhWvZXkDWqoEln8Ay0+DpZfA0q1Q61ZMJct+gJoffHIcJsftmuFuAQYAR5iuBG4D+jIAAAAASUVORK5CYII="
                className="img-arrow-more"
              />
            </span>
            <span className="tab-middle-item">
              고객센터
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNqUk9sNgCAMRaEuUAZwBAdwVY0OpZ/+6xi1REjUUEqbXFISDo/S64nIcQRWz9qcFgwg66QnJpaPm0iKw0DfWGpQTuZWKCeQFqnQe9IE/Y9UodLDStDKChIgQbH06Co171jHDxqlxb5wwhWvZXkDWqoEln8Ay0+DpZfA0q1Q61ZMJct+gJoffHIcJsftmuFuAQYAR5iuBG4D+jIAAAAASUVORK5CYII="
                className="img-arrow-more"
              />
            </span>
            <span className="tab-middle-item">
              단체주문
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNqUk9sNgCAMRaEuUAZwBAdwVY0OpZ/+6xi1REjUUEqbXFISDo/S64nIcQRWz9qcFgwg66QnJpaPm0iKw0DfWGpQTuZWKCeQFqnQe9IE/Y9UodLDStDKChIgQbH06Co171jHDxqlxb5wwhWvZXkDWqoEln8Ay0+DpZfA0q1Q61ZMJct+gJoffHIcJsftmuFuAQYAR5iuBG4D+jIAAAAASUVORK5CYII="
                className="img-arrow-more"
              />
            </span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAptJREFUeNq8Vz1MU1EYva8/BEFFo0BMHGxtdCBBQ1UWE+1mEP+ig65aJS4SFjVxYUQddDMadHXRSRSdcNC4NaQJi5aoLIbURCRakAL1nJevDbTv575H+05y2pve+75z3rvv+/pdY8fVUaWJzeBJMAUeBGNgm8z9Br+Ck+AE+Br8oxM0orEmAd4CL4GtNms6hL3gAPgXfA7eBXNOwUMOc83gCDgFph3ErdAq10yJiWavBvaCn+TOm5R/8NqbEiuha6AH/Cj7XC8w1geJ7WiALt+Cnar+6JTYCTsDm8AXYLtqHBj7pWjVGBgGD6jGo1u01hngSzekgsNQeSvKBm6D0QANREXTNLBFiowj+nv2qCfp46opYl86OMc1XKuBi9RmJezTKTJnkjF17nBcRSNhNTA6oZaWV2vEH6dT6hTEDcNQY5lvOsWqL9ySPD2IQdJt9bvsjNq/a7spsA/f45Pf1cpqqUacwtefva/MueAXDdzBYLfbSgZ8A9FqE+GQsU78msXTccCygX/DPAY7tWuruc8pc59fyWP2KU78pIF/Xuv9WhOET3FiKeQ3j0o2Y6+ggXmvd792z0mO+ZtTitpgnldM+xXnYyc3YGKaWXBEJw2txLnndtmhmYbjNNCCwQW3lY8uH1NnD8UtX7hqE7H2rZUMccF9GpjB4IZOJpRwUywyVm972US8o80U//xjzi1cgf2jIV0xP66oYPGUfWP5jWHzWQxQvCjNauXvmK3zgwANPAS/WHVE2QDEs1YdEbEAngfzDRTPi0bBrivmVpwAZxsgPiuxc27nggx4tM7bkZWYGd2TUU7Oefc2mB1FidFrd0Z0KtyLcjTrkjpR8CC8IHneJTEW7RYaHo/n/VXH820yN1d1PB/TPZ7/F2AAyI3yXHt1i14AAAAASUVORK5CYII="
              alt="collapse 닫기"
              className="x-button"
              onClick={() => {
                onSlide();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
