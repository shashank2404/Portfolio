import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-pink-100 py-8 px-2 sm:px-4">
      {/* Decorative header (same as your original) */}
      <div className="relative text-center mb-8 py-8 sm:mb-10 sm:py-12 overflow-hidden">
        {/* ...existing animated backgrounds, gradients, and lines can stay here... */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-transparent bg-clip-text animate-gradient inline-block hover:scale-105 transition-transform duration-300">
            About Me
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
          <span className="hidden sm:block w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-400" />
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 italic font-light">
            Get to know the person behind the code
          </p>
          <span className="hidden sm:block w-8 h-0.5 bg-gradient-to-l from-transparent to-pink-400" />
        </div>
        <p className="text-xs xs:text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Discover my journey, skills, and the passion that drives me to create meaningful digital experiences
        </p>
      </div>

      {/* Responsive Main grid: 1 column mobile, 3 columns desktop */}
      <div className="max-w-4xl md:max-w-7xl mx-auto px-1 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Sidebar - Move to top on mobile, left on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-none">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-5 md:p-8 mb-4 lg:mb-0 lg:sticky lg:top-8 transition-all duration-300">
              <div className="flex justify-center mb-5">
                <img
                  src="your-image-path.jpg"
                  alt="Profile"
                  className="w-20 h-20 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full border-4 border-pink-300 shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-l xs:text-xl sm:text-2xl font-bold text-pink-600 text-center mb-1">RuthLess</h3>
              <p className="text-gray-600 text-center text-xs xs:text-sm mb-3 italic">
                Full Stack Developer
              </p>
              <div className="w-12 xs:w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-4 rounded-full"></div>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-pink-50 rounded-xl px-3 py-3 sm:p-4 w-20 sm:w-auto text-center hover:bg-pink-100 transition">
                  <p className="text-lg sm:text-xl font-bold text-pink-600">3rd</p>
                  <p className="text-xs xs:text-sm text-gray-600">Year</p>
                </div>
                <div className="bg-purple-50 rounded-xl px-3 py-3 sm:p-4 w-20 sm:w-auto text-center hover:bg-purple-100 transition">
                  <p className="text-lg sm:text-xl font-bold text-purple-600">5+</p>
                  <p className="text-xs xs:text-sm text-gray-600">Projects</p>
                </div>
                <div className="bg-pink-50 rounded-xl px-3 py-3 sm:p-4 w-20 sm:w-auto text-center hover:bg-pink-100 transition">
                  <p className="text-lg sm:text-xl font-bold text-pink-600">CSE</p>
                  <p className="text-xs xs:text-sm text-gray-600">Branch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col space-y-3 md:space-y-4 order-2">
            {/* College Section */}
            <div className="bg-white rounded-2xl shadow-lg md:rounded-3xl md:shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 text-xs xs:text-sm sm:text-base">
              <div className="flex items-center mb-2 sm:mb-4">
                <div className="w-1 h-5 sm:h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                <h4 className="text-lg sm:text-2xl font-bold text-pink-600">🎓 College Education</h4>
              </div>
              <div className="pl-3 sm:pl-5 space-y-2 sm:space-y-3">
                <div className="border-l-2 border-pink-200 pl-3 sm:pl-4 py-1 sm:py-2 hover:border-pink-400 transition-colors duration-300">
                  <p className="font-semibold text-gray-800 text-base sm:text-lg">B.Tech, Computer Science and Engineering</p>
                  <p className="text-gray-600">Guru Ghasidas Vishwavidyalaya • 2023 - 2027</p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">CGPA: 7.52 / 10.0</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-2 sm:p-4 mt-2">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Currently in 3rd year, focusing on full-stack development, data structures, algorithms, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg md:rounded-3xl md:shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 text-xs xs:text-sm sm:text-base">
              <div className="flex items-center mb-2 sm:mb-4">
                <div className="w-1 h-5 sm:h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                <h4 className="text-lg sm:text-2xl font-bold text-pink-600">💻 Technical Skills</h4>
              </div>
              <div className="pl-3 sm:pl-5 space-y-2 sm:space-y-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Frontend Development
                  </p>
                  <div className="flex flex-wrap gap-2 pl-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 transition">React.js</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-yellow-200 transition">JavaScript</span>
                    <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-cyan-200 transition">Tailwind CSS</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition">HTML5/CSS3</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Backend Development
                  </p>
                  <div className="flex flex-wrap gap-2 pl-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-green-200 transition">Node.js</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition">Express.js</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-green-200 transition">MongoDB</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 transition">MySQL</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Tools & Technologies
                  </p>
                  <div className="flex flex-wrap gap-2 pl-3">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition">Git & GitHub</span>
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-indigo-200 transition">VS Code</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2 pl-3">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-200 transition">C/C++</span>
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-indigo-200 transition">Python (fundamentals)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* School Education Section */}
            <div className="bg-white rounded-2xl shadow-lg md:rounded-3xl md:shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 text-xs xs:text-sm sm:text-base">
              <div className="flex items-center mb-2 sm:mb-4">
                <div className="w-1 h-5 sm:h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                <h4 className="text-lg sm:text-2xl font-bold text-pink-600">📚 School Education</h4>
              </div>
              <div className="pl-3 sm:pl-5 space-y-2 sm:space-y-4">
                <div className="border-l-2 border-pink-200 pl-3 sm:pl-4 py-1 sm:py-2 hover:border-pink-400 transition">
                  <p className="font-semibold text-gray-800 text-base">Class XII </p>
                  <p className="text-gray-600">Shashank Lal</p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">Board: CBSE • Year: 2021</p>
                  <p className="text-xs sm:text-sm text-pink-600 font-medium mt-1">Percentage: 85% • Stream: Science (PCM)</p>
                </div>
                <div className="border-l-2 border-purple-200 pl-3 sm:pl-4 py-1 sm:py-2 hover:border-purple-400">
                  <p className="font-semibold text-gray-800 text-base">Class X </p>
                  <p className="text-gray-600">Shashank Lal</p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">Board: CBSE • Year: 2019</p>
                  <p className="text-xs sm:text-sm text-purple-600 font-medium mt-1">Percentage: 75%</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-5 md:p-8 border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 text-xs xs:text-sm sm:text-base">
              <div className="flex items-center mb-2 sm:mb-4">
                <div className="w-1 h-5 sm:h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                <h4 className="text-lg sm:text-2xl font-bold text-pink-600">🏆 Co-curricular Activities</h4>
              </div>
              <div className="pl-3 sm:pl-5 space-y-1 sm:space-y-3">
                {/* Activities */}
                <div className="flex items-start space-x-2 sm:space-x-3 bg-white rounded-lg p-2 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <span className="text-xl sm:text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-800">Hackathons & Coding Competitions</p>
                    <p className="text-xs sm:text-sm text-gray-600">Participated SIH</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3 bg-white rounded-lg p-2 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <span className="text-xl sm:text-2xl">👥</span>
                  <div>
                    <p className="font-semibold text-gray-800">Game Development</p>
                    <p className="text-xs sm:text-sm text-gray-600">Active member of college game development club</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3 bg-white rounded-lg p-2 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <span className="text-xl sm:text-2xl">🎤</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tech Workshops & Seminars</p>
                    <p className="text-xs sm:text-sm text-gray-600">Attended and organized technical workshops</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End main-content col-span-2 */}
        </div>
      </div>
    </div>
  );
}
export default About;
