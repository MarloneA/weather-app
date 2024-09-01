"use client";

import { useContext } from "react";
import { CityDataContext } from "../../context/CityDataContext";

export default function WeatherInfo() {
  const { cityData } = useContext(CityDataContext);

  return (
    <div className="flex w-full">
      <div className="card max-w-[34rem] bg-[#ffffff2e] m-2 flex justify-items-center items-center text-white">
        <div className="card-body">Wind Status</div>
        <div className="card-body">{cityData?.current?.wind_speed}km/h</div>
        <div className="card-body"></div>
      </div>
      <div className="card max-w-[34rem] bg-[#ffffff2e] m-2 flex justify-items-center items-center text-white">
        <div className="card-body">Humidity</div>
        <div className="card-body">{cityData?.current?.humidity}%</div>
        <div className="card-body"></div>
      </div>
    </div>
  );
}
