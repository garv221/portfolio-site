import React from "react";
import "./Styles/card.css";

const Card = () => {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "100%",
          paddingTop: "50px",
          paddingLeft: "30px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color: "#0050ff",
          }}
        >
          2019 - Present
        </div>
        <div>JOB POSITION</div>
        <div>Company Name</div>
        <div>Company Location</div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
