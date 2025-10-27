import React from "react";
import IMG from "../assets/IMG_20240315_195852.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-pink-100">
            {/* Main Card */}
            <div className="relative flex bg-white rounded-3xl shadow-2xl p-12 w-[1200px] min-h-[500px] overflow-hidden">

                {/* SVG Decorative Background */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none "
                    style={{ zIndex: 0 }}
                    fill="none"
                    viewBox="0 0 800 500"
                >
                    <circle cx="700" cy="100" r="80" fill="#f9a8d4" opacity="0.12" />
                    <circle cx="100" cy="400" r="60" fill="#f9a8d4" opacity="0.10" />
                    <circle cx="350" cy="150" r="40" fill="#c026d3" opacity="0.07" />
                    <circle cx="650" cy="350" r="30" fill="#f472b6" opacity="0.09" />
                    {/* Add more shapes as you like */}
                </svg>

                {/* Left: Profile Image */}
                <div className="flex flex-col justify-center items-center w-1/3 pr-8 z-10 
           hover:scale-105 hover:shadow-2xl hover:bg-pink-50 transition-all duration-300 rounded-xl"
>
                    <img
                        src={IMG}
                        alt="My Portrait"
                        className="rounded-full shadow-xl border-4 border-pink-100 w-64 h-64 object-cover"
                    />
                </div>

                {/* Right: Text and Social Info */}
                <div className="flex flex-col justify-center w-2/3 pl-8 z-10">
                    <h2 className="text-5xl font-extrabold text-pink-600 mb-4 tracking-tight">I'm RuthLess</h2>
                    <div className="italic text-2xl font-bold text-gray-700 mb-6">3rd-year Computer Science and Engineering student</div>

                    <p className="text-lg text-gray-700 mb-3">
                        I am a 3rd-year CSE student passionate about coding, learning modern tech, and building meaningful digital products. My primary focus is on front-end and full-stack web development, and I’m always exploring new ways to improve my skills and knowledge.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        I'm skilled in React, Node.js, and databases, and love collaborating with others on exciting tech projects! My goal is to make an impact with my code and create seamless user experiences.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-8 mt-2">
                        <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800 transition" />
                        </a>
                        <a href="https://github.com/shashank2404" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="text-3xl text-gray-800 hover:text-black transition" />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=shashakklal432@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email">
                            <FaEnvelope className="text-3xl text-pink-500 hover:text-pink-700 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
