import React from "react";
import { motion } from "framer-motion";

const HomePageHero = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay children animations
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8, // Image appears after text
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-[60vh] py-16 px-4 bg-gradient-to-r  text-center lg:text-left overflow-hidden rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Content Section */}
      <div className="lg:w-1/2 p-4 z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-yellow-800 leading-tight mb-4 drop-shadow-lg"
          variants={textVariants}
        >
          Share Food, <br /> Nourish Hope.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-md"
          variants={textVariants}
        >
          Connecting surplus food with those who need it most in Dhaka. Join us
          in reducing waste and building a stronger community.
        </motion.p>
        <motion.div variants={textVariants}>
          <button className="btn bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Start Sharing Today
          </button>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="lg:w-1/2 p-4 mt-10 lg:mt-0 flex justify-center items-center"
        variants={imageVariants}
      >
        {/* Placeholder for your actual food sharing related image */}
        <img
          src="https://i.ibb.co/k6hhyDXT/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background.jpg" // Use one of your provided images or a relevant food image
          alt="Community Food Sharing"
          className="rounded-full shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-yellow-400"
        />
      </motion.div>

      {/* Optional: Subtle background pattern or element for visual interest */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </motion.section>
  );
};

export default HomePageHero;
