import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-b md:w-[50%] mx-auto rounded-4xl px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <div className=" text-2xl font-bold text-white hover:cursor">
       <a href="/">Vicky</a>
        </div>

      {/* Desktop Links */}
      <div className="hidden text-3xl md:flex gap-15 items-center text-white ">
        
        
        <a href="/about" className="hover:cursor">About</a>
        <a href="/projects" className="hover:cursor">Projects</a>
        <a href="https://vicks.hashnode.dev" className="hover:cursor">Blog</a>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-4 items-center">
        <a href="https://github.com/vicks321" className="text-2xl text-white"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/vicky-sah-707954350" className="text-4xl text-white"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_vicks_321" className="text-2xl text-white"><GrInstagram /></a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className=" top-20 left-0 w-full flex flex-col items-center gap-4 py-4 md:hidden">
          
          
          <a href="/about" className="text-white text-lg">About</a>
          <a href="/projects" className="text-white text-lg">Projects</a>
          <a href="https://vicks.hashnode.dev" className="text-white text-lg">Blog</a>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/vicks321" className="text-white"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/vicky-sah-707954350" className="text-white text-3xl"><FaLinkedin /></a>
            <a href="https://www.instagram.com/_vicks_321" className="text-white"><GrInstagram /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
