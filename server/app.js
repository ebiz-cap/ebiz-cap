const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlConf = require("./config/mysqlConfig.json");
const cors = require("cors");
const PORT = require("./config/PORT.json");
const URI = require("./config/URI.json");
// 라우터Import
const userRouter = require("./routes/user");

// 0.
const app = express();

// 1. DB 연결관리
const dbcon = mysql.createConnection({
  host: "localhost",
  user: mysqlConf.user,
  password: mysqlConf.pw,
  database: mysqlConf.dbName,
  dialect: "mysql",
  pool: {},
});

dbcon.connect(function (err) {
  if (err) {
    console.log("ERROR! [MySQL]: failed to connect");
    throw err;
  } else console.log("[MySQL]: connected");
});

//  2. 미들웨어 연결
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//  3. 라우팅

app.use("/user", userRouter);

//  4. 서버구동
app.listen(PORT.node, (err) => {
  console.log("[Server] Success to open");
});
