import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}° {currentTemperatureUnit}{" "}
      </div>
      <img src={imageSrcUrl} className="weather__image" alt="Weather" />
    </section>
  );
};
export default WeatherCard;
