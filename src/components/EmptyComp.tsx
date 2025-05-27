"use client";

import { IconSize } from "@/enums/IconSize";
import Icon from "./Icon";
import { Search } from "lucide-react";

interface EmptyCompProps {
  message: string;
}

export default function EmptyComp({ message }: EmptyCompProps) {
  return (
    <div className="flex items-center justify-center gap-2 min-h-screen text-accentLight text-lg">
      <Icon icon={Search} size={IconSize.XXL} />
      {message}
    </div>
  );
}
