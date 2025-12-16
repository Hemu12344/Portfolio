// DataBase/Mail.js
const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now } // optional, createdAt will also exist
  },
  { timestamps: true } // ✅ adds createdAt & updatedAt automatically
);

module.exports = mongoose.model("Mail2", mailSchema);
