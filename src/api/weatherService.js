import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "0149b04ba2272a05d8732fa92da78c8b";

const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    <Link to="./NotFoundPage.js" />;
  }
};

const fetchWeatherForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data.list;
  } catch (error) {
    console.error(error);
    return null;
  }
};

function formatTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export {
  fetchCurrentWeather,
  fetchWeatherForecast,
  formatTimeFromTimestamp,
  iconUrlFromCode,
};
