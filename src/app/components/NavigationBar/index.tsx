import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Styles/NavigationBar.css";

interface NavigationBarProps {
  theme: string;
  toggleTheme: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navigationBar">
      <div className="authorName">
        <p className="authorIcon"></p>
        <p className="authorText">Garv Kumar</p>
        <p className="authorRole"> / SOFTWARE DEVELOPER</p>
      </div>

      <div className="nav-controls">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Night Mode">
          {theme === "light" ? (
            <span className="toggle-icon">🌙</span>
          ) : (
            <span className="toggle-icon">☀️</span>
          )}
        </button>

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
