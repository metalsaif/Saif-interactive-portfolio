// src/components/SkillsConstruction/SkillsConstruction.js
import React from 'react';
import { FaLaptopCode, FaTools, FaLanguage } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const SkillsConstruction = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I possess a versatile skill set that spans programming, industry-standard engineering software, and multilingual communication.
    </SectionText>
    
    {/* THIS IS THE CORRECTED GRID CONTAINER */}
    {/* ===================================== */}
    {/* We add "place-items-center md:place-items-start" to control alignment */}
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12 place-items-center md:place-items-start">
      
      {/* Coding Item */}
      <li className="max-w-xs flex flex-col items-center md:flex-row md:items-start">
        <div className="mb-4 md:mb-0 md:mr-4 text-[#C55A11]">
          <FaLaptopCode size="4rem" />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            Coding
          </h4>
          <p className="text-lg text-white/75">
            Python, MATLAB, Linux (Ubuntu), ROS2
          </p>
        </div>
      </li>

      {/* Software Item */}
      <li className="max-w-xs flex flex-col items-center md:flex-row md:items-start">
        <div className="mb-4 md:mb-0 md:mr-4 text-[#C55A11]">
          <FaTools size="4rem" />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            Software
          </h4>
          <p className="text-lg text-white/75">
            AutoCAD, Revit, Rhino 3D, Grasshopper, Fusion360, Navisworks
          </p>
        </div>
      </li>

      {/* Languages Item */}
      <li className="max-w-xs flex flex-col items-center md:flex-row md:items-start">
        <div className="mb-4 md:mb-0 md:mr-4 text-[#C55A11]">
          <FaLanguage size="4rem" />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-bold text-2xl text-white mb-2">
            Languages
          </h4>
          <p className="text-lg text-white/75">
            English (C1), German (A2 - actively learning), Bengali (Native)
          </p>
        </div>
      </li>

    </ul>
    <SectionDivider colorAlt />
  </Section>
);

export default SkillsConstruction;