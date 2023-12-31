import "./Header.css";
import { Link } from "react-router-dom";
// import { parseWeatherData } from "../../utils/weatherApi";
import logoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ weatherData, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
        </div>
        <div className="header__date-location">
          {currentDate}, {weatherData.name}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__add-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <Link to="/profile" className="header__name">
          Name
        </Link>
        <div>
          <img src={avatarImage} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
