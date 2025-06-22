// 📁 src/components/CuisineFeature.jsx

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Lottie from "lottie-react";
import cookingVideo from "../assets/png/dish-making.mp4";
import fallback from "../assets/png/fallback.jpg"

const initialCuisines = [

  {
    name: "Indian",
    country: "India",
    image: "https://sundayguardianlive.com/wp-content/uploads/2022/12/Indian-Cuisine-Fifth-Best-In-The-World.jpg",
     description: "Known for its spices and diverse flavors like curry, naan, and biryani."
  },
  {
    name: "Italian",
    country: "Italy",
    image: "https://bunny-wp-pullzone-nfqzsydbnl.b-cdn.net/wp-content/uploads/2024/08/italyan-mutfagi-ozellikleri.jpg",
     description: "Famous for pizza, pasta, and olive oil-based recipes.",
  },
  {
    name: "Chinese",
    country: "China",
    image: "https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=",
        description: "Includes noodles, dumplings, and savory sauces.",

  },
  {
    name: "Mexican",
    country: "Mexico",
    image: "https://domesticfits.com/wp-content/uploads/2024/05/mexican-cuisine-united-states-tex-mex-scaled.jpeg",
        description: "Spicy dishes with beans, corn, and cheese like tacos and burritos.",

  },
];

const CuisineFeature = () => {
  const [cuisines, setCuisines] = useState(initialCuisines);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [search, setSearch] = useState("");
  const [newCuisine, setNewCuisine] = useState({ name: "", country: "", image: "", description: "" });

  const handleAdd = () => {
    if (!newCuisine.name) return;
    setCuisines([...cuisines, newCuisine]);
    setNewCuisine({ name: "", country: "", image: "", description: "" });
  };

  const handleChange = (e) => {
    setNewCuisine({ ...newCuisine, [e.target.name]: e.target.value });
  };

  const filteredCuisines = cuisines.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br bg-yellow-400  p-10 gap-5     ">
      <h2 className="text-3xl font-bold text-center mb-4">Explore Cuisines</h2>
      {/* <Lottie animationData={foodAnimation} loop={true} className="w-24 h-24 mx-auto mb-4" /> */}
      <div className="justify-center flex items-center flex-col w-full">
        <video
        src={cookingVideo}
        autoPlay
        loop
        muted
        className="w-100  h-auto object-cover rounded-full   "
      />
      </div>
    
      {/* Search */}
      <input
        type="text"
        placeholder="Search cuisine..."
        className="mb-6 w-full md:w-1/3 mx-auto block p-2 rounded border border-gray-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Cuisine */}
      <div className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={newCuisine.name}
          onChange={handleChange}
          className="p-2 border rounded"
          placeholder="Cuisine Name"
        />
        <input
          name="country"
          value={newCuisine.country}
          onChange={handleChange}
          className="p-2 border rounded"
          placeholder="Country"
        />
        <input
          name="image"
          value={newCuisine.image}
          onChange={handleChange}
          className="p-2 border rounded"
          placeholder="Image URL"
        />
        <input
          name="description"
          value={newCuisine.description}
          onChange={handleChange}
          className="p-2 border rounded col-span-1 md:col-span-2"
          placeholder="Description"
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded col-span-1 md:col-span-2 hover:bg-green-600"
          onClick={handleAdd}
        >
          Add Cuisine
        </button>
      </div>

      {/* Cuisine Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCuisines.map((cuisine, index) => (
          <div
            key={index}
            onClick={() => setSelectedCuisine(cuisine)}
            className="cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl group"
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="w-full h-48 object-cover group-hover:brightness-110"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{cuisine.name} Cuisine</h3>
              <p className="text-sm text-gray-600 mt-1">{cuisine.country}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedCuisine}
        onClose={() => setSelectedCuisine(null)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl p-6 w-96 mx-4">
            <Dialog.Title className="text-xl font-bold mb-2">
              {selectedCuisine?.name} Cuisine
            </Dialog.Title>
            <img
              src={selectedCuisine?.image || {fallback}}
              alt={selectedCuisine?.name  || {fallback}}
              className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <p className="text-gray-700">{selectedCuisine?.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              onClick={() => setSelectedCuisine(null)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CuisineFeature;
