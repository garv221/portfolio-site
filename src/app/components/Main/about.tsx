import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter-x.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import profileIcon from "../../assets/profile.svg";
import "./Styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left-pane">
        <div className="left-container">
          <img src={profileIcon} alt="profile" className="profile-icon" />
          <div className="name-container">
            <div className="name">Garv</div>
            <div className="name">Kumar</div>
          </div>

          <line className="line" />

          <div className="title">SOFTWARE DEVELOPER</div>
        </div>
        <div className="social-container">
          <a
            href="https://www.facebook.com/people/Garv-Kumar/pfbid0Vg1aJKaUADEKdogvtF48qmSeYtn45xQNYB5nir1bJeSkh8MJyBjKDtgNNJJf5USol/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebookIcon}
              alt="facebook"
              className="social-icon facebook-icon"
            />
          </a>
          <a
            href="https://x.com/im_garvk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitterIcon}
              alt="twitter-x"
              className="social-icon twitter-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/garv-kumar/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="linkedin"
              className="social-icon linkedin-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/im_garvk/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagramIcon}
              alt="instagram"
              className="social-icon instagram-icon"
            />
          </a>
        </div>
      </div>

      <div className="about-right-pane">
        <div className="greeting-heading">Hello</div>
        <div className="greeting-subheading">Here's who I am & what I do</div>
        <div className="button-container">
          <button
            className="resume-button"
            onClick={() => {
              window.location.href = "/resume";
            }}
          >
            RESUME
          </button>
          <button
            className="projects-button"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            PROJECTS
          </button>
        </div>
        <div className="description">
          I&apos;m a software developer focused on building reliable backend systems,
          APIs and data pipelines that power real products. I currently work on
          high-scale lending integrations at Yubi, using Java, Spring Boot, Kafka,
          gRPC and Temporal to ship resilient services.
        </div>
      </div>
    </div>
  );
};

export default About;
