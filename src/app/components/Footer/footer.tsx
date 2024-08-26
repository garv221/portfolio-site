import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "15vh",
        backgroundColor: "white",
        margin: "35px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          height: "100%",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <p>
          © 2024 by Garv Kumar.
          <br />
          Copyright Reserved.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "20px",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bolder" }}>Call</p>
          <p style={{ margin: "0px" }}>123-456-7890</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bolder" }}>Write</p>
          <p style={{ margin: "0px" }}>info@mysite.com</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bolder" }}>Follow</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <img
              src={facebookIcon}
              alt="facebook"
              style={{
                width: "20px",
                height: "17px",
              }}
            />
            <img
              src={twitterIcon}
              alt="twitter"
              style={{
                width: "20px",
                height: "20px",
              }}
            />
            <img
              src={linkedinIcon}
              alt="linkedin"
              style={{
                width: "17px",
                height: "18px",
              }}
            />
            <img
              src={instagramIcon}
              alt="instagram"
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
