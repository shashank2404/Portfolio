import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 px-4 py-16">
            <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl flex flex-col lg:flex-row gap-10 p-8">
                
                {/* Left Side - Info & Socials */}
                <div className="flex-1 flex flex-col justify-center gap-7">
                    <div>
                        <h2 className="text-4xl font-extrabold text-pink-600 mb-2">Get in Touch</h2>
                        <p className="text-lg text-gray-600">
                            Let's connect and create something awesome together!
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-pink-500 text-lg" />
                            <span>shashakklal43@gmail.com</span>
                        </div>``
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhoneAlt className="text-pink-500 text-lg" />
                            <span>+91-95757-95145</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-pink-500 text-lg" />
                            <span>India (Bilaspur CG)</span>
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800 transition" />
                        </a>
                        <a href="https://github.com/shashank2404" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl text-gray-800 hover:text-black transition" />
                        </a>
                        <a href="mailto:shashakklal432@gmail.com">
                            <FaEnvelope className="text-3xl text-pink-500 hover:text-pink-700 transition" />
                        </a>
                    </div>
                </div>
                
                {/* Right Side - Form */}
                <form className="flex-1 bg-pink-50 rounded-2xl shadow-lg p-6 flex flex-col gap-5 mt-4 lg:mt-0">
                    <h3 className="text-2xl font-bold text-pink-600 mb-2">Send a Message</h3>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="rounded-lg px-5 py-3 bg-white border border-pink-200 focus:border-pink-400 focus:outline-none text-gray-700 font-medium"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="rounded-lg px-5 py-3 bg-white border border-pink-200 focus:border-pink-400 focus:outline-none text-gray-700 font-medium"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="rounded-lg px-5 py-3 bg-white border border-pink-200 focus:border-pink-400 focus:outline-none text-gray-700 font-medium"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-700 transition shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
