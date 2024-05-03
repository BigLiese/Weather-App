import React from "react";
import data from "../../data/cities.json";
import routeConfig from "../../routes/routeConfig";

const app = () => {
  return <div>{routeConfig(data)}</div>;
};

export default app;
