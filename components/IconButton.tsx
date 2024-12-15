import React, { forwardRef } from "react";
import { type ButtonProps, Button } from "./Button";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Only include the actual icon components
type IconName = Exclude<keyof typeof LucideIcons, "createLucideIcon" | "default">;

interface IconButtonProps extends Omit<ButtonProps, "children"> {
  text: string;
  icon: IconName;
  iconPosition?: "leading" | "trailing";
}

type ButtonSize = NonNullable<ButtonProps["size"]>;

const sizeMap: Record<ButtonSize, number> = {
  sm: 14,
  default: 16,
  lg: 20,
  icon: 16,
};

const getIconSize = (size: ButtonProps["size"] = "default"): number => {
  return sizeMap[size || "default"];
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ text, icon, iconPosition = "leading", className, size = "default", ...props }, ref) => {
    // Type assertion to ensure we get a valid React component
    const IconComponent = LucideIcons[icon] as React.ComponentType<LucideProps>;
    const iconSize = getIconSize(size);

    const iconElement = (
      <span className="inline-flex shrink-0">
        <IconComponent size={iconSize} />
      </span>
    );

    return (
      <Button ref={ref} className={cn("gap-2", className)} size={size} {...props}>
        {iconPosition === "leading" && iconElement}
        {text}
        {iconPosition === "trailing" && iconElement}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
export type { IconButtonProps, IconName };
