import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Spin } from "antd";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import CityPage from "../../components/CityPage";
import "../../index.css";
import NotFoundPage from "./../NotFoundPage";

const Home = ({ city }) => {
  const { loading, weatherDetails } = useFetchWeather(city);

  return (
    <div>
      <Flex gap="middle" vertical align="center">
        {loading ? (
          <Spin size="large" />
        ) : weatherDetails ? (
          <>
            <CityPage weatherDetails={weatherDetails} />
            <Outlet />
          </>
        ) : (
          <NotFoundPage />
        )}
      </Flex>
    </div>
  );
};

export default Home;
