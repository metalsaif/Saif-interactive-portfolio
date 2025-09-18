// src/app/construction/page.js
'use client';

// 1. Import your new RobotModel component
import RobotModel from '../../components/Scene/RobotModel';
import ProfessionalExperience from '../../components/ProfessionalExperience/ProfessionalExperience';
import Education from '../../components/Education/Education';
import BackgroundAnimation from "../../components/BackgrooundAnimation/BackgroundAnimation";
import Visualizations from '../../components/Visualizations/Visualizations';


// ... (and all the other construction-specific component imports)
import FocusConstruction from "../../components/FocusConstruction/FocusConstruction";
import HeroConstruction from "../../components/HeroConstruction/HeroConstruction";
import ProjectsConstruction from "../../components/ProjectsConstruction/ProjectsConstruction";
import SkillsConstruction from "../../components/SkillsConstruction/SkillsConstruction";
import ExperienceConstruction from "../../components/ExperienceConstruction/ExperienceConstruction";
import ContactConstruction from "../../components/ContactConstruction/ContactConstruction";
import { Section } from "../../styles/GlobalComponents";

export default function ConstructionPage() {
  return (
    <>
      {/* THIS IS THE NEW HERO SECTION WITH THE 3D ROBOT */}
      {/* ============================================= */}
      <Section className="grid md:grid-cols-2 gap-8 h-[500px] py-8 ">
        {/* Left Column: Hero Text */}
        <div className="relative z-10 flex flex-col justify-center items-start">
          <HeroConstruction />
        </div>
        
        {/* Right Column: 3D Robot Model */}
        <div className="relative z-10 hidden md:block">
          <RobotModel />
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <BackgroundAnimation />
        </div>
      </Section>
      {/* ============================================= */}

      <Section className="py-8 bg-background-1">
        <Education />
      </Section>

      <Section className="py-8 bg-background-1">
        <ProfessionalExperience />
      </Section>
      

      <Section className="py-8 bg-background-1">
        <SkillsConstruction />
      </Section>

      <Section className="py-8 bg-background-1">
        <Visualizations />
      </Section>
      
      <Section className="py-8 bg-background-1">
        <ProjectsConstruction />
      </Section>
      
      <Section className="py-8 bg-background-1">
        <ExperienceConstruction />
      </Section>
      <Section className="py-8 bg-background-1">
        <FocusConstruction />
      </Section>
      <Section className="py-8 bg-background-1">
        <ContactConstruction />
      </Section>
    </>
  );
};