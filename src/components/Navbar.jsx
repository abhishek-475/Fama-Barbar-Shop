import React, { useState } from "react";
import { FaPhoneAlt, FaPalette, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#151515] text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
          <img src={Logo} alt="Fama Logo" className="h-12 cursor-pointer" />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Center: Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-8 font-medium absolute md:static bg-[#151515] md:bg-transparent top-full left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 md:rounded-none rounded-b-lg shadow-lg md:shadow-none`}
        >
          <a href="#home" className="block md:inline hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="block md:inline hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#review" className="block md:inline hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="block md:inline hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* Right: Icons and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <FaPalette className="text-white text-lg hover:text-yellow-400 transition duration-300" aria-label="Design Palette Icon" />
          <FaGlobe className="text-white text-lg hover:text-yellow-400 transition duration-300" aria-label="Globe Icon" />
          <div className="flex items-center space-x-1 text-sm">
            <FaPhoneAlt className="text-yellow-400" aria-label="Phone Icon" />
            <a href="tel:+19406129127" className="hover:underline font-semibold transition duration-300">
              +1 940-612-9127
            </a>
          </div>
          <a
            href="#contact"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
            aria-label="Book an Appointment"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
