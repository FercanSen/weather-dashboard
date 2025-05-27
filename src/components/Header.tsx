"use client";

import { useWeatherStore } from "@/store/useWeatherStore";
import Icon from "./Icon";
import { IconSize } from "@/enums/IconSize";
import { CloudSun } from "lucide-react";
import SearchBar from "./SearchBar";
import Switch from "./Switch";

interface HeaderProps {
  onSearch: () => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const { city, setCity, isMetric, toggleUnit } = useWeatherStore();

  return (
    <header className="flex justify-between items-center gap-6 py-3 px-4 bg-foreground">
      <h1 className="flex items-center gap-2 text-xl text-primary font-bold whitespace-nowrap">
        <Icon icon={CloudSun} size={IconSize.LG} className="text-yellow-500" />
        Weather Dashboard
      </h1>

      <SearchBar city={city} setCity={setCity} onSearch={onSearch} />

      <Switch
        isOn={isMetric}
        onToggle={toggleUnit}
        labelOn="°C"
        labelOff="°F"
      />
    </header>
  );
}
