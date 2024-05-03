import { fetchCurrentWeather } from "../api/weatherService";
import { useState, useEffect } from "react";
export function useFetchWeather(city) {
  const [loading, setLoading] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather(city);
        const { weather, main, wind, name, dt, sys } = data;
        setWeatherDetails({ weather, main, wind, name, dt, sys });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  return { loading, weatherDetails };
}
