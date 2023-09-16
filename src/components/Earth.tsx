import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

const EarthMesh = () => {
  const fileUrl = "/earth/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader as any, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export const Earth = () => {
  return (
    <div className="h-full">
      <Canvas>
        {/* <OrbitControls /> */}
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <EarthMesh />
      </Canvas>
    </div>
  );
};
