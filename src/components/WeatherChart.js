import React, { useState, useEffect } from "react";
import { fetchWeatherForecast } from "../api/api";

const WeatherChart = (city) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherForecast(city);
      setForecastData(data);
    };
    fetchData();
  }, [city]);

  if (!forecastData) return null;

  return <div>WeatherChart</div>;
};

export default WeatherChart;
