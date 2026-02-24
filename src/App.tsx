import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./app/components/Main";
import NavigationBar from "./app/components/NavigationBar";
import Footer from "./app/components/Footer/footer";
import Resume from "./app/components/Resume";
import Contact from "./app/components/Contact";
import Projects from "./app/components/Projects";
import SpotlightOverlay from "./app/components/SpotlightOverlay";
import PullCord from "./app/components/PullCord";

const App = () => {
  const [spotlightMode, setSpotlightMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (spotlightMode) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [spotlightMode]);

  const toggleSpotlightMode = () => {
    setSpotlightMode((prev) => !prev);
  };

  return (
    <div>
      <SpotlightOverlay x={mousePosition.x} y={mousePosition.y} isActive={spotlightMode} />
      <PullCord onToggle={toggleSpotlightMode} isActive={spotlightMode} />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main spotlightMode={spotlightMode} toggleSpotlightMode={toggleSpotlightMode} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
