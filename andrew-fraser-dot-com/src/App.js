// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
