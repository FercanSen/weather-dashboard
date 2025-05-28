import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";

export function useHydrateWeatherStore() {
  useEffect(() => {
    const stored = localStorage.getItem("weatherHistory");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          useWeatherStore.getState().setHistory(parsed);
        }
      } catch {
        localStorage.removeItem("weatherHistory");
      }
    }
  }, []);
}
