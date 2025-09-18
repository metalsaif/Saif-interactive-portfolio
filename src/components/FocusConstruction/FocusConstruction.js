// src/components/FocusConstruction/FocusConstruction.js
import React from 'react';
// 1. Import new, relevant icons
import { FaCity, FaRobot, FaHardHat, FaClipboardList } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

// 2. We now import the new data from our new constants file
import { focusData } from '../../constants/constantsConstruction';

// 3. Create an array of icons to map over
const icons = [
  <FaCity size="3rem" />,
  <FaRobot size="3rem" />,
  <FaHardHat size="3rem" />,
  <FaClipboardList size="3rem" />
];

const FocusConstruction = () => (
  <Section>
    <SectionTitle>Key Focus Areas</SectionTitle>
    <div className="mt-6 mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* 4. We now map over the new 'focusData' array */}
      {focusData.map((card, index) => (
        <div key={index} className="bg-background-2 rounded-xl p-6 flex flex-col items-center text-center min-h-[12rem]">
          {/* 5. The icon is now dynamically selected from the icons array */}
          <div className="text-[#C55A11] mb-4">
            {icons[index]}
          </div>
          
          <h5 className="font-semibold text-xl text-white mb-2">
            {card.title}
          </h5>
          
          <p className="font-normal text-sm text-white/75">
            {card.text}
          </p>
        </div>
      ))}
    </div>
    <SectionDivider/>
  </Section>
);

export default FocusConstruction;