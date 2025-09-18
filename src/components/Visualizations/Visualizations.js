// src/components/Visualizations/Visualizations.js
'use client';
import React, { useState } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { visualizations } from '../../constants/constantsConstruction';

// 1. Import the new, modern lightbox and its CSS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Visualizations = () => {
  // State to manage which lightbox is open (-1 means none are open)
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <Section id="visualizations">
      <SectionDivider divider />
      <SectionTitle>Architectural Visualizations</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {visualizations.map((project, index) => (
          // When a project card is clicked, we set the 'openIndex' to its index
          <div 
            key={project.id} 
            className="rounded-lg shadow-lg bg-background-2 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setOpenIndex(index)}
          >
            <img src={project.mainImage} className="w-full h-auto object-cover" alt={project.title} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-primary-1 tracking-wide text-center">
                {project.title}
              </h3>
              <p className="font-main text-base text-white/75 text-center mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 
        This is the new Lightbox component. It is cleaner and more powerful.
        We map over the data again to create a separate Lightbox instance for each project.
      */}
      {visualizations.map((project, index) => (
        <Lightbox
          key={`lightbox-${project.id}`}
          open={openIndex === index}
          close={() => setOpenIndex(-1)}
          // The 'slides' prop requires an array of objects with a 'src' key
          slides={project.images.map(img => ({ src: img }))}
        />
      ))}
    </Section>
  );
};

export default Visualizations;