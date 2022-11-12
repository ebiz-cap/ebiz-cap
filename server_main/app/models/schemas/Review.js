const { Schema } = require("mongoose");
const shortId = require("./type/short-id");
module.exports = new Schema(
  {
    _id: Schema.Types.ObjectId,
    shortId,
    contents: { type: String, required: false },
    // salonId: { type: String, required: false },
    avg_score: { type: Number, required: true },

    reservationId: {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
