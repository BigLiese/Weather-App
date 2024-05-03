import { createContext, useContext } from "react";

export const CityContext = createContext();

export function useCityContext() {
  const city = useContext(CityContext);

  if (city === undefined) {
    throw new Error("useCityContext must be used with a CityContext");
  }

  return city;
}
