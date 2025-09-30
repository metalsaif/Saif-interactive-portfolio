// src/components/Projects/Projects.js
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    {/* This is the old <GridContainer> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
      
      {projects.map(({ id, image, title, description, tags, source, visit }) => {
        return (
          // THIS IS THE NEW, REBUILT PROJECT CARD
          // =====================================
          <div key={id} className="rounded-lg shadow-lg shadow-white/15 bg-background-3 flex flex-col">
            
            {/* 1. Image Container: This controls the image size perfectly */}
            <div className="aspect-video overflow-hidden">
              <img src={image} className="w-full h-full object-cover" alt={title} />
            </div>

            {/* 2. Main Content Container (this will grow to push the footer down) */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="font-main text-2xl font-semibold text-primary-1 tracking-wide text-center">
                {title}
              </h3>
              
              <hr className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto my-4 border-0 rounded-lg" />
              
              <p className="font-main text-base text-white/75 text-left leading-relaxed flex-grow">
                {description}
              </p>
            </div>
            
            {/* 3. Stack/Tags Container */}
            <div className="px-6 pt-4">
              <h4 className="font-main text-xl font-medium text-primary-1 text-center">Stack</h4>
              <ul className="flex justify-center flex-wrap gap-x-4 gap-y-2 p-4">
                {tags.map((tag, i) => (
                  <li key={i} className="font-main text-sm text-orange-400">{tag}</li>
                ))}
              </ul>
            </div>

            {/* 4. Buttons Container (The Footer) */}
            <div className="flex justify-around py-6">
              <a href={visit} className="text-lg py-3 px-8 rounded-2xl bg-[#A52A2A] text-white transition-transform duration-300 hover:scale-105">Visit</a>
              <a href={source} className="text-lg py-3 px-8 rounded-2xl bg-[#A52A2A] text-white transition-transform duration-300 hover:scale-105">Source</a>
            </div>
          </div>
          // =====================================
        );
      })}
    </div>
  </Section>
);

export default Projects;