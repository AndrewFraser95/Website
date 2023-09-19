import React, { useState } from "react";
import "../styles/SpaceButton.css";
import { useNavigate } from "react-router-dom";

const SpaceButton = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      navigate("/AboutMe");
    }, 2000); // Reset launch animation after 2 seconds
  };

  return (
    <button
      className={`space-button ${isLaunching ? "active" : ""}`}
      onClick={handleLaunch}
    >
      About me
    </button>
  );
};

export default SpaceButton;
