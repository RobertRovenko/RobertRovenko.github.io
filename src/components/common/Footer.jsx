// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} PremiumSubscriber. Empowering creators, connecting fans.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Become a Creator</a>
          <a href="#" className="hover:text-white">Explore Content</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
