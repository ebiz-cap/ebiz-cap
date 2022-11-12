const { Schema } = require("mongoose");
const shortId = require("../type/short-id");

const USER_COMMON = require("./USER_COMMON");

module.exports = new Schema(
  {
    shortId,
    USER_COMMON,
    salonId: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
