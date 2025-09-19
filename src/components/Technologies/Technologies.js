// src/components/Technologies/Technologies.js
import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaCube } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies to build modern, high-performance web applications from the ground up.
    </SectionText>
    
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 my-12 place-items-center sm:place-items-start">
      
      {/* Front-End Item */}
      <li className="max-w-xs flex flex-col items-center sm:flex-row sm:items-start">
        {/* Icon Container: Added padding (p-2) to make the background visible */}
        <div className="mb-4 p-2 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <DiReact size="3rem" />
        </div>
        {/* Text Container: Centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col text-center sm:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            Front-End
          </h4>
          <p className="text-lg text-white/75">
            Building high-performance, scalable applications with React, Next.js, and TypeScript.
          </p>
        </div>
      </li>

      {/* Back-End Item */}
      <li className="max-w-xs flex flex-col items-center sm:flex-row sm:items-start">
        <div className="mb-4 p-2 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <DiFirebase size="3rem" />
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            Back-End
          </h4>
          <p className="text-lg text-white/75">
            Developing robust RESTful APIs and connecting to both SQL and NoSQL databases.
          </p>
        </div>
      </li>

      {/* UI/UX Item */}
      <li className="max-w-xs flex flex-col items-center sm:flex-row sm:items-start">
        <div className="mb-4 p-2 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <DiZend size="3rem" />
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            UI/UX
          </h4>
          <p className="text-lg text-white/75">
            Creating intuitive user interfaces from wireframe to high-fidelity prototype in Figma.
          </p>
        </div>
      </li>
      
      {/* 3D Item */}
      <li className="max-w-xs flex flex-col items-center sm:flex-row sm:items-start">
        <div className="mb-4 p-2 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <FaCube size="4rem" />
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            3D & Visualization
          </h4>
          <p className="text-lg text-white/75">
            Bringing products to life with interactive 3D models and animations using Three.js and WebGL.
          </p>
        </div>
      </li>
    </ul>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;