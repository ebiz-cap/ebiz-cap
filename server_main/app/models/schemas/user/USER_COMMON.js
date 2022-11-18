module.exports = {
  email: String,
  password: String,
  name: String,
  nickName: String,
  age: { type: Number, required: false }, //
  gender: { type: String, required: false }, //
  phoneNum: { type: Number, required: false }, //
  profileImg: { type: String, required: false },
  comment: { type: String, required: false },
};
