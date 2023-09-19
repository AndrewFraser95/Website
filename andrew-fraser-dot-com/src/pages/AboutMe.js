import React from "react";
import { SpaceContainer } from "../components/StyledComponents";
import AnimatedComponents from "../components/AnimatedComponents";
import { useNavigate } from "react-router-dom";
import "../styles/Page.css";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Home");
  };

  return (
    <SpaceContainer>
      <h1>About Me</h1>
      <button className="previous-button" onClick={handleClick}>
        Go to Home
      </button>
      <AnimatedComponents />
    </SpaceContainer>
  );
};

export default AboutMe;
