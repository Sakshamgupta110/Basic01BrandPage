import React from 'react'
import shoe from '../../public/shoe.jpg'

function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to our brand</h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover our latest collection of premium footwear designed for comfort and style.
        </p>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-700 hover:scale-105 transition-transform duration-300">
            Shop Now
          </button>
          <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img 
          src={shoe} 
          alt="hero" 
          className="w-3/4 h-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      
    </div>
  )
}

export default Hero
