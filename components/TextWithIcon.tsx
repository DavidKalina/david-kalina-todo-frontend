import * as LucideIcons from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

// Exclude non-icon exports from Lucide
type IconName = Exclude<keyof typeof LucideIcons, "createLucideIcon" | "default">;

const textWithIconVariants = cva("flex items-center gap-2 font-bold", {
  variants: {
    size: {
      sm: "text-sm",
      default: "text-2xl",
      lg: "text-3xl",
      xl: "text-4xl",
    },
    colorScheme: {
      default: "",
      gradient: "bg-gradient-to-r from-[#4EA8DE] to-[#5E60CE] bg-clip-text text-transparent",
      blue: "text-[#4EA8DE]",
      purple: "text-[#5E60CE]",
    },
  },
  defaultVariants: {
    size: "default",
    colorScheme: "default",
  },
});

type TextSize = NonNullable<VariantProps<typeof textWithIconVariants>["size"]>;

const sizeMap: Record<TextSize, number> = {
  sm: 16,
  default: 24,
  lg: 28,
  xl: 32,
};

interface TextWithIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textWithIconVariants> {
  icon?: IconName;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  firstText?: string;
  secondText?: string;
}

const TextWithIcon = ({
  className,
  icon = "Rocket",
  iconPosition = "left",
  iconClassName,
  firstText = "Todo",
  secondText = "App",
  size = "default",
  colorScheme,
  ...props
}: TextWithIconProps) => {
  // Type assertion to get a valid React component
  const IconComponent = LucideIcons[icon] as React.ComponentType<LucideProps>;

  const iconElement = (
    <span className="inline-flex shrink-0">
      <IconComponent
        className={cn("text-[#4EA8DE]", iconClassName)}
        size={sizeMap[size ?? "default"]}
      />
    </span>
  );

  return (
    <div className={cn(textWithIconVariants({ size, colorScheme }), className)} {...props}>
      {iconPosition === "left" && iconElement}
      {firstText && <span className="text-[#4EA8DE]">{firstText}</span>}
      {secondText && <span className="text-[#5E60CE]">{secondText}</span>}
      {iconPosition === "right" && iconElement}
    </div>
  );
};

export default TextWithIcon;
export type { TextWithIconProps, IconName };
