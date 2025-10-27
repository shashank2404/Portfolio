import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-pink-100 py-8 px-2 sm:px-4">
      {/* Header, Decorative Shapes - no major changes, responsive as per tailwind */}
      <div className="relative text-center mb-10 py-10 overflow-hidden">
        {/* ...existing animated background/gradient/svg code... */}
        {/* Main heading */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-transparent bg-clip-text animate-gradient inline-block hover:scale-105 transition-transform duration-300">
            About Me
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
          <span className="hidden sm:block w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-400"></span>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light">
            Get to know the person behind the code
          </p>
          <span className="hidden sm:block w-8 h-0.5 bg-gradient-to-l from-transparent to-pink-400"></span>
        </div>

        <p className="text-xs xs:text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Discover my journey, skills, and the passion that drives me to create meaningful digital experiences
        </p>
        {/* ...bottom decorative dots... */}
      </div>

      {/* Main Grid */}
      <div className="max-w-4xl md:max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Sidebar (Top on mobile, left on desktop) */}
          <div className=" lg:col-span-1 ">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-5 md:p-8 mb-4 lg:mb-0 lg:sticky lg:top-8 transition-all duration-300">
              {/* Profile Image */}
              <div className="flex justify-center mb-5">
                <img 
                  src="your-image-path.jpg" 
                  alt="Profile" 
                  className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full border-4 border-pink-300 shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl xs:text-2xl font-bold text-pink-600 text-center mb-1">RuthLess</h3>
              <p className="text-gray-600 text-center text-xs xs:text-sm mb-3 italic">
                Full Stack Developer
              </p>
              <div className="w-12 xs:w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-4 rounded-full"></div>
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-pink-50 rounded-xl px-3 py-3 sm:p-4 w-20 sm:w-auto text-center hover:bg-pink-100 transition">
                  <p className="text-lg sm:text-2xl font-bold text-pink-600">3rd</p>
                  <p className="text-xs xs:text-sm text-gray-600">Year</p>
                </div>
                <div className="bg-purple-50 rounded-xl px-3 py-3 sm:p-4 w-20 sm:w-auto text-center hover:bg-purple-100 transition">
                  <p className="text-lg sm:text-2xl font-bold text-purple-600">5+</p>
                  <p className="text-xs xs:text-sm text-gray-600">Projects</p>
                </div>
                <div className="bg-pink-50 rounded-xl px-3 py-3 sm:p-4 w-20 sm:w-auto text-center hover:bg-pink-100 transition">
                  <p className="text-lg sm:text-2xl font-bold text-pink-600">CSE</p>
                  <p className="text-xs xs:text-sm text-gray-600">Branch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content (2/3 on lg, full on mobile) */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Each section: College, Skills, School, Activities */}
            {/* College Section */}
            <div className="bg-white rounded-2xl shadow-lg md:rounded-3xl md:shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 text-sm xs:text-base">
              {/* ...Your Existing College Content... */}
            </div>
            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg md:rounded-3xl md:shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 text-sm xs:text-base">
              {/* ...Your Existing Skills Content... */}
            </div>
            {/* School Section */}
            <div className="bg-white rounded-2xl shadow-lg md:rounded-3xl md:shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 text-sm xs:text-base">
              {/* ...Your Existing School Content... */}
            </div>
            {/* Co-curricular Activities */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-5 md:p-8 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 text-sm xs:text-base">
              {/* ...Your Existing Activities Content... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
