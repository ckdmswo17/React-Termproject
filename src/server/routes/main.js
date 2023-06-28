const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.get("/", function (req, res) {
  db.connection.query(
    "select count(*) as result from user where id='" +
      req.query.id +
      "' and division='관리자';",
    (err, rows) => {
      console.log(req.query);
      if (!err) {
        if (rows[0].result < 1) {
          res.send("회원");
        } else {
          res.send("관리자");
        }
      } else {
        res.send("구분 실패");
      }
    }
  );
});

module.exports = router;
