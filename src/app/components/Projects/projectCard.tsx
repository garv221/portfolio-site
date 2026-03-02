import React from "react";
import "./Styles/projectCard.css";
import projectIcon from "../../assets/project.png";

interface Project {
  title: string;
  start_date: string;
  end_date: string;
  technologies_used: string[];
  description: string;
  github_link?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="projectCard">
      <div className="projectCard-content">
        <div className="projectCard-header">
          <div className="projectCard-accent"></div>
          <div className="projectCard-info">
            <div className="projectCard-name">{project.title}</div>
            <div className="projectCard-date">
              {project.start_date} – {project.end_date}
            </div>
          </div>
        </div>

        <div className="projectCard-technologies">
          {project.technologies_used.map((tech, index) => (
            <span key={index} className="projectCard-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="projectCard-description">{project.description}</p>

        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard-github-link"
          >
            View on GitHub →
          </a>
        )}
      </div>

      <img
        src={project.image || projectIcon}
        alt={project.title}
        className="projectCard-image"
      />
    </div>
  );
};

export default ProjectCard;
