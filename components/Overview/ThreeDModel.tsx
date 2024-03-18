import React, {
  Suspense,
} from "react";

// //Import the THREE.js library
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
// To allow for importing the .gltf file
// import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Model() {
  const gltf = useGLTF("/scene.gltf");
  gltf.scene.scale.set(60, 60, 60); // Scale up the model; adjust as needed
  gltf.scene.position.set(0, 0, 0); // Ensure the model is centered
  console.log(gltf);
  return <primitive object={gltf.scene} />;
}

const ThreeDModelComponent: React.FC = () => {
  return (
    <div style={{ height: 700, width: "100%" }}>
      <h2>Please chose your hurting part and write all symptoms in popup chat.By analyzing symptoms and considering the affected body area, AI can provide valuable insights into potential diseases and help healthcare professionals make more accurate diagnoses.</h2>
      <Canvas camera={{ position: [0, 0, 10], fov: 10}}>
        <ambientLight intensity={0.8} />
        <OrbitControls />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
          {/* <mesh position={[0, 0, 0]}>
               <boxGeometry args={[1, 1, 1]} />
               <meshStandardMaterial color={'orange'} />
              </mesh> */}
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ThreeDModelComponent;
