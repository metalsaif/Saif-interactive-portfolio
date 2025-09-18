// src/components/NavDropDown/NavDropDown.js
import React from 'react';
import { AiOutlineStock, AiOutlineTeam } from 'react-icons/ai';

// Dummy data for demonstration purposes, as it wasn't in the original files
const dropDownData = [
  { title: "Project 1", description: "A short description of this project.", icon: <AiOutlineStock size="2rem" /> },
  { title: "Project 2", description: "Another interesting project link.", icon: <AiOutlineTeam size="2rem" /> },
  { title: "Project 3", description: "The third and final project link.", icon: <AiOutlineStock size="2rem" /> },
];

// The component takes an 'active' prop to control its visibility
const NavDropDown = ({ active }) => (
  // This is the old <DropDownContainer>
  <div
    className={`
      absolute flex flex-col right-[-25%] top-[40px] md:top-[32px] sm:top-[24px]
      w-[280px] bg-white rounded-lg z-[100] py-1 cursor-default overflow-hidden
      transition-all duration-300 ease-in-out origin-top
      ${active ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-30'}
    `}
  >
    {dropDownData.map((item, index) => (
      // This is the old <DropDownItem>
      <a
        key={index}
        href="#" // Replace with actual links
        className="
          w-full flex items-start cursor-pointer transition-all duration-300 ease-in-out py-3 px-4
          hover:scale-105 hover:bg-gray-100
          hover:shadow-[0_3px_6px_3px_rgba(0,0,0,.15)]
          even:hover:shadow-[0_0_8px_4px_rgba(0,0,0,.15)]
          [&:nth-of-type(3n):hover]:shadow-[0_-3px_6px_3px_rgba(0,0,0,.15)]
        "
      >
        {/* This is the old <DropDownIcon> */}
        <div className="w-8 h-8 mr-4 text-black">
          {item.icon}
        </div>
        {/* This is the old <DropDownTextContainer> */}
        <div className="flex flex-col">
          {/* This is the old <DropDownItemTitle> */}
          <h2 className="text-gray-900 text-lg leading-[26px] text-left">
            {item.title}
          </h2>
          {/* This is the old <DropDownItemDesc> */}
          <p className="text-gray-900/50 text-sm leading-[22px] text-left">
            {item.description}
          </p>
        </div>
      </a>
    ))}
  </div>
);

export default NavDropDown;