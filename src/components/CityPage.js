import React from "react";
import "./CityPage.css";
import { formatTimeFromTimestamp } from "../api/weatherService";
import HourlyForecast from "./HourlyForecast";
import cloudImage from "../assets/cloud.png";
import clearImage from "../assets/clear.png";
import rainImage from "../assets/rain.png";
import drizzleImage from "../assets/drizzle.png";

import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

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
          {`${weatherDetails.main.temp.toFixed(0)}`}°C
        </div>
        <div className="weather-location">{weatherDetails.name}</div>
        <p> {weatherDetails.weather[0].description}</p>
      </div>
      <div className="flex-evenly">
        <div className="flex-row">
          <UilWind className="small-icons" />
          <div className="flex-column">
            <span className="font-big">{weatherDetails.wind.speed} m/s</span>
            <span className="font-small">Wind</span>
          </div>
        </div>
        <div className="flex-row">
          <UilTemperature className="small-icons" />
          <div className="flex-column">
            <span className="font-big">
              {`${weatherDetails.main.temp.toFixed(0)}`} °C
            </span>
            <span className="font-small">Feel like</span>
          </div>
        </div>
        <div className="flex-row">
          <UilTear className="small-icons" />
          <div className="flex-column">
            <span className="font-big">{weatherDetails.main.humidity} %</span>
            <span className="font-small">Humidity</span>
          </div>
        </div>
      </div>
      <div className="flex-around">
        <div className="flex-row">
          <UilSun className="small-icons" />
          <span className="font-small">
            Sunrise: {formatTimeFromTimestamp(weatherDetails.sys.sunrise)}
            AM
          </span>
        </div>
        <div className="flex-row">
          <UilSunset className="small-icons" />
          <span className="font-small">
            Sunset: {formatTimeFromTimestamp(weatherDetails.sys.sunset)} PM
          </span>
        </div>
      </div>
      <HourlyForecast city={weatherDetails.name} />
    </div>
  );
};

export default CityPage;
