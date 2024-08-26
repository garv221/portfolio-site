import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles/NavigationBar.css"; // Import the CSS file

const NavigationBar = () => {
  return (
    <div className="navigationBar">
      <div className="authorName">
        <p className="authorIcon"></p>
        <p className="authorText">Garv Kumar</p>
        <p className="authorRole"> / SOFTWARE DEVELOPER</p>
      </div>
      <div className="links">
        {["/", "/resume", "/projects", "/contact"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          >
            {path.slice(1).toUpperCase() || "ABOUT ME"}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
