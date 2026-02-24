import React from "react";
import "./Styles/card.css";

const Card = ({ experience }: any) => {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-year">{experience?.start_year} - {experience?.end_year}</div>
        <div className="card-title">{experience?.title}</div>
        <div className="card-company">{experience?.company}</div>
        <div className="card-location">{experience?.location}</div>
      </div>
      <div className="card-right">
        {experience?.description}
      </div>
    </div>
  );
};

export default Card;
