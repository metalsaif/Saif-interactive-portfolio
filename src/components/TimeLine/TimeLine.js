// src/components/TimeLine/TimeLine.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

// YOUR CORRECT, PERSONALIZED TIMELINE DATA. I WILL NOT CHANGE IT AGAIN.
// ======================================================================
export const TimeLineData = [
  { year: 2021, text: 'Completed my BSc in Building Engineering andConstruction Management.' },
  { year: 2022, text: 'Began my Masters in Construction Robotics while starting my journey into web development.' },
  { year: 2023, text: 'Deepened my expertise in both robotics and advanced front-end frameworks like Next.js.' },
  { year: 2024, text: 'Began developing high-performance web applications, merging engineering precision with UI/UX.' },
  { year: 2025, text: 'Continuing my dual path in robotics and as an elite front-end developer.' },
];
// ======================================================================

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef(null);

  // THIS IS THE NEW, SIMPLIFIED, AND CORRECT LOGIC
  // ===============================================
  const handleClick = (index) => {
    // If the user clicks the currently active final item, loop back to the start.
    if (index === activeItem && index === TOTAL_CAROUSEL_COUNT - 1) {
      const firstItem = document.getElementById('carousel__item-0');
      if (firstItem) {
        firstItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        setActiveItem(0);
      }
      return;
    }

    // Otherwise, find the target item by its ID and scroll it into view.
    const targetItem = document.getElementById(`carousel__item-${index}`);
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveItem(index);
    }
  };

  // This useEffect handles updating the active dot when the user scrolls MANUALLY.
  useEffect(() => {
    const handleManualScroll = () => {
      if (carouselRef.current) {
        let maxVisibleIndex = 0;
        let maxVisibility = 0;
        for (let i = 0; i < TOTAL_CAROUSEL_COUNT; i++) {
          const item = document.getElementById(`carousel__item-${i}`);
          if (item) {
            const rect = item.getBoundingClientRect();
            const containerRect = carouselRef.current.getBoundingClientRect();
            const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
            const visibility = visibleWidth / rect.width;
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              maxVisibleIndex = i;
            }
          }
        }
        setActiveItem(maxVisibleIndex);
      }
    };

    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleManualScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleManualScroll);
      }
    };
  }, []);

  // ===============================================

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
       With a background in Construction Robotics and a parallel focus on elite Front-End Development, I specialize in building intuitive, high-performance web applications. My engineering mindset allows me to bridge the gap between complex technology and user-friendly design.
      </SectionText>

      <ul ref={carouselRef} className="list-none flex justify-between max-w-5xl mb-20 sm:overflow-x-auto sm:scroll-smooth sm:snap-x sm:snap-mandatory sm:justify-start sm:mb-2 [&::-webkit-scrollbar]:hidden">
        {TimeLineData.map((item, index) => (
          <div key={index} id={`carousel__item-${index}`} className="sm:flex sm:snap-start" style={{ minWidth: index === TOTAL_CAROUSEL_COUNT - 1 ? '120%' : 'min-content' }}>
            <div
              onClick={() => handleClick(index)}
              className={`max-w-[196px] md:max-w-[124px] sm:min-w-[120px] sm:ml-8 sm:p-1 transition-opacity duration-300 ${activeItem === index ? 'opacity-100' : 'opacity-50'}`}
            >
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 md:mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent flex items-center">
                {item.year}
                <svg width="208" height="6" viewBox="0 0 208 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-5 sm:ml-4 [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0))] sm:[-webkit-mask-image:none]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z" fill="url(#paint0_linear)" fillOpacity="0.33" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="-4.30412e-10" y1="0.5" x2="208" y2="0.500295" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="0.79478" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </h4>
              <p className="text-xs md:text-sm text-white/75 pr-4 md:pr-8 sm:pr-0">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </ul>
      <div className="hidden sm:flex mb-12">
        {TimeLineData.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(index)}
            className={`bg-transparent border-none p-1 mr-1 transition-all duration-300 ${activeItem === index ? 'opacity-100 scale-150' : 'opacity-30'}`}
          >
            <div className="bg-white rounded-full w-[3px] h-[3px]" />
          </button>
        ))}
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;