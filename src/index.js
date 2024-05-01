import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CityPage from "./components/CityPage";
import "./index.css";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "guangzhou",
        element: <CityPage />,
      },
      {
        path: "beijing",
        element: <CityPage />,
      },
      {
        path: "shanghai",
        element: <CityPage />,
      },
      {
        path: "shenzhen",
        element: <CityPage />,
      },
      {
        path: "changsha",
        element: <CityPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
