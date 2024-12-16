import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO Flesh out variants.

const textVariants = cva(
  // Base styles that apply to all variants
  "font-bold text-sm", // text-sm is 14px in Tailwind
  {
    variants: {
      variant: {
        default: "text-[#4EA8DE]",
        secondary: "text-[#8284FA]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = ({ className, variant, ...props }: TextProps) => {
  return <p className={cn(textVariants({ variant, className }))} {...props} />;
};

export { Text, textVariants };
