"use client";

type WeatherCondition =
  | "sunny"
  | "clear-night"
  | "partlycloudy"
  | "cloudy"
  | "fog"
  | "hail"
  | "rainy"
  | "snowy"
  | "snowy-rainy"
  | "pouring"
  | "lightning"
  | "lightning-rainy"
  | "windy"
  | "windy-variant";

enum OpenWeatherCodes {
  RAINY = "Rain",
  CLOUDS = "Clouds",
  THUNDERSTORM = "ThunderStorm",
  DRIZZLE = "Drizzle",
  SNOW = "Snow",
  ATMOSPHERE = "Atmosphere",
  CLEAR = "Clear",
}

import { WeatherSvg } from "weather-icons-animated";
export default function Weather({
  condition,
  width = 100,
  height = 100,
}: {
  condition: WeatherCondition;
  width?: number;
  height?: number;
}) {
  switch (condition) {
    case OpenWeatherCodes.RAINY:
      condition = "rainy";
      break;
    case OpenWeatherCodes.CLOUDS:
      condition = "cloudy";
      break;
    case OpenWeatherCodes.CLEAR:
      condition = "sunny";
      break;
    case OpenWeatherCodes.DRIZZLE:
      condition = "rainy";
      break;
    case OpenWeatherCodes.THUNDERSTORM:
      condition = "lightning";
      break;

    default:
      break;
  }
  return <WeatherSvg state={condition} width={width} height={height} />;
}
