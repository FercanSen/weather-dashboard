import React from "react";
import { LucideIcon } from "lucide-react";
import { IconSize } from "@/enums/IconSize";
import classNames from "classnames";

interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = IconSize.MD, className }) => {
  const sizeClass = `w-${size} h-${size}`;
  return <IconComponent className={classNames(sizeClass, className)} />;
};

export default Icon;