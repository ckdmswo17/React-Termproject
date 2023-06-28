const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.get("/", function (req, res) {
  res.send("로그인페이지");
});

router.post("/", function (req, res) {
  db.connection.query(
    "select count(*) as result from user where id='" +
      req.body.id +
      "' and password='" +
      req.body.password +
      "';",
    (err, rows) => {
      console.log(req.body);
      if (!err) {
        if (rows[0].result < 1) {
          res.send("로그인실패");
        } else {
          res.send("로그인성공 " + req.body.id);
        }
      } else {
        res.send("로그인실패");
      }
    }
  );
});

module.exports = router;
