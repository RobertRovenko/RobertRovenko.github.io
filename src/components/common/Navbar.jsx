import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);   

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-12 mr-2" />
            <span className="text-3xl font-bold text-gray-800"></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
        {['/', '/search', '/login'].map((path) => (
  <Link
    key={path}
    to={path}
    onClick={() => { scrollToTop(); closeMobileMenu(); }}
    className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-125"
  >
    {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
  </Link>
))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle menu
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? '' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col justify-center items-center shadow-md">
          <button 
            onClick={closeMobileMenu} 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {/* Close Button Logic Here */}
          </button>

          {/* Menu items */}
          {['/', '/search', '/login'].map((path) => (
            <Link
              key={path}
              to={path}
              onClick={() => { scrollToTop(); closeMobileMenu(); }} 
              className="text-xl text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-125 w-full text-center py-4"
            >
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}

           </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;