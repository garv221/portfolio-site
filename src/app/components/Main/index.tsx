import { Navigate, Route, Routes } from "react-router-dom";
import About from "./about";
import "./Styles/main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="left-pane"></div>
        <div className="right-pane"></div>
        <About />
      </div>
    </div>
  );
};

export default Main;
