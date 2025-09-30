// src/components/Scene/ComputerModel.js
'use client';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Scene = () => {
  const modelRef = useRef();
  const [scrollY, setScrollY] = useState(0);
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

const ComputerModel = () => {
  return (
    // We are restoring YOUR CORRECT camera settings for this model.
    <Canvas camera={{ position: [0, 5, 10], fov: 30 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModel;