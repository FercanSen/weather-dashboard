"use client";

import { IconSize } from "@/enums/IconSize";
import Icon from "./Icon";
import { Search, SearchX } from "lucide-react";
import classNames from "classnames";

interface EmptyCompProps {
  message: string;
  isError?: boolean;
  className?: string;
}

export default function EmptyComp({
  message,
  isError,
  className,
}: EmptyCompProps) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center gap-2 text-lg",
        isError ? "text-destructive" : "text-accentLight",
        className
      )}
    >
      {isError ? (
        <Icon icon={SearchX} size={IconSize.XXL} />
      ) : (
        <Icon icon={Search} size={IconSize.XXL} />
      )}
      {message}
    </div>
  );
}
