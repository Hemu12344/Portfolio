const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MailModel = require("./DataBase/Mail");
const Visitor = require("./DataBase/Visitor");

const app = express();



const env = require('dotenv').config();
const URI = process.env.MONGO_URI



mongoose.connect(URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ✅ Middlewares


app.use(express.json());

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://hemup.netlify.app",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
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


const blockVisitor = async (req, res, next) => {
  if (req.path.startsWith("/admin")) return next();

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const blocked = await Visitor.findOne({ ip, blocked: true });

  if (blocked) {
    return res.status(403).json({
      message: "You are blocked by admin",
    });
  }

  next();
};

app.use(blockVisitor);

// Enable CORS for all routes, including preflight


app.get("/admin/visitors", async (req, res) => {
  const visitors = await Visitor.find().sort({ createdAt: -1 });
  res.json(visitors);
});

app.patch("/admin/block/:id", async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      { blocked: true },
      { new: true }
    );

    if (!visitor) return res.status(404).json({ message: "Visitor not found" });

    res.json({ success: true, visitor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.patch("/admin/unblock/:id", async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      { blocked: false },
      { new: true }
    );

    if (!visitor) return res.status(404).json({ message: "Visitor not found" });

    res.json({ success: true, visitor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
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



app.post("/track-visit", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

    // Find existing visitor for same IP + page
    const existingVisitor = await Visitor.findOne({ ip, page: req.body.page });

    if (existingVisitor) {
      existingVisitor.updatedAt = new Date();
      existingVisitor.visitCount = (existingVisitor.visitCount || 1) + 1;
      await existingVisitor.save();
    } else {
      await Visitor.create({
        ip,
        userAgent: req.body.userAgent,
        page: req.body.page,
        visitCount: 1,
      });
    }

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});



// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
