// models/cuisine.js

const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String // optional - for a cuisine thumbnail
  },
  origin: {
    type: String
  },
  description: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Cuisine", cuisineSchema);
