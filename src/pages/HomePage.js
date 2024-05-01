import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Select, Divider, Flex, Spin, Alert } from "antd";
import { fetchCurrentWeather } from "../api/api";
import CityPage from "../components/CityPage";
import "../index.css";

const HomePage = () => {
  const cities = [
    {
      id: 1809858,
      name: "Guangzhou",
    },
    {
      id: 1816670,
      name: "Beijing",
    },
    {
      id: 1796236,
      name: "Shanghai",
    },
    {
      id: 1795565,
      name: "Shenzhen",
    },
    {
      id: 1796989,
      name: "Changsha",
    },
  ];
  const navigate = useNavigate();
  const [currentCity, setCurrentCity] = useState("guangzhou");
  const [loading, setLoading] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather(currentCity);
        const { weather, main, wind, name } = data;
        setWeatherDetails({ weather, main, wind, name });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentCity]);

  const handleCitySelect = (value) => {
    const data = value.toLowerCase();
    setWeatherDetails(null);
    setLoading(true);
    setCurrentCity(data);
    navigate(data);
    console.log(currentCity);
  };

  return (
    <div>
      <Flex gap="middle" vertical align="center">
        <div className="selector">
          <span className="select">Check the weather in </span>
          <Select
            defaultValue="Guangzhou"
            style={{
              width: 120,
            }}
            onChange={handleCitySelect}
            options={cities.map((city) => ({
              value: city.name,
              label: city.name,
            }))}
          />
        </div>
        {loading ? (
          <Spin size="large" />
        ) : weatherDetails ? (
          <>
            <CityPage weatherDetails={weatherDetails} />
            <Outlet />
          </>
        ) : (
          <Alert message="Weather data not found" type="error" />
        )}
        <Divider />
      </Flex>
    </div>
  );
};

export default HomePage;
