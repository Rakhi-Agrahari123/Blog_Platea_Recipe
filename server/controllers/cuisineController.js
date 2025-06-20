const cloudinary = require('../utils/cloudinary');
const Cuisine = require('../models/cuisine');

// Get all cuisines
const getCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.status(200).json(cuisines);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cuisines" });
  }
};

// Create new cuisine
// const createCuisine = async (req, res) => {
//   try {
//     const { name, description } = req.body;

//     if (!name) {
//       return res.status(400).json({ error: "Cuisine name is required" });
//     }

//     const newCuisine = new Cuisine({ name, description });
//     await newCuisine.save();

//     res.status(201).json(newCuisine);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create cuisine" });
//   }
// };

const createCuisine = async (req, res) => {
  try {
    const { name, origin, description } = req.body;
    let imageUrl = '';

    // Upload image to Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { folder: 'cuisines' },
        (error, result) => {
          if (error) {
            return res.status(500).json({ error: error.message });
          }
          imageUrl = result.secure_url;

          // Save to DB after successful image upload
          const newCuisine = new Cuisine({
            name,
            origin,
            description,
            image: imageUrl,
          });

          newCuisine.save()
            .then(saved => res.status(201).json(saved))
            .catch(err => res.status(500).json({ error: err.message }));
        }
      );

      result.end(req.file.buffer); // Pipe the file buffer to Cloudinary
    } else {
      return res.status(400).json({ error: 'Image is required' });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ EXPORT BOTH FUNCTIONS
module.exports = {
  getCuisines,
  createCuisine,
};
