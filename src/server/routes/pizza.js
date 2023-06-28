const express = require("express");
const router = express.Router();

const db = require("../db");

db.connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

router.get("/1", function (req, res) {
  db.connection.query(
    "select * from pizza where pizzatype='장인피자';",
    (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send("조회 실패");
      }
    }
  );
});
router.get("/2", function (req, res) {
  db.connection.query(
    "select * from pizza where pizzatype='달인피자';",
    (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send("조회 실패");
      }
    }
  );
});
router.get("/3", function (req, res) {
  db.connection.query(
    "select * from pizza where pizzatype='명품피자';",
    (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send("조회 실패");
      }
    }
  );
});

router.get("/", function (req, res) {
  db.connection.query("select * from pizza;", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send("조회 실패");
    }
  });
});

module.exports = router;
