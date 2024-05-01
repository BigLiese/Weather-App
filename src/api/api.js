import axios from "axios";
import { Link } from "react-router-dom";

const api = "https://api.openweathermap.org/data/2.5";
const API_KEY = "0149b04ba2272a05d8732fa92da78c8b";

const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `${api}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    <Link to="./NotFoundPage.js" />;
  }
};

const fetchWeatherForecast = async (city) => {
  try {
    const response = await axios.get(
      `${api}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data.list;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchCurrentWeather, fetchWeatherForecast };
