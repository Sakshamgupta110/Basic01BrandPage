import React from 'react'
import shoe from '../../public/shoe.jpg'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Welcome to our brand
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 0.6,
            ease: "easeOut"
          }}
          className="text-gray-600 text-lg mb-6"
        >
          Discover our latest collection of premium footwear designed for comfort and style.
        </motion.p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#4B5563",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-black text-white px-6 py-2 rounded-full"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#F3F4F6",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full"
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <motion.div 
        className="w-full md:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img 
          src={shoe} 
          alt="hero" 
          className="w-3/4 h-auto object-contain"
        />
      </motion.div>
    </div>
  )
}

export default Hero
