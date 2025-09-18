// src/components/Scene/ComputerModel.js
'use client';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// This is the new child component that contains all the hooks and logic.
// It can now safely use useFrame, useGLTF, etc., because it will be rendered INSIDE the Canvas.
const Scene = () => {
  const modelRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  // Load the model
  const { scene } = useGLTF('/3d_model/gaming_setup/scene.gltf');

  // Set up the scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate the model on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scrollY / 500;
    }
  });

  return (
    // This is the content of our scene
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -10]} intensity={2} />

      <group ref={modelRef}>
        <primitive object={scene} scale={30} position={[1.65, -1.2, 0]} />
      </group>
    </>
  );
};

// This is the main component that we will export.
// Its ONLY job is to render the Canvas and the Scene inside it.
const ComputerModel = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 30 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModel;