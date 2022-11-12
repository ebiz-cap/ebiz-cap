const { Schema } = require("mongoose");
const shortId = require("./type/short-id");
module.exports = new Schema(
  {
    _id: Schema.Types.ObjectId,
    shortId,
    salonId: { type: String, required: false },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    designerId: {
      type: Schema.Types.ObjectId,
      ref: "Designer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
