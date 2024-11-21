"use client";
import { useState, Suspense } from "react";
import {
  OrbitControls,
  Environment,
  Center,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Yogamat from "./YogaMat";

const CanvasModel = () => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="w-full h-full">
      <Canvas
        style={{ width: 500, height: 500 }}
        className="w-full h-full"
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 2]} />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[1, 2, 3]}
          intensity={2}
          castShadow
          shadow-mapSize={2048}
        />
        <spotLight
          position={[-1, 1, 1]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />

        <OrbitControls
          rotateSpeed={0.5}
          onStart={() => setIsRotating(true)}
          onEnd={() => setIsRotating(false)}
        />

        <Suspense fallback={null}>
          <Center>
            <Yogamat isRotating={isRotating} />
          </Center>
        </Suspense>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default CanvasModel;
