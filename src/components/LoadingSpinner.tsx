"use client";

import { LoaderCircle } from "lucide-react";
import classNames from "classnames";

interface LoadingSpinnerProps {
  message?: string;
  className?: string;
  iconClassName?: string;
  iconOnly?: boolean;
}

export default function LoadingSpinner({
  message = "Loading...",
  className,
  iconClassName,
  iconOnly,
}: LoadingSpinnerProps) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-2 text-accentLight",
        className
      )}
    >
      <LoaderCircle
        className={classNames("h-8 w-8 animate-spin", iconClassName)}
      />
      {!iconOnly && <p className="text-lg font-medium">{message}</p>}
    </div>
  );
}
