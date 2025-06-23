// 📁 src/pages/admin/Dashboard.jsx
import React from "react";
import AdminPanel from "./AdminPanel";

const Dashboard = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Admin Dashboard</h2>
      <p className="text-gray-600">
        Welcome to the admin dashboard. Use the sidebar to manage recipes,
        cuisines, and blogs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div className="bg-yellow-200 p-4 rounded shadow">
          <h3 className="font-semibold">👩‍🍳 Total Recipes</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-green-200 p-4 rounded shadow">
          <h3 className="font-semibold">🍛 Total Cuisines</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-blue-200 p-4 rounded shadow">
          <h3 className="font-semibold">✍️ Total Blogs</h3>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
