import { sample_experience } from "../../constants/experience";
import Card from "./card";
import SkillCard from "./skillCard";
import "./Styles/card.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-section">
        <div className="resume-inner">
          <div className="resume-heading-row">
            <div className="resume-heading-icon"></div>
            <div className="resume-heading-text">Resume</div>
          </div>

          <div className="resume-subheading-row">
            <div className="resume-subheading-text">Experience</div>
            <button className="download-cv-button">DOWNLOAD</button>
          </div>

          {sample_experience.map((experience) => (
            <div className="resume-card-wrapper">
              <Card experience={experience} />
              <br />
            </div>
          ))}

          <div className="resume-subheading-row" style={{ marginTop: "60px" }}>
            <div className="resume-subheading-text">Education</div>
          </div>

          {sample_experience.map((experience) => (
            <div className="resume-card-wrapper">
              <Card experience={experience} />
              <br />
            </div>
          ))}

          <SkillCard />
        </div>
      </div>
    </div>
  );
};

export default Resume;
