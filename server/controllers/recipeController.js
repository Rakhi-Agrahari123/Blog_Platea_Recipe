const express = require("express");
// const route = require('express').Router();
const Recipe = require("../models/recipes");

const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, tags, author } = req.body;

    console.log(req.body);

    if (!title || !description || !ingredients || !steps || !author) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const newRecipe = new Recipe({
      title,
      description,
      image: req.file.cloudinaryUrl,
      // image : req.file?.cloudinaryUrl || "",
      ingredients,
      steps,
      tags,
      author: req.user.id,
    });

    console.log("Uploaded to Cloudinary:", newRecipe);
    // console.log("Uploaded to Cloudinary:", req.file?.cloudinaryUrl);

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

// getRecipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

// getRecipeById
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching recipe" });
  }
};


// update Recipe


 const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { title, description, ingredients, steps, tags } = req.body;

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    // Handle image update if a new file is uploaded
    let imageUrl = recipe.image;
    if (req.file?.cloudinaryUrl) {
      imageUrl = req.file.cloudinaryUrl;
    }

    const updated = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        title,
        description,
        image: imageUrl,
        ingredients: typeof ingredients === 'string' ? ingredients.split(',') : ingredients,
        steps: typeof steps === 'string' ? steps.split(',') : steps,
        tags: typeof tags === 'string' ? tags.split(',') : tags,
      },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update recipe" });
  }
};


// delete Recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await recipe.deleteOne();
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete recipe" });
  }
};



module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};

// const Recipe = require('../models/recipes');
// const fs = require('fs');
// const path = require('path');
// const cloudinary = require('../utils/cloudinary');

// // Create Recipe - already done

// // Get All Recipes - already done

// // ✅ Get Recipe by ID
// const getRecipeById = async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) {
//       return res.status(404).json({ error: "Recipe not found" });
//     }
//     res.status(200).json(recipe);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching recipe" });
//   }
// };

// // ✅ Update Recipe
// const updateRecipe = async (req, res) => {
//   try {
//     const recipeId = req.params.id;
//     const { title, description, ingredients, steps, tags } = req.body;

//     const recipe = await Recipe.findById(recipeId);
//     if (!recipe) {
//       return res.status(404).json({ error: "Recipe not found" });
//     }

//     // Handle image update if a new file is uploaded
//     let imageUrl = recipe.image;
//     if (req.file?.cloudinaryUrl) {
//       imageUrl = req.file.cloudinaryUrl;
//     }

//     const updated = await Recipe.findByIdAndUpdate(
//       recipeId,
//       {
//         title,
//         description,
//         image: imageUrl,
//         ingredients: typeof ingredients === 'string' ? ingredients.split(',') : ingredients,
//         steps: typeof steps === 'string' ? steps.split(',') : steps,
//         tags: typeof tags === 'string' ? tags.split(',') : tags,
//       },
//       { new: true }
//     );

//     res.status(200).json(updated);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update recipe" });
//   }
// };

// // ✅ Delete Recipe
// const deleteRecipe = async (req, res) => {
//   try {
//     const recipe = await Recipe.findById(req.params.id);
//     if (!recipe) {
//       return res.status(404).json({ error: "Recipe not found" });
//     }

//     await recipe.deleteOne();
//     res.status(200).json({ message: "Recipe deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to delete recipe" });
//   }
// };

// module.exports = {
//   createRecipe,
//   getRecipes,
//   getRecipeById,
//   updateRecipe,
//   deleteRecipe,
// };
