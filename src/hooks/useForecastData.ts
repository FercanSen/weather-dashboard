import { useQuery } from "@tanstack/react-query";
import { getFiveDayForecast } from "@/utils/getFiveDayForecast";

export function useForecastData(city: string, unit: string) {
  return useQuery({
    queryKey: ["forecast", city, unit],
    queryFn: () => getFiveDayForecast(city, unit),
    enabled: !!city,
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
}
