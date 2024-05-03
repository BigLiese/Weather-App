import React from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import CityPage from "../CityPage/CityPage";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { Spin } from "antd";
import { useCityContext } from "./../../hooks/useContext/context";

const MainPage = () => {
  const city = useCityContext();
  const { loading, weatherDetails } = useFetchWeather(city);
  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : weatherDetails ? (
        <div className="container">
          <CityPage weatherDetails={weatherDetails} />
          <HourlyForecast />
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default MainPage;
