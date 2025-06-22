import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCuisine,
  fetchCuisines,
  resetCuisineState,
} from "../redux/slices/AuthSlice";
import { ToastContainer } from "react-toastify";
// import CuisineCard from "../components/CuisineCard";
import CuisineFeature from "../components/CuisineFeature";
// import CuisineList from "../components/CuisineList";
import { toast } from "react-toastify";

export const handleError = (message) => {
  toast.error(message || "Something went wrong");
};

export const handlesuccess = (message) => {
  toast.success(message || "Success!");
};

const CuisineForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const { loading, success } = useSelector((state) => state.cuisine);

  useEffect(() => {
    dispatch(fetchCuisines());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setFormData({ name: "", origin: "", description: "", image: null });
      setPreview(null);
      dispatch(resetCuisineState());
    }
  }, [success, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("origin", formData.origin);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }
    dispatch(addCuisine(data));
  };

  const cuisines = useSelector((state) => state.cuisine.list);

  return (
    <div className="h-auto w-[100vw] flex flex-col bg-yellow-400 px-8 py-5">
      <div className="left pt-5">
        {/* <CuisineCard /> */}
        <CuisineFeature />
        {/* <CuisineList /> */}

        {cuisines && cuisines.length > 0 ? (
          cuisines.map((cuisine) => (
            <div key={cuisine._id}>
              <h2>{cuisine.name}</h2>
              <p>{cuisine.description}</p>
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-40 h-40 object-cover"
              />
            </div>
          ))
        ) : (
          <p>No cuisines found</p>
        )}
      </div>

      <div className="right w-full">
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 max-w-md mx-auto bg-lime-800 shadow rounded-2xl text-white border-2 p-10"
        >
          <label>Cuisine Name :</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Cuisine Name"
            required
            className="w-full p-2 border rounded"
          />

          <label>Origin :</label>
          <input
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Origin"
            className="w-full p-2 border rounded"
          />

          <label>Image Upload :</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setFormData((prev) => ({ ...prev, image: file }));
                setPreview(URL.createObjectURL(file));
              }
            }}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover mt-2 rounded"
            />
          )}

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Cuisine"}
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default CuisineForm;
