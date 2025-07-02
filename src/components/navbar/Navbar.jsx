import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-6" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">
            Blog Management System
          </span>
        </div>
   {/* Center: Search Bar (hidden on small screens) */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/blog/addblog" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium">Create Blog</Link>
          <Link to="/login" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium">Login</Link>
          <Link to="/register" className="text-gray-700 dark:text-white hover:text-blue-600 font-medium">Register</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-white hover:text-blue-600 font-medium">Home</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-white hover:text-blue-600 font-medium">Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-white hover:text-blue-600 font-medium">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
