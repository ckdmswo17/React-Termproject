const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.post("/", function (req, res) {
  db.connection.query(
    "insert into pizza values ('" +
      req.body.name +
      "'," +
      req.body.cost +
      ",'" +
      req.body.pizzaType +
      "','" +
      req.body.registerDateTime +
      "','" +
      req.body.image +
      "');",
    (err, rows) => {
      // if (error) throw error;
      console.log(req.body);
      if (!err) {
        res.send("등록 성공");
      } else {
        res.send("등록 실패");
      }
    }
  );
});

module.exports = router;
