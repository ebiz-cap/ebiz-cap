const { Schema } = require("mongoose");
const shortId = require("../type/short-id");
const USER_COMMON = require("./USER_COMMON");

module.exports = new Schema(
  {
    shortId,
    email: String,
    password: String,
    name: String,
    nickName: String,
    age: { type: Number, required: false }, //
    gender: { type: String, required: false }, //
    phoneNum: { type: Number, required: false }, //
    profileImg: { type: String, required: false },
    comment: { type: String, required: false },
    // USER_COMMON
  },
  {
    timestamps: true,
  }
);
