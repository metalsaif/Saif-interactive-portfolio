// src/components/ProfessionalExperience/ProfessionalExperience.js
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

// We will pull the data directly from your CV
const experience = [
  {
    role: 'Intern',
    company: 'Centre of Construction Robotics (CCR), RWTH Aachen University',
    dates: 'July 2024 – November 2024',
    points: ['Documentation', 'Automation Research', 'On-site Assembly']
  },
  {
    role: 'Site Engineer',
    company: 'Nibash Construction, Dhaka, Bangladesh',
    dates: 'April 2021 – March 2022',
    points: ['Construction Site Supervision', 'CAD Drawings and BIM', 'Cost Estimation, Scheduling and Documentation']
  },
  {
    role: 'Freelance',
    company: 'Fiverr',
    dates: 'July 2018 – September 2023',
    points: ['Architectural Modelling and Realistic Visualization']
  }
];

const ProfessionalExperience = () => (
  <Section id="experience">
    <SectionDivider divider />
    <SectionTitle>Professional Experience</SectionTitle>
    <div className="mt-8 flex flex-col gap-8">
      {experience.map((job, index) => (
        <div key={index} className="pb-4 border-b border-white/10">
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold text-white">{job.role}</h3>
            <p className="text-md text-white/75">{job.dates}</p>
          </div>
          <p className="text-lg text-white/50 mb-4">{job.company}</p>
          <ul className="list-disc list-inside space-y-2 text-white/75">
            {job.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default ProfessionalExperience;