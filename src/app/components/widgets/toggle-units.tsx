"use client";

import React, { useContext, useState } from "react";
import { CityDataContext } from "../../context/CityDataContext";
import { getCityData } from "../../actions/getCityData";

export default function ToggleUnits() {
  const [error, setError] = useState("");
  const { setCityData, currentCity, units, setUnits } =
    useContext(CityDataContext);

  const handleUnitChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnits(event.target.value as "metric" | "imperial");

    try {
      const response = await getCityData(currentCity, event.target.value);
      if (response.ok) {
        const data = await response.json();
        setCityData(data);
        setUnits(event.target.value);
      } else {
        throw new Error(
          "could not get city, please check correct city spelling"
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="btn-group btn-group-scrollable">
      <input
        type="radio"
        name="options"
        value="metric"
        checked={units === "metric"}
        onChange={handleUnitChange}
        className="btn !bg-[#688fc096]"
        data-content="&deg;C"
      />
      <input
        type="radio"
        name="options"
        value="imperial"
        checked={units === "imperial"}
        onChange={handleUnitChange}
        className="btn !bg-[#688fc096]"
        data-content="&deg;F"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
