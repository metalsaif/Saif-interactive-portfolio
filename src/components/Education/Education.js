// src/components/Education/Education.js
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const education = [
  {
    degree: 'Master of Science in Construction Robotics',
    university: 'RWTH Aachen University',
    dates: 'April 2022 – Present',
    focus: 'Key Focus: Digitalization, Automation, Additive manufacturing, BIM and Robotics in Construction'
  },
  {
    degree: 'BSc in Building Engineering and Construction Management',
    university: 'Khulna University of Engineering & Technology (Bangladesh)',
    dates: 'April 2015 – January 2021',
    focus: 'Key Focus: Construction Management, Structural analysis, Architectural Planning, BIM'
  }
];

const Education = () => (
  <Section id="education">
    <SectionDivider divider />
    <SectionTitle>Education</SectionTitle>
    <div className="mt-8 flex flex-col gap-8">
      {education.map((edu, index) => (
        <div key={index} className="pb-4 border-b border-white/10">
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
            <p className="text-md text-white/75">{edu.dates}</p>
          </div>
          <p className="text-lg text-white/50 mb-4">{edu.university}</p>
          <p className="text-white/75">{edu.focus}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;