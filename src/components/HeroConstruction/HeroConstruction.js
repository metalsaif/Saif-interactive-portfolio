// src/components/HeroConstruction/HeroConstruction.js
import React from 'react';
import { SectionText, SectionTitle, Button } from '../../styles/GlobalComponents';

const HeroConstruction = () => (
  <>
    {/* The main title remains your name */}
    <SectionTitle main>
      Saif Rahman
    </SectionTitle>
    
    {/* THIS IS THE NEW, TARGETED SUBTITLE */}
    {/* =================================== */}
    <SectionText>
      Building Engineering & BIM | Automation & Construction Robotics
    </SectionText>
    {/* =================================== */}

    <Button href="/Saif_Rahman_CV.pdf">
      Download CV
    </Button>
  </>
);

export default HeroConstruction;