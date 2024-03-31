"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  useEffect(() => {
    console.log("https://teasurehunt.saavyas.in/Trial/1")
  }, []);
  
  const [hint, setHint] = useState(false);

  // Button animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Meme animation variants for a fun entrance
  const memeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Page container animation variants
  const pageTransition = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className='bg-[#fefae0] flex flex-col items-center min-h-screen pt-4 px-2'
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className='mb-4 text-2xl font-medium text-center md:text-3xl'>The Canary 1961 Begins</h1>
        <div className='relative w-full max-w-md px-4 mb-8'>
          <Image
            src="/riddle.jpg"
            layout="responsive"
            width={500}
            height={500}
            alt="Riddle"
            objectFit="contain"
          />
        </div>
        <div className='max-w-lg space-y-3 text-center'>
          <p className='text-lg font-semibold'>
            Find hidden words from this image and use one of those words in the next stage.
          </p>
          <p className='font-light'>
            Hint: 6 possible words exist.
          </p>
          <p className='font-light'>
            To proceed to Stage 2, find the link somewhere here.
          </p>
          
          <motion.button
            className='p-2 mt-4 font-semibold transition duration-300 ease-out border border-purple-700 hover:bg-purple-700 hover:text-white'
            onClick={() => setHint(!hint)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {hint ? "Chhod Bhai, rehne de" : "Bhai mujhe hint chahiye"}
          </motion.button>
          
          {hint && 
            <motion.div variants={memeVariants} initial="hidden" animate="visible">
              <Image
                src="/meme.gif"
                width={500}
                height={500}
                alt="Meme"
              />
            </motion.div>
          }
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;
