import React from "react";

function About() {
    return (
        <div className="min-h-screen bg-pink-100 py-12 px-6">
            <div className="relative text-center mb-16 py-16 overflow-hidden">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Floating circles */}
                    <div className="absolute top-10 left-[10%] w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-bounce"></div>
                    <div className="absolute top-20 right-[15%] w-24 h-24 bg-purple-300 rounded-full opacity-25 animate-pulse"></div>
                    <div className="absolute bottom-10 left-[20%] w-20 h-20 bg-pink-400 rounded-full opacity-15 animate-ping"></div>
                    <div className="absolute top-1/2 right-[25%] w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>

                    {/* Gradient bnana */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-pink-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* alag se line */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                                <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
                            </linearGradient>
                        </defs>
                        <path d="M 0 50 Q 150 20, 300 50 T 600 50" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                        <path d="M 100 150 Q 250 120, 400 150 T 700 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </svg>
                </div>

                {/* Navbar Content */}
                <div className="relative z-10">
                    {/* Decorative top elements */}
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center space-x-2">
                            <span className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-pink-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
                            <span className="w-12 h-1 bg-gradient-to-l from-transparent via-pink-500 to-pink-500 rounded-full"></span>
                        </div>
                    </div>

                    {/* Main heading with gradient and animation */}
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-transparent bg-clip-text animate-gradient inline-block hover:scale-105 transition-transform duration-300">
                            About Me
                        </span>
                    </h1>

                    {/* Subtitle with icon */}
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="hidden sm:block w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-400"></span>
                        <p className="text-xl md:text-2xl text-gray-600 italic font-light">
                            Get to know the person behind the code
                        </p>
                        <span className="hidden sm:block w-8 h-0.5 bg-gradient-to-l from-transparent to-pink-400"></span>
                    </div>

                    {/* Additional decorative text */}
                    <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Discover my journey, skills, and the passion that drives me to create meaningful digital experiences
                    </p>

                    {/* Decorative bottom element */}
                    <div className="flex justify-center mt-8">
                        <div className="flex space-x-1">
                            <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                            <span className="w-2 h-2 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        </div>
                    </div>
                </div>
            </div>
           {/* Main Content Container */}
<div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT SIDE - Sticky Sidebar (1/3 width) */}
        <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-8 hover:shadow-pink-200 transition-all duration-300">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img 
                        src="your-image-path.jpg" 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full border-4 border-pink-300 shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                
                {/* Quick Info */}
                <h3 className="text-2xl font-bold text-pink-600 text-center mb-2">
                    RuthLess
                </h3>
                <p className="text-gray-600 text-center text-sm mb-6 italic">
                    Full Stack Developer
                </p>
                
                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
                
                {/* Quick Stats or Info */}
                <div className="space-y-4 text-center">
                    <div className="bg-pink-50 rounded-xl p-4 hover:bg-pink-100 transition-colors duration-300">
                        <p className="text-2xl font-bold text-pink-600">3rd</p>
                        <p className="text-sm text-gray-600">Year Student</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 hover:bg-purple-100 transition-colors duration-300">
                        <p className="text-2xl font-bold text-purple-600">5+</p>
                        <p className="text-sm text-gray-600"> Small Projects</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4 hover:bg-pink-100 transition-colors duration-300">
                        <p className="text-2xl font-bold text-pink-600">CSE</p>
                        <p className="text-sm text-gray-600">Specialization</p>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE - Main Content (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* College Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-pink-600">🎓 College Education</h4>
                </div>
                <div className="pl-5 space-y-3">
                    <div className="border-l-2 border-pink-200 pl-4 py-2 hover:border-pink-400 transition-colors duration-300">
                        <p className="font-semibold text-gray-800 text-lg">Bachelor of Technology (B.Tech)</p>
                        <p className="text-gray-600">Computer Science and Engineering</p>
                        <p className="text-sm text-gray-500 italic">[Guru Ghasidas Vishwavidyalaya] • 2023 - 2027</p>
                        <p className="text-sm text-pink-600 font-medium mt-1">CGPA: [7.52] / 10.0</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4 mt-3">
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Currently in 3rd year, focusing on full-stack development, data structures, algorithms, and software engineering principles.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-pink-600">💻 Technical Skills</h4>
                </div>
                <div className="pl-5 space-y-4">
                    {/* Frontend */}
                    <div>
                        <p className="font-semibold text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                            Frontend Development
                        </p>
                        <div className="flex flex-wrap gap-2 pl-4">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition">React.js</span>
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-200 transition">JavaScript</span>
                            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-200 transition">Tailwind CSS</span>
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition">HTML5/CSS3</span>
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <p className="font-semibold text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Backend Development
                        </p>
                        <div className="flex flex-wrap gap-2 pl-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">Node.js</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition">Express.js</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">MongoDB</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition">MySQL</span>
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <p className="font-semibold text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                            Tools & Technologies
                        </p>
                        <div className="flex flex-wrap gap-2 pl-4">
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition">Git & GitHub</span>
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition">VS Code</span>
                            {/* <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition">Postman</span> */}
                        </div>
                    </div>

                    {/* languages */}
                     <div>
                        <p className="font-semibold text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Tools & Technologies
                        </p>
                        <div className="flex flex-wrap gap-2 pl-4">
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition">c/ c++</span>
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition">fundamental of python</span>
                            {/* <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition">Postman</span> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* School Education Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-pink-600">📚 School Education</h4>
                </div>
                <div className="pl-5 space-y-4">
                    {/* 12th */}
                    <div className="border-l-2 border-pink-200 pl-4 py-2 hover:border-pink-400 transition-colors duration-300">
                        <p className="font-semibold text-gray-800">Class XII </p>
                        <p className="text-gray-600">[Shashank Lal]</p>
                        <p className="text-sm text-gray-500 italic">Board: CBSE • Year: [2021]</p>
                        <p className="text-sm text-pink-600 font-medium mt-1">Percentage: [85%] • Stream: Science (PCM)</p>
                    </div>

                    {/* 10th */}
                    <div className="border-l-2 border-purple-200 pl-4 py-2 hover:border-purple-400 transition-colors duration-300">
                        <p className="font-semibold text-gray-800">Class X </p>
                        <p className="text-gray-600">[Shashank Lal]</p>
                        <p className="text-sm text-gray-500 italic">Board: CBSE • Year: [2019]</p>
                        <p className="text-sm text-purple-600 font-medium mt-1">Percentage: [75%]</p>
                    </div>
                </div>
            </div>

            {/* Co-curricular Activities Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-xl p-8 border-2 border-pink-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mr-4"></div>
                    <h4 className="text-2xl font-bold text-pink-600">🏆 Co-curricular Activities</h4>
                </div>
                <div className="pl-5 space-y-3">
                    <div className="flex items-start space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <span className="text-2xl">🎯</span>
                        <div>
                            <p className="font-semibold text-gray-800">Hackathons & Coding Competitions</p>
                            <p className="text-sm text-gray-600">Participated SIH</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <span className="text-2xl">👥</span>
                        <div>
                            <p className="font-semibold text-gray-800">Game Development</p>
                            <p className="text-sm text-gray-600">Active member of college game development club</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <span className="text-2xl">📖</span>
                        <div>
                            <p className="font-semibold text-gray-800">Open Source Contributor</p>
                            <p className="text-sm text-gray-600">Contributing to open-source projects on GitHub or some small like trex games or batman running game using vanilla JavaScript</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <span className="text-2xl">🎤</span>
                        <div>
                            <p className="font-semibold text-gray-800">Tech Workshops & Seminars</p>
                            <p className="text-sm text-gray-600">Attended and organized technical workshops</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

            
        </div>
    )
}

export default About;