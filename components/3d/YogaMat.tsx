"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface YogamatProps {
  isRotating: boolean;
}

const Yogamat = ({ isRotating }: YogamatProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF("/yogaMat.glb");

  useFrame((state, delta) => {
    if (meshRef.current && !isRotating) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      dispose={null}
      //@ts-ignore
      geometry={nodes.mesh_0.geometry}
      //@ts-ignore
      material={nodes.mesh_0.material}
    ></mesh>
  );
};

export default Yogamat;
