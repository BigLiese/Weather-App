import React from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import data from "../data/cities.json";
const Header = () => {
  const navigate = useNavigate();

  const handleCitySelect = (value) => {
    const data = value.toLowerCase();
    navigate(data);
  };

  return (
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
  );
};

export default Header;
