import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";

export default function Render() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}