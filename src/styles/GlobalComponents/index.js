// src/styles/GlobalComponents/index.js
import React from 'react';

// === Section (Corrected Version) ===

export const Section = ({ children, id, className }) => (
  <section id={id} className={`relative box-content ${className || ''}`}>
    {children}
  </section>
);
// === SectionTitle ===
export const SectionTitle = ({ children, main }) => (
  <h2
    className={`
      font-normal max-w-full w-max mb-4 bg-gradient-to-r from-white via-white/60 to-white/20 bg-clip-text text-transparent
      ${main ? 'text-4xl md:text-5xl py-4' : 'text-4xl md:text-5xl'}
    `}
  >
    {children}
  </h2>
);

// === SectionText ===
export const SectionText = ({ children }) => (
  <p className="max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-white/50 pb-14">
    {children}
  </p>
);

// === SectionDivider ===
export const SectionDivider = ({ divider }) => (
  <div
    className={`
      w-full h-0.5 rounded-lg /* This makes it full-width and thinner */
      
      /* This is the primary theme gradient */
      bg-gradient-to-r from-cyan-400 to-purple-500
      
      /* This makes it more subtle and "holographic" */
      opacity-30 
      
      /* This preserves the vertical spacing logic */
      ${divider ? 'my-16' : ''}
    `}
  />
);


// === Button ===
export const Button = ({ children, href }) => {
  // Define the shared styles
  const classes = `
    inline-block w-64 h-16 rounded-full text-2xl font-semibold text-white
    flex items-center justify-center 
    transition-all duration-300 ease-in-out
    bg-[#A52A2A] 
    hover:bg-orange-400 hover:scale-110
  `;

  // If an 'href' prop is passed, render it as an <a> tag.
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Otherwise, render it as a simple div (or button if needed for forms).
  return (
    <div className={classes}>
      {children}
    </div>
  );
};