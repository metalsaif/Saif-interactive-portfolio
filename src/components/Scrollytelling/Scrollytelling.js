// src/components/Scrollytelling/Scrollytelling.js
'use client';
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// This is our animated scene
const Scene = () => {
  const lineRef = useRef();
  const dotRef = useRef();

  // Define a simple 3D curve
  const points = [
    [0, 0, 0],
    [0, 2, -5],
    [2, 3, -10],
    [-2, 1, -15],
    [0, 0, -20]
  ];

  // This useEffect sets up the GSAP animation
  useEffect(() => {
    if (dotRef.current) {
      // Create a GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scrollytelling-section", // The ID of our parent section
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // This links the animation directly to the scrollbar
        }
      });

      // Animate the dot's position along the path
      points.forEach((point, index) => {
        if (index > 0) {
          tl.to(dotRef.current.position, {
            x: point[0],
            y: point[1],
            z: point[2],
            duration: 1, // Duration is relative in a scrubbed timeline
            ease: "power1.inOut"
          });
        }
      });
    }
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight intensity={1} />
      {/* The visible line/path */}
      <Line ref={lineRef} points={points} color="cyan" lineWidth={2} />
      {/* The glowing dot that will travel along the path */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="white" emissive="cyan" emissiveIntensity={2} />
      </mesh>
    </>
  );
};

// The main component that renders the Canvas
const Scrollytelling = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Scrollytelling;