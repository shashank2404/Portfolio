import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-amber-50 flex justify-between items-center px-8 py-4 rounded-2xl font-bold shadow-md">
      {/* Left side logo */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text animate-pulse hover:scale-105 transition-transform duration-300">
          RuthLess
        </span>
        <span className="text-xl text-gray-700 font-semibold tracking-wide hover:text-pink-600 transition-colors duration-300">
          | FullStack Developer
        </span>
      </div>

      {/* Right side links */}
      <ul className="flex flex-1 justify-center space-x-8 text-lg text-gray-500 text-center">
        <li>
          <Link to="/" className="hover:text-pink-600 cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-pink-600 cursor-pointer">About</Link>
        </li>
        <li>
          <Link to="/project" className="hover:text-pink-600 cursor-pointer">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-pink-600 cursor-pointer">Contact</Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-pink-600 cursor-pointer">Skills</Link>
        </li>
      </ul>

      {/* Resume Button */}
      <div>
        <button
          className="bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold rounded-2xl w-26 h-8 flex items-center justify-center transition duration-300 hover:scale-105 shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-6-4v6m0 0l-4-4m4 4l4-4m-4-4V4"
            />
          </svg>
          RESUME
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
