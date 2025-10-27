// SkillProgress.jsx
import React from "react";

function SkillProgress({ skill, percentage, color }) {
  // Kabhi bhi percentage 100 ke baahar na do, nahi toh styling toot sakti hai
  const percent = Math.max(0, Math.min(percentage, 100));

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-bold text-gray-700">{skill}</span>
        <span className="font-semibold text-pink-600">{percent}%</span>
      </div>
      <div className="bg-pink-100 rounded-full h-4 w-full">
        <div
          className="h-4 rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            background: color || "linear-gradient(90deg, #ec4899 60%, #8b5cf6 100%)"
          }}
        ></div>
      </div>
    </div>
  );
}
export default SkillProgress;
