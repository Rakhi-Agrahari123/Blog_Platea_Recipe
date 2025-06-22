import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipeThunk } from "../redux/slices/AuthSlice";
import { fetchCuisines } from "../redux/slices/AuthSlice"; // 👈 fetch cuisines

const RecipeForm = () => {
  const dispatch = useDispatch();
  const { cuisines, loading } = useSelector((state) => state.cuisine);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingredients: "",
    image: null,
    cuisine: "", // 👈 will hold cuisine _id
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    dispatch(fetchCuisines()); // 🔄 load cuisines
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("ingredients", formData.ingredients);
    data.append("cuisine", formData.cuisine); // 🔗 send cuisine ID
    if (formData.image) data.append("image", formData.image);

    dispatch(createRecipeThunk(data));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-xl max-w-xl mx-auto mt-10 space-y-4"
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Recipe Name"
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Recipe Description"
        className="w-full p-2 border rounded"
      />

      <input
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients (comma separated)"
        className="w-full p-2 border rounded"
      />

      {/* 🔽 Cuisine Dropdown */}
      <select
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">-- Select Cuisine --</option>
        {cuisines?.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>

      {/* 🖼️ Image Upload */}
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
      />
      {preview && <img src={preview} className="w-32 h-32 rounded mt-2" />}

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Recipe"}
      </button>
    </form>
  );
};

export default RecipeForm;
