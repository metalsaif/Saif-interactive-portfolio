// src/app/page.js
'use client';

import Acomplishments from "../components/Acomplishments/Acomplishments";
import BackgroundAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Section } from "../styles/GlobalComponents";
import Contact from "../components/Contact/Contact"; 
import ComputerModel from "../components/Scene/ComputerModel";

export default function Home() {
  return (
    <>
       <Section className="grid md:grid-cols-2 gap-8 h-[550px] py-8">
        {/* Left Column: Hero Text */}
        <div className="relative z-10 flex flex-col justify-center items-start">
          <Hero />
        </div>
        
        {/* Right Column: 3D Model */}
        <div className="relative z-20 hidden md:block">
          <ComputerModel />
        </div>
        
        {/* The background animation stays in the background */}
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <BackgroundAnimation />
        </div>
      </Section>
      
      <Section className="py-8 bg-background-1">
        <Projects />
      </Section>
      <Section className="py-8 bg-background-1">
        <Technologies />
      </Section>
      <Section className="py-8 bg-background-1">
        <Timeline />
      </Section>
      <Section className="py-8 bg-background-1">
        <Acomplishments />
      </Section>
      <Section className="py-8 bg-background-1">
        <Contact />
      </Section>
    </>
  );
};