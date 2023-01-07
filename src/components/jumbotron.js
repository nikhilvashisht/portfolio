import React, { useRef, useUpdate } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

// const Box = (props) => {
//   return (
//     <group ref={boxRef}>
//       <mesh>
//         {/* <boxBufferGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color={"black"} /> */}
//         <geometry />
//         <material />
//       </mesh>
//     </group>
//   );
// };

const Origin = () => {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y += 0.03;
    // ref.current.rotation.z += 0.1;
  });

  return (
    <mesh>
      <boxGeometry args={[0, 0, 0]} />
      <meshStandardMaterial color={"white"} />
      <Text scale={[100, 100, 100]} color="black">
        {" "}
        Hi, I'm Nikhil{" "}
      </Text>
      <mesh ref={ref}>
        <mesh position={[-33, 0, -55]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"black"} />
        </mesh>
        <mesh position={[2, 8, 40]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[10, -3, 40]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, 20, -43]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[15, 10, 40]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[25, 20, -40]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, 15, 50]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, 15, 50]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, 15, -50]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[-5, 25, -32]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, -15, 35]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, -15, 35]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[5, -15, 35]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[30, -20, -45]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[30, -20, -45]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[-35, -20, -15]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[-20, -22, -35]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[-22, -20, -45]}>
          <boxGeometry args={[5, 2, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </mesh>
    </mesh>
  );
};

const Jumbotron = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 100] }}>
        <ambientLight />
        <Origin />
      </Canvas>
    </div>
  );
};

export default Jumbotron;
