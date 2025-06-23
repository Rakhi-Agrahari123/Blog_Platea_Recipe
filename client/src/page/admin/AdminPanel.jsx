// // 📁 src/pages/admin/AdminPanel.jsx
// import React from "react";
// import { Routes, Route, NavLink } from "react-router-dom";
// import AddRecipe from "./AddRecipe";
// import ManageCuisines from "./ManageCuisines";
// import ManageBlogs from "./ManageBlogs";
// import Dashboard from "./Dashboard";

// const AdminPanel = () => {
//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
//         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
//         <nav className="space-y-2">
//           <NavLink to="/admin/dashboard" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Dashboard</NavLink>
//           <NavLink to="admin/recipes" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Recipes</NavLink>
//           <NavLink to="admin/cuisines" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Cuisines</NavLink>
//           <NavLink to="admin/blogs" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Blogs</NavLink>
//           <NavLink to="admin/cuisines" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>CuisineForm</NavLink>
//         </nav>
//       </aside>

//       {/* Main Content */}
      
//       <div className="min-h-screen p-10 bg-gray-100">
//       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
// <Dashboard />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Link
//           to="/admin/add-cuisine"
//           className="p-6 bg-white shadow hover:shadow-lg rounded border border-gray-200"
//         >
//           ➕ Add Cuisine
//         </Link>
//         <Link
//           to="/admin/cuisines"
//           className="p-6 bg-white shadow hover:shadow-lg rounded border border-gray-200"
//         >
//           📋 Manage Cuisines
//         </Link>
//         <Link
//           to="/recipeform"
//           className="p-6 bg-white shadow hover:shadow-lg rounded border border-gray-200"
//         >
//           🍲 Add Recipe
//         </Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AdminPanel;



// 📁 src/pages/admin/AdminPanel.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Dashboard</NavLink>
          <NavLink to="/admin/recipes" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Recipes</NavLink>
          <NavLink to="/admin/manage-cuisines" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Cuisines</NavLink>
          <NavLink to="/admin/blogs" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Blogs</NavLink>
          <NavLink to="/admin/add-cuisine" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Add Cuisine</NavLink>
          <NavLink to="/admin/add-recipe" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Add Recipe</NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
