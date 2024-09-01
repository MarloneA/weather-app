import Navigation from "./navigation";
import ForeCast from "../widgets/forecast";
import WeatherInfo from "../widgets/weather-info";

export default function Main() {
  return (
    <section className="w-[72%] h-full bg-blue-400 bg-opacity-25 p-8">
      <Navigation />
      <ForeCast />
      <WeatherInfo />
    </section>
  );
}
