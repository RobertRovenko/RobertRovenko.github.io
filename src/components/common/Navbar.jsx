import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/search', label: 'SEARCH' },
    { path: '/login', label: 'LOGIN' }
  ];

  return (
    <nav className="bg-white shadow-md w-full z-50 transition duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center z-50">
        <div className="flex items-center">
          <Link to="/" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="flex items-center">
            <img src="/images/o.png" alt="Logo" className="h-12 mr-2" />
            <span className="text-3xl font-bold text-white font-poppins">OFFSTAGE</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => { scrollToTop(); closeMobileMenu(); }}
              className="text-white hover:text-gray-300 transition-transform transform hover:scale-125 font-poppins"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="focus:outline-none"
          >
            <i className={`fas fa-bars text-2xl text-white transition-transform duration-300 ${isMobileMenuOpen ? 'transform rotate-90' : ''}`}></i>
  </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center shadow-md z-50">
          <button 
            onClick={closeMobileMenu} 
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          >
            {/* Close Icon or Text can be added here */}
          </button>

          {menuItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => { scrollToTop(); closeMobileMenu(); }} 
              className="text-xl text-white hover:text-gray-300 transition-transform transform hover:scale-125 w-full text-center py-4 font-poppins"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
