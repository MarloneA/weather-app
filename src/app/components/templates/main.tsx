import Navigation from "./navigation";
import ForeCast from "../widgets/forecast";
import WeatherInfo from "../widgets/weather-info";

export default function Main() {
  return (
    <section className="w-2/3 h-full bg-blue-400 bg-opacity-25">
      <Navigation />
      <ForeCast />
      <WeatherInfo />
    </section>
  );
}
