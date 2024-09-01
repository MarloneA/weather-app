"use client";

import { useContext } from "react";
import { CityDataContext } from "../../context/CityDataContext";
import Metadata from "../widgets/metadata";
import WeatherToday from "../widgets/weather-today";

export default function Aside() {
  const { cityData, units } = useContext(CityDataContext);

  return (
    <aside className="flex flex-col justify-evenly items-center w-[28%] h-full bg-blue-500 bg-opacity-25">
      <WeatherToday data={cityData} units={units} />
      <Metadata data={cityData} />
    </aside>
  );
}
