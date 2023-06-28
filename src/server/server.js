const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./routes/login");
const main = require("./routes/main");
const mypageInfo = require("./routes/mypageInfo");
const pizza = require("./routes/pizza");
const review = require("./routes/review");
const reviewInfo = require("./routes/reviewInfo");
const orderDetail = require("./routes/orderDetail");
const menuInsert = require("./routes/menuInsert");
const hostname = "127.0.0.1";
const port = 8080;
//app.get(["/", "/hello"]

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// 다른분들 코드
app.get("/testSelect", async (req, res) => {
  const conn = await getConn();
  const query =
    "SELECT ORDERNUM, ORDERDATETIME, ORDERMENU, TATALCOST, orderuserid FROM ORDERDETAIL";
  let [rows, fields] = await conn.query(query, []);
  conn.release();

  res.send(rows);
});
//

// app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/api/login", login);
app.use("/api/main", main);
app.use("/api/mypageInfo", mypageInfo);
app.use("/api/pizza", pizza);
app.use("/api/review", review);
app.use("/api/reviewInfo", reviewInfo);
app.use("/api/orderDetail", orderDetail);
app.use("/api/menuInsert", menuInsert);
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});
app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
