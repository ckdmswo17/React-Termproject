const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.get("/", function (req, res) {
  db.connection.query(
    "select * from user where id='" + req.query.id + "';",
    (err, rows) => {
      console.log(req.query);
      if (!err) {
        res.send(rows[0]);
      } else {
        res.send("조회 실패");
      }
    }
  );
});

router.post("/", function (req, res) {
  db.connection.query(
    "update user set address='" +
      req.body.address +
      "' where id='" +
      req.body.id +
      "';",
    (err, rows) => {
      // if (error) throw error;
      console.log(req.body);
      if (!err) {
        res.send("수정 성공");
      } else {
        res.send("수정 실패");
      }
    }
  );
});

module.exports = router;
