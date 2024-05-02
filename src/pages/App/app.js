import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Select, Flex } from "antd";
import Home from "../Home/home";
import NotFoundPage from "../NotFoundPage";

const App = () => {
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
  const currentCity = useParams();
  console.log(currentCity);
  const [city, setCity] = useState(localStorage.getItem("city") || "guangzhou");

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);
  const handleCitySelect = (value) => {
    const data = value.toLowerCase();
    setCity(data);
    navigate(data);
  };

  return (
    <div>
      <Flex gap="middle" vertical align="center">
        <div className="selector">
          <span className="select">Check the weather in </span>
          <Select
            defaultValue={"Guangzhou"}
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
      </Flex>
      <Routes>
        <Route path="/">
          <Route index element={<Home city="guangzhou" />} />
          {cities.map((city) => (
            <Route
              key={city.name}
              path={city.name.toLowerCase()}
              element={<Home city={city.name.toLowerCase()} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
