import React from "react";
import { iconUrlFromCode } from "../api/weatherService";
import { Divider, Spin, ConfigProvider } from "antd";
import "./CityPage.css";
import { useFetchForecast } from "./../hooks/useFetachForecast";

const HourlyForecast = ({ city }) => {
  const { loading, forecastData } = useFetchForecast(city);

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
