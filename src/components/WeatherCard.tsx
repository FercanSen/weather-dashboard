import { WeatherData } from "@/types/WeatherData";
import Icon from "./Icon";
import { IconSize } from "@/enums/IconSize";
import { Droplet, Thermometer, Wind } from "lucide-react";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

interface WeatherCardProps {
  data: WeatherData;
  isMetric: boolean;
}

export default function WeatherCard({ data, isMetric }: WeatherCardProps) {
  const unit = isMetric ? "°C" : "°F";
  const WeatherIcon = getWeatherIcon(data.weather[0].description);
  return (
    <div className="bg-white text-black shadow-xl rounded-lg lg:w-1/4 h-auto p-4 space-y-3 ">
      <h2 className="text-xl font-semibold">
        {data.name}, {data.sys?.country}
      </h2>

      <hr className="border-t border-gray-300" />

      <div className="flex items-center gap-2">
        <Icon icon={WeatherIcon} size={IconSize.LG} />
        <span className="capitalize">{data.weather[0].description}</span>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Icon icon={Thermometer} size={IconSize.LG} />
          <span>
            Temp: {data.main.temp}
            {unit}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Icon icon={Droplet} size={IconSize.LG} />
          <span>Humidity: {data.main.humidity}%</span>
        </div>

        <div className="flex items-center gap-2">
          <Icon icon={Wind} size={IconSize.LG} />
          <span>
            Wind: {data.wind.speed} {isMetric ? "m/s" : "mph"}
          </span>
        </div>
      </div>
    </div>
  );
}
