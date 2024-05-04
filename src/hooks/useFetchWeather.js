import { fetchData } from "../api/weatherService";
import { useState, useEffect } from "react";
export function useFetchWeather(city) {
  const [loading, setLoading] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await fetchData(city, "weather");
        const { weather, main, wind, name, dt, sys } = data;
        setWeatherDetails({ weather, main, wind, name, dt, sys });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [city]);

  return { loading, weatherDetails };
}
