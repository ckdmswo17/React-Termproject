const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "", // 직접 채우기
  port: 3306,
  database: "alvolo",
});

module.exports = {
  connection,
};
