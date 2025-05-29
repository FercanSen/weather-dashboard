import { create } from "zustand";
interface WeatherState {
  city: string;
  setCity: (city: string) => void;
  queryCity: string;
  setQueryCity: (queryCity: string) => void;
  isMetric: boolean;
  toggleUnit: () => void;
  setIsMetric: (value: boolean) => void;
  history: string[];
  addToHistory: (city: string) => void;
  setHistory: (history: string[]) => void;
  removeFromHistory: (city: string) => void;
  clearHistory: () => void;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  city: "",
  setCity: (city) => set({ city }),
  queryCity: "",
  setQueryCity: (queryCity) => set({ queryCity }),
  isMetric: true,
  setIsMetric: (value) => {
    localStorage.setItem("isMetric", value.toString());
    set({ isMetric: value });
  },
  toggleUnit: () =>
    set((state) => {
      const newValue = !state.isMetric;
      localStorage.setItem("isMetric", newValue.toString());
      return { isMetric: newValue };
    }),
  hasHydrated: false,
  setHasHydrated: (value) => set({ hasHydrated: value }),
  history: [],
  setHistory: (history) => set({ history }),
  addToHistory: (city) =>
    set((state) => {
      const newHistory = [
        city,
        ...state.history.filter((c) => c !== city),
      ].slice(0, 5);
      localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
      return { history: newHistory };
    }),
  removeFromHistory: (city) =>
    set((state) => {
      const newHistory = state.history.filter((item) => item !== city);
      localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
      return { history: newHistory };
    }),
  clearHistory: () => {
    localStorage.removeItem("weatherHistory");
    set({ history: [] });
  },
}));
