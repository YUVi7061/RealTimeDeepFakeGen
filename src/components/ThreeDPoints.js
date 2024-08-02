import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Points = () => {
  const ref = useRef();
  const points = new Array(1000).fill().map(() => ({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(2),
    z: THREE.MathUtils.randFloatSpread(2),
  }));

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={new Float32Array(points.flatMap(point => [point.x, point.y, point.z]))}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" color="white" size={0.05} />
    </points>
  );
};

const ThreeDPoints = () => (
  <Canvas>
    <OrbitControls />
    <ambientLight />
    <Points />
  </Canvas>
);

export default ThreeDPoints;
