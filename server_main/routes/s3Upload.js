const AWS = require("aws-sdk");
AWS.config.loadFromPath(
  "C:\\Users\\he125\\OneDrive\\바탕 화면\\Dev\\Git\\ebiz-cap\\server\\config\\awsConfig.json"
);

const multerS3 = require("multer-s3-v2");
const multer = require("multer");
const path = require("path");
const { Router } = require("express");
const router = Router();

let s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ebizcap",
    key: function (req, file, cb) {
      var ext = file.mimetype.split("/")[1];
      if (!["png", "jpg", "jpeg", "gif", "bmp"].includes(ext)) {
        return cb(new Error("Only images are allowed"));
      }
      cb(null, Date.now() + "." + file.originalname.split(".").pop());
    },
  }),
  acl: "public-read-write",
  limits: { fileSize: 5 * 1024 * 1024 },
});

// router.get("/", async (req, res) => {
//   console.log("good ");
// });
// 이미지 업로드 요청
router.post("/", upload.single("file"), async (req, res) => {
  console.log(req.file.location);
  res.status(200).json({ location: req.file.location });
});

module.exports = router;
