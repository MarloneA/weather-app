import SearchCity from "../widgets/searchcity";
import ToggleUnits from "../widgets/toggle-units";

export default function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between space-x-2 p-2 py-8">
      <SearchCity />
      <ToggleUnits />
    </nav>
  );
}
