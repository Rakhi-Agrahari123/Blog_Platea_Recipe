// 📁 src/pages/admin/ManageBlogs.jsx
import React from "react";

const dummyBlogs = [
  {
    title: "The Secret Spices of Indian Cuisine",
    author: "Rakhi",
    date: "2025-06-21",
  },
  {
    title: "Why Italian Food Is So Loved",
    author: "Chef Antonio",
    date: "2025-06-20",
  },
];

const ManageBlogs = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage Blogs</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyBlogs.map((blog, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{blog.title}</td>
              <td className="p-2 border">{blog.author}</td>
              <td className="p-2 border">{blog.date}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlogs;
