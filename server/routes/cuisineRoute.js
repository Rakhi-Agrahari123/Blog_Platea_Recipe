// const express = require('express');
// const route = express.Router();
// const multer = require('multer');
// const { getCuisines, createCuisine } = require('../controllers/cuisineController');
// const { uploadToCloudinary } = require('../utils/cloudinary');



// // use multer memory storage (or configure for disk/Cloudinary)
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // POST /api/cuisines
// route.post('/', upload.single('image'), uploadToCloudinary, createCuisine);
// route.get('/', getCuisines);

// module.exports = route;

const express = require('express');
const router = express.Router();

const { getCuisines, createCuisine, updateCuisine, deleteCuisine, } = require('../controllers/cuisineController');
const { upload, uploadToCloudinary } = require('../middleware/upload');

// Make sure to chain the middleware functions properly
router.post('/cuisines', upload.single('image'), uploadToCloudinary, createCuisine);

router.get('/cuisines', getCuisines);

router.put('/cuisines/:id', upload.single("image"), uploadToCloudinary,updateCuisine);
router.delete('/cuisines/:id',deleteCuisine);

module.exports = router;

