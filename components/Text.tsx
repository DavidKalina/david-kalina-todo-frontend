import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-900 dark:text-gray-100",
      muted: "text-gray-500 dark:text-gray-400",
      ghost: "text-gray-400 dark:text-gray-500",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    weight: "normal",
    align: "left",
  },
});

type TextProps<C extends ElementType> = {
  as?: C;
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof textVariants> &
  Omit<ComponentPropsWithoutRef<C>, "as" | "className">;

const Text = <C extends ElementType = "p">({
  className,
  variant,
  size,
  weight,
  align,
  as,
  children,
  ...props
}: TextProps<C>) => {
  const Component = as || "p";

  return (
    <Component
      className={cn(
        textVariants({
          variant,
          size,
          weight,
          align,
          className,
        })
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Text, type TextProps, textVariants };
