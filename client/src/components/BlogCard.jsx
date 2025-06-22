// src/components/BlogCard.jsx
import React from "react";

const BlogCard = ({ title, image, snippet, author, date }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{snippet}</p>
        <div className="text-xs text-gray-400">
          By {author} | {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
