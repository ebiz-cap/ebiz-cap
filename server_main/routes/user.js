const { Router } = require("express");
const router = Router();

router.get("/", async (req, res, next) => {
  console.log("yes!");
});
module.exports = router;
