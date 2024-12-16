import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO Flesh out variants.

const textWithBadgeVariants = cva("flex items-center gap-2 font-medium", {
  variants: {
    variant: {
      default: "text-zinc-50",
      muted: "text-zinc-400",
      accent: "text-blue-500",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-[8px] py-[2px] text-xs font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        default: "bg-[#333333] text-white ring-zinc-800/50",
        muted: "bg-zinc-900/50 text-zinc-500 ring-zinc-800/50",
        accent: "bg-blue-500/10 text-blue-500 ring-blue-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TextWithBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textWithBadgeVariants> {
  text: string;
  count: number;
  total?: number;
}

const TextWithBadge = React.forwardRef<HTMLDivElement, TextWithBadgeProps>(
  ({ text, count, total, variant, size, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(textWithBadgeVariants({ variant, size, className }))} {...props}>
        {text}
        <span className={cn(badgeVariants({ variant }))}>
          {count}
          {total && `/${total}`}
        </span>
      </div>
    );
  }
);

TextWithBadge.displayName = "TextWithBadge";

export { TextWithBadge, textWithBadgeVariants, badgeVariants };
export type { TextWithBadgeProps };
