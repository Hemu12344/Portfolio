const express = require("express");
const cors = require("cors");

const mongoose =require("mongoose");

const MailModel= require("./DataBase/Mail");
const app = express();

// ✅ Middlewares
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://hemuP.netlify.app",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy does not allow access from origin ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

// ✅ Test route
app.post("/Check",async (req, res) => {
  const { name, phone, email, subject, message } = req.body;


  // Basic validation (backend safety)
  if (!name || !phone || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("Received data:", req.body);

  const newMail=MailModel({
    name:name, phone:phone, email:email, subject:subject, message:message
  })

  
  await newMail.save();
  res.status(200).json({
    success: true,
    message: "Form data received successfully",
  });

});


app.get("/api/admin/contacts", async (req, res) => {
  try {
    const contacts = await MailModel.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

// ✅ Server start
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
