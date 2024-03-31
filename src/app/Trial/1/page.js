"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

const Canary1961Page = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen font-sans text-white bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* The riddle text container */}
      <motion.span 
        className="p-4 mb-4 text-center border border-white"
        variants={itemVariants}
      >
        Found Word<br />+
        <br />
        "When Yuri broke free of gravity's hold, <br />
        This number marked a story untold. <br />
        A year of firsts, a year of the brave, <br />
        Can you guess the number, be not a knave?"
        <br />=
        <br />
        KEY
      </motion.span>

      {/* Instructions and link */}
      <motion.span 
        className="text-center"
        variants={itemVariants}
      >
        <Link href="https://emn178.github.io/online-tools/crc32.html" className="underline hover:text-gray-300">
          
            Use this tool
         
        </Link>
        with the KEY (all characters should be capital) to generate the
        RESULT and then head over to
      </motion.span>

      {/* RESULT instruction */}
      <motion.span 
        className="p-2 mt-4 border border-white"
        variants={itemVariants}
      >
        www.teasurehunt.saavyas.in/RESULT
      </motion.span>
    </motion.div>
  );
};

export default Canary1961Page;
