import React, { useState, useEffect } from "react";
import {
  fetchWeatherForecast,
  formatTimeFromTimestamp,
  iconUrlFromCode,
} from "../api/weatherService";
import { Divider, Spin, ConfigProvider } from "antd";
import "./CityPage.css";

const HourlyForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherForecast(city);
        // console.log(data);
        if (data) {
          const formattedWeatherData = data
            .slice(0, 5)
            .map(({ dt, main, weather }) => ({
              dt: formatTimeFromTimestamp(dt),
              main,
              weather,
            }));
          setForecastData(formattedWeatherData);
          // console.log(forecastData);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  if (loading) return <Spin size="large" />;

  if (!forecastData) return null;

  return (
    <div className="box-container">
      <ConfigProvider
        theme={{
          token: {
            colorSplit: "orange",
            colorText: "orange",
          },
        }}
      >
        <Divider orientation="left">HOURLY FORECAST</Divider>
      </ConfigProvider>
      <div className="flex-evenly font-small">
        {forecastData.map((forecast, index) => (
          <div key={index} className="flex-column">
            <span>{forecast.dt}</span>
            <img
              className="small-icons"
              src={iconUrlFromCode(forecast.weather[0].icon)}
              alt=""
            />
            <span>{`${forecast.main.temp.toFixed(0)}`}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
