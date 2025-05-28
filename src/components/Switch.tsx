"use client";

import React from "react";

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
  labelOn?: string;
  labelOff?: string;
}

export default function Switch({
  isOn,
  onToggle,
  labelOn,
  labelOff,
}: SwitchProps) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={isOn}
      className={`relative inline-flex items-center flex-shrink-0 h-8 w-[80px] rounded-full px-1 transition-colors duration-300 ${
        isOn ? "bg-primary" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute left-5 text-xs font-semibold text-black z-10 select-none pointer-events-none transition-opacity duration-200 ${
          isOn ? "opacity-100" : "opacity-0"
        }`}
      >
        {labelOn}
      </span>

      <span
        className={`absolute right-5 text-xs font-semibold text-black z-10 select-none pointer-events-none transition-opacity duration-200 ${
          !isOn ? "opacity-100" : "opacity-0"
        }`}
      >
        {labelOff}
      </span>

      {/* Knob */}
      <span
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-12" : "translate-x-0"
        }`}
      />
    </button>
  );
}
