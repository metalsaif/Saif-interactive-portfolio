// src/components/Header/Header.js
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillBehanceCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { usePathname } from 'next/navigation'; 

// We do not import ANY styled-components here.

const Header = () => {
  // 2. Get the current path inside the component
  const pathname = usePathname();
  
  // 3. Determine if we are on the new construction page
  const isConstructionPage = pathname === '/construction';

  // 4. Set the dynamic text and link based on which page we're on
  const linkHref = isConstructionPage ? '/' : '/construction';
  const linkText = isConstructionPage ? 'Developer Portfolio' : 'Engineering Portfolio';

  return (
    <div className="grid grid-cols-5 gap-8 px-4 pt-8 md:px-12">
      
      {/* THIS IS THE NEW DYNAMIC SWITCHER */}
      {/* ================================ */}
      <div className="col-span-2 md:col-span-1 flex items-center">
        <Link href={linkHref} legacyBehavior>
          <a className="flex items-center text-white transition-opacity duration-300 hover:opacity-80">
            <DiCssdeck size="3rem" /> 
            {/* 5. Use the dynamic variables here */}
            <span className="ml-4 text-xl">{linkText}</span>
          </a>
        </Link>
      </div>
    
    {/* Column 2: Navigation Links */}
    <ul className="col-span-3 md:col-span-3 flex justify-end md:justify-center items-center space-x-4">
      <li className="group">
        <Link href="#projects" legacyBehavior>
          <a className="
            relative py-2 px-3 text-lg text-gray-400 transition-colors duration-300 group-hover:text-white group-hover:scale-105
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-l after:from-blue-500 after:to-transparent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100
            before:content-[''] before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-blue-500 before:to-transparent before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100
          ">
            Projects
          </a>
        </Link>
      </li>
      <li className="group">
        <Link href="#tech" legacyBehavior>
          <a className="
            relative py-2 px-3 text-lg text-gray-400 transition-colors duration-300 group-hover:text-white group-hover:scale-105
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-l after:from-blue-500 after:to-transparent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100
            before:content-[''] before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-blue-500 before:to-transparent before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100
          ">
            Technologies
          </a>
        </Link>
      </li>
      <li className="group">
        <Link href="#about" legacyBehavior>
          <a className="
            relative py-2 px-3 text-lg text-gray-400 transition-colors duration-300 group-hover:text-white group-hover:scale-105
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-l after:from-blue-500 after:to-transparent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100
            before:content-[''] before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-blue-500 before:to-transparent before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100
          ">
            About
          </a>
        </Link>
      </li>
    </ul>
    
    {/* Column 3: Social Media Icons */}
    <div className="hidden md:flex col-span-1 justify-around items-center">
      <a href="https://github.com/metalsaif" className="text-white p-2 rounded-full transition-all duration-300 hover:bg-background-2 hover:scale-110">
        <AiFillGithub size="3rem" />
      </a>
      <a href="www.linkedin.com/in/saif-rahman2508" className="text-white p-2 rounded-full transition-all duration-300 hover:bg-background-2 hover:scale-110">
        <AiFillLinkedin size="3rem" />
      </a>
      <a href="https://www.behance.net/saifrahman-metal" className="text-white p-2 rounded-full transition-all duration-300 hover:bg-background-2 hover:scale-110">
        <AiFillBehanceCircle size="3rem" />
      </a>
    </div>
  </div>
);
};

export default Header;