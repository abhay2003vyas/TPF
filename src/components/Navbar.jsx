import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Left Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
            >
              Portfolio
            </a>
            <a 
              href="#" 
              className="text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
            >
              Blog
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-white text-lg font-light tracking-[0.3em] uppercase">
              Abhay
            </h1>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
            >
              Experience
            </a>
            <a 
              href="#" 
              className="text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="#" 
              className="text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
            >
              Resources
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#" 
                className="block text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300 py-2"
              >
                Home
              </a>
              <a 
                href="#" 
                className="block text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300 py-2"
              >
                Portfolio
              </a>
              <a 
                href="#" 
                className="block text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300 py-2"
              >
                Blog
              </a>
              <a 
                href="#" 
                className="block text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300 py-2"
              >
                Experience
              </a>
              <a 
                href="#" 
                className="block text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300 py-2"
              >
                Get In Touch
              </a>
              <a 
                href="#" 
                className="block text-white text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300 py-2"
              >
                Resources
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;