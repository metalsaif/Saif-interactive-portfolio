// src/styles/GlobalComponents/index.js
import React from 'react';

// === Section ===
export const Section = ({ children, id, className }) => (
  <section id={id} className={`relative ${className || ''}`}>
    {children}
  </section>
);

// === SectionTitle ===
export const SectionTitle = ({ children, main }) => (
  <h2
    className={`
      font-normal w-full md:w-max max-w-full mb-4 bg-gradient-to-r from-white via-white/60 to-transparent bg-clip-text text-transparent
      text-center md:text-left
      ${main ? 'text-4xl md:text-6xl py-4' : 'text-3xl md:text-5xl'}
    `}
  >
    {children}
  </h2>
);

// === SectionText ===
export const SectionText = ({ children }) => (
  <p className="max-w-3xl text-base md:text-2xl font-light text-white/50 pb-8 md:pb-14 text-center md:text-left">
    {children}
  </p>
);

// === SectionDivider ===
export const SectionDivider = ({ divider }) => (
  <div
    className={`
      w-full h-0.5 rounded-lg
      bg-gradient-to-r from-cyan-400 to-purple-500
      opacity-30 
      ${divider ? 'my-8 md:my-16' : ''}
    `}
  />
);

// === Button (The Final, Correct Version) ===
// ===========================================
export const Button = ({ children, href, center }) => {
  // This container now checks for the 'center' prop to decide its alignment
  const containerClasses = `
    w-full flex 
    ${center ? 'justify-center' : 'justify-center md:justify-start'}
  `;

  const buttonClasses = `
    inline-block h-14 rounded-full font-semibold text-white
    flex items-center justify-center 
    transition-all duration-300 ease-in-out
    bg-[#A52A2A] 
    hover:bg-orange-400 hover:scale-110
    
    /* Mobile-first styles */
    w-3/4 text-xl 
    
    /* Desktop overrides */
    md:w-64 md:h-16 md:text-2xl
  `;

  if (href) {
    return (
      <div className={containerClasses}>
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className={buttonClasses}>
        {children}
      </div>
    </div>
  );
};
// ===========================================