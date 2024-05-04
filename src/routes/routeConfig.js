import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import NotFoundPage from "../pages/NotFoundPage";

const routeConfig = (data) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {data.cities.map((city) => (
          <Route
            key={city.name}
            path={city.name.toLowerCase()}
            element={<Home />}
          />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default routeConfig;
