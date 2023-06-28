import React, { useEffect } from "react";
import "../index.css";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Body = () => {
  // useEffect(() => {
  //   var elements = document.getElementsByClassName("css-1m9128y");
  //   elements[0].style = "margin-top:0px; z-index:1;";
  // });
  return (
    <div data-v-42d86f9b="" className="md-content-body">
      <div data-v-42d86f9b="" className="layout-content-scroll">
        <div data-v-42d86f9b="" className="login-before-outbox">
          <div data-v-42d86f9b="" className="remain-area-fill"></div>
          <div data-v-42d86f9b="" className="main-image-slide">
            <div data-v-42d86f9b="" className="image-slide-main">
              <div className="layout-slidebox-whole-web">
                <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
                  <Carousel
                    fullHeightHover={false}
                    navButtonsProps={{
                      // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                      style: {
                        display: "none",
                      },
                    }}
                    activeIndicatorIconButtonProps={{
                      style: {
                        color: "#41B6E5",
                        marginTop: "-100px",
                        zIndex: "1",
                      },
                    }}
                    indicatorIconButtonProps={{
                      style: {
                        color: "#FFFFFF",
                        marginTop: "-100px",
                        zIndex: "1",
                      },
                    }}
                    animation="slide"
                  >
                    <Paper className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active">
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmpF1A2.jpg"
                        alt="쏘핫피자 레시피 변경"
                        className="w_img layout-slidebox-whole-image-active"
                      />
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmpF25E.jpg"
                        alt="쏘핫피자 레시피 변경"
                        className="m_img"
                      />
                    </Paper>
                    <Paper className="swiper-slide swiper-slide-duplicate-next">
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmp88A9.jpg"
                        alt="이륙데이 이벤트 "
                        className="w_img layout-slidebox-whole-image-active"
                      />
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmp8C61.jpg"
                        alt="이륙데이 이벤트 "
                        className="m_img"
                      />
                    </Paper>
                    <Paper className="swiper-slide">
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmp605A.jpg"
                        alt="모바일 교환권 사용안내 "
                        className="w_img layout-slidebox-whole-image-active"
                      />
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmp627E.jpg"
                        alt="모바일 교환권 사용안내 "
                        className="m_img"
                      />
                    </Paper>
                    <Paper className="swiper-slide swiper-slide-prev">
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmpEDBA.jpg"
                        alt="베스트메뉴"
                        className="w_img layout-slidebox-whole-image-active"
                      />
                      <img
                        src="https://img.pizzaalvolo.co.kr/uploads/tmpEFFD.jpg"
                        alt="베스트메뉴"
                        className="m_img"
                      />
                    </Paper>
                  </Carousel>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div data-v-42d86f9b="" className="home-logout-order">
            <div
              data-v-68b04835=""
              data-v-42d86f9b=""
              className="btn-red-order"
            >
              <div data-v-68b04835="" className="inner-div">
                <img
                  data-v-68b04835=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACBCAMAAAALxYNAAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA6Ozm4hDeaiBQ8c/0+dPu/AQwgpdB2wyNCPaxrNe8JDwVzHsZwsiltWdUnDYpHUp2WWOgXkZxhpT6va8AAAhoSURBVHja7ZvZmqIwEIUTAqjsoiBqg7vivrTavv+TTSeBxoUlIM7nhf/NtAtyklRVqooM+PDhw4cPHz7kwxx5snaDPJQjhr7Tr4P/Tr0i6pcsFP57DP4vpq1emIAj8D+ZcxdWOl4bPEG7Z1bZDaIiXTC66MqPDDWKK0LyLWNYL6xq5yJOh2i6BUz0yXxxXyZIZ9PgibIuKMaWN0JjHY5ZxiHi7/ImyKblK79flRYMzrTadWXXdeXuuQcou2vvQgy3axhY1wAw8d3BXwYZWD4fWS0nNloAgAXVZaiBsuwb8vjiNWBkiB1gnzpZB1G53GDAMxAQceruwqrIxKQnmaPDv/INWKniqZiCFKadGF8ezvA/9gZgjhx2tRVIZ4knrAqYmeJ1SHHMlUS16Lw28SYarwf2fr18c/yqy7A2ImCnggfSA4msdfwFd7QOXzfRJSAKzjbDTd3YpUmfEdVK8w+EuuaNL89+L7ldl2b6tFPxdFbzGVkNpCC0wB174qPodtqRAFLBUeyrmDB2THwRjKKqQ2bsDYSRdTHON/YjgncQ9k12l3CNF9jovLcQZpGYK1OzOkG8sVlvIaxOYwZyVr2txxGR4C2EgWGYWKgqzTg3byJsdJcJ98GbCOtdJ8mqvQbvIozcR+E59aJAu1IH7yOsi22/tbFqfeyabyRsof4uIc19XyesY4HctBDelN9QGNDwNvSOwhySyL1OmCkVEkYvvIxeImx9bjrbVUFhtOoZvkBY38X+qEKlqLAJScJyCZuBbKJ6taiwufEbYq1cwpoMYUi/PCtsAHGhWLKwNk9LMmQQYU7l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"
                  alt="배달아이콘"
                  className="btn-delivery-icon"
                />
                <Link
                  to="/pizza"
                  data-v-68b04835=""
                  className="btn-delivery-text"
                >
                  배달주문
                </Link>
              </div>
              <div data-v-68b04835="" className="btn-red-line"></div>
              <div data-v-68b04835="" className="inner-div">
                <img
                  data-v-68b04835=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACBCAMAAAALxYNAAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMA/APyEPkHCe4V2mGnomj25QvhI6+IeT86KZxOHxrFl0kt6Y+SVNCBWN5EMdTBvH1dNcy0t+vJcXRuovCjCwAACQtJREFUeNrMmemamlAMhgOyuIEL4u644d4ZHffJ/V9YGw5rinQq+LTvr44K5OTk+5JDIQNKpVpWUbpcnUED/h8Uu4ABNWMH/wnbOsZpWfA/YErIqd3g31NBojjflqBhLfozL2l6+uYrLy/FT5XiGCvgoR1+IHFVIJnevbWhawo/jEoJXoZeRkT1ABHkmyuFt6ScNb4o7AC1+jKhtOn+FZ6UsrubwJHNGXKM12RNv9C9gVNy8/LF4z1iQEFFj/pLkrYmCSasubShjYq7xqGGLsfVdkQ/2dobEWMX8sdAxD4kMKUoThBhhYRkTCFkUHYVPYTcoS2bQBJf+IsOBIyFVqesFPquTmTImyIiJtu8vETEM/jYSKxk4Mzp88NLAnuwERP8xS6av9oiaQHviLiRXxkYh1I2BpeORHFtkw2XvttCzlDx9lJ6VVFzNUr2JU0gmZZYQL68paxWL/jKOOEvTHjAAhHLkDNV8cR0LzlgzIU5JUqnBvnS5j7GU7EBUC6UkpRpYibqIVcmadugUFmPYM4cLVElebt/Q01bLfXGtaXyrHLeReD58kG2CYloWwqs/kbiVCCF6ysCq9CztYSoJv0iBtz/2NdyHzEahYSOog+MAkZo6pBGwS3FvJmT9LRoqItqAeMUKpDCiOxChrwZUm23AyEeWrUwHiP4d1UBSHOVJRD5p0ztieP4SUWfYn+iwSzczcfV3c+jJU3aPWAoM1qxXjLPEvrMxlt3d5v0h+pGK63klCodZJ+k1TbX4ACpzMKo6k5HjlgnGlPvQGdBEjdEvOiQDXfeLFe0+JKPUQHOu5HMlIXp62NRc4ekTkkJs3M4exAXJ3i6PhmHGtzYnxCj7nesweWRBloUcQmycvBds3atOnOnupQwYLMDjhT0hdGHSCjviXv69AbZGRkSJqC6+dC5ldCnUxDcAw3w8/JVgzzoGSr3T6c3dbfqaLH8xmaPXRmJt/BHmuMaiwU5oVRaxdAZjEWDwm0mWHw1PiA2+mIdaxBYR7cocu3fsjUw96u2ORkFe/yGxNliE6AZcxaxIEOhMG0VxRElM8N2JaWlaWNRbXagvCn9Heg0qoFNV2nXhel9Qmb0mSiQh6xFPoorLzSTHsxT3ZZcDXge8zGC7Gz/OCiMTp6XOLpvxw5wOqHvFc28ZkKileaGC9KAb+V7PssrXXMcOp/klCAXbL8XPixXeeKPYlVRdW+mazBr874at44zjGM08jtDCuY6JPA5D56sblkfY0gbTwOQB1ca3sWgsJwCw2qX0ae8H7LzSox69aD4GmjLkB0yd0t3REpusdox30LDdbgBOBjQPNnroZdfsZD3YXa/907yk3pc6NqiFfSoWnWiAUdvie8qVuy7hiGUuYCM7GjF7gTVCu8odyKntI/Kg2q+qe4Fg2Tf62fUwIIe7RlHQdzx026iz/Ke4pVdkWVbZq3kXdRkNve/R0761hVjNO0epFL6EBXFgpf3OWhgHD2mySspnHr6nfT7iguENDo8lxs/4qc50xuS+B2J60L/Zke7iORwTWXWQJmNCiY7Zf+RofCUk8I1UMikAZmUVWIHXd4809HEJRte65YXMTzFkLLDt9abqSbfVrabHNWM+5DfyuApOvwNQ5O2VjgUOjp8D0u0tGqwbaP7Ej0uzw89LQjR6V4KTMV9f+zge+iG+H3P/WN9ljDgHZ6C5D6HkCntYVg46v27VmSq3omk2y8EjlOntOfz4nwdNIJt/e/a8W4jKjNsZYdGi+7+/NAzYUfosWdFVWFFa/geyhlDyu2h50VdeApSjsUy+AUeh0Lq6zk+5taCoX/cjRbsMzToUo29Kt9yK2p24A9M7WALpdNCY5PLE0z5pbTq4e/t2NbSWvntiD7Hr1Jc8md4igGVN/PbGghiI+mxB8loi1PgDXV7+ts5Zw5PcaNuxg6ZS7bbYyRqierqjouRMVdOGBAq8BQ0uO/Zf3lXgeG9njuXeDvbl0MbrSgg4F3k+aHnwAJdAackjOAyiCbyZ/Pmup4oEIPhSCuI9YgHdNUCWg+7grRq1c79X9huDezYPBUrGZT3n394wphkvsx8PAUn81Pr3DghDEgFbTSrSJ1RatgKnGZUE3+qdSkoe+eUN94fpoKKHuvc/U9/LXV8/6Q3bBdkSYi0a0MqRkT0NM8vvt7BxhF+rMmkkpjAHbboudwRbUucMp4sIRGZF3zR8ypnOQpunjFF7A2XtzuPIXrI75fLZ3jPNdIblN/WV4nr6qJMGa6ENW/9PE98hr/CBcnssrukCcnQZp0K6kDQiiovZR25q3BFT4t0D77dZZpe9DSI3WINBL7Xiy969gmemFQTa1GDFJBASFawcWXzZoueQGYFnwNj+TdE9JBWzTdgdhkeyR7Q41gOZKxxGaJnRPWTIjQca1KLnjrZ0jfAhN8TcYV83lCT3Ip2kI5XskJtHGpUm/b4osdXafiqSBsBV/RoBRwAGFChwthlB1/TtQSK0DlCpRGLHpmuz6CIPuMtDTISHUi6sm+CAsZLNYj1qAuKmDPcY+SvIynHhHHICR/Ef1NS6fQtM1pPeJzEzEy80UYBDzlT0T+esFoeILZKN/kS8zclHjqKBmQq54O73RZSY+LZL5bihO3dU6gH9CpaOHSUs+q2cP7DugJLgHVZoOSQkzKISkBn1NH3h5xNQJgl8Ll0Y2DCF+m0BJAA+PBFOi0BRVu42go/FIQ0rvJxLTKwckvAVfOsnRDqJmfvtxB1BUWpTWfiyFgDNZjOxuaHtfDjOsrN5+6fYT2VBbKyIT/otTisbQ/yg1GzBNJ+g6x421z7cGPfEEgly9wqX2n9anYjs0yh0ocsqV/lSn4M36Owqi3IlpBcmyZhzksYVtEZQuZMSz/0HJmdh9iGnWlY1Kw2S06Z0SQK62EyghuhdQrUOkAZvtSjsDom3BC7kWifGTpFIW3+N8Vsyy97KK34o5z37u3CopawQqjRSbkShTXuNuEueP43btZlRSCNvQH3wvgliJ162RaIVdOBDb+lObg4va1A8As+PvyW5nsA9up/WBrcn8h/XQ8DgfiLPIQVtTTJbJCXsP7x2BYRuwHkC2xpgQu5w1srnzD+ApvVWPM3lv/DAAAAAElFTkSuQmCC"
                  alt="포장아이콘"
                  className="btn-box-icon"
                />
                <div data-v-68b04835="" className="btn-box-text">
                  포장주문
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
