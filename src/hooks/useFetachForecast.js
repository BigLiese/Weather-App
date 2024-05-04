import { fetchData, formatTimeFromTimestamp } from "../api/weatherService";
import { useState, useEffect } from "react";

export function useFetchForecast(city) {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const data = await fetchData(city, "forecast");
        console.log(data);
        if (data) {
          const formattedWeatherData = data.list
            .slice(0, 5)
            .map(({ dt, main, weather }) => ({
              dt: formatTimeFromTimestamp(dt),
              main,
              weather,
            }));
          setForecastData(formattedWeatherData);
          console.log(forecastData);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchForecastData();
  }, [city]);

  return { loading, forecastData };
}
