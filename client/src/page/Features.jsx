// src/page/Features.jsx
import React from "react";
import { FaBookOpen, FaUsers, FaStar, FaUtensils, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen className="text-3xl text-green-600" />,
    title: "Explore Recipes",
    desc: "Browse a wide range of cuisines and cooking styles shared by real users and chefs.",
  },
  {
    icon: <FaUtensils className="text-3xl text-orange-500" />,
    title: "Add Your Dish",
    desc: "Contribute your own delicious recipes with photos and instructions.",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "Join the Community",
    desc: "Connect with food lovers, share tips, and build your culinary network.",
  },
  {
    icon: <FaCloudUploadAlt className="text-3xl text-purple-500" />,
    title: "Upload with Ease",
    desc: "Drag, drop, and upload your recipes and images — it's fast and simple.",
  },
  {
    icon: <FaStar className="text-3xl text-yellow-500" />,
    title: "Rate & Review",
    desc: "Leave feedback on recipes you've tried and help others discover the best ones.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-lime-700 mb-4">Platform Features 🌟</h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Discover the powerful features that make our recipe-sharing community vibrant and useful.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feat, index) => (
          <div
            key={index}
            className="bg-yellow-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{feat.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feat.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
