"use client";

import { useWeatherStore } from "@/store/useWeatherStore";
import { useWeatherData } from "@/hooks/useWeatherData";
import Header from "@/components/Header";
import WeatherCard from "@/components/WeatherCard";
import EmptyComp from "@/components/EmptyComp";

export default function Home() {
  const { city, queryCity, setQueryCity, isMetric } = useWeatherStore();
  const unit = isMetric ? "metric" : "imperial";

  const handleSearch = () => {
    const trimmed = city.trim();
    if (trimmed) setQueryCity(trimmed);
  };

  const { data, isLoading, error } = useWeatherData(queryCity, unit);

  return (
    <main>
      <Header onSearch={handleSearch} />
      {isLoading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-red-500 text-center mt-4">
          Failed to fetch weather.
        </p>
      )}
      <div className="flex items-center justify-center min-h-screen bg-background">
        {!queryCity ? (
          <EmptyComp message="Search for a city to view the weather." />
        ) : (
          data && <WeatherCard data={data} isMetric={isMetric} />
        )}
      </div>
    </main>
  );
}