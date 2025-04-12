import React from 'react';
import logo from '../../public/logo.jpg';

function Header() {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Nike Logo" 
            className="w-14 h-10 object-contain hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Services</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Contact</a>
          </li>
        </ul>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-semibold hover:scale-105 transition-transform duration-300">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Header;
