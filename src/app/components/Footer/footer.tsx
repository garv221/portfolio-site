import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter-x.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import "./Styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copy-right">
        <p className="copy-right-text">
          © 2024 by Garv Kumar.
          <br />
          Copyright Reserved.
        </p>
      </div>
      <div className="contact-info">
        <div className="contact-info-column">
          <p className="contact-info-title">Call</p>
          <p className="contact-info-detail">123-456-7890</p>
        </div>

        <div className="contact-info-column">
          <p className="contact-info-title">Write</p>
          <p className="contact-info-detail">info@mysite.com</p>
        </div>

        <div className="contact-info-column">
          <p className="contact-info-title">Follow</p>
          <div className="social-media">
            <img src={facebookIcon} alt="facebook" className="facebook-icon" />
            <img src={twitterIcon} alt="twitter-x" className="twitter-icon" />
            <img src={linkedinIcon} alt="linkedin" className="linkedin-icon" />
            <img
              src={instagramIcon}
              alt="instagram"
              className="instagram-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
