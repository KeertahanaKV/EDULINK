import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="flex justify-between items-center  bg-gray-100 border-b border-gray-300 dark:border-gray-700 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 ">
        <img src={logo} alt="EduLink Logo" className="h-30 w-40"  />
      </div>

      {/* Search Box (Responsive Width) */}
      <div>
        <input
          type="text"
          placeholder="Search"
          className="px-5 py-2 w-40 sm:w-100 md:w-120 lg:w-150 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      {/* Large Screen Navigation Links */}

      <div className="hidden lg:flex items-center space-x-6 ml-8">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/explore" className="hover:text-blue-500">
          Explore
        </Link>
        <Link to="/faq" className="hover:text-blue-500">
          FAQ
        </Link>
      </div>
      {/* Large Screen Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <button className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          Log in
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sign Up
        </button>
      </div>

      {/* Hamburger Menu Button (For Small & Medium Screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-gray-700 dark:text-white text-2xl"
      >
        ☰
      </button>

      {/* Dropdown Menu (Visible on Small & Medium Screens When Clicked) */}
      <div
        className={`absolute top-16 right-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-48 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="block py-2 px-4 hover:text-blue-500">
          Home
        </Link>
        <Link to="/explore" className="block py-2 px-4 hover:text-blue-500">
          Explore
        </Link>
        <Link to="/faq" className="block py-2 px-4 hover:text-blue-500">
          FAQ
        </Link>
        <hr className="my-2 border-gray-300 dark:border-gray-700" />
        <button className="block w-full text-left py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500">
          Log in
        </button>
        <button className="block w-full text-left py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </nav>
    </>
  );
}
