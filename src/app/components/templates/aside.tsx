"use client";

import { useContext } from "react";
import { CityDataContext } from "../../context/CityDataContext";
import Weather from "../_ui/weather";
import Metadata from "../widgets/metadata";

export default function Aside() {
  const { cityData, units } = useContext(CityDataContext);

  return (
    <aside className="flex flex-col justify-evenly items-center w-1/3 h-full bg-blue-500 bg-opacity-25">
      <Weather
        width={300}
        height={300}
        condition={cityData?.current?.weather[0]?.main}
      />
      <Metadata data={cityData} units={units} />
    </aside>
  );
}
