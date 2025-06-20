

const express = require('express');
const route = express.Router();
const multer = require('multer');
const { getCuisines, createCuisine } = require('../controllers/cuisineController');

// use multer memory storage (or configure for disk/Cloudinary)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/cuisines
route.post('/', upload.single('image'), createCuisine);
route.get('/', getCuisines);

module.exports = route;