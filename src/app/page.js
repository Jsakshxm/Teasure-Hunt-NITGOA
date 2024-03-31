"use client"

import Link from "next/link";
import { motion } from 'framer-motion';

const Page = () => {
  // Define your variants for animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.3, duration: 0.5 }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div 
      className='flex flex-col items-center justify-center min-h-screen p-4 text-white bg-black'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img src="/logo.png" alt="" width="200" variants={itemVariants} />
      <motion.h1 
        className='text-2xl font-extrabold text-center md:text-4xl' 
        variants={itemVariants}
      >
        Canary-1961
      </motion.h1>
      
      <Link href="Trial">
        <motion.button 
          className='p-2 mt-4 font-semibold transition duration-300 ease-out border border-purple-700 w-44 sm:w-auto sm:px-10 hover:bg-purple-700 hover:text-white'
          variants={itemVariants}
        > 
          Unlock
        </motion.button>
      </Link>
      <motion.p 
        className='pt-6 text-xl font-normal text-center'
        variants={itemVariants}
      >
        "Code is like humor. When you have to explain it, it’s bad."
      </motion.p>
      <motion.p className='text-xl font-normal text-center' variants={itemVariants}>
        – Cory House
      </motion.p>
    </motion.div>
  );
}

export default Page;
