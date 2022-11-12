const { Router } = require("express");
const router = Router();
const asyncHandler = require("./../utils/async-handler");
const { Review } = require("../models");
const mongoose = require("mongoose");

router.get(
  "/",

  asyncHandler(async (req, res, next) => {
    const reservId = "636f48b4196f37cfe5f82cb4";

    let test = await Review.findOne({
      reservationId: mongoose.Types.ObjectId(reservId),
    })
      .populate("reservationId")
      .then((review) => {
        console.log(review);
        console.log("review get test 처리중: DB");
        return review;
      });

    res.json({
      result: "Test 응답 성공",
      value: test,
    });
  })
);

module.exports = router;
