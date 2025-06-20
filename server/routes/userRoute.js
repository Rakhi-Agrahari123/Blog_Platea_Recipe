const route = require('express').Router();
const { userRegister , userLogin , getMe } = require('../controllers/userController');
const { RegisterValidation, LoginValidation } = require('../middleware/AuthVaildation');
const auth = require('../middleware/Auth');
const {upload, uploadToCloudinary} =require('../middleware/upload');
// const  uploadToCloudinary = require('../utils/cloudinary');

// Auth Register User
route.post('/register', upload.single("profilePicture"), uploadToCloudinary, RegisterValidation, userRegister);

// Auth Login User
route.post('/login', LoginValidation, userLogin);

route.get('/me/:id', auth,getMe);

module.exports = route;