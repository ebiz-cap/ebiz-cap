const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = require("./app/config/PORT");
const URL = require("./app/config/URL");
const dbConfig = require("./app/config/dbConfig");

// 라우터Import
const userRouter = require("./app/routes/user");
// const authRouter = require("./app/routes/kakaoAuth");
const s3UploadRouter = require("./app/routes/s3Upload");
const testRouter = require("./app/routes/testApi");

//------------------------------
// 0.
const app = express();

var corsOptions = {
  origin: URL.localhost + PORT.node,
};

// // 1-1. DB 연결관리
mongoose.connect(`${URL.localhostDB}${PORT.db}/${dbConfig.APP}`);

mongoose.connection.on("connected", () => {
  console.log("[DB] CONNECT - success");
});

mongoose.connection.on("error", (err) => {
  console.log(`[DB] CONNECT - failed: ${err}`);
});

//  2. 미들웨어 연결
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  3. 라우팅
app.use("/test", testRouter);
app.use("/user", userRouter);
app.use("/upload", s3UploadRouter);

// app.use("/auth", authRouter); //카카오 로그인 구현 시 활성화

//  4. 서버구동
app.listen(PORT.node, (err) => {
  console.log("[Server] Success to open");
});
