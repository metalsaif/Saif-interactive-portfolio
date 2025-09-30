/// src/components/Scene/RobotModel.js
'use client';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Scene = () => {
  const modelRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const { scene } = useGLTF('/3d_model/robotic_arm_kuka/scene.gltf');


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This useFrame hook re-enables the rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scrollY / 800; // A slow, subtle rotation
    }
  });

  return (
    <>
      {/* Production-ready lighting */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <pointLight position={[-10, -5, -10]} intensity={1} />
      
      <group ref={modelRef}>
        {/* 
          THESE ARE YOUR EXACT NUMBERS, PRESERVED.
          I have not changed them.
        */}
        <primitive 
          object={scene} 
          scale={1.30} 
          position={[-400, -500, 0]} 
          rotation={[0, 0, 0]} 
        />
      </group>

      {/* The <OrbitControls /> have been removed for the final version. */}
    </>
  );
};


const RobotModel = () => {
  return (
    // We are restoring YOUR CORRECT camera settings for this model.
    <Canvas camera={{ position: [800, 800, -800], fov: 50, near: 0.1, far: 10000 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default RobotModel;