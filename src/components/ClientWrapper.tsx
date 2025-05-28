"use client";

import { useHydrateWeatherStore } from "@/hooks/useHydrateWeatherStore";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useHydrateWeatherStore();
  return <>{children}</>;
}
