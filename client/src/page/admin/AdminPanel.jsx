// // // 📁 src/pages/admin/AdminPanel.jsx
// // import React from "react";
// // import { Routes, Route, NavLink } from "react-router-dom";
// // import AddRecipe from "./AddRecipe";
// // import ManageCuisines from "./ManageCuisines";
// // import ManageBlogs from "./ManageBlogs";
// // import Dashboard from "./Dashboard";

// // const AdminPanel = () => {
// //   return (
// //     <div className="min-h-screen flex">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
// //         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
// //         <nav className="space-y-2">
// //           <NavLink to="/admin/dashboard" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Dashboard</NavLink>
// //           <NavLink to="admin/recipes" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Recipes</NavLink>
// //           <NavLink to="admin/cuisines" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Cuisines</NavLink>
// //           <NavLink to="admin/blogs" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>Manage Blogs</NavLink>
// //           <NavLink to="admin/cuisines" className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'}>CuisineForm</NavLink>
// //         </nav>
// //       </aside>

// //       {/* Main Content */}
      
// //       <div className="min-h-screen p-10 bg-gray-100">
// //       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
// // <Dashboard />

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <Link
// //           to="/admin/add-cuisine"
// //           className="p-6 bg-white shadow hover:shadow-lg rounded border border-gray-200"
// //         >
// //           ➕ Add Cuisine
// //         </Link>
// //         <Link
// //           to="/admin/cuisines"
// //           className="p-6 bg-white shadow hover:shadow-lg rounded border border-gray-200"
// //         >
// //           📋 Manage Cuisines
// //         </Link>
// //         <Link
// //           to="/recipeform"
// //           className="p-6 bg-white shadow hover:shadow-lg rounded border border-gray-200"
// //         >
// //           🍲 Add Recipe
// //         </Link>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default AdminPanel;




// 📁 src/pages/admin/AdminPanel.jsx
import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTachometerAlt,
  FaBookOpen,
  FaUtensils,
  FaRegEdit,
  FaPlusCircle,
  FaLayerGroup,
} from "react-icons/fa";

const AdminPanel = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className="w-64 bg-gray-900 text-white p-6 space-y-6"
        data-aos="fade-right"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide">
          Admin Panel
        </h2>

        <nav className="space-y-3 text-[16px] font-medium">
          <NavItem to="/admin/dashboard" icon={<FaTachometerAlt />}>
            Dashboard
          </NavItem>
          {/* <NavItem to="/admin/recipes" icon={<FaBookOpen />}>
            Manage Recipes
          </NavItem> */}
          <NavItem to="/admin/manage-cuisines" icon={<FaLayerGroup />}>
            Manage Cuisines
          </NavItem>
          <NavItem to="/admin/blogs" icon={<FaRegEdit />}>
            Manage Blogs
          </NavItem>
          <NavItem to="/admin/add-cuisine" icon={<FaPlusCircle />}>
            Add Cuisine
          </NavItem>
          <NavItem to="/admin/add-recipe" icon={<FaUtensils />}>
            Add Recipe
          </NavItem>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100" data-aos="fade-up">
        <Outlet />
      </main>
    </div>
  );
};

// Custom NavLink item with icon and hover effect
const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-md transition duration-200 ${
        isActive
          ? "bg-yellow-400 text-black font-semibold"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`
    }
  >
    {icon}
    {children}
  </NavLink>
);

export default AdminPanel;
