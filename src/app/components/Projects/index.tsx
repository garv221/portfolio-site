import ProjectCard from "./projectCard";
import "./Styles/projectCard.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-section">
        <div className="projects-inner">
          <div className="projects-heading-row">
            <div className="projects-heading-icon"></div>
            <div className="projects-heading-text">Projects</div>
          </div>

          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
