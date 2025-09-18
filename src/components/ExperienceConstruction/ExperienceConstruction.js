// src/components/ExperienceConstruction/ExperienceConstruction.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

// 1. We now import the new data from our new constants file
import { experienceData } from '../../constants/constantsConstruction';

const TOTAL_CAROUSEL_COUNT = experienceData.length;

const ExperienceConstruction = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef(null);

  // The carousel logic remains the same, as it is working correctly.
  const handleClick = (index) => {
    if (activeItem === TOTAL_CAROUSEL_COUNT - 1 && index === activeItem) {
      const firstItem = document.getElementById('experience__item-0');
      if (firstItem) {
        firstItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        setActiveItem(0);
      }
      return;
    }
    const targetItem = document.getElementById(`experience__item-${index}`);
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleManualScroll = () => {
      // ... (This logic is complex but correct, no need to change)
    };
    // ... (useEffect setup remains the same)
  }, []);

  return (
    <Section id="experience">
      <SectionTitle>Education & Experience</SectionTitle>
      <SectionText>
        My journey is rooted in a strong academic foundation in construction engineering, combined with hands-on professional and research experience in robotics and automation.
      </SectionText>

      <ul ref={carouselRef} className="list-none flex justify-between max-w-5xl mb-20 sm:overflow-x-auto sm:scroll-smooth sm:snap-x sm:snap-mandatory sm:justify-start sm:mb-2 [&::-webkit-scrollbar]:hidden">
        {/* 2. We now map over the new 'experienceData' array */}
        {experienceData.map((item, index) => (
          <div key={index} id={`experience__item-${index}`} className="sm:flex sm:snap-start" style={{ minWidth: 'min-content' }}>
            <div
              onClick={() => handleClick(index)}
              className={`max-w-[196px] md:max-w-[220px] sm:min-w-[160px] sm:ml-8 sm:p-1 transition-opacity duration-300 ${activeItem === index ? 'opacity-100' : 'opacity-50'}`}
            >
              <h4 className=" text-2xl text-[#C55A11] md:text-3xl mb-2 flex items-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {item.year}
                <svg width="120" height="6" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
                  <path d="M2.5 5.5C3.88 5.5 5 4.38 5 3V3.5L120 3.5V2.5L5 2.5V3C5 1.62 3.88 0.5 2.5 0.5C1.12 0.5 0 1.62 0 3C0 4.38 1.12 5.5 2.5 5.5Z" fill="url(#paint1_linear)" fillOpacity="0.33"/>
                  <defs><linearGradient id="paint1_linear" x1="0" y1="0.5" x2="120" y2="0.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="0.8" stopColor="white" stopOpacity="0"/></linearGradient></defs>
                </svg>
              </h4>
              <p className="font-main text-base text-white/75">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </ul>
      
      {/* Mobile Buttons */}
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