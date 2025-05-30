import { ForecastApiResponse, ForecastItem } from "@/types/ForecastData";

export async function getFiveDayForecast(
  city: string,
  unit: string
): Promise<ForecastItem[]> {
  const res = await fetch(`/api/forecast?city=${city}&unit=${unit}`);
  if (!res.ok) {
    throw new Error("Failed to fetch forecast.");
  }

  const data: ForecastApiResponse = await res.json();

  const dailyForecastMap = new Map<string, ForecastItem>();

  for (const item of data.list) {
    const date = item.dt_txt.split(" ")[0];
    const hour = item.dt_txt.split(" ")[1];
    if (hour === "12:00:00" && !dailyForecastMap.has(date)) {
      dailyForecastMap.set(date, item);
    }
  }

  return Array.from(dailyForecastMap.values()).slice(0, 5);
}
