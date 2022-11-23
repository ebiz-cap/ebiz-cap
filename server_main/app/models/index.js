const mongoose = require("mongoose");
const CustomerSchema = require("./schemas/user/customer");
const DesignerSchema = require("./schemas/user/designer");
const ReservationSchema = require("./schemas/Reservation");
const ReviewSchema = require("./schemas/Review");

exports.Customer = mongoose.model("Customer", CustomerSchema);
exports.Designer = mongoose.model("Designer", DesignerSchema);
//
exports.Reservation = mongoose.model("Reservation", ReservationSchema);
exports.Review = mongoose.model("Review", ReviewSchema);
