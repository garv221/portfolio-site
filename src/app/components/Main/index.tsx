import { Navigate, Route, Routes } from "react-router-dom";
import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import profileIcon from "../../assets/profile.svg";

const Main = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#e6dace",
            width: "40%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            width: "60%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45vh",
            height: "60vh",
            position: "absolute",
            top: "22%",
            left: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "88%",
              backgroundColor: "#f5ece6",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingBottom: "30px",
              paddingTop: "30px",
            }}
          >
            <img
              src={profileIcon}
              alt="profile"
              style={{
                width: "190px",
                height: "190px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#2e2e2e",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                }}
              >
                Garv
              </div>
              <div
                style={{
                  alignItems: "center",
                }}
              >
                Kumar
              </div>
            </div>

            <line
              style={{
                width: "17%",
                height: "2px",
                backgroundColor: "#0050ff",
                margin: "10px 0",
              }}
            />

            <div
              style={{
                fontSize: "15px",
                color: "#2e2e2e",
                alignItems: "center",
              }}
            >
              SOFTWARE DEVELOPER
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "12%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <img
              src={facebookIcon}
              alt="facebook"
              style={{
                width: "25px",
                height: "20px",
              }}
            />
            <img
              src={twitterIcon}
              alt="twitter"
              style={{
                width: "22px",
                height: "22px",
              }}
            />
            <img
              src={linkedinIcon}
              alt="linkedin"
              style={{
                width: "19px",
                height: "20px",
              }}
            />
            <img
              src={instagramIcon}
              alt="instagram"
              style={{
                width: "20px",
                height: "24px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45vh",
            height: "60vh",
            position: "absolute",
            top: "22%",
            left: "45%",
            paddingLeft: "30px",
            paddingTop: "20px",
            gap: "30px",
          }}
        >
          <div
            style={{
              fontSize: "100px",
              fontWeight: "bolder",
              color: "#2e2e2e",
            }}
          >
            Hello
          </div>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
              color: "#2e2e2e",
            }}
          >
            Here's who I am & what I do
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <button
              style={{
                backgroundColor: "#0050ff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "20px",
                width: "120px",
                height: "35px",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
              onClick={() => {
                window.location.href = "/resume";
              }}
            >
              RESUME
            </button>
            <button
              style={{
                border: "1px solid",
                padding: "10px 20px",
                borderRadius: "20px",
                width: "120px",
                backgroundColor: "white",
                height: "35px",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
              onClick={() => {
                window.location.href = "/projects";
              }}
            >
              PROJECTS
            </button>
          </div>
          <div
            style={{
              fontSize: "17px",
              fontWeight: "200",
              color: "#2e2e2e",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              paddingTop: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            lacinia turpis. Sed lacinia, ligula et facilisis tincidunt, ex dui
            semper dui, id mollis mauris enim nec orci. Etiam vulputate augue
            sit amet bibendum interdum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
