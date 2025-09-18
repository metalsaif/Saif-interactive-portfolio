// src/components/CustomCursor/CustomCursor.js
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// This is the component that will render our custom cursor image
const CursorImage = () => (
  <img
    src="/images/cursor_w.png"
    alt="Custom Cursor"
    style={{
      transform: 'translate(-50%, -50%)',
      width: '32px',
      height: 'auto',
    }}
  />
);

const CustomCursor = () => {
  // State to hold the mouse position
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // This function updates the mouse position state
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add the event listener when the component mounts
    window.addEventListener('mousemove', updateMousePosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 999999,
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <CursorImage />
    </motion.div>
  );
};

export default CustomCursor;