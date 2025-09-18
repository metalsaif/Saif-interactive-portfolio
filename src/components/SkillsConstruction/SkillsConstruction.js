// src/components/SkillsConstruction/SkillsConstruction.js
import React from 'react';
// 1. Import new, relevant icons from the react-icons library
import { FaLaptopCode, FaTools, FaLanguage } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const SkillsConstruction = () => (
  <Section id="skills"> {/* Renamed id for clarity */}
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I possess a versatile skill set that spans programming, industry-standard engineering software, and multilingual communication.
    </SectionText>
    
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 my-12">
      
      {/* 2. Replaced content for the first list item: CODING */}
      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0 sm:mr-4 text-[#C55A11]">
          <FaLaptopCode size="4rem" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-2xl text-white mb-2">
            Coding
          </h4>
          <p className="text-lg text-white/75">
            Python, MATLAB, Linux (Ubuntu), ROS2
          </p>
        </div>
      </li>

      {/* 3. Replaced content for the second list item: SOFTWARE */}
      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0 sm:mr-4 text-[#C55A11]">
          <FaTools size="4rem" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-2xl text-white mb-2">
            Software
          </h4>
          <p className="text-lg text-white/75">
            AutoCAD, Revit, Rhino 3D, Grasshopper, Fusion360, Navisworks
          </p>
        </div>
      </li>

      {/* 4. Replaced content for the third list item: LANGUAGES */}
      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0 sm:mr-4 text-[#C55A11]">
          <FaLanguage size="4rem" />
        </div>
        <div className="flex flex-col">
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