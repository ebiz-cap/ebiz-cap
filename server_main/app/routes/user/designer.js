const { Router } = require("express");
const router = Router();
const asyncHandler = require("../../utils/async-handler");
const crypto = require("crypto");
const { Designer } = require("../../models");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config/jwtConfig.json");

// const nodeMailer = require("nodemailer");

const logType = () => {
  console.log("[Designer]");
};

router.post(
  "/signUp",
  asyncHandler(async (req, res, next) => {
    logType();
    console.log("[SignUp 응답처리 진행]");
    const { email, password, name, nickName } = req.body;
    console.log(req.body);

    let hashPassword = passwordHash(password);

    const checkEmail = await Designer.findOne({ email }).then((customer) =>
      console.log(customer)
    );

    if (checkEmail) {
      // throw new Error("이미 가입된 이메일입니다.");
      res.status(500);
      res.json({
        error: "이미 가입된 이메일입니다.",
      });
      return;
    }

    await Designer.create({
      email,
      password: hashPassword,
      name,
      nickName,
    });

    res.json({
      result: "회원가입이 완료되었습니다. 로그인을 해주세요.",
      value: {
        email,
        name,
        nickName,
      },
    });
  })
);

router.post(
  "/signIn",
  asyncHandler(async (req, res, next) => {
    logType();

    const { email, password } = req.body;

    let hashPassword = passwordHash(password);

    const checkEmail = await Designer.findOne({ email });
    console.log("쳌이메일:", checkEmail);
    if (!checkEmail) {
      res.status(401);
      res.json({
        fail: "존재하지 않는 이메일입니다.",
      });
      return;
    }

    if (hashPassword !== checkEmail.password) {
      console.log(hashPassword, checkEmail.password);
      res.status(401);
      res.json({
        fail: "비밀번호가 틀렸습니다.",
      });
      return;
    }
    jwt.sign(
      {
        email: email,
        name: checkEmail.name,
      },
      jwtConfig.secret,
      {
        expiresIn: "2h", //1y,1d,2h,1m,5s
      },
      (err, token) => {
        if (err) {
          res
            .status(401)
            .json({ status: false, message: "로그인을 해주세요." });
        } else {
          console.log("else");
          res.json({
            result: "로그인 되었습니다.",
            status: true,
            value: {
            accessToken: token,
            email: email,
            name: checkEmail.name,
            nickName: checkEmail.nickName,
          }
        });
        }
      }
    );
  })
);

//랜덤 난수 값을 리턴하는 함수
const randomPw = () => {
  return Math.floor(Math.random() * 10 ** 8)
    .toString()
    .padStart("0", 8);
};

const passwordHash = (password) => {
  return crypto.createHash("sha1").update(password).digest("hex");
};

module.exports = router;
