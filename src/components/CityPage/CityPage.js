import React from "react";
import "./CityPage.css";
import { formatTimeFromTimestamp } from "../../api/weatherService";
import { useDynamicImages } from "../../hooks/useDynamicImages";

const CityPage = ({ weatherDetails }) => {
  const mainWeather = weatherDetails.weather[0].main;
  const { weatherImage, sunset, sunrise, humidity, temperature, wind } =
    useDynamicImages(mainWeather);

  return (
    <div className="container flex-column">
      <div className="flex-column">
        <img className="main-weather" src={weatherImage} alt="" />
        <div className="weather-temp">
          {`${weatherDetails.main.temp.toFixed(0)}`}°C
        </div>
        <div className="weather-location">{weatherDetails.name}</div>
        <p> {weatherDetails.weather[0].description}</p>
      </div>
      <div className="flex-evenly">
        <div className="flex-row">
          <img src={wind} className="small-icons" alt="" />
          <div className="flex-column">
            <span className="font-big">{weatherDetails.wind.speed} m/s</span>
            <span className="font-small">Wind</span>
          </div>
        </div>
        <div className="flex-row">
          <img src={temperature} className="small-icons" alt="" />
          <div className="flex-column">
            <span className="font-big">
              {`${weatherDetails.main.temp.toFixed(0)}`} °C
            </span>
            <span className="font-small">Feels like</span>
          </div>
        </div>
        <div className="flex-row">
          <img src={humidity} className="small-icons" alt="" />
          <div className="flex-column">
            <span className="font-big">{weatherDetails.main.humidity} %</span>
            <span className="font-small">Humidity</span>
          </div>
        </div>
      </div>
      <div className="flex-around">
        <div className="flex-row">
          <img src={sunrise} className="small-icons" alt="" />
          <span className="font-small">
            Sunrise: {formatTimeFromTimestamp(weatherDetails.sys.sunrise)}
            AM
          </span>
        </div>
        <div className="flex-row">
          <img src={sunset} className="small-icons" alt="" />
          <span className="font-small">
            Sunset: {formatTimeFromTimestamp(weatherDetails.sys.sunset)} PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
