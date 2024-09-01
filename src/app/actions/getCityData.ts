import { NextResponse } from "next/server";

export async function getCityData(city: string, units: string) {
  try {
    // Get weather data
    const weatherResponse = await fetch(
      `http://${process.env.apiUrl}/api/weather?city=${city}&units=${units}`,
      {
        method: "GET",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    );
    const weatherData = await weatherResponse.json();

    return NextResponse.json(weatherData);
  } catch (error) {
    return NextResponse.error();
  }
}
