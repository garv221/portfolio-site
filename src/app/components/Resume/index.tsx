import { experience, education } from "../../constants/experience";
import Card from "./card";
import EducationCard from "./educationCard";
import TechStrip from "./techStrip";
import resumePdf from "../../assets/Garv_s_Resume.pdf";
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
            <a
              href={resumePdf}
              download="Garv_Kumar_Resume.pdf"
              className="download-cv-link"
            >
              <button className="download-cv-button" type="button">
                DOWNLOAD
              </button>
            </a>
          </div>

          {experience.map((experienceItem) => (
            <div key={`${experienceItem.title}-${experienceItem.start_year}`} className="resume-card-wrapper">
              <Card experience={experienceItem} />
              <br />
            </div>
          ))}

          <div className="resume-subheading-row" style={{ marginTop: "60px" }}>
            <div className="resume-subheading-text">Technologies I've Worked With</div>
          </div>

          <TechStrip />

          <div className="resume-subheading-row" style={{ marginTop: "60px" }}>
            <div className="resume-subheading-text">Education</div>
          </div>

          {education.map((educationItem) => (
            <div
              key={`${educationItem.school}-${educationItem.start_year}`}
              className="resume-card-wrapper"
            >
              <EducationCard education={educationItem} />
              <br />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Resume;
