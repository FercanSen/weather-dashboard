import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  CloudRainWind,
  CloudLightning,
  Snowflake,
  Droplets,
  SunDim,
  Wind,
  Tornado,
  Mountain,
  CloudFog,
  LucideIcon,
  Cloudy,
} from "lucide-react";

const weatherIconMap: Record<string, LucideIcon> = {
  "clear sky": Sun,

  // Clouds
  "few clouds": CloudSun,
  "scattered clouds": Cloud,
  "broken clouds": Cloudy,
  "overcast clouds": Cloud,

  // Rain
  "light rain": CloudDrizzle,
  "moderate rain": CloudRain,
  "heavy intensity rain": CloudRain,
  "very heavy rain": CloudRain,
  "extreme rain": CloudRain,
  "freezing rain": CloudSnow,
  "light intensity shower rain": CloudDrizzle,
  "shower rain": CloudDrizzle,
  "heavy intensity shower rain": CloudRainWind,
  "ragged shower rain": CloudRainWind,

  // Thunderstorm
  "thunderstorm with light rain": CloudLightning,
  "thunderstorm with rain": CloudLightning,
  "thunderstorm with heavy rain": CloudLightning,
  "light thunderstorm": CloudLightning,
  thunderstorm: CloudLightning,
  "heavy thunderstorm": CloudLightning,
  "ragged thunderstorm": CloudLightning,
  "thunderstorm with light drizzle": CloudLightning,
  "thunderstorm with drizzle": CloudLightning,
  "thunderstorm with heavy drizzle": CloudLightning,

  // Snow
  "light snow": Snowflake,
  snow: Snowflake,
  "heavy snow": Snowflake,
  sleet: CloudSnow,
  "light shower sleet": CloudSnow,
  "shower sleet": CloudSnow,
  "light rain and snow": CloudSnow,
  "rain and snow": CloudSnow,
  "light shower snow": CloudSnow,
  "shower snow": CloudSnow,
  "heavy shower snow": CloudSnow,

  // Atmosphere
  mist: Droplets,
  haze: SunDim,
  "sand/dust whirls": Wind,
  fog: CloudFog,
  sand: Wind,
  dust: Wind,
  "volcanic ash": Mountain,
  squalls: Wind,
  tornado: Tornado,
};

export function getWeatherIcon(description: string): LucideIcon {
  return weatherIconMap[description.toLowerCase()] ?? CloudSun;
}
