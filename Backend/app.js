const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MailModel = require("./DataBase/Mail");

const app = express();

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://hemup.netlify.app",
];

// ✅ Middlewares
app.use(express.json());

// ✅ CORS setup for all routes
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman / curl

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy does not allow access from origin ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

// Handle preflight OPTIONS requests
app.options("*", cors());

// ✅ Routes
app.post("/Check", async (req, res) => {
  const { name, phone, email, subject, message } = req.body;
  if (!name || !phone || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newMail = new MailModel({ name, phone, email, subject, message });
  await newMail.save();
  res.status(200).json({ success: true, message: "Form data received successfully" });
});

app.get("/api/admin/contacts", async (req, res) => {
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
