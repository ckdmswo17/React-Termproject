const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.get("/", function (req, res) {
  db.connection.query(
    "select * from orderdetail where orderuserId='" + req.query.userId + "';",
    (err, rows) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        res.send("조회 실패");
      }
    }
  );
});

module.exports = router;
