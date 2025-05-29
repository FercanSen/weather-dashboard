import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";

export function useHydrateMetric() {
  const setIsMetric = useWeatherStore((state) => state.setIsMetric);
  const setHasHydrated = useWeatherStore((state) => state.setHasHydrated);

  useEffect(() => {
    const stored = localStorage.getItem("isMetric");
    if (stored !== null) {
      setIsMetric(stored === "true");
    }
    setHasHydrated(true);
  }, [setIsMetric, setHasHydrated]);
}
