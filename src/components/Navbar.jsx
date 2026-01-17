import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-b md:w-[40%] mx-auto rounded-4xl px-6 py-4 flex justify-between items-center">
      
      <div className=" text-base font-bold text-white hover:cursor">
       <a href="/">Vicky</a>
        </div>

    
      <div className="hidden text-shadow-initial md:flex gap-10 items-center text-white ">
        
        
        <a href="/" className="hover:opacity-100">Home</a>
        <a href="/about" className="hover:opacity-100">About</a>
        <a href="/projects" className="hover:opacity-100">Projects</a>
        <a href="https://vicks.hashnode.dev" target="_blank" className="hover:opacity-100">Blog</a>
      </div>

     
      <div className="hidden md:flex gap-4 items-center">
        <a href="https://github.com/vicks321" target="_blank" className=" hover:opacity-100 text-2xl text-white"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/vicky-sah-707954350" target="_blank" className=" hover:opacity-100 text-4xl text-white"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_vicks_321" target="_blank" className=" hover:opacity-100 text-2xl text-white"><GrInstagram /></a>
      </div>

    
      <div className="text-white text-2xl md:hidden w-8 h-8 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      
      {isOpen && (
        <div className=" top-20 left-0 w-full flex flex-col items-center gap-4 py-4">
          
          
          
          <a href="/" className="text-white text-lg">Home</a>
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
