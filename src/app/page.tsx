"use client";

import { useWeatherStore } from "@/store/useWeatherStore";
import { useWeatherData } from "@/hooks/useWeatherData";
import Header from "@/components/Header";
import WeatherCard from "@/components/WeatherCard";
import EmptyComp from "@/components/EmptyComp";

export default function Home() {
  const { queryCity, isMetric } = useWeatherStore();
  const unit = isMetric ? "metric" : "imperial";

  const { data, isLoading, error } = useWeatherData(queryCity, unit);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {isLoading && <p className="text-center text-black mt-4">Loading...</p>}

      <div className="flex flex-1 justify-center items-center px-4 py-6">
        {error && (
          <EmptyComp
            message="Failed to fetch weather."
            isError
            className="text-destructive text-center mt-4"
          />
        )}
        {!queryCity ? (
          <EmptyComp message="Search for a city to view the weather." />
        ) : (
          data && <WeatherCard data={data} isMetric={isMetric} />
        )}
      </div>
    </main>
  );
}
