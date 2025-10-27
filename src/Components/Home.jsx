import React from "react";
import IMG from "../assets/IMG_20240315_195852.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-pink-100 px-2 sm:px-4">
      {/* Main Card - Responsive */}
      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-4 xs:p-6 md:p-10 w-full max-w-4xl min-h-[400px] md:min-h-[500px] overflow-hidden">
        
        {/* SVG Decorative Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
          fill="none"
          viewBox="0 0 800 500"
        >
          <circle cx="700" cy="100" r="80" fill="#f9a8d4" opacity="0.12" />
          <circle cx="100" cy="400" r="60" fill="#f9a8d4" opacity="0.10" />
          <circle cx="350" cy="150" r="40" fill="#c026d3" opacity="0.07" />
          <circle cx="650" cy="350" r="30" fill="#f472b6" opacity="0.09" />
        </svg>

        {/* Left: Profile Image */}
        <div className="flex flex-col justify-center items-center md:w-1/3 w-full mb-6 md:mb-0 md:pr-8 z-10">
          <img
            src={IMG}
            alt="My Portrait"
            className="rounded-full shadow-xl border-4 border-pink-100 w-32 h-32 xs:w-44 xs:h-44 sm:w-56 sm:h-56 object-cover"
          />
        </div>

        {/* Right: Text and Social Info */}
        <div className="flex flex-col justify-center w-full md:w-2/3 md:pl-8 z-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-600 mb-2 xs:mb-4 tracking-tight text-center md:text-left">
            I'm RuthLess
          </h2>
          <div className="italic text-base xs:text-lg sm:text-2xl font-bold text-gray-700 mb-3 xs:mb-6 text-center md:text-left">
            3rd-year Computer Science and Engineering student
          </div>

          <p className="text-xs xs:text-sm sm:text-base text-gray-700 mb-2 xs:mb-3 text-center md:text-left">
            I am a 3rd-year CSE student passionate about coding, learning modern tech, and building meaningful digital products. My primary focus is on front-end and full-stack web development, and I’m always exploring new ways to improve my skills and knowledge.
          </p>
          <p className="text-xs xs:text-sm sm:text-base text-gray-700 mb-4 xs:mb-6 text-center md:text-left">
            I'm skilled in React, Node.js, and databases, and love collaborating with others on exciting tech projects! My goal is to make an impact with my code and create seamless user experiences.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start items-center space-x-8 mt-2">
            <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl sm:text-3xl text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://github.com/shashank2404" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl sm:text-3xl text-gray-800 hover:text-black transition" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=shashakklal432@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl sm:text-3xl text-pink-500 hover:text-pink-700 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
