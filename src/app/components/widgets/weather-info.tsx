"use client";

import { useContext } from "react";
import { CityDataContext } from "../../context/CityDataContext";
import ReactSpeedometer from "react-d3-speedometer";

export default function WeatherInfo() {
  const { cityData } = useContext(CityDataContext);

  return (
    <div className="flex w-1/2">
      <div className="card max-w-[34rem] bg-[#ffffff2e] m-2 flex justify-items-center items-center text-white">
        <div className="card-body text-left">Wind Status</div>
        <div className="text-2xl font-extralight">
          {cityData?.current?.wind_speed}km/h
        </div>
        <div className="card-body">
          <ReactSpeedometer
            height={180}
            maxValue={20}
            value={cityData?.current?.wind_speed}
            needleColor="red"
            startColor="green"
            maxSegmentLabels={5}
            segments={1000}
            endColor="red"
            textColor="white"
          />
        </div>
      </div>
      <div className="card max-w-[34rem] max-h-96 bg-[#ffffff2e] m-2 flex justify-items-center items-center text-white">
        <div className="card-body">Humidity</div>
        <div className="text-2xl font-extralight">
          {cityData?.current?.humidity}%
        </div>
        <div className="card-body">
          <progress
            className="progress progress-flat-primary ml-2"
            value={cityData?.current?.humidity}
            max="100"
          ></progress>
          <div className="flex text-xs font-thin mt-[-8px]">
            <div className=" w-10 h-8 ">0</div>
            <div className=" w-10 h-8">25</div>
            <div className=" w-10 h-8">50</div>
            <div className="left w-10 h-8">75</div>
            <div className="left w-10 h-8">100</div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin">{cityData?.current?.uvi} - uvi</div>
            <div className="font-thin">
              {cityData?.current?.clouds} - clouds
            </div>
            <div className="font-thin">
              {cityData?.current?.pressure} - pressure
            </div>
            <div className="font-thin">
              {cityData?.current?.dew_point} - dew point
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
