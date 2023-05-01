import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import styled from "styled-components";
import { useFrame } from "@react-three/fiber";

const Container = styled.div`
height:100vh;
width:100%;
scroll-snap-align: center;
`;

const Cube = () => {
    const textRef=useRef();
    useFrame(e=>textRef.current.position.x= Math.sin(e.clock.elapsedTime)*2)
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
