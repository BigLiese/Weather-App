import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Select, Flex } from "antd";
import Home from "../Home/home";
import NotFoundPage from "../NotFoundPage";
import data from "../../data/cities.json";
const App = () => {
  const navigate = useNavigate();
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
            options={data.cities.map((city) => ({
              value: city.name,
              label: city.name,
            }))}
          />
        </div>
      </Flex>
      <Routes>
        <Route path="/">
          <Route index element={<Home city="guangzhou" />} />
          {data.cities.map((city) => (
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
