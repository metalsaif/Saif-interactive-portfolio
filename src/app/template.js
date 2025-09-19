// src/app/template.js
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// This component will wrap every page in your application
const PageTransition = ({ children }) => {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      filter: 'blur(10px)', // Start blurred and invisible
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px)', // Animate to sharp and visible
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      filter: 'blur(10px)', // Animate out to blurred and invisible
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    // AnimatePresence is the key. It detects when a component is removed from the tree.
    <AnimatePresence mode="wait">
      {/* 
        We use the pathname as a key. When the key changes (i.e., you navigate),
        AnimatePresence knows to trigger the exit/enter animations.
      */}
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;