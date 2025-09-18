// src/components/Technologies/Technologies.js
import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { FaCube } from 'react-icons/fa'; // FaCube is imported from 'react-icons/fa'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies to build modern, high-performance web applications from the ground up.
    </SectionText>
    {/* This is the old <List> */}
     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 my-12">
      {/* This is the old <ListItem> */}
      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <DiReact size="3rem" />
        </div>
        {/* This is the old <ListContainer> */}
        <div className="flex flex-col">
          {/* This is the old <ListTitle> */}
          <h4 className="font-bold text-xl sm:text-2xl text-white mb-2">
            Front-End
          </h4>
          {/* This is the old <ListParagraph> */}
          <p className="text-base sm:text-lg text-white/75">
            Building high-performance, scalable applications <br />
            with React, Next.js, and TypeScript.
          </p>
        </div>
      </li>

      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <DiFirebase size="3rem" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-xl sm:text-2xl text-white mb-2">
            Back-End
          </h4>
          <p className="text-base sm:text-lg text-white/75">
            Developing robust RESTful APIs and connecting <br />
            to both SQL and NoSQL databases.
          </p>
        </div>
      </li>

      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <DiZend size="3rem" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-xl sm:text-2xl text-white mb-2">
            UI/UX
          </h4>
          <p className="text-base sm:text-lg text-white/75">
            Creating intuitive user interfaces from <br />
            twireframe to high-fidelity prototype in Figma.
          </p>
        </div>
      </li>
      <li className="max-w-xs flex flex-col sm:flex-row sm:items-center">
        <div className="mb-4 bg-[#A52A2A] rounded-full sm:mb-0 sm:mr-4">
          <FaCube size="3rem" />
        </div>
        <div className="flex flex-col">
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