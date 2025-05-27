import { useQuery } from "@tanstack/react-query";
import { WeatherData } from "@/types/WeatherData";

export const useWeatherData = (
  queryCity: string,
  unit: "metric" | "imperial"
) => {
  return useQuery<WeatherData>({
    queryKey: ["weather", queryCity, unit],
    queryFn: async () => {
      const res = await fetch(`/api/weather?city=${queryCity}&unit=${unit}`);
      if (!res.ok) throw new Error("City not found or API error");
      return res.json();
    },
    enabled: !!queryCity,
  });
};
