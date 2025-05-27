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

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unknown error occurred");
      }

      return data;
    },
    enabled: !!queryCity,
    retry: 1,
  });
};
