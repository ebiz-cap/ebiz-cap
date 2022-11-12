module.exports = {
  email: String,
  password: String,
  name: String,
  nickName: String,
  age: Number,
  gender: String,
  phoneNum: Number,
  profileImg: { type: String, required: false },
  comment: { type: String, required: false },
};
