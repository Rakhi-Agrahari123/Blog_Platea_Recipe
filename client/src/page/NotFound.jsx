import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-white to-red-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mb-4">Oops! Page Not Found.</p>
      <Link to="/home" className="text-blue-600 hover:underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
