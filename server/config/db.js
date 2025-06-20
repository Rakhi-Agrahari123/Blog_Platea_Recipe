// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URL,
//      { useNewUrlParser: true, useUnifiedTopology: true }
// )
//     .then(()=>{
//         console.log("Database Connected!");
//     }).catch((error)=> {
//         console.log("Database Disconnected Error!", error);
//     })


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL); 
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
