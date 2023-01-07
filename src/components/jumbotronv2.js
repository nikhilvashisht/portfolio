import React, { useRef, useUpdate, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ConeGeometry } from "three";
import { GradientTexture } from "@react-three/drei";

const PointSphere = () => {
  function setPoints(radius) {
    var v = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(radius * 2),
      THREE.MathUtils.randFloatSpread(radius * 2),
      THREE.MathUtils.randFloatSpread(radius * 2)
    );
    if (v.length() > radius) {
      return setPoints(radius);
    }

    return v;
  }

  let positions = [];

  for (let i = 0; i < 100; i++) {
    let v = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(2000),
      THREE.MathUtils.randFloatSpread(2000),
      THREE.MathUtils.randFloatSpread(2000)
    );
    positions.push(v);
  }

  let final = new Float32Array(positions);
};

const Cone = () => {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.01;
  });

  const fragmentShader = `
  varying vec2 vUv;

  vec3 colorA = vec3(0.988,0.349,0.996);
  vec3 colorB = vec3(0.984,0.254,0.462);

  void main() {
    // "Normalizing" with an arbitrary value
    // We'll see a cleaner technique later :)
    vec2 normalizedPixel = gl_FragCoord.xy/600.0;
    vec3 color = mix(colorA, colorB, normalizedPixel.x);

    gl_FragColor = vec4(color,1.0);
  }
  `;

  const vertexShader = `

  void main() {
      // vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      // modelPosition.z += sin(modelPosition.x * 4.0 + u_time*2.0) * 0.5;
      // modelPosition.y += sin(modelPosition.x * 4.0 + u_time*2.0) * 0.5;

      // vec4 viewPosition = viewMatrix * modelPosition;
      // vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }
  `;

  return (
    <mesh ref={ref}>
      <coneGeometry args={[2, 3, 5]} />
      <meshBasicMaterial>
        <GradientTexture stops={[0, 1]} colors={["#FC59FE", "#fb4176"]} />
      </meshBasicMaterial>
      {/* <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      /> */}
    </mesh>
  );
};

const Blob = () => {
  const mesh = useRef();

  const fragmentShader = `
  varying vec2 vUv;

  vec3 colorA = vec3(0.988,0.349,0.996);
  vec3 colorB = vec3(0.984,0.254,0.462);

  void main() {
    // "Normalizing" with an arbitrary value
    // We'll see a cleaner technique later :)
    vec2 normalizedPixel = gl_FragCoord.xy/600.0;
    vec3 color = mix(colorA, colorB, normalizedPixel.x);

    gl_FragColor = vec4(color,1.0);
  }
  `;

  const vertexShader = `
  uniform float u_time;

  void main() {

      gl_PointSize = 5.0;

      // vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      // modelPosition.z += sin(modelPosition.x * 4.0 + u_time*2.0) * 0.5;
      // modelPosition.y += sin(modelPosition.x * 4.0 + u_time*2.0) * 0.5;

      // vec4 viewPosition = viewMatrix * modelPosition;
      // vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }
  `;

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 1.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[7, 40, 40]} />
      <pointsMaterial size={5} transparent={1.0} color={0xffffff} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent={1.0}
        size={1.0}
      />
    </mesh>
  );
};

const Jumbotron2 = () => {
  return (
    <div className="flex mx-10 relative h-screen">
      <div className="text-8xl mt-32">
        <h1>Hi!</h1>
        <h1>I'm Nikhil</h1>
      </div>
      {/* some animation */}
      <div className="mt-20 absolute right-0 h-2/3 w-2/4">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <spotLight position={[0, 10, 0]} />
          <Cone />
        </Canvas>
      </div>
    </div>
  );
};

export default Jumbotron2;
