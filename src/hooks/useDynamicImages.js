import cloudImage from "../assets/cloud.png";
import clearImage from "../assets/clear.png";
import rainImage from "../assets/rain.png";
import drizzleImage from "../assets/drizzle.png";
import sunset from "../assets/sunset.svg";
import sunrise from "../assets/sunrise.svg";
import humidity from "../assets/humidity.svg";
import temperature from "../assets/temperature.svg";
import wind from "../assets/wind.svg";

export function useDynamicImages(mainWeather) {
  let weatherImage;

  switch (mainWeather) {
    case "Clouds":
      weatherImage = cloudImage;
      break;
    case "Rain":
      weatherImage = rainImage;
      break;
    case "Clear":
      weatherImage = clearImage;
      break;
    case "Drizzle":
      weatherImage = drizzleImage;
      break;
    default:
      weatherImage = null;
      break;
  }

  return { weatherImage, sunset, sunrise, humidity, temperature, wind };
}
