import React from "react";
import "./CityPage.css";
import cloudImage from "../assets/cloud.png";
import clearImage from "../assets/clear.png";
import rainImage from "../assets/rain.png";
import drizzleImage from "../assets/drizzle.png";
import windImage from "../assets/wind.png";
import humidityImage from "../assets/humidity.png";

// import WeatherChart from "./WeatherChart";
const CityPage = ({ weatherDetails }) => {
  const mainWeather = weatherDetails.weather[0].main;

  let weatherImage;

  switch (mainWeather) {
    case "Clouds":
      weatherImage = cloudImage;
      break;
    case "Rain":
      weatherImage = rainImage;
      break;
    case "Clear":
      weatherImage = clearImage;
      break;
    case "Drizzle":
      weatherImage = drizzleImage;
      break;
    default:
      weatherImage = null;
      break;
  }

  return (
    <div className="container flex-column">
      <div className="flex-column">
        {weatherImage && (
          <img className="main-weather" src={weatherImage} alt="" />
        )}
        <div className="weather-temp">
          {Math.floor(weatherDetails.main.temp)}°C
        </div>
        <div className="weather-location">{weatherDetails.name}</div>
        <p>Description: {weatherDetails.weather[0].description}</p>
      </div>
      <div className="flex-between">
        <div className="flex-row">
          <img className="small-icons" src={windImage} alt="" />
          <div className="flex-column">
            <span className="font-big"> {weatherDetails.wind.speed} m/s</span>
            <span className="font-small">Wind</span>
          </div>
        </div>
        <div className="flex-row">
          <img className="small-icons" src={humidityImage} alt="" />
          <div className="flex-column">
            <span className="font-big">{weatherDetails.main.humidity} %</span>
            <span className="font-small">Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
