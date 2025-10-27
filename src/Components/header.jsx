import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-md rounded-2xl px-4 py-3 sm:px-8 sm:py-4 font-bold flex flex-col sm:flex-row items-center justify-between w-full">
      {/* Top row: logo + hamburger */}
      <div className="w-full flex items-center justify-between sm:w-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text animate-pulse hover:scale-105 transition-transform duration-300 cursor-pointer">
            RuthLess
          </span>
          <span className="hidden xs:inline text-base xs:text-xl text-gray-700 font-semibold tracking-wide hover:text-pink-600 transition-colors duration-300">
            | FullStack Developer
          </span>
        </div>
        {/* Hamburger for small screens */}
        <button
          className="sm:hidden text-pink-600 p-2 ml-2"
          aria-label="Open main menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Nav links + Resume button */}
      {/* Mobile: collapse, desktop: horizontal show */}
      <div className={`w-full sm:flex sm:items-center sm:justify-center ${menuOpen ? "block mt-4" : "hidden"} sm:mt-0`}>
        <ul className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-8 text-base xs:text-lg text-gray-500 text-center mb-3 sm:mb-0">
          <li>
            <Link to="/" className="hover:text-pink-600 cursor-pointer block py-1 px-2">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-600 cursor-pointer block py-1 px-2">About</Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-pink-600 cursor-pointer block py-1 px-2">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-600 cursor-pointer block py-1 px-2">Contact</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-pink-600 cursor-pointer block py-1 px-2">Skills</Link>
          </li>
        </ul>
        <div className="flex justify-center sm:ml-6">
          <button
            className="bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold rounded-2xl w-28 h-9 flex items-center justify-center transition duration-300 hover:scale-105 shadow mt-1 sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
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
      </div>
    </nav>
  );
}

export default NavBar;
