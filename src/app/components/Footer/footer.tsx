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
          © 2026 by Garv Kumar.
          <br />
          Copyright Reserved.
        </p>
      </div>
      <div className="contact-info">
        <div className="contact-info-column">
          <p className="contact-info-title">Call</p>
          <p className="contact-info-detail">+91-8920923650</p>
        </div>

        <div className="contact-info-column">
          <p className="contact-info-title">Write</p>
          <p className="contact-info-detail">garv18chauhan@gmail.com</p>
        </div>

        <div className="contact-info-column">
          <p className="contact-info-title">Follow</p>
          <div className="social-media">
            <a
              href="https://www.facebook.com/people/Garv-Kumar/pfbid0Vg1aJKaUADEKdogvtF48qmSeYtn45xQNYB5nir1bJeSkh8MJyBjKDtgNNJJf5USol/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="facebook" className="facebook-icon" />
            </a>
            <a
              href="https://x.com/im_garvk"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="twitter-x" className="twitter-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/garv-kumar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="linkedin" className="linkedin-icon" />
            </a>
            <a
              href="https://www.instagram.com/im_garvk/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagramIcon}
                alt="instagram"
                className="instagram-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
