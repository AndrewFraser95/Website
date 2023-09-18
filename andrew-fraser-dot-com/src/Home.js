// src/Home.js
import React from "react";
import { SpaceContainer, Planet } from "./components/StyledComponents";
import AnimatedComponents from "./components/AnimatedComponents";

const Home = () => {
  return (
    <SpaceContainer>
      <h1>Andrew Fraser</h1>
      <AnimatedComponents />
    </SpaceContainer>
  );
};

export default Home;
