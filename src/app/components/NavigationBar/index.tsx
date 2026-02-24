import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Styles/NavigationBar.css";

const NavigationBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div className={`navigationBar ${isMainPage ? "main-page-nav" : ""}`}>
      <div className="authorName" style={{ visibility: isMainPage ? 'hidden' : 'visible' }}>
        <p className="authorIcon"></p>
        <p className="authorText">Garv Kumar</p>
        <p className="authorRole"> / SOFTWARE DEVELOPER</p>
      </div>

      <div className="nav-controls">
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`links ${menuOpen ? "links-open" : ""}`}>
        {["/", "/resume", "/projects", "/contact"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
            onClick={() => setMenuOpen(false)}
          >
            {path.slice(1).toUpperCase() || "ABOUT ME"}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
