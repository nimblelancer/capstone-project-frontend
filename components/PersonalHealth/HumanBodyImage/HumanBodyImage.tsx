import React, {Suspense} from "react";
// //Import the THREE.js library
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";;
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Image from 'next/image'; // Importing Image component
import ThreeDModelComponent from '../ThreeDModel';
import styles from  './HumanBodyImage.module.css';
function Model() {
  const gltf = useGLTF("/scene.gltf");
  gltf.scene.scale.set(60, 60, 60); // Scale up the model; adjust as needed
  gltf.scene.position.set(0, 0, 0); // Ensure the model is centered
  console.log(gltf);
  return <primitive object={gltf.scene} />;
}

const HumanBodyImage = () => {
  return (
    <div>
      <h1 className={styles.heading}>Disease Diagnosis By AI</h1>
      <h2 className={styles.subHeading}>
        Please choose your hurting part and write all symptoms in popup chat.
        By analyzing symptoms and considering the affected body area, AI can
        provide valuable insights into potential diseases and help healthcare
        professionals make more accurate diagnoses.
      </h2>
      <div style={{ height: 700, width: "100%" }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
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
    </div>
  );
};

export default HumanBodyImage;
