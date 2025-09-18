// src/components/Acomplishments/Acomplishments.js
import React from 'react';
import { FaCubes, FaCodeBranch, FaRobot, FaReact } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

// The data remains the same, as it is correct.
const data = [
  {
    icon: <FaCodeBranch size="3rem" />,
    title: 'Dual-Discipline Focus',
    text: 'Merging the precision of Construction Robotics with the creativity of modern web development.'
  },
  {
    icon: <FaCubes size="3rem" />,
    title: 'Complex Applications',
    text: 'Experience building full-stack, interactive tools and platforms from concept to deployment.'
  },
  {
    icon: <FaRobot size="3rem" />,
    title: 'Engineering Mindset',
    text: 'Applying principles of systems thinking and efficiency to create robust, maintainable code.'
  },
  {
    icon: <FaReact size="3rem" />,
    title: 'Modern Tech Stack',
    text: 'Fluent in the entire React and Next.js ecosystem, including TypeScript and Vercel.'
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Core Competencies</SectionTitle>
    <div className="mt-6 mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {data.map((card, index) => (
        // THIS IS THE CORRECTED CARD COMPONENT
        // ===================================
        <div key={index} className="bg-background-2 rounded-xl p-6 flex flex-col items-center text-center min-h-[12rem]">
          
          {/* Icon - now with the accent color */}
          <div className="text-[#A52A2A] mb-4">
            {card.icon}
          </div>
          
          {/* Title */}
          <h5 className="font-semibold text-xl text-white mb-2">
            {card.title}
          </h5>
          
          {/* Text */}
          <p className="font-normal text-sm text-white/75">
            {card.text}
          </p>
        </div>
        // ===================================
      ))}
    </div>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;