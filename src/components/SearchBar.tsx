"use client";

import React, { useState, useRef, useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import HistoryDropdown from "./HistoryDropdown";

interface SearchBarProps {
  city: string;
  setCity: (value: string) => void;
}

export default function SearchBar({ city, setCity }: SearchBarProps) {
  const {
    history,
    setQueryCity,
    addToHistory,
    removeFromHistory,
    clearHistory,
  } = useWeatherStore();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    const trimmed = value.trim();
    if (trimmed) {
      setQueryCity(trimmed);
      addToHistory(trimmed);
    }
  };

  const handleClear = () => {
    clearHistory();
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsOpen(true);
    if (e.key === "Enter") {
      handleSearch(city);
      setIsOpen(false);
    }
  };

  const handleHistoryClick = (item: string) => {
    setCity(item);
    handleSearch(item);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="w-full md:w-1/2 px-3 transition-all duration-500 ease-in-out"
      ref={ref}
    >
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            className="w-full h-10 px-3 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-primary"
          />

          {isOpen && history.length > 0 && (
            <HistoryDropdown
              history={history}
              onSelect={handleHistoryClick}
              onClear={handleClear}
              onRemove={removeFromHistory}
            />
          )}
        </div>

        <button
          onClick={() => {
            handleSearch(city);
            setIsOpen(false);
          }}
          className="h-10 px-4 bg-primary text-white rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}
