import { convertMillisecondsToTime } from "@/app/lib/utils";
import React from "react";
import Weather from "../_ui/weather";

export default function WeatherToday({ data, units }) {
  return (
    <div className="bg-[#688fc096] p-8 rounded-3xl">
      <h1 className="text-white text-2xl font-regular">Current Weather</h1>
      <h1 className="text-white text-2xl font-thin">
        {convertMillisecondsToTime(data?.current?.dt)}
      </h1>
      <Weather
        width={300}
        height={300}
        condition={data?.current?.weather[0]?.main}
      />
      <h1 className="text-white text-8xl font-bold flex flex-row align-baseline">
        {data?.current?.temp}
        {data?.current?.temp && (
          <span className=" flex flex-col">
            <span className="text-4xl font-extralight">
              &deg;{units === "metric" ? "C" : "F"}
            </span>
          </span>
        )}
      </h1>
      <h1 className="text-white text-2xl font-thin">
        {data?.current?.weather[0]?.description}
      </h1>
    </div>
  );
}
