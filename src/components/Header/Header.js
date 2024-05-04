import React, { useState } from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import data from "../../data/cities.json";
import MainPage from "../Main/MainPage";
import { CityContext } from "../../hooks/useContext/context";

const Header = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("guangzhou");

  const handleCitySelect = (value) => {
    const selectedCity = value.toLowerCase();
    setCity(selectedCity);
    navigate(selectedCity);
  };

  return (
    <div>
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
      <CityContext.Provider value={city}>
        <MainPage />
      </CityContext.Provider>
    </div>
  );
};

export default Header;
