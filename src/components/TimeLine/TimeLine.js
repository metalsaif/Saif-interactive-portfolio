// src/components/TimeLine/TimeLine.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  // THIS IS THE NEW, CORRECT handleClick FUNCTION
  // ===============================================
  const handleClick = (index) => {
    if (carouselRef.current && itemRefs.current[index]) {
      const carousel = carouselRef.current;
      const item = itemRefs.current[index];
      
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const carouselCenter = carousel.offsetWidth / 2;
      const scrollLeft = itemCenter - carouselCenter;

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

  // This useEffect now handles the manual scroll logic correctly
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
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
       With a background in Building Engineering & Construction Robotics and a parallel focus on elite Front-End Development, I specialize in building intuitive, high-performance web applications. My engineering mindset allows me to bridge the gap between complex technology and user-friendly design.
      </SectionText>

      <ul ref={carouselRef} className="list-none flex items-center max-w-5xl mb-8 sm:mb-2 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
        {TimeLineData.map((item, index) => (
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
        {TimeLineData.map((_, index) => (
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

export default Timeline;