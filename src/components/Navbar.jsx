import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-amber-500 ${
      isActive ? "text-amber-500 font-semibold" : "text-neutral-300"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `text-base font-medium transition-colors hover:text-amber-500 ${
      isActive ? "text-amber-500 font-semibold" : "text-neutral-300"
    }`;

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="max-w-4xl mx-auto backdrop-blur-md bg-neutral-950/85 border border-neutral-800 rounded-2xl md:rounded-full px-6 py-3 shadow-lg transition-all duration-300">
        
        {/* Top / Main Bar */}
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-lg font-bold font-mono text-white tracking-tight hover:text-amber-500 transition-colors"
          >
            vicky<span className="text-amber-500">.dev</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <a
              href="https://vicks.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-neutral-300 hover:text-amber-500 transition-colors"
            >
              Blog ↗
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-neutral-400">
            <a
              href="https://github.com/vicks321"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 text-xl transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vicky-sah-707954350"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] hover:scale-110 text-xl transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_vicks_321"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E4405F] hover:scale-110 text-lg transition-all"
            >
              <GrInstagram />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-neutral-300 hover:text-white text-xl md:hidden p-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pt-5 pb-3 mt-3 border-t border-neutral-800">
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <a
              href="https://vicks.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-neutral-300 hover:text-amber-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog ↗
            </a>

            {/* Mobile Socials */}
            <div className="flex gap-5 text-xl pt-3 border-t border-neutral-800/80 w-full justify-center text-neutral-400">
              <a
                href="https://github.com/vicks321"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vicky-sah-707954350"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_vicks_321"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E4405F] transition-colors"
              >
                <GrInstagram />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;