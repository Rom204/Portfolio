import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const AvatarModel = () => {
  const fileUrl = "/avatar/avatar_animations.glb";
  const mesh = useRef<Mesh>(null!);
  const avatar = useLoader(GLTFLoader as any, fileUrl);
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  useEffect(() => {
    actions?.backflip?.play();
  }, []);
  return (
    <mesh ref={mesh}>
      <primitive object={avatar.scene} scale={3} position-y={-2}
      rotation-x={0.1}
      rotation-y={0}
      />
    </mesh>
  );
};

export const Avatar = () => {
  return (
    <Canvas>
      {/* <OrbitControls/> */}
      <ambientLight intensity={2} />
      <pointLight position={[1, 1, 1]} />
      <AvatarModel />
    </Canvas>
  );
};
