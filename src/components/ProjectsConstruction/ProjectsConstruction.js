// src/components/ProjectsConstruction/ProjectsConstruction.js
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

// 1. We now import the new data from our new constants file
import { projectsConstruction } from '../../constants/constantsConstruction';

const ProjectsConstruction = () => (
  <Section id="projects">
    <SectionDivider divider />
    {/* 2. Changed the title to be more specific */}
    <SectionTitle>Academic & Research Projects</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
      
      {/* 3. We now map over the new 'projectsConstruction' array */}
      {projectsConstruction.map(({ id, image, title, description, tags }) => {
        return (
          <div key={id} className="rounded-lg shadow-lg bg-background-2 flex flex-col">
            <div className="aspect-video overflow-hidden">
              <img src={image} className="w-full h-full object-cover" alt={title} />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="font-main text-2xl font-semibold text-primary-1 tracking-wide text-center">
                {title}
              </h3>
              <hr className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto my-4 border-0 rounded-lg" />
              <p className="font-main text-base text-white/75 text-left leading-relaxed flex-grow">
                {description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <h4 className="font-main text-xl font-semibold text-center text-blue-200 transition-colors duration-300 hover:text-white">Focus Areas</h4>
              <ul className="flex justify-center flex-wrap gap-x-4 gap-y-2 p-4">
                {tags.map((tag, i) => (
                  <li key={i} className="font-main font-semibold text-sm text-orange-400">{tag}</li>
                ))}
              </ul>
            </div>
            {/* 4. Removed the "Code" and "Source" buttons as they are not relevant here */}
          </div>
        );
      })}
    </div>
  </Section>
);

export default ProjectsConstruction;