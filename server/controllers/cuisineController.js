// const cloudinary = require("../utils/cloudinary");
// const Cuisine = require("../models/cuisine");
// const { updateCuisine } = require("../../client/src/redux/slices/AuthSlice");

// // Get all cuisines
// const getCuisines = async (req, res) => {
//   try {
//     const cuisines = await Cuisine.find();
//     res.status(200).json(cuisines);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch cuisines" });
//   }
// };

// // Create new cuisine

// // const createCuisine = async (req, res) => {
// //   try {
// //     const { name, origin, description } = req.body;

// //     if (!req.file) {
// //       return res.status(400).json({ error: "Image is required" });
// //     }

// //     const result = await uploadToCloudinary(req.file.buffer);

// //     const newCuisine = new Cuisine({
// //       name,
// //       origin,
// //       description,
// //       image: result.secure_url,
// //     });

// //     const saved = await newCuisine.save();
// //     res.status(201).json(saved);

// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: err.message || "Failed to create cuisine" });
// //   }
// // };

// // const createCuisine = async (req, res) => {
// //   try {
// //     const { name, origin, description } = req.body;

// //     if (!req.file || !req.file.cloudinaryUrl) {
// //       return res.status(400).json({ error: "Image is required" });
// //     }

// //     const newCuisine = new Cuisine({
// //       name,
// //       origin,
// //       description,
// //       image: req.file.cloudinaryUrl,  // use URL from middleware
// //     });

// //     const saved = await newCuisine.save();
// //     res.status(201).json(saved);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: err.message || "Failed to create cuisine" });
// //   }
// // };

// const createCuisine = async (req, res) => {
//   try {
//     const { name, origin, description } = req.body;

//     // Check if name already exists
//     const existingCuisine = await Cuisine.findOne({
//       name: name.trim().toLowerCase(),
//     });
//     if (existingCuisine) {
//       return res
//         .status(400)
//         .json({ error: `Cuisine with name "${name}" already exists.` });
//     }

//     if (!req.file || !req.file.cloudinaryUrl) {
//       return res.status(400).json({ error: "Image is required" });
//     }

//     const newCuisine = new Cuisine({
//       name: name.trim().toLowerCase(),
//       origin,
//       description,
//       image: req.file.cloudinaryUrl,
//     });

//     const saved = await newCuisine.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message || "Failed to create cuisine" });
//   }
// };

// const updateCuisine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, origin, description } = req.body;
//     const updateData = { name, origin, description };

//     if (req.file?.cloudinaryUrl) {
//       updateData.image = req.file.cloudinaryUrl;
//     }

//     const updated = await Cuisine.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });
//     res.status(200).json(updated);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message || "Failed to update cuisine" });
//   }
// };

// const deleteCuisine = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Cuisine.findByIdAndDelete(id);
//     res.status(200).json({ message: "Deleted" });
//   } catch (error) {
//     console.error(err);
//     res.status(500).json({ error: err.message || "Failed to update cuisine" });
//   }
// };

// module.exports = {
//   getCuisines,
//   createCuisine,
//   updateCuisine,
//   deleteCuisine,
// };


const Cuisine = require("../models/cuisine");

// ✅ Create Cuisine
const createCuisine = async (req, res) => {
  try {
    const { name, origin, description } = req.body;

    // Check if name already exists
    const existingCuisine = await Cuisine.findOne({ name: name.trim().toLowerCase() });
    if (existingCuisine) {
      return res.status(400).json({ error: `Cuisine with name "${name}" already exists.` });
    }

    if (!req.file || !req.file.cloudinaryUrl) {
      return res.status(400).json({ error: "Image is required" });
    }

    const newCuisine = new Cuisine({
      name: name.trim().toLowerCase(),
      origin,
      description,
      image: req.file.cloudinaryUrl,
    });

    const saved = await newCuisine.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err); // This line will log the actual server error
    res.status(500).json({ error: err.message || "Failed to create cuisine" });
  }
};


// ✅ Update Cuisine
const updateCuisine = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, origin, description } = req.body;

    const updateData = {
      name: name.trim().toLowerCase(),
      origin,
      description,
    };

    if (req.file?.cloudinaryUrl) {
      updateData.image = req.file.cloudinaryUrl;
    }

    const updated = await Cuisine.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to update cuisine" });
  }
};

// ✅ Get all cuisines
const getCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.status(200).json(cuisines);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cuisines" });
  }
};

// ✅ Delete cuisine
const deleteCuisine = async (req, res) => {
  try {
    await Cuisine.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cuisine deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cuisine" });
  }
};

module.exports = {
  createCuisine,
  updateCuisine,
  getCuisines,
  deleteCuisine,
};
