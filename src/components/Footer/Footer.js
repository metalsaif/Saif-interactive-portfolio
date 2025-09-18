// src/components/Footer/Footer.js
"use client";

import React from 'react';
import { AiFillBehanceCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// The broken import for SocialIcons has been REMOVED.

const Footer = () => {
  return (
    <section className="box-content max-w-5xl mx-auto my-4 py-8">
      <ul className="border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10 pt-10 pb-7">
        <li className="flex flex-col w-full max-w-xs">
          <h4 className="font-semibold text-xs uppercase text-white/40 mb-4">
            Call
          </h4>
          <a href="tel:+49 1777437477" className="text-sm sm:text-base text-white/75 transition-all duration-300 relative hover:text-white hover:translate-x-1.5">
            +49 1777437477
          </a>
        </li>
        <li className="flex flex-col w-full max-w-xs">
          <h4 className="font-semibold text-xs uppercase text-white/40 mb-4">
            Email
          </h4>
          <a href="mailto:saif.rahman@rwth-aachen.de" className="text-sm sm:text-base text-white/75 transition-all duration-300 relative hover:text-white hover:translate-x-1.5">
            saif.rahman@rwth-aachen.de
          </a>
        </li>
      </ul>

      <div className="max-w-5xl flex flex-col sm:flex-row justify-between items-right">
        <div className="flex items-baseline flex-wrap mr-auto mb-8 sm:mb-0">
          <p className="text-[#A52A2A] text-sm font-semibold sm:text-base  min-w-[280px]">
            Innovating one project at a time
          </p>
        </div>
        
        {/* THIS IS THE CORRECTED SOCIAL ICONS BLOCK */}
        {/* ======================================= */}
        <div className="flex items-end space-x-0">
          <a href="https://github.com/metalsaif" className="text-white p-2 rounded-full transition-all duration-300 hover:bg-background-2 hover:scale-125">
            <AiFillGithub size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/saif-rahman2508/" className="text-white p-2 rounded-full transition-all duration-300 hover:bg-background-2 hover:scale-125">
            <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://www.behance.net/saifrahman-metal" className="text-white p-2 rounded-full transition-all duration-300 hover:bg-background-2 hover:scale-125">
            <AiFillBehanceCircle size="3rem" />
          </a>
        </div>
        {/* ======================================= */}

      </div>
    </section>
  );
};

export default Footer;