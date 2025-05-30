import { ForecastItem } from "@/types/ForecastData";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import Icon from "./Icon";
import { IconSize } from "@/enums/IconSize";
import { Droplet, Wind } from "lucide-react";

interface ForecastCardProps {
  item: ForecastItem;
  isMetric: boolean;
}

export default function ForecastCard({ item, isMetric }: ForecastCardProps) {
  const WeatherIcon = getWeatherIcon(item.weather[0].description);
  const unit = isMetric ? "°C" : "°F";
  const date = new Date(item.dt * 1000).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow p-3 text-center text-black space-y-3 w-full sm:w-auto">
      <h3 className="text-sm font-medium">{date}</h3>
      <div className="flex items-center justify-center gap-2">
        <Icon icon={WeatherIcon} size={IconSize.LG} />
        <p>
          {item.main.temp}
          {unit}
        </p>
      </div>
      <p className="capitalize">{item.weather[0].description}</p>

      <hr className="border-t border-gray-300" />
      <div className="flex flex-col">
        <div className="flex items-center justify-center sm:justify-start gap-1">
          <Icon icon={Droplet} size={IconSize.LG} />
          <span>Humidity: {item.main.humidity}%</span>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-1">
          <Icon icon={Wind} size={IconSize.LG} />
          <span>
            Wind: {item.wind.speed} {isMetric ? "m/s" : "mph"}
          </span>
        </div>
      </div>
    </div>
  );
}
