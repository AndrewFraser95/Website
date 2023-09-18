// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Home");
  };

  return (
    <div>
      <h1>About Me</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default AboutMe;
