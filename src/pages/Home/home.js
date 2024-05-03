import React from "react";
import { Flex, Spin } from "antd";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import CityPage from "../../components/CityPage";
import Header from "../../components/Header";
import "../../index.css";
import NotFoundPage from "../NotFoundPage";
import HourlyForecast from "../../components/HourlyForecast";

const Home = ({ city }) => {
  const { loading, weatherDetails } = useFetchWeather(city);

  return (
    <div>
      <Flex gap="middle" vertical align="center">
        <Header />
        {loading ? (
          <Spin size="large" />
        ) : weatherDetails ? (
          <div className="container">
            <CityPage weatherDetails={weatherDetails} />
            <HourlyForecast city={weatherDetails.name} />
          </div>
        ) : (
          <NotFoundPage />
        )}
      </Flex>
    </div>
  );
};

export default Home;
