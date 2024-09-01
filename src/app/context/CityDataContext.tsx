"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

type UnitType = "metric" | "imperial";

type CityDataContextType = {
  currentCity: string;
  cityData: any;
  units: UnitType;
  setUnits: (unit: UnitType) => void;
  setCityData: (data: any) => void;
  setCurrentCity: (currentCity: string) => void;
};

export const CityDataContext = createContext<CityDataContextType | null>(null);

export function CityDataProvider({ children }: { children: ReactNode }) {
  const [cityData, setCityData] = useState<any>(null);
  const [currentCity, setCurrentCity] = useState<any>("nairobi");
  const [units, setUnits] = useState<"metric" | "imperial">("metric");

  useEffect(() => {
    const fetchInitialCityData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/weather`);
        const data = await response.json();
        setCityData(data);
      } catch (error) {
        console.error("Failed to fetch initial city data", error);
      }
    };

    fetchInitialCityData();
  }, []);

  return (
    <CityDataContext.Provider
      value={{
        cityData,
        units,
        currentCity,
        setCurrentCity,
        setUnits,
        setCityData,
      }}
    >
      {children}
    </CityDataContext.Provider>
  );
}
