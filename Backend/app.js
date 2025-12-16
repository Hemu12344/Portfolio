const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MailModel = require("./DataBase/Mail");

const app = express();



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
