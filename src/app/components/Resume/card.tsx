import "./Styles/card.css";
import yubiLogo from "../../assets/yubi.png";
import huaweiLogo from "../../assets/huawei.jpg";
import bswLogo from "../../assets/bsw.png";

type CardProps = {
  experience: {
    title?: string;
    company?: string;
    school?: string;
    degree?: string;
    major?: string;
    location?: string;
    start_year?: string;
    end_year?: string;
    description?: string;
  };
};

const Card = ({ experience }: CardProps) => {
  const descriptionLines =
    experience?.description?.split("\n").filter((line) => line.trim().length > 0) ??
    [];

  const displayTitle = experience.title ?? experience.degree;
  const displayCompany = experience.company ?? experience.school;
  const displaySubtitle = experience.major;

  let companyLogo: string | undefined;
  if (experience.company === "Yubi (formerly Credavenue)") {
    companyLogo = yubiLogo;
  } else if (experience.company === "Huawei Technologies") {
    companyLogo = huaweiLogo;
  } else if (experience.company?.includes("Board of Student Welfare")) {
    companyLogo = bswLogo;
  }

  return (
    <div className="card">
      <div className="card-left">
        <div className="card-year">
          {experience?.start_year} - {experience?.end_year}
        </div>
        <div className="card-title">{displayTitle}</div>
        <div className="card-company-row">
          {companyLogo && (
            <img
              src={companyLogo}
              alt={displayCompany}
              className="card-company-logo"
            />
          )}
          <div className="card-company">{displayCompany}</div>
        </div>
        {experience?.location && (
          <div className="card-location">{experience.location}</div>
        )}
        {displaySubtitle && (
          <div className="card-subtitle">{displaySubtitle}</div>
        )}
      </div>
      <div className="card-right">
        {descriptionLines.length > 0 && (
          <ul className="card-description-list">
            {descriptionLines.map((line, index) => (
              <li key={index}>
                {line.replace(/^•\s*/, "")}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
