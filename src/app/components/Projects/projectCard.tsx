import React from "react";
import "./Styles/projectCard.css";
import projectIcon from "../../assets/project.png";

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <div className="projectCard-content">
        <div className="projectCard-header">
          <div className="projectCard-accent"></div>
          <div className="projectCard-info">
            <div className="projectCard-name">Project name 01</div>
            <div className="projectCard-role">Role Title</div>
          </div>
        </div>

        <p className="projectCard-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          lacinia turpis. Sed lacinia, ligula et facilisis tincidunt, ex dui
          semper dui, id mollis mauris enim nec orci. Etiam vulputate augue sit
          amet bibendum interdum. Vivamus faucibus ultrices vestibulum.
        </p>
      </div>

      <img
        src={projectIcon}
        alt="project"
        className="projectCard-image"
      />
    </div>
  );
};

export default ProjectCard;
