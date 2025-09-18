// src/components/Hero/Hero.js
import React from 'react';

// We only import the content components now, not the layout ones.
import { SectionText, SectionTitle, Button } from '../../styles/GlobalComponents';

const Hero = () => (
  // We use a React Fragment (<>) which adds no extra divs or styles.
  <>
    <SectionTitle main>
      Saif Rahman
    </SectionTitle>
    <SectionText>
      Front-End Engineer | Building High-Performance Web Applications
    </SectionText>
    <Button>Contact Me</Button>
  </>
);

export default Hero;