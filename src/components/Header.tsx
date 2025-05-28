"use client";

import { useWeatherStore } from "@/store/useWeatherStore";
import Icon from "./Icon";
import { IconSize } from "@/enums/IconSize";
import { CloudSun } from "lucide-react";
import SearchBar from "./SearchBar";
import Switch from "./Switch";

export default function Header() {
  const { city, setCity, isMetric, toggleUnit } = useWeatherStore();

  return (
    <header className="flex flex-col items-center md:flex-row gap-3 py-3 sm:px-4 bg-foreground">
      <h1 className="flex items-center gap-2 text-xl text-primary font-bold whitespace-nowrap">
        <Icon icon={CloudSun} size={IconSize.LG} className="text-yellow-500" />
        Weather Dashboard
      </h1>

      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
        <SearchBar city={city} setCity={setCity} />
        <Switch
          isOn={isMetric}
          onToggle={toggleUnit}
          labelOn="°C"
          labelOff="°F"
        />
      </div>
    </header>
  );
}
