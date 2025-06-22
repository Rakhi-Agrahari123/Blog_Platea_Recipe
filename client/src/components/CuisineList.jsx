import React, { useEffect, useState } from 'react';
import { fetchCuisines } from '../api/cuisineApi';

const CuisineList = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetchCuisines()
      .then((res) => setCuisines(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-yellow-400 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">All Cuisines</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{cuisine.name}</h3>
              <p className="text-sm text-gray-500 italic">{cuisine.origin}</p>
              <p className="mt-2 text-gray-700">{cuisine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisineList;
