import React, { useState } from "react";
import "../styles/ShipButton.css";
import { useNavigate } from "react-router-dom";

const ShipButton = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      navigate("/ContactMe");
    }, 2000); // Reset launch animation after 2 seconds
  };

  return (
    <button
      className={`ship-button ${isLaunching ? "active" : ""}`}
      onClick={handleLaunch}
    >
      Contact me
    </button>
  );
};

export default ShipButton;
