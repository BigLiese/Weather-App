import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Flex, Spin } from "antd";
import { fetchCurrentWeather } from "../../api/weatherService";
import CityPage from "../../components/CityPage";
import "../../index.css";
import NotFoundPage from "./../NotFoundPage";

const Home = () => {
  const { city } = useParams();
  // console.log(city);
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
