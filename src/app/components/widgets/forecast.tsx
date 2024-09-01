"use client";

import React, { useContext } from "react";
import Weather from "../_ui/weather";
import { dateToString } from "../../lib/utils";

import { CityDataContext } from "../../context/CityDataContext";

export default function ForeCast() {
  const { cityData, units } = useContext(CityDataContext);

  return (
    <div className="flex flex-row">
      {cityData?.daily?.slice(0, 3).map((day, index) => (
        <div
          key={index}
          className="card bg-[#ffffff2e] m-2 flex justify-center items-center text-white"
        >
          <div className="card-body">{dateToString(day.dt)}</div>
          <div className="card-body">
            <Weather condition={day?.weather[0]?.main} />
          </div>
          <div className="flex flex-row align-baseline card-body text-2xl">
            {day?.temp?.min} - {day?.temp?.max}
            {day?.temp?.min && (
              <span className=" flex flex-col">
                <span className="text-2xl">
                  &deg;{units === "metric" ? "C" : "F"}
                </span>
              </span>
            )}
          </div>
          <div className="card-body text-center text-2xl">{day?.summary}</div>
        </div>
      ))}
    </div>
  );
}
