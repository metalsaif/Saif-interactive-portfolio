// src/components/IconMorph/IconMorph.js
'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// 1. This is the new, correct import path for the plugin
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';

// 2. We need to tell Next.js not to try and server-render this browser-specific plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(MorphSVGPlugin);
}

// 3. These are the correct, hardcoded SVG paths
const paths = {
  hardHat: "M384 328L384 128C384 110.3 369.7 96 352 96L288 96C270.3 96 256 110.3 256 128L256 328C256 341.3 245.3 352 232 352C218.7 352 208 341.3 208 328L208 142.1C122 173.8 64 255.8 64 352L64 416L576 416L576 352C575 256.8 517.6 174.3 432 142.2L432 328C432 341.3 421.3 352 408 352C394.7 352 384 341.3 384 328zM72 464C49.9 464 32 481.9 32 504C32 526.1 49.9 544 72 544L568 544C590.1 544 608 526.1 608 504C608 481.9 590.1 464 568 464L72 464z",
  code: "M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"
};

const IconMorph = ({ isConstructionPage }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      // The "from" path is the SHAPE IT'S COMING FROM (the opposite of the current page).
      const fromPath = isConstructionPage ? paths.code : paths.hardHat;
      
      // The "to" path is the SHAPE IT'S GOING TO (the shape for the current page).
      const toPath = isConstructionPage ? paths.hardHat : paths.code;

      // Use gsap.fromTo() to take immediate control and prevent any flickering.
      gsap.fromTo(pathRef.current, 
        { morphSVG: fromPath }, 
        { morphSVG: toPath, duration: 1, ease: 'power3.inOut' }
      );
    }
  }, [isConstructionPage]);

  // We set the initial shape ONCE to prevent a flash on the very first page load.
  const initialPath = isConstructionPage ? paths.hardHat : paths.code;

  return (
    <div className="text-orange-400">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512" // This is the correct viewBox for these icons.
        height="2.5rem"
        width="2.5rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path ref={pathRef} d={initialPath}></path>
      </svg>
    </div>
  );
};

export default IconMorph;