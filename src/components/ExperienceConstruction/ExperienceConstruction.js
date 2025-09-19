// src/components/ExperienceConstruction/ExperienceConstruction.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { experienceData } from '../../constants/constantsConstruction';

const TOTAL_CAROUSEL_COUNT = experienceData.length;

const ExperienceConstruction = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  // THIS IS THE NEW, CORRECT handleClick FUNCTION
  // ===============================================
  const handleClick = (index) => {
    if (carouselRef.current && itemRefs.current[index]) {
      const carousel = carouselRef.current;
      const item = itemRefs.current[index];
      
      // Calculate the position to scroll to center the item
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const carouselCenter = carousel.offsetWidth / 2;
      const scrollLeft = itemCenter - carouselCenter;

      // Handle the loop-back for the last item
      if (index === activeItem && index === TOTAL_CAROUSEL_COUNT - 1) {
              carousel.scrollTo({ left: 0, behavior: 'smooth' });
              setActiveItem(0);
              return;
            }

      carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      setActiveItem(index);
    }
  };
  // ===============================================

  // This useEffect now handles the manual scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carouselCenter = carouselRef.current.offsetWidth / 2;
        const scrollCenter = carouselRef.current.scrollLeft + carouselCenter;
        
        let closestIndex = 0;
        let minDistance = Infinity;

        itemRefs.current.forEach((item, index) => {
          if (item) {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(itemCenter - scrollCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          }
        });
        setActiveItem(closestIndex);
      }
    };
    
    const ref = carouselRef.current;
    if (ref) ref.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section id="experience">
      <SectionTitle>Education & Experience</SectionTitle>
      <SectionText>
        My journey is rooted in a strong academic foundation in construction engineering, combined with hands-on professional and research experience in robotics and automation.
      </SectionText>

      <ul ref={carouselRef} className="list-none flex items-center max-w-5xl mb-8 sm:mb-2 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
        {experienceData.map((item, index) => (
          <li
            key={index}
            ref={(el) => (itemRefs.current[index] = el)} // Assign a ref to each list item
            className="flex-shrink-0 px-4 snap-center"
            onClick={() => handleClick(index)}
          >
            <div className={`p-1 transition-opacity duration-300 ${activeItem === index ? 'opacity-100' : 'opacity-50'}`}>
              <h4 className="font-main text-2xl md:text-3xl mb-2 flex items-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {item.year}
                <svg width="120" height="6" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
                  <path d="M2.5 5.5C3.88 5.5 5 4.38 5 3V3.5L120 3.5V2.5L5 2.5V3C5 1.62 3.88 0.5 2.5 0.5C1.12 0.5 0 1.62 0 3C0 4.38 1.12 5.5 2.5 5.5Z" fill="url(#paint1_linear)" fillOpacity="0.33"/>
                  <defs><linearGradient id="paint1_linear" x1="0" y1="0.5" x2="120" y2="0.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="0.8" stopColor="white" stopOpacity="0"/></linearGradient></defs>
                </svg>
              </h4>
              <p className="font-main text-base text-white/75 max-w-xs">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-center sm:hidden mb-12">
        {experienceData.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(index)}
            className={`p-1 mx-1 transition-all duration-300 ${activeItem === index ? 'opacity-100 scale-150' : 'opacity-30'}`}
          >
            <div className="bg-white rounded-full w-2 h-2" />
          </button>
        ))}
      </div>
      <SectionDivider />
    </Section>
  );
};

export default ExperienceConstruction;