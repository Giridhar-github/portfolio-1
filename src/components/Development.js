import React from "react";
import Laptop from "./Laptop.jsx";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  @media only screen and (max-width: 768px){
    top:0;
    bottom:100px;
    left:0;
    right:0;
    margin:auto;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Laptop />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We describe a product with a strong focus on both world class design.
      </Desc>
    </>
  );
};

export default Development;
