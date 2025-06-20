import React, { useState } from "react";
import LOGO from "../assets/svgImg/Logo.svg";
// import LOGO from "../assets/svgImg/spoon.svg";
import { GiKnifeFork } from "react-icons/gi";
import { FaAngleDown, FaBars } from "react-icons/fa6"; // from FA6
import { FaTimes } from "react-icons/fa"; // from FontAwesome (v5 set)

import { MdBookmarkBorder } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import ButtonCommon from "../utility/ButtonCommon";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("Profile Picture URL:", user?.profilePicture);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBtn = () => {
    navigate("/addrecipe");
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-red-500 text-white font-medium text-[18px] shadow-md">
      <div className="w-full mx-auto flex justify-between items-center h-[90px] px-20">
        {/* Logo */}
        <div className="flex w-fit justify-center  items-center flex-col">
          <h1 className="text-white flex flex-row shadow-md shadow-gray-700 justify-center items-center text-4xl border-3 border-white rounded-br-2xl rounded-tr-2xl p-2 gap-2 ">
            <GiKnifeFork className="text-lg font-extrabold h-10 w-15" />
            Platea
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2 items-center">
          <Link to="/home">
            <li className="px-4 py-2 hover:bg-white hover:text-red-500 rounded-xl cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/recipe_ingredients">
            <li className="px-4 py-2 hover:bg-white hover:text-red-500 rounded-xl cursor-pointer">
              Recipes
            </li>
          </Link>
          <Link to="/cuisine">
            <li className="px-4 py-2 hover:bg-white hover:text-red-500 rounded-xl cursor-pointer">
              Cuisines
            </li>
          </Link>
          <li className="flex items-center px-4 py-2 hover:bg-white hover:text-red-500 rounded-xl cursor-pointer">
            Categories <FaAngleDown className="ml-1" />
          </li>
          <Link to="/blog">
            <li className="px-4 py-2 hover:bg-white hover:text-red-500 rounded-xl cursor-pointer">
              Blog
            </li>
          </Link>
          <Link to="/features">
            <li className="px-4 py-2 hover:bg-white hover:text-red-500 rounded-xl cursor-pointer">
              Features
            </li>
          </Link>
        </ul>

        {/* Icons + Button */}
        <div className="hidden md:flex items-center space-x-4">
          <MdBookmarkBorder className="h-6 w-6 hover:text-green-500 transition scale-105 hover:scale-115 cursor-pointer" />

          {/* user */}
          {user ? (
            <img
              src={user?.profilePicture || "/default-profile.png"}
              alt="profile"
              className="overflow-hidden object-cover w-10 h-10 rounded-full"
            />
          ) : (
            <LuUser />
          )}

          {user ? (
            <div>
              Welcome,
              <span className="font-bold uppercase">{user.username}</span>{" "}
            </div>
          ) : (
            <span>
              <Link to={"/login"}>Please Login</Link>
            </span>
          )}

          {/* <LuUser className="h-6 w-6 hover:text-green-500 transition scale-105 hover:scale-115cursor-pointer" /> */}

          <HiMiniMagnifyingGlass className="h-6 w-6 text-white  transition scale-105 hover:scale-115 cursor-pointer" />
          <ButtonCommon
            name="Add Recipe"
            style="p-[10px_18px] bg-white text-red-500 hover:bg-green-500 rounded-lg"
            onClick={handleBtn}
          />
        

          {user && (
            <Link to={"/login"}>
              <ButtonCommon
                name="Logout Here"
                style="p-[10px_18px] hover:bg-green-500 rounded-lg text-white bg-blue-600 hover:bg-green-600 "
                onClick={handleLogout}
              />
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-400 text-white px-6 pb-4">
          <ul className="space-y-2">
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              <li className="py-2">Home</li>
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className="py-2">Recipes</li>
            </Link>
            <Link to="/cuisine" onClick={() => setMenuOpen(false)}>
              <li className="py-2">Cuisines</li>
            </Link>
            <li className="flex items-center py-2">
              Categories <FaAngleDown className="ml-1" />
            </li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              <li className="py-2">Blog</li>
            </Link>
            <Link to="/features" onClick={() => setMenuOpen(false)}>
              <li className="py-2">Features</li>
            </Link>
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <MdBookmarkBorder className="h-6 w-6 cursor-pointer" />
            <LuUser className="h-6 w-6 cursor-pointer" />
            <HiMiniMagnifyingGlass className="h-6 w-6 cursor-pointer" />
          </div>

          <ButtonCommon
            name="Add Recipe"
            style="mt-4 p-[10px_18px] bg-white text-red-500 hover:bg-gray-100 rounded-lg w-full"
            onClick={handleBtn}
          />

          <Link to={"/login"}>
            <ButtonCommon
              name="Logout Here"
              style="mt-4 p-[10px_18px] bg-white text-red-500 hover:bg-gray-100 rounded-lg w-full"
              onClick={handleLogout}
            />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
