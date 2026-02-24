
import About from "./about";
import "./Styles/main.css";

interface MainProps {
  spotlightMode: boolean;
  toggleSpotlightMode: () => void;
}

const Main: React.FC<MainProps> = ({ spotlightMode, toggleSpotlightMode }) => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="left-pane"></div>
        <div className="right-pane"></div>
        <About />
      </div>
    </div>
  );
};

export default Main;
