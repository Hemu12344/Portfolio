const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MailModel = require("./DataBase/Mail");

const app = express();


const env = require('dotenv').config();
const URI = process.env.MONGO_URI
mongoose.connect(URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ✅ Middlewares
app.use(express.json());

// Enable CORS for all routes, including preflight
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://hemup.netlify.app",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});



app.post("/Check", async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMail = new MailModel({ name, phone, email, subject, message });
    const savedMail = await newMail.save();

    console.log("Saved Mail:", savedMail); // ✅ console mai date & createdAt dikhna chahiye

    res.status(200).json({ success: true, message: "Thank's For Contacting Me" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});






app.get("/contacts", async (req, res) => {
  try {
    const contacts = await MailModel.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
