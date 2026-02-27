import "./Styles/card.css";
import javaIcon from "../../assets/java.png";
import springIcon from "../../assets/Spring.svg";
import temporalIcon from "../../assets/temporal.svg";
import kafkaIcon from "../../assets/kafka.svg";
import grpcIcon from "../../assets/grpc.svg";
import rubyIcon from "../../assets/ruby.webp";
import jsIcon from "../../assets/js.png";
import tsIcon from "../../assets/typescript.png";
import reactIcon from "../../assets/react.webp";
import postgresIcon from "../../assets/postgre.png";

type Technology = {
  name: string;
  icon?: string;
};

const technologies: Technology[] = [
  { name: "Java", icon: javaIcon },
  { name: "Spring Boot", icon: springIcon },
  { name: "Temporal", icon: temporalIcon },
  { name: "Kafka", icon: kafkaIcon },
  { name: "gRPC", icon: grpcIcon },
  { name: "Ruby", icon: rubyIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "Postgres", icon: postgresIcon },
];

const TechStrip = () => {
  const looped = [...technologies, ...technologies];

  return (
    <div className="tech-strip-section">
      <div className="tech-strip-outer">
        <div className="tech-strip-inner">
          {looped.map((tech, index) =>
            tech.icon ? (
              <div key={`${tech.name}-${index}`} className="tech-pill">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-pill-icon"
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStrip;

