const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.get("/", function (req, res) {
  db.connection.query(
    "select * from pizza where name='" + req.query.pizzaName + "';",
    (err, rows) => {
      if (!err) {
        res.send(rows[0]);
      } else {
        res.send("조회 실패");
      }
    }
  );
});

module.exports = router;
