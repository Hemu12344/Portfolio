const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    ip: String,
    userAgent: String,
    page: String,
    blocked: { type: Boolean, default: false },
    visitCount: { type: Number, default: 1 }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Visitor", visitorSchema);
