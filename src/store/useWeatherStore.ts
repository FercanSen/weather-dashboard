import { create } from "zustand";

interface WeatherState {
  city: string;
  setCity: (city: string) => void;
  queryCity: string;
  setQueryCity: (queryCity: string) => void;
  isMetric: boolean;
  toggleUnit: () => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  city: "",
  setCity: (city) => set({ city }),
  queryCity: "",
  setQueryCity: (queryCity) => set({ queryCity }),
  isMetric: true,
  toggleUnit: () => set((state) => ({ isMetric: !state.isMetric })),
}));
