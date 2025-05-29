"use client";

import { useHydrateMetric } from "@/hooks/useHydrateMetric";
import { useHydrateWeatherStore } from "@/hooks/useHydrateWeatherStore";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useHydrateMetric();
  useHydrateWeatherStore();
  return <>{children}</>;
}
