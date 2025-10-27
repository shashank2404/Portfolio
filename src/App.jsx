import React from 'react';
import NavBar from './Components/header.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import { Routes, Route } from "react-router-dom";
import Contact from './Components/contact.jsx';
import './App.css'
import { useState } from "react";
import SkillSection from './Components/skills/skillSection.jsx';
function App() {
  const [currentstate,setCurrentstate] = useState("home");

  const pageHandler = (page) =>{
    setCurrentstate(page);
  }

  return (
   <div className="min-h-screen bg-pink-300">
    <NavBar currentstate={currentstate} pageHandler={pageHandler}/>
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<SkillSection/>} />
      </Routes>
   </div>
  )
}

export default App
