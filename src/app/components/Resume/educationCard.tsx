import "./Styles/card.css";

type Education = {
  school: string;
  degree: string;
  major?: string;
  location?: string;
  start_year?: string;
  end_year?: string;
  description?: string;
  image?: string;
};

type EducationCardProps = {
  education: Education;
};

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="card education-card">
      <div className="card-left">
        <div className="card-year">
          {education.start_year} - {education.end_year}
        </div>
        <div className="card-title">{education.degree}</div>
        <div className="card-company">{education.school}</div>
        {education.location && (
          <div className="card-location">{education.location}</div>
        )}
        {education.major && (
          <div className="card-subtitle">{education.major}</div>
        )}
        {education.description && (
          <div className="education-card-description">
            {education.description}
          </div>
        )}
      </div>
      <div className="education-card-image-wrapper">
        {education.image && (
          <img
            src={education.image}
            alt={education.school}
            className="education-card-image"
          />
        )}
      </div>
    </div>
  );
};

export default EducationCard;

