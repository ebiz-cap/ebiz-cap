const express = require("express");
const mysql = require("mysql");

const mysqlConf = require("./config/mysqlConfig.json");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: mysqlConf.user,
  password: mysqlConf.pw,
  database: mysqlConf.dbName,
});

dbConnection.connect(function (err) {
  if (err) console.log("ERROR! [MySQL]: could not connect");
  else console.log("[MySQL]: connected");
});

dbConnection.end();
