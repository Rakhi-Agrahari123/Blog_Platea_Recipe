const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cloudinary = require("../utils/cloudinary"); //config file


// Disk storage

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueName = `${baseName}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

const uploadToCloudinary = async (req, res, next) => {

console.log("🧾 File received:", req.file)

  if (!req.file) return next();
  const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "recipes", //optional
    });

    // Delete local file after upload
    fs.unlinkSync(filePath);

    // Attach Cloudinary URL to request object
    req.file.cloudinaryUrl = result.secure_url;

     console.log("✅ Cloudinary URL:", req.file.cloudinaryUrl);
    next();
    
  } catch (err) {
    console.log("Cloudinary Upload Error :", err);
    return res.status(500).json({ error: "Cloudinary Upload faield" });
  }
};

module.exports = { upload, uploadToCloudinary}


// // middleware/uploadMiddleware.js
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const cloudinary = require("../utils/cloudinary");

// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads");
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const baseName = path.basename(file.originalname, ext);
//     const uniqueName = `${baseName}-${Date.now()}${ext}`;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowed = /jpeg|jpg|png|webp/;
//     const extOk = allowed.test(path.extname(file.originalname).toLowerCase());
//     const mimeOk = allowed.test(file.mimetype);
//     if (extOk && mimeOk) cb(null, true);
//     else cb("❌ Only image files allowed!");
//   }
// });

// const uploadToCloudinary = async (req, res, next) => {
//   if (!req.file) return next();

//   const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

//   try {
//     const result = await cloudinary.uploader.upload(filePath, {
//       folder: "recipes",
//     });

//     fs.unlinkSync(filePath); // remove local file
//     req.file.cloudinaryUrl = result.secure_url;
//     console.log("✅ Cloudinary URL:", req.file.cloudinaryUrl);

//     next();
//   } catch (err) {
//     console.error("❌ Cloudinary Upload Error:", err);
//     res.status(500).json({ error: "Cloudinary upload failed" });
//   }
// };

// module.exports = { upload, uploadToCloudinary };

