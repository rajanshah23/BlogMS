import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">Blog Management System</span>
        </div>

        {/* Center: Search Bar (hidden on small screens) */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 dark:text-white hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-700 dark:text-white hover:text-blue-600 font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-700 dark:text-white hover:text-blue-600 font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
