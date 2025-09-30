// src/components/Footer/Footer.js
"use client";

import React from 'react';
import { AiFillBehanceCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className="box-content max-w-7xl mx-auto my-4 py-8">
      
      {/* Contact Info List */}
      <ul className="border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 pb-7">
        
        {/* Call Column */}
        <li className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h4 className="font-semibold text-sm uppercase text-white/40 mb-4">
            Call
          </h4>
          <a href="tel:+49 1777437477" className="text-base text-white/75 transition-all duration-300 relative hover:text-white hover:translate-x-1.5">
            +49 1777437477
          </a>
        </li>
        
        {/* Email Column */}
        <li className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h4 className="font-semibold text-sm uppercase text-white/40 mb-4">
            Email
          </h4>
          <a href="mailto:saif@saifrahman.dev" className="text-base text-white/75 transition-all duration-300 relative hover:text-white hover:translate-x-1.5">
            saif.rahman@rwth-aachen.de
          </a>
        </li>

      </ul>

      {/* Slogan and Social Icons Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        
        {/* Slogan */}
        <div className="flex">
          <p className="text-[#A52A2A] text-base font-semibold">
            Innovating one project at a time
          </p>
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
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
        
      </div>
    </section>
  );
};

export default Footer;