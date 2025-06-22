import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const cuisines = [
  {
    name: "Indian",
    country: "India",
    image: "https://sundayguardianlive.com/wp-content/uploads/2022/12/Indian-Cuisine-Fifth-Best-In-The-World.jpg",
    description: "Known for its spices and diverse flavors like curry, naan, and biryani.",
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

const CuisineCard = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Cuisines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            onClick={() => setSelectedCuisine(cuisine)}
            className="cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl group"
          >
            <img
              src={cuisine.image}
              alt={`${cuisine.name} cuisine`}
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
              src={selectedCuisine?.image}
              alt={selectedCuisine?.name}
              className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <p className="text-gray-700">{selectedCuisine?.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              onClick={() => setSelectedCuisine(null)}
            >
              Close
            </button>
                         <button
  className="bg-red-500 px-3 py-1 text-white rounded"
  onClick={() => dispatch(deleteCuisine(cuisine._id))}
>
  Delete
</button>

<button
  className="bg-yellow-500 px-3 py-1 text-white rounded"
  onClick={() => handleEdit(cuisine)}
>
  Edit
</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CuisineCard;
