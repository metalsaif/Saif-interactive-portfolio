// src/components/Header/Header.js
'use client';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillBehanceCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isConstructionPage = pathname === '/construction';

  // --- THIS IS THE NEW DYNAMIC LOGIC ---
  // =====================================
  const switcherHref = isConstructionPage ? '/' : '/construction';
  const switcherText = isConstructionPage ? 'Developer Portfolio' : 'Engineering Portfolio';

  // We now define the navigation links in an array based on the current page
  const navLinks = isConstructionPage
    ? [
        { href: '#experience', text: 'Experience' },
        { href: '#projects', text: 'Projects' },
        { href: '#skills', text: 'Skills' },
      ]
    : [
        { href: '#projects', text: 'Projects' },
        { href: '#tech', text: 'Technologies' },
        { href: '#about', text: 'About' },
      ];
  // =====================================

  return (
    <header className="grid grid-cols-2 md:grid-cols-3 gap-x-4 px-4 pt-8 md:px-12">
      
      {/* Portfolio Switcher */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={switcherHref} legacyBehavior>
          <a className="flex items-center text-white transition-opacity duration-300 hover:opacity-80">
            <DiCssdeck size="2.5rem" />
            <span className="ml-2 text-lg md:text-xl">{switcherText}</span>
          </a>
        </Link>
      </div>
      
      {/* Navigation Links - Now dynamically rendered */}
      <nav className="hidden md:flex col-span-1 justify-center items-center">
        <ul className="flex items-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.href} className="group">
              <Link href={link.href} legacyBehavior>
                <a className="relative py-2 px-3 text-lg text-gray-400 transition-colors duration-300 group-hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-l after:from-blue-500 after:to-transparent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-t before:from-blue-500 before:to-transparent before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100">
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      
      {/* SECTION 3: Social Media Icons (Always on the Right) */}
      <div className="col-span-1 flex justify-end items-center space-x-2 md:space-x-4">
        <a href="https://github.com/metalsaif" className="text-white p-1 rounded-full ...">
          <AiFillGithub size="2.5rem" />
        </a>
        <a href="https://www.linkedin.com/in/saif-rahman2508" className="text-white p-1 rounded-full ...">
          <AiFillLinkedin size="2.5rem" />
        </a>
        <a href="https://www.behance.net/saifrahman-metal" className="text-white p-1 rounded-full ...">
          <AiFillBehanceCircle size="2.5rem" />
        </a>
      </div>
    </header>
  );
};

export default Header;