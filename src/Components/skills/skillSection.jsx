// SkillSection.jsx
import React from "react";
import SkillProgress from "./SkillProgress";

function SkillSection() {
  // Proper percentage (0-100) aur singular prop ka use karo
  return (
   <div>
     <div className="relative w-full text-center py-8 overflow-hidden">
        {/* Animated/Gradient background circles */}
        <div className="absolute left-0 top-0 w-36 h-36 bg-pink-300 rounded-full opacity-20 blur-2xl -z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl -z-10"></div>

        {/* Main Welcome Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 mb-2 animate-pulse">
          Welcome to My Portfolio!
        </h2>
        {/* Supporting tagline */}
        <p className="text-lg md:text-xl text-gray-700 italic tracking-wide max-w-xl mx-auto">
          Turning <span className="text-pink-500 font-semibold">ideas</span> into interactive&nbsp;
          <span className="text-purple-500 font-semibold">digital experiences</span>
        </p>
        {/* Little decorative dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></span>
          <span className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></span>
        </div>
      </div>
    <div className="max-w-2xl mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <SkillProgress skill="JavaScript" percentage={85} color="linear-gradient(90deg,#fbbf24 50%, #f472b6 100%)" />
      <SkillProgress skill="React" percentage={90} color="linear-gradient(90deg,#3b82f6 60%, #e879f9 100%)" />
      <SkillProgress skill="Node.js" percentage={60} color="linear-gradient(90deg,#34d399 60%, #f472b6 100%)" />
      <SkillProgress skill="CSS" percentage={75} color="linear-gradient(90deg,#10b981 60%, #8b5cf6 100%)"/>
      <SkillProgress skill="Python" percentage={70} color="linear-gradient(90deg,#06b6d4 60%, #a21caf 100%)"/>
      <SkillProgress skill="Data Structures" percentage={65} color="linear-gradient(90deg,#06b6d4 60%, #a21caf 100%)" />
    </div>
   </div>
  );
}
export default SkillSection;
