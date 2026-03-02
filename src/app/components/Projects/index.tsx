import ProjectCard from "./projectCard";
import "./Styles/projectCard.css";
import { sample_projects } from "../../constants/projects";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-section">
        <div className="projects-inner">
          <div className="projects-heading-row">
            <div className="projects-heading-icon"></div>
            <div className="projects-heading-text">Projects</div>
          </div>

          {sample_projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
