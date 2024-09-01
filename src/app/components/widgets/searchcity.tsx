"use client";

import React, { useContext, useState } from "react";
import Input from "../_ui/input";
import Button from "../_ui/button";
import { getCityData } from "../../actions/getCityData";
import { CityDataContext } from "../../context/CityDataContext";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const { setCityData, setCurrentCity, setUnits } = useContext(CityDataContext);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      const response = await getCityData(city, "metric");
      if (response.ok) {
        const data = await response.json();
        console.log("data: ", data);
        setCityData(data);
        setCurrentCity(city);
        setUnits("metric");
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
    <div>
      <form onSubmit={handleSearch} className="flex">
        <Input
          type="text"
          placeholder="Search for location ..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">GO</Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
