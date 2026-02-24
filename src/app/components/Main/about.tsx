import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
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
          <img
            src={facebookIcon}
            alt="facebook"
            className="social-icon facebook-icon"
          />
          <img
            src={twitterIcon}
            alt="twitter"
            className="social-icon twitter-icon"
          />
          <img
            src={linkedinIcon}
            alt="linkedin"
            className="social-icon linkedin-icon"
          />
          <img
            src={instagramIcon}
            alt="instagram"
            className="social-icon instagram-icon"
          />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          lacinia turpis. Sed lacinia, ligula et facilisis tincidunt, ex dui
          semper dui, id mollis mauris enim nec orci. Etiam vulputate augue sit
          amet bibendum interdum.
        </div>
      </div>
    </div>
  );
};

export default About;
