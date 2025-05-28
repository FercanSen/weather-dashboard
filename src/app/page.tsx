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
    <main className="min-h-screen flex flex-col">
      <Header />
      {isLoading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <EmptyComp
          message="Failed to fetch weather."
          isError
          className="text-red-500 text-center mt-4"
        />
      )}
      <div className="flex justify-center px-4 py-6">
        {!queryCity ? (
          <EmptyComp message="Search for a city to view the weather." />
        ) : (
          data && <WeatherCard data={data} isMetric={isMetric} />
        )}
      </div>
    </main>
  );
}
