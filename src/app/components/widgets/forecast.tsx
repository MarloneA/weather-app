"use client";

import React, { useContext } from "react";
import Weather from "../_ui/weather";
import { dateToString } from "../../lib/utils";

import { CityDataContext } from "../../context/CityDataContext";

export default function ForeCast() {
  const { cityData, setCityData, units } = useContext(CityDataContext);

  return (
    <div className="flex flex-row">
      {cityData?.daily?.slice(1, 6).map((day, index) => (
        <button
          key={index}
          className="card bg-[#6890c069] hover:bg-[#688fc096] cursor-pointer m-2 flex justify-center items-center text-white"
          onClick={() => setCityData()}
        >
          <div className="card-body font-thin">{dateToString(day.dt)}</div>
          <Weather condition={day?.weather[0]?.main} />
          <div className="flex flex-row align-baseline card-footer text-2xl font-extralight">
            {day?.temp?.min} - {day?.temp?.max}
            {day?.temp?.min && (
              <span className=" flex flex-col">
                <span className="text-2xl">
                  &deg;{units === "metric" ? "C" : "F"}
                </span>
              </span>
            )}
          </div>
          <div className="text-left text-xl font-thin">
            {day?.weather[0].main}
          </div>
          <div className="card-body text-center text-sm ">{day?.summary}</div>
        </button>
      ))}
    </div>
  );
}
