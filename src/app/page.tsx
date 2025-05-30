"use client";

import { useWeatherStore } from "@/store/useWeatherStore";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";

import dynamic from "next/dynamic";
import { useForecastData } from "@/hooks/useForecastData";
import ForecastCard from "@/components/ForecastCard";
import WeatherCard from "@/components/WeatherCard";
import { useWeatherData } from "@/hooks/useWeatherData";

const EmptyComp = dynamic(() => import("@/components/EmptyComp"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export default function Home() {
  const { queryCity, isMetric } = useWeatherStore();
  const unit = isMetric ? "metric" : "imperial";

  const { data, isLoading, error } = useWeatherData(queryCity, unit);
  const {
    data: forecast,
    isLoading: isForecastLoading,
    error: forecastError,
  } = useForecastData(queryCity, unit);

  const fetchError = [error?.message, forecastError?.message].filter(
    Boolean
  ) as string[];

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 justify-center items-center px-4 py-6">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <EmptyComp
            message={fetchError}
            isError
            className="text-destructive text-center mt-4"
          />
        ) : !queryCity ? (
          <EmptyComp message="Search for a city to view the weather." />
        ) : (
          data && (
            <div className="flex flex-col gap-6 w-full items-center">
              <WeatherCard data={data} isMetric={isMetric} />

              {isForecastLoading ? (
                <LoadingSpinner />
              ) : forecastError ? (
                <EmptyComp
                  message="Failed to load forecast."
                  isError
                  className="text-destructive"
                />
              ) : (
                forecast && (
                  <div className="text-black">
                    5 day weather forecast
                    <hr className="border-t my-2 border-gray-300" />
                    <div className="flex flex-wrap gap-4 justify-center">
                      {forecast.map((item) => (
                        <ForecastCard
                          key={item.dt}
                          item={item}
                          isMetric={isMetric}
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )
        )}
      </div>
    </main>
  );
}
