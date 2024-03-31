"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Canary1961Page = () => {
  // Animation variants for the logo
  const logoVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation variants for the audio control
  const audioVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Apply motion to the img tag */}
      <motion.img 
        src="/logo.png" 
        alt="" 
        width="200" 
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      />
      {/* Apply motion to the audio tag */}
      <motion.audio 
        src="/audio1.mp3" 
        controls 
        variants={audioVariants}
        initial="hidden"
        animate="visible"
      ></motion.audio>
    </div>
  );
};

export default Canary1961Page;
