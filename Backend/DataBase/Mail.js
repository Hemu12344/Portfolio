const mongoose = require('mongoose');
const env = require('dotenv').config();
const URI=process.env.MONGO_URI
mongoose.connect(URI||"mongodb+srv:HarshAgr:Harsh1234@blogsite.zrwnljt.mongodb.net/MailDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


  const schema = mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    subject:String,
    message:String
  });
  
  module.exports = mongoose.model('mail', schema);