import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCuisines,
  deleteCuisine,
} from "../../redux/slices/AuthSlice"; // adjust path as needed
import { toast } from "react-toastify";

const ManageCuisines = () => {
  const dispatch = useDispatch();
  const { cuisines, loading } = useSelector((state) => state.cuisine);

  useEffect(() => {
    dispatch(fetchCuisines());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this cuisine?")) {
      dispatch(deleteCuisine(id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Cuisines</h1>

      {loading && <p>Loading cuisines...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cuisines && cuisines.length > 0 ? (
          cuisines.map((cuisine) => (
            <div
              key={cuisine._id}
              className="bg-white rounded-xl shadow p-4 relative group"
            >
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-full h-40 object-cover rounded"
              />
              <div className="mt-3">
                <h2 className="text-lg font-semibold">{cuisine.name}</h2>
                <p className="text-sm text-gray-500">{cuisine.origin || "Unknown Origin"}</p>
                <p className="mt-2 text-gray-700 text-sm">{cuisine.description}</p>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => alert("Edit feature coming soon")}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cuisine._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No cuisines available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageCuisines;
