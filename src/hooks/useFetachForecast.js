import {
  fetchWeatherForecast,
  formatTimeFromTimestamp,
} from "../api/weatherService";
import { useState, useEffect } from "react";

export function useFetchForecast(city) {
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

  return { loading, forecastData };
}
