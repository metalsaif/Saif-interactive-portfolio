// src/components/ContactConstruction/ContactConstruction.js
import React from 'react';
import { Section, SectionDivider, SectionTitle, Button } from '../../styles/GlobalComponents';

const ContactConstruction = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      {/* <SectionTitle>Contact & CV</SectionTitle> */}
      
      <div className="max-w-xl mx-auto mt-8">
        <p className="text-center text-lg text-white/75 mb-8">
          I am always open to discussing new research opportunities, challenging projects, or freelance collaborations in the fields of Building Engineering, Construction Management and Robotics.
        </p>
        
        {/* 
          THIS IS THE NEW CALL TO ACTION.
          It uses our smart <Button> component with an href prop,
          which will render it as a link to your CV.
        */}
        <div className="flex justify-center">
          <Button href="/Saif_Rahman_CV.pdf">
            Download My CV
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactConstruction;